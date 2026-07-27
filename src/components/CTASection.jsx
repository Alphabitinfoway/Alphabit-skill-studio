"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full bg-[#F5F5F5] py-20 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        
        {/* Left Side: Headline */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[#111111] leading-[1.1] tracking-tight">
            {/* First Line */}
            <div className="flex flex-wrap items-baseline gap-x-3 md:gap-x-4">
              <span 
                className="text-[28px] md:text-[34px] lg:text-[36px] font-extrabold "
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Access the
              </span>
              <span
                style={{
                  fontFamily: "'PP Editorial New', serif",
                  fontSize: "clamp(48px, 6vw, 52px)",
                  color: "#FF5622",
                  fontStyle: "italic",
                  fontWeight: 300,
                  lineHeight: 1,
                }}
              >
                Curriculum
              </span>
              <span 
                className="text-[24px] md:text-[30px] lg:text-[26px] font-bold text-[#111111]/80"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                - Apply Today &
              </span>
            </div>

            {/* Second Line */}
            <div className="flex flex-wrap items-baseline gap-x-3 md:gap-x-4 mt-2">
              <span 
                className="text-[28px] md:text-[34px] lg:text-[36px] font-extrabold "
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Master
              </span>
              <span
                className="whitespace-nowrap"
                style={{
                  fontFamily: "'PP Editorial New', serif",
                  fontSize: "clamp(48px, 6vw, 52px)", 
                  color: "#FF5622",
                  fontStyle: "italic",
                  fontWeight: 300,
                  lineHeight: 1,                                                           
                }}
              >
                Advanced Tech Frameworks
              </span>
            </div>
          </h2>
        </div>

        {/* Right Side: Button */}
        <div className="flex-shrink-0">
          <Link href="/register">
            <button className="group relative flex items-center gap-2 bg-[#7143FE] text-white px-2 py-4 lg:px-10 lg:py-5 rounded-full text-[16px] lg:text-[18px] font-bold transition-all duration-300 hover:bg-[#6136e0] hover:scale-105 hover:shadow-[0_20px_40px_rgba(113,67,254,0.3)]">
              <div className="flex items-center justify-center">
                <img src="/whiteArrow.webp" alt="arrow" className="w-7" />
              </div>
              <span>Join The Studio</span>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
