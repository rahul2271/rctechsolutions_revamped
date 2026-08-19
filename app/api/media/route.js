// app/api/media/route.js
//
// Proxies WordPress media through rctechsolutions.com so every image the
// site references — blog covers, project/webinar images, og:image,
// twitter:image, JSON-LD image objects — is genuinely served from your own
// domain instead of the WordPress host. See app/lib/media.js for the full
// reasoning.
//
// Usage: /api/media?url=<encoded original WordPress media URL>
// Only fetches from the host configured in WORDPRESS_URL — any other host
// is rejected with 400, so this can't be used as an open proxy.

import { isAllowedMediaHost } from "../../lib/media";

// FIX: if the underlying WordPress media file has been deleted/moved (a
// real, separate issue on the WordPress side — see comment below), the
// upstream fetch returns 404. This used to bubble up as a hard 502 from
// this route, which Next.js's image optimizer then logs as a loud
// "upstream image response failed" error and renders a broken-image icon.
// Redirecting to a local placeholder instead means: the page still looks
// intact for visitors, Google doesn't index a broken image slot, and the
// console stays quiet for the (expected, WordPress-side) case of a missing
// file — while still surfacing genuinely unexpected proxy errors normally.
function placeholderResponse(request) {
  const placeholderUrl = new URL("/media-placeholder.png", request.url);
  return Response.redirect(placeholderUrl, 302);
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const src = searchParams.get("url");

  if (!src || !isAllowedMediaHost(src)) {
    return new Response("Invalid or disallowed media URL", { status: 400 });
  }

  try {
    const upstream = await fetch(src, {
      // Cache the upstream WP fetch itself for 30 days — a given media URL
      // never changes its bytes once uploaded, so this is safe to cache hard.
      next: { revalidate: 2592000 },
    });

    if (!upstream.ok || !upstream.body) {
      // Most commonly a 404 — the WordPress post's featured_media ID points
      // at a file that's since been deleted from the Media Library (a
      // content issue, not a code bug — check that post's Featured Image
      // in WP Admin and re-upload/re-attach it if this keeps showing up).
      return placeholderResponse(request);
    }

    const contentType = upstream.headers.get("content-type") || "image/jpeg";

    return new Response(upstream.body, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        // Long, immutable cache at the browser/CDN level too — Google,
        // social scrapers, and repeat visitors all benefit from this being
        // cached hard rather than re-fetched from WordPress every time.
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return placeholderResponse(request);
  }
}
