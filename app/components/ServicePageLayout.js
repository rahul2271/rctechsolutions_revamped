'use client';

// ServicePageLayout — shared layout for ALL service category + sub-service pages.
// Replaces the old per-page blue/purple gradient heroes with the brand system.
// Usage:
//   <ServicePageLayout config={SERVICE_CONFIG}>
//     {children}  ← service-specific cards/sections go here
//   </ServicePageLayout>
//
// SEO NOTE — why there's no `schema` prop here anymore:
// This file is a Client Component ('use client' above), so anything it
// renders is only present in the initial HTML if React can server-render
// it — but JSON-LD injected via a Client Component still ends up depending
// on client-side hydration completing correctly in some rendering paths,
// and more importantly trains future edits toward putting structured data
// in the wrong layer. Google's own guidance is that structured data should
// be reliably present in server-rendered HTML: Googlebot does execute JS,
// but that's a slower, second-pass rendering queue, and non-JS-executing
// consumers (many rich-result validators, some Bing crawling, social
// unfurl bots) may miss it entirely if it only exists after hydration.
// The safe pattern — already used correctly elsewhere in this codebase
// (see app/about/page.js, app/blogs/[slug]/page.js) — is to render the
// <script type="application/ld+json"> tag directly from the route's
// page.js (a Server Component), as a sibling to this layout, not inside it.

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import CircuitTrace from './CircuitTrace';
import RecaptchaField, { useRecaptcha } from './Recaptcha';
import { verifyRecaptcha } from '../lib/verifyRecaptcha';

// ─── Verification logos (actual platforms, with placeholders) ─────────────────
const VERIFICATION_BADGES = [
  {
    name: 'Crunchbase Verified',
    logo: '/crunchbase verified.png',
    href: 'https://www.crunchbase.com/organization/rc-tech-solutions',
    desc: 'Organization profile',
  },
  {
    name: 'Google Business',
    logo: null, // placeholder — add /public/google-business.png
    logoText: 'G',
    href: 'https://maps.google.com/?q=RC+Tech+Solutions+Mohali',
    desc: 'Verified listing · Mohali',
  },
  {
    name: 'Meta Business',
    logo: '/facebook-icon.svg',
    href: 'https://www.facebook.com/rchauhanweb',
    desc: 'Business page',
  },
  {
    name: 'Razorpay Partner',
    logo: '/razorpay.png',
    href: 'https://razorpay.com',
    desc: 'Payments integration',
  },
];

// ─── Partner / tools logos (the scrolling marquee) ────────────────────────────
const PARTNER_LOGOS = [
  { name: 'Zoho', src: '/zoho.png' },
  { name: 'Freshworks', src: '/freshworks.png' },
  { name: 'Razorpay', src: '/razorpay.png' },
  { name: 'Chargebee', src: '/chargebee.png' },
  { name: 'Cleartax', src: '/cleartax.png' },
  { name: 'Unacademy', src: '/un.png' },
  { name: 'Redtape', src: '/redtape.png' },
  { name: 'Yukti Herbs', src: '/yukti herbs.png' },
  // Placeholder logos — update src when actual files added
  { name: 'Next.js', src: null, text: 'Next.js' },
  { name: 'Vercel', src: null, text: 'Vercel' },
  { name: 'Firebase', src: null, text: 'Firebase' },
  { name: 'AWS', src: null, text: 'AWS' },
];

