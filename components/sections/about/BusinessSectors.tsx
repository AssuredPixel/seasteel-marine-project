"use client";

import { motion } from "framer-motion";
import { Ship, Anchor, Construction, Cpu } from "lucide-react";

const sectors = [
  { 
    name: "Offshore Services", 
    icon: Ship, 
    desc: "Vessel management, AHTS operations, and deepwater support for major oil clusters.",
    count: "40+ Vessels"
  },
  { 
    name: "Marine Engineering", 
    icon: Construction, 
    desc: "Naval architecture, structural fabrication, and underwater maintenance systems.",
    count: "ISO Certified"
  },
  { 
    name: "Onshore Support", 
    icon: Anchor, 
    desc: "Facility management, dockside logistics, and specialized maritime procurement.",
    count: "Global Partners"
  },
  { 
    name: "Technical Innovation", 
    icon: Cpu, 
    desc: "ROV inspections, subsea telemetry, and modern ship repair technologies.",
    count: "DNV Standard"
  },
];

export default function BusinessSectors() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan text-xs font-heading font-black uppercase tracking-[0.3em] block mb-4"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-navy text-4xl font-heading font-black"
          >
            Strategic Business Sectors
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-surface-muted p-10 rounded-[24px] h-full border border-gray-100 hover:bg-navy transition-all duration-500 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white rounded-[16px] flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    <s.icon className="w-8 h-8 text-cyan" />
                  </div>
                  <h4 className="text-navy font-heading font-bold text-xl mb-4 group-hover:text-white transition-colors">
                    {s.name}
                  </h4>
                  <p className="text-steel/60 font-body text-sm leading-relaxed mb-8 group-hover:text-white/60 transition-colors">
                    {s.desc}
                  </p>
                  <div className="pt-6 border-t border-gray-200 group-hover:border-white/10">
                    <span className="text-cyan font-heading font-black text-[11px] uppercase tracking-widest group-hover:text-cyan-bright">
                      {s.count}
                    </span>
                  </div>
                </div>
                {/* Background Glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan/5 rounded-full group-hover:scale-[10] transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
