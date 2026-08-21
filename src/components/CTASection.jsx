"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="w-full bg-[#F5F5F5] py-14 lg:py-20 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* MOBILE LAYOUT (lg:hidden) - Pixel perfect matching user screenshot */}
        <div className="block lg:hidden text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center"
          >
            <h2
              className="text-[#111111] leading-[1.3] tracking-tight text-center"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              {/* Line 1 */}
              <div className="text-[22px] sm:text-[28px] font-extrabold">
                Access the{" "}
                <span
                  style={{
                    fontFamily: "'PP Editorial New', serif",
                    color: "#FF5622",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                  className="text-[30px] sm:text-[36px] px-1 inline-block"
                >
                  Curriculum
                </span>{" "}
                - Apply
              </div>

              {/* Line 2 */}
              <div className="text-[22px] sm:text-[28px] font-extrabold mt-0.5">
                Today &amp;
              </div>

              {/* Line 3 */}
              <div className="text-[22px] sm:text-[28px] font-extrabold mt-1">
                Master{" "}
                <span
                  style={{
                    fontFamily: "'PP Editorial New', serif",
                    color: "#FF5622",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                  className="text-[30px] sm:text-[36px] px-1 inline-block"
                >
                  Advanced Tech
                </span>
              </div>

              {/* Line 4 */}
              <div>
                <span
                  style={{
                    fontFamily: "'PP Editorial New', serif",
                    color: "#FF5622",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                  className="text-[30px] sm:text-[36px] block mt-0.5"
                >
                  Frameworks
                </span>
              </div>
            </h2>

            {/* Centered CTA Button */}
            <div className="mt-8">
              <Link href="/register">
                <button className="flex items-center justify-center gap-2.5 bg-[#7143FE] text-white px-8 py-4 rounded-full text-[16px] sm:text-[18px] font-bold shadow-lg shadow-purple-500/25 hover:bg-[#6136e0] active:scale-95 transition-all">
                  <ArrowUpRight className="w-5 h-5 text-white stroke-[2.2]" />
                  <span>Join The Studio</span>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* DESKTOP LAYOUT (hidden lg:flex) - Original layout preserved */}
        <div className="hidden lg:flex flex-row items-center justify-between gap-20">
          {/* Left Side: Headline */}
          <div className="flex flex-col gap-2">
            <h2 className="text-[#111111] leading-[1.1] tracking-tight">
              {/* First Line */}
              <div className="flex flex-wrap items-baseline gap-x-3 md:gap-x-4">
                <span 
                  className="text-[36px] font-extrabold"
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
                  className="text-[26px] font-bold text-[#111111]/80"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  - Apply Today &amp;
                </span>
              </div>

              {/* Second Line */}
              <div className="flex flex-wrap items-baseline gap-x-3 md:gap-x-4 mt-2">
                <span 
                  className="text-[36px] font-extrabold"
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
              <button className="group relative flex items-center gap-2 bg-[#7143FE] text-white px-10 py-5 rounded-full text-[18px] font-bold transition-all duration-300 hover:bg-[#6136e0] hover:scale-105 hover:shadow-[0_20px_40px_rgba(113,67,254,0.3)]">
                <div className="flex items-center justify-center">
                  <img src="/whiteArrow.webp" alt="arrow" className="w-7" />
                </div>
                <span>Join The Studio</span>
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

