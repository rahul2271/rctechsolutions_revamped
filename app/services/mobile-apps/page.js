import MobileAppsPage, { CONFIG } from "./mob";
import { buildServiceSchema } from "../../lib/serviceSchema";

export const metadata = {
  title: "Custom Mobile App Development for iOS & Android",
  description:
    "Get innovative, user-friendly mobile apps with RC Tech Solutions. Expert mobile app development services for startups, enterprises, and global brands.",
  keywords: [
    "mobile app development services",
    "android app development",
    "ios app development",
    "react native apps",
    "cross platform app development",
    "UI/UX prototyping",
    "Figma app design",
    "backend integration apps",
    "App Store Optimization",
    "IT solutions company India"
  ],
  authors: [{ name: "RC Tech Solutions" }],
  alternates: {
    canonical: "https://www.rctechsolutions.com/services/mobile-apps",
  },
  openGraph: {
    title: "Custom Mobile App Development for iOS & Android | RC Tech Solutions",
    description:
      "Get innovative, user-friendly mobile apps with RC Tech Solutions. Expert mobile app development services for startups, enterprises, and global brands.",
    url: "https://www.rctechsolutions.com/services/mobile-apps",
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
    title: "Custom Mobile App Development for iOS & Android | RC Tech Solutions",
    description:
      "Get innovative, user-friendly mobile apps with RC Tech Solutions. Expert mobile app development services for startups, enterprises, and global brands.",
    images: ["https://www.rctechsolutions.com/rclogo.png"],
    site: "@RCTechSolutions",
  },
};

// Structured data — built directly from CONFIG (the same object that
// renders the visible page via ServicePageLayout), so schema and on-page
// content are guaranteed to match. See app/lib/serviceSchema.js.
const schema = buildServiceSchema({
  path: "/services/mobile-apps",
  serviceName: "Mobile App Development",
  description: CONFIG.intro,
  faqs: CONFIG.faqs,
});

export default function MobileAppsPagee() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <MobileAppsPage />
    </>
  );
}
