'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { RiPhoneLine, RiWhatsappLine, RiFlashlightLine } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';
import { createPortal } from 'react-dom';

// ─── Utility for Google Ads Tracking ──────────────────────────────────────────
const trackConversion = (type) => {
  if (typeof window !== 'undefined' && window.gtag) {
    if (type === 'whatsapp') {
      // Replace with your actual Google Ads WhatsApp conversion ID and label
      window.gtag('event', 'conversion', { 'send_to': 'AW-18337263682/whatsapp_label' });
    } else if (type === 'call') {
      // Replace with your actual Google Ads Phone Call conversion ID and label
      window.gtag('event', 'conversion', { 'send_to': 'AW-18337263682/call_label' });
    }
  }
};

const SERVICES_MENU = [
  {
    category: 'Build',
    items: [
      { label: 'Web Development', href: '/services/web-development', desc: 'Next.js, React, e-commerce' },
      { label: 'Mobile Apps', href: '/services/mobile-apps', desc: 'iOS, Android, React Native' },
      { label: 'E-commerce', href: '/services/web-development/ecommerce-development', desc: 'Shopify, WooCommerce, custom' },
      { label: 'Progressive Web Apps', href: '/services/web-development/progressive-web-apps', desc: 'Installable, offline-capable' },
      { label: 'Custom CMS', href: '/services/web-development/custom-cms-development', desc: 'Headless, Sanity, Firebase' },
    ],
  },
  {
    category: 'Grow',
    items: [
      { label: 'SEO Services', href: '/services/seo', desc: 'Technical, local, content' },
      { label: 'Digital Marketing', href: '/services/digital-marketing', desc: 'Google Ads, Meta, email' },
      { label: 'Technical SEO Audit', href: '/services/seo/technical-seo-audit', desc: 'Core Web Vitals, indexing' },
      { label: 'Google Ads', href: '/services/digital-marketing/google-ads-campaigns', desc: 'Search, Shopping, Display' },
      { label: 'Social Media', href: '/services/digital-marketing/social-media-management', desc: 'Instagram, LinkedIn, Facebook' },
    ],
  },
  {
    category: 'Scale',
    items: [
      { label: 'Digital Branding', href: '/services/digital-branding', desc: 'Identity, logo, guidelines' },
      { label: 'AI-Powered Solutions', href: '/services/ai-powered', desc: 'Chatbots, ML, automation' },
      { label: 'Cloud Integration', href: '/services/cloud-integration', desc: 'AWS, GCP, Azure Mumbai' },
      { label: 'DevOps & Cloud', href: '/services/devops-and-cloud', desc: 'CI/CD, Docker, Kubernetes' },
      { label: 'Keyword Research', href: '/services/seo/keyword-research-content-strategy', desc: 'Content strategy & planning' },
    ],
  },
];

const TOP_NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/webinars', label: 'Webinars' },
  { href: '/ebook', label: 'eBook' },
  { href: '/blogs', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
];

