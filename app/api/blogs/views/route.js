// app/api/blogs/views/route.js
// View counter — stored in WordPress as post meta, no external database.
//
// Requires a small custom REST endpoint in WordPress (functions.php) that
// reads/increments a "rc_views" post meta field. See the snippet in
// WORDPRESS_SETUP.md §6f.
//
// GET  /api/blogs/views?slug=my-post        -> { views: 123 }
// POST /api/blogs/views  { slug: "my-post" } -> { views: 124 }  (increments)

const WP_URL = process.env.WORDPRESS_URL || "";
const WP_AUTH = process.env.WORDPRESS_AUTH || "";

const wpHeaders = {
  "Content-Type": "application/json",
  ...(WP_AUTH ? { Authorization: `Basic ${WP_AUTH}` } : {}),
};

// `configured: false` means the WordPress endpoint isn't reachable (either
// WORDPRESS_URL is unset, or the rc/v1/views mu-plugin below hasn't been
// uploaded yet) — NOT that the post genuinely has 0 views. This distinction
// used to be lost: every failure silently returned `{ views: 0 }`, which is
// indistinguishable on the frontend from "real count, happens to be zero".
// <ViewCounter> now hides itself entirely when `configured` is false instead
// of displaying a permanent, static "0 views" that never moves — which is
// exactly what looked "fake" about it.
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  if (!slug) return Response.json({ error: "Missing slug" }, { status: 400 });
  if (!WP_URL) return Response.json({ views: 0, configured: false });

  try {
    const res = await fetch(`${WP_URL}/wp-json/rc/v1/views/${encodeURIComponent(slug)}`, {
      headers: wpHeaders,
      next: { revalidate: 30 },
    });
    if (!res.ok) return Response.json({ views: 0, configured: false });
    const data = await res.json();
    return Response.json({ views: data.views || 0, configured: true });
  } catch (err) {
    console.error("View fetch failed:", err);
    return Response.json({ views: 0, configured: false });
  }
}

export async function POST(req) {
  try {
    const { slug } = await req.json();
    if (!slug) return Response.json({ error: "Missing slug" }, { status: 400 });
    if (!WP_URL) return Response.json({ views: 0, configured: false });

    const res = await fetch(`${WP_URL}/wp-json/rc/v1/views/${encodeURIComponent(slug)}`, {
      method: "POST",
      headers: wpHeaders,
    });
    if (!res.ok) return Response.json({ views: 0, configured: false });
    const data = await res.json();
    return Response.json({ views: data.views || 1, configured: true });
  } catch (err) {
    console.error("View increment failed:", err);
    return Response.json({ error: "Failed to record view", configured: false }, { status: 500 });
  }
}
