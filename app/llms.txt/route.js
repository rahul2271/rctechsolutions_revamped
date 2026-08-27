// app/llms.txt/route.js
// Auto-generated llms.txt -- replaces the stale static public/llms.txt.
// Pulls live blog titles/slugs from WordPress on every request (revalidated
// hourly) so AI crawlers and LLM-based search always see current content,
// not a manually-maintained file that drifts out of date.
// Available at: https://www.rctechsolutions.com/llms.txt
// Spec reference: https://llmstxt.org

import { fetchWPPosts } from "../lib/wordpress";

export const revalidate = 3600;

async function fetchRecentBlogs() {
  try {
    const posts = await fetchWPPosts({ perPage: 30 });
    return posts.filter((b) => b.slug && b.title);
  } catch {
    return [];
  }
}

export async function GET() {
  const blogs = await fetchRecentBlogs();

  const blogLines = blogs
    .map((b) => `- [${b.title}](https://www.rctechsolutions.com/blogs/${b.slug})${b.metaDescription ? `: ${b.metaDescription}` : ""}`)
    .join("\n");

  const content = `# RC Tech Solutions

> Web development, SEO, and digital marketing agency based in Mohali, Punjab, India. We build fast, SEO-engineered websites and run growth campaigns for startups, SMEs, and enterprises across India.

RC Tech Solutions was founded by Rahul Chauhan and has shipped 50+ web and digital marketing projects. We specialize in Next.js development, technical SEO, e-commerce builds, and performance marketing.

## Company

- [Homepage](https://www.rctechsolutions.com/): Web development company in Mohali, Punjab.
- [About](https://www.rctechsolutions.com/about): Our story, founder, and team.
- [Contact](https://www.rctechsolutions.com/contact): Get in touch for a project quote.

## Services

- [Web Development](https://www.rctechsolutions.com/services/web-development): Custom websites, web apps, e-commerce, CMS, and progressive web apps.
- [Web Development – E-commerce](https://www.rctechsolutions.com/services/web-development/ecommerce-development)
- [Web Development – Custom CMS](https://www.rctechsolutions.com/services/web-development/custom-cms-development)
- [Web Development – Progressive Web Apps](https://www.rctechsolutions.com/services/web-development/progressive-web-apps)
- [SEO Services](https://www.rctechsolutions.com/services/seo): Technical audits, local SEO, keyword strategy.
- [SEO – Technical Audit](https://www.rctechsolutions.com/services/seo/technical-seo-audit)
- [SEO – Local SEO](https://www.rctechsolutions.com/services/seo/local-seo-services)
- [SEO – Keyword Research](https://www.rctechsolutions.com/services/seo/keyword-research-content-strategy)
- [Digital Marketing](https://www.rctechsolutions.com/services/digital-marketing): Social media, paid ads, email marketing.
- [Digital Marketing – Social Media Management](https://www.rctechsolutions.com/services/digital-marketing/social-media-management)
- [Digital Marketing – Google Ads](https://www.rctechsolutions.com/services/digital-marketing/google-ads-campaigns)
- [Digital Marketing – Email Marketing](https://www.rctechsolutions.com/services/digital-marketing/email-marketing)
- [Mobile App Development](https://www.rctechsolutions.com/services/mobile-apps)
- [Cloud Integration](https://www.rctechsolutions.com/services/cloud-integration)
- [DevOps and Cloud](https://www.rctechsolutions.com/services/devops-and-cloud)
- [Digital Branding](https://www.rctechsolutions.com/services/digital-branding)
- [AI-Powered Solutions](https://www.rctechsolutions.com/services/ai-powered)

## Journal (recent posts)

${blogLines || "- No posts published yet."}

## Contact

- Email: business@rctechsolutions.com
- Phone: +91-7009646377
- Address: 3126, Sector 82, JLPL Industrial Area, Mohali, Punjab 140306, India

## Optional

- [Privacy Policy](https://www.rctechsolutions.com/privacy-policy)
- [Terms of Service](https://www.rctechsolutions.com/terms-of-services)
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
