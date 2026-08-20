import DevOpsCloudPage, { CONFIG } from "./devcl";
import { buildServiceSchema } from "../../lib/serviceSchema";

export const metadata = {
  title: "Top Cloud Infrastructure Services",
  description:
    "Enhance business agility with our Cloud Infrastructure Services. RC Tech Solutions provides secure, scalable DevOps & cloud solutions that drive growth.",
  keywords: [
    "cloud integration",
    "AWS cloud services",
    "Azure cloud services",
    "Kubernetes orchestration",
    "cloud security",
    "cloud migration",
    "cloud backup solutions",
    "cloud performance optimization",
    "enterprise cloud solutions",
  ],
  authors: [{ name: "RC Tech Solutions" }],
  alternates: { canonical: "https://www.rctechsolutions.com/services/devops-and-cloud" },
  openGraph: {
    title: " Top Cloud Infrastructure Services | RC Tech Solutions",
    description:
      "Enhance business agility with our Cloud Infrastructure Services. RC Tech Solutions provides secure, scalable DevOps & cloud solutions that drive growth.",
    url: "https://www.rctechsolutions.com/services/devops-and-cloud",
    siteName: "RC Tech Solutions",
    images: [
      {
        url: "https://www.rctechsolutions.com/logo.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Cloud Infrastructure Services | RC Tech Solutions",
    description:
      "Enhance business agility with our Cloud Infrastructure Services. RC Tech Solutions provides secure, scalable DevOps & cloud solutions that drive growth.",
    images: ["https://www.rctechsolutions.com/logo.png"],
    site: "@RCTechSolutions",
  },
};

// Structured data — built directly from CONFIG (the same object that
// renders the visible page via ServicePageLayout), so schema and on-page
// content are guaranteed to match. See app/lib/serviceSchema.js.
const schema = buildServiceSchema({
  path: "/services/devops-and-cloud",
  serviceName: "DevOps & Cloud",
  description: CONFIG.intro,
  faqs: CONFIG.faqs,
});

export default function DevOpsCloudPagee() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <DevOpsCloudPage />
    </>
  );
}
