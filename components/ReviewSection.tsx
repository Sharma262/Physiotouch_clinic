"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clinicConfig } from "@/lib/config";

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
          <span className="flex items-center gap-2 text-blue-700 font-bold text-sm mb-3">
            <span className="w-1 h-5 bg-blue-700 rounded-full inline-block" />
            Patient Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-1">
            What Our Patients Say
          </h2>
          <p className="text-gray-400 text-sm">
            Real experiences from our patients about Physiotouch Clinic
          </p>
        </div>

        {/* Slider */}
        <div className="relative px-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {clinicConfig.reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-none w-full md:w-[calc(33.33%-14px)] bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between"
                >
                  {/* Stars */}
                  <div>
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                          fill={i < review.rating ? "#FBBC04" : "#e5e7eb"}
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 relative">
                      {review.review}
                    </p>
                  </div>

                  {/* Bottom — name + Google logo */}
                  <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-blue-700 font-bold text-sm">
                        {review.name}
                      </p>
                      <p className="text-gray-400 text-xs">Google Review</p>
                    </div>

                    {/* Google G logo SVG */}
                    <svg viewBox="0 0 48 48" className="w-8 h-8">
                      <path
                        fill="#4285F4"
                        d="M43.6 20H24v8h11.3C33.7 32.4 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.2 2.7l5.7-5.7C33.7 7.1 29.1 5 24 5 13 5 4 14 4 24s9 19 20 19c11 0 19-8 19-19 0-1.3-.1-2.7-.4-4z"
                      />
                      <path
                        fill="#34A853"
                        d="M6.3 14.7l6.6 4.8C14.5 16 19 13 24 13c2.8 0 5.3 1 7.2 2.7l5.7-5.7C33.7 7.1 29.1 5 24 5c-7.7 0-14.3 4.4-17.7 9.7z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M24 43c5.1 0 9.8-1.7 13.4-4.7l-6.2-5.2C29.4 34.3 26.8 35 24 35c-5.2 0-9.6-3.5-11.2-8.3l-6.5 5C9.6 38.5 16.3 43 24 43z"
                      />
                      <path
                        fill="#EA4335"
                        d="M43.6 20H24v8h11.3c-.8 2.3-2.3 4.2-4.3 5.5l6.2 5.2C40.8 35.4 44 30.1 44 24c0-1.3-.1-2.7-.4-4z"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next */}
          <button
            onClick={scrollPrev}
            className="absolute -left-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
