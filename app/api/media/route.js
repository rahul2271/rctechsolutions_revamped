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

// FIX #2 — this was the deeper cause of "sometimes shows, sometimes
// vanishes" surviving even after the first caching fix (see route
// comments below). This function used to 302-redirect to a real,
// working local placeholder image with a normal 200 status — which
// LOOKS, to anything downstream (most importantly Next.js's own built-in
// Image Optimizer, which sits in front of this route and has its own
// 7-day minimum cache — see `images.minimumCacheTTL` in next.config.mjs),
// exactly like a legitimate successful image fetch. That outer cache
// can't distinguish "real photo" from "fallback standing in for a
// failure" — both are valid 200 images to it — so a single failure got
// cached there for a minimum of 7 days, completely independent of
// anything this route does internally.
//
// Fix: return a genuine error status here instead of disguising the
// failure as a valid image. Next's optimizer does not apply its 7-day
// floor to errors — only to real successes — so a failure here no longer
// gets silently locked in anywhere. The friendly placeholder UI is now
// handled entirely client-side (see app/components/BlogImage.js), which
// reacts to this failing with a normal onError swap, with nothing about
// the failure ever touching a server or CDN cache.
function failureResponse() {
  return new Response("Upstream media unavailable", {
    status: 502,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const src = searchParams.get("url");

  if (!src || !isAllowedMediaHost(src)) {
    return new Response("Invalid or disallowed media URL", { status: 400 });
  }

  try {
    const upstream = await fetch(src, {
      // FIX (this was the "sometimes shows, sometimes vanishes" bug):
      // this used to be `next: { revalidate: 2592000 }`. The problem —
      // Next.js's fetch cache stores whatever response comes back,
      // INCLUDING a transient 404/500/timeout from WordPress, for the
      // full 30 days. It can't tell "this fetch succeeded with real
      // image bytes" apart from "this fetch completed with an error
      // status" — both count as a cached, completed fetch. So one flaky
      // moment from the WP host (momentary overload, a hotlink-check
      // misfire, a slow timeout) got permanently cached as "this image
      // is broken" for a month, on whichever server instance happened to
      // hit that flake — while other instances/regions that fetched at a
      // healthy moment cached the real image. Different visitors landing
      // on different instances then saw different results for the exact
      // same URL: the "sometimes it shows, sometimes it vanishes" symptom.
      //
      // Fix: never let Next cache the upstream fetch at all. Every
      // request to this proxy re-checks WordPress fresh, so a transient
      // failure self-heals on the very next request instead of sticking
      // for a month. We still get real caching — just correctly, only for
      // genuine successes — via the Cache-Control header we set below on
      // OUR OWN response, which only ever fires on the 200 branch.
      cache: "no-store",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
      },
    });

    if (!upstream.ok || !upstream.body) {
      // One retry before giving up — covers a genuinely momentary blip
      // (host briefly overloaded, a slow cold start) without waiting on a
      // full page reload to recover.
      await new Promise((r) => setTimeout(r, 300));
      const retry = await fetch(src, {
        cache: "no-store",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        },
      });

      if (!retry.ok || !retry.body) {
        // Most commonly one of:
        //  (a) the WordPress post's featured_media ID points at a file
        //      that's since been deleted from the Media Library — a content
        //      issue: open the post in WP Admin, check the Featured Image
        //      panel, re-upload/re-attach if it's blank or broken.
        //  (b) the WP host is blocking this server-to-server request —
        //      test by opening the raw media URL directly in an incognito
        //      browser tab; if THAT also fails, it's (a); if it loads fine
        //      there but still fails here, ask your host to allowlist
        //      server-side/API requests to /wp-content/uploads/ or disable
        //      hotlink protection for that path.
        console.error(`Media proxy: upstream returned ${retry.status} for ${src} (after retry)`);
        return failureResponse();
      }

      const retryContentType = retry.headers.get("content-type") || "image/jpeg";
      return new Response(retry.body, {
        status: 200,
        headers: {
          "Content-Type": retryContentType,
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }

    const contentType = upstream.headers.get("content-type") || "image/jpeg";

    return new Response(upstream.body, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        // Long, immutable cache at the browser/CDN level too — Google,
        // social scrapers, and repeat visitors all benefit from this being
        // cached hard rather than re-fetched from WordPress every time.
        // This is intentionally set ONLY here, on a confirmed 200 with a
        // real image body — never on the fetch above — so only genuine
        // successes ever get cached long-term.
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return failureResponse();
  }
}
