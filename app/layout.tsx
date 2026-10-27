import type { Metadata, Viewport } from "next";

import { SiteChrome } from "@/components/SiteChrome";
import { ThemeProvider } from "@/components/providers";
import "./globals.css";
import { pageMetadata, siteUrl } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  ...pageMetadata("Web Design & Website Improvements in PEI | PEI Web Studio", "New websites and practical website improvements for businesses in Charlottetown and across Prince Edward Island. Clear scope and personal support.", "/"),
  metadataBase: new URL(siteUrl),
  icons: { icon: "/favicon-32.png", shortcut: "/favicon-32.png", apple: "/icon-180.png" },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen text-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org", "@type": "Organization", name: "PEI Web Studio",
            url: siteUrl, logo: `${siteUrl}/icon.png`, email: "peiwebstudio@gmail.com", telephone: "+1-647-913-1487",
            areaServed: { "@type": "AdministrativeArea", name: "Prince Edward Island" }
          }) }} />
          <SiteChrome />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
