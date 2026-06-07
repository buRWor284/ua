import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        accent: "#2563eb",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#374151",
            a: { color: "#2563eb", textDecoration: "none", "&:hover": { textDecoration: "underline" } },
            code: { backgroundColor: "#f3f4f6", padding: "0.2em 0.4em", borderRadius: "3px", fontSize: "0.9em" },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
            pre: { backgroundColor: "#1e293b", color: "#e2e8f0" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
