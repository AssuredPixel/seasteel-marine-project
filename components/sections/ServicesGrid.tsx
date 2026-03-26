"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Ship, 
  Wrench, 
  Waves, 
  Anchor, 
  Users, 
  Settings, 
  ArrowRight 
} from "lucide-react";

const services = [
  {
    title: "Vessel Management & Operations",
    description: "Expert oversight of offshore vessel performance, technical maintenance, and regulatory compliance.",
    icon: Ship,
    href: "/services/vessel-management",
  },
  {
    title: "Ship Repairs & Dry Docking",
    description: "Full-scale structural repairs, underwater maintenance, and complete dry-docking project management.",
    icon: Wrench,
    href: "/services/ship-repairs",
  },
  {
    title: "Diving Operations",
    description: "Certified subsea engineering, pipeline inspection, and underwater construction services.",
    icon: Waves,
    href: "/services/diving-operations",
  },
  {
    title: "Vessel Chartering",
    description: "Strategic brokerage and chartering of offshore support vessels (OSV) and utility crafts.",
    icon: Anchor,
    href: "/services/vessel-chartering",
  },
  {
    title: "Crew Manning & Logistics",
    description: "Global maritime staffing solutions, visa processing, and comprehensive crew management.",
    icon: Users,
    href: "/services/crew-manning",
  },
  {
    title: "Marine Engine Repairs",
    description: "Specialized mechanical engineering for main engines, generators, and propulsion systems.",
    icon: Settings,
    href: "/services/engine-repairs",
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-bright text-xs font-heading font-black uppercase tracking-[0.2em] block mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              className="group bg-white rounded-[12px] p-8 border border-gray-100 border-t-[3px] border-t-cyan shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 inline-block p-3 rounded-lg bg-cyan/5 text-cyan-bright group-hover:bg-cyan group-hover:text-white transition-colors duration-300">
                <service.icon size={40} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-navy text-[18px] font-heading font-bold mb-3 group-hover:text-cyan-bright transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-steel/70 font-body text-[15px] leading-relaxed mb-8 line-clamp-2">
                {service.description}
              </p>
              
              <Link 
                href={service.href}
                className="inline-flex items-center gap-2 text-cyan-bright font-body font-bold text-[14px] hover:gap-3 transition-all duration-200"
              >
                Learn More <ArrowRight size={16} />
              </Link>
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
            className="inline-block bg-navy text-white font-body font-bold text-[15px] px-10 py-5 rounded-[6px] hover:bg-navy-light transition-all duration-200 shadow-lg active:scale-95"
          >
            View All 15+ Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
