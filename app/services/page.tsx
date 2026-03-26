import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import { 
  Ship, Wrench, Waves, Anchor, Users, Settings, 
  PenTool, Truck, Shield, Search, Trash2, 
  Construction, FileText, LifeBuoy, Shovel, 
  FileCheck, Droplets, Box, Cpu, Globe, 
  Building2, Zap 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Seasteel Marine",
  description: "Comprehensive marine and offshore solutions for the oil, gas, and maritime industries.",
};

const allServices = [
  { name: "Vessel Management & Operations", icon: Ship, desc: "End-to-end management of offshore vessels, ensuring peak operational efficiency and safety compliance." },
  { name: "Ship Repairs & Dry Docking", icon: Wrench, desc: "Comprehensive structural repairs, system overhauls, and planned dry docking services for commercial vessels." },
  { name: "Diving Operations", icon: Waves, desc: "Professional subsea diving services including hull inspections, underwater welding, and maintenance." },
  { name: "Vessel Chartering", icon: Anchor, desc: "Strategic procurement and chartering of specialized offshore vessels (AHTS, PSV, ASD Tugs) for global operations." },
  { name: "Crew Manning & Logistics", icon: Users, desc: "Provision of highly skilled, certified marine personnel and seamless logistics for offshore crew changes." },
  { name: "Marine Engine Repairs", icon: Settings, desc: "Precision diagnostic and mechanical repair services for main engines, generators, and propulsion systems." },
  { name: "Naval Architecture & Design", icon: PenTool, desc: "Specialized engineering design and naval architectural consultancy for new builds and vessel conversions." },
  { name: "Procurement & Global Logistics", icon: Truck, desc: "Efficient supply chain management and procurement of critical marine spares and industrial equipment." },
  { name: "Marine Security Services", icon: Shield, desc: "Coordinated maritime security solutions and vessel protection for high-risk offshore corridors." },
  { name: "Underwater Inspection (UWILD)", icon: Search, desc: "Certified underwater inspections in lieu of dry docking, using advanced ROV and diver-led telemetry." },
  { name: "Pollution & Waste Management", icon: Trash2, desc: "Eco-conscious marine waste disposal and rapid response oil spill containment services." },
  { name: "Offshore Construction Support", icon: Construction, desc: "Logistical and technical support for offshore platform installation, decommissioning, and field maintenance." },
  { name: "Technical Consultancy & Audit", icon: FileText, desc: "Independent marine surveys, technical audits, and regulatory compliance consultancy for maritime assets." },
  { name: "Salvage & Emergency Recovery", icon: LifeBuoy, desc: "Rapid response marine salvage and emergency recovery operations for distressed vessels and cargo." },
  { name: "Dredging & Reclamation", icon: Shovel, desc: "Capital and maintenance dredging for ports, harbors, and offshore pipeline routes." },
  { name: "Agency & Clearance Services", icon: FileCheck, desc: "Comprehensive port agency services, customs clearance, and regulatory documentation for vessel calls." },
];

const industries = [
  { name: "Oil & Gas Exploration", icon: Droplets, desc: "Supporting upstream exploration with specialized support vessels and subsea engineering." },
  { name: "Maritime Logistics", icon: Box, desc: "Optimizing global supply chains with vessel operations and port-to-field logistics." },
  { name: "Offshore Engineering", icon: Cpu, desc: "Providing the technical backbone for complex offshore construction and modifications." },
  { name: "Subsea Operations", icon: Globe, desc: "Managing deepwater assets with diving, ROVs, and subsea maintenance expertise." },
  { name: "Port & Terminal Services", icon: Building2, desc: "Facilitating efficient terminal operations and vessel-to-shore connectivity." },
  { name: "Energy Infrastructure", icon: Zap, desc: "Supporting the transition to offshore renewable energy with construction and maintenance." },
];

const fleetBadges = ["AHTS", "DSV", "PSV", "MPSV", "OSV", "ASD Tugboats", "FSIV"];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Header */}
        <PageHero 
          title="Our Services"
          subtitle="Comprehensive Marine & Offshore Solutions for the Oil, Gas & Maritime Industries"
          breadcrumb="Services"
          backgroundImage="/images/hero-ship.png"
        />

        {/* Intro */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-navy text-3xl font-heading font-black mb-8">Technical Excellence at Sea</h2>
            <p className="text-steel/70 font-body text-lg leading-relaxed">
              At Seasteel Marine, we leverage over a decade of operational history to deliver 
              precision engineering and marine support. Our integrated approach ensures that 
              every project is backed by high-tier safety standards and uncompromising technical expertise.
            </p>
          </div>
        </section>

        {/* 16 Service Grid */}
        <section className="py-24 bg-[#F9FAFB] border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {allServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-[12px] border border-gray-100 border-t-[3px] border-t-cyan shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="mb-6 p-4 bg-cyan/5 rounded-[8px] w-fit group-hover:bg-cyan/10 transition-colors">
                    <service.icon className="w-10 h-10 text-cyan" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-navy font-heading font-bold text-lg mb-3">
                    {service.name}
                  </h3>
                  <p className="text-steel/60 font-body text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <span className="text-cyan font-body font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    Learn More <span>→</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Banner */}
        <section className="bg-navy py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-white text-3xl md:text-4xl font-heading font-black mb-12">
              Our Fleet Capabilities
            </h2>
            <div className="flex overflow-x-auto lg:flex-wrap lg:justify-center gap-3 md:gap-4 pb-6 lg:pb-0 no-scrollbar items-center">
              {fleetBadges.map((badge, idx) => (
                <span 
                  key={idx}
                  className="bg-white text-navy px-6 py-3 rounded-full text-[13px] md:text-sm font-body font-black uppercase tracking-widest shadow-lg whitespace-nowrap"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-24 bg-surface px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-cyan text-xs font-heading font-black uppercase tracking-[0.3em] block mb-4">Value Proposition</span>
              <h2 className="text-navy text-3xl md:text-4xl font-heading font-black">Industries We Serve</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((ind, i) => (
                <div 
                  key={i}
                  className="bg-white p-10 rounded-[16px] border border-gray-100 shadow-sm hover:shadow-xl hover:border-cyan transition-all duration-300 group"
                >
                  <ind.icon className="w-12 h-12 text-cyan mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.2} />
                  <h3 className="text-navy font-heading font-bold text-xl mb-4">{ind.name}</h3>
                  <p className="text-steel/60 font-body text-[15px] leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cta-rig.png"
              alt="Offshore Support"
              fill
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
