import type { Metadata } from "next";
import Browser from "@/components/Browser";
import { cats, sorted } from "@/lib/posts";
export const metadata: Metadata = { title: "All Gaming Blogs", description: "Browse and search every GameZone article: PC, mobile, Minecraft, GTA, esports and gaming tech.", alternates: { canonical: "/blog" } };
export default function Blogs() {
  return <div className="wrap py-12"><h1 className="mb-6 text-4xl">All Gaming Blogs</h1><Browser posts={sorted} cats={cats} /></div>;
}
