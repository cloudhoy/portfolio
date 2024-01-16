import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "var(--font-size-sm)",
      base: "var(--font-size-base)",
      xl: "var(--font-size-xl)",
      "2xl": "var(--font-size-2xl)",
      "3xl": "var(--font-size-3xl)",
      "4xl": "var(--font-size-4xl)",
      "5xl": "var(--font-size-5xl)",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans)"],
        caveat: ["var(--font-caveat)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#42444C",
          "primary-content": "#E7E6E8",
          secondary: "#D7D7D7",
          accent: "#1D2C51",
          "accent-content": "#E7E6E8",
          neutral: "#C7C5C7",
          "base-100": "#E8E5E9",
        },
        dark: {
          primary: "hsl(60, 17%, 75%)",
          "primary-content": "hsl(240, 68%, 5%)",
          secondary: "hsl(240, 16%, 23%)",
          "secondary-content": "hsl(240, 46%, 95%)",
          accent: "hsl(210, 72%, 49%)",
          "accent-content": "hsl(240, 46%, 95%)",
          neutral: "#030d1d",
          "base-100": "hsl(240, 68%, 5%)",
          "base-content": "hsl(240, 46%, 95%)",
        },
      },
    ],
  },
};
export default config;
