// app/api/blogs/comments/route.js
// Thin proxy in front of WordPress's native /wp-json/wp/v2/comments endpoint.
//
// Why proxy instead of calling WP directly from the browser:
//  1. Keeps WORDPRESS_AUTH (if your WP is private) server-side only.
//  2. Lets us verify reCAPTCHA before anything reaches WordPress — comments
//     are one of the most common spam-bot targets on any blog.
//  3. One place to add rate-limiting/profanity filtering later if needed.
//
// WordPress-side requirement: Settings → Discussion → "Allow people to
// submit comments on new posts" must be ON, and "Users must be registered
// and logged in to comment" must be OFF. No plugin needed — anonymous
// comment creation via REST is built into WordPress core.

const WP_URL = process.env.WORDPRESS_URL || "";
const WP_AUTH = process.env.WORDPRESS_AUTH || "";

const wpHeaders = {
  "Content-Type": "application/json",
  ...(WP_AUTH ? { Authorization: `Basic ${WP_AUTH}` } : {}),
};

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get("postId");
  if (!postId) return Response.json({ error: "Missing postId" }, { status: 400 });
  if (!WP_URL) return Response.json({ comments: [] });

  try {
    const res = await fetch(
      `${WP_URL}/wp-json/wp/v2/comments?post=${postId}&order=asc&orderby=date&per_page=100&status=approve`,
      { headers: wpHeaders, next: { revalidate: 60 } }
    );
    if (!res.ok) return Response.json({ comments: [] });
    const comments = await res.json();
    return Response.json({
      comments: Array.isArray(comments)
        ? comments.map((c) => ({
            id: c.id,
            parent: c.parent || 0,
            author: c.author_name || "Anonymous",
            avatar: c.author_avatar_urls?.["48"] || null,
            date: c.date,
            content: c.content?.rendered || "",
          }))
        : [],
    });
  } catch (err) {
    console.error("Comment fetch failed:", err);
    return Response.json({ comments: [] });
  }
}

export async function POST(req) {
  try {
    const { postId, author_name, author_email, content, parent, captchaToken } = await req.json();

    if (!postId || !author_name || !author_email || !content) {
      return Response.json({ error: "All fields are required." }, { status: 400 });
    }

    // Verify reCAPTCHA server-side before touching WordPress.
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (secret) {
      if (!captchaToken) {
        return Response.json({ error: "Please complete the reCAPTCHA." }, { status: 400 });
      }
      const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: captchaToken }).toString(),
      });
      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        return Response.json({ error: "reCAPTCHA verification failed." }, { status: 400 });
      }
    }

    if (!WP_URL) {
      return Response.json({ error: "Comments are not configured yet." }, { status: 500 });
    }

    const res = await fetch(`${WP_URL}/wp-json/wp/v2/comments`, {
      method: "POST",
      headers: wpHeaders,
      body: JSON.stringify({
        post: postId,
        author_name,
        author_email,
        content,
        parent: parent || 0,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      // WP returns comment_duplicate / comment_flood_message etc — surface a clean message.
      return Response.json(
        { error: data.message || "Couldn't post your comment. Please try again." },
        { status: res.status }
      );
    }

    // Newly created comments usually land as "pending" until moderated (or
    // "approved" if the commenter has a previously-approved comment) — either
    // way, tell the person what actually happened.
    return Response.json({
      success: true,
      status: data.status || "hold",
      comment: {
        id: data.id,
        author: data.author_name,
        content: data.content?.rendered || content,
        date: data.date,
      },
    });
  } catch (err) {
    console.error("Comment post failed:", err);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
