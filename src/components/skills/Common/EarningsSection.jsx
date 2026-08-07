"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
export default function EarningsSection({ data }) {
  const { titlePrefix, titleItalic, titleSuffix, disclaimer, jobs = [] } = data?.earningsSectionData || {};

  if (jobs.length === 0) return null;

  return (
    <section className="w-full bg-[#7143FE] py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden font-cabinet">
      {/* Background Decorative elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-black/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1300px] mx-auto flex flex-col gap-16 relative z-10">
        
        {/* Title */}
        <div className="text-center">
          <h2 className="leading-[1.2] text-white tracking-tight flex flex-col sm:block">
            <span
              className="font-semibold"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: "32px",
              }}
            >
              {titlePrefix} <br/>
            </span>
            <span
              className="italic font-medium text-[#FF5622]"
              style={{
                fontFamily: "'PP Editorial New', serif",
                fontSize: "58px",
              }}
            >
              {titleItalic}{" "}
            </span>
            <span
              className="font-semibold"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: "32px",
              }}
            >
              {titleSuffix}
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-4">
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-[28px] pt-5 pb-4 px-6 lg:px-7 relative shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              {/* Icon - Floating without BG */}
              {job.image && (
                <div className="absolute top-[-40px] left-8 w-[80px] h-[80px] md:w-[90px] md:h-[90px] flex items-center justify-start overflow-hidden">
                  <Image
                    src={job.image}
                    alt={job.title}
                    width={60}
                    height={60}
                    className="object-contain rounded-[10px]"
                  />
                </div>
              )}

              {/* Title */}
              <h3 className="font-[700] text-[18px] text-[#111] mt-5 mb-1.5 leading-snug group-hover:text-[#6E42F8] transition-colors duration-200">
                {job.title}
              </h3>

              {/* Location */}
              <div className="flex items-center gap-1 text-gray-500 text-[14px] font-[500] mb-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>{job.location}</span>
              </div>

              {/* Salary & Badge pushed to bottom */}
              <div className="flex flex-row items-center justify-between gap-2 mt-auto pt-3 border-t border-gray-100/60">
                <span className="text-[24px] font-semibold  text-[#FF5622] leading-tight">
                  {job.salary}
                </span>

                {/* Level Badge */}
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#7143FE]/15 text-[#7143FE] tracking-wide uppercase whitespace-nowrap">
                  {job.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Note */}
        {disclaimer && (
          <p className="text-center text-white/80 text-[13px] md:text-[14px] max-w-2xl mx-auto italic font-sans">
            * {disclaimer}
          </p>
        )}
      </div>
    </section>
  );
}
