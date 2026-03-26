"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
  backgroundImage: string;
}

export default function PageHero({ 
  title, 
  subtitle, 
  breadcrumb, 
  backgroundImage 
}: PageHeroProps) {
  return (
    <section className="relative w-full h-[280px] md:h-[420px] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/75 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtitle */}
          <span className="text-cyan font-body font-medium text-[16px] md:text-[18px] uppercase tracking-[0.2em] block mb-4">
            {subtitle}
          </span>

          {/* Title */}
          <h1 className="text-white text-4xl md:text-[52px] font-heading font-black leading-tight mb-6">
            {title}
          </h1>

          {/* Animated Accent Underline */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-cyan mx-auto rounded-full mb-8"
          />

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-gray-400 text-[12px] uppercase tracking-widest font-heading font-bold">
              Home
            </span>
            <span className="text-gray-600 text-[10px]">&gt;</span>
            <span className="text-gray-300 text-[12px] uppercase tracking-widest font-heading font-bold">
              {breadcrumb}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
