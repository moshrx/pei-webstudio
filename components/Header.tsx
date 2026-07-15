"use client";

import { useEffect, useState } from "react";
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

  // Lock body scroll and close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

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
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="pointer-events-auto fixed inset-0 z-[60] md:hidden"
          >
            {/* Backdrop, tap anywhere to close */}
            <button
              tabIndex={-1}
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 h-full w-full cursor-default bg-page/90 backdrop-blur-md"
            />

            {/* Explicit close button, top-right, above the backdrop and nav */}
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
              className="liquid-glass absolute right-6 top-6 z-20 flex size-11 items-center justify-center rounded-full text-body"
            >
              <X className="size-5" />
            </button>

            {/* Container ignores pointer events so only the buttons are targets;
                keeps the backdrop/close reachable everywhere else. */}
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.07 } } }}
              className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center gap-2"
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
                  className="font-serif-display pointer-events-auto px-8 py-3 text-4xl text-body/80 transition-colors hover:text-body"
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
                className="liquid-glass pointer-events-auto mt-6 rounded-full px-8 py-3.5 text-body"
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
