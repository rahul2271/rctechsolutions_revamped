// app/api/revalidate/route.js
//
// On-demand ISR revalidation webhook.
// WordPress calls this URL whenever a post OR webinar is published, updated,
// TRASHED, or permanently deleted so your Next.js site updates immediately —
// not after the cache window (5 min for the blog list, 2 min for a single post).
//
// ── Setup in WordPress ───────────────────────────────────────────────────────
// 1. Add to .env.local:
//      REVALIDATE_SECRET=your_random_secret_string_here
//    (pick your own random string — don't leave it as the placeholder)
//
// 2. Add this to your WordPress theme's functions.php (or a small custom
//    plugin, so it survives a theme update):
//
//   function rc_notify_revalidate($post_id, $post = null) {
//     $post = $post ?: get_post($post_id);
//     if (!$post) return;
//     $type = $post->post_type === 'webinar' ? 'webinar' : 'blog';
//     wp_remote_post('https://www.rctechsolutions.com/api/revalidate', [
//       'headers' => [
//         'Content-Type'         => 'application/json',
//         'x-revalidate-secret'  => 'your_random_secret_string_here',
//       ],
//       'body'    => json_encode([
//         'slug'   => $post->post_name,
//         'type'   => $type,
//         'action' => current_filter(),
//       ]),
//       'timeout' => 5,
//       'blocking' => false, // don't make the WP admin wait on this request
//     ]);
//   }
//
//   // Fires on publish AND on every subsequent edit/update
//   function rc_notify_on_save($post_id, $post) {
//     if (wp_is_post_revision($post_id) || wp_is_post_autosave($post_id)) return;
//     if ($post->post_status !== 'publish') return;
//     rc_notify_revalidate($post_id, $post);
//   }
//   add_action('save_post_post', 'rc_notify_on_save', 10, 2);
//   add_action('save_post_webinar', 'rc_notify_on_save', 10, 2);
//
//   // Fires the moment a post is moved to Trash (this is what "Delete" does
//   // by default in the WP admin) — THIS is the hook that was missing before,
//   // which is why deleted posts kept showing up on the site until the cache
//   // window ran out.
//   add_action('wp_trash_post', 'rc_notify_revalidate', 10, 1);
//
//   // Fires on permanent delete (emptying Trash, or Bin > Delete Permanently)
//   add_action('before_delete_post', 'rc_notify_revalidate', 10, 1);
//
// 3. Alternative if you'd rather not touch functions.php — install the free
//    "WP Webhooks" plugin (wordpress.org/plugins/wp-webhooks) and add triggers
//    for "Post Published", "Post Updated", "Post Trashed", and "Post Deleted",
//    all POSTing to the URL/header/body shape below.
//
// 3b. Manual/API form of the webhook, for reference:
//      POST https://www.rctechsolutions.com/api/revalidate
//      header:  x-revalidate-secret: your_random_secret_string_here
//      body (JSON): { "slug": "your-post-slug", "type": "blog", "action": "publish" }
//      ("type" is "blog" or "webinar" — defaults to "blog" if omitted)
//
// ── If posts still look stale after adding the hooks ────────────────────────
// It's very likely a caching layer *on the WordPress side* (a caching plugin
// like WP Super Cache/W3 Total Cache, or a CDN like Cloudflare in front of
// the WP site) serving an old REST API response. Purge that cache too, or
// exclude /wp-json/ from it — the webhook above only controls the Next.js
// side of the cache.
//
// ── What this revalidates ────────────────────────────────────────────────────
// POST with slug, type=blog     → revalidates /blogs/[slug] + /blogs (listing)
// POST with slug, type=webinar  → revalidates /webinars/[slug] + /webinars (listing)
// POST without slug             → revalidates /blogs + /webinars (safe fallback)
// ─────────────────────────────────────────────────────────────────────────────

import { revalidatePath } from 'next/cache';

const SECRET = process.env.REVALIDATE_SECRET || '';

export async function POST(request) {
  // Validate secret — reject any request without the correct header
  const incomingSecret = request.headers.get('x-revalidate-secret');

  if (!SECRET) {
    // If no secret set, log a warning but still allow (dev mode)
    console.warn('[revalidate] REVALIDATE_SECRET not set — accepting all requests. Set it in .env.local for production.');
  } else if (incomingSecret !== SECRET) {
    return new Response(
      JSON.stringify({ error: 'Invalid revalidation secret' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let body = {};
  try {
    body = await request.json();
  } catch {
    // Body might be empty from some webhook senders — that's fine
  }

  const { slug, action = 'publish', type = 'blog' } = body;
  const basePath = type === 'webinar' ? '/webinars' : '/blogs';

  try {
    // Always revalidate the relevant listing page
    revalidatePath(basePath);

    // If a specific slug was provided, revalidate that item's detail page too
    if (slug) {
      revalidatePath(`${basePath}/${slug}`);
      console.log(`[revalidate] Revalidated ${basePath}/${slug} (type: ${type}, action: ${action})`);
    } else {
      console.log(`[revalidate] Revalidated ${basePath} listing (no slug provided)`);
    }

    return new Response(
      JSON.stringify({
        revalidated: true,
        slug: slug || null,
        type,
        action,
        timestamp: new Date().toISOString(),
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('[revalidate] Error:', err);
    return new Response(
      JSON.stringify({ error: 'Revalidation failed', detail: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// GET — health check so you can verify the endpoint is reachable
export async function GET() {
  return new Response(
    JSON.stringify({
      status: 'ok',
      endpoint: '/api/revalidate',
      method: 'POST',
      usage: 'POST with header x-revalidate-secret and body { slug, type, action }',
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
