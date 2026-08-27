# RC Tech Solutions — Complete SEO-Revamped Project

This is your FULL project — every existing file preserved, plus all SEO/performance fixes applied directly. Unzip and deploy as-is.

---

## What's identical to your original
Every component, page, API route, admin panel, Firebase config, and all 252 files are here. Nothing was deleted except one file (see below).

## What changed (and why)

### Core SEO infrastructure
| File | Fix |
|---|---|
| `app/layout.js` | AdSense bare `<script>` (render-blocking) → `<Script strategy="afterInteractive">`. Removed global `keywords` that were overriding page-specific ones. Added `verification` and `other` meta fields. |
| `app/page.js` | Added `LocalBusiness` schema (critical for "web development Mohali" local pack), `FAQPage` schema (5 Q&As, shows directly in Google), `WebSite` schema with SearchAction. Keyword-rich title/description. |
| `app/blogs/page.js` | Added `export const revalidate = 3600` — ISR caching means Googlebot gets static HTML instead of a fresh Firestore read every visit. Added Blog schema listing first 10 posts. Fixed missing og:image reference. |
| `app/blogs/[slug]/page.js` | Fixed `author` schema from `Organization` → `Person` (required for Google article rich results). Added `BreadcrumbList` schema. Added a "related posts" section (same-category articles) to reduce bounce rate. Added `wordCount`/`articleSection` to BlogPosting schema. Dynamic `FAQPage` schema reads from a `blog.faqs` Firestore field if present. |
| `app/sitemap.js` (replaces `app/sitemap.xml/route.js`) | Now auto-generates from ALL Firestore blog slugs plus every static page (services, about, contact, ebook, webinars, legal pages). This is the single biggest lever for how many blog posts Google discovers. |
| `app/components/HeroSection.js` | Removed `next/head` import — it silently does nothing in App Router (Next 13+), so your hero meta tags were never applied. Single semantic `<h1>` with primary keyword. Proper image `width`/`height` to prevent layout shift. |
| `app/globals.css` | Appended (nothing removed) clean `.prose` typography for blog content, accessibility focus states, reduced-motion support. |
| `next.config.mjs` | Added AVIF/WebP auto-serving, 1-year cache headers on static assets, security headers (X-Frame-Options, Referrer-Policy, etc.), gzip compression. All your existing `remotePatterns` kept untouched. |
| `public/robots.txt` | Blocks `/admin/` and `/api/` from indexing. Points to the sitemap. Blocks GPTBot/Google-Extended/CCBot AI training crawlers. |
| `app/about/page.js` | Added `Person` schema for Rahul Chauhan + `BreadcrumbList`. Added missing `keywords` field. |
| `app/services/web-development/page.js` | **Bug fix**: the meta description and OG description had corrupted/duplicated text glued together (a leftover from a bad find-replace). Cleaned up to readable, correct copy. |
| `app/services/devops-and-cloud/page.js` | **Bug fix**: canonical URL was incorrectly pointing to `/services/cloud-integration` instead of itself — this was telling Google these two distinct pages were duplicates, hurting both rankings. Fixed to self-reference. |

### One file removed
- `app/sitemap.xml/route.js` → replaced by `app/sitemap.js`, which is Next.js's native sitemap convention. It auto-generates valid sitemap XML with zero manual XML string-building, and is the modern best practice.

---

## Required manual steps (can't be automated — need your input/assets)

### 1. Create 3 OG images (1200×630px)
Referenced in metadata but don't exist yet:
- `public/og/home-cover.jpg`
- `public/og/blogs-cover.jpg`
- `public/og/about-cover.jpg`

Use Figma, Canva, or https://og-image.vercel.app — include your logo + a one-line tagline.

### 2. Compress these oversized images
Your `/public` folder has several images far larger than they need to be for web:

