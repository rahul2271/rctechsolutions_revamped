import Link from "next/link";
import ServiceLeadForm from "../components/ServiceLeadForm";
import CircuitTrace from "../components/CircuitTrace";
import { buildLocationSchema } from "../lib/serviceSchema";
import { QuickAnswerBox, PricingTable, ComparisonTable, MistakesList, AreasServed, ProofStats } from "../components/LocationPageBlocks";

const CITY = "Panchkula";
const PATH = "/web-development-company-in-panchkula";
const DESCRIPTION =
  "RC Tech Solutions builds fast, mobile-first websites for Panchkula's retail, hospitality, and service businesses, with Google Business Profile and local SEO set up from day one.";

export const metadata = {
  metadataBase: new URL("https://www.rctechsolutions.com"),
  title: "Web Development Company in Panchkula | RC Tech Solutions",
  description: DESCRIPTION,
  keywords: [
    "web development company in Panchkula",
    "website designing company Panchkula",
    "restaurant website design Panchkula",
    "salon gym website Panchkula",
    "local seo Panchkula",
  ],
  alternates: { canonical: `https://www.rctechsolutions.com${PATH}` },
  openGraph: {
    title: "Web Development Company in Panchkula | RC Tech Solutions",
    description: DESCRIPTION,
    url: `https://www.rctechsolutions.com${PATH}`,
    siteName: "RC Tech Solutions",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Panchkula | RC Tech Solutions",
    description: DESCRIPTION,
  },
};

const faqs = [
  {
    q: "My customers mostly find me on Google Maps, not by searching my business name — does a website still help?",
    a: "Yes — a website and a well-optimized Google Business Profile work together. The website gives Google more to index and rank you for (menu, services, prices, hours), and it's what a customer checks once your Maps listing gets their attention.",
  },
  {
    q: "How fast will my site load on a customer's phone?",
    a: "We target under 2-3 second load time on a mid-range phone connection. For Panchkula's retail and hospitality businesses, where most traffic is someone searching on the go, this isn't optional — it directly affects whether they stay or bounce to a competitor.",
  },
  {
    q: "Can you set up online ordering or table/appointment booking?",
    a: "Yes, depending on your business — WhatsApp-based ordering links, third-party booking widget integration, or a custom booking form are all options we scope based on what you actually need.",
  },
  {
    q: "Do you help with Google Business Profile, or just the website?",
    a: "Both. For Panchkula clients especially, we typically pair the website with Google Business Profile optimization since a large share of local discovery happens through Maps rather than a direct site visit.",
  },
];

const schema = buildLocationSchema({
  path: PATH,
  cityName: CITY,
  serviceName: "Web Development Company in Panchkula",
  description: DESCRIPTION,
  faqs,
});

