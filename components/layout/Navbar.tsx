"use client";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy ${
        scrolled ? "border-t border-white/10 shadow-lg" : ""
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
            <img
              src="/images/logo-placeholder.png"
              alt="Seasteel Logo"
              className="h-8 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                (e.target as HTMLImageElement).parentElement!.innerHTML += `
                  <span class="font-heading text-xl font-bold tracking-tight text-white line-clamp-1">
                    Sea<span class="text-cyan">steel</span>
                  </span>
                `;
              }}
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
                    isActive ? "text-white" : "text-white/80 hover:text-white"
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
            href="/contact"
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-navy flex flex-col p-8"
          >
            <div className="flex items-center justify-between mb-12">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <span className="font-heading text-2xl font-bold text-white">
                  Sea<span className="text-cyan">steel</span>
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>

            <ul className="flex flex-col gap-8">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-body font-semibold transition-colors ${
                      pathname === href ? "text-cyan" : "text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-cyan text-white font-body font-bold text-lg px-8 py-4 rounded-[6px] hover:bg-cyan-dark transition-colors block text-center"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
