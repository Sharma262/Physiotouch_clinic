"use client";

import { useState } from "react";
import { clinicConfig } from "@/lib/config";

const TRUNCATE_LENGTH = 150;

export default function ReviewCard({
  review,
}: {
  review: (typeof clinicConfig.reviews)[0];
}) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.review.length > TRUNCATE_LENGTH;
  const displayText = expanded
    ? review.review
    : review.review.slice(0, TRUNCATE_LENGTH) + (isLong ? "..." : "");

  return (
    <div className="flex-none w-full md:w-[calc(33.33%-14px)] bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">

      {/* Stars */}
      <div>
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 24 24" className="w-5 h-5"
              fill={i < review.rating ? "#FBBC04" : "#e5e7eb"}>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          ))}
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-2">
          {displayText}
        </p>

        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs font-bold mt-1 transition-colors cursor-pointer"
            style={{ color: "#2b1f51" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#85c226")}
            onMouseLeave={e => (e.currentTarget.style.color = "#2b1f51")}
          >
            {expanded ? "Show Less ↑" : "Read More ↓"}
          </button>
        )}
      </div>

      {/* Bottom — name + Google logo */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <div>
          <p className="font-bold text-sm" style={{ color: "#2b1f51" }}>
            {review.name}
          </p>
          <p className="text-gray-400 text-xs">Google Review</p>
        </div>
        <svg viewBox="0 0 48 48" className="w-8 h-8">
          <path fill="#4285F4" d="M43.6 20H24v8h11.3C33.7 32.4 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.2 2.7l5.7-5.7C33.7 7.1 29.1 5 24 5 13 5 4 14 4 24s9 19 20 19c11 0 19-8 19-19 0-1.3-.1-2.7-.4-4z"/>
          <path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.5 16 19 13 24 13c2.8 0 5.3 1 7.2 2.7l5.7-5.7C33.7 7.1 29.1 5 24 5c-7.7 0-14.3 4.4-17.7 9.7z"/>
          <path fill="#FBBC05" d="M24 43c5.1 0 9.8-1.7 13.4-4.7l-6.2-5.2C29.4 34.3 26.8 35 24 35c-5.2 0-9.6-3.5-11.2-8.3l-6.5 5C9.6 38.5 16.3 43 24 43z"/>
          <path fill="#EA4335" d="M43.6 20H24v8h11.3c-.8 2.3-2.3 4.2-4.3 5.5l6.2 5.2C40.8 35.4 44 30.1 44 24c0-1.3-.1-2.7-.4-4z"/>
        </svg>
      </div>
    </div>
  );
}