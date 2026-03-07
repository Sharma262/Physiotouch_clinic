"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { clinicConfig } from "@/lib/config";

export default function Banner({ onBookClick }: { onBookClick: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Top-left mint circle — hidden on mobile */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-teal-100 opacity-60 pointer-events-none hidden md:block" />

      {/* Bottom-right concentric arcs */}
      <div className="absolute -bottom-10 -right-10 pointer-events-none hidden md:block">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <circle
            cx="300"
            cy="300"
            r="80"
            stroke="#1d4ed8"
            strokeWidth="1"
            opacity="0.15"
          />
          <circle
            cx="300"
            cy="300"
            r="110"
            stroke="#1d4ed8"
            strokeWidth="1"
            opacity="0.12"
          />
          <circle
            cx="300"
            cy="300"
            r="140"
            stroke="#1d4ed8"
            strokeWidth="1"
            opacity="0.09"
          />
          <circle
            cx="300"
            cy="300"
            r="170"
            stroke="#1d4ed8"
            strokeWidth="1"
            opacity="0.07"
          />
          <circle
            cx="300"
            cy="300"
            r="200"
            stroke="#1d4ed8"
            strokeWidth="1"
            opacity="0.05"
          />
          <circle
            cx="300"
            cy="300"
            r="230"
            stroke="#1d4ed8"
            strokeWidth="1"
            opacity="0.04"
          />
        </svg>
      </div>

      {/* Top-right dot cluster — hidden on mobile */}
      <div className="absolute top-10 right-10 pointer-events-none opacity-20 hidden md:block">
        <svg width="120" height="120" viewBox="0 0 120 120">
          {[0, 1, 2, 3, 4].map((row) =>
            [0, 1, 2, 3, 4].map((col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 24 + 12}
                cy={row * 24 + 12}
                r="2"
                fill="#1d4ed8"
              />
            ))
          )}
        </svg>
      </div>

      {/* Green shape — desktop only */}
      <div className="absolute top-0 right-0 w-[42%] h-full bg-gradient-to-bl from-teal-400 to-blue-500 rounded-bl-[80px] z-0 hidden md:block" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left — Text */}
          <div className="flex-1 text-center md:text-left">
            <div
              className="transition-all duration-700 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-40px)",
                transitionDelay: "0ms",
              }}
            >
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-1 rounded-full mb-4">
                Physiotherapy Clinic · Sector 45, Gurugram
              </span>
            </div>

            <div
              className="transition-all duration-700 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-40px)",
                transitionDelay: "150ms",
              }}
            >
              <h1 className="text-2xl md:text-4xl font-black text-gray-800 leading-tight mb-3">
                Living <span className="text-blue-700">Pain Free</span> And
                Better Life With{" "}
                <span className="text-blue-700">Non-Surgical Treatment!</span>
              </h1>
            </div>

            <div
              className="transition-all duration-700 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-40px)",
                transitionDelay: "300ms",
              }}
            >
              <p className="text-gray-500 text-sm md:text-base mb-2">
                — {clinicConfig.doctor.name}, {clinicConfig.doctor.degrees}
              </p>
              <p className="text-gray-500 text-sm mb-7 max-w-md mx-auto md:mx-0 leading-relaxed">
                Expert physiotherapy for pain relief, sports injuries, and
                post-surgery rehabilitation. Non-surgical. Proven results.
              </p>
            </div>

            <div
              className="transition-all duration-700 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-40px)",
                transitionDelay: "450ms",
              }}
            >
              <button
                onClick={onBookClick}
                className="bg-blue-700 text-white font-black px-7 py-3.5 rounded-full text-base hover:bg-blue-800 transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                Book An Appointment
              </button>
            </div>
          </div>

          {/* Right — Doctor image */}
          {/* On mobile: smaller centered card with blue bg instead of green shape */}
          <div
            className="flex-1 flex justify-center md:justify-end w-full transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transitionDelay: "200ms",
            }}
          >
         

          {/* Desktop */}
          <div className="hidden md:flex flex-1 justify-end">
            <div className="relative w-80 h-[340px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/nitin.jpg"
                alt="Dr. Kavita Sharma - Physiotherapist Gurugram"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex justify-center w-full">
            <div className="relative w-48 h-48 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/nitin.jpg"
                alt="Dr. Kavita Sharma - Physiotherapist Gurugram"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative z-10 bg-blue-700 transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transitionDelay: "600ms",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-center justify-center md:divide-x divide-blue-500 gap-3 md:gap-0">
            <div className="flex-1 text-center px-6">
              <p className="text-white text-base md:text-xl font-black">
                Gurugram's Trusted{" "}
                <span className="text-yellow-300">Physiotherapy</span>{" "}
                Specialist
              </p>
            </div>
            <div className="flex-1 text-center px-6">
              <p className="text-white text-base md:text-xl font-black">
                <span className="text-yellow-300">
                  {clinicConfig.stats[0].value}
                </span>{" "}
                Patients Treated{" "}
                <span className="text-yellow-300">Without Surgery</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
