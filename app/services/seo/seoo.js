'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  RiSearchLine, RiMapPinLine, RiFileTextLine, RiBarChartLine,
  RiLinksLine, RiAwardLine, RiToolsLine, RiGlobalLine,
} from 'react-icons/ri';
import ServicePageLayout from '../../components/ServicePageLayout';

const SERVICES = [
  { icon: RiToolsLine, title: 'Technical SEO Audit', slug: 'technical-seo-audit', price: '₹15,000', desc: 'Full crawl of your site — indexing errors, Core Web Vitals failures, canonical issues, schema gaps — all prioritised by revenue impact with a fix roadmap.' },
  { icon: RiMapPinLine, title: 'Local SEO & Google Business', slug: 'local-seo-services', price: '₹12,000/mo', desc: 'GBP optimisation, citation building, and review strategy to rank in the local map pack for your city. Average client hits top 3 in 8–12 weeks.' },
  { icon: RiFileTextLine, title: 'Keyword Research & Content Strategy', slug: 'keyword-research-content-strategy', price: '₹18,000', desc: 'Data-backed keyword research, competitor gap analysis, and a 90-day content calendar targeting searches your customers actually make.' },
  { icon: RiSearchLine, title: 'On-Page SEO', slug: null, price: '₹10,000', desc: 'Title tags, meta descriptions, H-tag hierarchy, internal linking, image alt text, and JSON-LD schema markup across every key page.' },
  { icon: RiLinksLine, title: 'Link Building', slug: null, price: '₹20,000/mo', desc: 'White-hat backlinks from Indian business publications, guest posts, digital PR, and HARO responses. No link farms, no PBNs.' },
  { icon: RiGlobalLine, title: 'E-commerce SEO', slug: null, price: '₹25,000/mo', desc: 'Product page optimisation, category architecture, faceted navigation fixes, and Product schema markup for Shopify and WooCommerce stores.' },
  { icon: RiBarChartLine, title: 'SEO Reporting & Analytics', slug: null, price: '₹8,000/mo', desc: 'Monthly ranking reports from Search Console, GA4, and rank tracking — tied to business outcomes, not impressions and average position averages.' },
  { icon: RiAwardLine, title: 'Content Writing for SEO', slug: null, price: '₹3,000/post', desc: 'Long-form, expert-written blog posts and landing page copy. Human-written, India-specific, with proper keyword integration. Not AI filler.' },
];

const PROBLEMS = [
  { p: 'Your site gets traffic but no leads', fix: 'Traffic without conversions means the wrong keywords. We audit search intent and rebuild your content strategy around commercial queries.' },
  { p: 'You rank on page 2–3 but not page 1', fix: 'Usually a technical issue — slow page speed, missing schema, or thin content. Our audit identifies the exact blocker and fixes it.' },
  { p: 'Google has not indexed half your pages', fix: 'We diagnose the crawl budget, robots.txt, sitemap, and internal link structure — then resubmit every page and verify indexing in Search Console.' },
  { p: 'You have tried SEO agencies and seen no results', fix: 'Most agencies report activity, not outcomes. We report keyword positions, organic traffic, and leads — and tie them directly to the work we did.' },
];

const PROCESS = [
  { n: '01', t: 'Technical audit (week 1)', d: 'Full crawl using Screaming Frog + manual review. Core Web Vitals, indexing, schema, canonicals, internal links. Deliverable: a prioritised fix roadmap.' },
  { n: '02', t: 'Keyword & competitor research (week 1–2)', d: 'Map every relevant search query to your pages. Identify gaps vs. competitors. Build a content calendar for 90 days.' },
  { n: '03', t: 'On-page fixes (weeks 2–4)', d: 'Implement the technical fixes, update title tags, meta descriptions, header structure, and add schema markup to all key pages.' },
  { n: '04', t: 'Content + link building (months 2–6)', d: 'Publish keyword-targeted content monthly. Build backlinks from Indian publications. Monitor and report rankings weekly.' },
  { n: '05', t: 'Monthly reporting', d: 'Positions, organic traffic, leads from organic — reported honestly. If something isn\'t working, we tell you and change the approach.' },
];

