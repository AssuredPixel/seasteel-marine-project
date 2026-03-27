"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, ArrowRight, CheckCircle2,
  Ship, Wrench, Waves, Anchor, Users, Settings, 
  Globe, Box, Droplets, Building2, Construction,
  Cpu, Zap, Activity, PenTool, LayoutTemplate,
  LucideIcon
} from "lucide-react";
import Link from "next/link";

interface Service {
  name: string;
  icon: LucideIcon;
  desc: string;
}

interface Industry {
  name: string;
  icon: LucideIcon;
  desc: string;
}

const allServices: Service[] = [
  { 
    name: "Vessel Management", 
    icon: Ship, 
    desc: "Comprehensive oversight of offshore vessel operations, covering technical maintenance, safety compliance, and operational efficiency." 
  },
  { 
    name: "Vessel Repairs & Maintenance", 
    icon: Wrench, 
    desc: "Routine and emergency maintenance services designed to ensure maximum uptime and peak performance for all maritime assets." 
  },
  { 
    name: "Ship Repairs & Dry Docking", 
    icon: Anchor, 
    desc: "Full-scale shipyard services including structural repairs, hull maintenance, and precision engineering during dry docking cycles." 
  },
  { 
    name: "Vessel Chartering", 
    icon: Globe, 
    desc: "Strategic brokerage and chartering of specialized offshore support vessels (AHTS, PSV, ASD) tailored to project-specific requirements." 
  },
  { 
    name: "Marine & Offshore Services", 
    icon: Box, 
    desc: "Multi-disciplinary offshore support solutions including platform maintenance, subsea logistics, and field development assistance." 
  },
  { 
    name: "Diving Operations", 
    icon: Waves, 
    desc: "Certified commercial diving and subsea engineering services for pipeline inspections, underwater welding, and hull maintenance." 
  },
  { 
    name: "Oil Tanker Mooring & Unmooring", 
    icon: Droplets, 
    desc: "Precision mooring operations for oil tankers at offshore terminals, managed by certified mooring masters and specialized crews." 
  },
  { 
    name: "Rig Move Operations", 
    icon: Building2, 
    desc: "Safe and efficient positioning of drilling units and jack-up rigs using specialized AHTS vessels and expert navigational coordination." 
  },
  { 
    name: "Crew Manning & Logistics", 
    icon: Users, 
    desc: "Provision of highly skilled, STCW-certified maritime personnel combined with seamless global logistics and visa processing." 
  },
  { 
    name: "Marine Engine Repairs & Overhauling", 
    icon: Settings, 
    desc: "Expert mechanical engineering for main propulsion engines, auxiliary units, and power generation systems with rapid spares procurement." 
  },
  { 
    name: "Pipe Welding & Fabrication", 
    icon: Construction, 
    desc: "Certified high-pressure welding and structural fabrication for offshore pipelines, manifolds, and marine infrastructure components." 
  },
  { 
    name: "Ship Spare Parts Fabrication", 
    icon: Cpu, 
    desc: "Custom precision engineering and reproduction of essential marine spare parts to minimize downtime for aging or specialized vessels." 
  },
  { 
    name: "General Machining Services", 
    icon: LayoutTemplate, 
    desc: "Advanced workshop capabilities including lathing, milling, and surface grinding for critical marine and industrial components." 
  },
  { 
    name: "Electric Motor & Alternator Rewinding", 
    icon: Zap, 
    desc: "Specialized electrical engineering for the diagnostic testing and rewinding of marine-grade electric motors and alternators." 
  },
  { 
    name: "Electromechanical Engineering", 
    icon: PenTool, 
    desc: "Integrated solutions for marine automation, hydraulic control systems, and complex electromechanical shipboard equipment." 
  },
  { 
    name: "Electronics & Instrumentation", 
    icon: Activity, 
    desc: "Installation, calibration, and repair of advanced bridge electronics, navigation systems, and subsea sensing instrumentation." 
  },
];

