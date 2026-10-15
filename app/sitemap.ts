import type { MetadataRoute } from "next";
import { SITE, cats, posts } from "@/lib/posts";
export default function sitemap(): MetadataRoute.Sitemap {
  const s = ["", "/blog", "/about", "/contact"].map((p) => ({ url: SITE + p }));
  return [...s, ...cats.map((c) => ({ url: `${SITE}/category/${c.slug}` })), ...posts.map((p) => ({ url: `${SITE}/blog/${p.slug}`, lastModified: p.date }))];
}
