"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CareerOpportunitiesSection({ data }) {
  const { titleNormal, titleItalic, mernTitle, javaTitle, mernRoles = [], javaRoles = [] } = data?.careerOpportunitiesData || {};

  if (mernRoles.length === 0 && javaRoles.length === 0) return null;

  const hasMultiple = mernRoles.length > 0 && javaRoles.length > 0;

  return (
    <section className="w-full bg-[#F5F5F5] py-10 sm:py-16 md:py-24 px-4 sm:px-6 md:px-16 lg:px-24 font-cabinet">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 sm:gap-12 md:gap-16">

        {/* Header */}
        <h2 className="tracking-tight flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
          <span
            className="font-semibold text-[#111111] text-[22px] sm:text-[28px] md:text-[32px]"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            {titleNormal}
          </span>
          <span
            className="font-medium text-[#FF5622] text-[36px] sm:text-[46px] md:text-[52px] italic"
            style={{ fontFamily: "'PP Editorial New', serif" }}
          >
            {titleItalic}
          </span>
        </h2>

        {/* Tracks Grid */}
        <div className={`grid grid-cols-1 ${hasMultiple ? "md:grid-cols-2 gap-8 md:gap-0" : "max-w-[600px] mx-auto"} relative`}>

          {/* Vertical Divider (desktop only) */}
          {hasMultiple && (
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300/60 -translate-x-1/2" />
          )}

          {/* MERN Stack Column */}
          {mernRoles.length > 0 && (
            <div className={`flex flex-col items-start sm:items-center text-left sm:text-center gap-4 sm:gap-6 ${hasMultiple ? "md:pr-12" : ""}`}>
              {mernTitle && (
                <h3
                  className="text-[22px] sm:text-[28px] md:text-[34px] italic font-medium text-[#7143FE] mb-1 sm:mb-2"
                  style={{ fontFamily: "'PP Editorial New', serif" }}
                >
                  {mernTitle}
                </h3>
              )}
              <ul className="flex flex-col gap-3.5 w-full">
                {mernRoles.map((role, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-start gap-3 group cursor-pointer text-left"
                  >
                    <img src="/black arrow.webp" alt="arrow" className="w-4.5 h-4.5 sm:w-5 sm:h-5 shrink-0 mt-0.5" />
                    <span
                      className="text-[#111111] text-[15px] sm:text-[18px] font-medium group-hover:text-[#7143FE] transition-colors duration-200 leading-snug"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      {role}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Mobile Horizontal Divider */}
          {hasMultiple && (
            <div className="w-full border-t border-gray-300/60 my-2 md:hidden" />
          )}

          {/* Java Full Stack Column */}
          {javaRoles.length > 0 && (
            <div className={`flex flex-col items-start sm:items-center text-left sm:text-center gap-4 sm:gap-6 ${hasMultiple ? "md:pl-12" : ""}`}>
              {javaTitle && (
                <h3
                  className="text-[22px] sm:text-[28px] md:text-[34px] italic font-medium text-[#7143FE] mb-1 sm:mb-2"
                  style={{ fontFamily: "'PP Editorial New', serif" }}
                >
                  {javaTitle}
                </h3>
              )}
              <ul className="flex flex-col gap-3.5 w-full">
                {javaRoles.map((role, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-start gap-3 group cursor-pointer text-left"
                  >
                    <img src="/black arrow.webp" alt="arrow" className="w-4.5 h-4.5 sm:w-5 sm:h-5 shrink-0 mt-0.5" />
                    <span
                      className="text-[#111111] text-[15px] sm:text-[18px] font-medium group-hover:text-[#7143FE] transition-colors duration-200 leading-snug"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      {role}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
