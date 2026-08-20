// app/blogs/page.js
// Blog listing — WordPress is now the single source of truth.
// Paginated: ?page=2, ?page=3, etc. — PAGE_SIZE items per page.

import { fetchWPPostsPage, fetchWPCategories } from "../lib/wordpress";
import { estimateReadingTime } from "../lib/readingTime";
import BlogImage from "../components/BlogImage";
import Link from "next/link";
import CircuitTrace from "../components/CircuitTrace";
import Pagination from "./Pagination";
import CategoryFilter from "./CategoryFilter";

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

// Prefer the WP-computed reading_time field when present (small payload
// win); otherwise compute a real number from actual content — never a
// fake static fallback now that listing queries always include `content`.
const readingTime = (blog) => `${blog?.readingTime || estimateReadingTime(blog?.content)} min read`;
const getImg = (b) => b.blogImageUrl || b.imageUrl || b.image || b.coverImage || null;
const getImgAlt = (b) => b.blogImageAlt || b.title;

const formatDate = (val) => {
  try {
    if (!val) return "";
    const d = new Date(val);
    if (isNaN(d)) return "";
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  } catch { return ""; }
};

export default async function BlogsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const requestedPage = parseInt(resolvedSearchParams?.page, 10) || 1;
  const activeCategorySlug = resolvedSearchParams?.category || null;

  // Categories are cheap (1hr cache) and needed either way for the filter pills.
  const allCategories = await fetchWPCategories();
  const activeCategory = activeCategorySlug
    ? allCategories.find((c) => c.slug === activeCategorySlug)
    : null;

  // Fetch ONLY the page being shown — not all posts. This is the fix for the
  // slow /blogs load: previously every visit fetched 60 full posts (with
  // embedded media/author/terms) and sliced them in JS. Now we ask WordPress
  // for exactly PAGE_SIZE posts for the requested page/category and read the
  // true totals straight from the X-WP-Total response headers.
  const { posts: pageBlogsRaw, total, totalPages: wpTotalPages } = await fetchWPPostsPage({
    perPage: PAGE_SIZE,
    page: requestedPage,
    category: activeCategory?.id || null,
  });

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

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rc-wire)] border border-[var(--rc-wire)]">
            {pageBlogs.map((blog, i) => (
              <Link key={blog.id} href={blogHref(blog)}
                className="group flex flex-col bg-[var(--rc-paper)] hover:bg-white transition-colors">
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  {getImg(blog) ? (
                    <BlogImage src={getImg(blog)} alt={getImgAlt(blog)} fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center rc-grid-bg" style={{ background: "var(--rc-paper-deep)" }}>
                      <span className="rc-mono text-xs text-[rgba(42,45,53,0.4)]">No. {String(i + 1).padStart(2, "0")}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    {blog.category && (
                      <span className="rc-mono text-[0.6rem] uppercase tracking-wider text-[var(--rc-trace)]">
                        {blog.category}
                      </span>
                    )}
                  </div>
                  <h2 className="rc-display text-base font-semibold text-[var(--rc-ink)] group-hover:text-[var(--rc-circuit)] transition-colors line-clamp-2 leading-snug">
                    {blog.title}
                  </h2>
                  {blog.metaDescription && (
                    <p className="rc-body mt-2 text-xs text-[rgba(42,45,53,0.8)] line-clamp-2 flex-1 leading-relaxed">
                      {blog.metaDescription}
                    </p>
                  )}
                  <div className="mt-4 flex items-center gap-2 rc-mono text-[0.6rem] text-[rgba(42,45,53,0.5)]">
                    <span>{formatDate(blog.date)}</span>
                    <span>·</span>
                    <span>{readingTime(blog)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {pageBlogsRaw.length === 0 && (
            <p className="rc-body text-center text-[var(--rc-ink-soft)] py-20">
              {activeCategory ? `No issues in "${activeCategory.name}" yet.` : "No issues published yet."}
            </p>
          )}

          {totalPages > 1 && (
            <Pagination page={currentPage} totalPages={totalPages} category={activeCategorySlug} />
          )}
        </main>
      </div>
    </>
  );
}
