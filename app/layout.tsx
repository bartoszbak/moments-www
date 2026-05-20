import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { siteConfig } from "@/app/_lib/site-content";

const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: "./fonts/InterVariable.woff2",
  weight: "100 900",
  style: "normal",
});

const momentsDisplay = localFont({
  variable: "--font-display-primary",
  display: "swap",
  src: [
    {
      path: "./fonts/moments-display-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/moments-display-medium-italic.otf",
      weight: "500",
      style: "italic",
    },
  ],
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
    icon: "/moments-icon.png",
    apple: "/moments-icon.png",
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
    <html lang="en" className={`${inter.variable} ${momentsDisplay.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/moments-mobile-hero.jpg"
          media="(max-width: 1023px)"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
