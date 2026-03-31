"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Globe, Zap, Shield, Sparkles, Code, Rocket } from "lucide-react";

const cards = [
  { icon: Globe, label: "Global", color: "#22d3ee", delay: 0 },
  { icon: Zap, label: "Fast", color: "#fbbf24", delay: 0.1 },
  { icon: Shield, label: "Secure", color: "#34d399", delay: 0.2 },
  { icon: Sparkles, label: "Modern", color: "#a78bfa", delay: 0.3 },
  { icon: Code, label: "Clean", color: "#f472b6", delay: 0.4 },
  { icon: Rocket, label: "Launch", color: "#fb7185", delay: 0.5 }
];

const floatingPositions = [
  { x: -35, y: -25, rotate: -8 },
  { x: 38, y: -35, rotate: 12 },
  { x: -42, y: 20, rotate: 6 },
  { x: 32, y: 25, rotate: -4 },
  { x: 0, y: -45, rotate: 0 },
  { x: 0, y: 40, rotate: 3 }
];

function GlassCard({
  card,
  position,
  index,
  mouseX,
  mouseY
}: {
  card: (typeof cards)[0];
  position: (typeof floatingPositions)[0];
  index: number;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Parallax based on card position and mouse
  const parallaxX = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const parallaxY = useTransform(mouseY, [-0.5, 0.5], [-15, 15]);

  const springConfig = { stiffness: 150, damping: 20 };
  const springX = useSpring(parallaxX, springConfig);
  const springY = useSpring(parallaxY, springConfig);

  // Individual card float animation
  const floatY = useMotionValue(0);
  const floatRotate = useMotionValue(0);
  const baseRotate = useMotionValue(position.rotate);

  useEffect(() => {
    const duration = 3000 + index * 500;
    const startTime = Date.now();
    let rafId: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % duration) / duration;
      
      floatY.set(Math.sin(progress * Math.PI * 2) * 8);
      floatRotate.set(Math.sin(progress * Math.PI * 2 + index) * 2);
      
      rafId = requestAnimationFrame(animate);
    };
    
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [floatY, floatRotate, index]);

  const combinedY = useTransform(
    [springY, floatY],
    ([s, f]) => (s as number) + (f as number)
  );
  const combinedRotate = useTransform(
    [baseRotate, floatRotate],
    ([b, f]) => (b as number) + (f as number)
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.5 + card.delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{
        x: springX,
        y: combinedY,
        rotate: combinedRotate,
        translateX: `${position.x}%`,
        translateY: `${position.y}%`
      }}
      className="absolute left-1/2 top-1/2"
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: 0, zIndex: 50 }}
        transition={{ duration: 0.3 }}
        className="group relative cursor-pointer"
      >
        {/* Glow effect */}
        <div
          className="absolute -inset-2 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60"
          style={{ backgroundColor: card.color }}
        />
        
        {/* Card */}
        <div
          className={`relative flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-2xl border backdrop-blur-xl transition-all duration-300 sm:h-20 sm:w-20 ${
            isDark
              ? "border-white/10 bg-white/5 shadow-2xl shadow-black/20"
              : "border-white/40 bg-white/60 shadow-xl shadow-black/5"
          }`}
        >
          <card.icon
            className="size-6 transition-transform duration-300 group-hover:scale-110 sm:size-7"
            style={{ color: card.color }}
          />
          <span className="text-[9px] font-medium text-foreground/70 sm:text-[10px]">
            {card.label}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MorphingBlob({
  mouseX,
  mouseY,
  color,
  delay = 0
}: {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  color: string;
  delay?: number;
}) {
  const x = useTransform(mouseX, [-0.5, 0.5], [-30, 30]);
  const y = useTransform(mouseY, [-0.5, 0.5], [-30, 30]);
  const springX = useSpring(x, { stiffness: 50, damping: 30 });
  const springY = useSpring(y, { stiffness: 50, damping: 30 });

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%"
          ]
        }}
        transition={{
          duration: 12,
          delay,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="h-48 w-48 opacity-40 blur-3xl sm:h-64 sm:w-64"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
}

export function GlassConstellation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  if (!mounted) {
    return (
      <div className="h-[300px] w-full animate-pulse rounded-2xl bg-muted/60 sm:h-[360px] md:h-[520px]" />
    );
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[300px] w-full overflow-hidden sm:h-[360px] md:h-[520px]"
    >
      {/* Morphing background blobs */}
      <div className="absolute inset-0">
        <MorphingBlob mouseX={mouseX} mouseY={mouseY} color="#22d3ee" delay={0} />
        <MorphingBlob mouseX={mouseX} mouseY={mouseY} color="#a78bfa" delay={4} />
        <MorphingBlob mouseX={mouseX} mouseY={mouseY} color="#34d399" delay={8} />
      </div>

      {/* Central glow */}
      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-3xl" />

      {/* Glass cards */}
      <div className="absolute inset-0">
        {cards.map((card, index) => (
          <GlassCard
            key={card.label}
            card={card}
            position={floatingPositions[index]}
            index={index}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        ))}
      </div>

      {/* Connection lines SVG */}
      <svg className="absolute inset-0 h-full w-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Animated connection paths */}
        <motion.path
          d="M 150 200 Q 250 150 350 200 T 550 200"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          strokeDasharray="5,5"
          animate={{
            strokeDashoffset: [0, -20]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>
    </div>
  );
}
