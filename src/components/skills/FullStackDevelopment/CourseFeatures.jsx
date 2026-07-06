"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CourseFeatures() {
  const items = [
    "10 Modules- frontend to deployment",
    "5+ industry-grade live full stack projects",
    "GitHub portfolio with deployed applications",
    "Small batch sizes for personal attention",
    "Weekly code reviews by working developers",
    "Resume, LinkedIn & mock interview prep",
    "NSDC-recognised government certification",
    "No Cost EMI – flexible fee structure",
    "Weekend & weekday batch options",
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Title */}
      <h2 className="text-[32px] sm:text-[42px] md:text-[48px] leading-[1.1] text-[#111111] tracking-tight">
        <span className="font-semibold" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
          About{" "}
        </span>
        <span
          className="italic font-medium text-[#FF5622]"
          style={{ fontFamily: "'PP Editorial New', serif" }}
        >
          Full-Stack
        </span>{" "}
        <span className="font-semibold" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
          Development Course
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
              <img src="/black arrow.png" alt="arrow" className="w-6 h-6 object-contain" />
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
