export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Static base gradient — colors switch via CSS vars in globals.css */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--ag-base)" }}
      />

      {/* Drifting orb 1 */}
      <div
        className="absolute h-[500px] w-[500px] rounded-full blur-2xl"
        style={{
          background: "var(--ag-orb1)",
          left: "-20%",
          top: "-10%",
          willChange: "transform",
          animation: "grad-drift-1 20s ease-in-out infinite",
        }}
      />

      {/* Drifting orb 2 */}
      <div
        className="absolute h-[400px] w-[400px] rounded-full blur-2xl"
        style={{
          background: "var(--ag-orb2)",
          right: "-10%",
          top: "20%",
          willChange: "transform",
          animation: "grad-drift-2 18s ease-in-out 2s infinite",
        }}
      />

      {/* Drifting orb 3 */}
      <div
        className="absolute h-[350px] w-[350px] rounded-full blur-2xl"
        style={{
          background: "var(--ag-orb3)",
          left: "30%",
          bottom: "0%",
          willChange: "transform",
          animation: "grad-drift-3 22s ease-in-out 4s infinite",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
