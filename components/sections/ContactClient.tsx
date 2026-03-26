"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";

const services = [
  "Vessel Management & Operations",
  "Ship Repairs & Dry Docking",
  "Diving Operations",
  "Vessel Chartering",
  "Crew Manning & Logistics",
  "Marine Engine Repairs",
  "Naval Architecture & Design",
  "Procurement & Global Logistics",
  "Marine Security Services",
  "Underwater Inspection (UWILD)",
  "Pollution & Waste Management",
  "Offshore Construction Support",
  "Technical Consultancy & Audit",
  "Salvage & Emergency Recovery",
  "Dredging & Reclamation",
  "Agency & Clearance Services",
];

const contactCards = [
  { icon: Phone, label: "Phone", value: "+234 803 669 2362" },
  { icon: Mail, label: "Email", value: "seasteelmarine@gmail.com" },
  { icon: MapPin, label: "Address", value: "Eket, Akwa Ibom State, Nigeria" },
  { icon: Globe, label: "Website", value: "www.seasteelmarine.com" },
];

export default function ContactClient() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Header */}
        <PageHero 
          title="Contact Us"
          subtitle="Reach Out for Vessel Chartering, Offshore Support, or Engineering Solutions"
          breadcrumb="Contact"
          backgroundImage="/images/cta-rig.png"
        />

        {/* Contact Layout */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16">
              
              {/* Left Column: Form (60%) */}
              <div className="lg:w-[60%]">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-navy text-2xl font-heading font-black mb-10 border-l-4 border-cyan pl-6">
                    Send Us a Message
                  </h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label className="text-navy text-xs font-heading font-black uppercase tracking-widest mb-2 px-1">Full Name</label>
                        <input 
                          type="text" 
                          placeholder="John Doe"
                          className="w-full bg-surface border-b-2 border-transparent focus:border-navy focus:outline-none rounded-lg px-4 py-3 font-body text-[15px] transition-all"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-navy text-xs font-heading font-black uppercase tracking-widest mb-2 px-1">Company Name</label>
                        <input 
                          type="text" 
                          placeholder="Acme Corp"
                          className="w-full bg-surface border-b-2 border-transparent focus:border-navy focus:outline-none rounded-lg px-4 py-3 font-body text-[15px] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label className="text-navy text-xs font-heading font-black uppercase tracking-widest mb-2 px-1">Email Address</label>
                        <input 
                          type="email" 
                          placeholder="john@example.com"
                          className="w-full bg-surface border-b-2 border-transparent focus:border-navy focus:outline-none rounded-lg px-4 py-3 font-body text-[15px] transition-all"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-navy text-xs font-heading font-black uppercase tracking-widest mb-2 px-1">Phone Number</label>
                        <input 
                          type="tel" 
                          placeholder="+234..."
                          className="w-full bg-surface border-b-2 border-transparent focus:border-navy focus:outline-none rounded-lg px-4 py-3 font-body text-[15px] transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-navy text-xs font-heading font-black uppercase tracking-widest mb-2 px-1">Service Required</label>
                      <select 
                        className="w-full bg-surface border-b-2 border-transparent focus:border-navy focus:outline-none rounded-lg px-4 py-3 font-body text-[15px] transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service, idx) => (
                          <option key={idx} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-navy text-xs font-heading font-black uppercase tracking-widest mb-2 px-1">Your Message</label>
                      <textarea 
                        rows={5}
                        placeholder="Tell us about your requirements..."
                        className="w-full bg-surface border-b-2 border-transparent focus:border-navy focus:outline-none rounded-lg px-4 py-3 font-body text-[15px] transition-all"
                      ></textarea>
                    </div>

                    <button className="w-full bg-cyan text-white font-body font-bold text-[15px] py-4 rounded-lg shadow-xl hover:bg-cyan-bright transition-all active:scale-[0.98]">
                      Send Message
                    </button>
                  </form>
                </motion.div>
              </div>

              {/* Right Column: Info Cards (40%) */}
              <div className="lg:w-[40%] space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-navy text-2xl font-heading font-black mb-10">
                    Get in Touch
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {contactCards.map((card, idx) => (
                      <div key={idx} className="bg-surface p-6 rounded-xl flex items-center gap-6 border border-gray-100 hover:border-cyan transition-all group">
                        <div className="p-3 bg-white rounded-lg shadow-sm group-hover:bg-cyan group-hover:text-white transition-all">
                          <card.icon className="w-6 h-6 text-cyan group-hover:text-white" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-navy text-[10px] font-heading font-black uppercase tracking-widest mb-1">{card.label}</p>
                          <p className="text-gray-600 font-body text-[15px]">{card.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 flex items-center gap-4">
                    <span className="text-navy text-xs font-heading font-black uppercase tracking-widest mr-4">Follow Us</span>
                    {[Facebook, Twitter, Linkedin, Instagram].map((Social, i) => (
                      <a key={i} href="#" className="w-10 h-10 border border-cyan/20 rounded-full flex items-center justify-center text-cyan hover:bg-cyan hover:text-white transition-all">
                        <Social className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="py-24 bg-surface px-6 border-t border-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-navy text-2xl font-heading font-black mb-12">Find Us</h3>
            <div className="relative w-full h-[400px] bg-white rounded-3xl border-2 border-navy/5 overflow-hidden shadow-inner flex flex-col items-center justify-center group">
              <div className="p-6 bg-surface rounded-full mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-12 h-12 text-navy" strokeWidth={1} />
              </div>
              <p className="text-gray-400 font-body text-sm mb-2">Seasteel Marine Headquarters</p>
              <p className="text-navy font-heading font-black text-xl">Eket, Akwa Ibom State, Nigeria</p>
            </div>
          </div>
        </section>

        {/* Final CTA Strip */}
        <section className="bg-cyan py-16 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h3 className="text-white text-xl font-heading font-bold mb-4 opacity-90">Prefer to Call Directly?</h3>
            <a 
              href="tel:+2348036692362" 
              className="text-white text-[32px] md:text-[48px] font-heading font-black hover:scale-105 transition-transform inline-block mb-4"
            >
              +234 803 669 2362
            </a>
            <p className="text-white/80 text-xs font-body font-medium uppercase tracking-widest">
              Available Monday–Saturday, 8AM–6PM WAT
            </p>
          </div>
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
        </section>

      </main>
      <Footer />
    </>
  );
}
