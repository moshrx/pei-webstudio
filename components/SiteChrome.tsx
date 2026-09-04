"use client";

import { usePathname } from "next/navigation";

import { Background } from "@/components/Background";
import { FilmGrain } from "@/components/FilmGrain";
import { ScrollProgress } from "@/components/ScrollProgress";

/**
 * Global visual chrome (3D scene, scroll bar, film grain).
 *
 * Standalone landing pages opt out entirely: they are paid-social entry points
 * that need the fastest possible mobile paint, so we skip the Three.js canvas
 * rather than loading it and hiding it.
 */
const BARE_ROUTES = ["/social-demos", "/us"];

export function SiteChrome() {
  const pathname = usePathname();
  const isBare = BARE_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  if (isBare) return null;

  return (
    <>
      <Background />
      <ScrollProgress />
      <FilmGrain />
    </>
  );
}
