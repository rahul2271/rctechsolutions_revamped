'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Added useRouter import
import ReCAPTCHA from 'react-google-recaptcha';
import { verifyRecaptcha } from '../../lib/verifyRecaptcha';
import {
  RiCodeSSlashLine, RiPaintBrushLine, RiDatabase2Line,
  RiShoppingCartLine, RiSettings3Line, RiSmartphoneLine,
  RiLayoutGridLine, RiAppsLine, RiToolsLine,
  RiCheckLine, RiArrowRightLine, RiTimeLine,
  RiShieldLine, RiBarChartLine, RiGlobalLine,
  RiTruckLine, RiHeartPulseLine, RiBuilding4Line, RiGraduationCapLine,
  RiPlaneLine, RiRestaurantLine, RiMoneyDollarCircleLine, RiCalendarEventLine,
  RiScissorsLine, RiBankLine, RiOilLine, RiCpuLine, RiShieldCheckLine,
  RiChargingPileLine, RiFilmLine, RiCarLine, RiPlantLine, RiShareLine,
  RiCloudLine, RiTrophyLine, RiPulseLine, RiArrowLeftSLine, RiArrowRightSLine,
  RiCloseLine, RiPhoneLine, RiMailSendLine, RiWhatsappLine, RiFlashlightLine,
  RiStarFill, RiFireLine, RiExternalLinkLine, RiGoogleFill
} from 'react-icons/ri';

// ─── Utility for Google Ads Tracking ──────────────────────────────────────────
const trackConversion = (type) => {
  if (typeof window !== 'undefined' && window.gtag) {
    if (type === 'call') {
      window.gtag('event', 'conversion', { 'send_to': 'AW-18337263682/IDSZCMXRlOMcEMLg8adE' });
    } else if (type === 'form') {
      window.gtag('event', 'conversion', { 'send_to': 'AW-18337263682/Yp7KCMrs7eIcEMLg8adE' });
    }
  }
};

// ─── React Portal Wrapper for Modals ─────────────────────────────────────────
function ModalPortal({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

// ─── Inline lead form (Optimized for Less Friction) ───────────────────────
function LeadForm({ heading, sub, defaultService = 'Web Development' }) {
  const router = useRouter(); // Initialize router for redirection

  const [d, setD] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: ''
  });
  
  const [status, setStatus] = useState('idle');
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const h = (k) => (e) => setD(p => ({ ...p, [k]: e.target.value }));

  const getWhatsAppUrl = () => {
    return `https://wa.me/917009646377?text=Hello%20RC%20Tech%20Solutions`;
  };

  const submit = async (e) => {
    e.preventDefault();
    
    if (!captchaToken) {
      alert("Please check the reCAPTCHA box to verify you are human.");
      return;
    }

    setStatus('sending');

    const captchaOk = await verifyRecaptcha(captchaToken);
    if (!captchaOk) {
      alert("reCAPTCHA verification failed. Please try again.");
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
      setStatus('idle');
      return;
    }

    trackConversion('form');
    
    try {
      const formFillTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

      const res = await fetch('https://sheetdb.io/api/v1/7tneevoxn7zax', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          data: [{ 
            ...d, 
            service: defaultService, 
            source: typeof window !== 'undefined' ? window.location.pathname : '',
            submittedAt: formFillTime 
          }] 
        }),
      });
      
      if (res.ok) {
        setStatus('done');
        router.push('/thank-you'); // Redirects to the thank you page for tracking
      } else {
        setStatus('error');
      }
      
    } catch { 
      setStatus('error'); 
    }
  };

  // Redirecting state instead of WhatsApp UI
  if (status === 'done') return (
    <div className="text-center py-8">
      <div className="w-8 h-8 rounded-full border-4 border-t-[var(--rc-trace)] border-r-[var(--rc-trace)] border-b-[var(--rc-trace)] border-l-transparent animate-spin mx-auto mb-4"></div>
      <p className="rc-display text-lg font-semibold text-[var(--rc-ink)] mb-1">Success!</p>
      <p className="rc-body text-xs text-[var(--rc-ink-soft)] leading-relaxed">
        Redirecting you securely...
      </p>
    </div>
  );

  return (
    <div>
      {heading && <h3 className="rc-display text-lg sm:text-xl font-bold text-[var(--rc-ink)] mb-1">{heading}</h3>}
      {sub && <p className="rc-body text-[0.8rem] sm:text-sm text-[var(--rc-ink-soft)] mb-4 leading-relaxed">{sub}</p>}
      <form onSubmit={submit} className="space-y-3">
        <div className="grid sm:grid-cols-2 gap-3">
          <input type="text" value={d.name} onChange={h('name')} placeholder="Your name *" required
            className="w-full border border-[var(--rc-wire)] px-3 py-2.5 rc-body text-xs sm:text-sm text-[var(--rc-ink)] bg-white focus:outline-none focus:border-[var(--rc-circuit)] transition-colors rounded-md" />
          <input type="tel" value={d.phone} onChange={h('phone')} placeholder="WhatsApp number *" required
            className="w-full border border-[var(--rc-wire)] px-3 py-2.5 rc-body text-xs sm:text-sm text-[var(--rc-ink)] bg-white focus:outline-none focus:border-[var(--rc-circuit)] transition-colors rounded-md" />
        </div>
        
        {/* Made Email and Message Optional to reduce bounce rate */}
        <input type="email" value={d.email} onChange={h('email')} placeholder="Email (Optional)" 
          className="w-full border border-[var(--rc-wire)] px-3 py-2.5 rc-body text-xs sm:text-sm text-[var(--rc-ink)] bg-white focus:outline-none focus:border-[var(--rc-circuit)] transition-colors rounded-md" />
        
        <textarea value={d.message} onChange={h('message')} rows={2}
          placeholder={`Project details (Optional)`}
          className="w-full border border-[var(--rc-wire)] px-3 py-2.5 rc-body text-xs sm:text-sm text-[var(--rc-ink)] bg-white focus:outline-none focus:border-[var(--rc-circuit)] transition-colors resize-none rounded-md mt-1" />
        
        <div className="mt-2 flex justify-center w-full overflow-hidden">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeZlYMtAAAAAHwInLlu_0oT0T69132GMd97LeUU"}
            onChange={(token) => setCaptchaToken(token)}
            onExpired={() => setCaptchaToken(null)}
          />
        </div>

        {status === 'error' && <p className="rc-mono text-[0.7rem] text-red-500">Something went wrong. Please try again or call us directly.</p>}
        
        <button 
          type="submit" 
          disabled={status === 'sending'}
          className="w-full rc-mono text-[0.75rem] sm:text-xs uppercase tracking-wider py-3.5 text-white font-extrabold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg rounded-lg relative overflow-hidden group rc-cta-pulse md:cursor-pointer flex items-center justify-center gap-2 mt-2"
          style={{ background: '#2D5F4C' }}
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <RiFlashlightLine size={16} className="text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
          <span>{status === 'sending' ? 'Securing Quote…' : 'CLAIM MY FREE QUOTE IN 24H →'}</span>
        </button>

        <p className="rc-mono text-[0.65rem] sm:text-[0.7rem] text-[rgba(42,45,53,0.5)] text-center pb-1">
          No spam · Transparent quotes · Based in Mohali, Punjab
        </p>

        <div className="pt-2 sm:pt-3 border-t border-[var(--rc-wire)] grid grid-cols-2 gap-2">
          <a
            href="tel:+917009646377"
            onClick={() => trackConversion('call')}
            className="rc-mono text-[0.7rem] sm:text-xs font-semibold py-2.5 px-2 border border-[var(--rc-wire)] bg-white text-[var(--rc-ink)] hover:border-[var(--rc-circuit)] hover:bg-[var(--rc-paper)] transition-all flex items-center justify-center gap-1 shadow-sm rounded-md"
          >
            <RiPhoneLine size={14} className="text-[var(--rc-trace)]" />
            <span>Call 70096-46377</span>
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion('whatsapp')}
            className="rc-mono text-[0.7rem] sm:text-xs font-semibold py-2.5 px-2 border border-[#25D366]/30 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 transition-all flex items-center justify-center gap-1 shadow-sm rounded-md"
          >
            <RiWhatsappLine size={15} className="text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </form>
    </div>
  );
}

