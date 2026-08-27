"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function EarningsSection({ data }) {
  const { titlePrefix, titleItalic, titleSuffix, disclaimer, jobs = [] } = data?.earningsSectionData || {};

  if (jobs.length === 0) return null;

  return (
    <section className="w-full bg-gradient-to-b from-[#6939F8] via-[#7F52FE] to-[#F5F5F5] py-14 sm:py-20 px-4 sm:px-6 md:px-16 lg:px-24 relative overflow-hidden font-cabinet">
      {/* Background Decorative elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1300px] mx-auto flex flex-col gap-10 sm:gap-16 relative z-10">
        
        {/* Title */}
        <div className="text-center">
          <h2 className="leading-tight text-white tracking-tight flex flex-col items-center justify-center">
            <span
              className="font-bold text-[22px] sm:text-[32px] block text-white"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
              }}
            >
              {titlePrefix}
            </span>
            <div className="flex items-baseline justify-center gap-2 flex-wrap mt-0.5">
              <span
                className="italic font-medium text-[#FF5622] text-[40px] sm:text-[58px]"
                style={{
                  fontFamily: "'PP Editorial New', serif",
                }}
              >
                {titleItalic}
              </span>
              <span
                className="font-bold text-[22px] sm:text-[32px] text-white"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                }}
              >
                {titleSuffix}
              </span>
            </div>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-[22px] sm:rounded-[28px] p-4.5 sm:p-6 shadow-[0_8px_30px_rgba(113,67,254,0.06)] hover:shadow-[0_12px_40px_rgba(113,67,254,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-3 border border-[#7143FE]/10 cursor-pointer min-h-[140px]"
            >
              {/* Top Row: Title + Level Badge */}
              <div className="flex flex-row items-start justify-between gap-3">
                <h3 className="font-extrabold text-[14.5px] sm:text-[17px] text-[#111111] leading-snug group-hover:text-[#7143FE] transition-colors duration-200">
                  {job.title}
                </h3>

                {job.badge && (
                  <span className="px-3 py-1 rounded-full text-[10.5px] sm:text-[11.5px] font-extrabold bg-[#EFEAFE] text-[#7143FE] whitespace-nowrap shrink-0 border border-[#7143FE]/20">
                    {job.badge}
                  </span>
                )}
              </div>

              {/* Middle Row: Location */}
              <div className="flex items-center gap-1.5 text-gray-500 text-[12.5px] sm:text-[13.5px] font-medium">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 shrink-0" />
                <span className="truncate">{job.location}</span>
              </div>

              {/* Bottom Row: Salary Range */}
              <div className="pt-2 border-t border-gray-100">
                <span className="text-[18px] sm:text-[22px] font-extrabold text-[#FF5622] leading-tight block">
                  {job.salary}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Note */}
        {disclaimer && (
          <p className="text-center text-gray-600 text-[12px] sm:text-[13px] max-w-2xl mx-auto italic font-sans">
            * {disclaimer}
          </p>
        )}
      </div>
    </section>
  );
}
