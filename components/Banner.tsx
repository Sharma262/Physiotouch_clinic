"use client";

import { useEffect, useState, useRef } from "react";
import { clinicConfig } from "@/lib/config";
import Image from "next/image";

// Phase flow:
// 0 = typing tagline (green)
// 1 = deleting tagline
// 2 = typing heading (mixed colors)
// 3 = pausing after heading fully typed
// 4 = deleting heading
// → loops back to 0

const TAGLINE = "Let's Talk Pain";
const HEADING = "Living Pain Free And Better Life With Non-Surgical Treatment!";

// Heading color segments
const H_P1 = "Living ";                        // dark
const H_P2 = "Pain Free";                      // green
const H_P3 = " And Better Life With ";         // dark
const H_P4 = "Non-Surgical Treatment!";        // green
const H_P1_END = H_P1.length;
const H_P2_END = H_P1_END + H_P2.length;
const H_P3_END = H_P2_END + H_P3.length;

function renderHeadingSegments(typed: string, showCursor: boolean) {
  return (
    <>
      {typed.length > 0 && (
        <span style={{ color: "#2b1f51" }}>
          {typed.slice(0, Math.min(typed.length, H_P1_END))}
        </span>
      )}
      {typed.length > H_P1_END && (
        <span style={{ color: "#85c226" }}>
          {typed.slice(H_P1_END, Math.min(typed.length, H_P2_END))}
        </span>
      )}
      {typed.length > H_P2_END && (
        <span style={{ color: "#2b1f51" }}>
          {typed.slice(H_P2_END, Math.min(typed.length, H_P3_END))}
        </span>
      )}
      {typed.length > H_P3_END && (
        <span style={{ color: "#85c226" }}>
          {typed.slice(H_P3_END)}
        </span>
      )}
      {showCursor && (
        <span
          className="inline-block w-0.5 h-8 ml-0.5 align-middle animate-pulse"
          style={{ background: "#85c226" }}
        />
      )}
    </>
  );
}

