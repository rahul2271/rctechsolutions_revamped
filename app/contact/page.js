import Contact from "./contactuss";

export const metadata = {
  metadataBase: new URL("https://www.rctechsolutions.com"),
  // Layout's title template already appends "| RC Tech Solutions" at the
  // end — this title had the brand name ALSO baked in at the front
  // ("Contact RC Tech Solutions | ..."), so the final rendered title said
  // "RC Tech Solutions" twice: once here, once from the template. Removed
  // the redundant mention and let the template be the single source of
  // the brand suffix.
  title: "Contact Us | Web Development & Digital Marketing, Mohali",
  description:
    "Get in touch with RC Tech Solutions for web development, SEO, digital marketing, and IT consulting. Based in Mohali, Punjab. Response within 24 hours.",
  keywords: ["contact RC Tech Solutions", "web development company Mohali contact", "hire web developer Chandigarh", "digital marketing agency Punjab contact"],
  alternates: { canonical: "https://www.rctechsolutions.com/contact" },
  openGraph: {
    title: "Contact RC Tech Solutions | Web Development, Mohali",
    description: "Start a project with RC Tech Solutions. We respond within 24 hours.",
    url: "https://www.rctechsolutions.com/contact",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://www.rctechsolutions.com/contact",
  name: "Contact RC Tech Solutions",
  description: "Get in touch with RC Tech Solutions for web development, SEO and digital marketing projects.",
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Contact />
    </>
  );
}
