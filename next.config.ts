import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strip the X-Powered-By header to reduce response size
  poweredByHeader: false,
  // Strict mode catches accidental double-renders in dev, keeps prod clean
  reactStrictMode: true,
  // Compress responses with gzip
  compress: true,
  images: {
    // Use AVIF first (smaller than WebP), fallback to WebP
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
