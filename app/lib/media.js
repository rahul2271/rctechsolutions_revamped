// app/lib/media.js
//
// WHY THIS FILE EXISTS:
// WordPress media (featured images, author avatars, project/webinar images)
// were being served directly from the WP host's raw URL — e.g.
//   https://darkorchid-swallow-640839.hostingersite.com/wp-content/uploads/...
// That's a temporary Hostinger staging subdomain, not your own domain. Two
// real problems came from this:
//   1. Google Images (and social-share scrapers reading og:image) fetch
//      that URL directly and attribute/index the image under the staging
//      host, not rctechsolutions.com — which is very likely why images
//      show up inconsistently in Google Image Search for this site.
//   2. If that staging subdomain is ever recycled, suspended, or renamed by
//      Hostinger, every blog/project/webinar image breaks sitewide at once,
//      including every social share preview.
//
// The fix: every image URL that leaves this codebase (in <Image> tags,
// og:image, twitter:image, and JSON-LD) is rewritten to route through
// /api/media on YOUR OWN domain, which fetches from WordPress server-side
// and re-serves the bytes with a long, immutable cache. To Google, social
// scrapers, and browsers, every image now genuinely lives on
// rctechsolutions.com — decoupled from whatever the WP host happens to be.

// FIX: this used to be hardcoded to the production domain. That meant
// running `next dev` locally would build image URLs like
// https://www.rctechsolutions.com/api/media?url=... even before anything
// was deployed — pointing at production instead of localhost. Reading from
// NEXT_PUBLIC_SITE_URL (already defined in .env.local) means local dev
// proxies through the local server, and production continues to use the
// real domain, with no code change needed between environments.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.rctechsolutions.com";
const WP_URL = process.env.WORDPRESS_URL || "";

// Gravatar is fine to reference directly — it's a stable, permanent CDN
// (used for author avatars), not a staging host, so we don't proxy it.
const DIRECT_OK_HOSTS = new Set(["secure.gravatar.com", "www.gravatar.com"]);

function hostOf(url) {
  try {
    return new URL(url).host;
  } catch {
    return null;
  }
}

// Only ever proxy requests whose target host matches your configured
// WordPress origin. This is the important safety check — without it,
// /api/media would be an open image proxy that anyone could point at any
// URL on the internet (an SSRF / abuse vector).
export function isAllowedMediaHost(url) {
  const wpHost = WP_URL ? hostOf(WP_URL) : null;
  const targetHost = hostOf(url);
  return Boolean(wpHost && targetHost && targetHost === wpHost);
}

// Rewrite a raw WordPress media URL to a same-origin proxied URL.
// Always returns an ABSOLUTE https://www.rctechsolutions.com/... URL so the
// same value is safe to drop straight into og:image / twitter:image /
// JSON-LD, which all require absolute URLs — as well as <Image src>, which
// is happy with either.
export function proxiedMediaUrl(rawUrl) {
  if (!rawUrl) return null;

  // Already same-origin (e.g. a local /public asset) — leave untouched.
  if (rawUrl.startsWith(SITE_URL) || rawUrl.startsWith("/")) return rawUrl;

  const host = hostOf(rawUrl);
  if (host && DIRECT_OK_HOSTS.has(host)) return rawUrl;

  if (!isAllowedMediaHost(rawUrl)) {
    // Unknown/unexpected host — don't silently proxy arbitrary URLs.
    // Fall back to the original so nothing breaks, but this is worth
    // noticing in logs if it ever fires.
    return rawUrl;
  }

  return `${SITE_URL}/api/media?url=${encodeURIComponent(rawUrl)}`;
}

export { SITE_URL, WP_URL };
