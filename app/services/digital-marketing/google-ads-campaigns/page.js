import ServiceLeadForm from "../../../components/ServiceLeadForm";
import CircuitTrace from "../../../components/CircuitTrace";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://www.rctechsolutions.com"),
  title: "Google Ads Management Services in India",
  description: "Stop wasting ad spend on clicks that don't convert. RC Tech Solutions builds and manages Google Search, Shopping & Display campaigns focused on real ROI.",
  keywords: ["google ads management India", "ppc management company Mohali", "google ads agency Punjab", "google shopping ads management"],
  alternates: { canonical: "https://www.rctechsolutions.com/services/digital-marketing/google-ads-campaigns" },
  openGraph: {
    title: "Google Ads Campaign Management | RC Tech Solutions",
    description: "Stop wasting ad spend on clicks that don't convert. RC Tech Solutions builds and manages Google Search, Shopping & Display campaigns focused on real ROI.",
    url: "https://www.rctechsolutions.com/services/digital-marketing/google-ads-campaigns",
    siteName: "RC Tech Solutions",
    images: [{ url: "https://www.rctechsolutions.com/og/google-ads-cover.jpg", width: 1200, height: 630, alt: "Google Ads Campaign Management" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Campaign Management | RC Tech Solutions",
    description: "Stop wasting ad spend on clicks that don't convert. RC Tech Solutions builds and manages Google Search, Shopping & Display campaigns focused on real ROI.",
    images: ["https://www.rctechsolutions.com/og/google-ads-cover.jpg"],
  },
};

const faqs = [{"q":"What's the minimum ad budget you recommend?","a":"For most local service businesses, we recommend starting with at least ₹15,000-25,000/month in ad spend to gather enough data for meaningful optimization."},{"q":"Do you charge a management fee on top of ad spend?","a":"Yes, our management fee is separate from your ad budget — 100% of your ad spend goes to Google. Contact us for current management fee rates."},{"q":"How soon will I see results?","a":"Search campaigns can drive traffic immediately, but meaningful optimization typically takes 4-6 weeks of data collection."}];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Google Ads Campaign Management",
  provider: {
    "@type": "Organization",
    name: "RC Tech Solutions",
    url: "https://www.rctechsolutions.com",
  },
  areaServed: [
    { "@type": "City", name: "Mohali" },
    { "@type": "City", name: "Chandigarh" },
    { "@type": "Country", name: "India" },
  ],
  description: "Stop wasting ad spend on clicks that don't convert. RC Tech Solutions builds and manages Google Search, Shopping & Display campaigns focused on real ROI.",
  url: "https://www.rctechsolutions.com/services/digital-marketing/google-ads-campaigns",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rctechsolutions.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.rctechsolutions.com/services" },
    { "@type": "ListItem", position: 3, name: "Digital Marketing", item: "https://www.rctechsolutions.com/services/digital-marketing" },
    { "@type": "ListItem", position: 4, name: "Google Ads Campaign Management", item: "https://www.rctechsolutions.com/services/digital-marketing/google-ads-campaigns" },
  ],
};

const includedItems = [{"title":"Campaign strategy & setup","desc":"Search, Shopping, or Display campaigns structured around your actual goals."},{"title":"Keyword & negative keyword research","desc":"Targeting the right searches while filtering out wasted spend."},{"title":"Ad copy & creative testing","desc":"Multiple ad variations tested to find what converts best."},{"title":"Conversion tracking setup","desc":"Proper tracking so you know exactly what's driving results."},{"title":"Bid & budget optimization","desc":"Ongoing adjustments to improve cost-per-conversion over time."},{"title":"Transparent monthly reporting","desc":"Clear reports on spend, conversions, and ROI — no jargon."}];
const processSteps = [{"title":"Account audit or setup","desc":"We review existing campaigns or build new ones from scratch."},{"title":"Launch & monitor","desc":"Campaigns go live with close daily monitoring in the first weeks."},{"title":"Optimise","desc":"Bids, keywords, and creative refined based on real performance data."},{"title":"Scale","desc":"Budget reallocated toward what's working best as results stabilise."}];

