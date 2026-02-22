"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pointer-events-auto mx-auto mt-4 flex w-[min(1100px,calc(100%-2rem))] items-center justify-between rounded-2xl border border-border/80 bg-background/70 px-5 py-3 backdrop-blur-xl"
      >
        <Link href="#hero" className="font-heading text-sm font-semibold tracking-wide">
          PEI Web Studio
        </Link>
        <div className="flex items-center gap-2 text-sm">
          <Link href="#features" className="rounded-full px-3 py-1.5 hover:bg-muted">
            Features
          </Link>
          <Link href="#portfolio" className="rounded-full px-3 py-1.5 hover:bg-muted">
            Work
          </Link>
          <ThemeToggle />
        </div>
      </motion.div>
    </header>
  );
}
