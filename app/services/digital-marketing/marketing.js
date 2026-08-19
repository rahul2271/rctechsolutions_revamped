'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  RiInstagramLine, RiGoogleLine, RiMailLine, RiFacebookBoxLine,
  RiBarChartLine, RiBroadcastLine, RiYoutubeLine, RiWhatsappLine,
} from 'react-icons/ri';
import ServicePageLayout from '../../components/ServicePageLayout';

const SERVICES = [
  { icon: RiGoogleLine, title: 'Google Ads Campaigns', slug: 'google-ads-campaigns', price: '₹20,000/mo + spend', desc: 'Search, Shopping, and Display campaigns built around your CPA — not click volume. Conversion tracking set up before a single rupee is spent.' },
  { icon: RiInstagramLine, title: 'Social Media Management', slug: 'social-media-management', price: '₹18,000/mo', desc: 'Content calendars, daily posting, Reels creation, and community management across Instagram, Facebook, and LinkedIn.' },
  { icon: RiMailLine, title: 'Email Marketing', slug: 'email-marketing', price: '₹12,000/mo', desc: 'Welcome sequences, abandoned cart flows, newsletters, and list segmentation on Mailchimp, Klaviyo, or Brevo.' },
  { icon: RiFacebookBoxLine, title: 'Facebook & Instagram Ads', slug: null, price: '₹18,000/mo + spend', desc: 'Prospecting and retargeting campaigns on Meta. Creative strategy, A/B testing, and weekly performance reviews included.' },
  { icon: RiBarChartLine, title: 'Analytics & Reporting', slug: null, price: '₹8,000/mo', desc: 'GA4 setup, Google Ads connection, and monthly performance reporting tied to actual business outcomes — not vanity metrics.' },
  { icon: RiBroadcastLine, title: 'Performance Marketing', slug: null, price: '₹30,000/mo + spend', desc: 'Full-funnel paid campaigns across Google and Meta structured around your customer acquisition cost. No budget wasted on irrelevant clicks.' },
  { icon: RiYoutubeLine, title: 'YouTube Marketing', slug: null, price: '₹15,000/mo', desc: 'YouTube SEO, video ad campaigns, and channel strategy for Indian audiences — the highest-ROI long-form content channel in India.' },
  { icon: RiWhatsappLine, title: 'WhatsApp Marketing', slug: null, price: '₹10,000/mo', desc: 'WhatsApp Business API setup, broadcast lists, and automated flows for lead nurturing and retention.' },
];

const PROBLEMS = [
  { p: 'You\'re spending on ads but not tracking conversions', fix: 'We set up GA4 + Google Ads conversion tracking before spending a rupee. You see exactly which keywords, ads, and campaigns generate leads.' },
  { p: 'Cost per lead keeps rising month over month', fix: 'Usually a campaign structure problem. We rebuild around high-intent keywords, add 200+ negative keywords, and create dedicated landing pages per campaign.' },
  { p: 'Your Instagram has followers but no sales', fix: 'Followers don\'t pay rent. We shift from vanity metrics to conversion-focused content and paid retargeting that targets people who\'ve already shown interest.' },
  { p: 'Your agency sends reports but you don\'t understand them', fix: 'We send monthly plain-English reports: money spent, leads generated, cost per lead, what worked, what didn\'t. No jargon.' },
];

const CASE_STUDIES = [
  { tag: 'Google Ads', result: '₹480 → ₹180 cost per lead', image: '/images/case-edtech.svg', metrics: [{ v: '62%', l: 'Lower CPL' }, { v: '45', l: 'Days' }, { v: 'Same', l: 'Lead volume' }], desc: 'EdTech institute in Bengaluru: rebuilt campaign structure, added 200+ negative keywords, created dedicated landing pages per course. CPL dropped 62% in 45 days at identical lead volume.' },
  { tag: 'Full Funnel', result: '₹12L → ₹34L monthly GMV', image: '/images/case-ecom.svg', metrics: [{ v: '183%', l: 'GMV growth' }, { v: '5mo', l: 'Timeline' }, { v: 'Same', l: 'Ad budget' }], desc: 'Fashion D2C brand: Instagram retargeting + abandoned cart email + product page SEO. GMV grew 183% in 5 months without increasing ad spend — purely conversion and content improvements.' },
];