const CASE_STUDIES = [
  { tag: 'Local SEO', result: 'Top 3 map pack · 4 locations', image: '/images/case-restaurant.svg', metrics: [{ v: '#1–3', l: 'Map pack' }, { v: '200+', l: 'Reviews in 90d' }, { v: '4', l: 'Locations' }], desc: 'Delhi NCR restaurant chain: GBP overhaul + citation cleanup + review generation workflow. 38 → 200+ reviews in 90 days. Top 3 for "restaurant [area]" across all four locations. Zero paid ads.' },
  { tag: 'Organic Growth', result: '0 → 12,000 monthly visitors', image: '/images/case-dxc.svg', metrics: [{ v: '12K', l: 'Monthly visitors' }, { v: '6mo', l: 'To page 1' }, { v: '₹0', l: 'Ad spend' }], desc: 'D2C skincare brand: Built from scratch with keyword-targeted content. 15 long-form posts in 60 days. First page-one ranking at week 9. Organic traffic surpassed paid Instagram by month 6.' },
];

export const CONFIG = {
  eyebrow: 'SEO Services · RC Tech Solutions · Mohali',
  h1: 'Technical SEO That Gets Indian Businesses to Page One',
  intro: 'Not promises — a documented process. Technical audits, local search optimisation, and content strategy calibrated for the Indian search landscape. We track positions and leads, not just activity.',
  parentLabel: 'Services', parentPath: '/',
  stats: [{ value: 50, suffix: '+', label: 'Sites audited' }, { value: 34, suffix: '%', label: 'Avg traffic lift in 90 days' }, { value: 6, suffix: ' mo', label: 'Avg time to page 1' }],
  guarantees: [
    { title: 'Technical audit first — always', desc: 'Every SEO engagement starts with a full technical audit. No generic recommendations without first understanding what\'s broken on your specific site.' },
    { title: 'Monthly ranking reports', desc: 'Clear reports on keyword positions, organic traffic, and conversion — not a dashboard you never open.' },
    { title: 'No black-hat tactics', desc: 'We do not buy links, spin content, or use PBNs. Everything we do survives the next Google update.' },
    { title: 'Sitemap submitted and verified', desc: 'We submit your sitemap to Google Search Console and verify all key pages are indexed within 14 days of starting.' },
  ],
  faqs: [
    { q: 'How long does SEO take?', a: 'For local SEO (Google Business Profile, map pack), expect movement in 6–12 weeks with consistent effort. For competitive organic rankings, 6–12 months. Anyone promising page one in 2 weeks is lying.' },
    { q: 'Do you guarantee first-page rankings?', a: 'No — and you should distrust any agency that does. We guarantee a documented process, regular honest reporting, and measurable improvement in traffic and rankings over time.' },
    { q: 'What does a technical SEO audit include?', a: 'Crawlability analysis, indexing report, Core Web Vitals assessment, structured data review, mobile usability check, internal linking audit, and a prioritised fix roadmap — delivered with a walkthrough call.' },
    { q: 'Do I need SEO if I\'m already running Google Ads?', a: 'Yes. Ads and SEO serve different parts of the funnel. Ads capture immediate intent; SEO builds long-term visibility that works even when your ad budget is zero.' },
    { q: 'Can you do SEO for a WordPress site?', a: 'Yes — WordPress, Shopify, Wix, Next.js, or any platform. We work within your existing stack and implement fixes in your CMS wherever possible.' },
  ],
  relatedLinks: [
    { href: '/services/seo/technical-seo-audit', label: 'Technical SEO Audit' },
    { href: '/services/seo/local-seo-services', label: 'Local SEO' },
    { href: '/services/seo/keyword-research-content-strategy', label: 'Keyword Research' },
    { href: '/services/web-development', label: 'Web Development' },
    { href: '/services/digital-marketing', label: 'Digital Marketing' },
  ],
};

