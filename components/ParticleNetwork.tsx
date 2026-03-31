"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  targetAlpha: number;
}

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  const animationRef = useRef<number>(0);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const initParticles = useCallback(
    (width: number, height: number) => {
      const particleCount = Math.min(Math.floor((width * height) / 25000), 60);
      const particles: Particle[] = [];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1.5,
          alpha: Math.random() * 0.5 + 0.3,
          targetAlpha: Math.random() * 0.5 + 0.3
        });
      }
      return particles;
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      particlesRef.current = initParticles(rect.width, rect.height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isActive: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let frameCount = 0;
    const animate = () => {
      frameCount++;
      // Render every 2nd frame for performance (30fps)
      if (frameCount % 2 === 0) {
        const rect = canvas.getBoundingClientRect();
        ctx.clearRect(0, 0, rect.width, rect.height);

        const particles = particlesRef.current;
        const mouse = mouseRef.current;

        // Update and draw particles
        particles.forEach((particle, i) => {
          // Mouse interaction (every 5th particle for performance)
          if (mouse.isActive && i % 5 === 0) {
            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
              const force = (100 - dist) / 100;
              particle.vx -= (dx / dist) * force * 0.02;
              particle.vy -= (dy / dist) * force * 0.02;
            }
          }

          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Boundary bounce with damping
          if (particle.x < 0 || particle.x > rect.width) {
            particle.vx *= -0.8;
            particle.x = Math.max(0, Math.min(rect.width, particle.x));
          }
          if (particle.y < 0 || particle.y > rect.height) {
            particle.vy *= -0.8;
            particle.y = Math.max(0, Math.min(rect.height, particle.y));
          }

          // Gentle drift
          particle.vx += (Math.random() - 0.5) * 0.01;
          particle.vy += (Math.random() - 0.5) * 0.01;

          // Damping
          particle.vx *= 0.99;
          particle.vy *= 0.99;

          // Smooth alpha transition
          particle.alpha += (particle.targetAlpha - particle.alpha) * 0.02;
          if (Math.random() < 0.001) {
            particle.targetAlpha = Math.random() * 0.5 + 0.3;
          }

          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? `rgba(103, 232, 249, ${particle.alpha})`
            : `rgba(14, 165, 233, ${particle.alpha})`;
          ctx.fill();
        });

        // Draw connections (limited for performance)
        const maxConnections = 3;
        const connectionDistance = 120;

        for (let i = 0; i < particles.length; i++) {
          let connections = 0;
          for (let j = i + 1; j < particles.length && connections < maxConnections; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionDistance) {
              connections++;
              const alpha = (1 - dist / connectionDistance) * 0.3;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = isDark
                ? `rgba(103, 232, 249, ${alpha})`
                : `rgba(14, 165, 233, ${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [initParticles, isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full cursor-crosshair"
      style={{ touchAction: "none" }}
    />
  );
}
