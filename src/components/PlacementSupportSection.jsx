"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PlacementSupportSection() {
  return (
    <section className="w-full bg-[#F4F4F6] relative border-b border-gray-100 font-cabinet">
      {/* Top purple accent line on mobile */}
      <div className="h-1.5 w-full bg-[#7143FE] lg:hidden" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-10 md:py-[80px]">
        {/* MOBILE LAYOUT (lg:hidden)  */}
        <div className="block lg:hidden space-y-8">
          {/* Header text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <span
              className="text-[#FF5622] text-[36px] sm:text-[42px] font-normal leading-[1.1] block"
              style={{ fontFamily: "'PP Editorial New', serif", fontStyle: "italic" }}
            >
              Advance Your
            </span>
            <span
              className="text-[#FF5622] text-[36px] sm:text-[42px] font-normal leading-[1.1] block mb-1"
              style={{ fontFamily: "'PP Editorial New', serif", fontStyle: "italic" }}
            >
              Tech Career
            </span>
            <h2 className="text-[#111111] text-[26px] sm:text-[32px] font-[800] leading-[1.15] block">
              with Dedicated
            </h2>
            <h2 className="text-[#111111] text-[26px] sm:text-[32px] font-[800] leading-[1.15] block">
              Placement Support
            </h2>
          </motion.div>

          {/* Features list */}
          <div className="flex flex-col gap-6 pt-2">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-start gap-3.5"
            >
              <span className="w-3 h-3 rounded-full bg-[#7143FE] shrink-0 mt-1.5" />
              <div>
                <h3 className="text-[#111111] text-[18px] sm:text-[20px] font-bold leading-tight">
                  Complete Career Guidance
                </h3>
                <p className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed mt-1 max-w-[95%]">
                  End-to-end support from resume building to interview prep and offer negotiation.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start gap-3.5"
            >
              <span className="w-3 h-3 rounded-full bg-[#7143FE] shrink-0 mt-1.5" />
              <div>
                <h3 className="text-[#111111] text-[18px] sm:text-[20px] font-bold leading-tight">
                  300+ Active Hiring Partners
                </h3>
                <p className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed mt-1 max-w-[95%]">
                  Direct pipeline to companies actively seeking qualified developers and analysts.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* DESKTOP LAYOUT (hidden lg:flex) */}
        <div className="hidden lg:flex flex-row items-center justify-between gap-12">
          {/* LEFT TEXT */}
          <div className="flex justify-end flex-[1.3] pr-10">
            <div className="flex flex-col w-fit">
              <div
                className="whitespace-nowrap text-[#FF5622] italic font-[500] text-[48px] leading-[1.05] ml-[100px]"
                style={{ fontFamily: "'PP Editorial New', serif" }}
              >
                Advance Your
              </div>

              <div className="flex flex-row items-center gap-2 mt-1">
                <div
                  className="whitespace-nowrap text-[#FF5622] italic font-[500] text-[48px] leading-[1.05]"
                  style={{ fontFamily: "'PP Editorial New', serif" }}
                >
                  Tech Career
                </div>

                <div className="whitespace-nowrap text-[#111] font-[800] text-[20px] leading-[1.35] pt-4">
                  with Dedicated <br />
                  Placement Support
                </div>
              </div>
            </div>
          </div>

          {/* Divider 1 */}
          <div className="w-[1px] h-[80px] bg-gray-400/80"></div>

          {/* MIDDLE TEXT */}
          <div className="flex justify-center flex-1">
            <div className="flex items-start gap-2.5">
              <span className="w-[8px] h-[8px] bg-[#7143FE] rounded-full mt-2.5 shadow-[0_0_8px_rgba(113,67,254,0.8)]"></span>
              <span className="text-[17px] font-[600] leading-[1.4] text-[#111]">
                Complete <br />
                Career Guidance
              </span>
            </div>
          </div>

          {/* Divider 2 */}
          <div className="w-[1px] h-[80px] bg-gray-400/80"></div>

          {/* RIGHT TEXT */}
          <div className="flex justify-center flex-1">
            <div className="flex items-start gap-2.5">
              <span className="w-[8px] h-[8px] bg-[#7143FE] rounded-full mt-2.5 shadow-[0_0_8px_rgba(113,67,254,0.8)]"></span>
              <span className="text-[17px] font-[600] leading-[1.4] text-[#111]">
                300+ Active <br />
                Hiring Partners
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}