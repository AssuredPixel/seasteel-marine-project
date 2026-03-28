"use client";

import Image from "next/image";
import LinkNext from "next/link";
import {
  Facebook,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Mail,
  MessageCircle // Added WhatsApp
} from "lucide-react";
import { useEffect, useState } from "react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/services", label: "Marine Engineering" },
  { href: "/services", label: "Civil Construction" },
  { href: "/services", label: "Procurement Services" },
  { href: "/services", label: "Equipment Leasing" },
  { href: "/services", label: "Project Management" },
  { href: "/services", label: "Consultancy" },
];

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-navy border-t border-cyan text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left items-center md:items-start">

          {/* Column 1: Logo & Social */}
          <div className="space-y-6">
            <LinkNext href="/" className="inline-block">
              <Image
                src="/images/white-bg-logo.jpg"
                alt="Seasteel Marine Logo"
                width={260}
                height={80}
                className="h-12 md:h-20 w-auto object-contain"
              />
            </LinkNext>
            <p className="text-gray-300 font-body leading-relaxed max-w-xs">
              The Exceptional Marine Service Provider.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {[
                { Icon: MessageCircle, href: "https://wa.me/2348036692362" }, // WhatsApp First
                { Icon: Linkedin, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cyan flex items-center justify-center text-white hover:bg-cyan-bright hover:scale-110 transition-all duration-300 shadow-glow"
                  aria-label="Social link"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6 text-white border-b border-cyan/20 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <LinkNext
                    href={href}
                    className="text-gray-300 hover:text-cyan transition-colors duration-200 font-body text-sm"
                  >
                    {label}
                  </LinkNext>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6 text-white border-b border-cyan/20 pb-2 inline-block">
              Our Services
            </h4>
            <ul className="space-y-4">
              {services.map(({ href, label }) => (
                <li key={label}>
                  <LinkNext
                    href={href}
                    className="text-gray-300 hover:text-cyan transition-colors duration-200 font-body text-sm"
                  >
                    {label}
                  </LinkNext>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg font-bold mb-6 text-white border-b border-cyan/20 pb-2 inline-block">
              Get in Touch
            </h4>
            <div className="space-y-4 text-gray-300 font-body flex flex-col items-center md:items-start text-sm">
              <div className="flex gap-3">
                <MapPin className="text-cyan shrink-0" size={18} />
                <span>
                  No. 5 Afaha Uqua–Obokidim Street, Eket L.G.A, Akwa Ibom State
                </span>
              </div>
              <a href="tel:+2348036692362" className="flex gap-3 items-center hover:text-cyan transition-colors">
                <Phone className="text-cyan shrink-0" size={18} />
                <span>+234 803 669 2362</span>
              </a>
              <a href="https://wa.me/2348036692362" className="flex gap-3 items-center hover:text-cyan transition-colors font-bold">
                <MessageCircle className="text-cyan shrink-0" size={18} />
                <span>WhatsApp Available</span>
              </a>
              <a href="mailto:seasteelmarine@gmail.com" className="flex gap-3 items-center hover:text-cyan transition-colors">
                <Mail className="text-cyan shrink-0" size={18} />
                <span>seasteelmarine@gmail.com</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-body text-center md:text-left">
          <p>
            &copy; {year || "2026"} Seasteel Marine & Offshore Services Limited. All rights reserved.
          </p>
          <p className="font-medium tracking-widest text-cyan/60">
            RC 1060991
          </p>
        </div>
      </div>
    </footer>
  );
}