const industries: Industry[] = [
  { name: "Oil & Gas Exploration", icon: Droplets, desc: "Supporting upstream exploration with specialized support vessels and subsea engineering." },
  { name: "Maritime Logistics", icon: Box, desc: "Optimizing global supply chains with vessel operations and port-to-field logistics." },
  { name: "Offshore Engineering", icon: Cpu, desc: "Providing the technical backbone for complex offshore construction and modifications." },
  { name: "Subsea Operations", icon: Globe, desc: "Managing deepwater assets with diving, ROVs, and subsea maintenance expertise." },
  { name: "Port & Terminal Services", icon: Building2, desc: "Facilitating efficient terminal operations and vessel-to-shore connectivity." },
  { name: "Energy Infrastructure", icon: Zap, desc: "Supporting the transition to offshore renewable energy with construction and maintenance." },
];

const fleetBadges = ["AHTS", "DSV", "PSV", "MPSV", "OSV", "ASD Tugboats", "FSIV"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesClient() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      {/* 16 Service Grid */}
      <section className="py-24 bg-surface-muted border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {allServices.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                onClick={() => setSelectedService(service)}
                className="bg-white p-8 rounded-[12px] border border-gray-100 border-t-[3px] border-t-cyan shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
              >
                <div className="mb-6 p-4 bg-cyan/5 rounded-[8px] w-fit group-hover:bg-cyan group-hover:text-white transition-all duration-300">
                  <service.icon className="w-10 h-10 text-cyan group-hover:text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-navy font-heading font-black text-lg mb-3 group-hover:text-cyan transition-colors leading-tight">
                  {service.name}
                </h3>
                <p className="text-steel/60 font-body text-sm leading-relaxed mb-6 line-clamp-3">
                  {service.desc}
                </p>
                <span className="text-cyan font-body font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fleet Banner */}
      <section className="bg-navy py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white text-3xl md:text-4xl font-heading font-black mb-12"
          >
            Our Fleet Capabilities
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            {fleetBadges.map((badge, idx) => (
              <motion.span 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/10 backdrop-blur-md text-cyan-bright border border-white/10 px-8 py-4 rounded-full text-sm font-body font-black uppercase tracking-widest shadow-xl hover:bg-white hover:text-navy transition-all cursor-default"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-cyan text-xs font-heading font-black uppercase tracking-[0.3em] block mb-4"
            >
              Industry Focus
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-navy text-4xl md:text-5xl font-heading font-black mb-4"
            >
              Sectors We Empower
            </motion.h2>
            <div className="w-20 h-1 bg-cyan mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface-muted p-10 rounded-[24px] border border-gray-100 hover:border-cyan transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-white rounded-[16px] flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <ind.icon className="w-10 h-10 text-cyan" strokeWidth={1.5} />
                </div>
                <h3 className="text-navy font-heading font-bold text-xl mb-4">{ind.name}</h3>
                <p className="text-steel/60 font-body text-[15px] leading-relaxed">
                  {ind.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-navy/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-20 bg-gray-100 hover:bg-red-500 hover:text-white text-gray-500 p-2 rounded-full transition-all"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12 overflow-y-auto">
                <div className="flex items-center gap-6 mb-8 pt-4">
                  <div className="p-5 bg-cyan text-white rounded-[20px] shadow-glow">
                    <selectedService.icon className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-navy font-heading font-black text-2xl md:text-3xl leading-tight">
                    {selectedService.name}
                  </h3>
                </div>

                <div className="space-y-6">
                  <p className="text-steel/80 font-body text-lg leading-relaxed">
                    {selectedService.desc}
                  </p>
                  
                  <div className="bg-surface-muted p-8 rounded-[24px]">
                    <h4 className="text-navy font-heading font-bold text-sm uppercase tracking-widest mb-6 border-b border-gray-200 pb-4">
                      Service Excellence
                    </h4>
                    <ul className="space-y-4">
                      {[
                        "Executed by highly technical, certified personnel.",
                        "Strict adherence to IMCA, ISO, and Nigerian maritime standards.",
                        "Integrated logistical support for rapid project delivery.",
                        "Continuous commitment to safety and operational integrity."
                      ].map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                          <span className="text-steel/70 font-body text-[15px]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link 
                    href={`/contact?service=${encodeURIComponent(selectedService.name)}`}
                    className="flex-1 bg-navy text-white px-8 py-4 rounded-[12px] font-body font-bold hover:bg-navy-dark transition-all text-center"
                  >
                    Request Technical Datasheet
                  </Link>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="flex-1 border-2 border-gray-200 text-steel px-8 py-4 rounded-[12px] font-body font-bold hover:bg-gray-50 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
