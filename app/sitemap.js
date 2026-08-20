// app/sitemap.js
// Dynamic sitemap — auto-generated. Pulls in every static page plus every
// individual blog post, project, and webinar — all from WordPress — so
// each one gets its own indexable URL.
// Available at: https://www.rctechsolutions.com/sitemap.xml

import { fetchAllWPSlugs, fetchAllWPWebinarSlugs, fetchAllWPProjectSlugs } from './lib/wordpress';

export const revalidate = 3600;

// This file's own last-deploy date — used as lastmod for static pages we
// don't have real per-page change tracking for. FIX: previously every
// single URL in this sitemap (including Privacy Policy, which barely ever
// changes) used `new Date()` — the exact moment the sitemap happened to be
// requested/built. That means every URL reported an identical, constantly
// shifting "just changed!" timestamp, which is a strong signal to Google
// that the lastmod data isn't trustworthy — so it tends to ignore it
// entirely. A fixed, honest date (bumped manually on real redeploys) is
// more useful than a fake one that's technically always "fresh".
const SITE_LAST_DEPLOYED = new Date("2026-08-17");

export default async function sitemap() {
  const baseUrl = "https://www.rctechsolutions.com";

  const staticPages = [
    { url: baseUrl, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/blogs`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/projects`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/services`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/ebook`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/resources`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/webinars`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "weekly", priority: 0.75 },
    { url: `${baseUrl}/website-audit`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/services/web-development`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/web-development/ecommerce-development`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/services/web-development/custom-cms-development`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/services/web-development/progressive-web-apps`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/services/seo`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/seo/technical-seo-audit`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/services/seo/local-seo-services`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/services/seo/keyword-research-content-strategy`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/services/digital-marketing`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/digital-marketing/social-media-management`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/services/digital-marketing/google-ads-campaigns`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/services/digital-marketing/email-marketing`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/services/mobile-apps`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/cloud-integration`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/devops-and-cloud`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/digital-branding`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/ai-powered`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-of-services`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/return-policy`, lastModified: SITE_LAST_DEPLOYED, changeFrequency: "yearly", priority: 0.3 },
  ];

  // WordPress blog pages — each URL now carries its REAL WordPress
  // `modified` date instead of "whenever this sitemap happened to build".
  let wpPages = [];
  try {
    const wpSlugs = await fetchAllWPSlugs();
    wpPages = wpSlugs.map(({ slug, modified }) => ({
      url: `${baseUrl}/blogs/${slug}`,
      lastModified: modified ? new Date(modified) : SITE_LAST_DEPLOYED,
      changeFrequency: "monthly",
      priority: 0.8,
    }));
  } catch {}

  // WordPress project pages
  let projectPages = [];
  try {
    const projectSlugs = await fetchAllWPProjectSlugs();
    projectPages = projectSlugs.map(({ slug, modified }) => ({
      url: `${baseUrl}/projects/${slug}`,
      lastModified: modified ? new Date(modified) : SITE_LAST_DEPLOYED,
      changeFrequency: "monthly",
      priority: 0.75,
    }));
  } catch {}

  // WordPress webinar pages (each webinar's own /webinars/[id] page)
  let wpWebinarPages = [];
  try {
    const wpWebinarSlugs = await fetchAllWPWebinarSlugs();
    wpWebinarPages = wpWebinarSlugs.map(({ slug, modified }) => ({
      url: `${baseUrl}/webinars/${slug}`,
      lastModified: modified ? new Date(modified) : SITE_LAST_DEPLOYED,
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch {}

  return [...staticPages, ...wpPages, ...projectPages, ...wpWebinarPages];
}