export default function PanchkulaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="min-h-screen" style={{ background: "var(--rc-paper)" }}>
        <nav className="border-b border-[var(--rc-wire)]" aria-label="Breadcrumb">
          <div className="mx-auto max-w-6xl px-4 py-3 rc-mono text-[0.65rem] text-[rgba(42,45,53,0.6)] flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-[var(--rc-circuit)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--rc-ink-soft)]">Web Development in Panchkula</span>
          </div>
        </nav>

        <section className="relative overflow-hidden rc-ink-section" style={{ background: "var(--rc-ink)" }}>
          <div className="absolute inset-0 rc-grid-bg opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="rc-via rc-via-pulse" />
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Local · Panchkula</span>
              </div>
              <h1 className="rc-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.05] text-[var(--rc-paper)]">
                Web Development Company in Panchkula
              </h1>
              <p className="rc-body mt-5 text-base sm:text-lg text-[rgba(246,242,233,0.65)] leading-relaxed max-w-xl">
                Fast, mobile-first websites for Panchkula's restaurants, salons, gyms, and retail businesses — built for customers searching on the go, right now.
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
                <span>Mobile-first, sub-3s load target</span>
                <span>·</span>
                <span>Fixed pricing</span>
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <ServiceLeadForm
                serviceName="Web Development — Panchkula"
                heading="Get a free website assessment"
                subheading="Tell us about your business — we'll respond within 24 hours."
              />
            </div>
          </div>
          <CircuitTrace variant="horizontal" color="var(--rc-circuit)" />
        </section>

        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16">
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-12">
            <div>
              <QuickAnswerBox>
                RC Tech Solutions builds mobile-first websites for Panchkula's retail, hospitality, and service businesses, paired with Google Business Profile optimization — since most local discovery here happens through Google Maps and on-the-go mobile search rather than a direct website visit.
              </QuickAnswerBox>

              <ProofStats stats={[
                { value: "50+", label: "Projects delivered" },
                { value: "<3s", label: "Mobile load target" },
                { value: "100%", label: "Client-owned code" },
                { value: "24hr", label: "Response time" },
              ]} />

              <section>
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Why Panchkula is different</span>
                <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-3">
                  Speed and mobile usability aren't optional here
                </h2>
                <p className="rc-body text-[var(--rc-ink-soft)] leading-relaxed mb-3">
                  Panchkula's retail, hospitality, and residential-service businesses see the highest share of mobile traffic in the Tricity — customers searching for something nearby, right now, usually from a phone with a patchy connection. A site that takes 6-8 seconds to load loses that customer before they see the menu, the price list, or the phone number.
                </p>
                <p className="rc-body text-[var(--rc-ink-soft)] leading-relaxed">
                  That's why every Panchkula-facing build we do prioritizes fast page loads, a prominent click-to-call button, and a Google Business Profile that's actually kept up to date — not just set up once and forgotten.
                </p>
              </section>

              <PricingTable
                rows={[
                  { type: "Single-location business site (menu/services/hours)", range: "₹15,000 – ₹25,000" },
                  { type: "Multi-location or booking-enabled site", range: "₹30,000 – ₹60,000" },
                  { type: "E-commerce / online ordering", range: "₹45,000+" },
                  { type: "Custom booking or loyalty system", range: "Custom quote based on scope" },
                ]}
                note="Google Business Profile setup and optimization is offered alongside the website build for Panchkula clients — it's usually where the first wave of local customers actually comes from."
              />

              <ComparisonTable
                title="Why speed and mobile design change the outcome"
                columns={["", "Slow/desktop-first site", "RC Tech Solutions build"]}
                rows={[
                  ["Mobile load time", "6-8 seconds", "Under 2-3 seconds"],
                  ["Click-to-call", "Buried in a menu", "Visible on every screen"],
                  ["Google Maps integration", "Not linked", "Directly integrated"],
                  ["Menu/price updates", "Requires a developer", "You can update it yourself"],
                ]}
              />

              <MistakesList
                title="Mistakes Panchkula businesses make when hiring a web developer"
                items={[
                  "Choosing a beautiful desktop-first design that's slow or awkward on mobile, where most of your actual customers are searching from.",
                  "Treating the website and Google Business Profile as separate projects instead of setting them up together.",
                  "Not testing real mobile load speed before launch — a site can look fine in a browser preview and still load slowly on an actual phone network.",
                  "Skipping click-to-call and click-to-WhatsApp buttons in favor of a contact form that's slower for an on-the-go customer to use.",
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
                title="Areas we cover in Panchkula"
                areas={["Sector 5-28", "MDC", "Pinjore Road", "Kalka border", "Chandigarh border"]}
              />
              <div className="rc-blueprint-card p-5">
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Contact</span>
                <p className="rc-body text-sm text-[var(--rc-ink)] mt-3">Mohali, Punjab 140306 (serving Panchkula)</p>
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
                  <li><Link href="/web-development-company-in-chandigarh" className="hover:underline">Web development in Chandigarh →</Link></li>
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
