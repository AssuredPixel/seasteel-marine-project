"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import Partners from "@/components/sections/Partners";

const projectCategories = [
  "All",
  "Vessel Management",
  "Offshore Operations",
  "Ship Repairs",
  "Diving",
  "Engineering",
];

const projects = [
  { id: 1, title: "ExxonMobil Offshore Support", category: "Vessel Management", image: "/images/hero-ship.png" },
  { id: 2, title: "NLNG Ship Repair & Maintenance", category: "Ship Repairs", image: "/images/projects-grid.png" },
  { id: 3, title: "Chevron Subsea Inspection", category: "Diving", image: "/images/about-port.png" },
  { id: 4, title: "Seplat Field Development", category: "Offshore Operations", image: "/images/cta-rig.png" },
  { id: 5, title: "NAOC Architecture Upgrade", category: "Engineering", image: "/images/fleet-panorama.png" },
  { id: 6, title: "Oando Logistics Support", category: "Vessel Management", image: "/images/hero-ship.png" },
  { id: 7, title: "Shell Underwater Welding", category: "Diving", image: "/images/projects-grid.png" },
  { id: 8, title: "TotalEnergies Engine Overhaul", category: "Ship Repairs", image: "/images/about-port.png" },
  { id: 9, title: "Network E&P Consultancy", category: "Engineering", image: "/images/cta-rig.png" },
];

const partners = [
  "ExxonMobil",
  "Nigeria LNG Limited (NLNG)",
  "Chevron Nigeria Limited",
  "Seplat Energy Plc",
  "Nigerian Agip Oil Company (NAOC)",
  "PAN Ocean Oil Corporation",
  "Oando Energy Resources",
  "Network E&P Nigeria Limited",
  "BG Exploration",
  "TotalEnergies",
];

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Header */}
        <PageHero 
          title="Our Projects"
          subtitle="Delivering Excellence Across Nigerian Waters and Beyond"
          breadcrumb="Projects"
          backgroundImage="/images/fleet-panorama.png"
        />

        {/* Filter Bar - SHRINK ON SCROLL IMPLEMENTED */}
        <section 
          className={`sticky top-20 z-20 w-full transition-all duration-500 border-b border-gray-100 ${
            isScrolled 
              ? "py-6 bg-white/95 backdrop-blur-md shadow-2xl" 
              : "py-12 bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex overflow-x-auto lg:flex-wrap lg:justify-center gap-3 pb-4 lg:pb-0 no-scrollbar">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-full text-xs md:text-sm font-body font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                    activeCategory === cat 
                      ? "bg-cyan text-white shadow-lg scale-105" 
                      : "bg-surface-muted text-navy hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 bg-surface px-6 min-h-[800px]">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group relative h-[280px] rounded-xl overflow-hidden shadow-md cursor-pointer"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent group-hover:bg-navy/80 transition-colors duration-500" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className="inline-block bg-cyan text-white text-[10px] font-heading font-black px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-white text-xl font-heading font-bold mb-4 drop-shadow-lg">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-cyan font-body font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        View Details <span>→</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Partners Section (Replaced with common component) */}
        <Partners />

        {/* CTA */}
        <section className="bg-navy py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl md:text-[40px] font-heading font-black leading-tight mb-10">
              Deliver Your Next Offshore <br className="hidden md:block" /> Project With Precision.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-cyan text-white px-10 py-5 rounded-[6px] font-body font-bold text-[15px] hover:bg-cyan-bright transition-all shadow-xl">
                Partner With Us
              </button>
              <button className="w-full sm:w-auto border-2 border-white text-white px-10 py-[18px] rounded-[6px] font-body font-bold text-[15px] hover:bg-white hover:text-navy transition-all">
                Project Gallery
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
