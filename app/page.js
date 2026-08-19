import HeroSection from "./components/HeroSection";
import BrandsSection from "./components/TrustedBrands";
import ServicesCard from "./components/capabilities";
import ProblemSolution from "./components/ProblemSolution";
import ValueProposition from "./components/ValueProposition";
import Timeline from "./components/Timeline";
import CtoSection from "./components/Result";
import CTASection from "./components/CTASection";
import Quiz from "./components/Quiz";
import LatestBlogs from "./components/LatestBlogs";
import FaqSection from "./components/FAQSection";
// import Chatbot from "./components/Chatbot";

export const metadata = {
  // Layout's title template already appends "| RC Tech Solutions" — this
  // was doubling up on the homepage too ("...Digital Marketing | RC Tech
  // Solutions | RC Tech Solutions"), same bug as the blog/service pages.
  title: "Web Development Company in Mohali, Punjab | SEO & Digital Marketing",
  description:
    "RC Tech Solutions builds fast, SEO-engineered websites and runs growth campaigns for startups, SMEs, and enterprises across India. Based in Mohali, Punjab. 50+ projects shipped. 90+ PageSpeed guaranteed.",
  keywords: [
    "web development company in Mohali",
    "website design company Punjab",
    "digital marketing agency Mohali",
    "SEO services Punjab",
    "Next.js development company India",
    "affordable web design Chandigarh",
    "IT company Mohali",
    "custom website development India",
    "SMM services Punjab",
    "RC Tech Solutions",
  ],
  metadataBase: new URL("https://www.rctechsolutions.com/"),
  alternates: { canonical: "https://www.rctechsolutions.com/" },
  openGraph: {
    title: "RC Tech Solutions — Web Development Company in Mohali, Punjab",
    description:
      "We build fast, SEO-ready, mobile-first websites for startups & enterprises. Trusted by 50+ brands across India. Based in Mohali, Punjab.",
    url: "https://www.rctechsolutions.com/",
    siteName: "RC Tech Solutions",
    images: [{ url: "https://www.rctechsolutions.com/og/home-cover.jpg", width: 1200, height: 630, alt: "RC Tech Solutions — Web Development Company in Mohali, Punjab" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RC Tech Solutions — Web Development & Digital Marketing, Mohali",
    description: "Fast, SEO-ready websites & digital marketing for startups and SMEs. Based in Mohali, Punjab.",
    images: ["https://www.rctechsolutions.com/og/home-cover.jpg"],
  },
};

const schemaWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.rctechsolutions.com/#website",
  name: "RC Tech Solutions",
  url: "https://www.rctechsolutions.com/",
  description: "Web development company in Mohali building fast, SEO-ready websites for startups, SMEs and enterprises.",
  publisher: { "@id": "https://www.rctechsolutions.com/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.rctechsolutions.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const schemaOrganization = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://www.rctechsolutions.com/#organization",
  name: "RC Tech Solutions",
  url: "https://www.rctechsolutions.com/",
  logo: { "@type": "ImageObject", url: "https://www.rctechsolutions.com/rclogo.png", width: 400, height: 400 },
  image: "https://www.rctechsolutions.com/og/home-cover.jpg",
  description: "RC Tech Solutions is a web development and digital marketing agency based in Mohali, Punjab, India. We build fast, SEO-engineered websites and run growth campaigns for startups and enterprises.",
  foundingDate: "2021",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 5 },
  address: {
    "@type": "PostalAddress",
    streetAddress: "3126, Sector 82, JLPL Industrial Area",
    addressLocality: "Mohali",
    addressRegion: "Punjab",
    postalCode: "140306",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 30.7046, longitude: 76.7179 },
  telephone: "+91-7009646377",
  email: "business@rctechsolutions.com",
  priceRange: "₹₹",
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  }],
  areaServed: [
    { "@type": "City", name: "Mohali" },
    { "@type": "City", name: "Chandigarh" },
    { "@type": "State", name: "Punjab" },
    { "@type": "Country", name: "India" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development", url: "https://www.rctechsolutions.com/services/web-development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services", url: "https://www.rctechsolutions.com/services/seo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing", url: "https://www.rctechsolutions.com/services/digital-marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce Development", url: "https://www.rctechsolutions.com/services/web-development/ecommerce-development" } },
    ],
  },
  sameAs: [
    "https://www.instagram.com/rc_tech_solutions/",
    "https://www.linkedin.com/in/er-rahul-chauhan/",
    "https://www.facebook.com/rchauhanweb",
    "https://www.crunchbase.com/organization/rc-tech-solutions",
  ],
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What services does RC Tech Solutions offer?", acceptedAnswer: { "@type": "Answer", text: "RC Tech Solutions offers web development (Next.js, React, e-commerce), technical SEO, digital marketing, social media management, cloud integration, AI-powered solutions, and digital branding for startups and businesses across India." } },
    { "@type": "Question", name: "How much does a website cost in Mohali?", acceptedAnswer: { "@type": "Answer", text: "A standard business website starts at ₹15,000–₹30,000. Custom Next.js applications and e-commerce builds range from ₹50,000 to ₹2,00,000+. We always quote a fixed price upfront with no hidden charges." } },
    { "@type": "Question", name: "How long does it take to build a website?", acceptedAnswer: { "@type": "Answer", text: "Most business websites take 2–4 weeks. E-commerce stores and custom web applications typically take 6–10 weeks. We share a detailed project timeline in our proposal." } },
    { "@type": "Question", name: "Is SEO included with website development?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every site we build includes proper meta tags, JSON-LD schema markup, Core Web Vitals tuning, sitemap generation, and Google Search Console setup — not as an add-on, but as standard." } },
    { "@type": "Question", name: "Does RC Tech Solutions work with startups and small businesses?", acceptedAnswer: { "@type": "Answer", text: "Yes. We work with early-stage founders, growing SMEs, D2C brands, and enterprises across Mohali, Chandigarh, Punjab, and the rest of India." } },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([schemaWebsite, schemaOrganization, schemaFAQ]) }}
      />

      {/* 1. Hero — above the fold thesis statement */}
      <HeroSection />

      {/* 2. Social proof — logos immediately under hero */}
      <BrandsSection />

      {/* 3. Services — what we actually do */}
      <ServicesCard />

      {/* 4. Problems we fix — dark section, high content value, AdSense-ready depth */}
      <ProblemSolution />

      {/* 5. Why us — differentiators + tech stack + badges */}
      <ValueProposition />

      {/* 6. How we work — process transparency */}
      <Timeline />

      {/* 7. Results + founder quote */}
      <CtoSection />

      {/* 8. CTA — dark, full-width */}
      <CTASection />

      {/* 9. Quiz — lead capture diagnostic */}
      <Quiz />

      {/* 10. Latest blog posts — content depth for AdSense */}
      <LatestBlogs />

      {/* 11. FAQ — rich results schema */}
      <FaqSection />

      {/* 12. Chatbot */}
      {/* <Chatbot /> */}
    </>
  );
}
