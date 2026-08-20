# SEO Fixes — Changelog

Everything below was fixed directly in this codebase. Files not listed here
are untouched from what you uploaded.

## New files

- **`app/lib/media.js`** — helper that rewrites WordPress media URLs to
  route through your own domain instead of the Hostinger staging host.
- **`app/api/media/route.js`** — the actual proxy endpoint
  (`/api/media?url=...`) that fetches from WordPress server-side and
  re-serves the image bytes from `rctechsolutions.com`, cached hard
  (30 days upstream, 1 year at the browser/CDN).

## Modified files

| File | What changed | Why |
|---|---|---|
| `app/lib/wordpress.js` | All image fields (`blogImageUrl`, project `imageUrl`/`images`, webinar `imageUrl`) now pass through `proxiedMediaUrl()`. Added `safeTruncate()` helper, replacing hard `.slice(0,160)` calls that cut meta descriptions mid-word. `fetchAllWPSlugs`, `fetchAllWPProjectSlugs`, `fetchAllWPWebinarSlugs` now also return each item's real `modified` date. | Root cause fix for images being attributed to the wrong domain in Google Images / social previews. Real `modified` dates feed the sitemap fix below. |
| `app/sitemap.js` | Static pages use a fixed, honest deploy-date constant (`SITE_LAST_DEPLOYED`) instead of `new Date()`. Blog/project/webinar URLs use their real WordPress `modified` date. | Previously every URL — including pages that rarely change, like Privacy Policy — reported an identical, constantly-shifting "just changed!" timestamp on every build. Google tends to discount `lastmod` once it notices that pattern. |
| `app/layout.js` | `verification.google` now reads from `NEXT_PUBLIC_GSC_VERIFICATION` env var; omitted entirely if unset. | Was shipping the literal placeholder string `"your-google-search-console-token"` to production. |
| `app/robots.js` | Added an explicit `allow: "/api/media"` alongside the existing `disallow: "/api/"`. | Without this, the new image proxy (which lives under `/api/`) would be blocked from Googlebot-Image and social-share scrapers (Facebook, WhatsApp, LinkedIn) — defeating the whole fix. |
| `app/blogs/[slug]/page.js` | Title no longer manually appends `"| RC Tech Solutions"`; fallback title fixed too. | Root layout already applies a `"%s \| RC Tech Solutions"` title template — the manual suffix was doubling it (confirmed live on your Dubai blog post). |
| `app/projects/[slug]/page.js` | Same title-doubling fix. | Same reason. |
| `app/webinars/[id]/page.js` | Same title-doubling fix. Meta description now uses `safeTruncate()` instead of hard `.slice(0,160)`. | Same reasons as above. |
| `app/blogs/page.js` | Title-doubling fix. | Same reason. |
| `app/webinars/page.js` | Title-doubling fix. | Same reason. |
| `app/page.js` | Title-doubling fix (homepage). | Same reason — your most important page's `<title>` was affected too. |
| `app/contact/page.js` | Removed redundant "RC Tech Solutions" baked into the title text itself (title template adds it once already). | Same underlying bug, different shape (brand name embedded mid-string rather than as a trailing suffix). |
| `app/about/page.js` | Same fix as contact. | Same reason. |
| 17 service/listing pages under `app/services/**`, `app/projects/page.js`, `app/resources/page.js` | Title-doubling fix, script-applied. | Same systemic bug, confirmed present on essentially every page in the site. |
| `app/services/web-development/web.js` | Removed a dead, unused `metadata` export. | This file is a component (imported into `page.js`), not itself a `page.js` — Next.js App Router never reads `metadata` exports from plain components, so this was inert dead code. |
| `.env.local` | Added `NEXT_PUBLIC_GSC_VERIFICATION=` (blank). | Supports the `layout.js` fix above — **you need to fill this in with your real token, see below.** |

## Deleted files

- `app/about/metadata.js` — dead code, never imported anywhere, and had
  stale/wrong info (said "Chandigarh", "founded 2022" instead of your
  actual Mohali / 2021 details used elsewhere on the site).
