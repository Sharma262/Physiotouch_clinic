"use client";

import { useEffect, useState } from "react";
import { clinicConfig } from "@/lib/config";

interface VideoMeta {
  title: string;
  thumbnail: string;
  url: string;
}

export default function VideosSection() {
  const [videos, setVideos] = useState<VideoMeta[]>([]);

  useEffect(() => {
    const fetchAll = async () => {
      const results = await Promise.all(
        clinicConfig.videos.map(async (v) => {
          try {
            const res = await fetch(
              `https://www.youtube.com/oembed?url=${v.url}&format=json`
            );
            const data = await res.json();
            return {
              title: data.title,
              thumbnail: `https://img.youtube.com/vi/${v.id}/mqdefault.jpg`,
              url: v.url,
            };
          } catch {
            return {
              title: "Physiotherapy Video",
              thumbnail: `https://img.youtube.com/vi/${v.id}/mqdefault.jpg`,
              url: v.url,
            };
          }
        })
      );
      setVideos(results);
    };

    fetchAll();
  }, []);

  return (
    <section id="resources" className="py-12 bg-blue-50 relative overflow-hidden">

      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #1d4ed820 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Heading */}
        <div className="mb-8">
          <span className="flex items-center gap-2 text-blue-700 font-bold text-sm mb-3">
            <span className="w-1 h-5 bg-blue-700 rounded-full inline-block" />
            Resources
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-800">
            Informative Videos
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.length === 0
            ? // Skeleton loaders while fetching
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 flex gap-4 animate-pulse">
                  <div className="w-36 h-24 bg-gray-200 rounded-xl shrink-0" />
                  <div className="flex-1 space-y-3 py-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 rounded w-full" />
                    <div className="h-3 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
              ))
            : videos.map((video, index) => (
                <a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl overflow-hidden flex gap-4 p-4 border border-blue-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  {/* Thumbnail */}
                  <div className="relative w-36 h-24 rounded-xl overflow-hidden shrink-0 bg-blue-100">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                      <svg viewBox="0 0 68 48" className="w-10 h-7 drop-shadow-lg">
                        <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/>
                        <path d="M45 24 27 14v20" fill="white"/>
                      </svg>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-center">
                    <h4 className="text-gray-800 font-black text-sm leading-snug mb-2 group-hover:text-blue-700 transition-colors">
                      {video.title}
                    </h4>
                  </div>
                </a>
              ))}
        </div>

      </div>
    </section>
  );
}