export default function Banner({ onBookClick }: { onBookClick: () => void }) {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState(0);
  const [text, setText] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear timeout on unmount
  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  // Page load fade-in
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Single unified typewriter engine
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    switch (phase) {

      // Phase 0: type tagline
      case 0:
        if (text.length < TAGLINE.length) {
          timeoutRef.current = setTimeout(() => {
            setText(TAGLINE.slice(0, text.length + 1));
          }, 60);
        } else {
          // Fully typed — pause then move to delete
          timeoutRef.current = setTimeout(() => {
            setPhase(1);
          }, 1200);
        }
        break;

      // Phase 1: delete tagline
      case 1:
        if (text.length > 0) {
          timeoutRef.current = setTimeout(() => {
            setText((prev) => prev.slice(0, -1));
          }, 25);
        } else {
          // Deleted — start typing heading
          setPhase(2);
        }
        break;

      // Phase 2: type heading
      case 2:
        if (text.length < HEADING.length) {
          timeoutRef.current = setTimeout(() => {
            setText(HEADING.slice(0, text.length + 1));
          }, 40);
        } else {
          // Fully typed — pause before deleting
          timeoutRef.current = setTimeout(() => {
            setPhase(3);
          }, 2500);
        }
        break;

      // Phase 3: pause (heading fully shown) — then delete
      case 3:
        timeoutRef.current = setTimeout(() => {
          setPhase(4);
        }, 100);
        break;

      // Phase 4: delete heading
      case 4:
        if (text.length > 0) {
          timeoutRef.current = setTimeout(() => {
            setText((prev) => prev.slice(0, -1));
          }, 20);
        } else {
          // Deleted — loop back to start
          setPhase(0);
        }
        break;
    }
  }, [phase, text]);

  const renderH1 = () => {
    // Tagline phases (typing or deleting)
    if (phase === 0 || phase === 1) {
      return (
        <>
          <span style={{ color: "#85c226" }}>{text}</span>
          <span
            className="inline-block w-0.5 h-8 ml-0.5 align-middle animate-pulse"
            style={{ background: "#85c226" }}
          />
        </>
      );
    }

    // Heading phases (typing, paused, or deleting)
    if (phase === 2 || phase === 3 || phase === 4) {
      return renderHeadingSegments(text, phase !== 3);
    }

    return null;
  };

  return (
    <section className="relative overflow-hidden" style={{ background: "#f8f7ff" }}>

      {/* Mobile green top line */}
      <div className="md:hidden h-1 w-full" style={{ background: "#85c226" }} />

      {/* Top-left glow circle */}
      <div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none hidden md:block"
        style={{ background: "radial-gradient(circle, #85c22630 0%, transparent 70%)" }}
      />

      {/* Small accent circle */}
      <div
        className="absolute top-8 left-8 w-16 h-16 rounded-full pointer-events-none hidden md:block"
        style={{ background: "#85c22220", border: "2px solid #85c22240" }}
      />

      {/* Bottom-right concentric arcs */}
      <div className="absolute -bottom-10 -right-10 pointer-events-none hidden md:block">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <circle cx="300" cy="300" r="80"  stroke="#2b1f51" strokeWidth="1.5" opacity="0.12"/>
          <circle cx="300" cy="300" r="110" stroke="#2b1f51" strokeWidth="1.5" opacity="0.09"/>
          <circle cx="300" cy="300" r="140" stroke="#2b1f51" strokeWidth="1.5" opacity="0.07"/>
          <circle cx="300" cy="300" r="170" stroke="#85c226" strokeWidth="1"   opacity="0.08"/>
          <circle cx="300" cy="300" r="200" stroke="#85c226" strokeWidth="1"   opacity="0.06"/>
          <circle cx="300" cy="300" r="230" stroke="#2b1f51" strokeWidth="1"   opacity="0.04"/>
        </svg>
      </div>

      {/* Dot cluster */}
      <div className="absolute top-10 right-[45%] pointer-events-none opacity-20 hidden md:block">
        <svg width="80" height="80" viewBox="0 0 80 80">
          {[0,1,2,3].map(row =>
            [0,1,2,3].map(col => (
              <circle key={`${row}-${col}`}
                cx={col * 20 + 10} cy={row * 20 + 10} r="2" fill="#2b1f51" />
            ))
          )}
        </svg>
      </div>

      {/* Right dark panel */}
      <div
        className="absolute top-0 right-0 w-[44%] h-full rounded-bl-[80px] z-0 hidden md:block"
        style={{ background: "#2b1f51" }}
      />

      {/* Green accent divider line */}
      <div
        className="absolute top-0 right-[44%] w-1 h-full hidden md:block"
        style={{ background: "linear-gradient(to bottom, transparent, #85c226, transparent)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left — Text */}
          <div className="flex-1 text-center md:text-left">

            {/* Pills */}
            <div
              className="transition-all duration-700 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-40px)",
                transitionDelay: "0ms",
              }}
            >
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start flex-wrap">
                <span className="inline-block text-xs font-bold px-4 py-1 rounded-full"
                  style={{ background: "#ede9ff", color: "#2b1f51" }}>
                  Best Physiotherapy Clinic · Sector 45, Gurugram
                </span>
                <span className="inline-block text-xs font-bold px-4 py-1 rounded-full"
                  style={{ background: "#f0ffd6", color: "#4a7a0e" }}>
                  {clinicConfig.tagline}
                </span>
              </div>
            </div>

            {/* Typewriter H1 */}
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
                style={{ minHeight: "96px" }}
              >
                {renderH1()}
              </h1>
            </div>

            {/* Doctor name + description */}
            <div
              className="transition-all duration-700 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-40px)",
                transitionDelay: "300ms",
              }}
            >
              <p className="text-sm md:text-base mb-1 font-semibold" style={{ color: "#2b1f51" }}>
                — {clinicConfig.doctor.name}
              </p>
              <p className="text-xs mb-4" style={{ color: "#6b7280" }}>
                {clinicConfig.doctor.degrees}
              </p>
              <p className="text-sm mb-7 max-w-md mx-auto md:mx-0 leading-relaxed text-gray-500">
                Expert physiotherapy for pain relief, sports injuries, and
                post-surgery rehabilitation. Non-surgical. Proven results.
              </p>
            </div>

            {/* CTA Button */}
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
            {/* Mobile image */}
            <div
              className="md:hidden w-full h-56 rounded-2xl overflow-hidden shadow-lg mx-auto"
              style={{ border: "2px solid #85c226", maxWidth: "320px" }}
            >
              <Image
                src="/doctor.jpg"
                alt="Dr. Kavita Sharma - Best Physiotherapist Gurugram"
                width={320} height={224}
                className="object-cover object-top w-full h-full"
                priority
              />
            </div>

            {/* Desktop image */}
            <div className="hidden md:block relative">
              <div
                className="absolute -top-3 -right-3 w-full h-full"
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0">
            <div className="flex-1 text-center px-6">
              <p className="text-white text-base md:text-xl font-black">
                Gurugram's{" "}
                <span style={{ color: "#85c226" }}>Best Physiotherapy Clinic</span>
                {" "}· Sector 45
              </p>
            </div>
            <div className="hidden md:block w-0.5 h-10 mx-4" style={{ background: "#85c226" }} />
            <div className="flex-1 text-center px-6">
              <p className="text-white text-base md:text-xl font-black">
                <span style={{ color: "#85c226" }}>{clinicConfig.stats[0].value}</span>
                {" "}Patients Treated{" "}
                <span style={{ color: "#85c226" }}>Without Surgery</span>
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}