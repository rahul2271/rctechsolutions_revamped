// app/blogs/blogUtils.js
// Shared between page.js (server) and BlogCard.jsx (used by both server
// grid + client infinite-scroll grid) so both render posts identically.

import { estimateReadingTime } from "../lib/readingTime";

export const readingTime = (blog) =>
  `${blog?.readingTime || estimateReadingTime(blog?.content)} min read`;

export const getImg = (b) => b.blogImageUrl || b.imageUrl || b.image || b.coverImage || null;

export const getImgAlt = (b) => b.blogImageAlt || b.title;

export const formatDate = (val) => {
  try {
    if (!val) return "";
    const d = new Date(val);
    if (isNaN(d)) return "";
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  } catch {
    return "";
  }
};
