import type { Metadata } from "next";

// Layout Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Homepage Sections
import Hero from "@/components/sections/Hero";
import AboutSnippet from "@/components/sections/AboutSnippet";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FleetOverview from "@/components/sections/FleetOverview";
import Partners from "@/components/sections/Partners";
import CoreValues from "@/components/sections/CoreValues";
import CEOQuote from "@/components/sections/CEOQuote";
import CTABanner from "@/components/sections/CTABanner";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Seasteel Marine & Offshore Services | Nigeria's Premier Marine Company",
    description: "Seasteel Marine is Nigeria's leading engineering and offshore services provider, delivering world-class maritime solutions since 2012.",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Seasteel Marine & Offshore Services | Nigeria's Premier Marine Company",
      description: "Seasteel Marine is Nigeria's leading engineering and offshore services provider, delivering world-class maritime solutions since 2012.",
      url: "https://seasteelsmarine.com",
      images: [
        {
          url: "/images/hero-ship.png",
          width: 1200,
          height: 630,
          alt: "Seasteel Marine Engineering",
        },
      ],
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Seasteel Marine & Offshore Services Limited",
  "image": "https://seasteelsmarine.com/images/hero-ship.png",
  "@id": "https://seasteelsmarine.com",
  "url": "https://seasteelsmarine.com",
  "telephone": "+234 803 669 2362",
  "email": "support@seasteelmarine.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Eket",
    "addressLocality": "Eket",
    "addressRegion": "Akwa Ibom State",
    "postalCode": "524101",
    "addressCountry": "NG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 4.6433,
    "longitude": 7.9236
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://facebook.com/seasteelmarine",
    "https://linkedin.com/company/seasteel-marine"
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <AboutSnippet />
        <ServicesGrid />
        <FleetOverview />
        <Partners />
        <CoreValues />
        <CEOQuote />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
