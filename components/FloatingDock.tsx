"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, Home, Layers, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  { href: "#hero", label: "Home", icon: Home },
  { href: "#features", label: "Services", icon: Layers },
  { href: "#portfolio", label: "Portfolio", icon: BriefcaseBusiness },
  { href: "#contact", label: "Contact", icon: Mail }
];

export function FloatingDock() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 640px) and (hover: hover) and (pointer: fine)");
    let observer: IntersectionObserver | undefined;
    const update = () => {
      observer?.disconnect();
      if (!media.matches) { setVisible(false); return; }
      const hero = document.getElementById("hero");
      if (!hero) { setVisible(true); return; }
      observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0.35 });
      observer.observe(hero);
    };
    update();
    media.addEventListener("change", update);
    return () => { observer?.disconnect(); media.removeEventListener("change", update); };
  }, [pathname]);

  if (!visible) return null;
  return <nav aria-label="Quick navigation" className="liquid-glass fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-1 rounded-full px-4 py-3">
    {items.map(item => <Link key={item.href} href={pathname === "/" ? item.href : `/${item.href}`} aria-label={item.label} title={item.label} className="grid size-11 place-items-center rounded-full hover:bg-body/10"><item.icon size={20} aria-hidden="true" /></Link>)}
  </nav>;
}
