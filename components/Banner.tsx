"use client";

import { useEffect, useState } from "react";
import { clinicConfig } from "@/lib/config";
import Image from "next/image";

export default function Banner({ onBookClick }: { onBookClick: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#f8f7ff" }}
    >
      <div className="md:hidden h-1 w-full" style={{ background: "#85c226" }} />
      {/* Top-left decorative circle — subtle, not flat green */}
      <div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none hidden md:block"
        style={{
          background: "radial-gradient(circle, #85c22630 0%, transparent 70%)",
        }}
      />

      {/* Small accent circle top-left */}
      <div
        className="absolute top-8 left-8 w-16 h-16 rounded-full pointer-events-none hidden md:block"
        style={{ background: "#85c22620", border: "2px solid #85c22640" }}
      />

      {/* Bottom-right concentric arcs */}
      <div className="absolute -bottom-10 -right-10 pointer-events-none hidden md:block">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <circle
            cx="300"
            cy="300"
            r="80"
            stroke="#2b1f51"
            strokeWidth="1.5"
            opacity="0.12"
          />
          <circle
            cx="300"
            cy="300"
            r="110"
            stroke="#2b1f51"
            strokeWidth="1.5"
            opacity="0.09"
          />
          <circle
            cx="300"
            cy="300"
            r="140"
            stroke="#2b1f51"
            strokeWidth="1.5"
            opacity="0.07"
          />
          <circle
            cx="300"
            cy="300"
            r="170"
            stroke="#85c226"
            strokeWidth="1"
            opacity="0.08"
          />
          <circle
            cx="300"
            cy="300"
            r="200"
            stroke="#85c226"
            strokeWidth="1"
            opacity="0.06"
          />
          <circle
            cx="300"
            cy="300"
            r="230"
            stroke="#2b1f51"
            strokeWidth="1"
            opacity="0.04"
          />
        </svg>
      </div>

      {/* Dot cluster top-right */}
      <div className="absolute top-10 right-[45%] pointer-events-none opacity-20 hidden md:block">
        <svg width="80" height="80" viewBox="0 0 80 80">
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3].map((col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 20 + 10}
                cy={row * 20 + 10}
                r="2"
                fill="#2b1f51"
              />
            ))
          )}
        </svg>
      </div>

      {/* Right background panel — clean dark blue, no gradient */}
      <div
        className="absolute top-0 right-0 w-[44%] h-full rounded-bl-[80px] z-0 hidden md:block"
        style={{ background: "#2b1f51" }}
      />

      {/* Subtle green accent line on right panel */}
      <div
        className="absolute top-0 right-[44%] w-1 h-full hidden md:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #85c226, transparent)",
        }}
      />

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
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start flex-wrap">
                <span
                  className="inline-block text-xs font-bold px-4 py-1 rounded-full"
                  style={{ background: "#ede9ff", color: "#2b1f51" }}
                >
                  Best Physiotherapy Clinic · Sector 45, Gurugram
                </span>
                <span
                  className="inline-block text-xs font-bold px-4 py-1 rounded-full"
                  style={{ background: "#f0ffd6", color: "#4a7a0e" }}
                >
                  "{clinicConfig.tagline}"
                </span>
              </div>
            </div>

            <div
              className="transition-all duration-700 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-40px)",
                transitionDelay: "150ms",
              }}
            >
              <h1
                className="text-2xl md:text-4xl font-black leading-tight mb-3"
                style={{ color: "#2b1f51" }}
              >
                Living <span style={{ color: "#85c226" }}>Pain Free</span> And
                Better Life With{" "}
                <span style={{ color: "#85c226" }}>
                  Non-Surgical Treatment!
                </span>
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
              <p
                className="text-sm md:text-base mb-1 font-semibold"
                style={{ color: "#2b1f51" }}
              >
                — {clinicConfig.doctor.name}
              </p>
              <p className="text-xs mb-6" style={{ color: "#6b7280" }}>
                {clinicConfig.doctor.degrees}
              </p>
              <p className="text-sm mb-7 max-w-md mx-auto md:mx-0 leading-relaxed text-gray-500">
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
                className="font-black px-7 py-3.5 rounded-full text-base transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer text-white"
                style={{ background: "#2b1f51" }}
              >
                Book An Appointment
              </button>
            </div>
          </div>

          {/* Right — Doctor image */}
          <div
            className="flex-1 flex justify-center md:justify-end transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transitionDelay: "200ms",
            }}
          >
            {/* Mobile */}
            <div
              className="md:hidden w-48 h-48 rounded-3xl overflow-hidden shadow-lg"
              style={{ border: "3px solid #85c226" }}
            >
              <Image
                src="/doctor.jpg"
                alt="Dr. Kavita Sharma - Best Physiotherapist Gurugram"
                width={192}
                height={192}
                className="object-cover object-top w-full h-full"
                priority
              />
            </div>

            {/* Desktop */}
            <div className="hidden md:block relative">
              {/* Green accent ring */}
              <div
                className="absolute -top-3 -right-3 w-full h-full rounded-3xl"
                style={{ border: "2px solid #85c226", borderRadius: "24px" }}
              />
              <div className="relative w-80 h-[340px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/doctor.jpg"
                  alt="Dr. Kavita Sharma - Best Physiotherapist Gurugram"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Green dot accent */}
              <div
                className="absolute -bottom-3 -left-3 w-8 h-8 rounded-full"
                style={{ background: "#85c226" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative z-10 transition-all duration-700 ease-out"
        style={{
          background: "#2b1f51",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transitionDelay: "600ms",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div
            className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0"
            style={{ borderColor: "#3d2d6e" }}
          >
            <div className="flex-1 text-center px-6">
              <p className="text-white text-base md:text-xl font-black">
                Gurugram's{" "}
                <span style={{ color: "#85c226" }}>
                  Best Physiotherapy Clinic
                </span>{" "}
                · Sector 45
              </p>
            </div>
            <div className="hidden md:block w-0.5 h-10 mx-4" style={{ background: "#85c226" }} />
            <div className="flex-1 text-center px-6">
              <p className="text-white text-base md:text-xl font-black">
                <span style={{ color: "#85c226" }}>
                  {clinicConfig.stats[0].value}
                </span>{" "}
                Patients Treated{" "}
                <span style={{ color: "#85c226" }}>Without Surgery</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
