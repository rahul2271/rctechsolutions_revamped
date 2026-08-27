import Link from "next/link";
import ServiceLeadForm from "../components/ServiceLeadForm";
import CircuitTrace from "../components/CircuitTrace";
import { buildLocationSchema } from "../lib/serviceSchema";
import { QuickAnswerBox, PricingTable, ComparisonTable, MistakesList, AreasServed, ProofStats } from "../components/LocationPageBlocks";

const CITY = "Chandigarh";
const PATH = "/web-development-company-in-chandigarh";
const DESCRIPTION =
  "RC Tech Solutions builds professional, trust-driven websites for consultants, clinics, and education brands in Chandigarh — SEO-ready from day one, from a Tricity-based team.";

export const metadata = {
  metadataBase: new URL("https://www.rctechsolutions.com"),
  title: "Web Development Company in Chandigarh | RC Tech Solutions",
  description: DESCRIPTION,
  keywords: [
    "web development company in Chandigarh",
    "website designing company Chandigarh",
    "web development agency Chandigarh",
    "healthcare website design Chandigarh",
    "law firm website design Chandigarh",
  ],
  alternates: { canonical: `https://www.rctechsolutions.com${PATH}` },
  openGraph: {
    title: "Web Development Company in Chandigarh | RC Tech Solutions",
    description: DESCRIPTION,
    url: `https://www.rctechsolutions.com${PATH}`,
    siteName: "RC Tech Solutions",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Chandigarh | RC Tech Solutions",
    description: DESCRIPTION,
  },
};

const faqs = [
  {
    q: "Do you work with Chandigarh clients even though your office is in Mohali?",
    a: "Yes — Chandigarh is a 20-30 minute drive from our Mohali office, and it's one of the areas we actively serve. In-person meetings are available when useful, alongside the usual remote workflow.",
  },
  {
    q: "We're a clinic/consultancy — is a website really worth it over just word-of-mouth referrals?",
    a: "For most Chandigarh consultants, doctors, and educators, a website is what a prospective client checks before they call — even when the referral itself came from word of mouth. A credible site with real credentials and testimonials closes that loop instead of losing the lead to a search result that looks more established.",
  },
  {
    q: "How do you handle content for a professional-services website?",
    a: "We interview you (or your team) about credentials, process, and client outcomes, then write the copy ourselves around that — not generic filler text. You review and approve everything before it goes live.",
  },
  {
    q: "Can you redesign an outdated site without losing our existing Google rankings?",
    a: "Yes. We audit which pages and URLs are already ranking before touching anything, and preserve that structure through 301 redirects where URLs do need to change.",
  },
];

const schema = buildLocationSchema({
  path: PATH,
  cityName: CITY,
  serviceName: "Web Development Company in Chandigarh",
  description: DESCRIPTION,
  faqs,
});

