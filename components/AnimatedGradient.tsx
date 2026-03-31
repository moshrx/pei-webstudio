"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function AnimatedGradient() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isDark ? "opacity-100" : "opacity-100"
        }`}
        style={{
          background: isDark
            ? "radial-gradient(ellipse at 50% 0%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 40%), radial-gradient(ellipse at 20% 80%, rgba(34, 211, 238, 0.08) 0%, transparent 40%)"
            : "radial-gradient(ellipse at 50% 0%, rgba(34, 211, 238, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(20, 184, 166, 0.15) 0%, transparent 40%), radial-gradient(ellipse at 20% 80%, rgba(14, 165, 233, 0.12) 0%, transparent 40%)"
        }}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full blur-3xl"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)"
        }}
        animate={{
          x: [0, 100, 50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ x: "-20%", y: "-10%" }}
      />

      <motion.div
        className="absolute h-[400px] w-[400px] rounded-full blur-3xl"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(20, 184, 166, 0.25) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(20, 184, 166, 0.35) 0%, transparent 70%)"
        }}
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.85, 1.15, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        initial={{ right: "-10%", top: "20%" }}
      />

      <motion.div
        className="absolute h-[350px] w-[350px] rounded-full blur-3xl"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(103, 232, 249, 0.2) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)"
        }}
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -60, -80, 0],
          scale: [1, 1.1, 0.95, 1]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        initial={{ left: "30%", bottom: "0%" }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
