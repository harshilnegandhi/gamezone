import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/posts";
export const metadata: Metadata = { title: "Contact GameZone", description: "Get in touch with the GameZone team with feedback, questions or article suggestions.", alternates: { canonical: "/contact" } };
export default function Contact() {
  const f = "mt-1 w-full rounded-lg border border-white/20 bg-panel px-4 py-3 outline-none focus:border-sky";
  return (
    <div className="wrap max-w-xl py-12"><h1 className="text-4xl">Contact Us</h1>
      <p className="my-4 text-slate-300">This form opens your email app with your message addressed to {CONTACT_EMAIL}. No data is stored on our servers.</p>
      <form action={`mailto:${CONTACT_EMAIL}`} method="post" encType="text/plain" className="space-y-4">
        <div><label htmlFor="n">Name</label><input id="n" name="name" required className={f} /></div>
        <div><label htmlFor="e">Email</label><input id="e" name="email" type="email" required className={f} /></div>
        <div><label htmlFor="m">Message</label><textarea id="m" name="message" rows={5} required className={f} /></div>
        <button className="btn" type="submit">Send Message</button>
      </form></div>
  );
}
