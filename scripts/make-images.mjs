// Generates placeholder gaming artwork (SVG) into public/images. Replace with real images any time (see README).
import { writeFileSync } from "node:fs";
const items = [
 ["best-pc-games-2026-hero","#39ff14","#a855f7","PC"],["top-mobile-games-android-hero","#38bdf8","#a855f7","MOBILE"],
 ["minecraft-survival-guide-hero","#39ff14","#38bdf8","BLOCKS"],["gta-v-beginner-tips-hero","#a855f7","#f97316","GTA V"],
 ["pc-vs-console-gaming-hero","#38bdf8","#39ff14","PC vs CONSOLE"],["budget-gaming-laptops-hero","#a855f7","#39ff14","LAPTOP"],
 ["improve-fps-pc-games-hero","#39ff14","#38bdf8","FPS"],["esports-india-hero","#a855f7","#38bdf8","ESPORTS"],
 ["gaming-accessories-hero","#38bdf8","#a855f7","GEAR"],["future-of-gaming-hero","#a855f7","#39ff14","FUTURE"],
 ["og-default","#39ff14","#a855f7","GAMEZONE"]];
for (const [f,a,b,t] of items) {
 writeFileSync(`public/images/${f}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="1200" height="630" fill="#07070d"/><circle cx="950" cy="120" r="320" fill="url(#g)" opacity=".35"/><circle cx="200" cy="560" r="260" fill="url(#g)" opacity=".25"/><g fill="none" stroke="url(#g)" stroke-width="10"><rect x="330" y="215" width="540" height="200" rx="90"/><path d="M420 315h90M465 270v90"/></g><circle cx="720" cy="290" r="18" fill="${a}"/><circle cx="770" cy="340" r="18" fill="${b}"/><text x="600" y="520" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="64" font-weight="900" fill="#fff" letter-spacing="8">${t}</text></svg>`);
}
