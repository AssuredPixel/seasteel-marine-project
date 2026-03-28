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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-navy/90 backdrop-blur-md border-b border-white/10 shadow-lg py-1"
          : "bg-navy md:bg-transparent py-2 md:py-4 border-b border-white/10 md:border-transparent"
          }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Left: Logo Slot */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/white-bg-logo.jpg"
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
                    className={`font-body text-[15px] font-medium transition-colors duration-200 relative py-1 ${isActive ? "text-white" : "text-white/80 hover:text-white"
                      }`}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan"
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
              className="bg-cyan text-white font-body font-semibold text-[14px] px-[28px] py-[14px] rounded-[6px] hover:bg-cyan-dark transition-all duration-200 shadow-glow active:scale-95 inline-block"
            >
              Get a Quote
            </Link>
          </motion.div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-cyan p-2"
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
            className="fixed inset-0 z-[60] bg-navy flex flex-col"
          >
            {/* Background Pattern/Blur */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full p-8 md:p-12">
              <div className="flex items-center justify-between mb-16">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/images/seasteel-logo-stitch.png"
                    alt="Seasteel Marine Logo"
                    width={200}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white/5 hover:bg-white/10 text-white p-3 rounded-full transition-colors border border-white/10"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              <motion.ul
                variants={{
                  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                  hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-6"
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
                      className={`text-4xl md:text-5xl font-heading font-bold transition-all hover:pl-2 ${pathname === href ? "text-cyan" : "text-white/90 hover:text-white"
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
                <p className="text-white/50 font-body text-sm mb-6 uppercase tracking-widest font-bold">
                  Get in Touch
                </p>
                <Link
                  href="/contact#contact-form"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-cyan text-white font-body font-bold text-lg px-8 py-5 rounded-[8px] hover:bg-cyan-dark transition-all duration-300 block text-center shadow-glow active:scale-[0.98]"
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
