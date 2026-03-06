"use client";

import { useState, useEffect } from "react";
import { clinicConfig } from "@/lib/config";
import { Phone } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ onBookClick }: { onBookClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-3"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-11 h-11 bg-blue-700 rounded-full flex items-center justify-center">
            <span className="text-white font-black text-xl">P</span>
          </div>
          <div>
            <p className="text-blue-700 font-black text-xl leading-tight">Physiotouch</p>
            <p className="text-gray-400 text-xs leading-tight">Clinic</p>
          </div>
        </div>

        {/* Nav links — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-600 font-semibold text-sm hover:text-blue-700 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          {/* Call Us — green */}
          <a
            href={`tel:${clinicConfig.contact.phone}`}
            className="flex items-center gap-2 bg-green-500 text-white font-bold px-5 py-2.5 rounded-full hover:bg-green-600 transition-colors text-sm"
          >
            <Phone size={15} />
            <span>Call Us</span>
          </a>

          {/* Book Appointment — blue */}
          <button
            onClick={onBookClick}
            className="hidden sm:block bg-blue-700 text-white font-bold px-5 py-2.5 rounded-full hover:bg-blue-800 transition-colors text-sm"
          >
            Book Appointment
          </button>
        </div>

      </div>
    </header>
  );
}