import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ServicesClient from "@/components/sections/ServicesClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Our Services | Marine & Offshore Solutions — Seasteel Marine",
    description: "Explore our comprehensive range of marine engineering, shipbuilding, and offshore support services.",
    alternates: {
      canonical: "/services",
    },
    openGraph: {
      title: "Our Services | Marine & Offshore Solutions — Seasteel Marine",
      description: "Explore our comprehensive range of marine engineering, shipbuilding, and offshore support services.",
      url: "https://seasteelmarine.com/services",
    },
  };
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <PageHero 
          title="Our Services"
          subtitle="Comprehensive Marine & Offshore Solutions"
          breadcrumb="Services"
          backgroundImage="/images/hero-ship.png"
        />

        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-navy text-4xl font-heading font-black mb-8 leading-tight">Technical Excellence <br /> at every depth.</h2>
            <p className="text-steel/70 font-body text-lg leading-relaxed">
              At Seasteel Marine, we leverage over a decade of operational history to deliver 
              precision engineering and marine support. Our integrated approach ensures that 
              every project is backed by high-tier safety standards and uncompromising technical expertise.
            </p>
          </div>
        </section>

        <ServicesClient />

        {/* CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cta-rig.png"
              alt="Offshore Support"
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy/85" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-white text-[32px] md:text-5xl font-heading font-black leading-tight mb-8">
              Ready to Optimize Your <br /> Offshore Operations?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-cyan text-white px-10 py-5 rounded-[6px] font-body font-bold text-[15px] hover:bg-cyan-bright transition-all shadow-xl">
                Get a Technical Quote
              </button>
              <button className="w-full sm:w-auto border-2 border-white text-white px-10 py-[18px] rounded-[6px] font-body font-bold text-[15px] hover:bg-white hover:text-navy transition-all">
                Contact Sales Team
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
