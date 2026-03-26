"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-rig.png"
          alt="Offshore Rig Background"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/80 backdrop-blur-[2px]" />
      </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-white text-[36px] md:text-[48px] font-heading font-black leading-tight mb-6 max-w-4xl mx-auto">
            Ready to Work With Nigeria&apos;s <br className="hidden md:block" />
            Best Marine Team?
          </h2>
          
          <p className="text-gray-300 font-body text-[16px] md:text-[18px] max-w-2xl mx-auto mb-12">
            Contact us for vessel chartering, offshore support, or engineering 
            solutions tailored to your operations. Delivering excellence since 2012.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="w-full sm:w-auto bg-cyan text-white font-body font-bold text-[15px] px-10 py-5 rounded-[6px] hover:bg-cyan-bright transition-all duration-300 shadow-xl active:scale-95">
              Get a Free Quote
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white font-body font-bold text-[15px] px-10 py-[18px] rounded-[6px] hover:bg-white hover:text-navy transition-all duration-300 active:scale-95">
              Call Us Now
            </button>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-cyan-bright text-xs font-heading font-black uppercase tracking-[0.3em] mb-4">
              Direct Line
            </span>
            <a 
              href="tel:+2348036692362" 
              className="text-cyan text-3xl md:text-[40px] font-heading font-black hover:scale-105 transition-transform duration-300 hover:text-cyan-bright"
            >
              +234 803 669 2362
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
