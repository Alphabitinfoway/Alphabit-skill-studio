"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { API_BASE_URL } from "@/config/api";

const defaultNewsItems = [
  {
    id: 1,
    title: "Should You Learn Full Stack Development in 2026? Honest Guide",
    date: "Mar 16, 2026",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    slug: "should-you-learn-full-stack-development-2026"
  },
  {
    id: 2,
    title: "How to Build a Full Stack Portfolio That Actually Gets You Hired",
    date: "Mar 16, 2026",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    slug: "how-to-build-a-full-stack-portfolio"
  },
  {
    id: 3,
    title: "UI/UX & Design Trends Every Developer Should Know",
    date: "Mar 16, 2026",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    slug: "ui-ux-design-trends"
  }
];

export default function NewsSection() {
  const [blogs, setBlogs] = useState(defaultNewsItems);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchLatestBlogs() {
      try {
        const res = await fetch(`${API_BASE_URL}/api/blogs`, {
          headers: { "ngrok-skip-browser-warning": "true" },
        });
        if (res.ok) {
          const json = await res.json();
          if (json?.success && Array.isArray(json.data) && json.data.length > 0) {
            const sorted = [...json.data].sort(
              (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
            );

            const mapped = sorted.map((b, idx) => {
              const defaultImg = defaultNewsItems[idx % defaultNewsItems.length].image;
              let img = defaultImg;
              if (b?.image && b.image !== "no-photo.jpg") {
                img = b.image.startsWith("http") ? b.image : `${API_BASE_URL}/${b.image}`;
              }
              const dateStr = b.createdAt
                ? new Date(b.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                : "Mar 16, 2026";

              return {
                id: b._id || b.id || idx,
                title: b.title || b.excerpt || "Untitled Article",
                date: dateStr,
                image: img,
                slug: b.slug || b._id || b.id,
              };
            });

            setBlogs(mapped);
          }
        }
      } catch (err) {
        console.warn("[NewsSection] Failed to fetch blogs:", err?.message);
      }
    }

    fetchLatestBlogs();
  }, []);

  const totalItems = blogs.length;

  const handleNext = () => {
    if (totalItems <= 3) return;
    setCurrentIndex((prev) => (prev + 1) % (totalItems - 2));
  };

  const handlePrev = () => {
    if (totalItems <= 3) return;
    setCurrentIndex((prev) => (prev - 1 + (totalItems - 2)) % (totalItems - 2));
  };

  // Get current 3 visible blogs for desktop/tablet
  const visibleBlogs = totalItems <= 3 
    ? blogs.slice(0, 3) 
    : blogs.slice(currentIndex, currentIndex + 3);

  return (
    <section className="w-full bg-[#F5F5F5] py-12 sm:py-16 md:py-24 px-4 sm:px-8 lg:px-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 sm:mb-14 md:mb-16">
          <div className="flex flex-col max-w-2xl">
            <h2 className="flex flex-col leading-[1.1]">
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-1">
                <span
                  className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#111111]"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  Latest 
                </span>
                <span
                  className="text-[36px] sm:text-[44px] lg:text-[52px] font-normal italic text-[#FF5622]"
                  style={{ fontFamily: "'PP Editorial New', serif" }}
                >
                  Tech Career 
                </span>
              </div>
              <span
                className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#111111]"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Insights from Alphabit Skill
              </span>
            </h2>
          </div>

          {/* Navigation Arrows & Desktop View All Button */}
          <div className="flex items-center gap-3 sm:gap-4 self-end md:self-auto">
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-black/20 hover:border-[#FF5622] bg-white text-[#111111] hover:text-[#FF5622] text-[13px] sm:text-[14px] font-bold transition-all duration-300 group shadow-sm"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              View All Blogs
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            {totalItems > 3 && (
              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous blogs"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black/30 hover:border-black flex items-center justify-center transition-all bg-white hover:bg-black/5 group cursor-pointer"
                >
                  <img src="/black arrow.webp" alt="previous" className="w-5 sm:w-7 rotate-225 group-hover:scale-110 transition-transform" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next blogs"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black/30 hover:border-black flex items-center justify-center transition-all bg-white hover:bg-black/5 group cursor-pointer"
                >
                  <img src="/black arrow.webp" alt="next" className="w-5 sm:w-7 rotate-45 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* News Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleBlogs.map((item) => {
            const href = `/blog/${item.slug}`;
            return (
              <Link key={item.id} href={href} className="group cursor-pointer relative block">
                {/* Image Container */}
                <div className="w-full aspect-[16/10] sm:aspect-[16/10] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-white relative shadow-sm border border-[#E5E5EA]">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/Home Page/Career/Specialized Training Modules_11zon.webp";
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Floating Info Box */}
                  <div className="absolute left-4 right-4 sm:left-5 sm:right-5 lg:left-6 lg:right-6 bottom-[-22px] sm:bottom-[-24px] bg-white rounded-[16px] sm:rounded-[20px] p-4 sm:p-5 lg:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:translate-y-[-6px] sm:group-hover:translate-y-[-8px] group-hover:shadow-[0_15px_35px_rgba(255,86,34,0.12)] border border-[#E5E5EA]">
                    <h3
                      className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold text-[#111111] leading-[1.4] mb-2.5 sm:mb-3 line-clamp-2 group-hover:text-[#FF5622] transition-colors"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      {item.title}
                    </h3>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 sm:pt-3 border-t border-[#F0F0F5]">
                      <p
                        className="text-[11px] sm:text-[12px] uppercase font-bold text-[#7A7A7A] tracking-wider"
                        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                      >
                        {item.date}
                      </p>

                      <span 
                        className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-[12px] font-bold text-[#FF5622] bg-[#FF5622]/10 group-hover:bg-[#FF5622] group-hover:text-white transition-all duration-300 shadow-sm"
                        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                      >
                        Read Article
                        <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Space for the overlapping box */}
                <div className="h-10 sm:h-12"></div>
              </Link>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-white hover:bg-[#FF5622] text-[14px] font-bold transition-all duration-300 shadow-md group cursor-pointer"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            View All Blogs
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