export default function SeoPage() {
  return (
    <ServicePageLayout config={CONFIG}>

      {/* Problems */}
      <section className="mb-12">
        <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>Common problems we fix</span>
        <h2 className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Why most Indian websites don't rank — and how we fix it.</h2>
        <div className="grid sm:grid-cols-2 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)] mb-10">
          {PROBLEMS.map((item, i) => (
            <div key={i} className="bg-white p-5">
              <p className="rc-mono text-[0.7rem] mb-2" style={{ color: 'var(--rc-circuit)' }}>✗ Problem</p>
              <p className="rc-body text-sm font-semibold text-[var(--rc-ink)] mb-2">{item.p}</p>
              <p className="rc-body text-xs text-[var(--rc-ink-soft)] leading-relaxed"><span style={{ color: 'var(--rc-trace)' }}>→ </span>{item.fix}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mb-12">
        <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>What we cover</span>
        <h2 className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Eight SEO services. Every angle of search covered.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            const card = (
              <div className="group flex flex-col h-full bg-[var(--rc-paper)] hover:bg-white transition-colors p-5">
                <div className="flex items-start justify-between mb-3">
                  <Icon size={18} style={{ color: 'var(--rc-circuit)' }} />
                  <span className="rc-mono text-[0.7rem] font-semibold text-[var(--rc-ink)]">{svc.price}</span>
                </div>
                <h3 className="rc-display text-sm font-semibold text-[var(--rc-ink)] group-hover:text-[var(--rc-circuit)] transition-colors mb-1.5">{svc.title}</h3>
                <p className="rc-body text-xs text-[var(--rc-ink-soft)]/75 leading-relaxed flex-1">{svc.desc}</p>
                {svc.slug && <span className="mt-3 rc-mono text-[0.7rem] text-[var(--rc-wire)] group-hover:text-[var(--rc-circuit)] transition-colors">Learn more →</span>}
              </div>
            );
            return svc.slug
              ? <Link key={svc.title} href={`/services/seo/${svc.slug}`} className="block h-full">{card}</Link>
              : <div key={svc.title}>{card}</div>;
          })}
        </div>
      </section>

      {/* Case studies */}
      <section className="mb-12">
        <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>Real results</span>
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Two SEO campaigns. Both verifiable.</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rc-blueprint-card overflow-hidden bg-white">
              <div className="relative h-44 overflow-hidden bg-[var(--rc-paper-deep)]">
                <Image src={cs.image} alt={cs.result} fill className="object-cover" sizes="50vw" />
              </div>
              <div className="p-5">
                <span className="rc-mono text-[0.7rem] px-2 py-0.5 border border-[var(--rc-circuit)]/20 text-[var(--rc-circuit)]/70">{cs.tag}</span>
                <p className="rc-display text-lg font-semibold text-[var(--rc-ink)] mt-2 mb-2">{cs.result}</p>
                <p className="rc-body text-xs text-[var(--rc-ink-soft)] leading-relaxed mb-4">{cs.desc}</p>
                <div className="flex gap-5 pt-3 border-t border-[var(--rc-wire)]">
                  {cs.metrics.map(m => (
                    <div key={m.l}>
                      <p className="rc-mono text-base font-bold text-[var(--rc-ink)]">{m.v}</p>
                      <p className="rc-mono text-[0.65rem] text-[rgba(42,45,53,0.4)] uppercase tracking-wider">{m.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mb-0">
        <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>Our process</span>
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Five steps. No mystery about what we're doing or why.</h2>
        <div className="space-y-0 divide-y divide-[var(--rc-wire)] border-y border-[var(--rc-wire)]">
          {PROCESS.map((p) => (
            <div key={p.n} className="flex gap-5 py-5">
              <span className="rc-mono text-[0.7rem] font-medium flex-shrink-0 pt-0.5" style={{ color: 'var(--rc-circuit)' }}>{p.n}</span>
              <div>
                <p className="rc-body text-sm font-semibold text-[var(--rc-ink)] mb-1">{p.t}</p>
                <p className="rc-body text-xs text-[var(--rc-ink-soft)] leading-relaxed">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </ServicePageLayout>
  );
}