// ─── Auto Popup Lead Modal ──────────────────────────────────────────────────
function AutoLeadModal({ onClose }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div 
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 99999, backgroundColor: 'rgba(0,0,0,0.65)' }} 
      className="flex items-center justify-center p-2 sm:p-5 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        className="bg-white rounded-2xl w-full max-w-md p-4 sm:p-6 relative border-[3px] border-[var(--rc-trace)] shadow-2xl overflow-y-auto max-h-[95vh]"
      >
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[var(--rc-paper)] flex items-center justify-center text-[var(--rc-ink)] hover:bg-[var(--rc-wire)] transition-colors z-20 shadow-sm"
          aria-label="Close modal"
        >
          <RiCloseLine size={20} />
        </button>

        <div className="flex items-center gap-2 mb-3 mt-1">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          <span className="rc-mono text-[0.65rem] sm:text-[0.7rem] uppercase tracking-wider text-[var(--rc-circuit)] font-bold">Limited Time Opportunity</span>
        </div>

        <div className="pt-0">
          <LeadForm 
            heading="Let's Build Something Great." 
            sub="Drop your details below for a fast, free quote. Our expert team will respond within 24 hours." 
            defaultService="General Web Development (Auto Lead)" 
          />
        </div>
      </motion.div>
    </div>,
    document.body
  );
}

// ─── Industry Popup Modal Component ───────────────────────────────────────────
function IndustryModal({ industry, onClose }) {
  const [mounted, setMounted] = useState(false);
  const Icon = industry?.icon;
  
  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!mounted || !industry) return null;

  return createPortal(
    <div 
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 99999, backgroundColor: 'rgba(0,0,0,0.65)' }} 
      className="flex items-center justify-center p-2 sm:p-5 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl w-full max-w-xl p-4 sm:p-6 relative border-2 border-[var(--rc-trace)] shadow-2xl overflow-y-auto max-h-[95vh]"
      >
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[var(--rc-paper)] flex items-center justify-center text-[var(--rc-ink)] hover:bg-[var(--rc-wire)] transition-colors z-20 shadow-sm"
          aria-label="Close modal"
        >
          <RiCloseLine size={20} />
        </button>

        <div className="flex items-start gap-3 mb-4 pr-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl flex items-center justify-center shadow-inner mt-0.5" style={{ background: 'rgba(45,95,76,0.1)' }}>
            <Icon size={24} style={{ color: 'var(--rc-trace)' }} />
          </div>
          <div>
            <span className="rc-mono text-[0.6rem] sm:text-[0.65rem] uppercase tracking-wider text-[var(--rc-circuit)] font-semibold block mb-0.5">Industry Solution</span>
            <h3 className="rc-display text-xl sm:text-2xl font-bold text-[var(--rc-ink)] leading-tight">{industry.title}</h3>
          </div>
        </div>

        <p className="rc-body text-xs sm:text-sm text-[var(--rc-ink-soft)] leading-relaxed mb-4">
          {industry.desc} We build custom, high-performance web platforms specifically engineered for {industry.title.toLowerCase()} businesses.
        </p>

        <div className="bg-[var(--rc-paper)] p-3 sm:p-4 rounded-xl border border-[var(--rc-wire)] mb-4">
          <h4 className="rc-mono text-[0.7rem] uppercase tracking-wider text-[var(--rc-ink)] font-bold mb-2">What we include:</h4>
          <ul className="grid sm:grid-cols-2 gap-2">
            {['Custom UI/UX Design', 'Advanced Database', 'Secure Payment APIs', 'SEO & Mobile Ready'].map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2 rc-body text-xs text-[var(--rc-ink-soft)] leading-snug">
                <span className="text-[var(--rc-trace)] flex-shrink-0"><RiCheckLine size={14} /></span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-3 border-t border-[var(--rc-wire)]">
          <LeadForm heading={`Request a Proposal for ${industry.title}`} sub="" defaultService={`${industry.title} Web Solution`} />
        </div>
      </motion.div>
    </div>,
    document.body
  );
}

// ─── Case Study Details Popup Modal Component ───────────────────────────────────
function CaseStudyModal({ caseStudy, onClose }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!mounted || !caseStudy) return null;

  return createPortal(
    <div 
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 99999, backgroundColor: 'rgba(0,0,0,0.65)' }} 
      className="flex items-center justify-center p-2 sm:p-5 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl w-full max-w-2xl p-4 sm:p-6 relative border-2 border-[var(--rc-trace)] shadow-2xl overflow-y-auto max-h-[95vh]"
      >
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[var(--rc-paper)] flex items-center justify-center text-[var(--rc-ink)] hover:bg-[var(--rc-wire)] transition-colors z-20 shadow-sm"
          aria-label="Close modal"
        >
          <RiCloseLine size={20} />
        </button>

        <div className="pr-8">
          <div className="flex flex-wrap gap-1.5 mb-2 mt-1">
            <span className="rc-mono text-[0.6rem] font-semibold px-2 py-0.5 rounded bg-[var(--rc-paper)] text-[var(--rc-ink)] border border-[var(--rc-wire)]">{caseStudy.industry}</span>
            <span className="rc-mono text-[0.6rem] font-semibold px-2 py-0.5 rounded bg-[var(--rc-circuit)]/10 text-[var(--rc-circuit)]">{caseStudy.tag}</span>
          </div>
          <h3 className="rc-display text-xl sm:text-2xl font-bold text-[var(--rc-ink)] leading-tight mb-1">{caseStudy.result}</h3>
        </div>

        <p className="rc-mono text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider text-[var(--rc-trace)] mb-3 flex items-start gap-1">
          <RiFlashlightLine size={14} className="flex-shrink-0 mt-0.5" />
          <span className="leading-snug">{caseStudy.highlight}</span>
        </p>

        <div className="relative h-40 sm:h-56 w-full rounded-xl overflow-hidden mb-4 bg-[var(--rc-paper-deep)] border border-[var(--rc-wire)]">
          <Image src={caseStudy.image} alt={caseStudy.result} fill className="object-cover" sizes="(max-width:768px) 100vw, 600px" />
        </div>

        <h4 className="rc-mono text-[0.7rem] uppercase tracking-wider text-[var(--rc-ink)] font-bold mb-1">Project Story & Challenge:</h4>
        <p className="rc-body text-xs sm:text-sm text-[var(--rc-ink-soft)] leading-relaxed mb-4">
          {caseStudy.desc} We engineered a robust, lightning-fast architecture using Next.js to achieve record-breaking metrics.
        </p>

        <div className="grid grid-cols-3 gap-2 p-3 bg-[var(--rc-paper)] rounded-xl border border-[var(--rc-wire)] mb-4">
          {caseStudy.metrics.map(m => (
            <div key={m.l} className="text-center flex flex-col justify-center">
              <p className="rc-display text-lg sm:text-xl font-extrabold text-[var(--rc-ink)]">{m.v}</p>
              <p className="rc-mono text-[0.55rem] sm:text-[0.6rem] text-[var(--rc-ink-soft)] uppercase tracking-wider mt-0.5 leading-tight">{m.l}</p>
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-[var(--rc-wire)]">
          <LeadForm heading="Get Similar Results" sub="" defaultService={`${caseStudy.industry} Case Study`} />
        </div>
      </motion.div>
    </div>,
    document.body
  );
}

// ─── Testimonials Data ──────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { name: "Dr. Vikram Sharma", role: "Founder, Vaidya ERP & Health Clinics", rating: 5, text: "RC Tech Solutions built our entire clinic management software and hospital dashboard from scratch. Their expertise in Next.js and secure databases is unmatched in Mohali and Chandigarh. 100% recommended!", location: "Chandigarh", verified: true },
  { name: "Simranpreet Kaur", role: "Director, Luxury D2C Skincare Brand", rating: 5, text: "Our e-commerce store speed jumped from 4 seconds to under 1 second after Rahul and his team rebuilt it. Organic traffic doubled within 3 months with zero ad spend. Absolutely blown away!", location: "Mohali", verified: true },
  { name: "Advocate Rajesh Malhotra", role: "Managing Partner, Malhotra & Associates", rating: 5, text: "Before hiring RC Tech Solutions, we were paying an agency that disappeared. These guys delivered our legal practice website ahead of schedule with transparent pricing and stellar communication.", location: "Ludhiana", verified: true },
  { name: "Ankit Aggarwal", role: "CTO, LogiMove Freight Solutions", rating: 4.8, text: "Exceptional frontend architecture and API integration work. They handled complex logistics tracking dashboards cleanly and professionally. Will continue working with them for phase 2.", location: "Delhi NCR", verified: true },
  { name: "Pooja Deshmukh", role: "Owner, Studio Bloom Salons", rating: 5, text: "Transparent quotes, no hidden surprises, and incredible mobile responsiveness. Our booking conversion rate increased by 3x right after launch.", location: "Mohali", verified: true },
  { name: "Gurpreet Singh", role: "CEO, Punjab Agro Exports", rating: 4.5, text: "Very reliable web development agency based right here in Punjab. Honest advice, transparent milestones, and superb PageSpeed scores.", location: "Amritsar", verified: true }
];

