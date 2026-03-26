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
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-ship.png"
          alt="Offshore Container Ship"
          fill
          priority
          className="object-cover"
        />
        {/* Navy Overlay (70% opacity) */}
        <div className="absolute inset-0 bg-navy/70 z-10" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 relative z-20 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-white text-[36px] md:text-[68px] leading-[1.1] md:leading-[1.2] font-black tracking-tight mb-8"
          >
            Nigeria&apos;s Premier Marine &{" "}
            <span className="text-cyan-bright block">
              Offshore Services Company
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="font-body text-white/80 text-lg md:text-[18px] leading-relaxed mb-12 max-w-2xl"
          >
            Delivering world-class technical solutions for Africa&apos;s
            offshore energy sector, since 2012.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row gap-4 items-center mb-20"
          >
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 bg-cyan-bright text-white text-center font-body font-bold rounded-[6px] hover:bg-cyan-dark transition-all duration-300 shadow-glow active:scale-95"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white text-center font-body font-bold rounded-[6px] hover:bg-white hover:text-navy transition-all duration-300 active:scale-95"
            >
              Contact Fleet
            </Link>
          </motion.div>

          {/* Floating Stats Card (Now integrated into variants) */}
          <motion.div
            variants={itemVariants}
            className="z-20 w-full lg:w-fit"
          >
            <div className="bg-navy p-6 md:p-10 rounded-[8px] border-l-4 border-cyan-bright shadow-2xl">
              <div className="flex flex-col sm:flex-row items-center justify-between lg:justify-start gap-8 md:gap-20">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col text-center lg:text-left">
                    <span className="text-cyan-bright text-4xl font-heading font-black mb-1">
                      {stat.value}
                    </span>
                    <span className="text-white/60 text-[10px] font-body font-bold uppercase tracking-[0.1em]">
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
