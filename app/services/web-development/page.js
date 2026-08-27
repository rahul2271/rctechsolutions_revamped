import WebDevelopmentPage from "./web";
import { buildServiceSchema } from "../../lib/serviceSchema";

// FIX (Aug 2026 SEO pass): this is the site's single highest-commercial-
// intent page, and it was the one flagship page with NO Service/FAQPage/
// BreadcrumbList JSON-LD — every one of the 9 newer sub-service pages had
// it, this one didn't. areaServed also now covers India + the international
// markets this page's own copy already claims to serve (full-stack,
// e-commerce, CMS, portal work), instead of being silently India-only like
// the rest of the service pages.
const webDevSchema = buildServiceSchema({
  path: "/services/web-development",
  serviceName: "Custom Web Development Services",
  description:
    "Build powerful websites and web applications tailored to your business goals. RC Tech Solutions offers full-stack web development, e-commerce, CMS, portals, and progressive web apps.",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Canada" },
  ],
  faqs: [
    {
      q: "Do you build for clients outside India?",
      a: "Yes — alongside our Mohali and Tricity clients, we build for businesses in the USA, UK, and Canada, with fixed pricing quoted in USD/GBP/CAD and overlapping working hours.",
    },
    {
      q: "What's included in a custom web development project?",
      a: "Frontend and backend development, responsive design, SEO and schema setup, and — for e-commerce or portal builds — payment gateway and CMS integration, all under one fixed-price scope.",
    },
    {
      q: "Do you work with an existing codebase, or only greenfield builds?",
      a: "Both. We regularly take over and extend existing Next.js/React/WordPress codebases as well as building new ones from scratch.",
    },
  ],
});

export const metadata = {
  title: "Professional Custom Web Development Services",
  description:
    "Build powerful websites and web applications tailored to your business goals. RC Tech Solutions offers full-stack web development, e-commerce, CMS, portals, and progressive web apps.",
  keywords: [
    "custom web development",
    "best software development company",
    "web application development",
    "frontend development",
    "backend development",
    "e-commerce website development",
    "progressive web app development",
    "CMS development",
    "web portal development",
    "RC Tech Solutions web development"
  ],
  authors: [{ name: "RC Tech Solutions" }],
  alternates: {
    canonical: "https://www.rctechsolutions.com/services/web-development",
  },
  openGraph: {
    title: "Professional Custom Web Development Services | RC Tech Solutions",
    description:
      "Achieve business results with full-stack web development — frontend, backend, e-commerce, CMS, and portals built by RC Tech Solutions.",
    url: "https://www.rctechsolutions.com/services/web-development",
    siteName: "RC Tech Solutions",
    images: [
      {
        url: "https://www.rctechsolutions.com/images/web-development-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Web Development Services - RC Tech Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Custom Web Development Services | RC Tech Solutions",
    description:
      "Full-stack web development services — frontend, backend, e-commerce, CMS, portals, and progressive web apps by RC Tech Solutions.",
    images: ["https://www.rctechsolutions.com/images/web-development-banner.jpg"],
    site: "@RCTechSolutions",
  },
};

export default function WebDevelopmentPagee() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webDevSchema) }} />
      <WebDevelopmentPage />
    </>
  );
}
