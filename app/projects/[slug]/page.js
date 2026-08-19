// app/projects/[slug]/page.js
import { fetchWPProjectBySlug, fetchAllWPProjectSlugs } from '../../lib/wordpress';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 3600;

// Same fallback data as listing page for static generation
const FALLBACK = [
  { id: 'f1', slug: 'law-firm-website-rebuild', title: 'Law Firm Website Rebuild', client: 'Singh & Associates', industry: 'Legal', services: ['Web Development', 'SEO'], stack: ['Next.js', 'Tailwind CSS', 'Vercel', 'Firebase'], imageUrl: '/images/case-law-firm.svg', images: [], summary: '7.3s → 1.2s load time · 34% more organic leads', description: 'Full WordPress → Next.js rebuild for a Chandigarh law firm. The previous site scored 31 on mobile PageSpeed and took 7.3 seconds to show the first piece of content. After the rebuild, mobile LCP dropped to 1.2 seconds and PageSpeed hit 91.\n\nWe also set up Google Search Console properly, submitted the sitemap, and added LocalBusiness JSON-LD schema. Within 90 days, organic contact form submissions went from 0–1 per week to 3–4 per week — with no paid advertising.\n\nThe client had previously paid another agency for "SEO" for 8 months with no measurable results. The issue was purely technical — the site was too slow to rank, and had no schema or properly structured meta tags.', metrics: [{ label: 'Load time', value: '1.2s' }, { label: 'PageSpeed', value: '91' }, { label: 'More leads', value: '+34%' }], liveUrl: '', featured: true },
  { id: 'f2', slug: 'skincare-seo-growth', title: 'D2C Skincare Brand SEO', client: 'Confidential', industry: 'Beauty & Wellness', services: ['SEO', 'Content Strategy', 'Web Development'], stack: ['Next.js', 'Firebase', 'Ahrefs', 'GSC'], imageUrl: '/images/case-dxc.svg', images: [], summary: '0 → 12,000 monthly organic visitors in 6 months', description: 'Built the site from scratch on Next.js and developed a keyword-targeted content strategy for a D2C skincare brand. Published 15 long-form blog posts targeting informational and commercial keywords in the Indian skincare space over the first 60 days.\n\nFirst page-one Google ranking appeared at week 9 for a medium-competition keyword. By month 6, organic traffic had reached 12,000 monthly visitors and surpassed paid Instagram traffic in volume — at zero ongoing spend.\n\nThe content was written by humans, not AI, and focused on genuine skincare advice with the products referenced naturally. Google rewarded specificity and real expertise.', metrics: [{ label: 'Monthly visitors', value: '12K' }, { label: 'To page 1', value: '6mo' }, { label: 'Ongoing ad spend', value: '₹0' }], liveUrl: '', featured: true },
  { id: 'f3', slug: 'saas-startup-growth', title: 'SaaS Startup Growth', client: 'Mohali Tech Co.', industry: 'B2B SaaS', services: ['Web Development', 'Google Ads', 'Landing Pages'], stack: ['Next.js', 'TypeScript', 'Firebase', 'Google Ads', 'GA4'], imageUrl: '/images/case-saas.svg', images: [], summary: '₹0 → ₹8L MRR in 4 months', description: 'End-to-end growth engagement for a Mohali-based B2B SaaS startup. We built the Next.js marketing site, set up Google Search Ads targeting high-intent buyer keywords, and ran A/B tests on the landing page.\n\nThe Google Ads account we inherited was spending 60% of its budget on irrelevant queries. After rebuilding the campaign structure and adding 200+ negative keywords, CPA dropped from ₹4,200 to ₹1,800 in the first month.\n\nCombined with landing page conversion rate improvements (A/B tested headline and CTA), the startup hit ₹8 lakhs in MRR by month 4 from a standing start.', metrics: [{ label: 'MRR month 4', value: '₹8L' }, { label: 'Lower CPA', value: '57%' }, { label: 'Timeline', value: '4mo' }], liveUrl: '', featured: false },
  { id: 'f4', slug: 'fashion-ecommerce', title: 'Fashion E-commerce', client: 'Punjab D2C Brand', industry: 'Fashion Retail', services: ['E-commerce', 'Digital Marketing', 'SEO'], stack: ['Shopify', 'Razorpay', 'Meta Ads', 'Klaviyo', 'Google Shopping'], imageUrl: '/images/case-ecom.svg', images: [], summary: '₹12L → ₹34L monthly GMV in 5 months', description: 'Complete Shopify rebuild with Razorpay, UPI, and COD support — plus GST-compliant invoice generation. Product pages got full schema markup and optimised titles targeting purchase-intent keywords.\n\nWe set up Instagram and Facebook retargeting campaigns targeting users who had visited product pages but not purchased. An abandoned cart email sequence on Klaviyo added another 8% recovery on abandoned sessions.\n\nGMV grew from ₹12 lakhs to ₹34 lakhs per month over 5 months — a 183% increase — without increasing ad budget. The improvement came entirely from conversion rate optimisation and organic traffic growth.', metrics: [{ label: 'GMV growth', value: '183%' }, { label: 'Timeline', value: '5mo' }, { label: 'Ad budget change', value: 'None' }], liveUrl: '', featured: false },
  { id: 'f5', slug: 'edtech-lead-gen', title: 'EdTech Lead Generation', client: 'Bengaluru Institute', industry: 'Education', services: ['Google Ads', 'Landing Pages', 'CRO'], stack: ['Next.js', 'Google Ads', 'GA4', 'SheetDB'], imageUrl: '/images/case-edtech.svg', images: [], summary: '₹480 → ₹180 cost per lead in 45 days', description: 'A Bengaluru coaching institute came to us after spending ₹2 lakhs on Google Ads with a single generic campaign pointing all traffic to their homepage. Cost per lead was ₹480.\n\nWe audited the account and found 60% of spend going to queries like "coaching institute salary", "coaching centre franchise", and "online courses for free" — none of which were their target audience. We rebuilt the campaign structure with separate ad groups per course, added 200+ negative keywords, and created dedicated landing pages for each course type.\n\nCost per lead dropped to ₹180 in 45 days at identical lead volume. The client reinvested the savings into more ad spend, doubling overall lead volume at the same per-lead cost.', metrics: [{ label: 'CPL reduction', value: '62%' }, { label: 'Days to result', value: '45' }, { label: 'Lead volume', value: 'Same' }], liveUrl: '', featured: false },
  { id: 'f6', slug: 'restaurant-local-seo', title: 'Restaurant Chain Local SEO', client: 'Delhi NCR Chain', industry: 'Food & Beverage', services: ['Local SEO', 'Google Business', 'Review Management'], stack: ['Google Business', 'BrightLocal', 'Review Management'], imageUrl: '/images/case-restaurant.svg', images: [], summary: 'Top 3 map pack across all 4 Delhi NCR locations', description: 'A Delhi NCR restaurant chain with 4 locations was invisible in Google Maps search despite being well-reviewed on Zomato. Their Google Business Profiles had incorrect addresses, missing hours, and only 38 combined reviews.\n\nWe overhauled all 4 GBP listings, corrected address and category data, added 40+ photos per location, and implemented a systematic review generation process — asking every table for a Google review via a custom QR code card.\n\nWithin 90 days: 200+ Google reviews across all locations, consistent citation data, and top 3 map pack rankings for "restaurant [neighbourhood]" across all four areas. Zero paid advertising was needed — purely organic local optimisation.', metrics: [{ label: 'Map pack rank', value: '#1–3' }, { label: 'Reviews in 90d', value: '200+' }, { label: 'Locations', value: '4' }], liveUrl: '', featured: false },
];