```
14 MB  public/1.jpg            → compress to < 150 KB (WebP)
13 MB  public/Profile.svg      → convert to WebP/JPG, < 100 KB
3.5 MB public/unnamed.png      → < 150 KB
2.4 MB public/bg.jpg           → < 100 KB
1.8 MB public/services.png     → < 80 KB
1.8 MB public/bgt.jpg          → < 100 KB
1.2 MB public/service.jpg      → < 80 KB
1.1 MB public/services.jpg     → < 80 KB
```

Fastest way: drag them into https://squoosh.app one at a time, export as WebP at quality 80, replace the originals (keep the same filename so no code references break).

### 3. Add real Google Search Console verification token
In `app/layout.js`, replace:
```js
verification: { google: "your-google-search-console-token" }
```
with your real token from Search Console → Settings → Ownership verification → HTML tag.

### 4. (Optional, high-impact) Add FAQs to individual blog posts
In your Firestore `blogs` collection, add a `faqs` array to any post you want FAQ rich results for:
```json
{
  "faqs": [
    { "question": "What is X?", "answer": "X is..." },
    { "question": "How does Y work?", "answer": "Y works by..." }
  ]
}
```
The `[slug]/page.js` will automatically pick this up and inject FAQPage schema.

---

## Deploy checklist

- [ ] Unzip and `npm install`
- [ ] Add the 3 OG images
- [ ] Compress the 8 oversized images listed above
- [ ] Replace the Search Console verification placeholder
- [ ] `npm run build` to confirm it builds cleanly
- [ ] Deploy
- [ ] Submit `https://www.rctechsolutions.com/sitemap.xml` to Google Search Console
- [ ] Submit the same sitemap to Bing Webmaster Tools
- [ ] Run https://pagespeed.web.dev on your homepage and a blog post — compare to your pre-revamp scores

---

## Round 2 additions — internal service pages, lead forms, AdSense, blog redesign

### New reusable components
| File | Purpose |
|---|---|
| `app/components/ServiceLeadForm.js` | Lead-capture form wired to your existing SheetDB endpoint (same one as `/contact`). Tags every submission with a `service` and `source` field so you know exactly which page generated the lead. Used on all 9 new sub-service pages, each with its own custom heading/subheading copy. |
| `app/components/AdSlot.js` | Reusable AdSense `<ins>` unit. Pass a `slot` ID (create these in your AdSense dashboard) and it self-registers on mount. Used for in-article and sidebar placements. |
| `app/components/ReadingProgressBar.js` | Thin gradient bar fixed to the top of the viewport, fills as the reader scrolls through a blog post — a small but effective engagement/featuristic touch. |

### 9 new internal service pages (all indexable, all with custom lead forms)
**Web Development:**
- `/services/web-development/ecommerce-development`
- `/services/web-development/custom-cms-development`
- `/services/web-development/progressive-web-apps`

**SEO:**
- `/services/seo/technical-seo-audit`
- `/services/seo/local-seo-services`
- `/services/seo/keyword-research-content-strategy`

**Digital Marketing:**
- `/services/digital-marketing/social-media-management`
- `/services/digital-marketing/google-ads-campaigns`
- `/services/digital-marketing/email-marketing`

Each page includes: full SEO metadata (title/description/keywords/OG/Twitter), `Service` + `FAQPage` + `BreadcrumbList` JSON-LD schema, a dark hero with a sticky lead form, a "what's included" grid, a 4-step process section, and an FAQ accordion. All copy is unique per page — not templated filler — written around what that specific service actually involves.

**Why only 3 categories, 9 pages:** these are your highest commercial-intent categories (people searching "ecommerce development Mohali" or "google ads agency Punjab" are closer to ready-to-buy than someone searching generic "web development"). This is intentionally the highest-leverage subset rather than diluting effort across all 7 categories at once. The same `ServiceLeadForm` + page template can be reused to extend this to Cloud, DevOps, Mobile Apps, AI, and Branding sub-services whenever you're ready.

