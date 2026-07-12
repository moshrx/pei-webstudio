"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BriefcaseBusiness, Home, Layers, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const items = [
  { href: "#hero", label: "Home", icon: Home },
  { href: "#features", label: "Systems", icon: Layers },
  { href: "#portfolio", label: "Portfolio", icon: BriefcaseBusiness },
  { href: "#contact", label: "Contact", icon: Mail }
];

function DockItem({
  item,
  hovered,
  onHoverChange
}: {
  item: (typeof items)[0];
  hovered: boolean;
  onHoverChange: (v: boolean) => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const distance = useMotionValue(0);
  const springDistance = useSpring(distance, {
    stiffness: 300,
    damping: 30,
    mass: 0.8
  });

  const iconScale = useTransform(springDistance, [-80, 0, 80], [1, 1.4, 1]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    distance.set(e.clientX - centerX);
  };

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => {
        onHoverChange(false);
        distance.set(0);
      }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="liquid-glass pointer-events-none absolute -top-9 whitespace-nowrap rounded-md px-2 py-1 text-[10px] font-medium text-body"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>

      <Link
        ref={ref}
        href={item.href}
        aria-label={item.label}
        onMouseMove={handleMouseMove}
        className="flex items-center justify-center rounded-full p-2.5 transition-colors hover:bg-body/5 sm:p-3"
      >
        <motion.div style={{ scale: iconScale }} className="flex items-center justify-center">
          <item.icon
            size={20}
            className={`transition-colors duration-200 ${hovered ? "text-body" : "text-body/80"}`}
          />
        </motion.div>
      </Link>
    </div>
  );
}

export function FloatingDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  // Hide while hero is in view; fade in after scrolling past it.
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="liquid-glass fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full px-4 py-3"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {items.map((item, index) => (
            <DockItem
              key={item.label}
              item={item}
              hovered={hoveredIndex === index}
              onHoverChange={(v) => setHoveredIndex(v ? index : null)}
            />
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
