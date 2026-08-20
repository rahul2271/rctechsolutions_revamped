// app/lib/serviceSchema.js
//
// WHY THIS EXISTS:
// The 7 service category pages (Cloud Integration, DevOps & Cloud, Mobile
// Apps, Digital Marketing, SEO, AI-Powered Solutions, Digital Branding) each
// already have genuine, specific FAQ content, a real intro, and a real H1 —
// written into their CONFIG object and rendered on-screen via
// ServicePageLayout. None of it was in structured data.
//
// This builds Service + FAQPage + BreadcrumbList JSON-LD DIRECTLY FROM the
// same CONFIG object that renders the visible page (see each page.js for the
// import). That's deliberate, not just convenient:
//
//   1. Google's structured-data guidelines require FAQPage schema to match
//      what's actually visible on the page. Hand-typing schema separately
//      from the visible FAQ accordion creates a drift risk — someone edits
//      an FAQ answer six months from now, forgets the schema copy exists,
//      and the two go out of sync. Importing CONFIG.faqs directly makes
//      that drift structurally impossible.
//   2. AEO (Answer Engine Optimization) — the reason AI Overviews,
//      Perplexity, and similar answer engines can lift a direct answer from
//      a page is that the answer is short, specific, and machine-readable.
//      This codebase's FAQ answers already are (concrete numbers, timelines,
//      prices) — FAQPage schema is what turns "well-written FAQ copy" into
//      "content an answer engine can actually extract and cite."

const SITE_URL = "https://www.rctechsolutions.com";

const ORGANIZATION = {
  "@type": "Organization",
  name: "RC Tech Solutions",
  url: SITE_URL,
  logo: `${SITE_URL}/rclogo.png`,
  areaServed: { "@type": "Country", name: "India" },
};

/**
 * @param {Object} opts
 * @param {string} opts.path            - route path, e.g. "/services/cloud-integration"
 * @param {string} opts.serviceName     - human name for the service (used as Service.name + breadcrumb label)
 * @param {string} opts.description     - short description (use CONFIG.intro — already real, on-page copy)
 * @param {Array<{q:string,a:string}>} [opts.faqs] - pass CONFIG.faqs directly
 */
export function buildServiceSchema({ path, serviceName, description, faqs = [] }) {
  const pageUrl = `${SITE_URL}${path}`;

  const graph = [
    {
      "@type": "Service",
      name: serviceName,
      description,
      provider: ORGANIZATION,
      areaServed: { "@type": "Country", name: "India" },
      url: pageUrl,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: serviceName, item: pageUrl },
      ],
    },
  ];

  // Only emit FAQPage if there's real FAQ content to back it — an empty
  // FAQPage node is worse than none (Google actively discourages
  // structured data with no matching visible content).
  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
