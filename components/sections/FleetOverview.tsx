"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { 
  Anchor, 
  Waves, 
  Package, 
  Compass, 
  Ship, 
  Shield, 
  Zap 
} from "lucide-react";

const fleetTypes = [
  { name: "AHTS", icon: Anchor },
  { name: "DSV", icon: Waves },
  { name: "PSV", icon: Package },
  { name: "MPSV", icon: Compass },
  { name: "OSV", icon: Ship },
  { name: "ASD Tugboats", icon: Shield },
  { name: "FSIV", icon: Zap },
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

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4 } 
  },
};

export default function FleetOverview() {
  return (
    <section className="bg-navy py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Headers */}
        <div className="text-center mb-16 px-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-cyan text-xs font-heading font-black uppercase tracking-[0.2em] block mb-4"
          >
            Maritime Assets
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-white text-3xl md:text-[36px] font-heading font-bold"
          >
            Our Offshore Fleet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="text-cyan font-body text-[16px] mt-4 max-w-2xl mx-auto"
          >
            Capable of Supporting the Most Demanding Offshore Operations.
          </motion.p>
        </div>

        {/* Fleet Badges Row (Horizontal Scroll on Mobile) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex overflow-x-auto md:flex-wrap md:justify-center gap-4 mb-16 pb-6 md:pb-0 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {fleetTypes.map((type, idx) => (
            <motion.div
              key={idx}
              variants={badgeVariants}
              whileHover={{ y: -3 }}
              className="bg-white px-6 py-3 rounded-full flex items-center gap-3 shadow-md border border-white/10 group cursor-default shrink-0 snap-center"
            >
              <type.icon size={18} className="text-cyan group-hover:scale-110 transition-transform" />
              <span className="text-navy font-body font-bold text-[14px] uppercase tracking-wider">
                {type.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Fleet Panorama */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
        >
          <Image
            src="/images/fleet-panorama.png"
            alt="Offshore Fleet Panorama"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          
          {/* Decorative Overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-80" />

          {/* Bottom-Left Overlay Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute bottom-4 left-4 right-4 md:right-auto md:bottom-10 md:left-10 bg-navy/90 border border-white/10 backdrop-blur-md p-5 md:p-10 rounded-xl md:max-w-[320px] shadow-2xl"
          >
            <h3 className="text-white text-[16px] md:text-2xl font-heading font-bold mb-1 md:mb-2">
              Precision at Sea
            </h3>
            <p className="text-gray-300 font-body text-[12px] md:text-sm leading-snug md:leading-relaxed line-clamp-2 md:line-clamp-none">
              Equipped with advanced DP systems and specialized technical capabilities 
              for deepwater and shallow-water support.
            </p>
            <div className="mt-3 md:mt-6 flex items-center gap-2">
              <div className="w-6 md:w-8 h-[2px] bg-cyan" />
              <span className="text-cyan text-[10px] md:text-xs font-black uppercase tracking-widest">
                Fleet Capacity
              </span>
            </div>
          </motion.div>

          {/* Floating Accent Brackets (Top Right) */}
          <div className="absolute top-10 right-10 w-24 h-24 border-t-2 border-r-2 border-cyan/30 pointer-events-none group-hover:border-cyan/60 transition-colors duration-500" />
        </motion.div>

      </div>
    </section>
  );
}
