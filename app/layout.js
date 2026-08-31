// import { Poppins, Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
// import "./globals.css";
// import AdvancedHeader from "./components/Header";
// import Footer from "./components/Footer";
// import SmoothProvider from "./components/SmoothProvider";
// import ExitIntentPopup from "./components/ExitIntentPopup";
// // import FloatingButtons from "./components/FloatingButtons";
// import Script from "next/script";

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });

// // New brand type system: Fraunces (display/editorial weight + character),
// // IBM Plex Sans (engineered, technical body face), IBM Plex Mono (the
// // "schematic" layer used for eyebrows, labels, stats, nav).
// const fraunces = Fraunces({
//   variable: "--font-fraunces",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "900"],
//   style: ["normal", "italic"],
//   display: "swap",
// });

// const plexSans = IBM_Plex_Sans({
//   variable: "--font-plex-sans",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });

// const plexMono = IBM_Plex_Mono({
//   variable: "--font-plex-mono",
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
//   display: "swap",
// });

// export const metadata = {
//   metadataBase: new URL("https://www.rctechsolutions.com"),
//   title: {
//     default: "RC Tech Solutions | Web Development Company in Mohali, India — Serving Clients Worldwide",
//     template: "%s | RC Tech Solutions",
//   },
//   description:
//     "RC Tech Solutions is a Mohali, India-based web development and digital marketing agency building fast, SEO-ready, mobile-first websites and growth campaigns for startups, SMEs & enterprises across India, the USA, UK, Canada and Australia.",
//   robots: {
//     index: true,
//     follow: true,
//     nocache: false,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//       "max-video-preview": -1,
//     },
//   },
//   openGraph: {
//     title: "RC Tech Solutions | Web Development & Digital Marketing — India & Worldwide",
//     description:
//       "We build luxury-grade websites, run results-driven SEO campaigns, and create brands that stand out — for clients across India, the USA, UK, Canada and Australia. Based in Mohali, India.",
//     url: "https://www.rctechsolutions.com",
//     siteName: "RC Tech Solutions",
//     images: [
//       {
//         url: "https://www.rctechsolutions.com/og/home-cover.jpg",
//         width: 1200,
//         height: 630,
//         alt: "RC Tech Solutions — Web Development Company in Mohali, India, Serving Clients Worldwide",
//       },
//     ],
//     locale: "en_IN",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "RC Tech Solutions | Web Development — India & Worldwide",
//     description: "Fast, SEO-ready websites & digital marketing for startups and SMEs across India, the USA, UK, Canada & Australia. Based in Mohali, India.",
//     creator: "@rctechsolutions",
//     images: ["https://www.rctechsolutions.com/og/home-cover.jpg"],
//   },
//   alternates: { canonical: "https://www.rctechsolutions.com" },
//   // FIX: this was a literal, unfilled placeholder string
//   // ("your-google-search-console-token") shipped to production — meaning
//   // this meta tag never actually verified anything with Google. Reading
//   // from an env var means: (a) it's easy to set the real token without
//   // touching code, and (b) if it's ever unset, the tag is omitted entirely
//   // instead of emitting a broken placeholder — which is safer, since a
//   // missing tag is obviously "not set up yet" while a wrong-looking token
//   // could sit unnoticed for months.
//   // Set NEXT_PUBLIC_GSC_VERIFICATION in .env.local to your real value from
//   // Search Console → Settings → Ownership verification → HTML tag
//   // (just the content="..." value, not the full <meta> tag).
//   verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
//     ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
//     : undefined,
//   other: { "google-adsense-account": "ca-pub-4074858392407979" },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en-IN">
//       <head />
//       {/* suppressHydrationWarning: this isn't caused by our code — browser
//           extensions like Grammarly inject attributes (data-new-gr-c-s-check-
//           loaded, data-gr-ext-installed) directly onto <body> before React
//           hydrates, which then don't match what the server rendered. This is
//           the exact scenario Next.js's own hydration-error docs call out as
//           safe to suppress: https://nextjs.org/docs/messages/react-hydration-error
//           It only silences mismatches on THIS element's attributes — it does
//           not hide real hydration bugs elsewhere in the tree. */}
//       <body
//         suppressHydrationWarning
//         className={`${poppins.variable} ${fraunces.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
//       >
//         {/* Google Tag Manager */}
//         <Script id="gtm-init" strategy="afterInteractive">
//           {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//           })(window,document,'script','dataLayer','GTM-KQBSZ2Z9');`}
//         </Script>

