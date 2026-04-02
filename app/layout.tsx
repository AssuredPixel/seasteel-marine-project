import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seasteelsmarine.com"),
  title: {
    default: "Seasteel Marine & Offshore Services | Nigeria's Premier Marine Company",
    template: "%s | Seasteel Marine",
  },
  description:
    "Seasteel Marine delivers world-class marine engineering, shipbuilding, and offshore solutions. Trusted expertise since 2012.",
  keywords: [
    "marine engineering nigeria",
    "offshore services akwa ibom",
    "vessel chartering west africa",
    "shipbuilding services",
    "maritime solutions",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seasteelsmarine.com",
    siteName: "Seasteel Marine",
    title: "Seasteel Marine & Offshore Services | Nigeria's Premier Marine Company",
    description:
      "World-class marine engineering, shipbuilding, and offshore solutions. Delivering excellence since 2012.",
    images: [
      {
        url: "/images/hero-ship.png",
        width: 1200,
        height: 630,
        alt: "Seasteel Marine Offshore Support Vessel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seasteel Marine & Offshore Services",
    description: "Nigeria's Premier Marine Engineering & Offshore Services Provider.",
    images: ["/images/hero-ship.png"],
  },
};

import BackToTop from "@/components/ui/BackToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-body bg-navy text-accent-white antialiased flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>
        <BackToTop />

      </body>
    </html>
  );
}
