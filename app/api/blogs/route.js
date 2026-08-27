// app/api/blogs/route.js
// Backs the infinite-scroll feed on /blogs. The browser can't call
// WordPress directly (CORS + it'd leak WORDPRESS_URL query shape to the
// client), so this route re-uses the exact same fetchWPPostsPage() the
// server-rendered first page already uses — same Next.js data-cache
// entries, same revalidate/tag behavior, no separate caching story to
// maintain.

import { NextResponse } from "next/server";
import { fetchWPPostsPage, fetchWPCategories } from "../../lib/wordpress";

const PAGE_SIZE = 9;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = Math.max(1, parseInt(searchParams.get("page"), 10) || 1);
  const categorySlug = searchParams.get("category") || null;

  let categoryId = null;
  if (categorySlug) {
    const categories = await fetchWPCategories();
    categoryId = categories.find((c) => c.slug === categorySlug)?.id || null;
  }

  const { posts, total, totalPages } = await fetchWPPostsPage({
    perPage: PAGE_SIZE,
    page,
    category: categoryId,
  });

  return NextResponse.json({ posts, total, totalPages, page });
}
