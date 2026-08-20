// app/lib/wordpress.js
// WordPress Headless CMS integration via REST API.
// Fetches posts from your WordPress site and normalises them into the same
// shape as your Firestore blog documents so the blogs listing and blog detail
// pages work identically for both sources.
//
// Setup:
// 1. Add to .env.local:  WORDPRESS_URL=https://yourblog.wordpress.com
//    (or your self-hosted WP URL — no trailing slash)
// 2. Make sure your WP site has REST API enabled (default on all WP installs)
// 3. For private sites: add  WORDPRESS_AUTH=Basic base64(user:app-password)
//
// The functions below are used in:
//   app/blogs/page.js       (listing — merges WP + Firestore posts)
//   app/blogs/[slug]/page.js (post detail — Firestore tried first, WP as fallback)

import { proxiedMediaUrl } from './media';
import { estimateReadingTime } from './readingTime';

const WP_URL = process.env.WORDPRESS_URL || '';
const WP_AUTH = process.env.WORDPRESS_AUTH || '';

const wpHeaders = {
  'Content-Type': 'application/json',
  ...(WP_AUTH ? { Authorization: `Basic ${WP_AUTH}` } : {}),
};

// Decodes HTML entities that WordPress leaves in `excerpt.rendered` and
// `title.rendered` — e.g. curly quotes come through as literal `&#8220;`
// `&#8221;` text (numeric entities), and things like "Tips &amp; Tricks"
// come through as literal `&amp;` (named entities). Stripping HTML tags
// (below) does NOT decode entities — those are a separate concern, so
// without this, raw entity codes render straight onto the page and into
// the Google search snippet / social share description, since this same
// field feeds both. Order matters: this must run AFTER stripping tags and
// BEFORE truncating, so we never truncate mid-entity (which would leave a
// broken fragment like "&#82" behind).
const NAMED_ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  hellip: '…', mdash: '—', ndash: '–',
  lsquo: '\u2018', rsquo: '\u2019', ldquo: '\u201C', rdquo: '\u201D',
};

function decodeHtmlEntities(text = '') {
  return text
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&([a-zA-Z]+);/g, (match, name) => NAMED_ENTITIES[name] ?? match);
}

// Strips WordPress's HTML tags AND decodes its HTML entities, in the
// correct order (tags first, then entities, so a stray `<` inside a
// decoded entity — rare, but possible — never gets misread as a tag).
function cleanWpText(html = '') {
  return decodeHtmlEntities(html.replace(/<[^>]+>/g, '')).trim();
}

