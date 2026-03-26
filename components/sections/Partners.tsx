"use client";

import { motion, Variants } from "framer-motion";

const partners = [
  "ExxonMobil",
  "Nigeria LNG Limited (NLNG)",
  "Chevron Nigeria Limited",
  "Seplat Energy Plc",
  "Nigerian Agip Oil Company (NAOC)",
  "PAN Ocean Oil Corporation",
  "Oando Energy Resources",
  "Network E&P Nigeria Limited",
  "BG Exploration",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function Partners() {
  return (
    <section className="bg-surface-muted py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-cyan-bright text-xs font-heading font-black uppercase tracking-[0.2em] block"
          >
            Powering Industry Leaders
          </motion.span>
        </div>

        {/* Partners Grid (3x3) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[16px] border border-gray-100 shadow-sm hover:shadow-md hover:border-cyan transition-all duration-300 flex items-center justify-center min-h-[120px] text-center"
            >
              <h3 className="text-navy font-body font-bold text-[16px] leading-tight px-4 cursor-default">
                {partner}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