const HERO_SLIDES = [
  { eyebrow: "Best Website Designing Company in Mohali", headlineLine1: "Professional", headlineGreen: "Website Designing", headlineLine2: "& Web Development", headlineLine3: "Company in Mohali", description: "Custom, fast, mobile-friendly, SEO-optimized websites that drive results. Trusted by 3450+ businesses. 700+ websites delivered. 13+ years of proven expertise.", tags: ["Google Certified", "4.8 Rating (530+ Reviews)", "ISO Registered", "3450+ Happy Clients"], stats: [{ value: "700+", label: "Websites Delivered" }, { value: "13+", label: "Years Experience" }] },
  { eyebrow: "Top Rated Web Development Agency", headlineLine1: "High-Performance", headlineGreen: "Website", headlineLine2: "Development with", headlineOrange: "SEO Optimization Services", description: "PageSpeed 95+ scores, 100% mobile responsive, Google-ranked websites. Better speed = higher conversions. Launch your online presence rapidly.", tags: ["ISO Certified", "530+ Google Reviews", "Fast Hosting Included", "Lifetime Support"], stats: [{ value: "95+", label: "PageSpeed Score" }, { value: "100%", label: "Mobile Responsive" }] },
  { eyebrow: "E-commerce Website Experts", headlineLine1: "E-commerce", headlineGreen: "Website", headlineLine2: "Development with", headlineOrange: "Payment Integration", description: "Complete e-commerce solutions with Shopify, WooCommerce, and custom builds. Payment gateways, inventory management, and admin panels included.", tags: ["Shopify Certified Partner", "PCI Compliant", "Multi-Currency Support"], stats: [{ value: "200+", label: "E-commerce Stores" }, { value: "7-10", label: "Days Launch" }] },
  { eyebrow: "Landing Page Specialists", headlineLine1: "High-Converting", headlineGreen: "Landing Pages", headlineLine2: "for", headlineOrange: "Lead Generation", description: "Conversion-optimized landing pages with A/B testing, lead forms, and analytics. Average 3x ROI increase. Perfect for Google Ads and Facebook campaigns.", tags: ["Google Ads Certified", "CRO Expert", "Real-Time Analytics"], stats: [{ value: "3x", label: "Average ROI" }, { value: "500+", label: "Campaigns Managed" }] },
  { eyebrow: "Custom Web Applications", headlineLine1: "Custom", headlineGreen: "Web", headlineGreen2: "Applications", headlineLine2: "built with", headlineOrange: "Modern Tech Stack", description: "SaaS platforms, dashboards, and enterprise applications. React, Node.js, databases. Scalable, secure, and production-ready code.", tags: ["React & Node.js Certified", "Cloud-Ready", "Enterprise Grade"], stats: [{ value: "150+", label: "Applications Built" }, { value: "4.5+", label: "Avg Client Rating" }] }
];

// All pricing removed to encourage quote requests
const SERVICES = [
  { title: 'Business Website', icon: RiPaintBrushLine, time: '2–3 weeks', desc: 'Brand-aligned, mobile-first business sites on Next.js. 90+ PageSpeed guaranteed. Every page indexed.', slug: null },
  { title: 'Web Application', icon: RiAppsLine, time: '4–8 weeks', desc: 'Custom dashboards, SaaS products, and web apps with authentication, real-time data, and multi-role access.', slug: null },
  { title: 'E-commerce Store', icon: RiShoppingCartLine, time: '4–8 weeks', desc: 'Shopify or custom storefronts with Razorpay + UPI + COD, GST-compliant invoicing, and abandoned cart flows.', slug: 'ecommerce-development' },
  { title: 'Web Portal', icon: RiLayoutGridLine, time: '6–10 weeks', desc: 'Multi-role portals — vendor dashboards, student/teacher portals, booking systems, and admin panels.', slug: null },
  { title: 'Progressive Web App', icon: RiSmartphoneLine, time: '4–6 weeks', desc: 'Installable, offline-capable apps that work like native mobile apps without App Store fees.', slug: 'progressive-web-apps' },
  { title: 'Custom CMS', icon: RiSettings3Line, time: '3–5 weeks', desc: 'Headless CMS with Sanity, Firebase, or Strapi — built around how your team actually publishes content.', slug: 'custom-cms-development' },
  { title: 'Front-end Development', icon: RiCodeSSlashLine, time: '2–4 weeks', desc: 'React / Next.js front-ends with Framer Motion animations, accessible markup, and Lighthouse 90+ scores.', slug: null },
  { title: 'Back-end & API', icon: RiDatabase2Line, time: '3–6 weeks', desc: 'Node.js, Firebase, and REST API backends built for scale. Authentication, payments, and integrations.', slug: null },
  { title: 'Maintenance Plan', icon: RiToolsLine, time: 'Ongoing', desc: 'Monthly security patches, performance audits, content updates, and 48-hour response time for bugs.', slug: null },
];

const PROBLEMS = [
  { problem: 'Your current site loads in 5+ seconds on mobile', fix: 'We rebuild on Next.js with static generation, WebP images, and Mumbai CDN. Our clients average 1.3s LCP after rebuild.' },
  { problem: 'Google can\'t find your pages', fix: 'We set up Search Console, submit a proper sitemap, add JSON-LD schema, and verify every page is indexed within 14 days.' },
  { problem: 'You paid a premium for a WordPress site that looks like a template', fix: 'We build from scratch, on brand, on Next.js. No Elementor, no Divi, no 40-plugin WordPress installs.' },
  { problem: 'Your site looks bad on mobile', fix: 'Mobile-first development. Every component is tested on real Android and iOS devices before delivery, not just browser DevTools.' },
  { problem: 'You don\'t know what\'s actually happening on your site', fix: 'We set up GA4, Google Search Console, and heatmap tracking so you see exactly what users do — and what they don\'t.' },
  { problem: 'The last agency disappeared after taking payment', fix: 'Transparent weekly progress updates, a shared staging URL from day 5, and 30 days of post-launch support. All in writing before we start.' },
];

