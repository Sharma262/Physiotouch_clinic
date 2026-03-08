"use client";

import { useState, useEffect } from "react";
import { clinicConfig } from "@/lib/config";
import { Phone } from "lucide-react";
import Image from "next/image";

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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Header — white */}
      <header
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-md py-2" : "py-3"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo-white-bg.jpeg"  alt="Physiotouch Clinic Logo"
              width={70} height={30} className="object-contain rounded-full" priority />
          </div>
          {/* Nav */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-600 font-semibold text-sm hover:text-blue-700 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          {/* Buttons */}
          <div className="flex items-center gap-3">
            <a href={`tel:${clinicConfig.contact.phone}`}
              className="flex items-center gap-2 bg-green-500 text-white font-bold px-5 py-2.5 rounded-full hover:bg-green-600 transition-colors text-sm">
              <Phone size={15} />
              <span>Call Us</span>
            </a>
            <button onClick={onBookClick}
              className="text-white font-bold px-5 py-2.5 rounded-full transition-colors text-sm cursor-pointer hover:-translate-y-0.5"
              style={{ background: "#2b1f51" }}>
              Book Appointment
            </button>
          </div>
        </div>
      </header>
  
      {/* Mobile Header — dark purple */}
      <header
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-md py-2" : "py-3"
        }`}
        style={{ background: "#2b1f51" }}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo-white-bg.jpeg" alt="Physiotouch Clinic Logo"
              width={60} height={40} className="object-contain w-16 h-16 md:w-20 md:h-20 rounded-full" priority />
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-2">
            <a href={`tel:${clinicConfig.contact.phone}`}
              className="flex items-center gap-2 font-bold px-4 py-2 rounded-full text-sm"
              style={{ background: "#85c226", color: "#2b1f51" }}>
              <Phone size={15} />
              <span>Call Us</span>
            </a>
            <button onClick={onBookClick}
              className="text-white font-bold px-4 py-2 rounded-full text-sm border border-white/30">
              Book
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
