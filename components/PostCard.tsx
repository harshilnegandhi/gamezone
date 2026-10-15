import Link from "next/link";
import { catOf, fmt, type Post } from "@/lib/posts";
export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="card flex flex-col">
      <Link href={`/blog/${post.slug}`} className="block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/images/${post.img}.svg`} alt={post.alt} width={1200} height={630} loading="lazy" decoding="async" className="aspect-[1200/630] w-full object-cover" />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between text-xs">
          <Link href={`/category/${post.cat}`} className="font-bold uppercase text-sky hover:underline">{catOf(post.cat).name}</Link>
          <time dateTime={post.date} className="text-slate-400">{fmt(post.date)}</time>
        </div>
        <h3 className="text-lg"><Link href={`/blog/${post.slug}`} className="hover:text-neon">{post.title}</Link></h3>
        <p className="text-sm text-slate-400">{post.desc}</p>
      </div>
    </article>
  );
}