### Parent service pages now link to their sub-pages
`web.js`, `seoo.js`, and `marketing.js` (the components behind `/services/web-development`, `/services/seo`, `/services/digital-marketing`) had service cards that previously went nowhere. The cards matching the 9 new pages now link through; the rest still display normally but show "Coming Soon" instead of a dead "Learn More" link — so nothing looks broken, and you have a clear list of what to build next.

### Blog redesign — readability + AdSense
`app/blogs/[slug]/page.js` content rendering changed from one giant `dangerouslySetInnerHTML` blob to three content chunks, split at the ~35% and ~70% marks of the post:
- Chunk 1 → **AdSlot** (in-article, fluid layout) → Chunk 2 → **AdSlot** → Chunk 3
- This places ads after roughly the 2nd and 4th visual blocks without ever breaking mid-paragraph or mid-sentence (the split happens at the HTML node boundary level, never inside text).
- A third AdSlot sits in the sidebar, inside its own card so it doesn't compete visually with the "Work with RC Tech" CTA above it.
- Typography upgraded: `prose-lg`, larger paragraph line-height (1.85), larger base font size (17px) — this is the single biggest lever for "feels authentic and easy to read" versus a cramped corporate blog.
- A `ReadingProgressBar` now renders fixed at the top of every blog post.
- `app/blogs/page.js` (the listing page) also got one ad slot between the featured post and the grid — never above the fold, so it doesn't hurt first impressions or Core Web Vitals.

### Required AdSense setup
The `AdSlot` component uses placeholder slot IDs (`1111111111`, `2222222222`, `3333333333`, `4444444444`). Replace these with real ad unit IDs from your AdSense dashboard:
1. Go to AdSense → Ads → By ad unit → create 4 units (2 in-article, 1 display/sidebar, 1 in-feed)
2. Copy each unit's `data-ad-slot` value
3. Find-and-replace the placeholder IDs in `AdSlot` usages across `app/blogs/[slug]/page.js` and `app/blogs/page.js`

### Sitemap updated
`app/sitemap.js` now includes all 9 new sub-service URLs at priority 0.75, so Google discovers them immediately on next crawl.


---

## Slug preservation — confirmed

`generateStaticParams()` in `[slug]/page.js` still reads every slug directly from Firestore, exactly as your original did. Zero existing indexed blog URLs change or break. The 9 new service pages are entirely new URLs and don't touch or rename anything that already existed or is indexed.

---

## Round 3 — real visual identity (not a template pass)

The previous round shipped functional pages but with generic SaaS-template styling — indigo gradients, default Tailwind grays, rounded shadow cards. This round replaces that with an actual brand identity designed for RC Tech Solutions specifically.

### The design concept: circuit-trace / blueprint
RC Tech builds digital infrastructure — the visual language now borrows from PCB traces, schematic diagrams, and engineering blueprints, instead of looking like every other AI-generated agency site. This is deliberately not the "warm cream + serif" or "near-black + single accent" defaults — it's a third thing, grounded in what the business actually does.

**Palette:** warm ink (`#0B0E14`), warm paper (`#F6F2E9`, deliberately grittier than a soft editorial cream), signature vermilion-orange (`#FF5A1F`) for CTAs and accents, a deep circuit-green (`#2D5F4C`) as secondary, plus hairline "wire" gray for borders.

**Type system:** Fraunces (a characterful variable serif) for display headlines, IBM Plex Sans for body copy — both chosen because IBM Plex was literally designed for an engineering company (IBM), which fits the brief. IBM Plex Mono is the "schematic" layer — used only for eyebrows, labels, stats, and nav, never for body copy. This three-role type system replaces the single generic Poppins font used everywhere before.

**Signature element:** `app/components/CircuitTrace.js` — an animated SVG trace line with glowing via-nodes that draws itself on scroll using `stroke-dashoffset`. It appears as a section divider between hero/footer/blog sections, literally tying the page together like a motherboard trace. This is the one memorable, repeatable visual device — used deliberately, not scattered as decoration everywhere.