const INDUSTRIES = [
  { title: 'On Demand Solutions', icon: RiToolsLine, desc: 'Instant service platforms, booking management, and live dispatch apps.', image: '/images/service-web.svg' },
  { title: 'E-Commerce', icon: RiShoppingCartLine, desc: 'High-converting online storefronts with integrated payment gateways.', image: '/images/service-web.svg' },
  { title: 'Dating & Matrimonial', icon: RiHeartPulseLine, desc: 'Secure matchmaking platforms with advanced profile matching algorithms.', image: '/images/service-web.svg' },
  { title: 'Real Estate & Property', icon: RiBuilding4Line, desc: 'Property listing portals, virtual tours, and CRM integrations.', image: '/images/service-web.svg' },
  { title: 'Travel & Tourism', icon: RiPlaneLine, desc: 'Flight booking engines, tour packages, and itinerary planners.', image: '/images/service-web.svg' },
  { title: 'Restaurant', icon: RiRestaurantLine, desc: 'Online food ordering systems, table reservations, and POS sync.', image: '/images/service-web.svg' },
  { title: 'Healthcare', icon: RiHeartPulseLine, desc: 'Telehealth apps, patient management systems, and clinic software.', image: '/images/service-web.svg' },
  { title: 'Finance', icon: RiMoneyDollarCircleLine, desc: 'Fintech portals, secure payment solutions, and investment trackers.', image: '/images/service-web.svg' },
  { title: 'Education', icon: RiGraduationCapLine, desc: 'LMS platforms, student examination portals, and online tutoring.', image: '/images/service-web.svg' },
  { title: 'Events', icon: RiCalendarEventLine, desc: 'Event ticketing platforms, schedule managers, and attendee portals.', image: '/images/service-web.svg' },
  { title: 'Personal Care & Beauty', icon: RiScissorsLine, desc: 'Salon booking systems, appointment management, and product sales.', image: '/images/service-web.svg' },
  { title: 'Banking', icon: RiBankLine, desc: 'Secure banking dashboards, account management, and transaction flows.', image: '/images/service-web.svg' },
  { title: 'Oil and Gas', icon: RiOilLine, desc: 'Industrial asset tracking, monitoring dashboards, and logistics control.', image: '/images/service-web.svg' },
  { title: 'Manufacturing', icon: RiCpuLine, desc: 'ERP systems, supply chain dashboards, and resource planning.', image: '/images/service-web.svg' },
  { title: 'Logistics and Transportation', icon: RiTruckLine, desc: 'Fleet management, live shipment tracking, and route optimization.', image: '/images/service-web.svg' },
  { title: 'Insurance', icon: RiShieldCheckLine, desc: 'Policy management portals, claim processing apps, and quotation calculators.', image: '/images/service-web.svg' },
  { title: 'EV', icon: RiChargingPileLine, desc: 'Charging station locators, battery telemetry, and booking systems.', image: '/images/service-web.svg' },
  { title: 'Entertainment & Media', icon: RiFilmLine, desc: 'Video streaming platforms, content publishing portals, and fan apps.', image: '/images/service-web.svg' },
  { title: 'Aviation', icon: RiPlaneLine, desc: 'Flight operations software, booking systems, and crew management.', image: '/images/service-web.svg' },
  { title: 'Automotive', icon: RiCarLine, desc: 'Car dealership portals, service booking tools, and parts catalogs.', image: '/images/service-web.svg' },
  { title: 'Agriculture', icon: RiPlantLine, desc: 'Smart farming IoT dashboards, crop monitoring, and supply apps.', image: '/images/service-web.svg' },
  { title: 'Social Media', icon: RiShareLine, desc: 'Community networks, content sharing feeds, and user profiles.', image: '/images/service-web.svg' },
  { title: 'SAAS', icon: RiCloudLine, desc: 'Scalable multi-tenant cloud software platforms and dashboards.', image: '/images/service-web.svg' },
  { title: 'Sports', icon: RiTrophyLine, desc: 'Tournament management, score tracking apps, and fan communities.', image: '/images/service-web.svg' },
  { title: 'Fitness & Wellness', icon: RiPulseLine, desc: 'Workout planners, gym membership portals, and health trackers.', image: '/images/service-web.svg' }
];

const PROCESS = [
  { n: '01', title: 'Discovery call (30 min, free)', desc: 'We ask about your goals, users, timeline, and budget. You ask us anything. We\'ll tell you honestly whether we\'re the right fit.' },
  { n: '02', title: 'Written proposal in 48 hours', desc: 'A transparent quote, a detailed scope, and a project timeline with weekly milestones. Clear and honest estimates.' },
  { n: '03', title: 'Design + dev sprints with weekly updates', desc: 'Work in 1-week sprints. Every Friday you get a progress update. From week 2, there\'s a live staging URL you can visit any time.' },
  { n: '04', title: 'Pre-launch 47-point audit', desc: 'PageSpeed 90+ verified, all pages indexed, forms tested, redirects confirmed, security headers checked. Only then do we go live.' },
  { n: '05', title: 'Launch day — you\'re present', desc: 'We do launches live, with you on a call. We go through the checklist together and push the deployment in front of you.' },
  { n: '06', title: '30-day post-launch support included', desc: 'Bug fixes and minor changes at no extra cost for 30 days. 24-hour response time. Documentation so any developer can take over.' },
];

const CASE_STUDIES = [
  { tag: 'Website Rebuild', industry: 'Legal Services', result: '7.3s → 1.2s load time', highlight: '+34% organic leads & 3x higher conversion', desc: 'Chandigarh law firm: WordPress → Next.js. PageSpeed 31 → 91. Contact form leads went from 0–1/week to 3–4/week in 90 days — high ROI conversion funnel.', image: '/law-firm-redesign.png', metrics: [{ v: '1.2s', l: 'Mobile LCP' }, { v: '91', l: 'PageSpeed' }, { v: '+34%', l: 'Leads' }] },
  { tag: 'Full Build + SEO', industry: 'D2C Skincare & Retail', result: '0 → 12,000 monthly visitors', highlight: '₹0 ongoing ad spend with custom e-commerce', desc: 'Built from scratch on Next.js with keyword-targeted content and lightning-fast checkout flow. Organic traffic surpassed paid Instagram by month 6.', image: '/d2c-skincare-ecommerce.png', metrics: [{ v: '12K', l: 'Monthly visitors' }, { v: '6mo', l: 'To page 1' }, { v: '₹0', l: 'Ad spend' }] },
  { tag: 'Clinic ERP & SaaS', industry: 'Healthcare & Medical', result: '100% Patient Workflow Automation', highlight: 'Zero downtime scheduling & automated WhatsApp reminders', desc: 'Vaidya ERP platform launch: Custom multi-branch clinic management system built with real-time analytics and secure patient record handling.', image: '/vaidya-erp-dashoard.png', metrics: [{ v: '100%', l: 'Automated' }, { v: '0s', l: 'Downtime' }, { v: '5x', l: 'Faster Bookings' }] }
];

const TECH = [
  { name: 'Next.js 15', tag: 'Framework', desc: 'Server-side rendering, static generation, ISR — all in one.' },
  { name: 'React 18', tag: 'UI library', desc: 'Concurrent rendering for smooth interactions at any scale.' },
  { name: 'TypeScript', tag: 'Language', desc: 'Type-safe code that\'s easier to maintain and debug.' },
  { name: 'Tailwind CSS', tag: 'Styling', desc: 'Utility-first CSS for consistent, fast UI development.' },
  { name: 'Firebase', tag: 'Backend', desc: 'Firestore, Auth, and Storage — serverless and scalable.' },
  { name: 'Vercel Edge', tag: 'Hosting', desc: 'Global CDN with Mumbai edge nodes for fast Indian load times.' },
  { name: 'Razorpay', tag: 'Payments', desc: 'UPI, cards, COD, and EMI — all Indian payment methods covered.' },
  { name: 'Framer Motion', tag: 'Animation', desc: 'Smooth, performant animations that don\'t hurt PageSpeed.' },
];

