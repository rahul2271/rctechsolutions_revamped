'use client';

import { useState } from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import CircuitTrace from './CircuitTrace';
import RecaptchaField, { useRecaptcha } from './Recaptcha';
import { verifyRecaptcha } from '../lib/verifyRecaptcha';

const SHEETDB_NEWSLETTER_ENDPOINT = 'https://sheetdb.io/api/v1/7tneevoxn7zax';

const EXPLORE_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/blogs', label: 'Journal' },
  { href: '/services/web-development', label: 'Web development' },
  { href: '/services/seo', label: 'SEO' },
  { href: '/services/digital-marketing', label: 'Digital marketing' },
];

const LEGAL_LINKS = [
  { href: '/privacy-policy', label: 'Privacy policy' },
  { href: '/terms-of-services', label: 'Terms of service' },
  { href: '/return-policy', label: 'Return policy' },
];

// FIX (Aug 2026 SEO pass): these local + global landing pages existed as
// routes but had zero internal links pointing to them from anywhere on the
// site — meaning Google would only find them via the sitemap, if at all.
// A footer link on every single page is the cheapest, highest-coverage way
// to get them crawled and to pass internal link equity to them.
const LOCATION_LINKS = [
  { href: '/web-development-company-in-mohali', label: 'Mohali' },
  { href: '/web-development-company-in-chandigarh', label: 'Chandigarh' },
  { href: '/web-development-company-in-panchkula', label: 'Panchkula' },
  { href: '/hire-web-developers-india', label: 'USA / UK / Canada clients' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const { ref: recaptchaRef, token: captchaToken, onChange: onCaptchaChange, reset: resetCaptcha } = useRecaptcha();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes('@') || email.length < 6) {
      setStatus('error');
      return;
    }
    if (!captchaToken) {
      setStatus('captcha');
      return;
    }
    setStatus('loading');

    const captchaOk = await verifyRecaptcha(captchaToken);
    if (!captchaOk) {
      setStatus('error');
      resetCaptcha();
      return;
    }

    try {
      const response = await fetch(SHEETDB_NEWSLETTER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: { email, source: 'footer-newsletter' } }),
      });

      if (response.ok) {
        setEmail('');
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <footer className="rc-ink-section" style={{ background: 'var(--rc-ink)' }}>
      <CircuitTrace variant="horizontal" color="var(--rc-circuit)" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-12 gap-12 pb-14">

          {/* Brand */}
          <div className="md:col-span-4">
            <span className="rc-display text-2xl font-semibold text-[var(--rc-paper)]">RC Tech Solutions
              <span style={{ color: 'var(--rc-circuit)' }}>.</span>
            </span>
            <p className="rc-body mt-4 text-sm leading-relaxed text-[rgba(246,242,233,0.6)] max-w-xs">
              3126, Sector 82, JLPL Industrial Area,<br />
              Mohali, Punjab 140306, India
            </p>
            <div className="mt-4 space-y-1 rc-mono text-xs text-[rgba(246,242,233,0.5)]">
              <p>+91 70096-46377</p>
              <p>business@rctechsolutions.com</p>
            </div>
            <p className="rc-mono mt-4 text-[0.68rem] text-[rgba(246,242,233,0.55)]">
              🌍 Serving India · USA · UK · Canada · Australia — remote-first, timezone-friendly
            </p>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <h4 className="rc-eyebrow text-[var(--rc-circuit)] mb-4">Explore</h4>
            <ul className="space-y-2.5 rc-body text-sm text-[rgba(246,242,233,0.7)]">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[var(--rc-paper)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="rc-eyebrow text-[var(--rc-circuit)] mb-4">The journal, weekly</h4>
            <p className="rc-body text-sm text-[rgba(246,242,233,0.6)] mb-4 leading-relaxed">
              Web dev, SEO, and growth notes — no fluff, unsubscribe anytime.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rc-body w-full px-3 py-2.5 text-sm bg-transparent border border-[rgba(246,242,233,0.25)] text-[var(--rc-paper)] placeholder-rc-paper/40 focus:outline-none focus:border-[var(--rc-circuit)] transition-colors"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="rc-mono text-xs uppercase tracking-wider px-4 py-2.5 bg-[var(--rc-circuit)] text-[var(--rc-ink)] hover:bg-[var(--rc-paper)] transition-colors whitespace-nowrap"
              >
                {status === 'loading' ? '…' : 'Join'}
              </button>
              </div>
              <RecaptchaField recaptchaRef={recaptchaRef} onChange={onCaptchaChange} className="justify-start" size="compact" />
              {status === 'captcha' && <p className="rc-mono text-[0.65rem] text-red-400">Please verify you're human.</p>}
            </form>
            {status === 'success' && <p className="rc-mono text-xs mt-2.5" style={{ color: 'var(--rc-trace-bright)' }}>Subscribed. Welcome aboard.</p>}
            {status === 'error' && <p className="rc-mono text-xs mt-2.5 text-red-400">That didn't go through — check the address.</p>}
          </div>

          {/* Connect + legal */}
          <div className="md:col-span-2">
            <h4 className="rc-eyebrow text-[var(--rc-circuit)] mb-4">Connect</h4>
            <div className="flex gap-4 mb-6 text-[rgba(246,242,233,0.6)]">
              <a href="https://www.facebook.com/rchauhanweb" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[var(--rc-paper)] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.linkedin.com/in/er-rahul-chauhan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[var(--rc-paper)] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/rc_tech_solutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[var(--rc-paper)] transition-colors">
                <Instagram size={18} />
              </a>
            </div>
            <ul className="space-y-2 rc-body text-xs text-[rgba(246,242,233,0.5)]">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[rgba(246,242,233,0.8)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Locations strip — see LOCATION_LINKS comment above for why this exists */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 border-t border-[rgba(246,242,233,0.1)] pt-6 pb-6 rc-mono text-[0.65rem] text-[rgba(246,242,233,0.45)]">
          <span className="uppercase tracking-wider mr-1">Serving:</span>
          {LOCATION_LINKS.map((link, i) => (
            <span key={link.href} className="flex items-center gap-2">
              <Link href={link.href} className="hover:text-[var(--rc-circuit)] transition-colors">
                {link.label}
              </Link>
              {i < LOCATION_LINKS.length - 1 && <span className="opacity-30">·</span>}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 border-t border-[rgba(246,242,233,0.1)] pt-6">
          <a
            href="https://www.crunchbase.com/organization/rc-tech-solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <img src="/crush verified.png" alt="RC Tech Solutions — verified on Crunchbase" className="h-5 w-auto" />
          </a>
          <p className="rc-mono text-xs text-[rgba(246,242,233,0.4)]">
            © {new Date().getFullYear()} RC Tech Solutions · Built in Mohali
          </p>
        </div>
      </div>
    </footer>
  );
}
