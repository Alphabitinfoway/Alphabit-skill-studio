"use client";

import React from "react";
import { motion } from "framer-motion";

const capabilities = [
  {
    icon: "/icon.svg",
    title: "Limited Students Batch",
  },
  {
    icon: "/icon1.svg",
    title: "Personalized Attention",
  },
  {
    icon: "/icon2.svg",
    title: "Highly Qualified Teachers",
  },
  {
    icon: "/icon123.svg",
    title: "Flexible Batch Timings",
  },
  {
    icon: "/icon3.svg",
    title: "Interactive Learning",
  },
  {
    icon: "/icon4.svg",
    title: "Live Projects",
  },
  {
    icon: "/icon5.svg",
    title: "Career Support",
  },
  {
    icon: "/icon6.svg",
    title: "Job Oriented Training",
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="w-full bg-[#F5F5F5] py-12 lg:py-32 px-5 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        
        {/* MOBILE LAYOUT (lg:hidden) - Pixel perfect matching user screenshot */}
        <div className="block lg:hidden">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2 mb-6"
          >
            <h2
              className="text-[#111111] text-[26px] sm:text-[30px] font-extrabold tracking-tight flex items-baseline gap-2"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              <span>Core Program</span>
              <span
                style={{
                  fontFamily: "'PP Editorial New', serif",
                  color: "#FF5622",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
                className="text-[32px] sm:text-[38px]"
              >
                Capabilities
              </span>
            </h2>
            <p
              className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed max-w-[98%]"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              A breakdown of the primary methodologies and structural benefits integrated into our IT training modules.
            </p>
          </motion.div>

          {/* 2-Column Grid of Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 flex items-center gap-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100/90"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#7143FE] flex items-center justify-center shrink-0">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                  />
                </div>
                <span
                  className="text-[#111111] text-[13px] sm:text-[14px] font-bold leading-snug"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {item.title}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* DESKTOP LAYOUT (hidden lg:grid) - Original layout preserved */}
        <div className="hidden lg:grid grid-cols-5 gap-y-16 gap-x-12 items-start">
          {/* Header Area */}
          <div className="flex flex-col gap-4 col-span-2">
            <h2
              className="text-[#111111] leading-[0.8] tracking-[-0.03em] flex flex-row items-baseline gap-x-4 whitespace-nowrap"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: "32px",
                fontWeight: 800,
              }}
            >
              <span>Core Program</span>
              <span
                style={{
                  fontFamily: "'PP Editorial New', serif",
                  fontSize: "52px",
                  color: "#FF5622",
                  fontStyle: "italic",
                  fontWeight: 300,
                  lineHeight: 1,
                }}
              >
                Capabilities
              </span>
            </h2>
            <p
              className="text-[#111111]/50 text-[18px] leading-relaxed font-medium"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
              }}
            >
              A breakdown of the primary methodologies and structural benefits integrated into our IT training modules.
            </p>
          </div>

          {/* First Row Items (Remaining 3 columns on large screens) */}
          {capabilities.slice(0, 3).map((item, index) => (
            <CapabilityItem key={index} icon={item.icon} title={item.title} />
          ))}

          {/* Second Row Items (All 5 columns on large screens) */}
          {capabilities.slice(3).map((item, index) => (
            <CapabilityItem key={index} icon={item.icon} title={item.title} />
          ))}
        </div>

      </div>
    </section>
  );
}

function CapabilityItem({ icon, title }) {
  return (
    <div className="flex flex-row items-center gap-5 group cursor-pointer whitespace-normal">
      <div className="relative flex-shrink-0 w-[72px] h-[72px] rounded-full bg-transparent border border-[#7143FE] flex items-center justify-center text-[#7143FE] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:bg-[#7143FE] group-hover:border-transparent group-hover:shadow-[0_15px_30px_rgba(113,67,254,0.2)] group-hover:-translate-y-1">
        <img
          src={icon}
          alt={title}
          className="w-8 h-8 object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert group-hover:scale-110"
        />
      </div>
      
      <span
        className="text-[#111111] text-[16px] font-bold leading-[1.3] max-w-[140px] tracking-tight group-hover:text-[#7143FE] transition-colors duration-300"
        style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
        }}
      >
        {title}
      </span>
    </div>
  );
}

