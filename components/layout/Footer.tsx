"use client";

import LinkNext from "next/link";
import { 
  Facebook, 
  Linkedin, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail, 
  Globe 
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
              <span className="font-heading text-2xl font-bold tracking-tight">
                Sea<span className="text-cyan">steel</span>
              </span>
            </LinkNext>
            <p className="text-gray-300 font-body leading-relaxed max-w-xs">
              The Exceptional Service Provider.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {[
                { Icon: Linkedin, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="w-10 h-10 rounded-full bg-cyan flex items-center justify-center text-white hover:bg-cyan-dark transition-all duration-300 shadow-glow"
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
                    className="text-gray-300 hover:text-cyan transition-colors duration-200 font-body"
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
                    className="text-gray-300 hover:text-cyan transition-colors duration-200 font-body"
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
              Contact Info
            </h4>
            <div className="space-y-4 text-gray-300 font-body flex flex-col items-center md:items-start">
              <div className="flex gap-3">
                <MapPin className="text-cyan shrink-0" size={20} />
                <span className="text-sm leading-snug">
                  No. 5 Afaha Uqua–Obokidim Street, Eket L.G.A, Akwa Ibom State
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="text-cyan shrink-0" size={20} />
                <div className="flex flex-col text-sm">
                  <span>+234 803 669 2362</span>
                  <span>+234 906 696 2627</span>
                  <span>+234 808 802 7241</span>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="text-cyan shrink-0" size={20} />
                <span className="text-sm">seasteelmarine@gmail.com</span>
              </div>
              <div className="flex gap-3 items-center">
                <Globe className="text-cyan shrink-0" size={20} />
                <span className="text-sm">www.seastealmarine.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300 font-body text-center md:text-left">
          <p>
            &copy; {year || "2026"} Seasteel Marine. All rights reserved.
          </p>
          <p className="font-medium">
            RC 1060991
          </p>
        </div>
      </div>
    </footer>
  );
}
