import Link from "next/link";
import ServiceLeadForm from "../components/ServiceLeadForm";
import CircuitTrace from "../components/CircuitTrace";
import { buildLocationSchema } from "../lib/serviceSchema";
import { QuickAnswerBox, PricingTable, ComparisonTable, MistakesList, AreasServed, ProofStats } from "../components/LocationPageBlocks";

const CITY = "Mohali";
const PATH = "/web-development-company-in-mohali";
const DESCRIPTION =
  "RC Tech Solutions is a web development and digital marketing agency based in Mohali, Punjab, building fast, SEO-ready websites for businesses across the Tricity.";

export const metadata = {
  metadataBase: new URL("https://www.rctechsolutions.com"),
  title: "Web Development Company in Mohali, Punjab | RC Tech Solutions",
  description: DESCRIPTION,
  keywords: [
    "web development company in Mohali",
    "website designer Mohali",
    "web development agency Mohali Punjab",
    "website designing company Sector 70 Mohali",
    "ecommerce website development Mohali",
  ],
  alternates: { canonical: `https://www.rctechsolutions.com${PATH}` },
  openGraph: {
    title: "Web Development Company in Mohali, Punjab | RC Tech Solutions",
    description: DESCRIPTION,
    url: `https://www.rctechsolutions.com${PATH}`,
    siteName: "RC Tech Solutions",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Mohali, Punjab | RC Tech Solutions",
    description: DESCRIPTION,
  },
};

const faqs = [
  {
    q: "Is RC Tech Solutions actually based in Mohali, or is this just a landing page?",
    a: "We're genuinely based in Mohali, Punjab (140306). The founder and core team work out of Mohali, and we take in-person meetings with local clients when it's useful for the project.",
  },
  {
    q: "How long does a business website take to build?",
    a: "A standard business website typically takes 2-3 weeks from approved design to launch. E-commerce and custom web-app builds usually run 4-8 weeks depending on scope.",
  },
  {
    q: "Do you only build websites, or do you also handle SEO after launch?",
    a: "Both. Every site we build ships with on-page SEO, schema markup, and a sitemap configured before launch — and we offer ongoing SEO and content work for clients who want to keep growing traffic after the site goes live.",
  },
  {
    q: "What if I already have a website and just want it redesigned?",
    a: "Redesigns are common work for us. We audit what's already ranking, preserve those URLs and rankings where possible, and rebuild the rest around a faster, more current design.",
  },
];

const schema = buildLocationSchema({
  path: PATH,
  cityName: CITY,
  serviceName: "Web Development Company in Mohali, Punjab",
  description: DESCRIPTION,
  faqs,
});

