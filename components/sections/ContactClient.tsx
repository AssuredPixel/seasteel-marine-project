"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  MessageCircle, // For WhatsApp
  Send
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
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
  { icon: Phone, label: "Phone", value: "+234 803 669 2362", href: "tel:+2348036692362" },
  { icon: MessageCircle, label: "WhatsApp", value: "+234 803 669 2362", href: "https://wa.me/2348036692362" },
  { icon: Mail, label: "Email", value: "support@seasteelmarine.com", href: "mailto:support@seasteelmarine.com" },
  { icon: MapPin, label: "Address", value: "Eket, Akwa Ibom State, Nigeria", href: "#" },
];

function ContactContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate professional form submission
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Extract values
    const { name, company, email, phone, service, message } = data;
    
    // Create mailto link as requested by user ("connect the form")
    const subject = encodeURIComponent(`New Inquiry: ${service || "General Inquiry"}`);
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
    
    setTimeout(() => {
      window.location.href = `mailto:support@seasteelmarine.com?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
    }, 800);
  };

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
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16">
              
              {/* Left Column: Form (60%) */}
              <div id="contact-form" className="lg:w-[60%] scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-navy text-2xl font-heading font-black mb-10 border-l-4 border-cyan pl-6">
                    Send Us a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label className="text-navy text-xs font-heading font-black uppercase tracking-widest mb-2 px-1">Full Name</label>
                        <input 
                          required
                          name="name"
                          type="text" 
                          placeholder="John Doe"
                          className="w-full bg-surface-muted border-b-2 border-transparent focus:border-navy focus:outline-none rounded-lg px-4 py-3 font-body text-[15px] text-navy placeholder:text-gray-400 transition-all"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-navy text-xs font-heading font-black uppercase tracking-widest mb-2 px-1">Company Name</label>
                        <input 
                          name="company"
                          type="text" 
                          placeholder="Acme Corp"
                          className="w-full bg-surface-muted border-b-2 border-transparent focus:border-navy focus:outline-none rounded-lg px-4 py-3 font-body text-[15px] text-navy placeholder:text-gray-400 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label className="text-navy text-xs font-heading font-black uppercase tracking-widest mb-2 px-1">Email Address</label>
                        <input 
                          required
                          name="email"
                          type="email" 
                          placeholder="john@example.com"
                          className="w-full bg-surface-muted border-b-2 border-transparent focus:border-navy focus:outline-none rounded-lg px-4 py-3 font-body text-[15px] text-navy placeholder:text-gray-400 transition-all"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-navy text-xs font-heading font-black uppercase tracking-widest mb-2 px-1">Phone Number</label>
                        <input 
                          name="phone"
                          type="tel" 
                          placeholder="+234..."
                          className="w-full bg-surface-muted border-b-2 border-transparent focus:border-navy focus:outline-none rounded-lg px-4 py-3 font-body text-[15px] text-navy placeholder:text-gray-400 transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-navy text-xs font-heading font-black uppercase tracking-widest mb-2 px-1">Service Required</label>
                      <select 
                        name="service"
                        defaultValue={preselectedService}
                        className="w-full bg-surface-muted border-b-2 border-transparent focus:border-navy focus:outline-none rounded-lg px-4 py-3 font-body text-[15px] text-navy transition-all appearance-none cursor-pointer"
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
                        required
                        name="message"
                        rows={5}
                        placeholder="Tell us about your requirements..."
                        className="w-full bg-surface-muted border-b-2 border-transparent focus:border-navy focus:outline-none rounded-lg px-4 py-3 font-body text-[15px] text-navy placeholder:text-gray-400 transition-all"
                      ></textarea>
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-cyan text-white font-body font-bold text-[15px] py-4 rounded-lg shadow-xl hover:bg-cyan-bright transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70"
                    >
                      {isSubmitting ? "Opening Email..." : "Send Message"}
                      {!isSubmitting && <Send size={18} />}
                    </button>
                  </form>
                </motion.div>
              </div>

              {/* Right Column: Info Cards (40%) */}
              <div className="lg:w-[40%] space-y-8">
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
                      <a 
                        key={idx} 
                        href={card.href}
                        className="bg-surface-muted p-6 rounded-xl flex items-center gap-6 border border-gray-100 hover:border-cyan hover:shadow-lg transition-all group"
                      >
                        <div className="p-3 bg-white rounded-lg shadow-sm group-hover:bg-cyan group-hover:text-white transition-all">
                          <card.icon className="w-6 h-6 text-cyan group-hover:text-white" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-navy text-[10px] font-heading font-black uppercase tracking-widest mb-1">{card.label}</p>
                          <p className="text-navy font-body text-[16px] font-bold group-hover:text-cyan transition-colors">{card.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="mt-12 flex items-center gap-4">
                    <span className="text-navy text-xs font-heading font-black uppercase tracking-widest mr-4">Connect with us</span>
                    {[
                      { Icon: Facebook, href: "#" },
                      { Icon: Twitter, href: "#" },
                      { Icon: Linkedin, href: "#" },
                      { Icon: Instagram, href: "#" },
                      { Icon: MessageCircle, href: "https://wa.me/2348036692362" }
                    ].map(({ Icon, href }, i) => (
                      <a 
                        key={i} 
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 border border-cyan/20 rounded-full flex items-center justify-center text-cyan hover:bg-cyan hover:text-white transition-all"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* Final CTA Strip */}
        <section className="bg-cyan py-20 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h3 className="text-white text-xl font-heading font-bold mb-4 opacity-90">Corporate Headquarters</h3>
            <p className="text-white text-[24px] md:text-[32px] font-heading font-black mb-8 leading-tight">
              Eket, Akwa Ibom State, Nigeria
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="tel:+2348036692362" 
                className="bg-navy text-white px-8 py-4 rounded-full font-body font-bold hover:bg-navy-dark transition-all shadow-xl"
              >
                Call: +234 803 669 2362
              </a>
              <a 
                href="https://wa.me/2348036692362" 
                className="bg-white text-cyan px-8 py-4 rounded-full font-body font-bold hover:shadow-xl transition-all flex items-center gap-2"
              >
                <MessageCircle size={20} /> WhatsApp
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-black/10 rounded-full blur-3xl" />
        </section>

      </main>
      <Footer />
    </>
  );
}

export default function ContactClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center"><div className="w-12 h-12 border-4 border-cyan border-t-transparent rounded-full animate-spin" /></div>}>
      <ContactContent />
    </Suspense>
  );
}
