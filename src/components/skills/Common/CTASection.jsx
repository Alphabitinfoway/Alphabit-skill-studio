"use client";

import React from "react";
import Link from "next/link";

export default function CTASection({ data }) {
  const {
    line1Normal = "Access the",
    line1Italic = "Curriculum",
    line1Suffix = "- Apply Today &",
    line2Normal = "Master",
    line2Italic = "Advanced Tech Frameworks",
    buttonText = "Join The Studio",
    buttonHref = "/register",
  } = data?.ctaSectionData || {};

  return (
    <section className="w-full bg-[#F5F5F5] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 overflow-hidden font-cabinet">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20">

        {/* Left Side: Headline */}
        <div className="flex flex-col gap-2 w-full lg:w-auto text-left">
          <h2 className="text-[#111111] leading-tight tracking-tight">

            {/* First Line */}
            <div className="flex flex-wrap items-baseline gap-x-2.5 md:gap-x-4 gap-y-1">
              <span
                className="text-[22px] sm:text-[30px] lg:text-[36px] font-extrabold"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {line1Normal}
              </span>
              <span
                className="text-[32px] sm:text-[44px] lg:text-[52px] text-[#FF5622] italic font-light leading-none"
                style={{
                  fontFamily: "'PP Editorial New', serif",
                }}
              >
                {line1Italic}
              </span>
              {line1Suffix && (
                <span
                  className="text-[18px] sm:text-[24px] lg:text-[26px] font-bold text-[#111111]/80"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {line1Suffix}
                </span>
              )}
            </div>

            {/* Second Line */}
            <div className="flex flex-wrap items-baseline gap-x-2.5 md:gap-x-4 gap-y-1 mt-1 sm:mt-2">
              {line2Normal && (
                <span
                  className="text-[22px] sm:text-[30px] lg:text-[36px] font-extrabold"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {line2Normal}
                </span>
              )}
              <span
                className="text-[32px] sm:text-[44px] lg:text-[52px] text-[#FF5622] italic font-light leading-none"
                style={{
                  fontFamily: "'PP Editorial New', serif",
                }}
              >
                {line2Italic}
              </span>
            </div>

          </h2>
        </div>

        {/* Right Side: CTA Button */}
        <div className="w-full sm:w-auto flex-shrink-0 flex justify-center lg:justify-end">
          <Link 
            href={buttonHref}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#7143FE] text-white px-7 py-3.5 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-full text-[15px] sm:text-[16px] lg:text-[18px] font-bold transition-all duration-300 hover:bg-[#6136e0] hover:scale-105 shadow-md hover:shadow-[0_20px_40px_rgba(113,67,254,0.3)] text-center"
          >
            <div className="flex items-center justify-center shrink-0">
              <img src="/whiteArrow.webp" alt="arrow" className="w-5 sm:w-6" />
            </div>
            <span>{buttonText}</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
