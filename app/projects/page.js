// app/projects/page.js
import { fetchWPProjects } from '../lib/wordpress';
import Link from 'next/link';
import Image from 'next/image';
import CircuitTrace from '../components/CircuitTrace';

export const revalidate = 3600;

export const metadata = {
  metadataBase: new URL('https://www.rctechsolutions.com'),
  title: 'Projects & Portfolio',
  description: 'Real projects built by RC Tech Solutions — web development, SEO, e-commerce, and digital marketing case studies for Indian startups and businesses.',
  keywords: ['web development portfolio India', 'RC Tech Solutions projects', 'Next.js case studies India'],
  alternates: { canonical: 'https://www.rctechsolutions.com/projects' },
  openGraph: {
    title: 'Projects | RC Tech Solutions',
    description: 'Real projects. Real results. 50+ delivered across web, SEO, and marketing.',
    url: 'https://www.rctechsolutions.com/projects',
    siteName: 'RC Tech Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://www.rctechsolutions.com/og/home-cover.jpg', width: 1200, height: 630 }],
  },
};

const FALLBACK = [
  {
    id: 'f1', slug: 'law-firm-website-rebuild',
    title: 'Law Firm Website Rebuild', client: 'Singh & Associates',
    industry: 'Legal', services: ['Web Development', 'SEO'],
    stack: ['Next.js', 'Tailwind CSS', 'Vercel'],
    imageUrl: '/images/case-law-firm.svg',
    summary: '7.3s → 1.2s load time · 34% more organic leads',
    description: 'Full WordPress → Next.js rebuild. Mobile PageSpeed: 31 → 91. Organic leads went from 0–1/week to 3–4/week within 90 days.',
    metrics: [{ label: 'Load time', value: '1.2s' }, { label: 'PageSpeed', value: '91' }, { label: 'More leads', value: '+34%' }],
    featured: true,
  },
  {
    id: 'f2', slug: 'skincare-seo-growth',
    title: 'D2C Skincare Brand SEO', client: 'Confidential',
    industry: 'Beauty & Wellness', services: ['SEO', 'Content Strategy'],
    stack: ['Next.js', 'Firebase', 'Ahrefs'],
    imageUrl: '/images/case-dxc.svg',
    summary: '0 → 12,000 monthly organic visitors in 6 months',
    description: '15 long-form blog posts published in 60 days. First page-one ranking at week 9. Organic traffic surpassed paid Instagram by month 6 at zero ongoing cost.',
    metrics: [{ label: 'Monthly visitors', value: '12K' }, { label: 'To page 1', value: '6mo' }, { label: 'Ad spend', value: '₹0' }],
    featured: true,
  },
  {
    id: 'f3', slug: 'saas-startup-growth',
    title: 'SaaS Startup Growth', client: 'Mohali Tech Co.',
    industry: 'B2B SaaS', services: ['Web Development', 'Google Ads'],
    stack: ['Next.js', 'TypeScript', 'Firebase', 'Google Ads'],
    imageUrl: '/images/case-saas.svg',
    summary: '₹0 → ₹8L MRR in 4 months',
    description: 'Next.js site + Google Ads + A/B tested landing pages. CPA reduced from ₹4,200 to ₹1,800 after campaign restructure.',
    metrics: [{ label: 'MRR month 4', value: '₹8L' }, { label: 'Lower CPA', value: '57%' }, { label: 'To revenue', value: '4mo' }],
    featured: false,
  },
  {
    id: 'f4', slug: 'fashion-ecommerce',
    title: 'Fashion E-commerce', client: 'Punjab D2C Brand',
    industry: 'Fashion Retail', services: ['E-commerce', 'Digital Marketing'],
    stack: ['Shopify', 'Razorpay', 'Meta Ads', 'Klaviyo'],
    imageUrl: '/images/case-ecom.svg',
    summary: '₹12L → ₹34L monthly GMV',
    description: 'Shopify rebuild with Razorpay + UPI + COD. Instagram retargeting + abandoned cart flow. GMV grew 183% in 5 months at same ad budget.',
    metrics: [{ label: 'GMV growth', value: '183%' }, { label: 'Timeline', value: '5mo' }, { label: 'Ad budget', value: 'Same' }],
    featured: false,
  },
  {
    id: 'f5', slug: 'edtech-lead-gen',
    title: 'EdTech Lead Generation', client: 'Bengaluru Institute',
    industry: 'Education', services: ['Google Ads', 'Landing Pages'],
    stack: ['Next.js', 'Google Ads', 'GA4'],
    imageUrl: '/images/case-edtech.svg',
    summary: '₹480 → ₹180 cost per lead in 45 days',
    description: 'Rebuilt Google Ads campaign structure, added 200+ negative keywords, dedicated landing pages per course. CPL dropped 62% at same lead volume.',
    metrics: [{ label: 'Lower CPL', value: '62%' }, { label: 'Days', value: '45' }, { label: 'Lead volume', value: 'Same' }],
    featured: false,
  },
  {
    id: 'f6', slug: 'restaurant-local-seo',
    title: 'Restaurant Local SEO', client: 'Delhi NCR Chain',
    industry: 'Food & Beverage', services: ['Local SEO', 'Google Business'],
    stack: ['Google Business', 'BrightLocal'],
    imageUrl: '/images/case-restaurant.svg',
    summary: 'Top 3 map pack across all 4 locations',
    description: 'Google Business Profile overhaul across 4 locations. Reviews: 38 → 200+ in 90 days. Top 3 map pack rankings across all areas.',
    metrics: [{ label: 'Map pack', value: '#1–3' }, { label: 'Reviews in 90d', value: '200+' }, { label: 'Locations', value: '4' }],
    featured: false,
  },
];