//         {/* Razorpay */}
//         <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />

//         {/* AdSense — FIXED: was render-blocking bare <script>, now afterInteractive */}
//         <Script
//           async
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4074858392407979"
//           strategy="afterInteractive"
//           crossOrigin="anonymous"
//         />

//         {/* GTM NoScript */}
//         <noscript>
//           <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KQBSZ2Z9"
//             height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
//         </noscript>

//         <AdvancedHeader />
//         <SmoothProvider>
//           {children}
//         </SmoothProvider>
//         <Footer />

//         {/* Site-wide bounce-reduction popup — exit-intent (desktop) / scroll-depth
//             + time fallback (mobile), frequency-capped, offers the free audit tool
//             instead of a discount wall. See ExitIntentPopup.js for full rationale. */}
//         <ExitIntentPopup />

//         {/* Floating Actions Rendered globally on all pages */}
//         {/* <FloatingButtons /> */}
//       </body>
//     </html>
//   );
// }



// import { Poppins, Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
// import "./globals.css";
// import AdvancedHeader from "./components/Header";
// import Footer from "./components/Footer";
// import SmoothProvider from "./components/SmoothProvider";
// import ExitIntentPopup from "./components/ExitIntentPopup";
// // import FloatingButtons from "./components/FloatingButtons";
// import Script from "next/script";

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });

// const fraunces = Fraunces({
//   variable: "--font-fraunces",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "900"],
//   style: ["normal", "italic"],
//   display: "swap",
// });

// const plexSans = IBM_Plex_Sans({
//   variable: "--font-plex-sans",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });

// const plexMono = IBM_Plex_Mono({
//   variable: "--font-plex-mono",
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
//   display: "swap",
// });

// export const metadata = {
//   metadataBase: new URL("https://www.rctechsolutions.com"),
//   title: {
//     default: "RC Tech Solutions | Web Development Company in Mohali, India — Serving Clients Worldwide",
//     template: "%s | RC Tech Solutions",
//   },
//   description:
//     "RC Tech Solutions is a Mohali, India-based web development and digital marketing agency building fast, SEO-ready, mobile-first websites and growth campaigns for startups, SMEs & enterprises across India, the USA, UK, Canada and Australia.",
//   robots: {
//     index: true,
//     follow: true,
//     nocache: false,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//       "max-video-preview": -1,
//     },
//   },
//   openGraph: {
//     title: "RC Tech Solutions | Web Development & Digital Marketing — India & Worldwide",
//     description:
//       "We build luxury-grade websites, run results-driven SEO campaigns, and create brands that stand out — for clients across India, the USA, UK, Canada and Australia. Based in Mohali, India.",
//     url: "https://www.rctechsolutions.com",
//     siteName: "RC Tech Solutions",
//     images: [
//       {
//         url: "https://www.rctechsolutions.com/og/home-cover.jpg",
//         width: 1200,
//         height: 630,
//         alt: "RC Tech Solutions — Web Development Company in Mohali, India, Serving Clients Worldwide",
//       },
//     ],
//     locale: "en_IN",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "RC Tech Solutions | Web Development — India & Worldwide",
//     description: "Fast, SEO-ready websites & digital marketing for startups and SMEs across India, the USA, UK, Canada & Australia. Based in Mohali, India.",
//     creator: "@rctechsolutions",
//     images: ["https://www.rctechsolutions.com/og/home-cover.jpg"],
//   },
//   alternates: { canonical: "https://www.rctechsolutions.com" },
//   verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
//     ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
//     : undefined,
//   other: { "google-adsense-account": "ca-pub-4074858392407979" },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en-IN">
//       <head />
//       <body
//         suppressHydrationWarning
//         className={`${poppins.variable} ${fraunces.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
//       >
//         {/* ── NEW: Google Ads / Analytics Tag ── */}
//         <Script
//           strategy="afterInteractive"
//           src={`https://www.googletagmanager.com/gtag/js?id=G-7E6C8BZK9P`}
//         />
//         <Script
//           id="google-ads-init"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
              
