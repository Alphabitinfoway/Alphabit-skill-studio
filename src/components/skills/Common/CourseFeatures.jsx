"use client";

import React from "react";
import { motion } from "framer-motion";
export default function CourseFeatures({ data }) {
  const { titleNormal, titleItalic, titleSuffix, items = [] } = data?.courseFeaturesData || {};

  return (
    <div className="flex flex-col gap-6">
      {/* Title */}
      <h2 className="text-[32px] sm:text-[42px] md:text-[48px] leading-[1.1] text-[#111111] tracking-tight">
        <span className="font-normal" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
          {titleNormal}{" "}
        </span>
        <span
          className="italic font-medium text-[#FF5622] font-[52px]"
          style={{ fontFamily: "'PP Editorial New', serif" }}
        >
          {titleItalic}
        </span>{" "}
        <span className="font-normal" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
          {titleSuffix}
        </span>
      </h2>

      {/* Checklist */}
      <ul className="flex flex-col gap-5 mt-4">
        {items.map((item, idx) => (
          <motion.li 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-4"
          >
            <span className="text-[#111111]/60 text-[22px] font-light leading-none select-none">
              <img src="/black arrow.webp" alt="arrow" className="w-6 h-6 object-contain" />
            </span>
            <span
              className="text-[#111111] text-[18px] sm:text-[20px] font-medium leading-tight"
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
