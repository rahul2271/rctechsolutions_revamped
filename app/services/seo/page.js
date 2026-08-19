import SEODominationPage, { CONFIG } from "./seoo";
import { buildServiceSchema } from "../../lib/serviceSchema";

export const metadata = {
  title: "SEO Services for Small Businesses",
  description:
    "Grow your brand with our SEO services for small businesses. From keyword optimization to link building, we deliver measurable results for your success.",
  keywords: [
    "SEO domination services",
    "SEO services for small businesses",
    "best IT company for startups",
    "technical SEO audit",
    "keyword research",
    "on-page SEO optimization",
    "backlink building",
    "local SEO services",
    "SEO content strategy",
    "analytics and reporting SEO",
    "RC Tech Solutions SEO"
  ],
  authors: [{ name: "RC Tech Solutions" }],
  alternates: {
    canonical: "https://www.rctechsolutions.com/services/seo",
  },
  openGraph: {
    title: "SEO Services for Small Businesses | RC Tech Solutions",
    description:
      "Grow your brand with our SEO services for small businesses. From keyword optimization to link building, we deliver measurable results for your success.",
    url: "https://www.rctechsolutions.com/services/seo",
    siteName: "RC Tech Solutions",
    images: [
      {
        url: "https://www.rctechsolutions.com/rclogo.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services for Small Businesses | RC Tech Solutions",
    description:
      "Grow your brand with our SEO services for small businesses. From keyword optimization to link building, we deliver measurable results for your success.",
    images: ["https://www.rctechsolutions.com/rclogo.png"],
    site: "@RCTechSolutions",
  },
};

// Structured data — built directly from CONFIG (the same object that
// renders the visible page via ServicePageLayout), so schema and on-page
// content are guaranteed to match. See app/lib/serviceSchema.js.
const schema = buildServiceSchema({
  path: "/services/seo",
  serviceName: "SEO Services",
  description: CONFIG.intro,
  faqs: CONFIG.faqs,
});

export default function SEODominationPagee() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SEODominationPage />
    </>
  );
}





