"use client";

import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Zap, Award } from "lucide-react";

const values = [
  { 
    title: "Mission", 
    icon: Target, 
    desc: "To deliver innovative and reliable marine solutions that exceed client expectations while prioritizing safety, quality, and environmental sustainability.",
    color: "bg-cyan" 
  },
  { 
    title: "Vision", 
    icon: Eye, 
    desc: "To be the premier African leader in marine and offshore services, recognized globally for operational excellence and technical innovation.",
    color: "bg-navy" 
  },
];

const coreValues = [
  { name: "Safety First", icon: ShieldCheck, desc: "An uncompromising commitment to the protection of our people and assets." },
  { name: "Innovation", icon: Zap, desc: "Continuously evolving our technical processes to meet modern energy demands." },
  { name: "Excellence", icon: Award, desc: "Maintaining the highest international standards in every project delivery." },
];

export default function MissionVision() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`${v.color} p-12 rounded-[24px] text-white relative group overflow-hidden`}
            >
              <div className="relative z-10">
                <v.icon className="w-12 h-12 mb-6 opacity-80" strokeWidth={1.5} />
                <h3 className="text-3xl font-heading font-black mb-6 uppercase tracking-tight">{v.title}</h3>
                <p className="text-white/80 font-body text-lg leading-relaxed max-w-md">
                  {v.desc}
                </p>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan text-xs font-heading font-black uppercase tracking-[0.3em] block mb-4"
          >
            Our DNA
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-navy text-4xl font-heading font-black"
          >
            Core Values That Drive Us
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((cv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-muted p-10 rounded-[24px] border border-gray-100 hover:border-cyan transition-colors group"
            >
              <cv.icon className="w-10 h-10 text-cyan mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h4 className="text-navy font-heading font-bold text-xl mb-4">{cv.name}</h4>
              <p className="text-steel/70 font-body text-[15px] leading-relaxed">
                {cv.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
