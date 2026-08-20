// app/robots.js
// Dynamic robots.txt using Next.js's native convention.
// Replaces the static public/robots.txt (now redundant -- this route wins).
// Available at: https://www.rctechsolutions.com/robots.txt

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          // IMPORTANT: /api/media must stay crawlable even though the rest
          // of /api/ is blocked below — it's the image-proxy route used for
          // every blog/project/webinar cover image, og:image, and JSON-LD
          // image reference (see app/lib/media.js). If this were blocked,
          // Googlebot-Image and social scrapers (Facebook, WhatsApp,
          // LinkedIn) would fail to fetch every proxied image on the site —
          // silently breaking the exact problem this route was built to fix.
          "/api/media",
        ],
        disallow: ["/admin/", "/api/", "/admin/blogs/", "/admin/blogs/manage/"],
      },
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
    ],
    sitemap: "https://www.rctechsolutions.com/sitemap.xml",
    host: "https://www.rctechsolutions.com",
  };
}
