"use client";

import { motion } from "framer-motion";

import { useMagnetic } from "@/hooks/use-magnetic";

interface MagneticHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function MagneticHeading({ title, subtitle, className }: MagneticHeadingProps) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic(24);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      <motion.h2
        style={{ x, y }}
        className="font-heading text-3xl font-semibold leading-tight tracking-tight md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
