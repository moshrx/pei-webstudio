import type { Metadata } from "next";
export const siteUrl = "https://www.peiwebstudio.ca";
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title, description, alternates: { canonical: `${siteUrl}${path}` },
    openGraph: { title, description, url: `${siteUrl}${path}`, siteName: "PEI Web Studio", type: "website", locale: "en_CA", images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "PEI Web Studio — Websites for PEI businesses" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/opengraph-image`] }
  };
}