- `app/about/a.js` — empty stray file.

## Manual steps still required (can't be done from code)

1. **Fill in your real GSC verification token.** In `.env.local`, set:
   ```
   NEXT_PUBLIC_GSC_VERIFICATION=your-actual-token-here
   ```
   Get it from Search Console → the **URL-prefix property**
   (`https://www.rctechsolutions.com/`) → Settings → Ownership
   verification → HTML tag → copy only the `content="..."` value.

2. **Redeploy.** None of these fixes take effect until you push this to
   Vercel (or wherever it's hosted).

3. **Request re-indexing** in Search Console (URL Inspection → Request
   Indexing) for a handful of your most important pages after deploying —
   homepage, `/about`, `/contact`, and your 2–3 best blog posts — to nudge
   Google to re-crawl with the fixes live rather than waiting for its own
   schedule.

4. **Rewrite the thin "1 min read" blog posts** — that's WordPress content,
   not code, so it has to happen in the CMS itself (still the single
   biggest lever on Page Trust, per the earlier audit).

5. **Re-run the SE Ranking / backlink report in 4–6 weeks** to confirm the
   disavow file processed and check whether Domain/Page Trust has moved.

---

## Round 2 — structured data + dependency audit

### Fixed

| File | Issue | Fix |
|---|---|---|
| `app/components/ServicePageLayout.js` | Was a Client Component (`'use client'`) that could render JSON-LD via `dangerouslySetInnerHTML` if a `schema` prop was passed. Structured data rendered only after client hydration is a real risk — Google's own guidance is that it should be reliably present in server-rendered HTML, and non-JS-executing consumers (some rich-result validators, social unfurl bots) can miss it entirely. No page currently passes a `schema` prop (confirmed via search — 0 usages), so this wasn't live-broken, but the mechanism was primed to be used incorrectly. | Removed the `schema` prop and rendering block from this Client Component entirely, with a comment pointing future edits to the correct pattern: render `<script type="application/ld+json">` directly in the route's `page.js` (a Server Component), as already done correctly in `app/about/page.js` and `app/blogs/[slug]/page.js`. |
| `app/components/SeoSchema.js` | Deleted — dead code (zero imports anywhere in the codebase) that had the exact same client-rendering anti-pattern baked in. | Removed to prevent it from being picked up and used later. |
| `package.json` | 33 dependencies were listed but had **zero usage anywhere in the repo** — not just unused in `app/`, unused everywhere (verified via exhaustive grep, including `.env` files for API keys that would hint at server-side-only usage). This included: 2 unused animation libraries (`gsap`, the malformed `motions` package), a full unused UI kit (`@mui/material` + both `@emotion/*` packages), 2 unused icon libraries (`@fortawesome/fontawesome-free`, `@heroicons/react`), an unused rich-text editor suite (`react-quill-new` + all 6 `@tiptap/*` packages), an unused charting library (`chart.js` + the suspicious/likely-typo `chartjs-2`), an unused carousel (`react-slick` + `slick-carousel`), `next-seo` (a Pages-Router-era SEO package — irrelevant now that this project correctly uses the App Router's native Metadata API), `selenium-webdriver` (browser automation — should never be in production `dependencies` even if used, let alone unused), `@prisma/client` + `prisma` (no schema file exists anywhere in the repo), `openai`, `cors`, `cheerio`, `socket.io-client`, `@google/model-viewer`, `react-chatbot-kit`, `react-share`, `react-intersection-observer`, `react-parallax-tilt`, `@fontsource/poppins` (redundant with the already-correct `next/font/google` Poppins setup in `layout.js`). | Removed all 33 confirmed-unused packages. Kept everything with confirmed real usage: `framer-motion`, `lucide-react`, `react-icons`, `swiper`, `react-scroll-parallax`, `react-google-recaptcha`, `razorpay`, `axios`, `nodemailer`, `node-html-parser`, `tailwind-scrollbar-hide`, plus core Next/React/tooling. Regenerated `package-lock.json` to match (`npm install --package-lock-only`) — verified zero references to any removed package remain in the lockfile. |

### Confirmed already correct (no action needed)

- **Fonts**: all four `next/font/google` fonts already use `display: "swap"` — no invisible-text-on-load (FOIT) issue.
- **Third-party scripts**: GTM, Razorpay checkout, and AdSense already use `next/script` with `strategy="afterInteractive"` — non-render-blocking (this was evidently fixed in a prior round; comment in the code confirms it).
- **LCP image**: the homepage hero image (`app/components/HeroSection.js`) already has the `priority` prop set correctly.
- **Responsive images**: blog listing/featured images using `fill` already specify correct `sizes` attributes — avoids Next.js serving oversized images to small viewports.

### Noted, not fixed (needs your input, not a code-only fix)

- **7 service category pages have zero structured data**: `cloud-integration`, `devops-and-cloud`, `mobile-apps`, `digital-marketing` (overview), `seo` (overview), `ai-powered`, `digital-branding` — unlike their sub-service pages (e.g. `technical-seo-audit`, `ecommerce-development`), which do have inline `Service`/`FAQPage` JSON-LD. Adding real FAQ/Service schema to these 7 would help rich-result eligibility, but needs actual FAQ content and service details from you rather than fabricated placeholder text — happy to draft this once you share what each page's real FAQs should say, using the now-corrected server-rendered pattern.
- **Icon library duplication**: both `react-icons` (16 files) and `lucide-react` (3 files) are actively used side-by-side. Not incorrect, just slightly redundant bundle weight — consolidating to one would be a larger refactor touching 19 files, so flagged rather than done unilaterally.

---

## Round 3 — structured data for the 7 service pages (AEO)

Added `Service` + `FAQPage` + `BreadcrumbList` JSON-LD to all 7 service
category pages that previously had none: `cloud-integration`,
`devops-and-cloud`, `mobile-apps`, `digital-marketing`, `seo`,
`ai-powered`, `digital-branding`.

**No FAQ content was invented.** Each page already had genuine, specific
FAQ copy (real prices, timelines, and direct answers) written into its
`CONFIG.faqs` array and rendered visibly via the FAQ accordion — it just
wasn't wired into structured data.

### What changed

- **New file: `app/lib/serviceSchema.js`** — a `buildServiceSchema()`
  helper that takes a page's `CONFIG` object and returns valid
  `Service`/`BreadcrumbList`/`FAQPage` JSON-LD.
- **Exported `CONFIG`** from each of the 7 child components (`cloud.js`,
  `devcl.js`, `mob.js`, `marketing.js`, `seoo.js`, `ai.js`, `branding.js`)
  so `page.js` can import the exact same object that renders the visible
  page.
- **Each `page.js`** now renders `<script type="application/ld+json">`
  server-side (this is a Server Component, not the Client Component
  `ServicePageLayout` — see Round 2 notes on why that matters), built from
  `CONFIG.intro` and `CONFIG.faqs`.

### Why built this way, not hand-typed schema

Google's structured-data policy requires `FAQPage` schema to match what's
actually visible on the page. Hand-typing a separate schema object next to
the visible FAQ list creates a drift risk: six months from now someone
edits an FAQ answer in `CONFIG.faqs` (which changes the visible page) and
forgets a separate schema copy exists elsewhere — now schema and the page
disagree, which is exactly the "schema doesn't match content" pattern
Google's manual actions target. Importing `CONFIG` directly makes that
drift structurally impossible — there's only one copy of the FAQ content
to ever edit.

### AEO angle

Answer engines (Google AI Overviews, Perplexity, Bing Copilot) lift direct
answers from pages that pair genuinely specific content with machine-
readable markup. This codebase's FAQ answers were already AEO-shaped —
concrete numbers ("₹15,000–4,000/month", "8–12 weeks", "20–35% savings")
instead of vague marketing language. `FAQPage` schema is what turns that
existing good copy into something an answer engine can actually extract
and cite, rather than just something a human reads after clicking through.

### Not done

- No `AggregateRating` / review schema was added anywhere — there's no
  real review data in the codebase to back it, and fabricating one is a
  Google spam-policy violation (review schema must reflect real reviews).
- No changes to the FAQ *content* itself — it was already good. This
  round only made it machine-readable.

---

## Round 4 — two runtime bugs from local `next dev` testing

You caught these by actually running the dev server — both are real, both
now fixed.

| Bug | Cause | Fix |
|---|---|---|
| Hydration mismatch on `<body>` (`data-new-gr-c-s-check-loaded`, `data-gr-ext-installed`) | Not our code — the Grammarly browser extension injects these attributes onto `<body>` before React hydrates, so they don't match server-rendered HTML. This is the exact scenario Next.js's own hydration-error docs list as safe to suppress. | Added `suppressHydrationWarning` to `<body>` in `app/layout.js`. Only silences mismatches on this one element's attributes — doesn't hide real hydration bugs elsewhere. |
| `Invalid src prop ... hostname "www.rctechsolutions.com" is not configured` on every blog/project/webinar image | **My bug from Round 1.** `proxiedMediaUrl()` correctly rewrites images to `https://www.rctechsolutions.com/api/media?url=...` — but `next/image` treats *any* absolute URL as "remote" and requires the host to be explicitly whitelisted in `next.config.mjs`, even when that host is your own domain. I added the proxy but forgot to whitelist it, so every proxied image broke at runtime. | Added `{ protocol: "https", hostname: "www.rctechsolutions.com" }` to `images.remotePatterns` in `next.config.mjs`. |

### Also fixed while in there (not yet a reported bug, but would have been)

`app/lib/media.js`'s `SITE_URL` was hardcoded to the production domain —
meaning even running `next dev` locally, before anything was deployed,
image URLs would point at `https://www.rctechsolutions.com/api/media?...`
instead of your local server. Now reads from `NEXT_PUBLIC_SITE_URL` (already
defined in `.env.local`), so local dev and production both resolve
correctly without code changes.

---

## Round 5 — three more issues found via your actual `next dev` console output

### 1. `next.config.mjs` remotePatterns was a single hardcoded host

After fixing the proxy to build URLs from `NEXT_PUBLIC_SITE_URL`, switching
that env var between `localhost:3000` (dev) and the production domain kept
breaking `next/image` one host at a time — I'd whitelist the production
domain, you'd switch to localhost for dev, and localhost wasn't
whitelisted. Root cause: `remotePatterns` was hardcoded to one fixed host
instead of deriving from the same env var the proxy itself uses.

**Fix:** `next.config.mjs` now has a `selfHostPattern()` function that
reads `NEXT_PUBLIC_SITE_URL` at config-load time and adds whatever host
(and port, if any) it points to — `localhost:3000` in dev,
`www.rctechsolutions.com` in production — automatically. No more manual
`next.config.mjs` edits every time you switch environments. The production
domain is also kept as a separate static entry as a safety net.

### 2. `.env.local` had the WordPress URL pasted into `NEXT_PUBLIC_SITE_URL` by mistake

You'd set `NEXT_PUBLIC_SITE_URL` to the same value as `WORDPRESS_URL`
(`https://darkorchid-swallow-640839.hostingersite.com`). These must always
be two different domains — `WORDPRESS_URL` is where content lives,
`NEXT_PUBLIC_SITE_URL` is this Next.js app's own address. Setting them
equal makes the image proxy think every image is "already home" and skip
proxying entirely — silently reverting to the exact staging-domain problem
Round 1 fixed. `.env.local` now has an explicit warning comment above this
variable spelling out the distinction, and the value is corrected back to
`http://localhost:3000` for local dev.

### 3. `⨯ upstream image response failed ... 404` for a batch of blog images

**This one is not a code bug.** The proxy correctly reached WordPress and
received a real `404 Not Found` — meaning those specific media files
(`web-development-chandigarh.png`, `web-development-internship.png`,
`website-development-company-in-lucknow.png`, and several others — notably
overlapping with the thin "1 min read" template-city posts flagged back in
the original audit) no longer exist in the WordPress Media Library at the
URL the post's `featured_media` field points to. This happens when a media
file gets deleted, moved, or a migration doesn't carry the `/uploads`
folder over completely.

**What I fixed on the code side (defensive, not root-cause):** the proxy
now redirects to a local placeholder image (`public/media-placeholder.png`,
generated to match the site's dark brand palette) instead of throwing a
hard 502 when the upstream file is missing. This means:
- Visitors see a clean branded placeholder instead of a broken-image icon
- The console stays quiet instead of logging a loud error on every request
- Google doesn't get served a broken image reference

**What you need to fix on the WordPress side (the actual root cause):** for
each affected post, open it in WP Admin, check the Featured Image field —
if it shows broken/missing, re-upload the image and re-attach it as the
featured image. This can't be fixed from the Next.js codebase since the
problem is that the file itself doesn't exist in your Media Library.

---

## Round 7 — "Sorry, you must be logged in to comment" persists after fixing Discussion Settings

Confirmed this text is **not hardcoded anywhere in the Next.js codebase** —
it only exists as a comment describing the WordPress requirement, in
`app/api/blogs/comments/route.js`. The actual error string comes straight
from WordPress's own REST API response (`data.message`), forwarded
through unchanged.

Since your Discussion Settings screenshot shows `comment_registration`
correctly unchecked, but the error still fires, the cause is one of a few
things I can't diagnose without seeing WordPress's raw response — so I
added temporary diagnostic logging (in `app/api/blogs/comments/route.js`,
clearly marked `TEMP DIAGNOSTIC`, safe to delete once resolved) that prints
to your terminal exactly what WordPress sent back, including its internal
error `code` (not just the human-readable message).

**Next step:** reproduce the comment error, then check your terminal
running `next dev` for a line starting `[comments POST] WordPress
rejected the comment:`. That log tells you which of these it is:

1. `code: "rest_comment_login_required"` — this really is WordPress's core
   `comment_registration` check firing, meaning the setting change hasn't
   taken effect server-side yet. Most common cause on Hostinger: a caching
   plugin (WP Super Cache, LiteSpeed Cache, W3 Total Cache) or host-level
   page cache still serving the old option value — check **Plugins** for
   anything cache-related and clear its cache.
2. A different `code` (often prefixed `wordfence_`, `rsssl_`, or similar)
   — a security plugin is blocking the REST API independently of core
   Discussion Settings. Check **Plugins** for security/firewall plugins
   and look for a REST API restriction setting inside them.
3. Compare the logged `wpUrl` against the exact site where you changed
   the setting — if you have more than one `*.hostingersite.com`
   install (common with Hostinger's free-tier staging domains), it's easy
   to edit settings on the wrong one.

Share what that log line shows and I can pinpoint the exact fix.

---

## Round 6 — raw HTML entities showing on-page and in search snippets

You caught this from a screenshot: the subtitle under a blog post title was
showing literal `&#8220;` / `&#8221;` text instead of curly quotes
(`"..."`). Root cause: WordPress's `excerpt.rendered` field comes back with
HTML entities encoded (numeric ones like `&#8220;` for curly quotes, named
ones like `&amp;` for "&"). The existing code stripped HTML *tags*
(`<p>`, `<span>`, etc.) but never decoded HTML *entities* — those are a
separate concern. Tags and entities both need handling, and in the right
order (strip tags, decode entities, then truncate — truncating before
decoding risks cutting an entity in half, leaving a broken fragment).

**This was more than cosmetic.** `blog.metaDescription` is the same field
used for the actual Google search-result snippet and the social-share
description (`og:description`) — so this bug meant every blog post's
Google listing and social preview could show raw `&#8220;` codes too, not
just the on-page subtitle.

### Fix

Added `decodeHtmlEntities()` and `cleanWpText()` (strip tags + decode
entities, in the correct order) to `app/lib/wordpress.js`, and applied them
everywhere a WordPress field is rendered as **plain text**:
- Blog `title` and `metaDescription`
- Project `title`
- Webinar `title` and `description`

**Deliberately left `content` unchanged** — the full blog post body is
rendered via `dangerouslySetInnerHTML` as real HTML, where the browser's
own HTML parser decodes entities automatically as part of normal markup
rendering. Running the decoder there too would be harmless but redundant;
the bug only affects fields inserted as plain text (where React does *not*
parse HTML and entities stay literal).

---

## Round 7 — "Sorry, you must be logged in to comment" despite correct WP settings

You confirmed via screenshots that Discussion Settings were already
correct (anonymous commenting allowed, registration not required) — yet
guest comments still failed with this exact error. This is a genuine,
widely-documented WordPress core gotcha, not a misconfiguration on your
end:

**Since WordPress 4.7, the REST API (`/wp-json/wp/v2/comments` — what this
site actually uses) blocks anonymous comment creation by default,
independently of the Discussion Settings checkbox.** That checkbox only
governs the legacy `wp-comments-post.php` form flow. The REST API has its
own separate gate (`rest_allow_anonymous_comments`, defaults to `false`)
that isn't exposed anywhere in WP Admin — it can only be changed with a
one-line code filter. Confirmed against WordPress core source
(`class-wp-rest-comments-controller.php`) and multiple independent
developer reports of the identical error message.

### New file: `wordpress-snippets/allow-anonymous-rest-comments.php`

A must-use plugin containing:
```php
add_filter( 'rest_allow_anonymous_comments', '__return_true' );
```
Upload to `wp-content/mu-plugins/` on your WordPress install (create that
folder if needed — no activation step required for mu-plugins). This is
the durable option; it survives theme changes/updates, unlike adding the
same line to `functions.php` directly (also fine, just less durable).

### `WORDPRESS_SETUP.md` updated

Section 6b now documents this REST-API-specific requirement explicitly,
so it isn't missed again on a future WordPress migration or fresh
install.

---

## Round 5 — two follow-up issues after local testing

### `next.config.mjs` didn't whitelist localhost

Whitelisting `www.rctechsolutions.com` (Round 4) fixed the production
case, but switching `NEXT_PUBLIC_SITE_URL` to `http://localhost:3000` for
local dev broke again — `next/image` requires *every* host it's asked to
load from to be explicitly whitelisted, and `localhost:3000` wasn't.

Rather than hardcode a second host and risk this happening a third time
(staging domain, a different port, etc.), `next.config.mjs` now derives
the entry from `NEXT_PUBLIC_SITE_URL` itself via a small `selfHostPattern()`
helper — whatever that env var is set to, `next/image` automatically
trusts it. The static `www.rctechsolutions.com` entry stays too, as a
safety net in case the env var is ever misconfigured in production.

### `.env.local` had `NEXT_PUBLIC_SITE_URL` set to the WordPress URL

This was a real mix-up worth flagging clearly: `WORDPRESS_URL` (where your
CMS content lives) and `NEXT_PUBLIC_SITE_URL` (where the Next.js app
itself runs) are two different domains. Setting the latter to the
WordPress URL would have made the image proxy build links like
`https://darkorchid-swallow-640839.hostingersite.com/api/media?url=...` —
but `/api/media` only exists on the Next.js app, not on WordPress, so
every image request would 404. Rewrote the comment in `.env.local` to make
this distinction explicit, and reset the value to `http://localhost:3000`
for local testing.

### Confirmed NOT a problem: blog pages and server-rendering

Worth confirming directly, since it was raised as a concern: both
`app/blogs/page.js` and `app/blogs/[slug]/page.js` are already `async
function` **Server Components** — no `'use client'` directive, no
`useEffect`/client-side data fetching. WordPress content is fetched
server-side and sent to Googlebot as fully-rendered HTML on the first
response; no JS execution is required for the content to be indexed.
`CategoryFilter.js` and `Pagination.jsx` (just links/buttons) aren't
client components either. Nothing needed fixing here — this part of the
architecture was already correct.

