import ServiceLeadForm from "../../../components/ServiceLeadForm";
import CircuitTrace from "../../../components/CircuitTrace";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://www.rctechsolutions.com"),
  title: "Keyword Research & SEO Content Strategy Services",
  description: "Stop guessing what to write. RC Tech Solutions delivers data-backed keyword research and content strategy that targets searches your customers are actually making.",
  keywords: ["keyword research services India", "seo content strategy company", "content planning services Mohali", "keyword research and mapping"],
  alternates: { canonical: "https://www.rctechsolutions.com/services/seo/keyword-research-content-strategy" },
  openGraph: {
    title: "Keyword Research & Content Strategy | RC Tech Solutions",
    description: "Stop guessing what to write. RC Tech Solutions delivers data-backed keyword research and content strategy that targets searches your customers are actually making.",
    url: "https://www.rctechsolutions.com/services/seo/keyword-research-content-strategy",
    siteName: "RC Tech Solutions",
    images: [{ url: "https://www.rctechsolutions.com/og/keyword-research-cover.jpg", width: 1200, height: 630, alt: "Keyword Research & Content Strategy" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keyword Research & Content Strategy | RC Tech Solutions",
    description: "Stop guessing what to write. RC Tech Solutions delivers data-backed keyword research and content strategy that targets searches your customers are actually making.",
    images: ["https://www.rctechsolutions.com/og/keyword-research-cover.jpg"],
  },
};

const faqs = [{"q":"Do you also write the content, or just the strategy?","a":"We offer both — strategy-only engagements for teams with in-house writers, or full content creation as an add-on service."},{"q":"How many keywords will I get?","a":"A typical research engagement delivers 50-150 prioritised keyword opportunities depending on your industry and market size."},{"q":"What tools do you use for keyword research?","a":"We use a combination of Google Search Console data, Ahrefs/SEMrush, and manual SERP analysis to validate real ranking opportunity."}];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Keyword Research & Content Strategy",
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
  description: "Stop guessing what to write. RC Tech Solutions delivers data-backed keyword research and content strategy that targets searches your customers are actually making.",
  url: "https://www.rctechsolutions.com/services/seo/keyword-research-content-strategy",
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
    { "@type": "ListItem", position: 3, name: "SEO Services", item: "https://www.rctechsolutions.com/services/seo" },
    { "@type": "ListItem", position: 4, name: "Keyword Research & Content Strategy", item: "https://www.rctechsolutions.com/services/seo/keyword-research-content-strategy" },
  ],
};

const includedItems = [{"title":"Competitor keyword gap analysis","desc":"Find keywords your competitors rank for that you're currently missing."},{"title":"Search intent mapping","desc":"Every keyword classified by intent so content matches what searchers actually want."},{"title":"Content calendar","desc":"A prioritised, scheduled plan of what to publish and when."},{"title":"Topic cluster strategy","desc":"Content organised into clusters that build topical authority with Google."},{"title":"Low-competition opportunities","desc":"Keywords where you can realistically rank in 60-90 days, not years."},{"title":"Existing content audit","desc":"Your current pages reviewed for keyword optimization opportunities."}];
const processSteps = [{"title":"Industry & competitor research","desc":"We study your market and top-ranking competitors."},{"title":"Keyword discovery","desc":"Hundreds of keyword opportunities identified and filtered by relevance."},{"title":"Strategy & content mapping","desc":"Keywords mapped to a realistic, prioritised content calendar."},{"title":"Ongoing refinement","desc":"Strategy adjusted monthly based on actual ranking performance."}];

export default function KeywordResearchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]) }} />

      <div className="min-h-screen" style={{ background: "var(--rc-paper)" }}>
        <nav className="border-b border-[var(--rc-wire)]" aria-label="Breadcrumb">
          <div className="mx-auto max-w-6xl px-4 py-3 rc-mono text-[0.65rem] text-[rgba(42,45,53,0.6)] flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-[var(--rc-circuit)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/seo" className="hover:text-[var(--rc-circuit)] transition-colors">SEO Services</Link>
            <span>/</span>
            <span className="text-[var(--rc-ink-soft)]">Keyword Research & Content Strategy</span>
          </div>
        </nav>

        <section className="relative overflow-hidden rc-ink-section" style={{ background: "var(--rc-ink)" }}>
          <div className="absolute inset-0 rc-grid-bg opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="rc-via rc-via-pulse" />
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>SEO Services · RC Tech Solutions</span>
              </div>
              <h1 className="rc-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.05] text-[var(--rc-paper)]">
                Keyword Research & Content Strategy
              </h1>
              <p className="rc-body mt-5 text-base sm:text-lg text-[rgba(246,242,233,0.65)] leading-relaxed max-w-xl">
                The right content starts with the right keywords. We research what your customers actually search for, then map it into a content plan built to rank.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#get-quote" className="rc-mono text-xs uppercase tracking-wider px-6 py-3.5 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors">
                  Get a free quote
                </a>
                <Link href="/services/seo" className="rc-mono text-xs uppercase tracking-wider px-6 py-3.5 border border-[rgba(246,242,233,0.25)] text-[var(--rc-paper)] hover:border-[var(--rc-paper)] transition-colors">
                  ← All SEO Services
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
                serviceName="Keyword Research & Content Strategy"
                heading="Get a free keyword opportunity report"
                subheading="Tell us your industry and target market — we'll identify quick-win keywords."
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
                <p className="rc-body text-[var(--rc-ink-soft)] mb-6 leading-relaxed">Our keyword research goes beyond volume — we factor in competition, intent, and your realistic ability to rank.</p>
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
