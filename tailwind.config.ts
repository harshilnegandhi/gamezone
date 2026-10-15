import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { ink: "#07070d", panel: "#11111c", neon: "#39ff14", violet: "#a855f7", sky: "#38bdf8" } } },
  plugins: [],
} satisfies Config;
