import About from "./aboutus";

export const metadata = {
  metadataBase: new URL("https://www.rctechsolutions.com"),
  // Same fix as contact/page.js — brand name was baked into the title
  // text itself AND appended again by the layout's title template.
  title: "About Us | Web Development Agency, Mohali, India — Serving Clients Worldwide",
  description:
    "RC Tech Solutions is a web development and digital marketing agency founded in Mohali, Punjab by Rahul Chauhan — serving clients across India and internationally in the USA, UK, Canada & Australia. 50+ projects delivered, 92% client retention, 3+ years in business.",
  keywords: [
    "RC Tech Solutions about",
    "Rahul Chauhan founder Mohali",
    "web development company Punjab about",
    "IT agency Mohali",
    "RC Tech team",
    "remote web development agency India",
  ],
  alternates: { canonical: "https://www.rctechsolutions.com/about" },
  openGraph: {
    title: "About RC Tech Solutions | Web Development Agency, Mohali",
    description: "50+ projects shipped, 92% client retention. Meet Rahul Chauhan and the RC Tech Solutions team.",
    url: "https://www.rctechsolutions.com/about",
    images: [{ url: "https://www.rctechsolutions.com/rahul.jpeg", width: 800, height: 900, alt: "Rahul Chauhan — Founder, RC Tech Solutions" }],
    type: "website",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rahul Chauhan",
  jobTitle: "Founder & CEO",
  url: "https://www.rctechsolutions.com/about",
  image: "https://www.rctechsolutions.com/rahul.jpeg",
  worksFor: { "@type": "Organization", name: "RC Tech Solutions", url: "https://www.rctechsolutions.com" },
  sameAs: ["https://www.linkedin.com/in/er-rahul-chauhan/", "https://www.instagram.com/rc_tech_solutions/"],
  description: "Founder and CEO of RC Tech Solutions, a web development and digital marketing agency based in Mohali, Punjab, India.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rctechsolutions.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.rctechsolutions.com/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, breadcrumb]) }} />
      <About />
    </>
  );
}
