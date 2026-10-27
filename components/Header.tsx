"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Terminal, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { href: "#features", label: "Services" }, { href: "#portfolio", label: "Work" },
  { href: "#geo-audit", label: "AI Audit" }, { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const href = (anchor: string) => pathname === "/" ? anchor : `/${anchor}`;

  useEffect(() => {
    if (!menuOpen) return;
    const modal = dialog.current;
    const opener = trigger.current;
    modal?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const media = window.matchMedia("(min-width: 1024px)");
    const onResize = () => { if (media.matches) setMenuOpen(false); };
    media.addEventListener("change", onResize);
    return () => {
      modal?.close();
      document.body.style.overflow = previous;
      media.removeEventListener("change", onResize);
      opener?.focus();
    };
  }, [menuOpen]);

  return <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 py-4 sm:px-6 sm:py-6">
    <a href="#main-content" className="pointer-events-auto sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-body focus:px-4 focus:py-2 focus:text-page">Skip to main content</a>
    <div className="studio-nav pointer-events-auto mx-auto flex items-center justify-between gap-2 px-4 py-3 sm:px-6">
      <Link href="/" className="flex shrink-0 items-center gap-2 text-base font-semibold text-body sm:text-lg"><Terminal className="size-5 sm:size-6" aria-hidden="true" />PEI Web Studio</Link>
      <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
        {navItems.map(item => <Link key={item.href} href={href(item.href)} className="py-2 text-sm font-medium text-body/80 hover:text-body">{item.label}</Link>)}
      </nav>
      <div className="flex items-center gap-1 sm:gap-2">
        <ThemeToggle />
        <Link href={href("#contact")} className="studio-nav-cta hidden px-4 py-3 text-sm font-medium lg:inline-flex">Let&apos;s Talk ↗</Link>
        <button ref={trigger} type="button" aria-label="Open navigation menu" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(true)} className="grid size-11 place-items-center rounded-full text-body lg:hidden"><Menu className="size-5" /></button>
      </div>
    </div>
    <dialog ref={dialog} id="mobile-menu" aria-label="Navigation menu" onCancel={() => setMenuOpen(false)} onClick={event => { if (event.target === event.currentTarget) setMenuOpen(false); }} className="pointer-events-auto fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-page/95 p-6 text-body backdrop:backdrop-blur-md">
      <button type="button" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)} className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-body/20"><X className="size-5" /></button>
      <nav aria-label="Mobile navigation" className="flex min-h-full flex-col items-center justify-center gap-3">
        {navItems.map(item => <Link key={item.href} href={href(item.href)} onClick={() => setMenuOpen(false)} className="font-serif-display px-8 py-3 text-4xl">{item.label}</Link>)}
      </nav>
    </dialog>
  </header>;
}