**Cards:** replaced rounded-corner drop-shadow cards with `rc-blueprint-card` — hairline borders with corner brackets that light up on hover, like a schematic component outline.

### Files rebuilt with the new identity
- `app/globals.css` — design tokens (`:root` custom properties) plus the `.rc-*` utility class system, appended without touching any pre-existing styles
- `app/layout.js` — added Fraunces, IBM Plex Sans, IBM Plex Mono via `next/font/google`, alongside the existing Poppins (kept for backward compatibility with components not yet migrated)
- `app/components/HeroSection.js` — full rebuild. The signature "build readout" panel (Lighthouse score, TTFB, projects shipped, retention rate) replaces the old generic split-hero, with the CircuitTrace as a literal divider at the bottom
- `app/components/Header.js` — full rebuild. The "AI is Coming Soon" purple pill (decorative, didn't link anywhere) is gone. Mobile menu now shows numbered nav items (`01 Home`, `02 Services`...) in oversized Fraunces type
- `app/components/Footer.js` — full rebuild, and **fixed a real bug**: the newsletter form was posting to `https://sheetdb.io/api/v1/YOUR_SHEETDB_API_URL` — a literal placeholder that was never replaced, so the original footer newsletter signup silently failed on every submission. Now points to the same working SheetDB endpoint used elsewhere
- `app/components/LatestBlogs.js` — rebuilt, removed the purple gradient heading and generic shadow cards
- `app/components/ServiceLeadForm.js` — restyled to match (was generic indigo/rounded before)
- All 9 sub-service pages — regenerated with the new dark hero + blueprint cards + numbered process steps

### Blog: editorial-grade readability
`app/blogs/[slug]/page.js` and `app/blogs/page.js` were rebuilt as an actual editorial product ("the journal") rather than a generic blog template:
- Masthead-style headers with eyebrow category labels in mono type
- Fraunces serif headlines at proper display sizes (not Tailwind defaults)
- Body copy at 17px/1.85 line-height — genuinely comfortable reading measure
- Grid-based card layouts with 1px hairline gaps (newspaper/index-card feel) instead of rounded shadow cards
- Numbered "issue" framing on blog cards reinforces the editorial concept

### Dynamic, self-updating infrastructure files
- **`app/sitemap.js`** (already existed from round 1) — kept
- **`app/robots.js`** — new. Replaces the static `public/robots.txt` using Next.js's native `robots.js` convention. Same rules as before (blocks `/admin/`, `/api/`, AI training crawlers) but now guaranteed to never drift out of sync with the sitemap URL
- **`app/llms.txt/route.js`** — new. Replaces the static `public/llms.txt`, which was hand-written and already missing the blogs section and several service pages. The new route fetches live blog titles from Firestore on every request (cached hourly), so it's never stale, and includes all 9 new sub-service pages

### What's still on the old generic styling (next pass candidates)
To keep this round shippable, the following were **not** restyled and still use the original generic design — flagging for a follow-up pass:
- `app/about/aboutus.js` (184 lines, CRLF line endings, large existing component)
- `app/contact/contactuss.js`
- Service category pages' internal content (`web.js`, `seoo.js`, `marketing.js` keep their existing card grids — only the `ServiceCard` component was patched to add links, not restyled)
- `Quiz.js`, `Timeline.js`, `Result.js`, `CTASection.js`, `FAQSection.js`, `TrustedBrands.js`, `capabilities.js` and other homepage sections below the hero

These all still render correctly and aren't broken — they just don't yet carry the new circuit-trace/blueprint identity. The token system (`--rc-ink`, `--rc-circuit`, `.rc-display`, `.rc-blueprint-card`, etc.) is now in place in `globals.css`, so extending the identity to these sections is a matter of applying the existing classes, not inventing new design language.
