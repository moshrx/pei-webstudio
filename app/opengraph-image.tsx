import { ImageResponse } from "next/og";
export const alt = "PEI Web Studio — Websites for PEI businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#101014", color: "#fafafa", padding: "72px" }}>
    <div style={{ display: "flex", fontSize: 28, color: "#ff9b83" }}>PEI WEB STUDIO · CHARLOTTETOWN</div>
    <div style={{ display: "flex", fontSize: 76, lineHeight: 1.08, maxWidth: 1000 }}>A clearer website. A practical next step.</div>
    <div style={{ display: "flex", fontSize: 28, color: "#d2d2d7" }}>New websites · Website improvements · Local support</div>
  </div>, size);
}
