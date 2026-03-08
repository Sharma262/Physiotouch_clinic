"use client";

import { useState } from "react";
import { clinicConfig } from "@/lib/config";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 bg-white relative overflow-hidden">

      {/* Dotted background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #2b1f5110 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12">

          {/* Left — Heading */}
          <div className="md:w-80 shrink-0">
            <span className="flex items-center gap-2 font-bold text-sm mb-3"
              style={{ color: "#2b1f51" }}>
              <span className="w-1 h-5 rounded-full inline-block"
                style={{ background: "#85c226" }} />
              Got A Question?
            </span>
            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4"
              style={{ color: "#2b1f51" }}>
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Can't find your answer here? Call us directly and we'll be happy to help.
            </p>
            <a
              href={`tel:${clinicConfig.contact.phone}`}
              className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
              style={{ background: "#85c226", color: "#2b1f51" }}
            >
              Call Us Now
            </a>
          </div>

          {/* Right — Accordion */}
          <div className="flex-1">
            {clinicConfig.faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b last:border-b-0"
                style={{ borderColor: "#e8e4f5" }}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
                >
                  <span
                    className="font-bold text-base leading-snug transition-colors"
                    style={{ color: openIndex === index ? "#85c226" : "#2b1f51" }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all"
                    style={{
                      background: openIndex === index ? "#85c226" : "#f8f7ff",
                      border: `2px solid ${openIndex === index ? "#85c226" : "#e8e4f5"}`,
                    }}
                  >
                    {openIndex === index
                      ? <Minus size={14} color="#2b1f51" />
                      : <Plus size={14} color="#2b1f51" />
                    }
                  </span>
                </button>

                {/* Answer — animated */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openIndex === index ? "300px" : "0px",
                    opacity: openIndex === index ? 1 : 0,
                  }}
                >
                  <div
                    className="pb-5 pr-10 text-sm leading-relaxed rounded-xl p-4 mb-4"
                    style={{ background: "#f8f7ff", color: "#475569", borderLeft: "3px solid #85c226" }}
                  >
                    {faq.answer}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* JSON-LD FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": clinicConfig.faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}