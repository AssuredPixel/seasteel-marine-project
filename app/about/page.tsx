import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import MissionVision from "@/components/sections/about/MissionVision";
import LeadershipMessage from "@/components/sections/about/LeadershipMessage";
import OperationalIntegrity from "@/components/sections/about/OperationalIntegrity";
import BusinessSectors from "@/components/sections/about/BusinessSectors";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us | Seasteel Marine & Offshore Services Limited",
    description: "Learn about Seasteel Marine's history, mission, and leadership in offshore engineering since 2012.",
    alternates: {
      canonical: "/about",
    },
    openGraph: {
      title: "About Us | Seasteel Marine & Offshore Services Limited",
      description: "Learn about Seasteel Marine's history, mission, and leadership in offshore engineering since 2012.",
      url: "https://seasteelmarine.com/about",
    },
  };
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero */}
        <PageHero 
          title="About Seasteel Marine"
          subtitle="Engineering Excellence & Operational Integrity Since 2012"
          breadcrumb="About Us"
          backgroundImage="/images/about-port.png"
        />

        {/* Company Overview / Heritage */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="w-full lg:w-1/2">
                <span className="text-cyan text-xs font-heading font-black uppercase tracking-[0.3em] block mb-6">Our Heritage</span>
                <h2 className="text-navy text-4xl md:text-5xl font-heading font-black mb-8 leading-tight">
                  A Legacy of Resilience <br /> 
                  from Eket to the World.
                </h2>
                <div className="space-y-6 text-steel/80 font-body text-lg leading-relaxed">
                  <p>
                    Founded in Eket, Akwa Ibom State, Seasteel Marine & Offshore Services Limited 
                    began with a vision to revolutionize the Nigerian maritime sector through 
                    engineering precision and local talent empowerment.
                  </p>
                  <p>
                    Over more than a decade, we have evolved from a specialized subsea vendor 
                    into a multi-disciplinary powerhouse serving the biggest names in the global 
                    offshore energy industry. Our growth is fueled by a simple philosophy: 
                    operational integrity at every depth.
                  </p>
                  <div className="grid grid-cols-2 gap-8 pt-6">
                    <div>
                      <h4 className="text-navy font-heading font-black text-4xl mb-1">2012</h4>
                      <p className="text-steel/50 text-xs font-heading font-bold uppercase tracking-widest">Inception Year</p>
                    </div>
                    <div>
                      <h4 className="text-navy font-heading font-black text-4xl mb-1">100%</h4>
                      <p className="text-steel/50 text-xs font-heading font-bold uppercase tracking-widest">Local Compliance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl">
                  <Image 
                    src="/images/fleet-panorama.png" 
                    alt="Seasteel Heritage" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-navy/20" />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan/10 rounded-full blur-3xl" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-navy/5 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <MissionVision />

        {/* Leadership Message */}
        <LeadershipMessage />

        {/* Business Sectors */}
        <BusinessSectors />

        {/* Operational Integrity */}
        <OperationalIntegrity />

        {/* CTA Section */}
        <section className="py-24 bg-navy px-6 relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan/10 blur-[120px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-white text-3xl md:text-4xl font-heading font-black mb-8 leading-tight">
              Partner with the Leaders in <br className="hidden md:block" />
              Offshore Operational Excellence.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-cyan-bright text-white px-10 py-5 rounded-[6px] font-body font-bold hover:bg-cyan-dark transition-all shadow-xl">
                Download Company Profile
              </button>
              <button className="w-full sm:w-auto border-2 border-white/30 text-white px-10 py-[18px] rounded-[6px] font-body font-bold hover:bg-white hover:text-navy transition-all">
                Speak to our Technical Team
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
