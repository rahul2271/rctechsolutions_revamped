'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RiCheckLine, RiArrowLeftLine, RiWhatsappLine } from 'react-icons/ri';

export default function ThankYouPage() {
  // Trigger Google Ads Conversion on Page Load
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18337263682/Yp7KCMrs7eIcEMLg8adE' // Replace with your exact conversion label if different
      });
    }
  }, []);

  const whatsappUrl = "https://wa.me/917009646377?text=Hello%20RC%20Tech%20Solutions,%20I%20just%20submitted%20a%20form%20on%20your%20website.";

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--rc-paper)' }}>
      <div className="max-w-xl w-full bg-white rounded-3xl border-2 border-[var(--rc-wire)] p-8 sm:p-12 shadow-2xl text-center relative overflow-hidden">
        
        {/* Background decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10" style={{ background: 'var(--rc-trace)', filter: 'blur(40px)' }} />
        
        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-white" style={{ background: 'rgba(45,95,76,0.1)' }}>
          <RiCheckLine size={40} style={{ color: 'var(--rc-trace)' }} />
        </div>

        {/* Headings */}
        <h1 className="rc-display text-3xl sm:text-4xl font-bold text-[var(--rc-ink)] mb-3">
          Request Received!
        </h1>
        <p className="rc-body text-base text-[var(--rc-ink-soft)] mb-8 leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. Our technical expert will review your details and contact you within the next <strong className="text-[var(--rc-ink)]">24 hours</strong> with a transparent quote.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rc-mono text-xs uppercase tracking-wider font-bold px-6 py-4 bg-[#25D366] text-white rounded-xl shadow-md hover:bg-[#128C7E] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <RiWhatsappLine size={20} />
            <span>Chat on WhatsApp Now</span>
          </a>
          
          <Link
            href="/"
            className="w-full sm:w-auto rc-mono text-xs uppercase tracking-wider font-bold px-6 py-4 bg-white border-2 border-[var(--rc-wire)] text-[var(--rc-ink)] hover:border-[var(--rc-circuit)] hover:bg-[var(--rc-paper)] transition-all rounded-xl flex items-center justify-center gap-2"
          >
            <RiArrowLeftLine size={16} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Footer info */}
        <div className="mt-10 pt-6 border-t border-[var(--rc-wire)]">
          <p className="rc-mono text-[0.7rem] text-[rgba(42,45,53,0.5)]">
            Based in Mohali, Punjab · Transparent quotes · No hidden fees
          </p>
        </div>
      </div>
    </div>
  );
}
