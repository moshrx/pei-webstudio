import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/portfolio", "/contact", "/us", "/legal", "/showcase/nocturne", "/showcase/pelagic"].map(path => ({ url: `${siteUrl}${path}` }));
}
