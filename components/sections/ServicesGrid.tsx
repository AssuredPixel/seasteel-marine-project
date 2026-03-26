"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Ship, 
  Wrench, 
  Waves, 
  Anchor, 
  Users, 
  Settings
} from "lucide-react";

const services = [
  {
    title: "Vessel Management & Operations",
    description: "End-to-end oversight of offshore vessel performance, including technical maintenance, crew coordination, and strict IMCA/regulatory compliance to ensure zero downtime.",
    icon: Ship,
    href: "/services",
  },
  {
    title: "Ship Repairs & Dry Docking",
    description: "Comprehensive structural repairs, specialized underwater maintenance, and complete dry-docking project management for tankers, OSVs, and commercial vessels.",
    icon: Wrench,
    href: "/services",
  },
  {
    title: "Diving Operations",
    description: "Certified subsea engineering and diving services including pipeline inspections, underwater welding, hull cleaning, and ROV-assisted sea-chest maintenance.",
    icon: Waves,
    href: "/services",
  },
  {
    title: "Vessel Chartering",
    description: "Strategic brokerage and chartering of specialized offshore support vessels (AHTS, PSV, DSV) and utility crafts tailored for the Atlantic corridor's demands.",
    icon: Anchor,
    href: "/services",
  },
  {
    title: "Crew Manning & Logistics",
    description: "Global maritime staffing solutions, visa processing, and comprehensive crew management designed to maintain high-caliber vessel operations 24/7.",
    icon: Users,
    href: "/services",
  },
  {
    title: "Marine Engine Repairs",
    description: "Specialized mechanical engineering for main propulsion systems, auxiliary engines, and power generation units with rapid-response parts procurement.",
    icon: Settings,
    href: "/services",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Headers */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-cyan-bright text-xs font-heading font-black uppercase tracking-[0.2em] block mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-navy text-3xl md:text-[36px] font-heading font-bold leading-tight"
          >
            Comprehensive Marine & <br className="hidden md:block" />
            Offshore Solutions
          </motion.h2>
        </div>

        {/* Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group bg-white rounded-[24px] p-10 border border-gray-100 border-t-[4px] border-t-cyan shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="mb-8 inline-block p-4 rounded-2xl bg-cyan/5 text-cyan-bright group-hover:bg-cyan group-hover:text-white transition-all duration-300">
                <service.icon size={44} strokeWidth={1.2} />
              </div>
              
              <h3 className="text-navy text-[20px] font-heading font-black mb-4 group-hover:text-cyan transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-steel/70 font-body text-[15px] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <Link
            href="/services"
            className="inline-block bg-navy-dark text-white font-body font-bold text-[15px] px-12 py-5 rounded-[12px] hover:bg-navy transition-all duration-200 shadow-xl active:scale-95"
          >
            Explore All Marine Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
