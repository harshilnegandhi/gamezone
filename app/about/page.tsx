import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "About GameZone", description: "Learn what GameZone is about: honest gaming guides, clearly labelled opinions and no made-up statistics.", alternates: { canonical: "/about" } };
export default function About() {
  return <div className="wrap max-w-3xl py-12 prose-gz"><h1 className="text-4xl">About GameZone</h1><p>GameZone is a gaming blog covering PC, mobile, console, Minecraft, GTA, esports and gaming technology.</p><h2>Our Principles</h2><p>We write original, practical guides, label opinions clearly and avoid invented numbers. Gaming changes fast, so we encourage you to verify current prices and specs.</p><h2>Start Reading</h2><p><Link href="/blog" className="text-sky underline">Browse all articles</Link> or <Link href="/contact" className="text-sky underline">contact us</Link> with feedback.</p></div>;
}
