"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#portfolio", label: "Work" },
  { href: "#contact", label: "Contact" }
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pointer-events-auto mx-auto mt-3 flex w-[min(1100px,calc(100%-1rem))] items-center justify-between rounded-2xl border border-border/80 bg-background/75 px-3 py-2 backdrop-blur-xl sm:mt-4 sm:w-[min(1100px,calc(100%-2rem))] sm:px-5 sm:py-3"
      >
        <Link href="#hero" className="font-heading text-xs font-semibold tracking-wide sm:text-sm">
          PEI Web Studio
        </Link>
        <div className="hidden items-center gap-2 text-sm sm:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3 py-1.5 hover:bg-muted">
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            className="h-9 w-9 rounded-full p-0"
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
            className="pointer-events-auto mx-auto mt-2 w-[min(1100px,calc(100%-1rem))] rounded-2xl border border-border/80 bg-background/90 p-2 backdrop-blur-xl sm:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-muted"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
