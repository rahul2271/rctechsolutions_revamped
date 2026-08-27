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

// FIX (Aug 2026 SEO pass): areaServed was hardcoded to India on every single
// service page, even though RC Tech takes on international / outsourced
// projects too. That's not just an inaccuracy — it actively works against
// ranking for "hire web developer India for USA clients" style queries,
// because Google has no structured signal that this business serves
// anywhere outside India. `buildServiceSchema` now accepts an optional
// `areaServed` override; existing callers that don't pass one keep the old
// India-only behavior (nothing breaks), and the new global/outsourcing page
// passes its own multi-country list.
const DEFAULT_AREA_SERVED = { "@type": "Country", name: "India" };

/**
 * @param {Object} opts
 * @param {string} opts.path            - route path, e.g. "/services/cloud-integration"
 * @param {string} opts.serviceName     - human name for the service (used as Service.name + breadcrumb label)
 * @param {string} opts.description     - short description (use CONFIG.intro — already real, on-page copy)
 * @param {Array<{q:string,a:string}>} [opts.faqs] - pass CONFIG.faqs directly
 * @param {Array<Object>|Object} [opts.areaServed]  - override the default India-only areaServed
 * @param {Array<{name:string,item:string}>} [opts.breadcrumbs] - override the default 3-level breadcrumb
 */
export function buildServiceSchema({ path, serviceName, description, faqs = [], areaServed, breadcrumbs }) {
  const pageUrl = `${SITE_URL}${path}`;

  const graph = [
    {
      "@type": "Service",
      name: serviceName,
      description,
      provider: ORGANIZATION,
      areaServed: areaServed || DEFAULT_AREA_SERVED,
      url: pageUrl,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: (
        breadcrumbs || [
          { name: "Home", item: SITE_URL },
          { name: "Services", item: `${SITE_URL}/services` },
          { name: serviceName, item: pageUrl },
        ]
      ).map((b, i) => ({ "@type": "ListItem", position: i + 1, name: b.name, item: b.item })),
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

// ─── LocalBusiness schema (new) ────────────────────────────────────────────
// WHY THIS EXISTS: the site previously only ever emitted generic
// `Organization` schema. That's fine for describing "a company exists" but
// it's the wrong type for local-pack / Google Maps ranking — Google's own
// local-search documentation expects `LocalBusiness` (or a subtype) with a
// real `address` + `geo` to associate a page with a physical service area.
// Real NAP (Name, Address, Phone) pulled from the actual footer — nothing
// invented here.
const NAP = {
  name: "RC Tech Solutions",
  telephone: "+91-7009646377",
  email: "business@rctechsolutions.com",
  // Pulled verbatim from the site footer (app/components/Footer.js) so the
  // schema NAP and the visible NAP never drift apart — Google's local-SEO
  // guidance explicitly checks for exactly this kind of consistency.
  streetAddress: "3126, Sector 82, JLPL Industrial Area",
  addressLocality: "Mohali",
  addressRegion: "Punjab",
  postalCode: "140306",
  addressCountry: "IN",
  // Approximate Mohali, Punjab coordinates — update to the exact office
  // location if/when a precise Google Business Profile pin is available.
  latitude: 30.7046,
  longitude: 76.7179,
};

/**
 * Builds LocalBusiness + Service + FAQPage + BreadcrumbList schema for a
 * single-city local landing page (e.g. /web-development-company-in-mohali).
 *
 * @param {Object} opts
 * @param {string} opts.path
 * @param {string} opts.cityName        - e.g. "Mohali"
 * @param {string} opts.serviceName     - e.g. "Web Development Company in Mohali"
 * @param {string} opts.description
 * @param {Array<{q:string,a:string}>} [opts.faqs]
 * @param {Array<string>} [opts.sameAs] - social/profile URLs, optional
 */
export function buildLocationSchema({ path, cityName, serviceName, description, faqs = [], sameAs = [] }) {
  const pageUrl = `${SITE_URL}${path}`;

  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": `${pageUrl}#localbusiness`,
    name: NAP.name,
    image: `${SITE_URL}/rclogo.png`,
    url: pageUrl,
    telephone: NAP.telephone,
    email: NAP.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.streetAddress,
      addressLocality: NAP.addressLocality,
      addressRegion: NAP.addressRegion,
      postalCode: NAP.postalCode,
      addressCountry: NAP.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.latitude,
      longitude: NAP.longitude,
    },
    areaServed: { "@type": "City", name: cityName },
    ...(sameAs.length ? { sameAs } : {}),
  };

  const graph = [
    localBusiness,
    {
      "@type": "Service",
      name: serviceName,
      description,
      provider: { "@type": "Organization", name: NAP.name, url: SITE_URL },
      areaServed: { "@type": "City", name: cityName },
      url: pageUrl,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: serviceName, item: pageUrl },
      ],
    },
  ];

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

export { NAP };
