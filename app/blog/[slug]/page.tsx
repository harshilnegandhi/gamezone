import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bySlug, catOf, fmt, posts } from "@/lib/posts";
export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = bySlug(params.slug);
  if (!p) return {};
  const url = `/blog/${p.slug}`;
  return { title: p.title, description: p.desc, alternates: { canonical: url }, openGraph: { title: p.title, description: p.desc, url, type: "article", publishedTime: p.date, images: [`/images/${p.img}.svg`] } };
}
function Rich({ t }: { t: string }) {
  return <>{t.split(/(\[[^\]]+\]\([^)]+\))/g).map((s, i) => { const m = s.match(/^\[([^\]]+)\]\(([^)]+)\)$/); return m ? <Link key={i} href={m[2]} className="text-sky underline">{m[1]}</Link> : s; })}</>;
}
export default function Article({ params }: { params: { slug: string } }) {
  const p = bySlug(params.slug);
  if (!p) notFound();
  const rel = p.related.map((s) => bySlug(s)!);
  return (
    <article className="wrap max-w-3xl py-12">
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-slate-400"><Link href="/" className="hover:text-neon">Home</Link> / <Link href={`/category/${p.cat}`} className="hover:text-neon">{catOf(p.cat).name}</Link></nav>
      <h1 className="text-3xl sm:text-5xl">{p.title}</h1>
      <p className="mt-3 text-sm text-slate-400">Published <time dateTime={p.date}>{fmt(p.date)}</time> · {catOf(p.cat).name}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/images/${p.img}.svg`} alt={p.alt} width={1200} height={630} fetchPriority="high" className="my-6 w-full rounded-xl border border-white/10" />
      <div className="prose-gz">
        <p className="text-lg"><Rich t={p.intro} /></p>
        {p.sections.map(([h, t]) => <section key={h}><h2>{h}</h2><p><Rich t={t} /></p></section>)}
        <h2>Conclusion</h2><p><Rich t={p.conclusion} /></p>
        <p className="rounded-lg border border-white/10 bg-panel p-3 text-sm">Note: Statements marked “Opinion” are the author’s views, not facts or paid endorsements. Check current prices and specs before buying.</p>
        <h2>Keep Reading</h2>
        <ul className="grid gap-3">{rel.map((r) => <li key={r.slug}><h3><Link href={`/blog/${r.slug}`} className="hover:text-neon">{r.title}</Link></h3></li>)}</ul>
      </div>
    </article>
  );
}
