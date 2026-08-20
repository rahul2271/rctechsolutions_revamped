'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CASE_STUDIES = [
  {
    client: "Chandigarh law firm",
    industry: "Legal services",
    tag: "Web Performance",
    result: "7.3s → 1.2s load time",
    detail: "WordPress rebuilt on Next.js with WebP images and Mumbai CDN. PageSpeed: 31 → 91 on mobile. Organic contact leads went from 0–1/week to 3–4/week in 90 days. No paid ads — purely performance and SEO improvements.",
    metrics: [{ v: "83%", l: "faster load" }, { v: "34%", l: "more leads" }, { v: "91", l: "PageSpeed" }],
  },
  {
    client: "D2C skincare brand",
    industry: "Beauty & wellness",
    tag: "SEO + Content",
    result: "0 → 12,000 monthly visitors",
    detail: "Built from scratch on Next.js with keyword-targeted content. 15 long-form posts published in 60 days. First page-one ranking appeared at week 9. By month 6, organic traffic surpassed paid Instagram traffic at zero ongoing cost.",
    metrics: [{ v: "12K", l: "monthly visitors" }, { v: "6mo", l: "to page 1" }, { v: "₹0", l: "ad spend" }],
  },
  {
    client: "Mohali SaaS startup",
    industry: "B2B software",
    tag: "Full-stack growth",
    result: "₹0 → ₹8L MRR in 4 months",
    detail: "Next.js site + Google Ads + landing page A/B testing. CPA reduced from ₹4,200 to ₹1,800 after negative keyword cleanup and landing page conversion work. No budget increase — same spend, better structure.",
    metrics: [{ v: "₹8L", l: "MRR month 4" }, { v: "57%", l: "lower CPA" }, { v: "4mo", l: "to revenue" }],
  },
  {
    client: "Punjab e-commerce brand",
    industry: "Fashion retail",
    tag: "E-commerce",
    result: "₹12L → ₹34L monthly GMV",
    detail: "Shopify rebuild with Razorpay + UPI + COD. Product page SEO with schema markup. Instagram Ads with retargeting. Abandoned cart email flow. GMV grew 183% in 5 months without increasing ad budget.",
    metrics: [{ v: "183%", l: "GMV growth" }, { v: "5mo", l: "timeline" }, { v: "Same", l: "ad budget" }],
  },
  {
    client: "Bengaluru coaching institute",
    industry: "EdTech",
    tag: "Lead generation",
    result: "₹480 → ₹180 cost per lead",
    detail: "Google Ads audit found 60% of spend on irrelevant queries. Rebuilt campaign structure, added 200+ negative keywords, created dedicated landing pages per course. CPL dropped 62% in 45 days at same lead volume.",
    metrics: [{ v: "62%", l: "lower CPL" }, { v: "45", l: "days" }, { v: "Same", l: "lead volume" }],
  },
  {
    client: "Delhi NCR restaurant chain",
    industry: "Food & beverage",
    tag: "Local SEO",
    result: "Top 3 map pack across 4 locations",
    detail: "Google Business Profile overhaul across 4 locations. Citation consistency cleanup. Review generation workflow: 38 → 200+ reviews in 90 days. Top 3 map pack rankings for 'restaurant [area]' queries across all locations.",
    metrics: [{ v: "#1–3", l: "map pack" }, { v: "200+", l: "reviews in 90d" }, { v: "4", l: "locations" }],
  },
];

const STATS = [
  { stat: "50+", label: "Projects shipped", sub: "Across web, SEO & marketing" },
  { stat: "92%", label: "Client retention", sub: "Most return within 6 months" },
  { stat: "3+", label: "Years in business", sub: "Founded 2021, Mohali" },
  { stat: "96", label: "Avg PageSpeed", sub: "Across all live client sites" },
];