// Truncate to ~maxLen characters WITHOUT cutting a word in half (the
// previous `.slice(0, 160)` calls sliced mid-word — e.g. "...beautiful
// designs, affor" — which Google would usually discard and rewrite anyway,
// costing us control over our own search snippet). This trims back to the
// last whole word inside the limit and adds a proper ellipsis.
export function safeTruncate(text = '', maxLen = 160) {
  const clean = text.trim();
  if (clean.length <= maxLen) return clean;
  const cut = clean.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLen)}…`;
}

// Fields requested on LISTING calls.
//
// IMPORTANT: `content` IS included here on purpose. An earlier version of
// this file excluded it "for performance" and relied entirely on an
// optional `reading_time` custom field from a functions.php snippet. If
// that snippet was never installed on WordPress (very common — it's an
// opt-in step in WORDPRESS_SETUP.md), `content` was undefined on every
// listing post, word count was always 0, and every single blog card on
// the site — homepage, /blogs grid, related posts — showed an identical,
// static "1 min read". That's the "fake reading time" bug.
//
// Real per-post reading time requires real per-post content, full stop.
// The trade-off is a slightly larger listing payload; for PAGE_SIZE=9
// posts this is a non-issue (a few hundred KB of gzipped HTML) compared
// to shipping a wrong number on every post forever. `reading_time` is
// still requested and still preferred when present (e.g. if you add the
// functions.php snippet later for a small payload-size win), but the
// site no longer *depends* on it for correctness.
const LISTING_FIELDS =
  'id,slug,title,excerpt,content,date,modified,link,sticky,reading_time,comment_status,_links,_embedded';

// Normalise a WordPress post into the same shape as a Firestore blog document
export function normaliseWPPost(post) {
  const rawContent = post.content?.rendered || '';

  // Real WordPress media-library alt text if the editor set one, instead of
  // always repeating the post title as every image's alt attribute. Google
  // Images (and accessibility) both weight descriptive, non-repetitive alt
  // text — reusing the H1 verbatim on every image is a missed signal.
  const featuredMediaAlt =
    post._embedded?.['wp:featuredmedia']?.[0]?.alt_text?.trim() || '';

  return {
    // Source identifier — used in the blog listing to route to correct detail page
    source: 'wordpress',
    id: `wp-${post.id}`,
    slug: post.slug,
    title: decodeHtmlEntities(post.title?.rendered || ''),
    content: rawContent,
    metaDescription: post.excerpt?.rendered
      ? safeTruncate(cleanWpText(post.excerpt.rendered), 160)
      : '',
    date: post.date || null,
    createdAt: post.date || null,
    updatedAt: post.modified || null,
    // Featured image — proxied through /api/media so it's served from our
    // own domain instead of the WordPress staging host (see app/lib/media.js)
    blogImageUrl: proxiedMediaUrl(
      post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null
    ),
    // Falls back to the post title only if the WP media library has no alt
    // text set for the featured image — a real per-image description beats
    // a generic repeated title whenever one is available.
    blogImageAlt: featuredMediaAlt || decodeHtmlEntities(post.title?.rendered || ''),
    author:
      post._embedded?.author?.[0]?.name || 'RC Tech Solutions',
    authorSlug: post._embedded?.author?.[0]?.slug || null,
    authorAvatar:
      post._embedded?.author?.[0]?.avatar_urls?.['96'] ||
      post._embedded?.author?.[0]?.avatar_urls?.['48'] ||
      null,
    authorBio: post._embedded?.author?.[0]?.description || '',
    category:
      post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Article',
    categoryId:
      post._embedded?.['wp:term']?.[0]?.[0]?.id || null,
    categorySlug:
      post._embedded?.['wp:term']?.[0]?.[0]?.slug || null,
    keywords:
      post._embedded?.['wp:term']?.[1]?.map((t) => t.name) || [],
    commentsEnabled: post.comment_status ? post.comment_status === 'open' : true,
    // Prefer the WP-computed field when present (tiny payload win if you've
    // added the functions.php snippet); otherwise compute a real number
    // from the actual post content using the shared algorithm — never
    // falls back to a fake/static value now that `content` is always
    // fetched (see LISTING_FIELDS above).
    readingTime: post.reading_time || estimateReadingTime(rawContent),
    // Real view counts are fetched live client-side by <ViewCounter> (see
    // app/components/blog/ViewCounter.js) — that's the only source of
    // truth. This is intentionally `null`, not `0`, so nothing downstream
    // mistakes "we haven't fetched it" for "it has zero views".
    views: null,
    featured: post.sticky || false,
    // WP-specific fields
    wpId: post.id,
    link: post.link || '',
  };
}

// Fetch recent WP posts — called from blogs/page.js and related-post lookups.
// Uses a trimmed `_fields` set (no full content) to keep listing payloads small.
// Returns [] gracefully if WORDPRESS_URL is not set or request fails
export async function fetchWPPosts({ perPage = 10, page = 1, category = null, fields = LISTING_FIELDS } = {}) {
  if (!WP_URL) return [];

  try {
    let url = `${WP_URL}/wp-json/wp/v2/posts?_embed=true&per_page=${perPage}&page=${page}&status=publish`;
    if (category) url += `&categories=${category}`;
    if (fields) url += `&_fields=${fields}`;

    const res = await fetch(url, {
      headers: wpHeaders,
      next: { revalidate: 300, tags: ['wp-posts'] }, // cache for 5 minutes, tagged for on-demand purge
    });

    if (!res.ok) {
      console.warn(`WordPress API returned ${res.status} — skipping WP posts`);
      return [];
    }

    const posts = await res.json();
    return Array.isArray(posts) ? posts.map(normaliseWPPost) : [];
  } catch (err) {
    console.warn('WordPress fetch failed:', err.message);
    return [];
  }
}

// Fetch ONE page of WP posts plus the true total count/page count, straight
// from WordPress's X-WP-Total / X-WP-TotalPages response headers — no need
// to ever fetch more posts than are shown on screen. This is what the
// /blogs listing page should use instead of fetchWPPosts({ perPage: 60 }).
export async function fetchWPPostsPage({ perPage = 9, page = 1, category = null } = {}) {
  if (!WP_URL) return { posts: [], total: 0, totalPages: 1 };

  try {
    let url = `${WP_URL}/wp-json/wp/v2/posts?_embed=true&per_page=${perPage}&page=${page}&status=publish&_fields=${LISTING_FIELDS}`;
    if (category) url += `&categories=${category}`;

    const res = await fetch(url, {
      headers: wpHeaders,
      next: { revalidate: 300, tags: ['wp-posts'] },
    });

    if (!res.ok) {
      console.warn(`WordPress API returned ${res.status} — skipping WP posts`);
      return { posts: [], total: 0, totalPages: 1 };
    }

    const posts = await res.json();
    const total = Number(res.headers.get('X-WP-Total')) || posts.length;
    const totalPages = Number(res.headers.get('X-WP-TotalPages')) || 1;

    return {
      posts: Array.isArray(posts) ? posts.map(normaliseWPPost) : [],
      total,
      totalPages,
    };
  } catch (err) {
    console.warn('WordPress paged fetch failed:', err.message);
    return { posts: [], total: 0, totalPages: 1 };
  }
}

// Fetch a single WP post by slug — called from blogs/[slug]/page.js as a fallback
export async function fetchWPPostBySlug(slug) {
  if (!WP_URL) return null;

  try {
    const res = await fetch(
      `${WP_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed=true&status=publish`,
      {
        headers: wpHeaders,
        next: { revalidate: 120, tags: ['wp-posts', `wp-post-${slug}`] },
      }
    );

    if (!res.ok) return null;

    const posts = await res.json();
    if (!Array.isArray(posts) || posts.length === 0) return null;

    return normaliseWPPost(posts[0]);
  } catch (err) {
    console.warn('WordPress fetch by slug failed:', err.message);
    return null;
  }
}

// Fetch all WP post slugs — used in generateStaticParams AND app/sitemap.js.
// Also returns `modified` so the sitemap can report each URL's real
// last-modified date instead of the request/build timestamp (a sitemap
// where every single URL — including a Privacy Policy page that hasn't
// changed in a year — shares one identical lastmod tells Google the
// timestamps aren't trustworthy, so it tends to discount them entirely).
export async function fetchAllWPSlugs() {
  if (!WP_URL) return [];

  try {
    const res = await fetch(
      `${WP_URL}/wp-json/wp/v2/posts?_fields=slug,modified&per_page=100&status=publish`,
      { headers: wpHeaders, next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const posts = await res.json();
    return Array.isArray(posts) ? posts.map((p) => ({ slug: p.slug, modified: p.modified })) : [];
  } catch {
    return [];
  }
}

// ─────────────────────────────────────────────────────────────────────────
// PROJECTS — WordPress custom post type integration
//
// Requires a "Project" custom post type in WordPress (REST base: "projects")
// with these ACF fields, "Show in REST API" enabled on the field group:
//   project_client        (Text)
//   project_industry      (Text)
//   project_services      (Text — comma separated, e.g. "SEO, Web Development")
//   project_stack         (Text — comma separated, e.g. "Next.js, Tailwind")
//   project_summary       (Text — the one-line result shown on cards)
//   project_live_url      (URL)
//   project_featured      (True/False)
//   project_gallery       (Gallery — extra screenshots beyond the featured image)
//   project_metrics       (Repeater with sub-fields: metric_value, metric_label)
//
// The post's Featured Image is used as the cover image. The post's main
// content (the normal WP editor) is used as the full case-study writeup —
// write it as regular paragraphs in the WP editor, same as a blog post.
// ─────────────────────────────────────────────────────────────────────────

function htmlToParagraphs(html = "") {
  // Converts WP's rendered HTML into the same "\n\n"-separated plain-text
  // paragraphs the project detail page already expects (p.description.split('\n\n')).
  return html
    .replace(/<\/p>\s*<p[^>]*>/gi, "\n\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
}

const splitCsv = (s = "") => s.split(",").map((v) => v.trim()).filter(Boolean);

export function normaliseWPProject(post) {
  const acf = post.acf || {};
  return {
    source: "wordpress",
    id: `wp-${post.id}`,
    slug: post.slug,
    title: decodeHtmlEntities(post.title?.rendered || ""),
    client: acf.project_client || "",
    industry: acf.project_industry || "",
    services: splitCsv(acf.project_services),
    stack: splitCsv(acf.project_stack),
    summary: acf.project_summary || "",
    description: htmlToParagraphs(post.content?.rendered || ""),
    liveUrl: acf.project_live_url || "",
    featured: !!acf.project_featured,
    imageUrl: proxiedMediaUrl(post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null),
    images: Array.isArray(acf.project_gallery)
      ? acf.project_gallery
          .map((img) => (typeof img === "string" ? img : img?.url))
          .filter(Boolean)
          .map(proxiedMediaUrl)
      : [],
    metrics: Array.isArray(acf.project_metrics)
      ? acf.project_metrics.map((m) => ({ value: m.metric_value || "", label: m.metric_label || "" }))
      : [],
    date: post.date || null,
    modified: post.modified || post.date || null,
    wpId: post.id,
  };
}

// Fetch recent WP projects — called from projects/page.js
export async function fetchWPProjects({ perPage = 50, page = 1 } = {}) {
  if (!WP_URL) return [];

  try {
    const res = await fetch(
      `${WP_URL}/wp-json/wp/v2/projects?_embed=true&per_page=${perPage}&page=${page}&status=publish&orderby=date&order=desc`,
      { headers: wpHeaders, next: { revalidate: 3600, tags: ["wp-projects"] } }
    );

    if (!res.ok) {
      console.warn(`WordPress projects API returned ${res.status} — skipping WP projects`);
      return [];
    }

    const posts = await res.json();
    return Array.isArray(posts) ? posts.map(normaliseWPProject) : [];
  } catch (err) {
    console.warn("WordPress projects fetch failed:", err.message);
    return [];
  }
}

// Fetch a single WP project by slug — called from projects/[slug]/page.js
export async function fetchWPProjectBySlug(slug) {
  if (!WP_URL) return null;

  try {
    const res = await fetch(
      `${WP_URL}/wp-json/wp/v2/projects?slug=${slug}&_embed=true&status=publish`,
      { headers: wpHeaders, next: { revalidate: 3600 } }
    );

    if (!res.ok) return null;

    const posts = await res.json();
    if (!Array.isArray(posts) || posts.length === 0) return null;

    return normaliseWPProject(posts[0]);
  } catch (err) {
    console.warn("WordPress project fetch by slug failed:", err.message);
    return null;
  }
}

// Fetch all WP project slugs — used in generateStaticParams / sitemap
export async function fetchAllWPProjectSlugs() {
  if (!WP_URL) return [];

  try {
    const res = await fetch(
      `${WP_URL}/wp-json/wp/v2/projects?_fields=slug,modified&per_page=100&status=publish`,
      { headers: wpHeaders, next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const posts = await res.json();
    return Array.isArray(posts) ? posts.map((p) => ({ slug: p.slug, modified: p.modified })) : [];
  } catch {
    return [];
  }
}// Fetch WP categories — for a future category filter
export async function fetchWPCategories() {
  if (!WP_URL) return [];

  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/categories?per_page=50`, {
      headers: wpHeaders,
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

// ─────────────────────────────────────────────────────────────────────────
// WEBINARS — WordPress custom post type integration
//
// Requires a "Webinar" custom post type in WordPress (REST base: "webinars")
// with these ACF fields, "Show in REST API" enabled on the field group:
//   webinar_date        (Date Time Picker)
//   webinar_price       (Number — 0 or blank = free)
//   webinar_speaker     (Text)
//   webinar_speaker_bio (Textarea)
//   webinar_live        (True/False — is it live right now)
//
// See the setup guide for the exact plugin + field steps.
// Used in: app/webinars/page.js (listing), app/webinars/[id]/page.js (detail)
// ─────────────────────────────────────────────────────────────────────────

// Normalise a WP webinar post into the same shape as a Firestore webinar doc
export function normaliseWPWebinar(post) {
  const acf = post.acf || {};
  return {
    source: 'wordpress',
    id: `wp-${post.id}`,
    slug: post.slug,
    title: decodeHtmlEntities(post.title?.rendered || ''),
    description: post.excerpt?.rendered
      ? cleanWpText(post.excerpt.rendered)
      : safeTruncate(cleanWpText(post.content?.rendered || ''), 300),
    content: post.content?.rendered || '',
    date: acf.webinar_date || post.date || null,
    price: Number(acf.webinar_price) || 0,
    speaker: acf.webinar_speaker || '',
    speakerBio: acf.webinar_speaker_bio || '',
    live: !!acf.webinar_live,
    imageUrl: proxiedMediaUrl(post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null),
    modified: post.modified || post.date || null,
    wpId: post.id,
    link: post.link || '',
  };
}

// Fetch recent WP webinars — called from webinars/page.js
export async function fetchWPWebinars({ perPage = 30, page = 1 } = {}) {
  if (!WP_URL) return [];

  try {
    const res = await fetch(
      `${WP_URL}/wp-json/wp/v2/webinars?_embed=true&per_page=${perPage}&page=${page}&status=publish`,
      { headers: wpHeaders, next: { revalidate: 300 } } // 5 min cache — webinars change more often
    );

    if (!res.ok) {
      console.warn(`WordPress webinars API returned ${res.status} — skipping WP webinars`);
      return [];
    }

    const posts = await res.json();
    return Array.isArray(posts) ? posts.map(normaliseWPWebinar) : [];
  } catch (err) {
    console.warn('WordPress webinars fetch failed:', err.message);
    return [];
  }
}

// Fetch a single WP webinar by slug — called from webinars/[id]/page.js as a fallback
export async function fetchWPWebinarBySlug(slug) {
  if (!WP_URL) return null;

  try {
    const res = await fetch(
      `${WP_URL}/wp-json/wp/v2/webinars?slug=${slug}&_embed=true&status=publish`,
      { headers: wpHeaders, next: { revalidate: 120 } }
    );

    if (!res.ok) return null;

    const posts = await res.json();
    if (!Array.isArray(posts) || posts.length === 0) return null;

    return normaliseWPWebinar(posts[0]);
  } catch (err) {
    console.warn('WordPress webinar fetch by slug failed:', err.message);
    return null;
  }
}

// Fetch all WP webinar slugs — used in generateStaticParams / sitemap
export async function fetchAllWPWebinarSlugs() {
  if (!WP_URL) return [];

  try {
    const res = await fetch(
      `${WP_URL}/wp-json/wp/v2/webinars?_fields=slug,modified&per_page=100&status=publish`,
      { headers: wpHeaders, next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const posts = await res.json();
    return Array.isArray(posts) ? posts.map((p) => ({ slug: p.slug, modified: p.modified })) : [];
  } catch {
    return [];
  }
}
