"use client";
import { useState } from "react";
import PostCard from "./PostCard";
import type { Cat, Post } from "@/lib/posts";
export default function Browser({ posts, cats, initialCat = "all" }: { posts: Post[]; cats: Cat[]; initialCat?: string }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(initialCat);
  const t = q.trim().toLowerCase();
  const list = posts.filter((p) => (cat === "all" || p.cat === cat) && (!t || (p.title + " " + p.desc).toLowerCase().includes(t)));
  const chip = (on: boolean) => `rounded-full border px-4 py-1.5 text-sm font-semibold transition ${on ? "border-neon bg-neon text-black" : "border-white/20 hover:border-violet"}`;
  return (
    <div>
      <label htmlFor="search" className="sr-only">Search articles</label>
      <input id="search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles..." className="w-full rounded-lg border border-white/15 bg-panel px-4 py-3 outline-none focus:border-sky" />
      <div className="my-5 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        <button className={chip(cat === "all")} aria-pressed={cat === "all"} onClick={() => setCat("all")}>All</button>
        {cats.map((c) => <button key={c.slug} className={chip(cat === c.slug)} aria-pressed={cat === c.slug} onClick={() => setCat(c.slug)}>{c.name}</button>)}
      </div>
      <p className="mb-4 text-sm text-slate-400" aria-live="polite">{list.length} article{list.length === 1 ? "" : "s"} found</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((p) => <PostCard key={p.slug} post={p} />)}</div>
      {!list.length && <p className="py-10 text-center text-slate-400">No articles match. Try another search or category.</p>}
    </div>
  );
}
