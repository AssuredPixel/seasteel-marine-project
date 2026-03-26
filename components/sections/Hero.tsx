"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "15+", label: "Global Services" },
  { value: "Major", label: "Oil Clients" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 1.11, 0.81, 0.99],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-ship.png"
          alt="Offshore Container Ship"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Navy Overlay (70% opacity) */}
        <div className="absolute inset-0 bg-navy/70 z-10" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-40 relative z-20 w-full flex justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center text-center"
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-white text-[36px] md:text-[60px] leading-[1.15] md:leading-[1.2] font-black tracking-tight mb-8"
          >
            Nigeria&apos;s Premier Marine &{" "}
            <span className="text-cyan-bright block">
              Offshore Services Company
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="font-body text-white/80 text-lg md:text-[19px] leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Delivering world-class technical solutions for Africa&apos;s
            offshore energy sector, since 2012.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16 w-full"
          >
            <Link
              href="/services"
              className="w-full sm:w-auto px-10 py-4 bg-cyan-bright text-white text-center font-body font-bold rounded-[6px] hover:bg-cyan-dark transition-all duration-300 shadow-glow active:scale-95 text-[15px]"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-4 border-2 border-white text-white text-center font-body font-bold rounded-[6px] hover:bg-white hover:text-navy transition-all duration-300 active:scale-95 text-[15px]"
            >
              Contact Fleet
            </Link>
          </motion.div>

          {/* Floating Stats Card - Scaled Down */}
          <motion.div
            variants={itemVariants}
            className="z-20 w-full flex justify-center"
          >
            <div className="bg-navy px-6 py-6 md:px-10 md:py-8 rounded-[12px] border-t-4 md:border-t-0 md:border-l-4 border-cyan-bright shadow-2xl">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col text-center">
                    <span className="text-cyan-bright text-3xl md:text-4xl font-heading font-black mb-1">
                      {stat.value}
                    </span>
                    <span className="text-white/60 text-[9px] md:text-[10px] font-body font-bold uppercase tracking-[0.2em]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
