"use client";

import React from "react";
import { MoveLeft, MoveRight } from "lucide-react";

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting indus....",
      date: "Mar 16, 2026",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting indus....",
      date: "Mar 16, 2026",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting indus....",
      date: "Mar 16, 2026",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
    }
  ];

  return (
    <section className="w-full bg-[#F5F5F5] py-24 px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto">

        {/* Header Section */}
        <div className="flex justify-between items-end mb-16">
          <div className="flex flex-col">
            <h2 className="flex flex-col leading-[1]">
              <div className="flex items-baseline gap-3 mb-1">
                <span
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontSize: "32px",
                    fontWeight: 700,
                    letterSpacing: "0%",
                    color: "#111111"
                  }}
                >
                  The
                </span>
                <span
                  style={{
                    fontFamily: "'PP Editorial New', serif",
                    fontSize: "52px",
                    fontWeight: 400,
                    fontStyle: "italic",
                    letterSpacing: "0%",
                    color: "#FF5622"
                  }}
                >
                  Skill
                </span>
              </div>
              <span
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontSize: "32px",
                  fontWeight: 700,
                  letterSpacing: "0%",
                  color: "#111111"
                }}
              >
                Featured News And Insights
              </span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-4 mb-4">
            <button className="w-12 h-12 rounded-full border border-black/50 flex items-center justify-center transition-all hover:bg-white hover:text-white group">
              <img src="black arrow.webp" alt="arrow" className="w-7 rotate-225" />
            </button>
            <button className="w-12 h-12 rounded-full border border-black/50 flex items-center justify-center transition-all hover:bg-white hover:text-white group">
              <img src="black arrow.webp" alt="arrow" className="w-7 rotate-45" />
            </button>
          </div>
        </div>

        {/* News Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="group cursor-pointer relative">
              {/* Image Container */}
              <div className="w-full aspect-[4/3] rounded-[32px] overflow-hidden bg-[#D9D9D9] relative shadow-sm">
                <img
                  src={item.image}
                  alt="news"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                />

                {/* Floating Info Box */}
                <div className="absolute left-6 right-6 bottom-[-20px] bg-white rounded-[20px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:translate-y-[-10px]">
                  <h3 className="text-[15px] lg:text-[16px] font-bold text-[#111111] leading-[1.4] mb-4 line-clamp-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-[12px] uppercase font-bold text-[#7A7A7A] tracking-wider" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                    {item.date}
                  </p>
                </div>
              </div>

              {/* Space for the overlapping box */}
              <div className="h-10"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
