"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const programs = [
  {
    title: "Graphic Design",
    height: "420px",
    offset: "40px",
    image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1785215227/Graphic_Design_11zon_anyqls.webp"
  },
  {
    title: "Full Stack Development",
    height: "480px",
    offset: "0px",
    image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1785215226/Full_Stack_Developer_11zon_owmmik.webp"
  },
  {
    title: "Video Editing",
    height: "440px",
    offset: "20px",
    image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1785215227/Video_Editing_11zon_mjxnzg.webp"
  },
  {
    title: "AI/ML & Data Science",
    height: "460px",
    offset: "10px",
    image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1785215226/AI_ML_Data_Science_11zon_iwgbvq.webp"
  },
  {
    title: "Cyber Security",
    height: "490px",
    offset: "-10px",
    image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1785215227/Cyber_Security_11zon_wfykjl.webp"
  },
  {
    title: "Digital Marketing",
    height: "430px",
    offset: "30px",
    image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1785215227/Digital_Marketing_11zon_ky06o1.webp"
  },
];

// Mobile 2x2 grid images order matching user screenshot:
// Top-Left: Graphic Design, Top-Right: Video Editing, Bottom-Left: Cyber Security, Bottom-Right: Full Stack
const mobileGridImages = [
  programs[0], // Graphic Design
  programs[2], // Video Editing
  programs[4], // Cyber Security
  programs[1], // Full Stack Development
];

// Mobile badges order matching user screenshot (2 columns):
// Row 1: Graphic Design | Full Stack Development
// Row 2: Video Editing | AI/ML & Data Science
// Row 3: Cyber Security | Digital Marketing
const mobileBadges = [
  programs[0], // Graphic Design
  programs[1], // Full Stack Development
  programs[2], // Video Editing
  programs[3], // AI/ML & Data Science
  programs[4], // Cyber Security
  programs[5], // Digital Marketing
];

export default function ProgramsSection() {
  return (
    <section className="relative w-full bg-[#F4F4F6] lg:bg-gradient-to-t lg:from-[#7143FE] lg:to-[#F5F5F5] pt-10 pb-14 lg:pt-12 lg:pb-32 overflow-hidden max-lg:mb-0 lg:-mb-[60px] lg:[clip-path:ellipse(80%_60%_at_50%_15%)]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* MOBILE LAYOUT (lg:hidden) - Pixel perfect matching user screenshot */}
        <div className="block lg:hidden">
          {/* Header Content */}
          <div className="flex flex-col gap-3 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-[#111111] text-[28px] sm:text-[34px] font-extrabold tracking-tight leading-[1.15]"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Transform Your Potential into
              </h2>
              <span
                className="text-[#FF5622] text-[34px] sm:text-[44px] font-normal leading-[1.1] block mt-1"
                style={{ fontFamily: "'PP Editorial New', serif", fontStyle: "italic" }}
              >
                Professional Mastery
              </span>
            </motion.div>

            {/* View All Courses Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="my-1"
            >
              <button
                className="group flex items-center gap-2.5 bg-[#7143FE] hover:bg-[#5b32d6] text-white px-6 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-300 shadow-lg shadow-purple-500/20 active:scale-95"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                <ArrowUpRight className="w-5 h-5 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span>View All Courses</span>
              </button>
            </motion.div>

            {/* Subtitle Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p
                className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed max-w-[98%]"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Explore our intensive, industry-aligned training programs designed to accelerate your transition into the tech sector.
              </p>
            </motion.div>
          </div>

          {/* 2x2 Image Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 mb-5"
          >
            {mobileGridImages.map((prog, index) => (
              <div
                key={index}
                className="relative w-full aspect-[4/3] rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-sm bg-gray-200"
              >
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>

          {/* Pill Badges Grid below images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-2 gap-2.5 sm:gap-3"
          >
            {mobileBadges.map((prog, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200/90 rounded-full py-3 px-4 text-center shadow-[0_2px_6px_rgba(0,0,0,0.03)] flex items-center justify-center min-h-[44px]"
              >
                <span
                  className="text-[#1A1A1A] text-[13px] sm:text-[14px] font-semibold leading-tight"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {prog.title}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* DESKTOP LAYOUT (hidden lg:block) - Original layout preserved */}
        <div className="hidden lg:block">
          {/* Header Content */}
          <div className="flex flex-row items-center justify-between gap-10 mb-24 px-4">
            {/* Heading Part */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start gap-1 shrink-0 text-left"
            >
              <h2
                className="text-[#111111] leading-none tracking-tight"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontSize: "clamp(24px, 3.5vw, 36px)",
                  fontWeight: 800,
                }}
              >
                Transform Your Potential
              </h2>
              <div className="flex items-baseline gap-2 justify-start">
                <span
                  className="text-[#111111] font-medium"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontSize: "clamp(24px, 3.5vw, 36px)",
                    fontWeight: 800,
                  }}
                >
                  into
                </span>
                <span
                  style={{
                    fontFamily: "'PP Editorial New', serif",
                    fontSize: "clamp(34px, 5vw, 56px)",
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
                <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                View All Courses
              </button>
            </motion.div>

            {/* Paragraph Part - Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[340px] shrink-0 text-left"
            >
              <p
                className="text-[#111111]/60 text-[15px] leading-relaxed"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                }}
              >
                Explore our intensive, industry-aligned training programs designed to accelerate your transition into the tech sector.
              </p>
            </motion.div>
          </div>

          {/* Programs Image Grid */}
          <div className="grid grid-cols-6 gap-4 items-end relative z-0">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 1.2,
                  delay: 0.2 + (index * 0.1),
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="flex flex-col items-center group cursor-pointer relative"
              >
                {/* Desktop Title above Arch */}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.7 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center mb-5 w-full text-[13px] font-bold text-[#111111] group-hover:opacity-100 transition-all duration-300 z-10"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                  }}
                >
                  {program.title}
                </motion.span>

                {/* Image Card Container */}
                <div
                  className="w-full bg-[#D6D6D6] rounded-t-[50px] rounded-b-none transition-all duration-500 overflow-hidden relative group-hover:scale-[1.02]"
                  style={{
                    height: program.height,
                    transform: `translateY(${program.offset})`,
                  }}
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Background Glows for depth on desktop */}
      <div className="hidden lg:block absolute top-1/2 left-0 w-[300px] h-[300px] bg-purple-400/20 blur-[120px] rounded-full -translate-y-1/2" />
      <div className="hidden lg:block absolute bottom-[200px] right-0 w-[400px] h-[400px] bg-white/30 blur-[100px] rounded-full" />
    </section>
  );
}

