import Link from "next/link";
import ServiceLeadForm from "../components/ServiceLeadForm";
import CircuitTrace from "../components/CircuitTrace";
import { buildServiceSchema } from "../lib/serviceSchema";
import { QuickAnswerBox, PricingTable, ComparisonTable, MistakesList, ProofStats } from "../components/LocationPageBlocks";

const PATH = "/hire-web-developers-india";
const DESCRIPTION =
  "RC Tech Solutions is an India-based web development team building custom Next.js, Shopify, and full-stack websites for clients in the USA, UK, and Canada — fixed USD pricing, overlapping working hours, full code ownership.";

export const metadata = {
  metadataBase: new URL("https://www.rctechsolutions.com"),
  title: "Hire Web Developers in India for USA, UK & Canada Clients",
  description: DESCRIPTION,
  keywords: [
    "hire web developer india for usa clients",
    "outsource web development to india",
    "affordable next.js developer for us startups",
    "india web development agency for international clients",
    "hire shopify developer india",
  ],
  alternates: { canonical: `https://www.rctechsolutions.com${PATH}` },
  openGraph: {
    title: "Hire Web Developers in India for USA, UK & Canada Clients",
    description: DESCRIPTION,
    url: `https://www.rctechsolutions.com${PATH}`,
    siteName: "RC Tech Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Web Developers in India for USA, UK & Canada Clients",
    description: DESCRIPTION,
  },
};

const faqs = [
  {
    q: "How do overlapping working hours actually work if your team is in India?",
    a: "IST is 9.5-10.5 hours ahead of US time zones and 4.5-5.5 hours ahead of the UK, depending on daylight saving. In practice, our afternoon (roughly 1pm-9pm IST) overlaps with US morning-to-midday and UK morning-to-evening — which is when we schedule calls and stay live for async messages.",
  },
  {
    q: "How do payments and contracts work for an international client?",
    a: "We invoice in USD (or GBP/CAD on request) via international transfer, PayPal, or Wise, with a written scope of work and a fixed price agreed before development starts — the same fixed-price, no-scope-creep approach we use for domestic clients.",
  },
  {
    q: "Will I actually own the code, domain, and hosting after the project?",
    a: "Yes — full ownership transfers to you at project completion. This is worth confirming with any agency in writing before you sign, since not every outsourced provider does this by default.",
  },
  {
    q: "Why would I hire an India-based team instead of a local US/UK agency?",
    a: "Cost is the obvious reason — a comparable custom build typically costs meaningfully less than a US or UK agency quote — but the honest answer is also that you're trading some in-person convenience for a fixed-price, well-documented process. We make that trade work by over-communicating: daily async updates, recorded loom walkthroughs, and a single point of contact.",
  },
];

const schema = buildServiceSchema({
  path: PATH,
  serviceName: "Web Development Outsourcing — India to USA, UK & Canada",
  description: DESCRIPTION,
  faqs,
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "India" },
  ],
  breadcrumbs: [
    { name: "Home", item: "https://www.rctechsolutions.com" },
    { name: "Hire Web Developers in India for International Clients", item: `https://www.rctechsolutions.com${PATH}` },
  ],
});

