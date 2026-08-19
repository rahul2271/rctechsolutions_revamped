// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     formats: ["image/avif", "image/webp"],
//     minimumCacheTTL: 604800,
//     remotePatterns: [
//       { protocol: "https", hostname: "images.pexels.com" },
//       { protocol: "https", hostname: "images.unsplash.com" },
//       { protocol: "https", hostname: "source.unsplash.com" },
//       { protocol: "https", hostname: "plus.unsplash.com" },
//       { protocol: "https", hostname: "api.uifaces.co" },
//       { protocol: "https", hostname: "randomuser.me" },
//       { protocol: "https", hostname: "avatars.githubusercontent.com" },
//       { protocol: "https", hostname: "upload.wikimedia.org" },
//       { protocol: "https", hostname: "cdn.shopify.com" },
//       { protocol: "https", hostname: "d1.awsstatic.com" },
//       { protocol: "https", hostname: "pagedone.io" },
//       { protocol: "https", hostname: "cdn.pixabay.com" },
//       { protocol: "https", hostname: "miro.medium.com" },
//       { protocol: "https", hostname: "www.investopedia.com" },
//       { protocol: "https", hostname: "img.freepik.com" },
//       { protocol: "https", hostname: "firebasestorage.googleapis.com" },
//     ],
//   },

//   async headers() {
//     return [
//       {
//         source: "/:path*\\.(jpg|jpeg|png|gif|svg|webp|avif|ico|woff|woff2|ttf|otf)",
//         headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
//       },
//       {
//         source: "/(.*)",
//         headers: [
//           { key: "X-Frame-Options", value: "SAMEORIGIN" },
//           { key: "X-Content-Type-Options", value: "nosniff" },
//           { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
//           { key: "X-XSS-Protection", value: "1; mode=block" },
//           { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()" },
//         ],
//       },
//     ];
//   },

//   async redirects() {
//     return [
//       // Add 301 redirects here for any retired URLs, e.g.:
//       // { source: "/old-path", destination: "/new-path", permanent: true },
//     ];
//   },

//   compress: true,
//   generateEtags: true,
//   poweredByHeader: false,
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */

// FIX: this kept breaking one host at a time — first the production
// domain wasn't whitelisted, then switching NEXT_PUBLIC_SITE_URL to
// localhost:3000 for local dev broke again because THAT host wasn't
// whitelisted either. Root cause: proxiedMediaUrl() (app/lib/media.js)
// builds its proxy URLs from NEXT_PUBLIC_SITE_URL, but next/image's
// remotePatterns was hardcoded to a single fixed host. Deriving the entry
// from the same env var means whatever NEXT_PUBLIC_SITE_URL is set to —
// localhost:3000 in dev, www.rctechsolutions.com in production, a staging
// domain later — next/image automatically trusts it, with no more manual
// whitelist edits every time you switch environments.
function selfHostPattern() {
  try {
    const url = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.rctechsolutions.com");
    return {
      protocol: url.protocol.replace(":", ""),
      hostname: url.hostname,
      ...(url.port ? { port: url.port } : {}),
    };
  } catch {
    return { protocol: "https", hostname: "www.rctechsolutions.com" };
  }
}

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 604800,
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "api.uifaces.co" },
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "cdn.shopify.com" },
      { protocol: "https", hostname: "d1.awsstatic.com" },
      { protocol: "https", hostname: "pagedone.io" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
      { protocol: "https", hostname: "miro.medium.com" },
      { protocol: "https", hostname: "www.investopedia.com" },
      { protocol: "https", hostname: "img.freepik.com" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
      // Added your WordPress domain to whitelist images
      { protocol: "https", hostname: "darkorchid-swallow-640839.hostingersite.com" },
      // WordPress default author avatars (Gravatar)
      { protocol: "https", hostname: "secure.gravatar.com" },
      { protocol: "https", hostname: "www.gravatar.com" },
      // Production domain — kept as a static entry so prod always works
      // even if NEXT_PUBLIC_SITE_URL is ever misconfigured.
      { protocol: "https", hostname: "www.rctechsolutions.com" },
      // Whatever NEXT_PUBLIC_SITE_URL currently points to (localhost:3000
      // in dev, the production domain again if that's what's set) — see
      // selfHostPattern() above.
      selfHostPattern(),
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*\\.(jpg|jpeg|png|gif|svg|webp|avif|ico|woff|woff2|ttf|otf)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Add 301 redirects here for any retired URLs, e.g.:
      // { source: "/old-path", destination: "/new-path", permanent: true },
    ];
  },

  compress: true,
  generateEtags: true,
  poweredByHeader: false,
};

export default nextConfig;