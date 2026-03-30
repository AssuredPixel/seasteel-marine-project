"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const partners = [
  { name: "ExxonMobil", logo: "/images/exxonmobil.jpg" },
  { name: "Nigeria LNG Limited (NLNG)", logo: "/images/nlng.jpg" },
  { name: "Chevron Nigeria Limited", logo: "/images/chevron.jpg" },
  { name: "Seplat Energy Plc", logo: "/images/seplat.jpg" },
  { name: "Nigerian Agip Oil Company (NAOC)", logo: "/images/agip.jpg" },
  { name: "PAN Ocean Oil Corporation", logo: "/images/pan.jpg" },
  { name: "Oando Energy Resources", logo: "/images/oando.jpg" },
  { name: "Network E&P Nigeria Limited", logo: "/images/networkE&P.jpg" },
  { name: "BG Exploration", logo: "/images/bg-com-logo.jpg" },
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
    <section className="bg-off-white py-24">
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

        {/* Partners Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
              className="group bg-white p-6 md:p-10 rounded-[20px] border border-gray-100 shadow-sm hover:border-cyan/30 transition-all duration-300 flex items-center justify-center min-h-[130px] md:min-h-[180px] text-center"
            >
              {partner.logo ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={200}
                    height={100}
                    className="max-h-[75px] md:max-h-[110px] w-auto object-contain transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              ) : (
                <h3 className="text-navy/60 group-hover:text-navy font-body font-bold text-[14px] md:text-[18px] leading-tight px-1 md:px-4 cursor-default break-words transition-colors duration-300">
                  {partner.name}
                </h3>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
