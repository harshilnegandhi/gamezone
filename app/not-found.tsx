import Link from "next/link";
export default function NotFound() {
  return <div className="wrap py-28 text-center"><p className="glow text-7xl font-black text-neon">404</p><h1 className="mt-4 text-3xl">Game Over: Page Not Found</h1><p className="my-4 text-slate-400">That page doesn’t exist or was moved.</p><Link href="/" className="btn">Back to Home</Link></div>;
}
