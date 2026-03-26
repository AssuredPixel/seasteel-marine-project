"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LeadershipMessage() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/logo.svg')] bg-[length:200px] bg-repeat opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Portrait Placeholder with Premium Styling */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[40%] relative"
          >
            <div className="aspect-[4/5] bg-surface/10 rounded-[24px] overflow-hidden border border-white/10 relative group">
              {/* Replace with actual CEO image if available */}
              <div className="absolute inset-0 flex items-center justify-center text-white/20 font-heading font-black text-6xl uppercase tracking-tighter">
                Seasteel <br /> Leadership
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />
              
              {/* Floating Name Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-[16px] border border-white/20">
                <h4 className="text-white font-heading font-bold text-xl mb-1">Engr. (Captain) Seasteel</h4>
                <p className="text-cyan-bright text-xs font-body font-bold uppercase tracking-widest">Managing Director / CEO</p>
              </div>
            </div>
          </motion.div>

          {/* Message Content */}
          <div className="w-full lg:w-[60%]">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-cyan-bright text-xs font-heading font-black uppercase tracking-[0.3em] block mb-6"
            >
              Leadership Message
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white text-3xl md:text-4xl font-heading font-black mb-8 leading-tight"
            >
              Building a Sustainable Future <br className="hidden md:block" /> 
              for African Maritime.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-white/70 font-body text-lg leading-relaxed italic"
            >
              <p>
                &ldquo;Our journey at Seasteel Marine has always been defined by resilience 
                and a relentless pursuit of engineering excellence. We believe that 
                Africa&apos;s maritime potential is limitless when backed by local 
                expertise and international standards.&rdquo;
              </p>
              <p>
                &ldquo;Every vessel we manage and every project we commission is a 
                testament to our commitment to safety and the socio-economic 
                growth of our host communities in Nigeria.&rdquo;
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="h-[1px] w-20 bg-cyan-bright" />
              <div className="font-heading text-white font-bold text-lg tracking-wider italic">
                Office of the Managing Director
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
