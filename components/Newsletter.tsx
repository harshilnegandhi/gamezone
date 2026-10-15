"use client";
import { useState } from "react";
export default function Newsletter() {
  const [msg, setMsg] = useState("");
  return (
    <section className="wrap my-16" aria-labelledby="nl">
      <div className="rounded-2xl border border-violet/40 bg-gradient-to-r from-violet/20 to-sky/10 p-8 text-center">
        <h2 id="nl" className="text-2xl">Join the GameZone Newsletter</h2>
        <p className="mt-2 text-slate-300">Get new guides and gaming news in your inbox.</p>
        <form className="mx-auto mt-5 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => { e.preventDefault(); setMsg("Thanks for your interest! Newsletter signup is not connected to an email service yet, so your address was NOT saved. Connect a provider such as Buttondown or Mailchimp to enable it."); }}>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input id="email" type="email" required placeholder="you@example.com" className="flex-1 rounded-lg border border-white/20 bg-ink px-4 py-3 outline-none focus:border-sky" />
          <button className="btn" type="submit">Subscribe</button>
        </form>
        {msg && <p role="status" className="mx-auto mt-4 max-w-md text-sm text-sky">{msg}</p>}
      </div>
    </section>
  );
}
