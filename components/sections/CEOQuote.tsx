"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CEOQuote() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Column: CEO Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center text-center"
          >
            <div className="relative w-[120px] h-[120px] mb-6">
              <div className="absolute inset-0 rounded-full border-[4px] border-navy z-10" />
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/ceo-joseph.png"
                  alt="Chief (Engr) Joseph Justin Akpan"
                  width={120}
                  height={120}
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>

            <h3 className="text-navy text-[20px] font-heading font-bold mb-1">
              Chief (Engr) Joseph Justin Akpan
            </h3>
            <p className="text-cyan-bright text-[14px] font-body font-medium uppercase tracking-wider">
              CEO, Seasteel Marine & <br className="hidden md:block" /> Offshore Services Limited
            </p>
          </motion.div>

          {/* Right Column: Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            {/* Giant Quote Icon */}
            <div className="absolute -top-10 -left-6 text-cyan-bright select-none z-0">
              <span className="text-[120px] font-serif leading-none">“</span>
            </div>

            <div className="relative z-10">
              <blockquote className="text-navy text-xl md:text-[22px] font-body italic leading-relaxed md:leading-[1.6]">
                &ldquo;Our mission at Seasteel is not just to provide vessels, but to engineer the future of the Atlantic maritime corridor through safety, precision, and Nigerian resilience.&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  className="h-[1px] bg-cyan"
                />
                <span className="text-cyan-bright font-heading font-black text-xs uppercase tracking-[0.2em]">
                  Mission Statement
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
