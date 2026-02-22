import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))"
      },
      boxShadow: {
        glass: "0 8px 40px rgba(15, 23, 42, 0.25)"
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at 20% 20%, rgba(251,191,36,0.15), transparent 35%), radial-gradient(circle at 80% 0%, rgba(14,165,233,0.15), transparent 40%), radial-gradient(circle at 50% 80%, rgba(16,185,129,0.15), transparent 45%)"
      }
    }
  },
  plugins: []
};

export default config;
