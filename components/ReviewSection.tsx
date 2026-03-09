"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clinicConfig } from "@/lib/config";
import ReviewCard from "./ReviewCard";

export default function ReviewsSection() {
  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplayRef.current]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    autoplayRef.current.reset();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    autoplayRef.current.reset();
  }, [emblaApi]);
  return (
    <section id="reviews" className="py-12 bg-white relative overflow-hidden">
      {/* Dotted background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #1d4ed815 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="mb-10">
        <span className="flex items-center gap-2 font-bold text-sm mb-3" style={{ color: "#2b1f51" }}>
        <span className="w-1 h-5 rounded-full inline-block" style={{ background: "#85c226" }} />
            Patient Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-1" style={{ color: "#2b1f51" }}>
            What Our Patients Say
          </h2>
          <p className="text-gray-500 text-sm">
            Real experiences from our patients about Physiotouch Clinic
          </p>
        </div>

        {/* Slider */}
        <div className="relative px-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {clinicConfig.reviews.map((review, index) => (
                  <ReviewCard key={index} review={review} />
              ))}
            </div>
          </div>

          {/* Prev / Next */}
          <button
            onClick={scrollPrev}
            aria-label="Previous review"
            className="absolute -left-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next review"
            className="absolute -right-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