export default function GoogleAdsCampaignsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]) }} />

      <div className="min-h-screen" style={{ background: "var(--rc-paper)" }}>
        <nav className="border-b border-[var(--rc-wire)]" aria-label="Breadcrumb">
          <div className="mx-auto max-w-6xl px-4 py-3 rc-mono text-[0.65rem] text-[rgba(42,45,53,0.6)] flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-[var(--rc-circuit)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/digital-marketing" className="hover:text-[var(--rc-circuit)] transition-colors">Digital Marketing</Link>
            <span>/</span>
            <span className="text-[var(--rc-ink-soft)]">Google Ads Campaign Management</span>
          </div>
        </nav>

        <section className="relative overflow-hidden rc-ink-section" style={{ background: "var(--rc-ink)" }}>
          <div className="absolute inset-0 rc-grid-bg opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="rc-via rc-via-pulse" />
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Digital Marketing · RC Tech Solutions</span>
              </div>
              <h1 className="rc-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.05] text-[var(--rc-paper)]">
                Google Ads Campaign Management
              </h1>
              <p className="rc-body mt-5 text-base sm:text-lg text-[rgba(246,242,233,0.65)] leading-relaxed max-w-xl">
                Good ads don't just get clicks — they get qualified leads at a sustainable cost. We build, run, and continuously optimise Google Ads campaigns around real ROI.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#get-quote" className="rc-mono text-xs uppercase tracking-wider px-6 py-3.5 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors">
                  Get a free quote
                </a>
                <Link href="/services/digital-marketing" className="rc-mono text-xs uppercase tracking-wider px-6 py-3.5 border border-[rgba(246,242,233,0.25)] text-[var(--rc-paper)] hover:border-[var(--rc-paper)] transition-colors">
                  ← All Digital Marketing
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 rc-mono text-[0.65rem] text-[rgba(246,242,233,0.4)]">
                <span>50+ projects delivered</span>
                <span>·</span>
                <span>Based in Mohali, Punjab</span>
                <span>·</span>
                <span>Transparent pricing</span>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <ServiceLeadForm
                serviceName="Google Ads Campaign Management"
                heading="Get a free Google Ads audit"
                subheading="Already running ads? Share your account and we'll find quick wins. New to ads? Let's plan your launch."
              />
            </div>
          </div>
          <CircuitTrace variant="horizontal" color="var(--rc-circuit)" />
        </section>

        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16">
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-12">
            <div>
              <section>
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>What's included</span>
                <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-3">Scope of work</h2>
                <p className="rc-body text-[var(--rc-ink-soft)] mb-6 leading-relaxed">Every campaign we manage is built around measurable conversions, not vanity click metrics.</p>
                <div className="grid sm:grid-cols-2 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
                  {includedItems.map((item, i) => (
                    <div key={i} className="bg-[var(--rc-paper)] p-5">
                      <h3 className="rc-body text-sm font-semibold text-[var(--rc-ink)] mb-1.5">{item.title}</h3>
                      <p className="rc-body text-xs text-[rgba(42,45,53,0.75)] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-14">
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Sequence</span>
                <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Our process</h2>
                <div className="space-y-0">
                  {processSteps.map((step, i) => (
                    <div key={i} className="flex gap-5 py-4 border-b border-[var(--rc-wire)] last:border-0">
                      <div className="flex-shrink-0 rc-mono text-xs font-medium pt-0.5" style={{ color: "var(--rc-circuit)" }}>
                        0{i + 1}
                      </div>
                      <div>
                        <h3 className="rc-body text-sm font-semibold text-[var(--rc-ink)]">{step.title}</h3>
                        <p className="rc-body mt-1 text-xs text-[rgba(42,45,53,0.75)] leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-14">
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>FAQ</span>
                <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Questions, answered</h2>
                <div className="divide-y divide-[var(--rc-wire)] border-t border-b border-[var(--rc-wire)]">
                  {faqs.map((f, i) => (
                    <details key={i} className="group py-4">
                      <summary className="flex cursor-pointer items-center justify-between rc-body text-sm font-medium text-[var(--rc-ink)] list-none">
                        {f.q}
                        <span className="ml-4 rc-mono text-[var(--rc-circuit)] group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <p className="rc-body mt-3 text-sm text-[var(--rc-ink-soft)] leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-5">
              <div className="rc-blueprint-card p-5">
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Why RC Tech</span>
                <ul className="mt-3 space-y-2.5 rc-body text-sm text-[var(--rc-ink-soft)]">
                  <li className="flex gap-2"><span style={{ color: "var(--rc-trace)" }}>—</span> Fixed, transparent pricing</li>
                  <li className="flex gap-2"><span style={{ color: "var(--rc-trace)" }}>—</span> Dedicated project manager</li>
                  <li className="flex gap-2"><span style={{ color: "var(--rc-trace)" }}>—</span> Post-launch support included</li>
                  <li className="flex gap-2"><span style={{ color: "var(--rc-trace)" }}>—</span> SEO-built from day one</li>
                </ul>
              </div>
              <div className="rc-blueprint-card p-5 text-center" style={{ background: "var(--rc-ink)" }}>
                <p className="rc-display text-sm font-semibold text-[var(--rc-paper)] mb-1">Have a project in mind?</p>
                <p className="rc-body text-xs text-[rgba(246,242,233,0.5)] mb-4">Let's scope it together — free, no obligation.</p>
                <a href="#get-quote" className="rc-mono text-[0.65rem] uppercase tracking-wider inline-flex items-center justify-center px-5 py-3 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors w-full">
                  Talk to us
                </a>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