// ─── Marquee component ────────────────────────────────────────────────────────
function Marquee({ items }) {
  const doubled = [...items, ...items]; // seamless loop

  return (
    <div className="overflow-hidden border-y border-[var(--rc-wire)] bg-white py-4" aria-hidden="true">
      <div
        className="flex gap-8 items-center"
        style={{
          animation: 'rc-marquee 28s linear infinite',
          width: 'max-content',
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center h-7 px-4"
          >
            {item.src ? (
              <img
                src={item.src}
                alt={item.name}
                className="h-6 w-auto object-contain grayscale opacity-50 hover:opacity-80 hover:grayscale-0 transition-all"
                loading="lazy"
              />
            ) : (
              <span className="rc-mono text-xs text-[rgba(42,45,53,0.4)] uppercase tracking-wider">
                {item.text || item.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Stat counter ─────────────────────────────────────────────────────────────
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setStarted(true);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let v = 0;
    const step = target / (1000 / 16);
    const t = setInterval(() => {
      v += step;
      if (v >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(v));
    }, 16);
    return () => clearInterval(t);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}


// ─── Inline Lead Form ─────────────────────────────────────────────────────────
function LeadForm({ serviceName }) {
  const [data, setData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const { ref: recaptchaRef, token: captchaToken, onChange: onCaptchaChange, reset: resetCaptcha } = useRecaptcha();

  const handle = (k) => (e) => setData(p => ({ ...p, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!captchaToken) { setStatus('captcha'); return; }
    setStatus('sending');
    const captchaOk = await verifyRecaptcha(captchaToken);
    if (!captchaOk) { setStatus('error'); resetCaptcha(); return; }
    try {
      const res = await fetch('https://sheetdb.io/api/v1/nac4zyu6aoaoz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: { ...data, service: serviceName, source: typeof window !== 'undefined' ? window.location.pathname : '' } }),
      });
      setStatus(res.ok ? 'done' : 'error');
      if (!res.ok) resetCaptcha();
    } catch { setStatus('error'); resetCaptcha(); }
  };

  return (
    <section id="get-quote" className="border-t border-b border-[var(--rc-wire)] scroll-mt-20"
      style={{ background: 'var(--rc-paper-deep)' }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">

          {/* Left: copy */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="rc-via rc-via-pulse" />
              <span className="rc-eyebrow" style={{ color: 'var(--rc-trace)' }}>Free consultation</span>
            </div>
            <h2 className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)] mb-4 leading-snug">
              Get a free quote for your {serviceName} project.
            </h2>
            <p className="rc-body text-sm text-[var(--rc-ink-soft)] leading-relaxed mb-6">
              Fill in the form and we'll respond within 24 hours with an honest assessment and a fixed-price proposal. No obligation, no agency jargon.
            </p>
            <ul className="space-y-2.5">
              {['Fixed price — no hidden charges', '24-hour response guaranteed', '30-day post-launch support', 'Based in Mohali · serving all of India'].map(item => (
                <li key={item} className="flex items-center gap-2 rc-body text-sm text-[var(--rc-ink-soft)]">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--rc-trace)' }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 pt-6 border-t border-[var(--rc-wire)]">
              <p className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.45)] mb-2">Prefer to call or WhatsApp?</p>
              <a href="tel:+917009646377" className="rc-display text-lg font-semibold text-[var(--rc-ink)] hover:text-[var(--rc-circuit)] transition-colors block">
                +91 70096-46377
              </a>
              <a href="mailto:business@rctechsolutions.com" className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.5)] hover:text-[var(--rc-circuit)] transition-colors block mt-1">
                business@rctechsolutions.com
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="rc-blueprint-card bg-white p-6 sm:p-8">
            {status === 'done' ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(45,95,76,0.1)' }}>
                  <span className="text-2xl" style={{ color: 'var(--rc-trace)' }}>✓</span>
                </div>
                <h3 className="rc-display text-xl font-semibold text-[var(--rc-ink)] mb-2">We've got your request</h3>
                <p className="rc-body text-sm text-[var(--rc-ink-soft)] leading-relaxed">
                  Our team will review your project and respond within 24 hours with a detailed, honest assessment.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[['name','Your full name','text'],['phone','Phone / WhatsApp','tel']].map(([k,ph,t]) => (
                    <div key={k}>
                      <label className="rc-mono text-[0.7rem] uppercase tracking-wide text-[rgba(42,45,53,0.5)] block mb-1.5">
                        {k === 'name' ? 'Full name' : 'Phone'} <span className="text-[var(--rc-circuit)]">*</span>
                      </label>
                      <input type={t} value={data[k]} onChange={handle(k)} placeholder={ph} required
                        className="w-full border border-[var(--rc-wire)] px-4 py-3 rc-body text-sm text-[var(--rc-ink)] bg-white placeholder-rc-ink-soft/30 focus:outline-none focus:border-[var(--rc-circuit)] transition-colors" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="rc-mono text-[0.7rem] uppercase tracking-wide text-[rgba(42,45,53,0.5)] block mb-1.5">
                    Email <span className="text-[var(--rc-circuit)]">*</span>
                  </label>
                  <input type="email" value={data.email} onChange={handle('email')} placeholder="you@company.com" required
                    className="w-full border border-[var(--rc-wire)] px-4 py-3 rc-body text-sm text-[var(--rc-ink)] bg-white placeholder-rc-ink-soft/30 focus:outline-none focus:border-[var(--rc-circuit)] transition-colors" />
                </div>
                <div>
                  <label className="rc-mono text-[0.7rem] uppercase tracking-wide text-[rgba(42,45,53,0.5)] block mb-1.5">
                    Tell us about your project
                  </label>
                  <textarea value={data.message} onChange={handle('message')} rows={4}
                    placeholder={`Briefly describe your ${serviceName} project — what you need, your timeline, and your budget range.`}
                    className="w-full border border-[var(--rc-wire)] px-4 py-3 rc-body text-sm text-[var(--rc-ink)] bg-white placeholder-rc-ink-soft/30 focus:outline-none focus:border-[var(--rc-circuit)] transition-colors resize-none" />
                </div>
                <RecaptchaField recaptchaRef={recaptchaRef} onChange={onCaptchaChange} />
                {status === 'captcha' && (
                  <p className="rc-mono text-[0.7rem] text-red-500">Please check the reCAPTCHA box to verify you're human.</p>
                )}
                {status === 'error' && (
                  <p className="rc-mono text-[0.7rem] text-red-500">Something went wrong. Please try again or call us directly.</p>
                )}
                <button type="submit" disabled={status === 'sending'}
                  className="w-full rc-mono text-xs uppercase tracking-wider py-4 text-[var(--rc-ink)] font-medium transition-opacity disabled:opacity-50"
                  style={{ background: 'var(--rc-circuit)' }}>
                  {status === 'sending' ? 'Sending…' : 'Get my free quote →'}
                </button>
                <p className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.4)] text-center">
                  No spam · We respond within 24 hours · Based in Mohali, Punjab
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main Layout ──────────────────────────────────────────────────────────────
export default function ServicePageLayout({
  // config shape:
  // { eyebrow, h1, intro, stats[], guarantees[], faqs[], relatedLinks[] }
  // NOTE: this config intentionally does NOT accept a `schema` field
  // anymore — see the comment above the component for why. If a page using
  // this layout needs JSON-LD (FAQPage, Service, BreadcrumbList, etc.),
  // add it directly in that route's page.js instead, e.g.:
  //
  //   export default function Page() {
  //     return (
  //       <>
  //         <script type="application/ld+json"
  //           dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  //         <ServicePageLayout config={...}>...</ServicePageLayout>
  //       </>
  //     );
  //   }
  //
  // This matches the working pattern already used in app/about/page.js and
  // app/blogs/[slug]/page.js.
  config,
  children, // service-specific cards/feature sections
}) {
  const [openFaq, setOpenFaq] = useState(null);
  const {
    eyebrow = 'Service',
    h1,
    intro,
    stats = [],
    guarantees = [],
    faqs = [],
    relatedLinks = [],
    parentLabel = 'Services',
    parentPath = '/',
  } = config;

  return (
    <>
      {/* Marquee keyframe injected once */}
      <style>{`
        @keyframes rc-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <div className="min-h-screen" style={{ background: 'var(--rc-paper)' }}>

        {/* Breadcrumb */}
        <nav className="border-b border-[var(--rc-wire)] bg-white" aria-label="Breadcrumb">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-wrap items-center gap-1.5 rc-mono text-[0.65rem] text-[rgba(42,45,53,0.6)]">
            <Link href="/" className="hover:text-[var(--rc-circuit)] transition-colors">Home</Link>
            <span>/</span>
            <Link href={parentPath} className="hover:text-[var(--rc-circuit)] transition-colors">{parentLabel}</Link>
            <span>/</span>
            <span className="text-[var(--rc-ink-soft)]">{h1}</span>
          </div>
        </nav>

        {/* Hero */}
        <section
          className="relative overflow-hidden rc-grid-bg border-b border-[rgba(246,242,233,0.1)]"
          style={{ background: 'var(--rc-ink)' }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="rc-via rc-via-pulse" />
                  <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>
                    {eyebrow}
                  </span>
                </div>

                <h1 className="rc-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.05] text-[var(--rc-paper)]">
                  {h1}
                </h1>
                <p className="rc-body mt-5 text-base sm:text-lg text-[rgba(246,242,233,0.65)] leading-relaxed max-w-xl">
                  {intro}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#get-quote"
                    className="rc-mono text-xs uppercase tracking-wider px-6 py-3.5 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors"
                  >
                    Get a free quote
                  </a>
                  <Link
                    href="/contact"
                    className="rc-mono text-xs uppercase tracking-wider px-6 py-3.5 border border-[rgba(246,242,233,0.25)] text-[var(--rc-paper)] hover:border-[var(--rc-paper)] transition-colors"
                  >
                    Book a strategy call
                  </Link>
                </div>

                {/* Stats */}
                {stats.length > 0 && (
                  <div className="mt-9 flex flex-wrap gap-6">
                    {stats.map(({ value, suffix, label }) => (
                      <div key={label}>
                        <p className="rc-display text-3xl font-bold text-[var(--rc-paper)]">
                          <Counter target={value} suffix={suffix} />
                        </p>
                        <p className="rc-mono text-[0.6rem] uppercase tracking-wider text-[rgba(246,242,233,0.4)] mt-0.5">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-7 flex flex-wrap items-center gap-5 rc-mono text-[0.65rem] text-[rgba(246,242,233,0.4)]">
                  <span>✓ 50+ projects delivered</span>
                  <span>✓ Fixed pricing</span>
                  <span>✓ Mohali, Punjab</span>
                </div>
              </div>

              {/* Verification badges panel */}
              <div className="space-y-3">
                <p className="rc-eyebrow text-[rgba(246,242,233,0.3)] mb-3">Platform verifications</p>
                {VERIFICATION_BADGES.map((badge) => (
                  <a
                    key={badge.name}
                    href={badge.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 border border-[rgba(246,242,233,0.1)] hover:border-[rgba(255,90,31,0.4)] transition-colors group"
                  >
                    <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 bg-[rgba(246,242,233,0.05)] border border-[rgba(246,242,233,0.1)]">
                      {badge.logo ? (
                        <img
                          src={badge.logo}
                          alt={badge.name}
                          className="h-5 w-auto object-contain"
                        />
                      ) : (
                        <span className="rc-mono text-sm font-bold text-[rgba(246,242,233,0.6)]">
                          {badge.logoText || badge.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="rc-body text-xs font-semibold text-[var(--rc-paper)] group-hover:text-[var(--rc-circuit)] transition-colors">
                        {badge.name}
                      </p>
                      <p className="rc-mono text-[0.6rem] text-[rgba(246,242,233,0.4)]">{badge.desc}</p>
                    </div>
                    <span className="ml-auto rc-mono text-[0.6rem] text-[rgba(246,242,233,0.2)] group-hover:text-[var(--rc-circuit)] transition-colors">
                      ↗
                    </span>
                  </a>
                ))}

                {/* Crunchbase badge image if available */}
                <div className="mt-2 pt-3 border-t border-[rgba(246,242,233,0.1)] flex items-center gap-2">
                  <img
                    src="/crush verified.png"
                    alt="Crunchbase verified — RC Tech Solutions"
                    className="h-5 w-auto object-contain opacity-60"
                  />
                  <span className="rc-mono text-[0.6rem] text-[rgba(246,242,233,0.3)]">
                    Verified organization profile
                  </span>
                </div>
              </div>
            </div>
          </div>
          <CircuitTrace variant="horizontal" color="var(--rc-circuit)" />
        </section>

        {/* Partner logos marquee */}
        <Marquee items={PARTNER_LOGOS} />

        {/* Service-specific content (cards, features, tools, etc.) */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16">
          {children}
        </div>

        {/* Guarantees */}
        {guarantees.length > 0 && (
          <section className="border-t border-[var(--rc-wire)] bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
              <p className="rc-eyebrow text-[rgba(42,45,53,0.4)] mb-6">What we guarantee on every project</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
                {guarantees.map((g, i) => (
                  <div key={i} className="bg-white p-5">
                    <p className="rc-mono text-[0.6rem] mb-1.5" style={{ color: 'var(--rc-circuit)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <p className="rc-body text-sm font-semibold text-[var(--rc-ink)] mb-1">{g.title}</p>
                    <p className="rc-body text-xs text-[var(--rc-ink-soft)] leading-relaxed">{g.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Lead capture — inline form, not just a link to /contact */}
        <LeadForm serviceName={h1} />

        {/* FAQs */}
        {faqs.length > 0 && (
          <section className="border-b border-[var(--rc-wire)]" style={{ background: 'var(--rc-paper)' }}>
            <div className="mx-auto max-w-3xl px-4 py-14">
              <p className="rc-eyebrow text-center mb-8" style={{ color: 'var(--rc-circuit)' }}>
                Questions
              </p>
              <div className="divide-y divide-[var(--rc-wire)] border-y border-[var(--rc-wire)]">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-start justify-between gap-4 py-5 text-left"
                      aria-expanded={openFaq === i}
                    >
                      <span className="rc-body text-sm font-medium text-[var(--rc-ink)] leading-snug">
                        {faq.q}
                      </span>
                      <motion.span
                        animate={{ rotate: openFaq === i ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0 mt-0.5 rc-mono text-xl font-light leading-none"
                        style={{ color: 'var(--rc-circuit)' }}
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === i && (
                        <motion.div
                          key="c"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="rc-body text-sm text-[var(--rc-ink-soft)] leading-relaxed pb-5">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related internal links */}
        {relatedLinks.length > 0 && (
          <section className="border-b border-[var(--rc-wire)] bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
              <p className="rc-eyebrow text-[rgba(42,45,53,0.4)] mb-5">Explore related services</p>
              <div className="flex flex-wrap gap-3">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rc-mono text-[0.65rem] uppercase tracking-wider px-4 py-2.5 border border-[var(--rc-wire)] text-[var(--rc-ink-soft)] hover:border-[var(--rc-circuit)] hover:text-[var(--rc-circuit)] transition-colors"
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </div>
    </>
  );
}