export default function MohaliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="min-h-screen" style={{ background: "var(--rc-paper)" }}>
        <nav className="border-b border-[var(--rc-wire)]" aria-label="Breadcrumb">
          <div className="mx-auto max-w-6xl px-4 py-3 rc-mono text-[0.65rem] text-[rgba(42,45,53,0.6)] flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-[var(--rc-circuit)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--rc-ink-soft)]">Web Development in Mohali</span>
          </div>
        </nav>

        <section className="relative overflow-hidden rc-ink-section" style={{ background: "var(--rc-ink)" }}>
          <div className="absolute inset-0 rc-grid-bg opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="rc-via rc-via-pulse" />
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Local · Mohali, Punjab</span>
              </div>
              <h1 className="rc-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.05] text-[var(--rc-paper)]">
                Web Development Company in Mohali, Punjab
              </h1>
              <p className="rc-body mt-5 text-base sm:text-lg text-[rgba(246,242,233,0.65)] leading-relaxed max-w-xl">
                A Mohali-based team building fast, SEO-ready websites for IT companies, D2C brands, clinics, and local service businesses across Phase 1-11, Sector 70-82, and the wider Tricity.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#get-quote" className="rc-mono text-xs uppercase tracking-wider px-6 py-3.5 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors">
                  Get a free quote
                </a>
                <Link href="/contact" className="rc-mono text-xs uppercase tracking-wider px-6 py-3.5 border border-[rgba(246,242,233,0.25)] text-[var(--rc-paper)] hover:border-[var(--rc-paper)] transition-colors">
                  Book a strategy call
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 rc-mono text-[0.65rem] text-[rgba(246,242,233,0.4)]">
                <span>50+ projects delivered</span>
                <span>·</span>
                <span>Registered office in Mohali, Punjab 140306</span>
                <span>·</span>
                <span>Fixed pricing</span>
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <ServiceLeadForm
                serviceName="Web Development — Mohali"
                heading="Get a free website assessment"
                subheading="Tell us about your business and what you need — we'll respond within 24 hours."
              />
            </div>
          </div>
          <CircuitTrace variant="horizontal" color="var(--rc-circuit)" />
        </section>

        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16">
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-12">
            <div>
              <QuickAnswerBox>
                RC Tech Solutions is a Mohali-based web development and digital marketing agency serving Phase 1-11, Sector 70-82, Kharar, and the wider Tricity. We build custom Next.js and Shopify websites, typically delivered in 2-4 weeks, with fixed pricing and SEO configured from day one — not added later as an afterthought.
              </QuickAnswerBox>

              <ProofStats stats={[
                { value: "50+", label: "Projects delivered" },
                { value: "2-3wk", label: "Typical turnaround" },
                { value: "100%", label: "Client-owned code" },
                { value: "24hr", label: "Response time" },
              ]} />

              <section>
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Why Mohali</span>
                <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-3">
                  Why a Mohali-based team matters for a Mohali business
                </h2>
                <p className="rc-body text-[var(--rc-ink-soft)] leading-relaxed mb-3">
                  Mohali's IT City and the Phase 8/9 startup corridor have brought in a steady stream of new SaaS, D2C, and service businesses over the last few years — which also means more of them are competing for the same handful of Google search terms. A generic template website doesn't hold up in that environment; what actually moves the needle is a site built around your specific offer, with local SEO baked in rather than bolted on.
                </p>
                <p className="rc-body text-[var(--rc-ink-soft)] leading-relaxed">
                  Being physically in Mohali also means faster back-and-forth during the build — no waiting a day across time zones for a design comment, and an in-person meeting is on the table if it helps move a decision along.
                </p>
              </section>

              <PricingTable
                rows={[
                  { type: "Basic business website", range: "₹15,000 – ₹30,000" },
                  { type: "Custom Next.js / React website", range: "₹35,000 – ₹90,000" },
                  { type: "E-commerce (Shopify / custom)", range: "₹50,000+" },
                  { type: "Custom web app / CRM / portal", range: "Custom quote based on scope" },
                ]}
                note="Final pricing depends on features, content volume, and integrations. We give a fixed, written quote after a short discovery call — no scope creep billed without your sign-off first."
              />

              <ComparisonTable
                title="Agency vs. freelancer vs. DIY builder"
                columns={["", "DIY builder (Wix/Squarespace)", "Freelancer", "RC Tech Solutions"]}
                rows={[
                  ["Design", "Template-based", "Depends on the person", "Custom, built for your brand"],
                  ["SEO setup", "Basic/manual", "Often skipped or extra", "Included from day one"],
                  ["Ownership", "Locked to platform", "Usually yes", "You own domain, code, hosting"],
                  ["Support after launch", "Self-serve", "Inconsistent", "Structured, included"],
                  ["Who's accountable", "You", "One person", "A team, one point of contact"],
                ]}
              />

              <MistakesList
                title="Mistakes Mohali businesses make when hiring a web developer"
                items={[
                  "Picking the cheapest quote without asking what's excluded — SEO setup, mobile optimization, and post-launch support are often left out and billed later as add-ons.",
                  "Not confirming who owns the domain, hosting account, and source files after payment — this should be you, not the agency.",
                  "Judging a developer purely on a portfolio screenshot instead of asking to see 2-3 live, working sites they actually built.",
                  "Skipping the local SEO conversation entirely — a site that looks great but was never set up to rank locally won't bring in Mohali customers on its own.",
                ]}
              />

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
              <AreasServed
                title="Localities we cover in Mohali"
                areas={["Phase 1-11", "Sector 70-82", "IT City", "Industrial Area", "Kharar", "Zirakpur", "Aerocity"]}
              />
              <div className="rc-blueprint-card p-5">
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Contact</span>
                <p className="rc-body text-sm text-[var(--rc-ink)] mt-3">Mohali, Punjab 140306</p>
                <a href="tel:+917009646377" className="rc-display text-base font-semibold text-[var(--rc-ink)] hover:text-[var(--rc-circuit)] block mt-2">
                  +91 70096-46377
                </a>
                <a href="mailto:business@rctechsolutions.com" className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.6)] hover:text-[var(--rc-circuit)] block mt-1">
                  business@rctechsolutions.com
                </a>
              </div>
              <div className="rc-blueprint-card p-5 text-center" style={{ background: "var(--rc-ink)" }}>
                <p className="rc-display text-sm font-semibold text-[var(--rc-paper)] mb-1">Have a project in mind?</p>
                <p className="rc-body text-xs text-[rgba(246,242,233,0.5)] mb-4">Free 20-minute call — no obligation.</p>
                <a href="#get-quote" className="rc-mono text-[0.65rem] uppercase tracking-wider inline-flex items-center justify-center px-5 py-3 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors w-full">
                  Talk to us
                </a>
              </div>
              <div className="rc-blueprint-card p-5">
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Nearby</span>
                <ul className="mt-3 space-y-2 rc-body text-sm text-[var(--rc-circuit)]">
                  <li><Link href="/web-development-company-in-chandigarh" className="hover:underline">Web development in Chandigarh →</Link></li>
                  <li><Link href="/web-development-company-in-panchkula" className="hover:underline">Web development in Panchkula →</Link></li>
                  <li><Link href="/hire-web-developers-india" className="hover:underline">Hiring from outside India? →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
