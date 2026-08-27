// 'use client';

// import { RiWhatsappLine, RiPhoneLine } from 'react-icons/ri';

// // ─── Utility for Google Ads Tracking ──────────────────────────────────────────
// const trackConversion = (type) => {
//   if (typeof window !== 'undefined' && window.gtag) {
//     if (type === 'whatsapp') {
//       // Replace with your actual Google Ads WhatsApp conversion ID and label
//       window.gtag('event', 'conversion', { 'send_to': 'AW-XXXXXXXXX/whatsapp_label' });
//     } else if (type === 'call') {
//       // Replace with your actual Google Ads Phone Call conversion ID and label
//       window.gtag('event', 'conversion', { 'send_to': 'AW-XXXXXXXXX/call_label' });
//     }
//   }
// };

// export default function FloatingButtons() {
//   return (
//     <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col gap-3 sm:gap-4 items-center">
//       {/* Call Button (Slightly smaller than WhatsApp) */}
//       <a
//         href="tel:+917009646377"
//         onClick={() => trackConversion('call')}
//         className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[var(--rc-ink)] border-2 border-[var(--rc-wire)] shadow-lg flex items-center justify-center transition-transform transform hover:scale-110 hover:border-[var(--rc-trace)]"
//         aria-label="Call RC Tech Solutions"
//       >
//         <RiPhoneLine className="text-[var(--rc-trace)] w-5 h-5 sm:w-6 sm:h-6" />
//       </a>

//       {/* WhatsApp Button with Ping Animation (Primary Action) */}
//       <a
//         href="https://wa.me/917009646377?text=Hello%20RC%20Tech%20Solutions"
//         target="_blank"
//         rel="noopener noreferrer"
//         onClick={() => trackConversion('whatsapp')}
//         className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center transition-transform transform hover:scale-110"
//         aria-label="WhatsApp RC Tech Solutions"
//       >
//         {/* Pulsing ring behind the WhatsApp button for high visibility */}
//         <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30 h-full w-full"></span>
//         <RiWhatsappLine className="relative z-10 w-7 h-7 sm:w-8 sm:h-8" />
//       </a>
//     </div>
//   );
// }