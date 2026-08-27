// app/services/page.js
// The /services index page — all 8 service categories with descriptions,
// sub-service links, and internal navigation.

import Link from 'next/link';
import CircuitTrace from '../components/CircuitTrace';

export const metadata = {
  metadataBase: new URL('https://www.rctechsolutions.com'),
  title: 'Our Services — Web Development, SEO, Digital Marketing & More',
  description:
    'RC Tech Solutions offers web development, mobile apps, SEO, digital marketing, branding, AI solutions, cloud integration, and DevOps services for startups and businesses across India — and for international clients in the USA, UK, Canada & Australia.',
  keywords: [
    'web development services India',
    'SEO services Mohali',
    'digital marketing agency Punjab',
    'mobile app development India',
    'cloud integration services',
    'AI solutions India',
    'DevOps services India',
    'branding services Mohali',
    'RC Tech Solutions services',
  ],
  alternates: { canonical: 'https://www.rctechsolutions.com/services' },
  openGraph: {
    title: 'Services | RC Tech Solutions — Mohali, India & Worldwide',
    description: 'Eight services. One quality bar. From web development to AI-powered solutions — built for Indian startups and for founders across the USA, UK, Canada & Australia.',
    url: 'https://www.rctechsolutions.com/services',
    siteName: 'RC Tech Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://www.rctechsolutions.com/og/home-cover.jpg', width: 1200, height: 630 }],
  },
};

const SERVICES = [
  {
    number: '01',
    title: 'Web Development',
    href: '/services/web-development',
    desc: 'Next.js, React, and full-stack web applications that load in under 1.5 seconds on mobile. Every build ships with a 90+ PageSpeed score, proper schema markup, and a full sitemap.',
    highlights: ['E-commerce & Shopify', 'Custom CMS', 'Progressive Web Apps', 'Web portals'],
    sub: [
      { label: 'E-commerce Development', href: '/services/web-development/ecommerce-development' },
      { label: 'Custom CMS', href: '/services/web-development/custom-cms-development' },
      { label: 'Progressive Web Apps', href: '/services/web-development/progressive-web-apps' },
    ],
    color: 'var(--rc-circuit)',
  },
  {
    number: '02',
    title: 'Mobile App Development',
    href: '/services/mobile-apps',
    desc: 'React Native, iOS, and Android apps tested on real devices — including mid-range Indian market phones. One codebase, two platforms, 40% cost saving over native.',
    highlights: ['React Native', 'iOS App Store', 'Android Play Store', 'App Store Optimisation'],
    sub: [],
    color: 'var(--rc-trace)',
  },
  {
    number: '03',
    title: 'SEO Services',
    href: '/services/seo',
    desc: 'Technical SEO audits, local search optimisation, and content strategy built for the Indian search landscape. We track page positions — not just impressions.',
    highlights: ['Technical SEO Audit', 'Local SEO & Google Business', 'Keyword Research', 'Link Building'],
    sub: [
      { label: 'Technical SEO Audit', href: '/services/seo/technical-seo-audit' },
      { label: 'Local SEO Services', href: '/services/seo/local-seo-services' },
      { label: 'Keyword Research & Content Strategy', href: '/services/seo/keyword-research-content-strategy' },
    ],
    color: 'var(--rc-circuit)',
  },
  {
    number: '04',
    title: 'Digital Marketing',
    href: '/services/digital-marketing',
    desc: 'Google Ads, Meta campaigns, email marketing, and WhatsApp automation built around your cost-per-acquisition — not vanity metrics like impressions or follower counts.',
    highlights: ['Google Ads', 'Social Media Management', 'Email Marketing', 'Performance Marketing'],
    sub: [
      { label: 'Google Ads Campaigns', href: '/services/digital-marketing/google-ads-campaigns' },
      { label: 'Social Media Management', href: '/services/digital-marketing/social-media-management' },
      { label: 'Email Marketing', href: '/services/digital-marketing/email-marketing' },
    ],
    color: 'var(--rc-trace)',
  },
  {
    number: '05',
    title: 'Digital Branding',
    href: '/services/digital-branding',
    desc: 'Brand identity systems that make premium pricing feel obvious. Logo, colour palette, typography, guidelines, and all marketing collateral — delivered as editable source files.',
    highlights: ['Logo & Identity', 'Brand Strategy', 'Brand Guidelines', 'Social Media Templates'],
    sub: [],
    color: 'var(--rc-circuit)',
  },
  {
    number: '06',
    title: 'AI-Powered Solutions',
    href: '/services/ai-powered',
    desc: 'Custom chatbots, ML integrations, LLM-powered features, and workflow automation — built to solve a specific, measurable business problem, not as a "we do AI too" checkbox.',
    highlights: ['AI Chatbots', 'LLM Integration', 'Computer Vision', 'Workflow Automation'],
    sub: [],
    color: 'var(--rc-trace)',
  },
  {
    number: '07',
    title: 'Cloud Integration',
    href: '/services/cloud-integration',
    desc: 'Infrastructure setup on AWS Mumbai and GCP Mumbai — so your application is fast for Indian users and your data stays in India. Migration, security, serverless, and CDN.',
    highlights: ['AWS Mumbai Setup', 'Cloud Migration', 'Serverless Architecture', 'CDN & Performance'],
    sub: [],
    color: 'var(--rc-circuit)',
  },
  {
    number: '08',
    title: 'DevOps & Cloud',
    href: '/services/devops-and-cloud',
    desc: 'CI/CD pipelines, Docker containerisation, Kubernetes orchestration, and monitoring infrastructure that let your team ship multiple times per day with confidence.',
    highlights: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Monitoring & Alerting', 'Infrastructure as Code'],
    sub: [],
    color: 'var(--rc-trace)',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'RC Tech Solutions Services',
  description: 'Web development, SEO, digital marketing, mobile apps, branding, AI, cloud, and DevOps services',
  url: 'https://www.rctechsolutions.com/services',
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `https://www.rctechsolutions.com${s.href}`,
    description: s.desc,
  })),
};

