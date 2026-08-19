import ServiceLeadForm from "../../../components/ServiceLeadForm";
import CircuitTrace from "../../../components/CircuitTrace";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://www.rctechsolutions.com"),
  title: "E-commerce Website Development Services in India",
  description: "Launch a fast, conversion-focused online store with RC Tech Solutions. Custom Shopify, WooCommerce & headless e-commerce development for D2C brands and retailers in India.",
  keywords: ["ecommerce website development", "shopify development company India", "woocommerce development", "online store development Mohali", "D2C website development", "headless ecommerce development"],
  alternates: { canonical: "https://www.rctechsolutions.com/services/web-development/ecommerce-development" },
  openGraph: {
    title: "E-commerce Website Development Services | RC Tech Solutions",
    description: "Launch a fast, conversion-focused online store with RC Tech Solutions. Custom Shopify, WooCommerce & headless e-commerce development for D2C brands and retailers in India.",
    url: "https://www.rctechsolutions.com/services/web-development/ecommerce-development",
    siteName: "RC Tech Solutions",
    images: [{ url: "https://www.rctechsolutions.com/og/ecommerce-development-cover.jpg", width: 1200, height: 630, alt: "E-commerce Website Development" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-commerce Website Development Services | RC Tech Solutions",
    description: "Launch a fast, conversion-focused online store with RC Tech Solutions. Custom Shopify, WooCommerce & headless e-commerce development for D2C brands and retailers in India.",
    images: ["https://www.rctechsolutions.com/og/ecommerce-development-cover.jpg"],
  },
};

const faqs = [{"q":"Shopify or custom-built — which is better for my business?","a":"Shopify is faster to launch and great for most product-based businesses under 5,000 SKUs. Custom builds make sense for unique workflows, B2B pricing logic, or very high traffic. We'll recommend honestly based on your needs in the discovery call."},{"q":"How long does an e-commerce build take?","a":"A standard Shopify or WooCommerce store takes 3-5 weeks. Custom headless builds typically take 8-12 weeks depending on integrations."},{"q":"Do you handle payment gateway setup?","a":"Yes — Razorpay, Stripe, PayPal, and Cash on Delivery flows are all included and tested before launch."},{"q":"Will my store be ready for Google to rank it?","a":"Yes. Every store ships with product schema markup, optimised page speed, and clean URL structures designed for search visibility."}];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "E-commerce Website Development",
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
  description: "Launch a fast, conversion-focused online store with RC Tech Solutions. Custom Shopify, WooCommerce & headless e-commerce development for D2C brands and retailers in India.",
  url: "https://www.rctechsolutions.com/services/web-development/ecommerce-development",
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
    { "@type": "ListItem", position: 4, name: "E-commerce Website Development", item: "https://www.rctechsolutions.com/services/web-development/ecommerce-development" },
  ],
};

const includedItems = [{"title":"Custom storefront design","desc":"A unique, on-brand storefront — not a generic theme — designed around how your customers actually shop."},{"title":"Secure payment integration","desc":"Razorpay, Stripe, PayPal, and COD flows wired in and tested end-to-end before launch."},{"title":"Inventory & order management","desc":"Admin dashboards to manage stock, orders, and fulfillment without touching code."},{"title":"Mobile-first checkout","desc":"Optimised for the device most of your traffic actually comes from — mobile."},{"title":"SEO-ready product pages","desc":"Schema markup, fast load times, and clean URLs baked in from day one."},{"title":"Post-launch support","desc":"30 days of bug fixes and adjustments included after go-live, at no extra cost."}];
const processSteps = [{"title":"Discovery call","desc":"We learn your product range, target customer, and must-have features."},{"title":"Design & prototype","desc":"Clickable Figma prototype shared for feedback before any code is written."},{"title":"Build & integrate","desc":"Storefront, payments, and inventory systems built and connected."},{"title":"QA & launch","desc":"Cross-device testing, then a coordinated go-live with you."}];

export default function EcommerceDevelopmentPage() {
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
            <span className="text-[var(--rc-ink-soft)]">E-commerce Website Development</span>
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
                E-commerce Website Development
              </h1>
              <p className="rc-body mt-5 text-base sm:text-lg text-[rgba(246,242,233,0.65)] leading-relaxed max-w-xl">
                From product catalogs to secure checkout, we build online stores engineered to convert browsers into buyers — on Shopify, WooCommerce, or fully custom stacks.
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
                serviceName="E-commerce Website Development"
                heading="Get a free e-commerce store quote"
                subheading="Tell us about your products and we'll send a tailored proposal within 24 hours."
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
                <p className="rc-body text-[var(--rc-ink-soft)] mb-6 leading-relaxed">Every e-commerce build from RC Tech Solutions covers the full storefront-to-checkout journey, not just product pages.</p>
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
