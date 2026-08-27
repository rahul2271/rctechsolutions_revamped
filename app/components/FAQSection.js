'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import CircuitTrace from './CircuitTrace';

const faqs = [
  {
    question: 'What services does RC Tech Solutions offer?',
    answer: 'We specialise in web development (Next.js, React, e-commerce), technical SEO, digital marketing, social media management, cloud integration, AI-powered solutions, and digital branding. Every service is held to the same engineering quality bar.',
  },
  {
    question: 'How much does a website cost in Mohali?',
    answer: 'A standard business website starts at ₹15,000–₹30,000. Custom Next.js applications and e-commerce builds range from ₹50,000 to ₹2,00,000+ depending on scope. We always quote a fixed price upfront — no hourly billing, no surprise invoices.',
  },
  {
    question: 'How long does a website build take?',
    answer: 'Most business websites take 2–4 weeks from sign-off to launch. E-commerce stores and custom web applications typically take 6–10 weeks. We share a detailed project timeline in our proposal before any work begins.',
  },
  {
    question: 'Is SEO included in every website build?',
    answer: 'Yes — not as an optional add-on. Every site we build includes proper meta tags, JSON-LD schema markup, Core Web Vitals tuning, sitemap generation, and Google Search Console setup. You launch with a 90+ PageSpeed score.',
  },
  {
    question: 'Do you work with startups and small businesses?',
    answer: 'Absolutely. Many of our best projects have been with early-stage founders and growing SMEs. We offer flexible scoping and honest advice about what you actually need at your current stage versus what can wait.',
  },
  {
    question: 'Can you redesign an existing website?',
    answer: 'Yes. Website redesigns are a significant part of our work — either rebuilding from scratch on Next.js for a performance overhaul, or migrating and modernising an existing WordPress or Wix site.',
  },
  {
    question: 'What happens after the site launches?',
    answer: 'Every project includes 30 days of post-launch support at no extra cost: bug fixes, content updates, and a 24-hour response time. After that, we offer monthly maintenance retainers if you want ongoing support.',
  },
  {
    question: 'Do you provide digital marketing alongside web development?',
    answer: 'Yes. We run Google Search Ads, Facebook and Instagram campaigns, local SEO, and email marketing for clients. Many clients start with a website build and then engage us for growth campaigns once the site is ready.',
  },
  {
    question: 'Do you work with clients outside Mohali and Punjab?',
    answer: 'Yes — we have clients in Delhi, Bengaluru, Mumbai, Pune, and working remotely across India. All project communication happens on Slack or WhatsApp, with regular video calls and a shared staging URL for review.',
  },
  {
    question: 'How do I start a project with RC Tech Solutions?',
    answer: 'Book a free 30-minute discovery call via the contact page. We ask about your goals, timeline, and budget. Within 48 hours, we send a fixed-price proposal with a clear scope and delivery date.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 sm:py-24 border-t border-[var(--rc-wire)]" style={{ background: "var(--rc-paper)" }}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">

        <div className="text-center mb-12">
          <span className="rc-eyebrow" style={{ color: "var(--rc-circuit)" }}>Questions</span>
          <h2 className="rc-display text-3xl sm:text-4xl font-semibold text-[var(--rc-ink)] mt-2">
            Everything you need to know.
          </h2>
          <p className="rc-body mt-3 text-sm text-[var(--rc-ink-soft)] max-w-md mx-auto leading-relaxed">
            If something isn't covered here, email us at{' '}
            <a href="mailto:business@rctechsolutions.com" className="text-[var(--rc-circuit)] hover:underline">
              business@rctechsolutions.com
            </a>{' '}
            and we'll respond within 24 hours.
          </p>
        </div>

        <div className="divide-y divide-[var(--rc-wire)] border-y border-[var(--rc-wire)]">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start justify-between gap-4 py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="rc-body text-sm font-medium text-[var(--rc-ink)] leading-snug">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 mt-0.5 rc-mono text-xl leading-none font-light"
                  style={{ color: "var(--rc-circuit)" }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="rc-body text-sm text-[var(--rc-ink-soft)] leading-relaxed pb-5">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="rc-body text-sm text-[var(--rc-ink-soft)] mb-4">
            Ready to talk about your project?
          </p>
          <Link
            href="/contact"
            className="rc-mono text-xs uppercase tracking-wider px-7 py-3.5 bg-[var(--rc-ink)] text-[var(--rc-paper)] hover:bg-[var(--rc-circuit)] transition-colors inline-block"
          >
            Book a free strategy call →
          </Link>
        </div>
      </div>

      <CircuitTrace variant="horizontal" className="mt-16 opacity-40" />
    </section>
  );
}