export const CONFIG = {
  eyebrow: 'Digital Marketing · RC Tech Solutions · Mohali',
  h1: 'Performance Marketing Built Around Your Cost Per Acquisition',
  intro: 'We run digital marketing campaigns structured around what actually matters: cost per lead, cost per acquisition, and return on ad spend — not impressions or follower counts.',
  parentLabel: 'Services', parentPath: '/',
  stats: [{ value: 30, suffix: '+', label: 'Campaigns managed' }, { value: 3, suffix: 'x', label: 'Avg ROAS improvement' }, { value: 40, suffix: '%', label: 'Avg CPL reduction' }],
  guarantees: [
    { title: 'Conversion tracking before any spend', desc: 'We set up proper GA4 and platform conversion tracking before spending a single rupee on ads.' },
    { title: 'Negative keywords from day one', desc: 'We build negative keyword lists before launch so budget isn\'t wasted on irrelevant clicks from the first day.' },
    { title: 'Monthly transparent reporting', desc: 'Plain-English reports: spend, conversions, CPL, ROAS. No jargon, no hiding behind impressions.' },
    { title: 'No long-term lock-in', desc: 'Month-to-month engagements. We earn your business every month, not through a 12-month contract.' },
  ],
  faqs: [
    { q: 'What\'s the minimum ad budget you recommend?', a: 'For local service businesses, minimum ₹15,000–25,000/month in actual ad spend (separate from our management fee) to gather enough data for meaningful optimisation.' },
    { q: 'Do you charge a percentage of ad spend?', a: 'No. We charge a fixed monthly management fee regardless of your ad spend. 100% of your ad budget goes to the platforms.' },
    { q: 'How soon will I see results from Google Ads?', a: 'Search campaigns can drive traffic within 24 hours. Meaningful optimisation typically requires 4–6 weeks of data. ROAS improves significantly over the first 2–3 months.' },
    { q: 'Do you write the ad creative?', a: 'Yes — ad copy, headline variations, and description text are included. For Meta image/video creative, we use your existing assets or create them for an additional fee.' },
    { q: 'Can you manage existing ad accounts or only new ones?', a: 'Both. We do full account audits on existing campaigns and often find 30–50% of spend going to waste before we even change a bid.' },
  ],
  relatedLinks: [
    { href: '/services/digital-marketing/google-ads-campaigns', label: 'Google Ads' },
    { href: '/services/digital-marketing/social-media-management', label: 'Social Media Management' },
    { href: '/services/digital-marketing/email-marketing', label: 'Email Marketing' },
    { href: '/services/seo', label: 'SEO Services' },
    { href: '/services/web-development', label: 'Web Development' },
  ],
};

export default function MarketingPage() {
  return (
    <ServicePageLayout config={CONFIG}>

      <section className="mb-12">
        <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>Problems we fix</span>
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Why most Indian businesses waste their digital marketing budget.</h2>
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

      <section className="mb-12">
        <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>What we run</span>
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Eight channels. One growth system. Real pricing.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            const card = (
              <div className="group flex flex-col h-full bg-[var(--rc-paper)] hover:bg-white transition-colors p-5">
                <div className="flex items-start justify-between mb-3">
                  <Icon size={18} style={{ color: 'var(--rc-circuit)' }} />
                  <span className="rc-mono text-[0.7rem] font-semibold text-[var(--rc-ink)] text-right leading-tight">{svc.price}</span>
                </div>
                <h3 className="rc-display text-sm font-semibold text-[var(--rc-ink)] group-hover:text-[var(--rc-circuit)] transition-colors mb-1.5">{svc.title}</h3>
                <p className="rc-body text-xs text-[var(--rc-ink-soft)]/75 leading-relaxed flex-1">{svc.desc}</p>
                {svc.slug && <span className="mt-3 rc-mono text-[0.7rem] text-[var(--rc-wire)] group-hover:text-[var(--rc-circuit)] transition-colors">Learn more →</span>}
              </div>
            );
            return svc.slug
              ? <Link key={svc.title} href={`/services/digital-marketing/${svc.slug}`} className="block h-full">{card}</Link>
              : <div key={svc.title}>{card}</div>;
          })}
        </div>
      </section>

      <section className="mb-0">
        <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>Real results</span>
        <h2 className="rc-display text-2xl font-semibold text-[var(--rc-ink)] mt-2 mb-6">Two campaigns. Both measured. Both verifiable.</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rc-blueprint-card overflow-hidden bg-white">
              <div className="relative h-44 bg-[var(--rc-paper-deep)]">
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

    </ServicePageLayout>
  );
}
