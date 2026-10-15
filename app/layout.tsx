import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { SITE } from "@/lib/posts";
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "GameZone – The Ultimate Gaming Hub", template: "%s | GameZone" },
  description: "Gaming news, reviews, guides and tips for PC, mobile, console, Minecraft, GTA and esports.",
  alternates: { canonical: "/" },
  openGraph: { siteName: "GameZone", type: "website", locale: "en_IN", images: ["/images/og-default.svg"] },
  twitter: { card: "summary_large_image" },
  verification: { google: "1DUHjbSs3CZPQkrew-ClzYRLS3sg5cisAidIDTh8v88" },
};
const nav: [string, string][] = [["Home", "/"], ["All Blogs", "/blog"], ["PC", "/category/pc-gaming"], ["Mobile", "/category/mobile-gaming"], ["Minecraft", "/category/minecraft"], ["Esports", "/category/esports"], ["About", "/about"], ["Contact", "/contact"]];
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-neon focus:p-2 focus:text-black">Skip to content</a>
        <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/85 backdrop-blur">
          <div className="wrap flex items-center justify-between py-3">
            <Link href="/" className="text-2xl font-black tracking-widest text-white">GAME<span className="text-neon">ZONE</span></Link>
            <nav aria-label="Main" className="hidden gap-5 text-sm font-semibold lg:flex">{nav.map(([n, h]) => <Link key={h} href={h} className="hover:text-neon">{n}</Link>)}</nav>
            <details className="relative lg:hidden">
              <summary className="cursor-pointer list-none rounded border border-white/20 px-3 py-1.5 text-sm">Menu</summary>
              <nav aria-label="Mobile" className="absolute right-0 mt-2 flex w-48 flex-col gap-1 rounded-lg border border-white/10 bg-panel p-3">{nav.map(([n, h]) => <Link key={h} href={h} className="rounded px-2 py-1.5 hover:bg-white/10">{n}</Link>)}</nav>
            </details>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="mt-16 border-t border-white/10 bg-panel/60">
          <div className="wrap grid gap-8 py-10 sm:grid-cols-3">
            <div><p className="text-xl font-black text-white">GAME<span className="text-neon">ZONE</span></p><p className="mt-2 text-sm text-slate-400">The Ultimate Gaming Hub: news, guides and tips for every kind of gamer.</p></div>
            <nav aria-label="Footer pages"><h2 className="mb-2 text-sm text-sky">Explore</h2><ul className="space-y-1 text-sm">{nav.slice(0, 2).concat(nav.slice(6)).map(([n, h]) => <li key={h}><Link href={h} className="hover:text-neon">{n}</Link></li>)}</ul></nav>
            <nav aria-label="Footer categories"><h2 className="mb-2 text-sm text-sky">Categories</h2><ul className="space-y-1 text-sm">{nav.slice(2, 6).map(([n, h]) => <li key={h}><Link href={h} className="hover:text-neon">{n}</Link></li>)}</ul></nav>
          </div>
          <p className="border-t border-white/10 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} GameZone. All game names belong to their owners.</p>
        </footer>
      </body>
    </html>
  );
}
