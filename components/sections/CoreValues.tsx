"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Handshake, 
  Star, 
  Lightbulb, 
  Headphones 
} from "lucide-react";

const values = [
  {
    name: "Safety First",
    description: "Uncompromising commitment to the well-being of our crew and the environment.",
    icon: ShieldCheck,
  },
  {
    name: "Integrity",
    description: "Operating with transparency, ethical standards, and accountability in every project.",
    icon: Handshake,
  },
  {
    name: "Excellence",
    description: "Delivering world-class technical solutions with precision and uncompromising quality.",
    icon: Star,
  },
  {
    name: "Innovation",
    description: "Continuously evolving our maritime technologies to meet modern offshore demands.",
    icon: Lightbulb,
  },
  {
    name: "Customer Focus",
    description: "Dedicated to exceeding expectations through responsive and tailored marine services.",
    icon: Headphones,
  },
];

export default function CoreValues() {
  return (
    <section className="bg-navy py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-20 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-white text-3xl md:text-[36px] font-heading font-bold"
          >
            Our Core Values
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-cyan mx-auto mt-6 rounded-full" 
          />
        </div>

        {/* Values Row/Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl transition-colors duration-300 group"
            >
              <div className="mb-6 inline-block p-4 rounded-xl bg-cyan/10 text-cyan group-hover:bg-cyan group-hover:text-navy transition-colors duration-300">
                <value.icon size={32} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-white text-[18px] font-heading font-bold mb-3">
                {value.name}
              </h3>
              
              <p className="text-gray-300 font-body text-[14px] leading-relaxed line-clamp-2">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
