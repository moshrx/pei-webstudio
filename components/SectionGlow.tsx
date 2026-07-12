/**
 * Subtle radial vignette glow placed behind a section so liquid-glass panels
 * have something faint to refract. Position via className (e.g. "top-0 left-1/4").
 */
export function SectionGlow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-0 h-[420px] w-[420px] rounded-full blur-[120px] ${className}`}
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)"
      }}
    />
  );
}
