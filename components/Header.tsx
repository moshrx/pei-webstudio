"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Terminal, X } from "lucide-react";

import { ThemeToggle } from "@/components/ThemeToggle";

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
    if (pathname !== "/") {
      window.location.href = `/${href}`;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 pl-6 pr-6 py-6">
      {/* Skip Links */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-body focus:px-4 focus:py-2 focus:text-page focus-visible:ring-2 focus-visible:ring-body/40"
      >
        Skip to main content
      </a>
      <a
        href="#portfolio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-14 focus:z-50 focus:rounded-lg focus:bg-body focus:px-4 focus:py-2 focus:text-page focus-visible:ring-2 focus-visible:ring-body/40"
      >
        Skip to portfolio
      </a>

      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="liquid-glass pointer-events-auto mx-auto flex max-w-5xl items-center justify-between rounded-full px-6 py-3"
      >
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-body">
          <Terminal size={24} />
          PEI Web Studio
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="cursor-pointer text-sm font-medium text-body/80 transition-colors hover:text-body"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <button
            onClick={() => handleNavClick("#contact")}
            className="liquid-glass cursor-pointer rounded-full px-6 py-2 text-sm font-medium text-body transition-colors hover:bg-body/5"
          >
            Start a Project
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="liquid-glass flex size-9 items-center justify-center rounded-full text-body"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 md:hidden"
          >
            <div className="liquid-glass absolute inset-0 bg-page/80" />
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.07 } } }}
              className="relative flex flex-col items-center gap-6"
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 }
                  }}
                  onClick={() => {
                    handleNavClick(item.href);
                    setMenuOpen(false);
                  }}
                  className="font-serif-display text-4xl text-body/80 transition-colors hover:text-body"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0 }
                }}
                onClick={() => {
                  handleNavClick("#contact");
                  setMenuOpen(false);
                }}
                className="liquid-glass mt-4 rounded-full px-8 py-3 text-body"
              >
                Start a Project
              </motion.button>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
