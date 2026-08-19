'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const PROBLEMS = [
  {
    problem: "Your website takes 6+ seconds to load on mobile",
    solution: "We rebuild on Next.js with static generation, image WebP conversion, and CDN on Mumbai edge nodes. Average LCP after rebuild: 1.3s.",
    metric: "−78% load time",
    link: "/services/web-development",
  },
  {
    problem: "Google can't find half your pages",
    solution: "We fix crawlability issues, add proper sitemaps, structured data schema, and submit everything to Search Console. Then we track indexing weekly.",
    metric: "+90% pages indexed",
    link: "/services/seo/technical-seo-audit",
  },
  {
    problem: "You're paying for clicks that don't convert",
    solution: "We audit your Google Ads account, rebuild campaign structure around high-intent keywords, and add proper negative keyword lists. Most accounts reduce wasted spend by 30–40% in the first month.",
    metric: "−35% wasted ad spend",
    link: "/services/digital-marketing/google-ads-campaigns",
  },
  {
    problem: "Your website looks good but generates zero leads",
    solution: "A beautiful site that doesn't convert is an expensive brochure. We audit your CTAs, forms, page hierarchy, and conversion funnel — then rebuild what's blocking leads.",
    metric: "3–5× lead increase",
    link: "/contact",
  },
  {
    problem: "You don't know what's actually driving results",
    solution: "We set up Google Analytics 4 properly, connect it to Search Console and your ad accounts, and give you a single dashboard that shows exactly what's working and what isn't.",
    metric: "Full visibility",
    link: "/services/seo",
  },
  {
    problem: "Your brand looks amateur next to your actual quality",
    solution: "We build brand identity systems — logo, typography, colour palette, design guidelines — that match the quality of your product and justify premium pricing.",
    metric: "Brand premium",
    link: "/services/digital-branding",
  },
];

export default function ProblemSolution() {
  return (
    <section
      className="py-20 sm:py-24 border-b border-[var(--rc-wire)]"
      style={{ background: "var(--rc-ink)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>
            Common problems we fix
          </span>
          <h2 className="rc-display text-3xl sm:text-4xl font-semibold text-[var(--rc-paper)] mt-2 max-w-2xl leading-tight">
            You've probably tried to fix these already. We actually fix them.
          </h2>
          <p className="rc-body mt-3 text-sm text-[rgba(246,242,233,0.5)] max-w-lg leading-relaxed">
            These are the six problems we see on almost every Indian business website
            we audit. Each one has a known, systematic fix.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(246,242,233,0.1)] border border-[rgba(246,242,233,0.1)]">
          {PROBLEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              <Link
                href={item.link}
                className="group flex flex-col h-full p-6 hover:bg-[rgba(246,242,233,0.05)] transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="rc-mono text-[0.6rem] uppercase tracking-wider px-2 py-1 border text-[var(--rc-signal)]"
                    style={{ borderColor: "var(--rc-signal)/30", color: "var(--rc-signal)" }}>
                    {item.metric}
                  </span>
                  <span className="rc-mono text-[0.7rem] text-[rgba(246,242,233,0.2)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="rc-body text-sm font-semibold text-[var(--rc-circuit)] leading-snug mb-3">
                  ✗ {item.problem}
                </p>

                <p className="rc-body text-xs text-[rgba(246,242,233,0.6)] leading-relaxed flex-1">
                  {item.solution}
                </p>

                <span className="mt-4 rc-mono text-[0.6rem] uppercase tracking-wider text-[rgba(246,242,233,0.2)] group-hover:text-[var(--rc-circuit)] transition-colors">
                  See how →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