export default function ServicesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="min-h-screen" style={{ background: 'var(--rc-paper)' }}>

        {/* Hero */}
        <section className="border-b border-[var(--rc-wire)] rc-grid-bg">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 py-18 sm:py-22 pt-16 sm:pt-20">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 rc-mono text-[0.65rem] text-[rgba(42,45,53,0.5)] mb-6">
              <Link href="/" className="hover:text-[var(--rc-circuit)] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[var(--rc-ink-soft)]">Services</span>
            </nav>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="rc-via rc-via-pulse" />
              <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>
                Eight services · One quality bar
              </span>
            </div>
            <h1 className="rc-display text-4xl sm:text-5xl font-semibold text-[var(--rc-ink)] leading-tight max-w-2xl">
              Everything you need to build, grow, and scale online.
            </h1>
            <p className="rc-body mt-5 text-[var(--rc-ink-soft)] text-base sm:text-lg leading-relaxed max-w-xl">
              From the first line of code to the first Google ranking — we handle every digital layer of your business.
              Every engagement is scoped, priced, and delivered transparently.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="rc-mono text-xs uppercase tracking-wider px-6 py-3 bg-[var(--rc-ink)] text-[var(--rc-paper)] hover:bg-[var(--rc-circuit)] transition-colors">
                Get a free quote →
              </Link>
              <Link href="/about" className="rc-mono text-xs uppercase tracking-wider px-6 py-3 border border-[var(--rc-ink)] text-[var(--rc-ink)] hover:bg-[var(--rc-ink)] hover:text-[var(--rc-paper)] transition-colors">
                About the team
              </Link>
            </div>
          </div>
        </section>

        <CircuitTrace variant="branching" className="opacity-40" />

        {/* Services list */}
        <main className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="space-y-0 divide-y divide-[var(--rc-wire)] border-y border-[var(--rc-wire)]">
            {SERVICES.map((svc, i) => (
              <div key={svc.href} className="group grid lg:grid-cols-[80px_1fr_1fr] gap-0 hover:bg-white transition-colors">
                {/* Number */}
                <div className="hidden lg:flex items-start p-6 pt-7">
                  <span className="rc-mono text-[0.6rem] font-medium" style={{ color: 'var(--rc-circuit)' }}>
                    {svc.number}
                  </span>
                </div>

                {/* Main content */}
                <div className="p-6 lg:border-x border-[var(--rc-wire)]">
                  <Link href={svc.href} className="block group/link">
                    <h2 className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)] group-hover/link:text-[var(--rc-circuit)] transition-colors mb-3">
                      {svc.title}
                    </h2>
                  </Link>
                  <p className="rc-body text-sm text-[var(--rc-ink-soft)] leading-relaxed mb-4">{svc.desc}</p>
                  <Link
                    href={svc.href}
                    className="rc-mono text-[0.65rem] uppercase tracking-wider text-[var(--rc-ink-soft)] hover:text-[var(--rc-circuit)] transition-colors border-b border-[var(--rc-wire)] hover:border-[var(--rc-circuit)] pb-0.5"
                  >
                    Learn more →
                  </Link>
                </div>

                {/* Sub-links + highlights */}
                <div className="p-6 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {svc.highlights.map((h) => (
                      <span key={h} className="rc-mono text-[0.58rem] uppercase tracking-wide px-2 py-1 border border-[var(--rc-wire)] text-[rgba(42,45,53,0.6)]">
                        {h}
                      </span>
                    ))}
                  </div>
                  {svc.sub.length > 0 && (
                    <div className="space-y-1 mt-auto">
                      {svc.sub.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex items-center gap-1.5 rc-body text-xs text-[rgba(42,45,53,0.7)] hover:text-[var(--rc-circuit)] transition-colors"
                        >
                          <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--rc-circuit)' }} />
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 rc-blueprint-card p-8 text-center" style={{ background: 'var(--rc-ink)' }}>
            <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>Not sure where to start?</span>
            <h2 className="rc-display text-2xl font-semibold text-[var(--rc-paper)] mt-2 mb-3">
              Tell us your problem. We'll tell you the right service.
            </h2>
            <p className="rc-body text-sm text-[rgba(246,242,233,0.6)] max-w-md mx-auto mb-6">
              Book a free 30-minute discovery call. No pitch — we ask about your goals and tell you honestly what will and won't work for your situation.
            </p>
            <Link href="/contact" className="inline-flex rc-mono text-xs uppercase tracking-wider px-7 py-3.5 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors">
              Book a free call →
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
