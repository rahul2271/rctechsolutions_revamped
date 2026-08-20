import AIPoweredSolutionsPage, { CONFIG } from "./ai";
import { buildServiceSchema } from "../../lib/serviceSchema";

export const metadata = {
  title: "Best AI Powered Solutions | Smart Business Growth",
  description:
    "Experience the future of technology with RC Tech Solutions. Get the best AI powered solutions for smarter automation, data-driven insights, and business growth.",
  keywords: [
    "AI solutions",
    "AI chatbot development",
    "natural language processing",
    "machine learning",
    "computer vision",
    "predictive analytics",
    "custom AI software",
    "AI consulting",
    "AI integration",
  ],
  authors: [{ name: "RC Tech Solutions" }],
  alternates: { canonical: "https://www.rctechsolutions.com/services/ai-powered" },
  openGraph: {
    title: "Best AI Powered Solutions | Smart Business Growth | RC Tech Solutions",
    description:
      "Experience the future of technology with RC Tech Solutions. Get the best AI powered solutions for smarter automation, data-driven insights, and business growth.",
    url: "https://www.rctechsolutions.com/services/ai-powered",
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
    title: "Best AI Powered Solutions | Smart Business Growth | RC Tech Solutions",
    description:
      "Experience the future of technology with RC Tech Solutions. Get the best AI powered solutions for smarter automation, data-driven insights, and business growth.",
    images: ["https://www.rctechsolutions.com/rclogo.png"],
    site: "@RCTechSolutions",
  },
};

// Structured data — built directly from CONFIG (the same object that
// renders the visible page via ServicePageLayout), so schema and on-page
// content are guaranteed to match. See app/lib/serviceSchema.js.
const schema = buildServiceSchema({
  path: "/services/ai-powered",
  serviceName: "AI-Powered Solutions",
  description: CONFIG.intro,
  faqs: CONFIG.faqs,
});

export default function AIPoweredSolutionsPagee() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AIPoweredSolutionsPage />
    </>
  );
}
