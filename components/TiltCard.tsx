"use client";

import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glareEnabled?: boolean;
  tiltAmount?: number;
  scale?: number;
}

function GlareOverlay({
  springX,
  glareX,
  glareY
}: {
  springX: MotionValue<number>;
  glareX: MotionValue<number>;
  glareY: MotionValue<number>;
}) {
  const opacity = useTransform(springX, [0, 0.5, 1], [0.15, 0, 0.15]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-inherit"
      style={{ opacity }}
    >
      <motion.div
        className="absolute h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-white/40 via-transparent to-transparent"
        style={{
          left: glareX,
          top: glareY
        }}
      />
    </motion.div>
  );
}

export function TiltCard({
  children,
  className = "",
  glareEnabled = false,
  tiltAmount = 12,
  scale = 1.02
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { stiffness: 400, damping: 30, mass: 0.8 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rotateX = useTransform(springY, [0, 1], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(springX, [0, 1], [-tiltAmount, tiltAmount]);

  // Glare effect position
  const glareX = useTransform(springX, [0, 1], [0, 100]);
  const glareY = useTransform(springY, [0, 1], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="h-full"
      >
        {children}

        {/* Glare overlay */}
        {glareEnabled && (
          <GlareOverlay springX={springX} glareX={glareX} glareY={glareY} />
        )}
      </motion.div>
    </motion.div>
  );
}
