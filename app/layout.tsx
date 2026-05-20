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

const defaultTitle = "Moments — Count down, reflect, manifest on iOS";
const twitterTitle = "Moments — Count down, reflect, manifest";
const ogImage = "/og-image.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Moments",
  },
  description: siteConfig.description,
  applicationName: "Moments",
  authors: [{ name: "Bart Bak" }],
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    title: "Moments",
    capable: true,
    statusBarStyle: "default",
  },
  openGraph: {
    title: defaultTitle,
    description: siteConfig.description,
    siteName: "Moments",
    url: siteConfig.siteUrl,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 628,
        alt: "Moments app — countdowns, reflections, and manifestations on iPhone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: twitterTitle,
    description:
      "A calm iPhone app for the days that matter. Countdowns, reflections, and manifestations — private by design.",
    images: [ogImage],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "Moments",
              operatingSystem: "iOS",
              applicationCategory: "LifestyleApplication",
              description: siteConfig.description,
              url: siteConfig.siteUrl,
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: { "@type": "Person", name: "Bart Bak" },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
