import Link from "next/link";
import PostCard from "@/components/PostCard";
import Newsletter from "@/components/Newsletter";
import { bySlug, cats, posts, sorted, type Post } from "@/lib/posts";
export default function Home() {
  const featured = posts.slice(0, 3);
  const trending = ["how-to-improve-fps-pc-games", "minecraft-beginners-survival-guide", "rise-of-esports-in-india", "pc-vs-console-gaming", "future-of-gaming-technology"].map((s) => bySlug(s)!) as Post[];
  return (
    <>
      <section className="wrap py-20 text-center sm:py-28">
        <p className="anim text-sm font-bold uppercase tracking-[0.4em] text-sky">Welcome to GameZone</p>
        <h1 className="anim glow mx-auto mt-4 max-w-4xl text-4xl uppercase leading-tight text-neon sm:text-6xl">Level Up Your Gaming Knowledge</h1>
        <p className="anim mx-auto mt-5 max-w-xl text-lg text-slate-300">Gaming News, Reviews, Guides &amp; Everything Gaming.</p>
        <Link href="/blog" className="btn anim mt-8">Explore Blogs</Link>
      </section>
      <section className="wrap" aria-labelledby="f"><h2 id="f" className="mb-5 text-2xl">Featured Articles</h2><div className="grid gap-6 md:grid-cols-3">{featured.map((p) => <PostCard key={p.slug} post={p} />)}</div></section>
      <section className="wrap mt-14" aria-labelledby="l"><h2 id="l" className="mb-5 text-2xl">Latest Gaming Blogs</h2><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{sorted.slice(0, 6).map((p) => <PostCard key={p.slug} post={p} />)}</div><div className="mt-6 text-center"><Link href="/blog" className="btn">View All Blogs</Link></div></section>
      <section className="wrap mt-14" aria-labelledby="c"><h2 id="c" className="mb-5 text-2xl">Gaming Categories</h2><div className="grid grid-cols-2 gap-4 md:grid-cols-3">{cats.map((c) => <Link key={c.slug} href={`/category/${c.slug}`} className="card p-5"><h3 className="text-lg text-sky">{c.name}</h3><p className="mt-1 text-sm text-slate-400">{c.desc}</p></Link>)}</div></section>
      <section className="wrap mt-14" aria-labelledby="t"><h2 id="t" className="mb-5 text-2xl">Trending Articles</h2><ol className="space-y-3">{trending.map((p, i) => <li key={p.slug} className="card flex items-center gap-4 p-4"><span className="text-3xl font-black text-violet">{i + 1}</span><Link href={`/blog/${p.slug}`} className="font-semibold hover:text-neon">{p.title}</Link></li>)}</ol></section>
      <Newsletter />
      <section className="wrap" aria-labelledby="a"><div className="card p-8"><h2 id="a" className="text-2xl">About GameZone</h2><p className="mt-3 text-slate-300">GameZone is an independent gaming blog for players who want clear guides and honest opinions. We label opinions, avoid made-up statistics and keep advice practical.</p><Link href="/about" className="mt-4 inline-block font-bold text-neon hover:underline">Learn more →</Link></div></section>
    </>
  );
}
