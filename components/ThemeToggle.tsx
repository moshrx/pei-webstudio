"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch since theme is only known on the client.
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      // Label stays generic until mounted to avoid a server/client hydration mismatch.
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Toggle theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="liquid-glass flex size-11 items-center justify-center rounded-full text-body transition-colors hover:bg-body/5"
    >
      {mounted ? (
        <span
          key={isDark ? "dark" : "light"}
        >
          {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
        </span>
      ) : (
        <span className="size-4" />
      )}
    </button>
  );
}
