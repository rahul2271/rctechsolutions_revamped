import DigitalBrandingPage, { CONFIG } from "./branding";
import { buildServiceSchema } from "../../lib/serviceSchema";

export const metadata = {
  title: "Top Digital Branding Solutions for a Strong Online Identity",
  description:
    "Build a powerful brand with RC Tech Solutions’ top branding services. Creative strategies, compelling designs, and consistent growth for your business.",
  keywords: [
    "digital branding services",
    "brand identity design",
    "logo design",
    "social media branding",
    "SEO services",
    "content creation",
    "influencer marketing",
    "campaign strategy",
    "website branding",
  ],
  authors: [{ name: "RC Tech Solutions" }],
  alternates: {
    canonical: "https://www.rctechsolutions.com/services/digital-branding",
  },
  openGraph: {
    title: "Top Digital Branding Solutions for a Strong Online Identity| RC Tech Solutions",
    description:
      "Build a powerful brand with RC Tech Solutions’ top branding services. Creative strategies, compelling designs, and consistent growth for your business.",
    url: "https://www.rctechsolutions.com/services/digital-branding",
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
    title: "Top Digital Branding Solutions for a Strong Online Identity| RC Tech Solutions",
    description:
      "Build a powerful brand with RC Tech Solutions’ top branding services. Creative strategies, compelling designs, and consistent growth for your business.",
    images: ["https://www.rctechsolutions.com/rclogo.png"],
    site: "@RCTechSolutions",
  },
};

// Structured data — built directly from CONFIG (the same object that
// renders the visible page via ServicePageLayout), so schema and on-page
// content are guaranteed to match. See app/lib/serviceSchema.js.
const schema = buildServiceSchema({
  path: "/services/digital-branding",
  serviceName: "Digital Branding",
  description: CONFIG.intro,
  faqs: CONFIG.faqs,
});

export default function DigitalBrandingPagee() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <DigitalBrandingPage />
    </>
  );
}
