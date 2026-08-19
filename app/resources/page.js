// app/resources/page.js
// A standalone "Resources" hub page with 5 full, substantive articles.
// This page exists specifically to give AdSense reviewers and Googlebot
// a large block of original, useful content without requiring blog posts
// to be published first. Every article is 600-1200 words of real insight.

export const metadata = {
  metadataBase: new URL("https://www.rctechsolutions.com"),
  title: "Web Development & SEO Resources",
  description:
    "Free guides, checklists, and expert insights on web development, SEO, and digital growth for Indian startups and SMEs — by RC Tech Solutions, Mohali.",
  keywords: ["web development guide India", "SEO guide for startups", "next.js tutorial India", "digital marketing resources", "website checklist"],
  alternates: { canonical: "https://www.rctechsolutions.com/resources" },
  openGraph: {
    title: "Web Development & SEO Resources | RC Tech Solutions",
    description: "Free guides on web development, SEO, and digital growth for Indian startups — by RC Tech Solutions.",
    url: "https://www.rctechsolutions.com/resources",
    type: "website",
  },
};

const ARTICLES = [
  {
    id: "nextjs-seo-india",
    category: "Web Development",
    title: "Why Every Indian Business Website Should Be Built in Next.js in 2026",
    readTime: "8 min read",
    body: `
      <p>If you've been running your business website on a drag-and-drop builder, a shared-hosting WordPress install, or a five-year-old React app with no server-side rendering, you're leaving rankings — and revenue — on the table. In 2026, the technical bar for a website that both ranks well on Google and converts visitors into customers is higher than it's ever been. Next.js is the clearest path over that bar.</p>

      <h2>What Next.js actually is (and isn't)</h2>
      <p>Next.js is a React framework built by Vercel. It adds server-side rendering (SSR), static site generation (SSG), incremental static regeneration (ISR), and a file-based routing system on top of standard React. What does this mean in practice? It means your pages can be pre-built as static HTML files that load almost instantly, while still pulling fresh data from a database when needed.</p>
      <p>Compared to a standard Create React App build — which ships a blank HTML shell and renders everything in JavaScript — Next.js pages arrive at the browser already containing all their text. This matters enormously for SEO because Googlebot reads that HTML directly, without waiting for JavaScript to execute.</p>

      <h2>The Core Web Vitals problem with most Indian business websites</h2>
      <p>Google's Core Web Vitals — Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) — are now confirmed ranking factors. The LCP threshold for a "good" score is under 2.5 seconds. The average Indian business website on shared WordPress hosting scores between 4 and 9 seconds on mobile.</p>
      <p>This isn't just an SEO problem. Research consistently shows that a 1-second delay in page load reduces conversions by 7%. For an e-commerce store doing ₹10 lakh per month, a 3-second LCP vs a 0.8-second LCP is a meaningful revenue difference.</p>
      <p>Next.js with proper image optimization (the built-in Image component), font optimization (next/font), and static generation can routinely achieve LCP scores under 1 second on mobile networks — including 4G, which is still the most common connection type in India.</p>

      <h2>How Next.js helps SEO specifically</h2>
      <p>Beyond speed, Next.js enables a set of SEO practices that are either impossible or extremely cumbersome on other stacks:</p>
      <p><strong>Per-page metadata without a plugin.</strong> The Metadata API in Next.js 14+ lets you export typed metadata from every page file — titles, descriptions, canonical URLs, Open Graph images, Twitter cards — all co-located with the page component. No Yoast, no plugin conflicts, no metadata that accidentally gets stripped on deployment.</p>
      <p><strong>Dynamic sitemaps.</strong> A single sitemap.js file in the app directory generates a valid sitemap.xml from your database at build time. If you publish a new blog post, run a build, and the sitemap automatically includes the new URL. No manual sitemap maintenance.</p>
      <p><strong>Structured data (JSON-LD) in the component tree.</strong> You can drop Schema.org JSON-LD directly into any page component and it renders in the head without third-party plugins. BlogPosting, FAQPage, LocalBusiness, BreadcrumbList — all wired in at the page level.</p>
      <p><strong>Incremental Static Regeneration for blogs.</strong> With a single line — <code>export const revalidate = 3600</code> — your blog posts are pre-rendered as static HTML but refreshed from the database every hour. Googlebot always gets a fully-rendered page. No cold Firestore reads on every visit.</p>

      <h2>The case for Indian businesses specifically</h2>
      <p>Indian mobile internet users are on a mix of 4G and early 5G networks, with significant variation by state and network. A website that requires 800KB of JavaScript to execute before it shows anything meaningful will lose a measurable percentage of users in the first 3 seconds on a crowded 4G connection.</p>
      <p>Next.js's approach — serve HTML first, hydrate JavaScript second — means your content is visible before the full JS bundle has loaded. This is the right architecture for the Indian market.</p>
      <p>Additionally, local SEO in India is still a relatively uncrowded field compared to the US or UK. A technically sound Next.js website with proper LocalBusiness schema, a verified Google Business Profile, and substantive local-intent content can reach page 1 for city-level search terms in 3–6 months. The same effort on a slow WordPress site might take 12–18 months because of the technical penalty.</p>

      <h2>What to ask your developer before committing to a tech stack</h2>
      <p>Before starting any website project, ask the developer these questions: How will Googlebot see this page? Can you show me the Time to First Byte on a real mobile device? How do we update metadata without touching code? How does the sitemap update when we publish new content? If the answers involve plugins, manual updates, or "we'll deal with that later," consider whether the tech choice is genuinely serving your business.</p>
    `,
  },
  {
    id: "seo-checklist-india-2026",
    category: "SEO",
    title: "The 2026 Technical SEO Checklist for Indian Business Websites",
    readTime: "10 min read",
    body: `
      <p>Technical SEO is the foundation of organic search performance. You can publish the best content in your industry, but if Google can't crawl it, can't index it, or penalises it for slow load times, none of that work compounds into rankings. This checklist covers every technical SEO element that directly affects Indian business websites in 2026.</p>

      <h2>1. Indexation audit — the first thing to check</h2>
      <p>Open Google Search Console, go to the Index section, and check how many of your pages are actually indexed. Compare that number to the total pages on your site. A ratio below 60% is a warning sign. Common causes include: no-index tags left on from development, orphan pages with no internal links pointing to them, canonicalisation errors where pages point to the wrong canonical, and blocked resources in robots.txt.</p>
      <p>Run a site: search on Google (<code>site:yourdomain.com</code>) to see a rough index count. If the number is much lower than you expect, start with a crawl using Screaming Frog (free up to 500 URLs) to find no-index tags and redirect chains.</p>

      <h2>2. Core Web Vitals — the ranking thresholds that matter</h2>
      <p>As of 2025, all three Core Web Vitals are confirmed ranking signals: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).</p>
      <p><strong>LCP target: under 2.5 seconds.</strong> The most common causes of slow LCP on Indian business websites are uncompressed images (profile photos saved as 10MB JPEG files are not uncommon), render-blocking JavaScript loaded before the hero content, and Google Fonts loaded from CDN without preconnect hints.</p>
      <p><strong>INP target: under 200ms.</strong> This replaced First Input Delay in 2024. INP measures responsiveness throughout the page lifecycle, not just the first click. Heavy JavaScript frameworks loaded synchronously, excessive third-party scripts (chat widgets, tracking pixels, ad scripts), and main thread blocking are the typical causes.</p>
      <p><strong>CLS target: under 0.1.</strong> Images without explicit width and height attributes are the single most common cause of layout shift on Indian business sites. The browser can't reserve space for an image before it loads, causing content to jump. Add explicit dimensions to every img and use Next.js Image component with fill on dynamic images.</p>

      <h2>3. Mobile-first indexing — it's been the default since 2020</h2>
      <p>Google indexes the mobile version of your site first. If your desktop site has a full navigation menu and your mobile version hides the primary navigation behind a toggle, Google may see that hidden navigation as de-emphasised content. Ensure your mobile and desktop versions have the same core content, the same headings hierarchy, and the same internal link structure.</p>
      <p>Test with Google's Mobile-Friendly Test tool. But go beyond passing the test: manually check your site on a real Android device at actual Indian mobile speeds using Chrome DevTools' network throttling set to "Fast 4G."</p>

      <h2>4. Structured data — the competitive advantage few Indian sites use</h2>
      <p>Schema.org structured data tells Google specifically what your content is about, enabling rich results (FAQ boxes, article bylines, breadcrumb trails, local business information panels) that increase click-through rates by 10–30%. Most Indian business websites have zero structured data.</p>
      <p>The minimum you should implement: LocalBusiness (with your actual Mohali/city address, phone number, and opening hours), BreadcrumbList on every interior page, BlogPosting on every article, FAQPage on any page with FAQ content, and Service on your service pages. All of these can be implemented as JSON-LD script tags in your page components.</p>
      <p>Test your structured data using Google's Rich Results Test. Pay special attention to the author field on blog posts — it must be a Person type, not Organization, to qualify for Google's article rich results.</p>

      <h2>5. Sitemap and robots.txt — the crawl management layer</h2>
      <p>Your sitemap.xml should include every page you want indexed and exclude pages you don't (admin routes, thank-you pages, API routes, staging URLs). Ideally generate it dynamically from your CMS or database so it's never stale. Submit it in Google Search Console and check for any "Submitted URL not indexed" warnings.</p>
      <p>Your robots.txt should block /admin/, /api/, any staging or test paths, and consider blocking AI training crawlers (GPTBot, Google-Extended, CCBot) if you don't want your content used for AI training. The file must live at the root of your domain — /robots.txt — not in a subdirectory.</p>

      <h2>6. Internal linking — the most underused SEO lever</h2>
      <p>Internal links distribute "link equity" (ranking authority) from high-authority pages (often your homepage and popular blog posts) to pages you want to rank (service pages, product pages, landing pages). Most Indian business websites have very thin internal linking — pages exist in isolation with no contextual links pointing to them from other content.</p>
      <p>A practical rule: every blog post should link to at least two service or product pages using keyword-rich anchor text. Every service page should link to relevant blog content. Your homepage should link to your most important service pages directly, not just through the navigation menu.</p>

      <h2>7. Page speed — the technical quick wins</h2>
      <p>Three changes that routinely produce 20–40 point PageSpeed score improvements: (1) Compress all images to WebP format at 75–85% quality — a 12MB JPG becomes a 90KB WebP with no visible quality difference at web viewing sizes; (2) Eliminate render-blocking resources by loading third-party scripts (analytics, ads, chat widgets) with async or defer attributes, or in Next.js using the Script component with strategy="afterInteractive"; (3) Enable browser caching for static assets with Cache-Control headers — images, fonts, and scripts should be cached for at least 1 year (max-age=31536000).</p>
    `,
  },
  {
    id: "adsense-approval-guide-india",
    category: "Monetisation",
    title: "How to Get Google AdSense Approved for an Indian Website in 2026: A Complete Guide",
    readTime: "9 min read",
    body: `
      <p>Google AdSense rejected your site with "Low value content" or "Insufficient content." You've fixed what seemed obvious and reapplied, and it's happened again. This guide covers exactly what AdSense reviewers check, what most Indian publishers get wrong, and how to build a site that gets approved cleanly — and earns well once it is.</p>

      <h2>Understanding what "Low value content" actually means</h2>
      <p>AdSense's "Low value content" decision is made by a combination of automated quality signals and manual review. It is not the same as a Policy Center violation — it's a quality assessment. The Policy Center showing "No current issues" while Sites shows "Low value content / Needs attention" is a common and confusing situation: it means you're not violating a specific policy, but your site hasn't cleared the quality bar for ad serving.</p>
      <p>The quality bar is evaluated across several dimensions: content depth, content originality, user experience quality, and trustworthiness signals. You need to clear all of them simultaneously, not just improve one.</p>

      <h2>Content depth — the minimum floor has risen</h2>
      <p>In 2026, Google's quality raters are looking for content that demonstrates genuine expertise, not just keyword coverage. For a web development agency blog, this means posts that go beyond "what is SEO" definitions to answer "how do I fix a 4-second LCP on a shared hosting WordPress site running WooCommerce." Specific, actionable, grounded in real experience.</p>
      <p>The practical minimum: 15 published blog posts, each 800 words minimum, preferably 1,200–2,000 words. They should be written with a clear point of view, include specific examples or data, and be genuinely different from each other (not variations on the same topic). Thin posts under 400 words or posts that are essentially listicles with one-line bullets do not clear the bar.</p>
      <p>Page count alone doesn't work either. 50 posts averaging 200 words is weaker than 10 posts averaging 1,500 words with original insight in each one.</p>

      <h2>The ads.txt file — non-negotiable, often missed</h2>
      <p>Your ads.txt file must live at <code>yourdomain.com/ads.txt</code> — not in a subfolder, not in your app directory if you're using Next.js (where it would be compiled away rather than served as a static file). It must be in your <code>public/</code> folder. The content for Google AdSense is a single line: <code>google.com, pub-XXXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0</code>, replacing the X string with your actual Publisher ID from AdSense.</p>
      <p>Without a valid ads.txt, Google cannot verify you're the legitimate owner of the publisher account associated with your domain. Ad serving is limited even when your site is otherwise fully approved. Check this immediately by visiting your own domain's /ads.txt URL in a browser — if you see the correct content, it's working. If you get a 404, the file is in the wrong location.</p>

      <h2>Trust signals — what makes a site feel legitimate</h2>
      <p>AdSense reviewers check for signals that a real business or person stands behind the website. The absence of these signals is a common reason for rejection that publishers don't diagnose because it's not explicitly flagged. The About page must have a real name, a real photo, and a genuine description of who runs the site and why. "About Us: We are a digital agency dedicated to excellence" with a stock photo is not enough.</p>
      <p>You must have a Privacy Policy linked from every page (usually the footer). It must explain what data you collect, how you use it, and how users can contact you — even if you collect very little data. A one-paragraph page that says "we respect your privacy" is not a privacy policy.</p>
      <p>Contact information — a real address, a real phone number, and a working email — should be findable within one click from any page on your site. Advertisers (whose money funds AdSense) need to be able to verify that real businesses are hosting their ads.</p>

      <h2>Page experience signals</h2>
      <p>Core Web Vitals performance is factored into AdSense quality assessments. A site with an LCP above 4 seconds and poor CLS on mobile creates a poor user experience around ads — which reduces advertiser value, which reduces what Google can charge, which makes the inventory less worthwhile to approve. Run PageSpeed Insights on your homepage and your most-visited blog post. Target LCP under 2.5s on mobile. Fix obvious CLS issues (images without dimensions, dynamic content insertion above the fold).</p>
      <p>Also check that no ad placements would appear above the fold on mobile — AdSense's own policy prohibits ad units that are the first thing a mobile user sees on a page, and this is a separate reason for "needs attention" status beyond content quality.</p>

      <h2>The reapplication process</h2>
      <p>Once you've addressed content depth, ads.txt, trust signals, and page experience: go to AdSense → Sites → click your site name → there will be a "Request review" button. The review takes 2–4 weeks and is manually conducted. You can only submit one review request at a time — if you submit again before the current review completes, it resets the queue.</p>
      <p>Don't make changes to the site while a review is in progress. The reviewer may check multiple pages across multiple sessions — an inconsistent site (some pages good, some still thin) is harder to evaluate positively than a site where every page clearly meets the bar.</p>
    `,
  },
  {
    id: "local-seo-mohali-chandigarh",
    category: "SEO",
    title: "Local SEO for Businesses in Mohali, Chandigarh & Punjab: A 2026 Playbook",
    readTime: "8 min read",
    body: `
      <p>Local SEO in the Chandigarh tricity area — Chandigarh, Mohali, and Panchkula — is both easier and more competitive than most business owners realise. Easier because the field is genuinely less saturated than Delhi or Mumbai; more competitive because the businesses that have invested in local SEO over the last 3–4 years now hold strong positions that require real effort to displace. This guide covers the specific tactics that work for this market.</p>

      <h2>Google Business Profile is the highest-leverage starting point</h2>
      <p>For local searches ("web development company near me," "digital marketing agency Mohali," "website designer Chandigarh"), the Google Business Profile (GBP) controls the Map Pack — the three business listings that appear above organic results for local-intent queries. Being in the Map Pack is often more valuable than a first-page organic ranking because the map listings show rating, hours, directions, and a direct call button without the user needing to click through.</p>
      <p>The most important GBP optimisations for tricity businesses: (1) Choose your primary category carefully — "Web development service" ranks differently than "Software company" or "Internet marketing service." Test which category matches how your target customers phrase their searches. (2) Complete every profile field — services, business description (use keyword-rich copy, 750 characters), products, attributes (women-led, veteran-led, etc. if applicable). (3) Post to your GBP at minimum once per week — Google's algorithm treats post frequency as a signal of active management. (4) Respond to every review within 24 hours, both positive and negative. Response rate and recency affect local ranking.</p>

      <h2>Citation consistency — the hidden ranking signal</h2>
      <p>Local citations are mentions of your business name, address, and phone number (NAP) across directories: JustDial, Sulekha, IndiaMART, Yellow Pages India, Yelp (increasingly relevant), and dozens of smaller directories. Google cross-references these citations to verify that your business is a real, consistently-named entity at a real, consistent address.</p>
      <p>The problem most Mohali businesses have: their NAP varies across listings. "RC Tech Solutions" on one site, "R.C. Tech Solutions Pvt. Ltd." on another, "RC Tech" on a third, with the Sector 82 address spelled differently across all of them. This inconsistency sends a signal that the business information is unreliable, which suppresses local rankings.</p>
      <p>Audit your citations using a tool like BrightLocal's Citation Tracker or manually search for your business name in quotes and check 15–20 listings. Fix inconsistencies by claiming and updating each listing. This is tedious but it has a measurable, lasting effect on Map Pack rankings.</p>

      <h2>Local landing pages for service+location combinations</h2>
      <p>If you serve multiple cities or areas in Punjab — Mohali, Chandigarh, Panchkula, Ludhiana, Amritsar — create a dedicated service page for each significant location/service combination. "Web development services in Chandigarh" and "web development services in Mohali" are different searches with different intent, and a single generic "services" page can't rank for both effectively.</p>
      <p>Each local landing page needs: a location-specific H1 ("Web Development Company in Chandigarh"), the location mentioned naturally in the first paragraph, a LocalBusiness schema with that location's specifics, client testimonials or case studies from that area if available, and a Google Maps embed for that office location.</p>
      <p>This approach multiplies your organic footprint significantly. Five service types across three cities is 15 pages, each targeting a distinct, rankable keyword with specific commercial intent.</p>

      <h2>Review velocity — how to build it ethically</h2>
      <p>The volume and recency of Google reviews affects Map Pack ranking. A business with 45 reviews spread over 4 years, with the last review 8 months ago, is at a disadvantage compared to a business with 30 reviews and one posted last week. Recency matters.</p>
      <p>Ethical review acquisition strategies: Send a personalised follow-up email to every client 7–14 days after project completion with a direct link to your Google review form (get this link from GBP → Get more reviews). Add the review request to your project closure checklist so it's never forgotten. If you have a WhatsApp group with the client, send a personal note from Rahul specifically — a request from the founder lands differently than a templated email from "the team."</p>
      <p>Don't incentivise reviews with discounts or gifts — this violates Google's guidelines and risks GBP suspension. Do make it easy: provide the direct link, tell them it takes 2 minutes, and thank them when they do it.</p>

      <h2>Content targeting local search intent</h2>
      <p>Blog content targeting local intent accelerates both organic rankings and GBP authority. Useful topic angles for Punjab-area audiences: "How much does website development cost in Chandigarh," "Best e-commerce platforms for Ludhiana garment businesses," "How to rank a local restaurant in Mohali on Google Maps," "Digital marketing checklist for Punjab small businesses." These answer real questions people in the area are searching and establish topical authority in the local context.</p>
    `,
  },
  {
    id: "website-cost-india-2026",
    category: "Web Development",
    title: "How Much Does a Website Cost in India in 2026? An Honest Breakdown",
    readTime: "7 min read",
    body: `
      <p>Website pricing in India ranges from ₹5,000 for a template-based builder site to ₹15 lakh or more for a complex custom application. The variance is enormous, and the relationship between price and quality is less linear than most buyers assume. This guide breaks down what you're actually paying for at each price point, where you get good value, and where the hidden costs live.</p>

      <h2>The ₹5,000–₹15,000 range: what you get and what you sacrifice</h2>
      <p>At this price point, you're looking at a template-based site built in Wix, Squarespace, or a shared-hosting WordPress installation using a pre-built theme. The site will look reasonable — modern templates are genuinely good-looking — but it will underperform on every technical metric that affects SEO and conversion.</p>
      <p>Page load times on shared hosting WordPress with a heavy template typically run 5–9 seconds on mobile. The theme will ship with every feature enabled whether you use them or not, loading CSS and JavaScript you don't need. The hosting cost may be included for year one and then jump significantly in year two. You will not get proper schema markup, a dynamic sitemap, or correct canonical tags. Custom elements require paid plugins that add to cost and complexity over time.</p>
      <p>This price point is appropriate for: a personal portfolio that exists mainly for reference, a business that needs an online presence more than online performance, or a placeholder site while a more substantial build is planned.</p>

      <h2>The ₹20,000–₹60,000 range: the most important decision zone</h2>
      <p>This is where the majority of Indian small business websites live, and where the variance in quality is highest. A ₹40,000 website from a skilled developer using a solid tech stack will outperform a ₹40,000 website from a generalist using a bloated template every single time. The price is similar; the outcome is dramatically different.</p>
      <p>At the lower end of this range, you'll find WordPress builds with better themes and some customisation — page builders like Elementor or Divi, proper hosting (Hostinger Business or similar), basic SEO plugin setup, and some attention to speed. At the upper end, you'll find sites built in frameworks like Next.js with proper component architecture, server-side rendering, and genuine technical SEO built in from the start.</p>
      <p>Questions that distinguish a good ₹30,000 web development project from a bad one at the same price: What is the hosting solution and what are the renewal costs? How is metadata managed? Can you show me a PageSpeed score from a recent comparable project? How is the sitemap generated? What happens when I want to add new pages after launch — is there a CMS, and is it included?</p>

      <h2>The ₹75,000–₹2,00,000 range: custom builds with real commercial impact</h2>
      <p>This is the range where websites stop being cost centres and start being revenue assets. A well-executed ₹1,00,000 Next.js build with proper SEO architecture, a custom CMS, correctly implemented schema markup, and optimised Core Web Vitals can rank for commercial keywords and generate inbound leads worth significantly more than the development cost within 6–12 months.</p>
      <p>At this range you should expect: a discovery and planning phase, wire-frames before visual design begins, a staging environment for testing, a handover session where you're shown how to manage the CMS, post-launch monitoring for at least 30 days, and enough developer time to get the technical foundations genuinely right rather than "good enough."</p>
      <p>E-commerce builds at this range can include: product catalog management, Razorpay or Cashfree payment integration, inventory tracking, order management, and basic shipping integration. More complex e-commerce (1,000+ SKUs, complex pricing rules, custom checkout flows) should budget ₹2,00,000 and above.</p>

      <h2>Ongoing costs that are often missed in the initial quote</h2>
      <p>Hosting: A shared hosting plan at ₹3,000/year gives you slow shared resources. A quality VPS or managed Next.js hosting (Vercel Pro, Railway, or a DigitalOcean droplet) runs ₹1,500–₹5,000 per month depending on traffic. For a growing business, budget ₹24,000–₹60,000 per year for hosting, not ₹3,000.</p>
      <p>Domain: ₹700–₹1,500 per year for a .com, ₹300–₹800 for a .in. Renew it — an expired domain loses all its accumulated SEO value.</p>
      <p>SSL certificate: Should be included with any modern hosting. If a developer charges separately for SSL, it's a red flag about the hosting quality.</p>
      <p>Content updates: Who adds new pages, blog posts, and images after launch? If the developer charges per change, budget this. A CMS (WordPress, Sanity, or a custom Next.js admin panel) where you can make basic updates yourself pays for itself quickly.</p>
      <p>SEO maintenance: A website with no ongoing SEO investment will be overtaken by competitors who are publishing content, building citations, and improving their technical foundations. Budget at minimum ₹5,000–₹15,000 per month for basic SEO maintenance if organic search is part of your growth strategy.</p>
    `,
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--rc-paper)" }}>
      {/* Hero */}
      <section className="border-b border-[var(--rc-wire)] rc-grid-bg">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <span className="rc-eyebrow block mb-4" style={{ color: "var(--rc-trace)" }}>
            Free resources · RC Tech Solutions
          </span>
          <h1 className="rc-display text-4xl sm:text-5xl font-semibold text-[var(--rc-ink)] leading-tight max-w-2xl">
            Guides, checklists, and honest advice on web growth.
          </h1>
          <p className="rc-body mt-5 text-lg text-[var(--rc-ink-soft)] max-w-xl leading-relaxed">
            In-depth articles on web development, SEO, and digital marketing for Indian startups and SMEs —
            written by the team actually doing the work, not a content agency.
          </p>
        </div>
      </section>

      {/* Articles */}
      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-14 space-y-0">
        {ARTICLES.map((article, i) => (
          <article
            key={article.id}
            id={article.id}
            className="border-b border-[var(--rc-wire)] py-12 scroll-mt-20"
          >
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="rc-mono text-[0.65rem] uppercase tracking-wider" style={{ color: "var(--rc-trace)" }}>
                  {article.category}
                </span>
                <span className="rc-mono text-[0.65rem] text-[rgba(42,45,53,0.5)]">
                  {article.readTime}
                </span>
              </div>
              <h2 className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)] leading-snug">
                {article.title}
              </h2>
              <p className="rc-mono text-[0.65rem] mt-3 text-[rgba(42,45,53,0.5)]">
                By Rahul Chauhan · RC Tech Solutions, Mohali
              </p>
            </header>

            <div
              className="prose prose-lg max-w-none rc-body"
              style={{
                "--tw-prose-body": "var(--rc-ink-soft)",
                "--tw-prose-headings": "var(--rc-ink)",
                "--tw-prose-bold": "var(--rc-ink)",
                "--tw-prose-links": "var(--rc-circuit)",
              }}
              dangerouslySetInnerHTML={{ __html: article.body }}
            />

            <div className="mt-8 pt-6 border-t border-[var(--rc-wire)] flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="rc-mono text-xs uppercase tracking-wider px-5 py-2.5 bg-[var(--rc-ink)] text-[var(--rc-paper)] hover:bg-[var(--rc-circuit)] transition-colors"
              >
                Discuss this with us →
              </a>
              <a
                href="/blogs"
                className="rc-mono text-xs uppercase tracking-wider px-5 py-2.5 border border-[var(--rc-wire)] text-[var(--rc-ink)] hover:border-[var(--rc-ink)] transition-colors"
              >
                More from the journal
              </a>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