async function fetchProjects() {
  const projects = await fetchWPProjects({ perPage: 50 });
  return projects.length > 0 ? projects : FALLBACK;
}

export default async function ProjectsPage() {
  const projects = await fetchProjects();
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'ItemList',
          name: 'RC Tech Solutions Portfolio',
          url: 'https://www.rctechsolutions.com/projects',
          itemListElement: projects.map((p, i) => ({
            '@type': 'ListItem', position: i + 1, name: p.title,
            url: `https://www.rctechsolutions.com/projects/${p.slug || p.id}`,
          })),
        })
      }} />

      <div className="min-h-screen" style={{ background: 'var(--rc-paper)' }}>

        {/* Hero */}
        <section className="border-b border-[var(--rc-wire)] rc-grid-bg">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
            <nav className="flex items-center gap-1.5 rc-mono text-[0.7rem] text-[rgba(42,45,53,0.45)] mb-6">
              <Link href="/" className="hover:text-[var(--rc-circuit)] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[var(--rc-ink-soft)]">Projects</span>
            </nav>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="rc-via rc-via-pulse" />
              <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>
                {projects.length} projects · 2021–present
              </span>
            </div>
            <h1 className="rc-display text-4xl sm:text-5xl font-semibold text-[var(--rc-ink)] leading-tight max-w-2xl">
              Work that actually moved the needle.
            </h1>
            <p className="rc-body mt-5 text-base sm:text-lg text-[var(--rc-ink-soft)] leading-relaxed max-w-xl">
              Every project is a real client, a real problem, and a real outcome. Some names are changed for privacy — every number is verifiable.
            </p>
          </div>
        </section>

        <CircuitTrace variant="horizontal" className="opacity-40" />

        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">

          {/* Featured */}
          {featured.length > 0 && (
            <section className="mb-14">
              <p className="rc-eyebrow text-[rgba(42,45,53,0.4)] mb-6">Featured work</p>
              <div className="space-y-px border border-[var(--rc-wire)]">
                {featured.map((p, i) => (
                  <Link key={p.id} href={`/projects/${p.slug || p.id}`}
                    className="group grid md:grid-cols-[420px_1fr] bg-white hover:bg-[var(--rc-paper)] transition-colors border-b border-[var(--rc-wire)] last:border-0">
                    <div className="relative h-60 md:h-full min-h-[240px] overflow-hidden bg-[var(--rc-paper-deep)]">
                      {p.imageUrl
                        ? <Image src={p.imageUrl} alt={p.title} fill
                            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                            sizes="(max-width:768px) 100vw,420px" priority={i === 0} />
                        : <div className="absolute inset-0 flex items-center justify-center rc-grid-bg">
                            <span className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.3)]">{p.title}</span>
                          </div>
                      }
                    </div>
                    <div className="p-7 sm:p-9 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="rc-mono text-[0.7rem] px-2.5 py-1 border border-[var(--rc-wire)] text-[rgba(42,45,53,0.5)]">{p.industry}</span>
                          {p.services?.slice(0, 2).map((s) => (
                            <span key={s} className="rc-mono text-[0.7rem] px-2.5 py-1 border border-[var(--rc-circuit)]/20 text-[var(--rc-circuit)]/70">{s}</span>
                          ))}
                        </div>
                        <h2 className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)] group-hover:text-[var(--rc-circuit)] transition-colors mb-2">{p.title}</h2>
                        <p className="rc-mono text-[0.7rem] mb-3" style={{ color: 'var(--rc-trace)' }}>{p.summary}</p>
                        <p className="rc-body text-sm text-[var(--rc-ink-soft)] leading-relaxed line-clamp-3">{p.description}</p>
                      </div>
                      <div>
                        {p.metrics?.length > 0 && (
                          <div className="flex flex-wrap gap-5 mt-5 pt-5 border-t border-[var(--rc-wire)]">
                            {p.metrics.map((m) => (
                              <div key={m.label}>
                                <p className="rc-display text-xl font-bold text-[var(--rc-ink)]">{m.value}</p>
                                <p className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.45)] uppercase tracking-wider mt-0.5">{m.label}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        {p.stack?.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-4">
                            {p.stack.map((t) => (
                              <span key={t} className="rc-mono text-[0.7rem] px-2 py-0.5 bg-[var(--rc-paper-deep)] text-[rgba(42,45,53,0.6)]">{t}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Grid */}
          {rest.length > 0 && (
            <section>
              <p className="rc-eyebrow text-[rgba(42,45,53,0.4)] mb-6">All projects</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
                {rest.map((p) => (
                  <Link key={p.id} href={`/projects/${p.slug || p.id}`}
                    className="group flex flex-col bg-white hover:bg-[var(--rc-paper)] transition-colors">
                    <div className="relative w-full overflow-hidden bg-[var(--rc-paper-deep)]" style={{ aspectRatio: '16/9' }}>
                      {p.imageUrl
                        ? <Image src={p.imageUrl} alt={p.title} fill
                            className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                            sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" />
                        : <div className="absolute inset-0 flex items-center justify-center rc-grid-bg">
                            <span className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.3)]">{p.industry}</span>
                          </div>
                      }
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        <span className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.45)]">{p.industry}</span>
                      </div>
                      <h3 className="rc-display text-base font-semibold text-[var(--rc-ink)] group-hover:text-[var(--rc-circuit)] transition-colors mb-1.5 leading-snug">{p.title}</h3>
                      <p className="rc-mono text-[0.7rem] mb-2" style={{ color: 'var(--rc-trace)' }}>{p.summary}</p>
                      <p className="rc-body text-xs text-[rgba(42,45,53,0.7)] leading-relaxed line-clamp-2 flex-1">{p.description}</p>
                      {p.metrics?.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-[var(--rc-wire)] flex gap-4">
                          {p.metrics.slice(0, 3).map((m) => (
                            <div key={m.label}>
                              <p className="rc-mono text-sm font-bold text-[var(--rc-ink)]">{m.value}</p>
                              <p className="rc-mono text-[0.65rem] text-[rgba(42,45,53,0.4)] uppercase tracking-wider mt-0.5">{m.label}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      {p.stack?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {p.stack.slice(0, 4).map((t) => (
                            <span key={t} className="rc-mono text-[0.65rem] px-1.5 py-0.5 bg-[var(--rc-paper-deep)] text-[rgba(42,45,53,0.55)]">{t}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="mt-14 rc-blueprint-card p-8 sm:p-10 text-center" style={{ background: 'var(--rc-ink)' }}>
            <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>Start your project</span>
            <h2 className="rc-display text-2xl font-semibold text-[var(--rc-paper)] mt-2 mb-3">Want results like these?</h2>
            <p className="rc-body text-sm text-[rgba(246,242,233,0.5)] mb-6 max-w-md mx-auto leading-relaxed">
              Free 30-min discovery call. Fixed-price proposal in 48 hours.
            </p>
            <Link href="/contact"
              className="rc-mono text-xs uppercase tracking-wider px-7 py-3.5 inline-block bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors">
              Get a free quote →
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
