import Image from "next/image";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number from string (e.g., "12+" -> 12)
  const numericValue = parseInt(value) || 0;
  const isPlus = value.includes("+");
  
  const motionValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });
  
  const displayValue = useTransform(motionValue, (latest) => 
    Math.round(latest) + (isPlus ? "+" : "")
  );

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

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
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] relative group"
          >
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
          </motion.div>

          {/* Right Column (55%) - Content & Stats */}
          <div className="w-full lg:w-[55%]">
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-cyan-bright text-xs font-heading font-black uppercase tracking-[0.2em] block"
              >
                About Seasteel
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 }}
                className="text-navy text-4xl md:text-[40px] font-heading font-bold leading-tight"
              >
                Your Trusted Partner in Marine & <br className="hidden md:block" />
                Offshore Excellence.
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4 text-steel/80 font-body text-base leading-relaxed max-w-2xl"
              >
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
              </motion.div>

              {/* Stats Grid (2x2) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-sm border-l-4 border-cyan shadow-sm flex flex-col justify-center transition-all duration-300"
                  >
                    <span className="text-cyan-bright text-[40px] font-heading font-black leading-none mb-2">
                      {parseInt(stat.value) ? <Counter value={stat.value} /> : stat.value}
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
