import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { siteConfig } from "@/app/_lib/site-content";

const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: "./fonts/InterVariable.woff2",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Moments",
    template: "%s | Moments",
  },
  description: siteConfig.description,
  applicationName: "Moments",
  icons: {
    icon: "/moments-icon-figma.png",
    apple: "/moments-icon-figma.png",
  },
  openGraph: {
    title: "Moments",
    description: siteConfig.description,
    siteName: "Moments",
    url: siteConfig.siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moments",
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