export default function GlobalOutsourcingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="min-h-screen" style={{ background: "var(--rc-paper)" }}>
        <nav className="border-b border-[var(--rc-wire)]" aria-label="Breadcrumb">
          <div className="mx-auto max-w-6xl px-4 py-3 rc-mono text-[0.65rem] text-[rgba(42,45,53,0.6)] flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-[var(--rc-circuit)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--rc-ink-soft)]">Hire Web Developers in India</span>
          </div>
        </nav>

        <section className="relative overflow-hidden rc-ink-section" style={{ background: "var(--rc-ink)" }}>
          <div className="absolute inset-0 rc-grid-bg opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="rc-via rc-via-pulse" />
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Global · USA · UK · Canada</span>
              </div>
              <h1 className="rc-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.05] text-[var(--rc-paper)]">
                Hire Web Developers in India for Your USA, UK, or Canada Business
              </h1>
              <p className="rc-body mt-5 text-base sm:text-lg text-[rgba(246,242,233,0.65)] leading-relaxed max-w-xl">
                Custom Next.js, React, and Shopify development from a Mohali, India-based team — fixed USD pricing, daily async updates, and overlapping working hours with US and UK time zones.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#get-quote" className="rc-mono text-xs uppercase tracking-wider px-6 py-3.5 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors">
                  Get a free quote
                </a>
                <Link href="/contact" className="rc-mono text-xs uppercase tracking-wider px-6 py-3.5 border border-[rgba(246,242,233,0.25)] text-[var(--rc-paper)] hover:border-[var(--rc-paper)] transition-colors">
                  Book an intro call
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 rc-mono text-[0.65rem] text-[rgba(246,242,233,0.4)]">
                <span>50+ projects delivered</span>
                <span>·</span>
                <span>USD / GBP / CAD invoicing</span>
                <span>·</span>
                <span>Full code ownership</span>
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <ServiceLeadForm
                serviceName="Web Development — International"
                heading="Get a free project quote"
                subheading="Tell us about your project — we'll reply within 24 hours with a fixed-price proposal."
              />
            </div>
          </div>
          <CircuitTrace variant="horizontal" color="var(--rc-circuit)" />
        </section>

        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16">
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-12">
            <div>
              <QuickAnswerBox>
                RC Tech Solutions is a web development agency based in Mohali, India, building custom websites and web apps for clients in the USA, UK, and Canada. We invoice in USD (or GBP/CAD on request), work overlapping hours with US and UK time zones, and hand over full ownership of the code, domain, and hosting at project completion.
              </QuickAnswerBox>

              <ProofStats stats={[
                { value: "50+", label: "Projects delivered" },
                { value: "9.5hr", label: "IST-EST overlap window" },
                { value: "100%", label: "Client-owned code" },
                { value: "24hr", label: "Response time" },
              ]} />

              <section>
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Why outsource to India</span>
                <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-3">
                  What you're actually trading, and what you're not
                </h2>
                <p className="rc-body text-[var(--rc-ink-soft)] leading-relaxed mb-3">
                  The honest pitch for hiring an India-based team isn't just "cheaper" — it's cheaper for a comparable skill level, because software salaries and overhead costs are genuinely lower here, not because corners get cut. What you give up is in-person meetings; what you gain, if the agency is set up for it, is a fixed price agreed upfront, daily written updates instead of relying on memory from a call, and a team that's awake and responsive during your afternoon and evening.
                </p>
                <p className="rc-body text-[var(--rc-ink-soft)] leading-relaxed">
                  We work in Next.js, React, TypeScript, and Shopify/Liquid — the same stack whether the client is in Mohali or Michigan — and every project ships with SEO, schema, and performance basics configured before handover, not left for you to figure out later.
                </p>
              </section>

              <PricingTable
                rows={[
                  { type: "Marketing / brochure website", range: "$600 – $1,500" },
                  { type: "Custom Next.js / React web app", range: "$1,500 – $6,000" },
                  { type: "Shopify store (theme + apps + setup)", range: "$800 – $3,000" },
                  { type: "Ongoing retainer (support, features, SEO)", range: "$400 – $1,200 / month" },
                ]}
                note="Pricing is quoted after a short discovery call, once we understand actual scope — these ranges reflect typical projects, not a fixed menu. All quotes are fixed in USD before work starts."
              />

              <ComparisonTable
                title="India-based agency vs. a local US/UK agency"
                columns={["", "Local US/UK agency", "RC Tech Solutions (India)"]}
                rows={[
                  ["Typical cost for a comparable build", "Higher — local salary overhead", "Lower for the same skill level"],
                  ["Communication", "In-person, business hours only", "Async daily updates + overlap-hour calls"],
                  ["Time zone availability", "Your business hours only", "Available through your afternoon/evening"],
                  ["Code ownership", "Varies by contract", "Full ownership on completion, always"],
                ]}
              />

              <MistakesList
                title="Mistakes to avoid when outsourcing web development to India"
                items={[
                  "Not getting a fixed-price, written scope of work before development starts — verbal agreements lead to scope disputes later.",
                  "Assuming zero time-zone overlap without checking — most India-based teams that work with US/UK clients shift their hours to create a real overlap window, not just email at 3am your time.",
                  "Not confirming code and domain ownership terms upfront, in writing — ask this before signing, not after the project ends.",
                  "Judging communication quality from the sales call alone — ask for a reference client in your own country/timezone who can speak to the actual working process.",
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
              <div className="rc-blueprint-card p-5">
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Stack we work in</span>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Next.js", "React", "TypeScript", "Shopify/Liquid", "MongoDB", "Tailwind CSS"].map((t) => (
                    <span key={t} className="rc-mono text-[0.65rem] px-2.5 py-1 border border-[var(--rc-wire)] text-[var(--rc-ink-soft)]">{t}</span>
                  ))}
                </div>
              </div>
              <div className="rc-blueprint-card p-5">
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Contact</span>
                <p className="rc-body text-sm text-[var(--rc-ink)] mt-3">Mohali, Punjab, India — serving USA, UK &amp; Canada</p>
                <a href="mailto:business@rctechsolutions.com" className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.6)] hover:text-[var(--rc-circuit)] block mt-2">
                  business@rctechsolutions.com
                </a>
              </div>
              <div className="rc-blueprint-card p-5 text-center" style={{ background: "var(--rc-ink)" }}>
                <p className="rc-display text-sm font-semibold text-[var(--rc-paper)] mb-1">Have a project in mind?</p>
                <p className="rc-body text-xs text-[rgba(246,242,233,0.5)] mb-4">Free intro call — no obligation.</p>
                <a href="#get-quote" className="rc-mono text-[0.65rem] uppercase tracking-wider inline-flex items-center justify-center px-5 py-3 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors w-full">
                  Talk to us
                </a>
              </div>
              <div className="rc-blueprint-card p-5">
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Also serving</span>
                <ul className="mt-3 space-y-2 rc-body text-sm text-[var(--rc-circuit)]">
                  <li><Link href="/web-development-company-in-mohali" className="hover:underline">Local: Mohali →</Link></li>
                  <li><Link href="/web-development-company-in-chandigarh" className="hover:underline">Local: Chandigarh →</Link></li>
                  <li><Link href="/web-development-company-in-panchkula" className="hover:underline">Local: Panchkula →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
