import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostCard from "@/components/PostCard";
import { cats, sorted } from "@/lib/posts";
export const dynamicParams = false;
export const generateStaticParams = () => cats.map((c) => ({ slug: c.slug }));
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = cats.find((x) => x.slug === params.slug);
  if (!c) return {};
  return { title: `${c.name} Articles`, description: c.desc, alternates: { canonical: `/category/${c.slug}` } };
}
export default function Category({ params }: { params: { slug: string } }) {
  const c = cats.find((x) => x.slug === params.slug);
  if (!c) notFound();
  const list = sorted.filter((p) => p.cat === c.slug);
  return <div className="wrap py-12"><h1 className="text-4xl">{c.name}</h1><p className="mb-6 mt-2 text-slate-400">{c.desc}</p><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((p) => <PostCard key={p.slug} post={p} />)}</div></div>;
}