const GUARANTEES = [
  { icon: <RiBarChartLine size={18} />, title: '90+ PageSpeed on mobile', desc: 'Verified via PageSpeed Insights field data before handover. Not a lab score — real user data on Indian 4G.' },
  { icon: <RiGlobalLine size={18} />, title: 'All pages indexed in 14 days', desc: 'We submit your sitemap to Google, verify indexing in Search Console, and fix any crawl errors before we close the project.' },
  { icon: <RiShieldLine size={18} />, title: 'Transparent quoting — no surprises', desc: 'We offer accurate quotes based on clear project scopes. 50+ projects successfully delivered exactly as scoped.' },
  { icon: <RiTimeLine size={18} />, title: '30-day post-launch support', desc: '24-hour response time for bugs and questions. No support retainer required for the first 30 days.' },
];

// NOTE: no `metadata` export here on purpose. This is a plain component
// (imported into app/services/web-development/page.js), not a page.js —
// Next.js App Router only reads `metadata`/`generateMetadata` from actual
// page.js/layout.js files, so a metadata object here was dead code that
// could never run. The real, correctly-fixed metadata for this route lives
// in app/services/web-development/page.js.

export default function WebDevelopmentPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [showAutoPopup, setShowAutoPopup] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [industryPage, setIndustryPage] = useState(0);
  const itemsPerPage = 8;
  const totalIndustryPages = Math.ceil(INDUSTRIES.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // SMART AUTO-POPUP LOGIC (Scroll Depth or 15-second delay, triggers only once)
  useEffect(() => {
    let timeoutId;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If user scrolls past 50% of the page
      if (scrollPosition + windowHeight > documentHeight * 0.5) {
        if (!sessionStorage.getItem('popupShown')) {
          setShowAutoPopup(true);
          sessionStorage.setItem('popupShown', 'true');
        }
        window.removeEventListener('scroll', handleScroll);
      }
    };

    if (!sessionStorage.getItem('popupShown')) {
       window.addEventListener('scroll', handleScroll);
       // Wait 15 seconds before popping up if they don't scroll
       timeoutId = setTimeout(() => {
          setShowAutoPopup(true);
          sessionStorage.setItem('popupShown', 'true');
       }, 15000); 
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if(timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  const filters = ['All', 'Websites', 'Applications', 'E-commerce'];
  const filterMap = {
    All: SERVICES,
    Websites: SERVICES.filter(s => ['Business Website', 'Front-end Development', 'Maintenance Plan'].includes(s.title)),
    Applications: SERVICES.filter(s => ['Web Application', 'Web Portal', 'Progressive Web App', 'Back-end & API'].includes(s.title)),
    'E-commerce': SERVICES.filter(s => ['E-commerce Store', 'Custom CMS'].includes(s.title)),
  };
  const filtered = filterMap[activeFilter] || SERVICES;
  
  const currentIndustries = INDUSTRIES.slice(industryPage * itemsPerPage, (industryPage + 1) * itemsPerPage);
  const generalWhatsAppUrl = "https://wa.me/917009646377?text=Hello%20RC%20Tech%20Solutions";

  return (
    // Added pb-20 to ensure content isn't hidden behind the sticky footer on mobile
    <div className="min-h-screen pb-20 md:pb-0" style={{ background: 'var(--rc-paper)' }}>

      <style jsx global>{`
        @keyframes urgentPulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(45, 95, 76, 0.7); }
          50% { transform: scale(1.02); box-shadow: 0 0 20px 8px rgba(45, 95, 76, 0.35); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(45, 95, 76, 0); }
        }
        .rc-cta-pulse {
          animation: urgentPulse 1.8s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
      `}</style>

      {/* ── MODALS ── */}
      <ModalPortal>
        <AnimatePresence>
          {showAutoPopup && (
            <AutoLeadModal onClose={() => setShowAutoPopup(false)} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {selectedIndustry && (
            <IndustryModal industry={selectedIndustry} onClose={() => setSelectedIndustry(null)} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {selectedCaseStudy && (
            <CaseStudyModal caseStudy={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} />
          )}
        </AnimatePresence>
      </ModalPortal>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-[var(--rc-wire)]"
        style={{ background: 'var(--rc-paper)' }} role="banner">
        <div className="absolute inset-x-0 top-0 h-[420px] rc-grid-bg pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-16 pb-10">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-8 items-center">

            <div className="max-w-xl">
              <nav className="flex items-center gap-1.5 rc-mono text-[0.7rem] text-[rgba(42,45,53,0.5)] mb-4">
                <Link href="/" className="hover:text-[var(--rc-circuit)] transition-colors">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-[var(--rc-circuit)] transition-colors">Services</Link>
                <span>/</span>
                <span className="text-[var(--rc-ink)]">Web Development</span>
              </nav>

              <div className="flex items-center gap-2.5 mb-6 rc-animate-in rc-animate-in-1">
                <span className="rc-via rc-via-pulse" />
                <span className="rc-eyebrow" style={{ color: "var(--rc-trace)" }}>
                  {slide.eyebrow}
                </span>
              </div>

              <h1 className="rc-display text-[2.75rem] sm:text-[3.2rem] lg:text-[3.6rem] leading-[1.05] font-semibold text-[var(--rc-ink)] rc-animate-in rc-animate-in-2 min-h-[160px] sm:min-h-[190px]">
                {slide.headlineLine1}{" "}
                <span style={{ color: "var(--rc-trace)" }}>{slide.headlineGreen}</span>
                {slide.headlineGreen2 && <span style={{ color: "var(--rc-trace)" }}> {slide.headlineGreen2}</span>}
                <br />
                {slide.headlineLine2}
                {slide.headlineOrange && (
                  <>
                    <br />
                    <span style={{ color: "var(--rc-circuit)" }}>{slide.headlineOrange}</span>
                  </>
                )}
                {slide.headlineLine3 && (
                  <>
                    <br />
                    {slide.headlineLine3}
                  </>
                )}
              </h1>

              <p className="rc-body mt-7 text-[1.05rem] leading-relaxed text-[var(--rc-ink-soft)] max-w-md rc-animate-in rc-animate-in-3">
                {slide.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
                {slide.tags.map((item) => (
                  <span key={item} className="rc-mono text-[0.7rem] text-[var(--rc-ink-soft)] flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full" style={{ background: "var(--rc-trace)" }} />
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#get-quote"
                  className="rc-mono text-xs font-bold uppercase tracking-wider px-8 py-4 text-white rounded-lg shadow-xl transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 rc-cta-pulse"
                  style={{ background: '#2D5F4C' }}
                >
                  <RiFlashlightLine size={16} className="text-yellow-300" />
                  <span>Claim Free Quote Now</span>
                </a>
                <a
                  href="tel:+917009646377"
                  onClick={() => trackConversion('call')}
                  className="rc-mono text-xs font-bold uppercase tracking-wider px-8 py-4 text-[var(--rc-ink)] bg-white border-2 border-[var(--rc-circuit)] rounded-lg hover:bg-[var(--rc-paper)] transition-all transform hover:-translate-y-1 shadow-md flex items-center gap-2"
                >
                  <RiPhoneLine size={16} className="text-[var(--rc-trace)]" />
                  <span>Call: +91 70096-46377</span>
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--rc-wire)] grid grid-cols-2 gap-6">
                {slide.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="rc-display text-2xl sm:text-3xl font-bold text-[var(--rc-trace)]">{stat.value}</div>
                    <div className="rc-mono text-xs text-[var(--rc-ink-soft)] mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 transition-all rounded-full ${
                      currentSlide === idx ? "w-8 bg-[var(--rc-trace)]" : "w-2 bg-[var(--rc-wire)]"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="rc-blueprint-card bg-white p-6 sm:p-8 relative shadow-2xl border-2 border-[var(--rc-wire)]">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
                  aria-label="Previous Slide"
                  className="absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-[var(--rc-ink)] shadow-md border border-[var(--rc-wire)] flex items-center justify-center hover:bg-[var(--rc-paper)] transition z-20"
                >
                  ←
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                  aria-label="Next Slide"
                  className="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-[var(--rc-ink)] shadow-md border border-[var(--rc-wire)] flex items-center justify-center hover:bg-[var(--rc-paper)] transition z-20"
                >
                  →
                </button>

                <div className="flex items-center gap-2 mb-4">
                  <span className="rc-via rc-via-pulse" />
                  <span className="rc-eyebrow" style={{ color: 'var(--rc-trace)' }}>Free quote · 24hr response</span>
                </div>
                
                <LeadForm
                  heading="Get a free quote for your project"
                  sub="Tell us what you need. We'll respond within 24 hours with a transparent, detailed proposal."
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROBLEMS WE SOLVE ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--rc-wire)] bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10">
            <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>Problems we fix</span>
            <h2 className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)] mt-2 max-w-xl leading-tight">
              Six things most Indian business websites get wrong — and how we fix them.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
            {PROBLEMS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="p-6 bg-white">
                <span className="rc-mono text-[0.7rem] font-medium block mb-2" style={{ color: 'var(--rc-circuit)' }}>
                  ✗ Problem {String(i+1).padStart(2,'0')}
                </span>
                <p className="rc-body text-sm font-semibold text-[var(--rc-ink)] mb-3 leading-snug">{p.problem}</p>
                <div className="flex gap-2">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: 'var(--rc-trace)' }}><RiCheckLine size={14} /></span>
                  <p className="rc-body text-xs text-[var(--rc-ink-soft)] leading-relaxed">{p.fix}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--rc-wire)]" style={{ background: 'var(--rc-paper)' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8">
            <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>What we build</span>
            <h2 className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)] mt-2">
              Nine services. Transparent scopes. Built for performance.
            </h2>
            <p className="rc-body text-sm text-[var(--rc-ink-soft)] mt-2 max-w-lg leading-relaxed">
              Every service below is based on actual client projects. Complex requirements take more time — but you'll know the exact scope before we start.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`rc-mono text-[0.7rem] uppercase tracking-wider px-3.5 py-1.5 border transition-colors ${
                  activeFilter === f ? 'bg-[var(--rc-ink)] text-[var(--rc-paper)] border-[var(--rc-ink)]'
                    : 'border-[var(--rc-wire)] text-[var(--rc-ink-soft)] hover:border-[var(--rc-ink)]'}`}>
                {f}
              </button>
            ))}
          </div>
          <motion.div layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
            <AnimatePresence>
              {filtered.map((svc) => {
                const Icon = svc.icon;
                const card = (
                  <motion.div key={svc.title} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="group flex flex-col h-full bg-white hover:bg-[var(--rc-paper)] transition-colors p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Icon size={20} style={{ color: 'var(--rc-circuit)' }} />
                      <div className="text-right">
                        <span className="rc-mono text-[0.65rem] text-[rgba(42,45,53,0.45)] block">{svc.time}</span>
                      </div>
                    </div>
                    <h3 className="rc-display text-base font-semibold text-[var(--rc-ink)] group-hover:text-[var(--rc-circuit)] transition-colors mb-2">{svc.title}</h3>
                    <p className="rc-body text-xs text-[rgba(42,45,53,0.75)] leading-relaxed flex-1">{svc.desc}</p>
                    {svc.slug ? (
                      <span className="mt-4 rc-mono text-[0.7rem] uppercase tracking-wider text-[var(--rc-wire)] group-hover:text-[var(--rc-circuit)] transition-colors flex items-center gap-1">
                        Learn more <RiArrowRightLine size={12} />
                      </span>
                    ) : (
                      <span className="mt-4 rc-mono text-[0.65rem] text-[rgba(42,45,53,0.3)]">Included in scope</span>
                    )}
                  </motion.div>
                );
                return svc.slug
                  ? <Link key={svc.title} href={`/services/web-development/${svc.slug}`} className="block h-full">{card}</Link>
                  : <div key={svc.title}>{card}</div>;
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--rc-wire)] bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>Industries we serve</span>
              <h2 className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)] mt-2">
                Tailored digital solutions across 25+ specialized domains.
              </h2>
            </div>
            
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <button
                onClick={() => setIndustryPage((prev) => (prev === 0 ? totalIndustryPages - 1 : prev - 1))}
                className="w-10 h-10 rounded-full border border-[var(--rc-wire)] flex items-center justify-center hover:border-[var(--rc-circuit)] text-[var(--rc-ink)] transition-colors"
                aria-label="Previous page"
              >
                <RiArrowLeftSLine size={20} />
              </button>
              <span className="rc-mono text-xs text-[var(--rc-ink-soft)] px-2">
                {industryPage + 1} / {totalIndustryPages}
              </span>
              <button
                onClick={() => setIndustryPage((prev) => (prev + 1) % totalIndustryPages)}
                className="w-10 h-10 rounded-full border border-[var(--rc-wire)] flex items-center justify-center hover:border-[var(--rc-circuit)] text-[var(--rc-ink)] transition-colors"
                aria-label="Next page"
              >
                <RiArrowRightSLine size={20} />
              </button>
            </div>
          </div>

          <motion.div 
            key={industryPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentIndustries.map((ind) => {
              const IndIcon = ind.icon;
              return (
                <div 
                  key={ind.title} 
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                      setSelectedIndustry(ind);
                    }
                  }}
                  className="rc-blueprint-card bg-white p-6 border-2 border-[var(--rc-wire)] md:hover:border-[var(--rc-trace)] md:hover:shadow-xl transition-all group flex flex-col items-center text-center md:cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-3 right-3 rc-mono text-[0.6rem] text-[var(--rc-trace)] opacity-0 md:group-hover:opacity-100 transition-opacity hidden md:flex items-center gap-1 font-bold">
                    <span>View solution</span>
                    <RiArrowRightLine size={12} />
                  </div>
                  
                  <div className="relative w-20 h-20 mb-4 rounded-2xl flex items-center justify-center shadow-md transition-transform md:group-hover:scale-105" style={{ background: 'linear-gradient(135deg, rgba(45,95,76,0.08) 0%, rgba(59,122,87,0.15) 100%)' }}>
                    <IndIcon size={36} style={{ color: 'var(--rc-trace)' }} />
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-[var(--rc-circuit)] text-white flex items-center justify-center shadow hidden md:flex">
                      <span className="text-xs">+</span>
                    </div>
                  </div>

                  <h3 className="rc-display text-base font-bold text-[var(--rc-ink)] md:group-hover:text-[var(--rc-circuit)] transition-colors mb-2">{ind.title}</h3>
                  <p className="rc-body text-xs text-[var(--rc-ink-soft)] line-clamp-2 leading-relaxed mb-4">{ind.desc}</p>
                  
                  <div className="mt-auto pt-3 border-t border-[var(--rc-wire)] w-full flex items-center justify-center gap-1 rc-mono text-[0.7rem] text-[var(--rc-trace)] font-semibold hidden md:flex">
                    <span>Get proposal →</span>
                  </div>
                </div>
              );
            })}
          </motion.div>

          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalIndustryPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndustryPage(idx)}
                className={`h-1.5 transition-all rounded-full ${
                  industryPage === idx ? "w-8 bg-[var(--rc-trace)]" : "w-2 bg-[var(--rc-wire)]"
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="py-16 sm:py-24 border-b border-[var(--rc-wire)]" style={{ background: 'var(--rc-paper)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--rc-circuit)]/10 text-[var(--rc-circuit)] rc-mono text-xs font-bold uppercase tracking-wider mb-4">
              <RiFireLine size={16} className="text-amber-500 animate-bounce" />
              <span>Proven Client Success Stories</span>
            </div>
            <h2 className="rc-display text-3xl sm:text-4xl font-bold text-[var(--rc-ink)] mb-4">
              High-Performance Case Studies Built to Drive Revenue.
            </h2>
            <p className="rc-body text-base text-[var(--rc-ink-soft)] leading-relaxed">
              Explore our full case study stories, technical breakdowns, and verified client results.
            </p>
          </div>

          <div className="space-y-12">
            {CASE_STUDIES.map((cs, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} 
                transition={{ delay: i * 0.15 }}
                onClick={() => {
                  if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                    setSelectedCaseStudy(cs);
                  }
                }}
                className="grid lg:grid-cols-[1.2fr_1.8fr] bg-white rounded-2xl border-2 border-[var(--rc-wire)] md:hover:border-[var(--rc-trace)] shadow-xl overflow-hidden transition-all group md:cursor-pointer"
              >
                <div className="relative min-h-[280px] lg:min-h-[360px] overflow-hidden bg-[var(--rc-paper-deep)] flex items-center justify-center p-6">
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 bg-[var(--rc-ink)] text-white rc-mono text-xs font-bold rounded-md shadow">
                    <RiStarFill size={14} className="text-yellow-400" />
                    <span>Verified Result</span>
                  </div>
                  <div className="absolute bottom-4 right-4 z-10 px-3 py-1.5 bg-[var(--rc-trace)] text-white rc-mono text-xs font-bold rounded-lg shadow md:group-hover:bg-[var(--rc-circuit)] transition-colors hidden md:block">
                    Click to view story →
                  </div>
                  <Image src={cs.image} alt={cs.result} fill className="object-cover md:group-hover:scale-105 transition-transform duration-500" sizes="(max-width:1024px) 100vw, 50vw" />
                </div>

                <div className="p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="rc-mono text-xs font-semibold px-3 py-1 rounded bg-[var(--rc-paper)] text-[var(--rc-ink)] border border-[var(--rc-wire)]">{cs.industry}</span>
                      <span className="rc-mono text-xs font-semibold px-3 py-1 rounded bg-[var(--rc-circuit)]/10 text-[var(--rc-circuit)]">{cs.tag}</span>
                    </div>
                    <h3 className="rc-display text-2xl sm:text-3xl font-bold text-[var(--rc-ink)] mb-2 md:group-hover:text-[var(--rc-circuit)] transition-colors">{cs.result}</h3>
                    <p className="rc-mono text-xs font-bold uppercase tracking-wider text-[var(--rc-trace)] mb-4 flex items-center gap-1.5">
                      <RiFlashlightLine size={14} />
                      <span>{cs.highlight}</span>
                    </p>
                    <p className="rc-body text-sm sm:text-base text-[var(--rc-ink-soft)] leading-relaxed mb-8">{cs.desc}</p>
                  </div>

                  <div>
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--rc-wire)] mb-6">
                      {cs.metrics.map(m => (
                        <div key={m.l} className="bg-[var(--rc-paper)] p-3 rounded-xl border border-[var(--rc-wire)] text-center">
                          <p className="rc-display text-xl sm:text-2xl font-extrabold text-[var(--rc-ink)]">{m.v}</p>
                          <p className="rc-mono text-[0.65rem] text-[var(--rc-ink-soft)] uppercase tracking-wider mt-0.5">{m.l}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4" onClick={(e) => e.stopPropagation()}>
                      <a 
                        href="#get-quote" 
                        className="inline-flex items-center gap-2 rc-mono text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-lg text-white transition-all transform hover:scale-105 shadow-md rc-cta-pulse"
                        style={{ background: '#2D5F4C' }}
                      >
                        <span>Get Similar Results For Your Business</span>
                        <RiArrowRightLine size={16} />
                      </a>
                      <a 
                        href="tel:+917009646377" 
                        onClick={() => trackConversion('call')}
                        className="inline-flex items-center gap-1.5 rc-mono text-xs font-bold text-[var(--rc-ink)] hover:text-[var(--rc-circuit)] transition-colors"
                      >
                        <RiPhoneLine size={16} className="text-[var(--rc-trace)]" />
                        <span>Discuss With Our Expert</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/projects"
              className="inline-flex items-center gap-2 rc-mono text-xs uppercase tracking-wider font-bold px-8 py-4 border-2 border-[var(--rc-ink)] text-[var(--rc-ink)] hover:bg-[var(--rc-ink)] hover:text-white transition-all rounded-lg shadow-sm">
              <span>View All 700+ Delivered Projects</span>
              <RiExternalLinkLine size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 sm:py-24 border-b border-[var(--rc-wire)] bg-white relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 rc-mono text-xs font-bold uppercase tracking-wider mb-4">
              <RiGoogleFill size={16} className="text-amber-600" />
              <span>Verified Google Reviews (4.8★ Rating)</span>
            </div>
            <h2 className="rc-display text-3xl sm:text-4xl font-bold text-[var(--rc-ink)] mb-4">
              Trusted by 3,450+ Business Owners & Founders Across India.
            </h2>
            <p className="rc-body text-base text-[var(--rc-ink-soft)] leading-relaxed">
              Swipe through real feedback from real clients who partnered with RC Tech Solutions.
            </p>
          </div>

          <div className="relative bg-[var(--rc-paper)] rounded-3xl border-2 border-[var(--rc-wire)] p-8 sm:p-12 shadow-xl">
            <button
              onClick={() => setTestimonialIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
              aria-label="Previous Testimonial"
              className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-[var(--rc-ink)] shadow-lg border border-[var(--rc-wire)] flex items-center justify-center hover:bg-[var(--rc-paper-deep)] transition z-20 cursor-pointer"
            >
              <RiArrowLeftSLine size={24} />
            </button>
            <button
              onClick={() => setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
              aria-label="Next Testimonial"
              className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-[var(--rc-ink)] shadow-lg border border-[var(--rc-wire)] flex items-center justify-center hover:bg-[var(--rc-paper-deep)] transition z-20 cursor-pointer"
            >
              <RiArrowRightSLine size={24} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center text-center max-w-2xl mx-auto"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--rc-circuit)]/10 text-[var(--rc-circuit)] flex items-center justify-center mb-6">
                  <RiGoogleFill size={26} />
                </div>

                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <RiStarFill 
                      key={i} 
                      size={20} 
                      className={i < Math.floor(TESTIMONIALS[testimonialIndex].rating) ? "text-amber-400" : "text-amber-200"} 
                    />
                  ))}
                  <span className="rc-mono text-sm font-bold text-[var(--rc-ink)] ml-2">
                    {TESTIMONIALS[testimonialIndex].rating} / 5.0 Star Rating
                  </span>
                </div>

                <blockquote className="rc-display text-lg sm:text-2xl font-semibold text-[var(--rc-ink)] leading-relaxed mb-8">
                  "{TESTIMONIALS[testimonialIndex].text}"
                </blockquote>

                <div>
                  <p className="rc-display text-base font-bold text-[var(--rc-ink)]">{TESTIMONIALS[testimonialIndex].name}</p>
                  <p className="rc-mono text-xs text-[var(--rc-ink-soft)] mt-0.5">
                    {TESTIMONIALS[testimonialIndex].role} · {TESTIMONIALS[testimonialIndex].location}
                  </p>
                  {TESTIMONIALS[testimonialIndex].verified && (
                    <span className="inline-block mt-2 rc-mono text-[0.65rem] px-2.5 py-0.5 bg-[var(--rc-circuit)]/10 text-[var(--rc-circuit)] font-semibold rounded-full">
                      Verified Google Reviewer
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center items-center gap-2 mt-8">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTestimonialIndex(idx)}
                  className={`h-2 transition-all rounded-full ${
                    testimonialIndex === idx ? "w-8 bg-[var(--rc-trace)]" : "w-2 bg-[var(--rc-wire)]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-[var(--rc-wire)] max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="text-center sm:text-left">
              <p className="rc-display text-lg font-bold text-[var(--rc-ink)]">Want to verify our reviews on Google?</p>
              <p className="rc-mono text-xs text-[var(--rc-ink-soft)] mt-0.5">Search "RC Tech Solutions Mohali" on Google Maps.</p>
            </div>
            <a 
              href="https://wa.me/917009646377?text=Hello%20RC%20Tech%20Solutions" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackConversion('whatsapp')}
              className="inline-flex items-center gap-1.5 rc-mono text-xs uppercase tracking-wider font-bold px-5 py-3 bg-[#25D366] text-white rounded-lg shadow hover:bg-[#128C7E] transition-all flex-shrink-0"
            >
              <RiWhatsappLine size={16} />
              <span>Chat With Our Team →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--rc-wire)] bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>How we work</span>
              <h2 className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)] mt-2 mb-8 leading-tight">
                Six steps. No surprises at any of them.
              </h2>
              <div className="space-y-0">
                {PROCESS.map((p, i) => (
                  <div key={p.n} className="flex gap-5 pb-7 relative">
                    {i < PROCESS.length - 1 && (
                      <div className="absolute left-[7px] top-5 w-px h-full" style={{ background: 'var(--rc-wire)' }} />
                    )}
                    <div className="flex-shrink-0 mt-0.5 z-10">
                      <div className="w-3.5 h-3.5 rounded-full border-2" style={{ borderColor: 'var(--rc-circuit)', background: 'var(--rc-paper)' }} />
                    </div>
                    <div>
                      <p className="rc-mono text-[0.7rem] font-medium mb-1" style={{ color: 'var(--rc-circuit)' }}>Step {p.n}</p>
                      <p className="rc-body text-sm font-semibold text-[var(--rc-ink)] mb-1">{p.title}</p>
                      <p className="rc-body text-xs text-[var(--rc-ink-soft)] leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Image src="/service-web.png" alt="Web development process — RC Tech Solutions"
                width={560} height={320} className="w-full h-auto rc-blueprint-card" />
              <div className="grid grid-cols-2 gap-3">
                {GUARANTEES.map((g) => (
                  <div key={g.title} className="rc-blueprint-card bg-white p-4">
                    <span className="block mb-2" style={{ color: 'var(--rc-circuit)' }}>{g.icon}</span>
                    <p className="rc-body text-xs font-semibold text-[var(--rc-ink)] mb-1">{g.title}</p>
                    <p className="rc-body text-[0.72rem] text-[var(--rc-ink-soft)] leading-relaxed">{g.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-16 border-b border-[var(--rc-wire)]" style={{ background: 'var(--rc-paper)' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
            <div>
              <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>Our tech stack</span>
              <h2 className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)] mt-2 mb-3 leading-tight">
                The same modern stack on every project.
              </h2>
              <p className="rc-body text-sm text-[var(--rc-ink-soft)] leading-relaxed mb-6">
                No legacy frameworks, no plugin soup, no unmaintained libraries. A site built with this stack in 2026 will still be fast and maintainable in 2031.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {TECH.map(t => (
                  <div key={t.name} className="border border-[var(--rc-wire)] p-3 bg-white">
                    <div className="flex items-center justify-between mb-1">
                      <p className="rc-body text-sm font-semibold text-[var(--rc-ink)]">{t.name}</p>
                      <span className="rc-mono text-[0.65rem] text-[var(--rc-trace)]">{t.tag}</span>
                    </div>
                    <p className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.5)] leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <Image src="/The same modern stack on every project.png" alt="Next.js and React web development stack"
              width={500} height={380} className="w-full h-auto rc-blueprint-card" />
          </div>
        </div>
      </section>

      {/* ── BOTTOM LEAD FORM & HIGHLIGHTED CALL ACTIONS ── */}
      <section id="get-quote" className="py-16 sm:py-20 border-b border-[var(--rc-wire)] scroll-mt-20 bg-white"
        style={{ background: 'var(--rc-paper-deep)' }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            <div>
              <span className="rc-eyebrow" style={{ color: 'var(--rc-circuit)' }}>Start your project</span>
              <h2 className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)] mt-2 mb-4 leading-tight">
                Get a free, transparent quote in 24 hours.
              </h2>
              <p className="rc-body text-sm text-[var(--rc-ink-soft)] leading-relaxed mb-6">
                No pitch decks, no NDAs before we've spoken, no agency jargon. Just an honest conversation about your project and what it will take.
              </p>
              <ul className="space-y-2.5 mb-7">
                {['30-min discovery call, free','Detailed proposal in 48 hours','90+ PageSpeed guaranteed','30-day post-launch support','You own all the code'].map(item => (
                  <li key={item} className="flex items-center gap-2 rc-body text-sm text-[var(--rc-ink-soft)]">
                    <span style={{ color: 'var(--rc-trace)' }}><RiCheckLine size={14} /></span>{item}
                  </li>
                ))}
              </ul>
              
              <div className="p-6 bg-white rounded-2xl border-2 border-[var(--rc-trace)] shadow-lg space-y-4">
                <p className="rc-mono text-xs uppercase tracking-wider font-bold text-[var(--rc-trace)]">Direct Expert Line (Mohali)</p>
                <div className="flex flex-col gap-2">
                  <a href="tel:+917009646377" onClick={() => trackConversion('call')} className="rc-display text-2xl font-bold text-[var(--rc-ink)] hover:text-[var(--rc-circuit)] transition-colors flex items-center gap-2">
                    <RiPhoneLine size={20} className="text-[var(--rc-trace)]" />
                    <span>+91 70096-46377</span>
                  </a>
                  <a href={generalWhatsAppUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackConversion('whatsapp')}
                    className="rc-mono text-xs font-bold uppercase tracking-wider px-4 py-3 bg-[#25D366] text-white rounded-xl text-center hover:bg-[#128C7E] transition-all flex items-center justify-center gap-2 shadow">
                    <RiWhatsappLine size={18} />
                    <span>Chat Instantly on WhatsApp →</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="rc-blueprint-card bg-white p-6 sm:p-8 border-2 border-[var(--rc-wire)] shadow-2xl">
              <LeadForm heading="Request a free quote" sub="" />
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="py-10 border-b border-[var(--rc-wire)] bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="rc-eyebrow text-[rgba(42,45,53,0.35)] mb-4">Related services</p>
          <div className="flex flex-wrap gap-3">
            {[
              ['/services/web-development/ecommerce-development','E-commerce Development'],
              ['/services/web-development/custom-cms-development','Custom CMS'],
              ['/services/web-development/progressive-web-apps','Progressive Web Apps'],
              ['/services/seo','SEO Services'],
              ['/services/digital-marketing','Digital Marketing'],
              ['/services/mobile-apps','Mobile Apps'],
            ].map(([href, label]) => (
              <Link key={href} href={href}
                className="rc-mono text-[0.7rem] uppercase tracking-wider px-4 py-2.5 border border-[var(--rc-wire)] text-[var(--rc-ink-soft)] hover:border-[var(--rc-circuit)] hover:text-[var(--rc-circuit)] transition-colors">
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGH-CONVERSION MOBILE STICKY CTA (Only visible on mobile) ── */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-[var(--rc-wire)] p-3 z-50 flex items-center gap-3 shadow-[0_-4px_15px_rgba(0,0,0,0.05)]">
        <a 
          href="tel:+917009646377" 
          onClick={() => trackConversion('call')} 
          className="flex-1 bg-white border border-[var(--rc-trace)] text-[var(--rc-ink)] font-extrabold uppercase tracking-wider text-xs py-3.5 rounded-lg flex items-center justify-center gap-1.5 shadow-sm"
        >
          <RiPhoneLine size={16} className="text-[var(--rc-trace)]" /> Call Now
        </a>
        <a 
          href={generalWhatsAppUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={() => trackConversion('whatsapp')} 
          className="flex-1 bg-[#25D366] text-white font-extrabold uppercase tracking-wider text-xs py-3.5 rounded-lg flex items-center justify-center gap-1.5 shadow-sm"
        >
          <RiWhatsappLine size={18} /> WhatsApp
        </a>
      </div>

    </div>
  );
}