export default function CtoSection() {
  return (
    <section className="py-20 sm:py-24 border-b border-[var(--rc-wire)]"
      style={{ background: "var(--rc-paper)" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Founder + stats */}
        <div className="grid lg:grid-cols-2 gap-14 items-start mb-20">
          <div>
            <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>
              Directly from the founder
            </span>
            <blockquote className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)] mt-4 leading-snug">
              "We don't take every project. We take the ones where we're the right fit
              — and then we go all in. Every number on this page is from a real client."
            </blockquote>
            <div className="flex items-center gap-4 mt-7">
              <Image src="/rahul.jpeg"
                alt="Rahul Chauhan, Founder RC Tech Solutions"
                width={56} height={56}
                className="rounded-full object-cover flex-shrink-0" />
              <div>
                <p className="rc-body text-sm font-semibold text-[var(--rc-ink)]">Rahul Chauhan</p>
                <p className="rc-mono text-[0.6rem] text-[rgba(42,45,53,0.55)]">
                  Founder & CEO · RC Tech Solutions · Mohali, Punjab
                </p>
                <a href="https://www.linkedin.com/in/er-rahul-chauhan/"
                  target="_blank" rel="noopener noreferrer"
                  className="rc-mono text-[0.6rem] text-[var(--rc-circuit)] hover:underline mt-0.5 block">
                  linkedin.com/in/er-rahul-chauhan →
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
            {STATS.map(({ stat, label, sub }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6">
                <p className="rc-display text-4xl font-bold text-[var(--rc-ink)]">{stat}</p>
                <p className="rc-body text-sm font-semibold text-[var(--rc-ink)] mt-2">{label}</p>
                <p className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.45)] mt-1">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case studies header */}
        <div className="mb-8">
          <span className="rc-eyebrow text-[rgba(42,45,53,0.4)] block mb-2">
            Results from real projects
          </span>
          <h2 className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)]">
            Six case studies. Six different problems. All solved.
          </h2>
          <p className="rc-body text-sm text-[var(--rc-ink-soft)] mt-2 max-w-xl leading-relaxed">
            Every project below is a real client. Some identifying details changed for privacy
            — but every number is verifiable.
          </p>
        </div>

        {/* Case study grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div key={cs.client}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="rc-mono text-[0.6rem] uppercase tracking-wider px-2 py-1
                                 border border-[var(--rc-wire)] text-[var(--rc-trace)]">
                  {cs.tag}
                </span>
                <span className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.35)]">{cs.industry}</span>
              </div>
              <p className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.4)] mb-1">{cs.client}</p>
              <p className="rc-display text-lg font-semibold text-[var(--rc-ink)] mb-3 leading-snug">
                {cs.result}
              </p>
              <p className="rc-body text-xs text-[var(--rc-ink-soft)] leading-relaxed flex-1">
                {cs.detail}
              </p>
              <div className="mt-4 pt-4 border-t border-[var(--rc-wire)] flex gap-4">
                {cs.metrics.map((m) => (
                  <div key={m.l}>
                    <p className="rc-mono text-sm font-bold text-[var(--rc-ink)]">{m.v}</p>
                    <p className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.4)] uppercase tracking-wider mt-0.5">
                      {m.l}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 p-8 sm:p-10 text-center rc-blueprint-card"
          style={{ background: "var(--rc-ink)" }}>
          <p className="rc-display text-2xl font-semibold text-[var(--rc-paper)] mb-2">
            Want results like these?
          </p>
          <p className="rc-body text-sm text-[rgba(246,242,233,0.5)] mb-6 max-w-md mx-auto leading-relaxed">
            Tell us about your project. We'll tell you honestly whether we can help — and
            exactly what we'd do in the first 30 days.
          </p>
          <Link href="/contact"
            className="rc-mono text-xs uppercase tracking-wider px-7 py-3.5 inline-block
                       bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)]
                       transition-colors">
            Get a free strategy call →
          </Link>
        </div>
      </div>
    </section>
  );
}
