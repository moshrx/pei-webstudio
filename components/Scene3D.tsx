"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";

/**
 * Fixed, full-viewport WebGL background: a slowly rotating wireframe
 * icosahedron wrapped in a drifting particle field. Theme-aware (recolors
 * on light/dark), parallaxes to the pointer, and disables itself under
 * prefers-reduced-motion (a static gradient stands in).
 */
export function Scene3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  // Keep the latest theme in a ref so the animation loop reads it live.
  const themeRef = useRef(resolvedTheme);
  themeRef.current = resolvedTheme;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // ─── Central distorted sphere (wireframe) ───────────────────────
    const geometry = new THREE.IcosahedronGeometry(2.1, 6);
    const basePositions = geometry.attributes.position.array.slice() as Float32Array;
    const material = new THREE.MeshBasicMaterial({
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // ─── Particle field ─────────────────────────────────────────────
    const particleCount = 900;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.03,
      transparent: true,
      opacity: 0.6
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ─── Theme colors ───────────────────────────────────────────────
    const colorFor = (theme: string | undefined) =>
      theme === "light"
        ? { mesh: 0xec482e, particle: 0xfa8c5a }
        : { mesh: 0xec482e, particle: 0x785adc };

    const applyColors = () => {
      const c = colorFor(themeRef.current);
      material.color.setHex(c.mesh);
      particleMat.color.setHex(c.particle);
    };
    applyColors();

    // ─── Interaction ────────────────────────────────────────────────
    const pointer = { x: 0, y: 0 };
    const handlePointer = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", handlePointer);

    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // ─── Animate ────────────────────────────────────────────────────
    const clock = new THREE.Clock();
    let raf = 0;
    const posAttr = geometry.attributes.position;

    const tick = () => {
      const t = clock.getElapsedTime();

      // Vertex distortion: gentle noise pulsing on the sphere surface.
      for (let i = 0; i < basePositions.length; i += 3) {
        const bx = basePositions[i];
        const by = basePositions[i + 1];
        const bz = basePositions[i + 2];
        const wave =
          0.18 *
          Math.sin(bx * 1.5 + t) *
          Math.cos(by * 1.5 + t * 0.8) *
          Math.sin(bz * 1.5 + t * 0.6);
        const scale = 1 + wave;
        posAttr.array[i] = bx * scale;
        posAttr.array[i + 1] = by * scale;
        posAttr.array[i + 2] = bz * scale;
      }
      posAttr.needsUpdate = true;

      sphere.rotation.y = t * 0.12;
      sphere.rotation.x = t * 0.05;
      particles.rotation.y = t * 0.02;

      // Parallax toward pointer + scroll depth.
      camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.04;
      camera.position.y += (-pointer.y * 0.6 - camera.position.y) * 0.04;
      camera.position.z = 6 + scrollY * 0.0012;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    // React to theme changes without rebuilding the scene.
    const themeInterval = window.setInterval(applyColors, 200);

    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(themeInterval);
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        // Static fallback tint (shown under reduced-motion, and behind canvas).
        background:
          "radial-gradient(circle at 50% 30%, rgb(var(--scene-1) / 0.10), transparent 55%), radial-gradient(circle at 70% 80%, rgb(var(--scene-2) / 0.10), transparent 55%)"
      }}
    />
  );
}
