# Reading time, view counter, and SEO fixes

## 1. Reading time — was fake, now real

**Root cause:** `blogs/page.js`, `blogs/[slug]/page.js` (related posts), and
`LatestBlogs.js` each computed reading time from `blog.content`, but the
WordPress listing query (`LISTING_FIELDS` in `app/lib/wordpress.js`)
deliberately excluded `content` for performance. Result: word count was
always `0`, so every post everywhere showed an identical, static
**"1 min read"** — that's why it looked fake.

**Fix:**
- New shared algorithm: `app/lib/readingTime.js`
  (`estimateReadingTime`, `readingTimeLabel`, `countWords`) — one
  implementation instead of four inconsistent copies.
- Upgraded from a flat `words / 200` to 238 wpm (current research average
  adult silent reading speed) plus time for images (diminishing per-image
  seconds, same model Medium's algorithm uses) and code blocks.
- `LISTING_FIELDS` now includes `content`, so every listing card has real
  content to measure. The `reading_time` WordPress custom field (from
  `WORDPRESS_SETUP.md` §6a) is still read first if present — it's now an
  optional payload-size optimization, not a correctness requirement.

## 2. View counter — was silently fake, now real (needs one WP file)

**Root cause:** the counter calls a custom WordPress REST endpoint
(`/wp-json/rc/v1/views/{slug}`) that only exists if a `functions.php`
snippet was manually added. If it wasn't, every request failed and the API
route silently returned `{ views: 0 }` forever — indistinguishable from a
real zero, and never moving no matter how much traffic the post got.

**Fix:**
- `app/api/blogs/views/route.js` now returns a `configured` flag alongside
  `views`, so the frontend can tell "no backend" apart from "genuinely
  zero."
- `ViewCounter.js` hides itself completely when `configured: false`
  instead of showing a permanent, static "0 views."
- Added a `useRef` guard against double-counting a single visit (React
  Strict Mode double-invokes effects in dev).
- **`wordpress-snippets/mu-plugins/rc-blog-features.php`** — upload this
  one file to `wp-content/mu-plugins/` on your WordPress install (no
  editing, no activation step, survives theme changes) and the counter
  goes live immediately. This is not optional for a real cross-visitor
  count — there's no way to persist a number across visitors without
  *some* backend, and this is that backend. It also bundles the
  reading-time field and the anonymous-comments REST fix from
  `WORDPRESS_SETUP.md` into the same file so you only need to upload one
  thing.

## 3. SEO fixes (code-level)

- **`/blogs` metadata was 100% static** — every URL (`/blogs`,
  `/blogs?page=2`, `/blogs?category=x`, etc.) shared the exact same title,
  description, and canonical (pointing at the root). Converted to
  `generateMetadata()`: each page/category now gets a distinct title and
  description, self-canonicalizes (current Google guidance over
  canonicalizing every paginated page back to page 1), and pages beyond 3
  get `noindex, follow` so deep archive pages don't dilute relevance
  signals while still passing link equity through.
- **Image alt text was identical everywhere** — every blog image (cover,
  grid thumbnail, related-post thumbnail, homepage card) used the post
  title verbatim as `alt`, regardless of what's actually in the image.
  `normaliseWPPost()` now reads the real WordPress media-library alt text
  (`wp:featuredmedia[0].alt_text`) when the editor has set one, falling
  back to the title only when no alt text exists in WordPress.
- **`next.config.mjs` `redirects()` was empty** with no guidance on
  whether it needed to be filled in. Added a concrete 5-minute Search
  Console check (Indexing → Pages → 404 / Page with redirect) to find out
  whether any slugs changed in the Firestore → WordPress migration and
  need a 301 — I didn't fabricate mappings since I don't have your GSC
  data, but the empty array was previously undocumented as a real risk,
  not just an unfilled template.

## 4. Added: structured data on `/blogs` (was missing entirely)

The `/blogs` listing page — your main content hub, linking to every post —
had zero JSON-LD despite the post detail pages having solid `BlogPosting`
schema. Added `CollectionPage` + `ItemList` + `BreadcrumbList` JSON-LD that
mirrors what's actually rendered (each listed post's real title and
canonical URL), scoped correctly per category/page so a filtered view
(`?category=seo`) reports itself as an `ItemList` of just those posts, not
a copy-pasted static list.

## 5. Fixed for real: "image sometimes shows, sometimes vanishes"

The first pass (removing the 30-day cache on the WordPress fetch inside
`/api/media`) was necessary but not sufficient. There's a **second,
independent cache** in front of it: Next.js's built-in Image Optimizer
(`/_next/image?url=...`), governed by `images.minimumCacheTTL: 604800` (a
hard 7-day floor) in `next.config.mjs` — completely separate from anything
inside `route.js`.

The deeper problem: `/api/media` used to 302-redirect to a local
placeholder PNG on failure, returning a normal 200 status. That makes a
WordPress failure **indistinguishable from a real successful image fetch**
to the outer optimizer — both are valid 200 images to it. So a single
transient failure got cached as if it were a legitimate photo, for a
minimum of 7 days, on whichever server/edge node happened to hit the
flake — while other nodes serving from a healthy fetch cached the real
image. Same URL, different cached result depending on which node answers.

**Fix:** `/api/media` now returns a genuine `502` with `Cache-Control:
no-store` on failure instead of disguising it as a valid image — Next's
optimizer does not apply its 7-day floor to errors, only to confirmed
successes. The friendly placeholder UI moved to a new client component,
`app/components/BlogImage.js`, which handles the fallback via a normal
`onError` event in the browser — visually identical experience for
visitors, but nothing about a failure ever gets written to a server or CDN
cache. The next request retries WordPress completely fresh. All blog
cover, grid, related-post, and homepage card images now render through
this component instead of raw `next/image`.

## What I did NOT change

Content itself — the thin, city-templated posts (`web-development-chandigarh`,
`web-development-internship`, etc.) flagged in the earlier SEO audit are
still there. That's a content/editorial task, not a code fix, and it's
still the single biggest lever on whether these pages ever rank in Web
results rather than just Images. See the previous audit message for the
prioritized list.
