"use client";

import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function InternshipCTA({ data, onApplyClick }) {
  const {
    line1Normal = "Ready to Master",
    line1Italic = "Python Engineering",
    line1Suffix = "and Build Production Apps?",
    line2Normal = "Apply For The",
    line2Italic = "Python Internship Today",
    buttonText = "Apply Now",
    phone = "+919409207327"
  } = data?.cta || {};

  return (
    <section className="w-full bg-[#F5F5F5] py-14 sm:py-18 lg:py-22 px-4 sm:px-6 lg:px-20 overflow-hidden font-cabinet border-t border-[#E5E5E5]">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        
        {/* Left Side: Headline */}
        <div className="flex flex-col gap-2 w-full lg:w-auto text-center lg:text-left">
          <h2 className="text-[#111111] leading-tight tracking-tight">
            {/* Line 1 */}
            <div className="flex flex-wrap items-baseline justify-center lg:justify-start gap-x-2.5 sm:gap-x-3.5 gap-y-1">
              <span className="text-[24px] sm:text-[32px] lg:text-[38px] font-extrabold">
                {line1Normal}
              </span>
              <span
                className="text-[34px] sm:text-[46px] lg:text-[54px] text-[#FF5622] italic font-light leading-none"
                style={{ fontFamily: "'PP Editorial New', serif" }}
              >
                {line1Italic}
              </span>
              {line1Suffix && (
                <span className="text-[20px] sm:text-[26px] lg:text-[30px] font-bold text-[#111111]/85">
                  {line1Suffix}
                </span>
              )}
            </div>

            {/* Line 2 */}
            <div className="flex flex-wrap items-baseline justify-center lg:justify-start gap-x-2.5 sm:gap-x-3.5 gap-y-1 mt-1 sm:mt-2">
              {line2Normal && (
                <span className="text-[24px] sm:text-[32px] lg:text-[38px] font-extrabold">
                  {line2Normal}
                </span>
              )}
              <span
                className="text-[34px] sm:text-[46px] lg:text-[54px] text-[#FF5622] italic font-light leading-none"
                style={{ fontFamily: "'PP Editorial New', serif" }}
              >
                {line2Italic}
              </span>
            </div>
          </h2>

          <p className="mt-2 text-[#666666] text-[15px] sm:text-[17px]">
            Limited seats per cohort to guarantee 1-on-1 code reviews and mentorship.
          </p>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-3.5 shrink-0">
          <button
            onClick={onApplyClick}
            type="button"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#7143FE] text-white px-8 py-4 sm:px-9 sm:py-4.5 rounded-full text-[16px] sm:text-[17px] font-bold transition-all duration-300 hover:bg-[#6136e0] hover:scale-105 shadow-md hover:shadow-[0_20px_40px_rgba(113,67,254,0.3)] text-center cursor-pointer"
          >
            <div className="flex items-center justify-center shrink-0">
              <img src="/whiteArrow.webp" alt="arrow" className="w-5" />
            </div>
            <span>{buttonText}</span>
          </button>

          {phone && (
            <Link
              href={`tel:${phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-gray-50 text-[#111111] border border-[#DCDCDC] rounded-full text-[15px] sm:text-[16px] font-semibold transition-all duration-300 hover:border-[#7143FE] hover:text-[#7143FE] shadow-sm text-center"
            >
              <Phone className="w-4 h-4 text-[#7143FE] shrink-0" />
              <span>Call Counselor</span>
            </Link>
          )}
        </div>

      </div>
    </section>
  );
}
