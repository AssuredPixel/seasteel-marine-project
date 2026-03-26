"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle, Award, HardHat } from "lucide-react";

export default function OperationalIntegrity() {
  return (
    <section className="py-24 bg-surface-muted relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-cyan text-xs font-heading font-black uppercase tracking-[0.3em] block mb-6"
            >
              HSE & Quality
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-navy text-4xl font-heading font-black mb-8"
            >
              Operational Integrity <br /> 
              is Our Currency.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-steel/70 font-body text-lg leading-relaxed mb-10"
            >
              At Seasteel Marine, safety isn&apos;t just a policy—it&apos;s our culture. 
              We operate under the most stringent Health, Safety, and Environmental 
              standards (HSE-MS) to ensure zero harm to personnel, assets, and the 
              environment in every offshore mission.
            </motion.p>

            <div className="space-y-4">
              {[
                "ISO 9001:2015 Quality Management Systems",
                "Full IMCA Compliance for Subsea Operations",
                "Zero-LTI (Lost Time Injury) Culture",
                "Environmental Protection & Waste Recovery"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-4 group"
                >
                  <div className="bg-cyan/10 p-2 rounded-full group-hover:bg-cyan group-hover:text-white transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-cyan group-hover:text-white" />
                  </div>
                  <span className="text-navy font-body font-bold text-[15px]">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-navy p-10 rounded-[24px] flex flex-col items-center justify-center text-center shadow-xl"
            >
              <Shield className="w-12 h-12 text-cyan-bright mb-4" strokeWidth={1} />
              <h4 className="text-white font-heading font-bold text-lg mb-2">Safe Ops</h4>
              <p className="text-white/40 text-xs font-body">Rigorous Audits</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-[24px] flex flex-col items-center justify-center text-center shadow-sm border border-gray-100"
            >
              <Award className="w-12 h-12 text-cyan mb-4" strokeWidth={1} />
              <h4 className="text-navy font-heading font-bold text-lg mb-2">Certified</h4>
              <p className="text-steel/40 text-xs font-body">Global Compliance</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-[24px] flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 col-span-2"
            >
              <div className="flex items-center gap-8">
                <HardHat className="w-16 h-16 text-cyan/20" strokeWidth={1} />
                <div className="text-left">
                  <h4 className="text-navy font-heading font-black text-2xl mb-1">100%</h4>
                  <p className="text-steel/60 text-sm font-body">Safety Compliance Rating across all Atlantic projects since 2012.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
