"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InternshipOverview({ data }) {
  const {
    headingNormal = "About The",
    headingItalic = "Python Internship",
    subheading,
    description = [],
    features = [],
    stats = []
  } = data?.overview || {};

  return (
    <section className="w-full bg-[#F5F5F5] py-14 sm:py-18 md:py-20 px-4 sm:px-6 lg:px-20 font-cabinet">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-10 sm:mb-12">
          <h2 className="leading-tight tracking-tight text-[#111111] flex flex-wrap items-baseline gap-x-2.5 sm:gap-x-3.5">
            <span className="font-cabinet font-semibold text-[26px] sm:text-[38px] md:text-[44px]">
              {headingNormal}
            </span>
            <span
              className="italic font-medium text-[#FF5622] text-[34px] sm:text-[48px] md:text-[56px] leading-none"
              style={{ fontFamily: "'PP Editorial New', serif" }}
            >
              {headingItalic}
            </span>
          </h2>
          {subheading && (
            <p className="mt-2 sm:mt-3 text-[#666666] text-[16px] sm:text-[18px] max-w-2xl">
              {subheading}
            </p>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Descriptive Text & Features */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="space-y-4 text-[#444444] text-[15px] sm:text-[17px] leading-relaxed">
              {description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Checklist */}
            <div className="mt-4 pt-6 border-t border-[#E5E5E5]">
              <h3 className="text-[17px] sm:text-[19px] font-bold text-[#111111] mb-4">
                What sets this internship apart:
              </h3>
              <ul className="flex flex-col gap-3.5">
                {features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#111111] shrink-0 mt-0.5 select-none">
                      <img
                        src="/black arrow.webp"
                        alt="check"
                        className="w-4 h-4 sm:w-4.5 sm:h-4.5 object-contain"
                      />
                    </span>
                    <span className="text-[#222222] text-[14.5px] sm:text-[16px] font-medium leading-snug">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Key Metrics & Stats Highlight Box */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-3xl border border-[#E5E5E5] p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#7C3AED] bg-[#7143FE]/10 px-3 py-1 rounded-full inline-block mb-6">
                Execution Benchmark
              </span>

              <div className="grid grid-cols-2 gap-5 sm:gap-6">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col p-4 rounded-2xl bg-[#FBFBFC] border border-[#EEEEEE]"
                  >
                    <span className="text-[26px] sm:text-[32px] font-extrabold text-[#111111] tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[13px] sm:text-[14px] text-[#666666] font-medium mt-1 leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="text-[13px] sm:text-[14px] text-[#555555]">
                  Active mentors available for weekly code reviews
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