//               // Base tag from your screenshot
//               gtag('config', 'G-7E6C8BZK9P');
              
//               // Ads tag for your conversion tracking events
//               gtag('config', 'AW-18337263682');
//             `,
//           }}
//         />

//         {/* Google Tag Manager */}
//         <Script id="gtm-init" strategy="afterInteractive">
//           {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//           })(window,document,'script','dataLayer','GTM-KQBSZ2Z9');`}
//         </Script>

//         {/* Razorpay */}
//         <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />

//         {/* AdSense */}
//         <Script
//           async
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4074858392407979"
//           strategy="afterInteractive"
//           crossOrigin="anonymous"
//         />

//         {/* GTM NoScript */}
//         <noscript>
//           <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KQBSZ2Z9"
//             height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
//         </noscript>

//         <AdvancedHeader />
//         <SmoothProvider>
//           {children}
//         </SmoothProvider>
//         <Footer />

//         <ExitIntentPopup />

//       </body>
//     </html>
//   );
// }






import { Poppins, Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import AdvancedHeader from "./components/Header";
import Footer from "./components/Footer";
import SmoothProvider from "./components/SmoothProvider";
import ExitIntentPopup from "./components/ExitIntentPopup";
// import FloatingButtons from "./components/FloatingButtons";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.rctechsolutions.com"),
  title: {
    default: "RC Tech Solutions | Web Development Company in Mohali, India — Serving Clients Worldwide",
    template: "%s | RC Tech Solutions",
  },
  description:
    "RC Tech Solutions is a Mohali, India-based web development and digital marketing agency building fast, SEO-ready, mobile-first websites and growth campaigns for startups, SMEs & enterprises across India, the USA, UK, Canada and Australia.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "RC Tech Solutions | Web Development & Digital Marketing — India & Worldwide",
    description:
      "We build luxury-grade websites, run results-driven SEO campaigns, and create brands that stand out — for clients across India, the USA, UK, Canada and Australia. Based in Mohali, India.",
    url: "https://www.rctechsolutions.com",
    siteName: "RC Tech Solutions",
    images: [
      {
        url: "https://www.rctechsolutions.com/og/home-cover.jpg",
        width: 1200,
        height: 630,
        alt: "RC Tech Solutions — Web Development Company in Mohali, India, Serving Clients Worldwide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RC Tech Solutions | Web Development — India & Worldwide",
    description: "Fast, SEO-ready websites & digital marketing for startups and SMEs across India, the USA, UK, Canada & Australia. Based in Mohali, India.",
    creator: "@rctechsolutions",
    images: ["https://www.rctechsolutions.com/og/home-cover.jpg"],
  },
  alternates: { canonical: "https://www.rctechsolutions.com" },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
  other: { "google-adsense-account": "ca-pub-4074858392407979" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head />
      <body
        suppressHydrationWarning
        className={`${poppins.variable} ${fraunces.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
      >
        {/* ── UPDATED: Google Ads / Analytics Tag ── */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-1PNCYTZ6EM`}
        />
        <Script
          id="google-ads-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // Base tag from image_1cde50.png
              gtag('config', 'G-1PNCYTZ6EM');
              
              // Ads tag for your conversion tracking events
              gtag('config', 'AW-18337263682');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KQBSZ2Z9');`}
        </Script>

        {/* Razorpay */}
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />

        {/* AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4074858392407979"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        {/* GTM NoScript */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KQBSZ2Z9"
            height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>

        <AdvancedHeader />
        <SmoothProvider>
          {children}
        </SmoothProvider>
        <Footer />

        <ExitIntentPopup />

      </body>
    </html>
  );
}