async function fetchProject(slug) {
  const wpProject = await fetchWPProjectBySlug(slug);
  if (wpProject) return wpProject;
  return FALLBACK.find((p) => p.slug === slug) || null;
}

export async function generateStaticParams() {
  try {
    const wpSlugs = await fetchAllWPProjectSlugs();
    const fallbackSlugs = FALLBACK.map((p) => ({ slug: p.slug }));
    const all = [...wpSlugs, ...fallbackSlugs];
    return all.filter((v, i, a) => a.findIndex((x) => x.slug === v.slug) === i);
  } catch {
    return FALLBACK.map((p) => ({ slug: p.slug }));
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = await fetchProject(slug);
  // Layout's title template already appends "| RC Tech Solutions" — don't
  // add it here too, or it doubles up (same bug fixed in blogs/[slug]).
  if (!p) return { title: 'Project not found' };
  return {
    metadataBase: new URL('https://www.rctechsolutions.com'),
    title: p.title,
    description: p.summary,
    alternates: { canonical: `https://www.rctechsolutions.com/projects/${slug}` },
    openGraph: {
      title: p.title, description: p.summary,
      images: p.imageUrl ? [{ url: p.imageUrl, width: 1200, height: 630 }] : [],
      type: 'website',
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const p = await fetchProject(slug);
  if (!p) notFound();

  const paragraphs = (p.description || '').split('\n\n').filter(Boolean);

  return (
    <div className="min-h-screen" style={{ background: 'var(--rc-paper)' }}>

      {/* Breadcrumb */}
      <nav className="border-b border-[var(--rc-wire)] bg-white">
        <div className="mx-auto max-w-5xl px-4 py-3 flex flex-wrap items-center gap-1.5 rc-mono text-[0.7rem] text-[rgba(42,45,53,0.5)]">
          <Link href="/" className="hover:text-[var(--rc-circuit)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-[var(--rc-circuit)] transition-colors">Projects</Link>
          <span>/</span>
          <span className="text-[var(--rc-ink-soft)] line-clamp-1">{p.title}</span>
        </div>
      </nav>

      {/* Hero image */}
      <div className="relative w-full h-64 sm:h-80 lg:h-96 bg-[var(--rc-paper-deep)] overflow-hidden">
        {p.imageUrl && (
          <Image src={p.imageUrl} alt={p.title} fill
            className="object-cover" priority sizes="100vw" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--rc-ink)]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="rc-mono text-[0.7rem] px-2.5 py-1 bg-[var(--rc-ink)]/70 border border-[var(--rc-paper)]/20 text-[var(--rc-paper)]">
              {p.industry}
            </span>
            {p.services?.slice(0, 3).map((s) => (
              <span key={s} className="rc-mono text-[0.7rem] px-2.5 py-1 bg-[var(--rc-circuit)]/90 text-[var(--rc-ink)]">{s}</span>
            ))}
          </div>
          <h1 className="rc-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--rc-paper)] leading-tight">
            {p.title}
          </h1>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">

          {/* Left: content */}
          <div>
            {/* Summary */}
            <p className="rc-mono text-base font-semibold mb-6 pb-6 border-b border-[var(--rc-wire)]"
              style={{ color: 'var(--rc-circuit)' }}>
              {p.summary}
            </p>

            {/* Metrics */}
            {p.metrics?.length > 0 && (
              <div className="grid grid-cols-3 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)] mb-8">
                {p.metrics.map((m) => (
                  <div key={m.label} className="bg-white p-5 text-center">
                    <p className="rc-display text-3xl font-bold text-[var(--rc-ink)]">{m.value}</p>
                    <p className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.45)] uppercase tracking-wider mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Description */}
            <div className="space-y-4 mb-10">
              {paragraphs.map((para, i) => (
                <p key={i} className="rc-body text-base text-[var(--rc-ink-soft)] leading-[1.85]">{para}</p>
              ))}
            </div>

            {/* Gallery */}
            {p.images?.length > 0 && (
              <div className="mb-10">
                <p className="rc-eyebrow text-[rgba(42,45,53,0.4)] mb-4">Project screenshots</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {p.images.map((img, i) => (
                    <div key={i} className="relative w-full overflow-hidden rc-blueprint-card" style={{ aspectRatio: '16/9' }}>
                      <Image src={img} alt={`${p.title} screenshot ${i + 1}`} fill
                        className="object-cover" sizes="(max-width:640px) 100vw,50vw" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stack */}
            {p.stack?.length > 0 && (
              <div className="rc-blueprint-card p-5 mb-8">
                <p className="rc-eyebrow text-[rgba(42,45,53,0.4)] mb-3">Tech stack</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rc-mono text-[0.7rem] px-3 py-1.5 border border-[var(--rc-wire)] text-[var(--rc-ink-soft)]">{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: sidebar */}
          <aside className="space-y-4 lg:sticky lg:top-24">
            <div className="rc-blueprint-card p-5">
              <p className="rc-eyebrow text-[rgba(42,45,53,0.4)] mb-3">Project details</p>
              <dl className="space-y-3">
                {[
                  { label: 'Client', val: p.client || 'Confidential' },
                  { label: 'Industry', val: p.industry },
                  { label: 'Services', val: p.services?.join(', ') },
                ].filter((r) => r.val).map(({ label, val }) => (
                  <div key={label}>
                    <dt className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.4)] uppercase tracking-wider">{label}</dt>
                    <dd className="rc-body text-sm text-[var(--rc-ink)] mt-0.5">{val}</dd>
                  </div>
                ))}
              </dl>
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="rc-mono text-[0.7rem] uppercase tracking-wider mt-4 block text-[var(--rc-circuit)] hover:underline">
                  View live site ↗
                </a>
              )}
            </div>

            <div className="rc-blueprint-card p-5 text-center" style={{ background: 'var(--rc-ink)' }}>
              <p className="rc-eyebrow mb-2" style={{ color: 'var(--rc-circuit)' }}>Similar project in mind?</p>
              <p className="rc-body text-sm text-[var(--rc-paper)] font-semibold mb-1 leading-snug">
                Free 30-min discovery call.
              </p>
              <p className="rc-body text-xs text-[rgba(246,242,233,0.45)] mb-4 leading-relaxed">
                Fixed price in 48 hours.
              </p>
              <Link href="/contact"
                className="rc-mono text-[0.7rem] uppercase tracking-wider block px-4 py-3 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors">
                Get a free quote →
              </Link>
            </div>

            <Link href="/projects"
              className="rc-mono text-[0.7rem] uppercase tracking-wider text-[rgba(42,45,53,0.5)] hover:text-[var(--rc-circuit)] transition-colors block">
              ← All projects
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
