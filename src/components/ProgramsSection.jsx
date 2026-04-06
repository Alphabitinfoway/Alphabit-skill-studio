"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Graphic Design",
    height: "420px",
    offset: "40px",
    image: "/Home Page/Professional Mastery/Graphic Design_11zon.webp"
  },
  {
    title: "Full Stack Development",
    height: "480px",
    offset: "0px",
    image: "/Home Page/Professional Mastery/Full Stack Developer_11zon.webp"
  },
  {
    title: "Video Editing",
    height: "440px",
    offset: "20px",
    image: "/Home Page/Professional Mastery/Video Editing_11zon.webp"
  },
  {
    title: "AI/ML & Data Science",
    height: "460px",
    offset: "10px",
    image: "/Home Page/Professional Mastery/AI ML Data Science_11zon.webp"
  },
  {
    title: "Cyber Security",
    height: "490px",
    offset: "-10px",
    image: "/Home Page/Professional Mastery/Cyber Security_11zon.webp"
  },
  {
    title: "Digital Marketing",
    height: "430px",
    offset: "30px",
    image: "/Home Page/Professional Mastery/Digital Marketing_11zon.webp"
  },
];

export default function ProgramsSection() {
  return (
    <section
      className="relative w-full bg-gradient-to-t from-[#7143FE] to-[#F5F5F5] pt-12 pb-32 overflow-hidden"
      style={{
        clipPath: "ellipse(60% 60% at 50%  15%)",
        marginBottom: "-120px"
      }}
    >
      <div className=" mx-auto px-8 relative z-10">
        {/* Header Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-24 px-4 overflow-visible">
          {/* Heading Part */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start gap-1 shrink-0"
          >
            <h2
              className="text-[#111111] leading-none tracking-tight"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 800,
              }}
            >
              Transform Your Potential
            </h2>
            <div className="flex items-baseline gap-2">
              <span
                className="text-[#111111] font-medium"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 800,
                }}
              >
                into
              </span>
              <span
                style={{
                  fontFamily: "'PP Editorial New', serif",
                  fontSize: "clamp(36px, 4.5vw, 56px)",
                  color: "#FF5622",
                  fontStyle: "italic",
                  fontWeight: 400,
                  lineHeight: 1,
                }}
              >
                Professional Mastery
              </span>
            </div>
          </motion.div>

          {/* Button Part - Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0 flex items-center justify-center"
          >
            <button
              className="group flex items-center gap-3 bg-[#7143FE] text-white px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#5b32d6] hover:scale-105 shadow-xl shadow-purple-500/20 whitespace-nowrap"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
              View All Courses
            </button>
          </motion.div>

          {/* Paragraph Part - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[340px] shrink-0"
          >
            <p
              className="text-[#111111]/60 text-[14px] lg:text-[15px] text-center lg:text-left leading-relaxed"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
              }}
            >
              Explore our intensive, industry-aligned training programs designed to accelerate your transition into the tech sector.
            </p>
          </motion.div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end relative z-0">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: parseInt(program.offset) }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1.2,
                delay: 0.2 + (index * 0.1),
                ease: [0.16, 1, 0.3, 1]
              }}
              className="flex flex-col items-center group cursor-pointer relative"
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center mb-5 block w-full text-[13px] font-bold text-[#111111] group-hover:opacity-100 transition-all duration-300 z-10"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                }}
              >
                {program.title}
              </motion.span>
              <div
                className="w-full bg-[#D6D6D6] rounded-t-[50px] transition-all duration-500 overflow-hidden relative group-hover:scale-[1.02]"
                style={{ height: program.height }}
              >
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glows for depth */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-purple-400/20 blur-[120px] rounded-full -translate-y-1/2" />
      <div className="absolute bottom-[200px] right-0 w-[400px] h-[400px] bg-white/30 blur-[100px] rounded-full" />
    </section>
  );
}
