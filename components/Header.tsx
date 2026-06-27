"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Terminal, X } from "lucide-react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#features", label: "Systems" },
  { href: "#portfolio", label: "Work" },
  { href: "#about", label: "Stack" },
  { href: "#contact", label: "Contact" }
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (href: string) => {
    // If on a different page, navigate to home with the anchor
    if (pathname !== "/") {
      window.location.href = `/${href}`;
    } else {
      // On home page, scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      {/* Skip Links */}
      <a
        href="#main-content"
        className="sr-only text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-2 focus:outline-offset-2 focus:outline-primary"
      >
        Skip to main content
      </a>
      <a
        href="#portfolio"
        className="sr-only text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-14 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-2 focus:outline-offset-2 focus:outline-primary"
      >
        Skip to portfolio
      </a>
      <motion.div
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pointer-events-auto mx-auto mt-3 flex w-[min(1180px,calc(100%-1rem))] items-center justify-between rounded-lg border border-border/80 bg-background/80 px-3 py-2 shadow-lg shadow-slate-950/5 backdrop-blur-xl sm:mt-4 sm:w-[min(1180px,calc(100%-2rem))] sm:px-4 sm:py-3"
      >
        <Link href="/" className="flex items-center gap-2 font-heading text-xs font-semibold tracking-wide sm:text-sm">
          <span className="flex size-8 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
            <Terminal className="size-4" />
          </span>
          PEI Web Studio
        </Link>
        <div className="hidden items-center gap-2 text-sm sm:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="cursor-pointer rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </button>
          ))}
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            className="h-9 w-9 rounded-md p-0"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </motion.div>
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto mx-auto mt-2 w-[min(1180px,calc(100%-1rem))] rounded-lg border border-border/80 bg-background/90 p-2 backdrop-blur-xl sm:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  handleNavClick(item.href);
                  setMenuOpen(false);
                }}
                className="block w-full cursor-pointer rounded-md px-4 py-3 text-left text-sm font-medium hover:bg-muted"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