export default function ChandigarhPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="min-h-screen" style={{ background: "var(--rc-paper)" }}>
        <nav className="border-b border-[var(--rc-wire)]" aria-label="Breadcrumb">
          <div className="mx-auto max-w-6xl px-4 py-3 rc-mono text-[0.65rem] text-[rgba(42,45,53,0.6)] flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-[var(--rc-circuit)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--rc-ink-soft)]">Web Development in Chandigarh</span>
          </div>
        </nav>

        <section className="relative overflow-hidden rc-ink-section" style={{ background: "var(--rc-ink)" }}>
          <div className="absolute inset-0 rc-grid-bg opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="rc-via rc-via-pulse" />
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Local · Chandigarh</span>
              </div>
              <h1 className="rc-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.05] text-[var(--rc-paper)]">
                Web Development Company in Chandigarh
              </h1>
              <p className="rc-body mt-5 text-base sm:text-lg text-[rgba(246,242,233,0.65)] leading-relaxed max-w-xl">
                Professional, credibility-first websites for Chandigarh's consultants, clinics, law firms, and education brands — built by a Tricity-based team a short drive away.
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
                <span>20-30 min from Chandigarh</span>
                <span>·</span>
                <span>Fixed pricing</span>
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <ServiceLeadForm
                serviceName="Web Development — Chandigarh"
                heading="Get a free website assessment"
                subheading="Tell us about your practice or business — we'll respond within 24 hours."
              />
            </div>
          </div>
          <CircuitTrace variant="horizontal" color="var(--rc-circuit)" />
        </section>

        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16">
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-12">
            <div>
              <QuickAnswerBox>
                RC Tech Solutions serves Chandigarh from our Mohali office, a 20-30 minute drive away. We build credibility-first websites for consultants, clinics, law firms, and education brands — the kind of business where a visitor decides whether to call within the first few seconds on the page.
              </QuickAnswerBox>

              <ProofStats stats={[
                { value: "50+", label: "Projects delivered" },
                { value: "20-30min", label: "From Chandigarh" },
                { value: "100%", label: "Client-owned code" },
                { value: "24hr", label: "Response time" },
              ]} />

              <section>
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Why Chandigarh is different</span>
                <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-3">
                  What actually matters for a Chandigarh audience
                </h2>
                <p className="rc-body text-[var(--rc-ink-soft)] leading-relaxed mb-3">
                  Chandigarh's business mix skews toward established professionals — doctors, consultants, architects, lawyers, educators — whose clients make decisions based heavily on perceived credibility. That changes what a website needs to prioritize: real credentials, clear process explanation, professional photography, and genuine testimonials matter more here than flashy animation or a startup-style landing page.
                </p>
                <p className="rc-body text-[var(--rc-ink-soft)] leading-relaxed">
                  Local search in these categories — healthcare, legal, education — also tends to be more competitive than generic retail keywords, which is exactly why we build local SEO into the page structure itself rather than treating it as a separate add-on later.
                </p>
              </section>

              <PricingTable
                rows={[
                  { type: "Professional-services website (single practice)", range: "₹20,000 – ₹40,000" },
                  { type: "Multi-page brand website with booking form", range: "₹40,000 – ₹90,000" },
                  { type: "E-commerce (Shopify / custom)", range: "₹50,000+" },
                  { type: "Custom web app / patient or client portal", range: "Custom quote based on scope" },
                ]}
                note="Every professional-services build includes a booking or consultation-request form, and a review-collection setup for Google Business Profile."
              />

              <ComparisonTable
                title="What separates a credibility-first build from a generic one"
                columns={["", "Generic template site", "RC Tech Solutions"]}
                rows={[
                  ["Photography", "Stock images", "Real photos of you/your practice"],
                  ["Credentials", "Buried in an 'About' page", "Front and center, structured for trust"],
                  ["Testimonials", "Generic or fake-looking", "Real client feedback, verified"],
                  ["Local SEO", "Afterthought", "Built into page structure from day one"],
                ]}
              />

              <MistakesList
                title="Mistakes Chandigarh professionals make when hiring a web developer"
                items={[
                  "Prioritizing visual polish over trust signals — a beautiful site with no visible credentials or testimonials converts worse than a plainer one that has both.",
                  "Not asking whether the agency has actually built sites for regulated or credential-sensitive industries (healthcare, legal) before hiring them for one.",
                  "Skipping a booking/consultation form in favor of just a phone number — most visitors research after hours and want to request a slot without calling.",
                  "Ignoring Google Business Profile setup, which for local professional-services searches often matters as much as the website itself.",
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
                title="Sectors we cover in Chandigarh"
                areas={["Sector 17", "Sector 22", "Sector 34", "Sector 43", "IT Park", "Manimajra", "Panchkula border"]}
              />
              <div className="rc-blueprint-card p-5">
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Contact</span>
                <p className="rc-body text-sm text-[var(--rc-ink)] mt-3">Mohali, Punjab 140306 (serving Chandigarh)</p>
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
                  <li><Link href="/web-development-company-in-mohali" className="hover:underline">Web development in Mohali →</Link></li>
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
