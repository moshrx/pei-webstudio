import type { Config } from "tailwindcss";

const withOpacity = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        page: withOpacity("--bg"),
        body: withOpacity("--body"),
        muted: withOpacity("--muted")
      },
      fontFamily: {
        serif: ["'Instrument Serif'", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
