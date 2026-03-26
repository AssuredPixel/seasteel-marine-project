"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "12+", label: "Operational History" },
  { value: "15", label: "Service Portfolio" },
  { value: "10", label: "Strategic Alliances" },
  { value: "Zero Compromise", label: "Safety Standard" },
];

export default function AboutSnippet() {
  return (
    <section className="bg-surface-muted py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column (45%) - Image with Accents */}
          <div className="w-full lg:w-[45%] relative group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="/images/about-port.png"
                alt="Offshore Port Facility"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Corner Accents (Cyan Brackets) */}
              <div className="absolute -top-2 -left-2 w-16 h-16 border-t-4 border-l-4 border-cyan z-20 pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-4 border-r-4 border-cyan z-20 pointer-events-none" />
              
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>

          {/* Right Column (55%) - Content & Stats */}
          <div className="w-full lg:w-[55%]">
            <div className="space-y-6">
              <span className="text-cyan-bright text-xs font-heading font-black uppercase tracking-[0.2em] block">
                About Seasteel
              </span>
              <h2 className="text-navy text-4xl md:text-[40px] font-heading font-bold leading-tight">
                Your Trusted Partner in Marine & <br className="hidden md:block" />
                Offshore Excellence.
              </h2>
              
              <div className="space-y-4 text-steel/80 font-body text-base leading-relaxed max-w-2xl">
                <p>
                  Seasteel Marine is a premier engineering and technical service provider 
                  headquartered in Akwa Ibom, Nigeria. Since our inception in 2012, 
                  we have established a reputation for delivering uncompromising 
                  technical solutions to Africa&apos;s offshore energy and maritime sectors.
                </p>
                <p>
                  Our expertise spans marine engineering, civil construction, 
                  shipbuilding, and strategic procurement. We combine local 
                  intelligence with international standards to ensure that every 
                  project we undertake is a benchmark for quality and safety.
                </p>
                <p>
                  We are driven by a commitment to operational efficiency and 
                  sustainability, ensuring that Seasteel Marine remains the preferred 
                  partner for major oil clients and government institutions across the region.
                </p>
              </div>

              {/* Stats Grid (2x2) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-sm border-l-4 border-cyan shadow-sm flex flex-col justify-center transition-all duration-300"
                  >
                    <span className="text-cyan-bright text-[40px] font-heading font-black leading-none mb-2">
                      {stat.value}
                    </span>
                    <span className="text-navy text-[14px] font-body font-bold uppercase tracking-wide">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
