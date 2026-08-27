// app/blogs/page.js
// Blog listing — WordPress is now the single source of truth.
// Paginated: ?page=2, ?page=3, etc. — PAGE_SIZE items per page.

import { fetchWPPostsPage, fetchWPCategories } from "../lib/wordpress";
import BlogImage from "../components/BlogImage";
import Link from "next/link";
import CircuitTrace from "../components/CircuitTrace";
import Pagination from "./Pagination";
import CategoryFilter from "./CategoryFilter";
import InfiniteBlogFeed from "./InfiniteBlogFeed";
import { readingTime, getImg, getImgAlt, formatDate } from "./blogUtils";

export const revalidate = 300; // 5 min — falls back to this if the WP webhook doesn't fire

const PAGE_SIZE = 9; // 1 featured + 8 grid on page 1, 9 grid items per page after that
const SITE_URL = "https://www.rctechsolutions.com";

// Dynamic metadata per page/category instead of one static block reused
// identically across /blogs, /blogs?page=2, /blogs?page=3, /blogs?category=x,
// etc. Previously every single one of those URLs shared the exact same
// title, description, and canonical (pointing at the root) — Google saw
// dozens of URLs with identical <title>/<meta description>, which reads as
// low-value duplicate content and dilutes crawl budget across the whole
// /blogs path. Each page/category now self-canonicalizes with a distinct,
// accurate title — current Google guidance (2024+) prefers self-referencing
// canonicals over collapsing paginated pages onto page 1.
export async function generateMetadata({ searchParams }) {
  const resolved = await searchParams;
  const page = parseInt(resolved?.page, 10) || 1;
  const categorySlug = resolved?.category || null;

  let categoryName = null;
  if (categorySlug) {
    const categories = await fetchWPCategories();
    categoryName = categories.find((c) => c.slug === categorySlug)?.name || null;
  }

  const baseTitle = categoryName
    ? `${categoryName} Articles — The Journal`
    : "The Journal — Web Development, SEO & Growth Notes";
  const title = page > 1 ? `${baseTitle} (Page ${page})` : baseTitle;

  const baseDesc = categoryName
    ? `Field notes on ${categoryName.toLowerCase()} from RC Tech Solutions — practical, no-fluff writing from the people actually shipping the work.`
    : "Field notes on web development, Next.js, SEO strategy, and digital growth from RC Tech Solutions. Written by the people actually shipping the work.";
  const description = page > 1 ? `${baseDesc} Page ${page} of our archive.` : baseDesc;

  const params = new URLSearchParams();
  if (categorySlug) params.set("category", categorySlug);
  if (page > 1) params.set("page", String(page));
  const canonical = `${SITE_URL}/blogs${params.toString() ? `?${params.toString()}` : ""}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: ["web development blog India", "SEO tips 2025", "Next.js tutorials", "RC Tech Solutions blog"],
    authors: [{ name: "Rahul Chauhan", url: `${SITE_URL}/about` }],
    alternates: { canonical },
    // Deep pagination (page 4+) rarely earns organic clicks and mostly
    // exists for crawl/UX continuity — keep it followable (so link equity
    // still flows to individual posts) but out of the index to avoid
    // diluting relevance signals across dozens of thin archive pages.
    robots: page > 3 ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "RC Tech Solutions",
      locale: "en_IN",
      type: "website",
      images: [{ url: `${SITE_URL}/og/blogs-cover.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default async function BlogsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const requestedPage = parseInt(resolvedSearchParams?.page, 10) || 1;
  const activeCategorySlug = resolvedSearchParams?.category || null;

  // PERF FIX: these two WordPress round trips used to run one after another
  // (`await categories` then `await posts`), which on a slow upstream host
  // means paying full network latency TWICE for every cache miss. They
  // don't actually depend on each other UNLESS a category is selected (in
  // which case we need the category's numeric ID from WP before we can ask
  // for posts in that category — the WP REST API only filters by ID, not
  // slug). So: no category selected → fire both requests concurrently.
  // Category selected → categories must resolve first to look up the ID,
  // so that one path stays sequential out of necessity, not oversight.
  let allCategories, activeCategory, pageBlogsRaw, total, wpTotalPages;

  if (!activeCategorySlug) {
    const [cats, page] = await Promise.all([
      fetchWPCategories(),
      fetchWPPostsPage({ perPage: PAGE_SIZE, page: requestedPage, category: null }),
    ]);
    allCategories = cats;
    activeCategory = null;
    ({ posts: pageBlogsRaw, total, totalPages: wpTotalPages } = page);
  } else {
    allCategories = await fetchWPCategories();
    activeCategory = allCategories.find((c) => c.slug === activeCategorySlug);
    ({ posts: pageBlogsRaw, total, totalPages: wpTotalPages } = await fetchWPPostsPage({
      perPage: PAGE_SIZE,
      page: requestedPage,
      category: activeCategory?.id || null,
    }));
  }

  const totalPages = Math.max(1, wpTotalPages);
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);

  // Page 1: 1 featured + up to 8 grid items, all from the same single fetch.
  let featuredBlog = null;
  let pageBlogs = pageBlogsRaw;
  if (currentPage === 1 && !activeCategory) {
    featuredBlog = pageBlogsRaw[0];
    pageBlogs = pageBlogsRaw.slice(1);
  }

  const blogHref = (b) => `/blogs/${b.slug}`;
  const categoryHref = (slug) => (slug ? `/blogs?category=${slug}` : "/blogs");

  // CollectionPage + ItemList + BreadcrumbList JSON-LD — previously this
  // page (your main content hub, linking to every post) had zero
  // structured data. This gives Google an explicit, machine-readable list
  // of what's actually on the page instead of inferring it purely from
  // rendered HTML, and ties each listed post back to its own canonical URL.
  const pageUrl = `${SITE_URL}/blogs${activeCategory ? `?category=${activeCategory.slug}` : ""}${currentPage > 1 ? `${activeCategory ? "&" : "?"}page=${currentPage}` : ""}`;
  const listedPosts = featuredBlog ? [featuredBlog, ...pageBlogs] : pageBlogs;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": pageUrl,
      url: pageUrl,
      name: activeCategory ? `${activeCategory.name} Articles — The Journal` : "The Journal — RC Tech Solutions",
      isPartOf: { "@type": "WebSite", name: "RC Tech Solutions", url: SITE_URL },
      about: activeCategory ? activeCategory.name : "Web development, SEO, and digital growth",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: listedPosts.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/blogs/${b.slug}`,
          name: b.title,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Journal", item: `${SITE_URL}/blogs` },
        ...(activeCategory ? [{ "@type": "ListItem", position: 3, name: activeCategory.name, item: pageUrl }] : []),
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen" style={{ background: "var(--rc-paper)" }}>

        {/* Hero */}
        <section className="border-b border-[var(--rc-wire)] rc-grid-bg">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="rc-via rc-via-pulse" />
              <span className="rc-eyebrow" style={{ color: "var(--rc-trace)" }}>Updated weekly · {total} issue{total === 1 ? "" : "s"}</span>
            </div>
            <h1 className="rc-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[0.98] text-[var(--rc-ink)] max-w-2xl">
              The journal.
            </h1>
            <p className="rc-body mt-5 text-[var(--rc-ink-soft)] max-w-lg text-base sm:text-lg leading-relaxed">
              Notes on what's actually working in web development, SEO, and growth —
              written by the people shipping the work.
            </p>

            <CategoryFilter categories={allCategories} activeSlug={activeCategorySlug} />
          </div>
        </section>

        <main className="mx-auto max-w-5xl px-4 py-12 sm:py-14">

          {/* Featured — only on page 1 */}
          {featuredBlog && (
            <Link href={blogHref(featuredBlog)} className="group block rc-blueprint-card mb-12">
              <div className="grid md:grid-cols-2 gap-0">
                {getImg(featuredBlog) && (
                  // FIX: this used to be `h-64 md:h-full` — on desktop,
                  // `h-full` makes the image match whatever height the TEXT
                  // column next to it happens to render at (title length +
                  // description length + whether a category badge is
                  // present), which is different for every single post.
                  // There was no fixed target ratio to design an image
                  // against, so every post's featured image got cropped
                  // differently and unpredictably — that's the root cause
                  // of "cutting" here specifically. A fixed 16:9 box means
                  // one image size (see note below) now looks correct for
                  // every post, permanently.
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    <BlogImage src={getImg(featuredBlog)} alt={getImgAlt(featuredBlog)} fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw" priority />
                  </div>
                )}
                <div className="flex flex-col justify-center p-7 sm:p-9">
                  <span className="rc-eyebrow mb-3" style={{ color: "var(--rc-circuit)" }}>Latest issue</span>
                  {featuredBlog.category && (
                    <span className="rc-mono text-[0.65rem] uppercase tracking-wider w-fit px-2.5 py-1 border border-[var(--rc-wire)] text-[var(--rc-ink-soft)] mb-3">
                      {featuredBlog.category}
                    </span>
                  )}
                  <h2 className="rc-display text-2xl sm:text-3xl font-semibold text-[var(--rc-ink)] leading-tight group-hover:text-[var(--rc-circuit)] transition-colors">
                    {featuredBlog.title}
                  </h2>
                  {featuredBlog.metaDescription && (
                    <p className="rc-body mt-3 text-sm text-[var(--rc-ink-soft)] leading-relaxed line-clamp-3">
                      {featuredBlog.metaDescription}
                    </p>
                  )}
                  <div className="mt-5 flex flex-wrap items-center gap-3 rc-mono text-[0.65rem] text-[rgba(42,45,53,0.7)]">
                    <span>{featuredBlog.author || "RC Tech Team"}</span>
                    <span style={{ color: "var(--rc-wire)" }}>/</span>
                    <span>{formatDate(featuredBlog.date)}</span>
                    <span style={{ color: "var(--rc-wire)" }}>/</span>
                    <span>{readingTime(featuredBlog)}</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          <CircuitTrace variant="horizontal" className="mb-10 opacity-60" />

          {/* Grid — server-rendered page loads instantly as before; further
              pages load automatically as the user scrolls near the bottom. */}
          {pageBlogs.length > 0 && (
            <InfiniteBlogFeed
              initialPosts={pageBlogs}
              initialPage={currentPage}
              totalPages={totalPages}
              category={activeCategorySlug}
            />
          )}

          {pageBlogsRaw.length === 0 && (
            <p className="rc-body text-center text-[var(--rc-ink-soft)] py-20">
              {activeCategory ? `No issues in "${activeCategory.name}" yet.` : "No issues published yet."}
            </p>
          )}

          {/* SEO / no-JS fallback only — invisible and inert once JS runs,
              since InfiniteBlogFeed takes over the loading UX above. Keeps
              every page still reachable by real <a href> links so crawlers
              (and anyone browsing with JS off) aren't stuck on page 1
              forever, which is the classic failure mode of infinite scroll
              done without a fallback. */}
          {totalPages > 1 && (
            <noscript>
              <Pagination page={currentPage} totalPages={totalPages} category={activeCategorySlug} />
            </noscript>
          )}
        </main>
      </div>
    </>
  );
}
