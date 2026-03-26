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
  title: {
    default: "Seasteel Marine | Engineering Excellence at Sea",
    template: "%s | Seasteel Marine",
  },
  description:
    "Seasteel Marine delivers world-class marine engineering, shipbuilding, and offshore solutions. Trusted expertise built on decades of industry experience.",
  keywords: [
    "marine engineering",
    "shipbuilding",
    "offshore solutions",
    "naval architecture",
    "Seasteel",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seasteel.com",
    siteName: "Seasteel Marine",
    title: "Seasteel Marine | Engineering Excellence at Sea",
    description:
      "World-class marine engineering, shipbuilding, and offshore solutions.",
  },
};

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
      </body>
    </html>
  );
}
