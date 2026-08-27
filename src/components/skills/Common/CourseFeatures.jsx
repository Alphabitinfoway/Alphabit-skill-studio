"use client";

import React from "react";
import { motion } from "framer-motion";
export default function CourseFeatures({ data }) {
  const { titleNormal, titleItalic, titleSuffix, items = [] } = data?.courseFeaturesData || {};

  return (
    <div className="flex flex-col gap-4 sm:gap-6 font-cabinet">
      {/* Title */}
      <h2 className="text-center sm:text-left text-[22px] sm:text-[34px] md:text-[42px] leading-tight text-[#111111] tracking-tight">
        <span className="font-normal" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
          {titleNormal}{" "}
        </span>
        <span
          className="italic font-medium text-[#FF5622] text-[30px] sm:text-[42px] md:text-[50px] inline"
          style={{ fontFamily: "'PP Editorial New', serif" }}
        >
          {titleItalic}
        </span>{" "}
        <span className="font-normal" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
          {titleSuffix}
        </span>
      </h2>

      {/* Checklist */}
      <ul className="flex flex-col gap-3.5 sm:gap-5 mt-2 sm:mt-4">
        {items.map((item, idx) => (
          <motion.li 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-3 sm:gap-4"
          >
            <span className="text-[#111111]/60 shrink-0 mt-0.5 select-none">
              <img src="/black arrow.webp" alt="arrow" className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 object-contain" />
            </span>
            <span
              className="text-[#111111] text-[15px] sm:text-[18px] md:text-[20px] font-medium leading-snug"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              {item}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
