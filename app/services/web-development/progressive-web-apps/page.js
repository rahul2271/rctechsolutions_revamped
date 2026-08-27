import ServiceLeadForm from "../../../components/ServiceLeadForm";
import CircuitTrace from "../../../components/CircuitTrace";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://www.rctechsolutions.com"),
  title: "Progressive Web App Development Company",
  description: "Build an app-like experience without the app store. RC Tech Solutions develops fast, installable, offline-capable Progressive Web Apps for startups and enterprises.",
  keywords: ["progressive web app development", "pwa development company India", "installable web app development", "offline web app development Mohali"],
  alternates: { canonical: "https://www.rctechsolutions.com/services/web-development/progressive-web-apps" },
  openGraph: {
    title: "Progressive Web App Development | RC Tech Solutions",
    description: "Build an app-like experience without the app store. RC Tech Solutions develops fast, installable, offline-capable Progressive Web Apps for startups and enterprises.",
    url: "https://www.rctechsolutions.com/services/web-development/progressive-web-apps",
    siteName: "RC Tech Solutions",
    images: [{ url: "https://www.rctechsolutions.com/og/progressive-web-apps-cover.jpg", width: 1200, height: 630, alt: "Progressive Web App (PWA) Development" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Progressive Web App Development | RC Tech Solutions",
    description: "Build an app-like experience without the app store. RC Tech Solutions develops fast, installable, offline-capable Progressive Web Apps for startups and enterprises.",
    images: ["https://www.rctechsolutions.com/og/progressive-web-apps-cover.jpg"],
  },
};

const faqs = [{"q":"Is a PWA a replacement for a native app?","a":"For many use cases, yes — especially content apps, e-commerce, and service booking. For apps needing deep device integration (like Bluetooth or advanced camera features), native is still better."},{"q":"Will a PWA show up in the Google Play Store?","a":"PWAs can be published to the Play Store via Trusted Web Activity wrapping, which we can set up if you want both an installable web app and a Play Store presence."},{"q":"How much does a PWA cost compared to a native app?","a":"PWAs are typically 40-60% less expensive than building separate native iOS and Android apps, since it's one shared codebase."}];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Progressive Web App (PWA) Development",
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
  description: "Build an app-like experience without the app store. RC Tech Solutions develops fast, installable, offline-capable Progressive Web Apps for startups and enterprises.",
  url: "https://www.rctechsolutions.com/services/web-development/progressive-web-apps",
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
    { "@type": "ListItem", position: 3, name: "Web Development", item: "https://www.rctechsolutions.com/services/web-development" },
    { "@type": "ListItem", position: 4, name: "Progressive Web App (PWA) Development", item: "https://www.rctechsolutions.com/services/web-development/progressive-web-apps" },
  ],
};

const includedItems = [{"title":"Offline-first architecture","desc":"Service workers cache critical content so your app works even with poor connectivity."},{"title":"Home screen install prompts","desc":"Users add your app to their home screen — no app store needed."},{"title":"Push notifications","desc":"Re-engage users directly, just like a native app would."},{"title":"Fast load on 3G/4G","desc":"Built to perform well even on slower mobile connections across India."},{"title":"Cross-platform by default","desc":"One codebase that works identically on Android, iOS, and desktop."},{"title":"Lighthouse-optimised","desc":"We target 90+ Lighthouse PWA scores before handover."}];
const processSteps = [{"title":"Scope & wireframe","desc":"We define core flows that need to work offline vs online."},{"title":"Build the app shell","desc":"Service workers, caching strategy, and core UI are implemented."},{"title":"Test across devices","desc":"Real-device testing on Android and iOS for installability and performance."},{"title":"Launch & monitor","desc":"Go live with monitoring in place to catch any edge-case issues."}];

export default function ProgressiveWebAppsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]) }} />

      <div className="min-h-screen" style={{ background: "var(--rc-paper)" }}>
        <nav className="border-b border-[var(--rc-wire)]" aria-label="Breadcrumb">
          <div className="mx-auto max-w-6xl px-4 py-3 rc-mono text-[0.65rem] text-[rgba(42,45,53,0.6)] flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-[var(--rc-circuit)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/web-development" className="hover:text-[var(--rc-circuit)] transition-colors">Web Development</Link>
            <span>/</span>
            <span className="text-[var(--rc-ink-soft)]">Progressive Web App (PWA) Development</span>
          </div>
        </nav>

        <section className="relative overflow-hidden rc-ink-section" style={{ background: "var(--rc-ink)" }}>
          <div className="absolute inset-0 rc-grid-bg opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="rc-via rc-via-pulse" />
                <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Web Development · RC Tech Solutions</span>
              </div>
              <h1 className="rc-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.05] text-[var(--rc-paper)]">
                Progressive Web App (PWA) Development
              </h1>
              <p className="rc-body mt-5 text-base sm:text-lg text-[rgba(246,242,233,0.65)] leading-relaxed max-w-xl">
                Get the engagement of a mobile app — push notifications, offline access, home-screen install — without the cost or delay of App Store approval.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#get-quote" className="rc-mono text-xs uppercase tracking-wider px-6 py-3.5 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors">
                  Get a free quote
                </a>
                <Link href="/services/web-development" className="rc-mono text-xs uppercase tracking-wider px-6 py-3.5 border border-[rgba(246,242,233,0.25)] text-[var(--rc-paper)] hover:border-[var(--rc-paper)] transition-colors">
                  ← All Web Development
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
                serviceName="Progressive Web App (PWA) Development"
                heading="Discuss your PWA project"
                subheading="Tell us what you're building and we'll outline the right PWA approach."
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
                <p className="rc-body text-[var(--rc-ink-soft)] mb-6 leading-relaxed">We build PWAs that pass Lighthouse audits and deliver genuinely native-feeling experiences in the browser.</p>
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
