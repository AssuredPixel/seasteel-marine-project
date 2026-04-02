"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const navContainerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className="relative z-50 bg-off-white py-1 md:py-2 border-b border-navy/10 transition-all duration-500"
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 py-2 md:py-3 flex items-center justify-between">
          {/* Left: Logo Slot */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/SEASTEEL-MARINE_watermark.png"
                alt="Seasteel Marine Logo"
                width={260}
                height={80}
                priority
                className="h-12 md:h-20 w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* Center: Desktop Nav Links (Animated) */}
          <motion.ul
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <motion.li key={href} variants={navItemVariants}>
                  <Link
                    href={href}
                    className={`font-body text-[15px] font-medium transition-colors duration-200 relative py-1 ${
                      isActive ? "text-navy" : "text-navy/70 hover:text-navy"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-navy"
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Right: CTA Button (Animated) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="hidden md:block"
          >
            <Link
              href="/contact#contact-form"
              className="bg-cyan-bright text-white font-body font-semibold text-[14px] px-[28px] py-[14px] rounded-[6px] hover:bg-cyan-dark transition-all duration-200 active:scale-95 inline-block"
            >
              Get a Quote
            </Link>
          </motion.div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 transition-colors text-navy"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-off-white flex flex-col"
          >
            {/* Background Pattern/Blur */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-navy/5 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full p-6 md:p-12">
              <div className="flex items-center justify-between mb-16">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/images/SEASTEEL-MARINE_watermark.png"
                    alt="Seasteel Marine Logo"
                    width={180}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-navy/5 hover:bg-navy/10 text-navy p-2 rounded-full transition-colors border border-navy/10"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <motion.ul
                variants={{
                  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                  hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-4"
              >
                {navLinks.map(({ href, label }) => (
                  <motion.li
                    key={href}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl md:text-5xl font-heading font-bold transition-all hover:pl-2 ${pathname === href ? "text-navy" : "text-navy/70 hover:text-navy"
                        }`}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-auto pt-12 border-t border-white/10"
              >
                <p className="text-navy/50 font-body text-sm mb-6 uppercase tracking-widest font-bold">
                  Get in Touch
                </p>
                <Link
                  href="/contact#contact-form"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-navy text-white font-body font-bold text-base px-6 py-4 rounded-[8px] hover:bg-navy-dark transition-all duration-300 block text-center shadow-glow active:scale-[0.98]"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
