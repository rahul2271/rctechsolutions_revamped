'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CircuitTrace from './CircuitTrace';

const OBJECTIONS = [
  {
    q: "What if we've already tried an agency and been burned?",
    a: "We hear this on almost every call. Our answer: a fixed price in writing before we start, a staging URL so you see progress every week, and 30-day post-launch support with 24-hour response. You own all the code either way — no lock-in.",
  },
  {
    q: "We don't have a big budget right now.",
    a: "Tell us your number on the discovery call. We scope honestly to budgets. A ₹20,000 landing page on Next.js will outperform a ₹1 lakh WordPress site from most agencies. The right scope at the right price beats an overbuilt project you can't maintain.",
  },
  {
    q: "We need it done very fast.",
    a: "Fastest delivery is 7 days for a focused landing page. Full business website: 2–3 weeks. We don't do overnight pushes because rushed work breaks in production — but 2–3 weeks is genuinely fast for quality work.",
  },
  {
    q: "How do we know the SEO will actually work?",
    a: "We can't guarantee rankings — anyone who does is lying. We guarantee every page indexed within 14 days, full schema markup, 90+ PageSpeed, and a sitemap submitted to Search Console. The sites we build rank because they're technically correct.",
  },
];

const QUICK_NUMBERS = [
  { n: "30 min", l: "Discovery call" },
  { n: "48 hrs", l: "Written proposal" },
  { n: "₹0", l: "Cost to find out" },
  { n: "3 slots", l: "Open now" },
];

export default function CTASection() {
  return (
    <section className="border-b border-[var(--rc-wire)]" style={{ background: "var(--rc-ink)" }}>
      <CircuitTrace variant="branching" color="var(--rc-circuit)" className="opacity-30" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">

          {/* Left */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <span className="rc-via rc-via-pulse" />
              <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>
                3 project slots open · July 2026
              </span>
            </div>

            <h2 className="rc-display text-4xl sm:text-5xl font-semibold text-[var(--rc-paper)] leading-tight">
              Let's build something that actually works.
            </h2>

            <p className="rc-body mt-6 text-base text-[rgba(246,242,233,0.6)] max-w-lg leading-relaxed">
              A 30-minute discovery call. No agency jargon, no NDA before we've spoken,
              no discovery-phase invoice. An honest conversation about your project —
              and whether we're genuinely the right fit to help.
            </p>
            <p className="rc-body mt-3 text-sm text-[rgba(246,242,233,0.4)] max-w-lg leading-relaxed">
              If we're not the right fit, we'll tell you that too — and point you toward
              someone who is. We'd rather lose the project than take work we can't do well.
            </p>

            <div className="mt-10 flex flex-wrap gap-8">
              {QUICK_NUMBERS.map(({ n, l }) => (
                <div key={l}>
                  <p className="rc-display text-3xl font-bold text-[var(--rc-paper)]">{n}</p>
                  <p className="rc-mono text-[0.6rem] uppercase tracking-wider text-[rgba(246,242,233,0.35)] mt-1">{l}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact"
                className="rc-mono text-xs uppercase tracking-wider px-8 py-4 font-medium
                           bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)]
                           transition-colors">
                Book a free strategy call
              </Link>
              <Link href="/services"
                className="rc-mono text-xs uppercase tracking-wider px-8 py-4
                           border border-[rgba(246,242,233,0.2)] text-[var(--rc-paper)]
                           hover:border-[var(--rc-paper)] transition-colors">
                See all services
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {[
                "Fixed price, no surprises",
                "90+ PageSpeed guaranteed",
                "30-day post-launch support",
                "You own all the code",
                "Based in Mohali, Punjab",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5 rc-mono text-[0.6rem] text-[rgba(246,242,233,0.3)]">
                  <span style={{ color: "var(--rc-trace)" }}>—</span>{item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: objection handling */}
          <div>
            <p className="rc-eyebrow text-[rgba(246,242,233,0.25)] mb-5">
              Questions we get on every discovery call
            </p>

            <div className="divide-y divide-[rgba(246,242,233,0.07)] border-y border-[rgba(246,242,233,0.07)]">
              {OBJECTIONS.map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="py-5">
                  <p className="rc-body text-sm font-semibold text-[var(--rc-paper)] mb-2 leading-snug">
                    {item.q}
                  </p>
                  <p className="rc-body text-xs text-[rgba(246,242,233,0.45)] leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-5 border border-[rgba(246,242,233,0.08)]">
              <p className="rc-mono text-[0.6rem] text-[rgba(246,242,233,0.35)] mb-2">Still have questions?</p>
              <p className="rc-body text-sm text-[var(--rc-paper)]">
                Email:{' '}
                <a href="mailto:business@rctechsolutions.com"
                  className="text-[var(--rc-circuit)] hover:underline">
                  business@rctechsolutions.com
                </a>
              </p>
              <p className="rc-body text-sm text-[var(--rc-paper)] mt-1">
                Call / WhatsApp:{' '}
                <a href="tel:+917009646377"
                  className="text-[var(--rc-circuit)] hover:underline">
                  +91 70096-46377
                </a>
              </p>
              <p className="rc-mono text-[0.7rem] text-[rgba(246,242,233,0.25)] mt-2">
                Mon–Fri 9AM–6PM IST · Sector 82, Mohali 140306
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
