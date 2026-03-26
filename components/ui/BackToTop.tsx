"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show when page is scrolled more than 50%
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (scrolled > height / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="hidden md:flex fixed bottom-8 right-8 z-[100] bg-cyan text-white p-4 rounded-full shadow-glow hover:bg-cyan-bright transition-all active:scale-95 group"
          aria-label="Back to top"
        >
          <ChevronUp 
            className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" 
            strokeWidth={3}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