function MobileNav({ open, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{ position: 'fixed', inset: 0, zIndex: 9990, background: 'rgba(0,0,0,0.55)' }}
          />

          <motion.nav
            key="panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 340, damping: 34 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              width: 'min(340px, 90vw)',
              background: 'var(--rc-ink)',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
            }}
            aria-label="Mobile navigation"
          >
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '20px', borderBottom: '1px solid rgba(246,242,233,0.1)',
              flexShrink: 0,
            }}>
              <Link href="/" onClick={onClose}
                style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Image src="/rclogo.png" alt="RC Tech Solutions" width={28} height={28}
                  style={{ objectFit: 'contain' }} />
                <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: 16, fontWeight: 600, color: 'var(--rc-paper)' }}>
                  RC Tech<span style={{ color: 'var(--rc-circuit)' }}>.</span>
                </span>
              </Link>
              <button onClick={onClose} aria-label="Close menu"
                style={{ padding: 8, color: 'rgba(246,242,233,0.6)', background: 'none', border: 'none', cursor: 'pointer' }}>
                <FiX size={22} />
              </button>
            </div>

            <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
              {TOP_NAV.map((link, i) => (
                <motion.div key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.055 }}>
                  <Link href={link.href} onClick={onClose}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12, padding: '14px 0',
                      borderBottom: '1px solid rgba(246,242,233,0.08)',
                      fontFamily: 'var(--font-fraunces)', fontSize: 22, fontWeight: 600,
                      color: 'var(--rc-paper)', textDecoration: 'none',
                    }}>
                    <span style={{ fontFamily: 'var(--font-plex-mono)', fontSize: 10, color: 'var(--rc-circuit)', letterSpacing: 2 }}>
                      0{i + 1}
                    </span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
                <p style={{ fontFamily: 'var(--font-plex-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 3, color: 'rgba(246,242,233,0.28)', margin: '24px 0 10px' }}>
                  Services
                </p>
                {SERVICES_MENU.flatMap(g => g.items).slice(0, 9).map((item) => (
                  <Link key={item.href} href={item.href} onClick={onClose}
                    style={{
                      display: 'block', padding: '8px 0', fontSize: 14,
                      fontFamily: 'var(--font-plex-sans)',
                      color: 'rgba(246,242,233,0.65)', textDecoration: 'none',
                    }}>
                    → {item.label}
                  </Link>
                ))}
              </motion.div>
            </div>

            <div style={{ padding: 20, borderTop: '1px solid rgba(246,242,233,0.1)', flexShrink: 0 }}>
              <Link href="/contact" onClick={onClose}
                style={{
                  display: 'block', textAlign: 'center', padding: '14px',
                  background: 'var(--rc-circuit)', color: 'var(--rc-ink)',
                  fontFamily: 'var(--font-plex-mono)', fontSize: 11,
                  textTransform: 'uppercase', letterSpacing: 2, textDecoration: 'none',
                  fontWeight: 600,
                }}>
                Start a project →
              </Link>
              <p style={{ fontFamily: 'var(--font-plex-mono)', fontSize: 10, color: 'rgba(246,242,233,0.25)', textAlign: 'center', marginTop: 10 }}>
                +91 70096-46377 · Mohali, Punjab
              </p>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default function AdvancedHeader() {
  const [navOpen, setNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes urgentBlink {
          0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          50% { opacity: 0.85; transform: scale(1.04); box-shadow: 0 0 14px 6px rgba(37, 211, 102, 0.45); }
        }
        @keyframes callBlink {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .rc-btn-whatsapp {
          animation: urgentBlink 1.4s infinite ease-in-out;
        }
        .rc-btn-call {
          animation: callBlink 1.2s infinite ease-in-out;
        }
        .rc-btn-quote {
          animation: urgentBlink 1.6s infinite ease-in-out;
        }
      `}</style>

      {/* Increased header z-index to 998 so the services dropdown displays properly on top of page content */}
      <header className="sticky top-0 z-[998] w-full">
        {/* ── MAIN HEADER NAVBAR ── */}
        <div className={`w-full transition-all duration-300 relative z-20 ${
          scrolled
            ? 'border-b border-[var(--rc-wire)] bg-[rgba(246,242,233,0.96)] backdrop-blur-md shadow-sm'
            : 'border-b border-transparent bg-[var(--rc-paper)]'
        }`}>
          <div className="mx-auto max-w-7xl px-3 sm:px-6 flex items-center justify-between h-14 sm:h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="RC Tech Solutions home">
              <Image src="/rclogo.png" alt="RC Tech Solutions" width={30} height={30}
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain" priority />
              <span className="rc-display text-sm sm:text-base font-semibold text-[var(--rc-ink)] tracking-tight">
                RC Tech Solutions<span style={{ color: 'var(--rc-circuit)' }}>.</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6 rc-mono text-[0.7rem] uppercase tracking-wider text-[var(--rc-ink-soft)]">
              {TOP_NAV.map((link) => (
                <Link key={link.href} href={link.href}
                  className="relative group py-1 hover:text-[var(--rc-circuit)] transition-colors">
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                    style={{ background: 'var(--rc-circuit)' }} />
                </Link>
              ))}

              {/* Services megamenu */}
              <div ref={servicesRef} className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className="flex items-center gap-1 py-1 hover:text-[var(--rc-circuit)] transition-colors"
                >
                  <Link href="/services" onClick={(e) => e.stopPropagation()}
                    className="hover:text-[var(--rc-circuit)]">Services</Link>
                  <motion.span animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <FiChevronDown size={12} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.16 }}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] border border-[var(--rc-wire)] shadow-2xl z-50"
                      style={{ background: 'var(--rc-paper)' }}
                    >
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-l border-t border-[var(--rc-wire)]"
                        style={{ background: 'var(--rc-paper)' }} />
                      <div className="grid grid-cols-3 divide-x divide-[var(--rc-wire)] p-2">
                        {SERVICES_MENU.map((group) => (
                          <div key={group.category} className="p-3">
                            <p className="rc-eyebrow text-[rgba(42,45,53,0.4)] mb-3">{group.category}</p>
                            {group.items.map((item) => (
                              <Link key={item.href} href={item.href}
                                onClick={() => setServicesOpen(false)}
                                className="group/item flex flex-col px-3 py-2.5 hover:bg-white transition-colors rounded">
                                <span className="rc-body text-xs font-semibold text-[var(--rc-ink)] group-hover/item:text-[var(--rc-circuit)] transition-colors">
                                  {item.label}
                                </span>
                                <span className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.5)] mt-0.5">{item.desc}</span>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-[var(--rc-wire)] px-5 py-3 flex items-center justify-between"
                        style={{ background: 'var(--rc-paper-deep)' }}>
                        <span className="rc-mono text-[0.6rem] text-[rgba(42,45,53,0.5)]">
                          50+ projects delivered · Mohali, Punjab
                        </span>
                        
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Desktop CTA */}
            <Link href="/contact"
              className="hidden lg:inline-flex items-center gap-1.5 rc-mono text-[0.7rem] uppercase tracking-wider px-4 py-2 border border-[var(--rc-ink)] text-[var(--rc-ink)] hover:bg-[var(--rc-ink)] hover:text-[var(--rc-paper)] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--rc-circuit)', animation: 'rc-pulse 2.4s ease-in-out infinite' }} />
              Start a project
            </Link>

            {/* Mobile hamburger */}
            <button
              aria-label={navOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setNavOpen(!navOpen)}
              style={{
                padding: 6,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--rc-ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 38,
                minHeight: 38,
                flexShrink: 0,
              }}
              className="lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {navOpen
                  ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><FiX size={22} /></motion.span>
                  : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><FiMenu size={22} /></motion.span>
                }
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* ── CONVERSION BAR (Lower stacking context so dropdown appears over it) ── */}
        <div className="w-full bg-[var(--rc-ink)] text-white border-b border-[var(--rc-circuit)] shadow-md py-1.5 sm:py-2.5 px-2.5 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-1.5 sm:gap-4">
            <div className="flex items-center gap-1.5">
              <span className="rc-via rc-via-pulse w-1.5 h-1.5 sm:w-2 sm:h-2 flex-shrink-0" />
              <span className="rc-mono text-[0.65rem] sm:text-xs md:text-sm font-semibold tracking-tight sm:tracking-wide">
                Mohali’s #1 Web Agency — Fixed Price & 90+ PageSpeed Guaranteed
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3">
              <a
                href="tel:+917009646377"
                onClick={() => trackConversion('call')}
                className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white text-[var(--rc-ink)] rc-mono text-[0.65rem] sm:text-xs font-bold hover:bg-[var(--rc-paper)] transition-all transform hover:scale-105 shadow-md rc-btn-call"
              >
                <RiPhoneLine size={11} className="text-[var(--rc-trace)]" />
                <span className="hidden xs:inline">Call: </span><span>70096-46377</span>
              </a>
              <a
                href="https://wa.me/917009646377?text=Hello%20RC%20Tech%20Solutions"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('whatsapp')}
                className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#25D366] text-white rc-mono text-[0.65rem] sm:text-xs font-bold hover:bg-[#128C7E] transition-all transform hover:scale-105 shadow-md rc-btn-whatsapp"
              >
                <RiWhatsappLine size={12} />
                <span>WhatsApp</span>
              </a>
              
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={navOpen} onClose={() => setNavOpen(false)} />
    </>
  );
}
