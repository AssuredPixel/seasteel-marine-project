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

export const metadata: Metadata = {
  title: "Home | Seasteel Marine",
  description:
    "Seasteel Marine — Engineering Excellence at Sea. Nigeria's premier marine engineering, shipbuilding, and offshore solutions provider.",
};

export default function HomePage() {
  return (
    <>
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
