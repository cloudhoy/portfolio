import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "var(--font-size-xs)",
      sm: "var(--font-size-sm)",
      base: "var(--font-size-base)",
      lg: "var(--font-size-lg)",
      xl: "var(--font-size-xl)",
      "2xl": "var(--font-size-2xl)",
      "3xl": "var(--font-size-3xl)",
      "4xl": "var(--font-size-4xl)",
      "5xl": "var(--font-size-5xl)",
      "6xl": "var(--font-size-6xl)",
      "7xl": "var(--font-size-7xl)",
      "8xl": "var(--font-size-8xl)",
      "9xl": "var(--font-size-9xl)",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans)"],
        "sans-display": ["var(--font-noto-sans-display)"],
        serif: ["var(--font-noto-serif)"],
        caveat: ["var(--font-caveat)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "hsl(205 90% 40%)",
          "primary-content": "hsl(0 0 100%)",
          "secondary": "hsl(224 58% 15%)",
          "secondary-content": "hsl(0 0 100%)",
          "accent": "hsl(175 100% 39%)",
          "neutral": "hsl(216 33% 97%)",
          "base-100": "hsl(285 8% 91%)",
          "base-content": "hsl(222 48% 11%)",  
        },
        dark: {
          "primary": "hsl(222, 76%, 47%)",
          "primary-content": "hsl(0 0 100%)",
          "secondary": "hsl(225 58% 85%)",
          "accent": "hsl(175 100% 61%)",
          "neutral": "hsl(252 13% 15%)",
          "base-100": "hsl(248 13% 12%)",
          "base-content": "hsl(240 46% 95%)",
        },
      },
    ],
  },
};
export default config;
