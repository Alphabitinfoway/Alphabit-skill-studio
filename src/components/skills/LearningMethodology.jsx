"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const methodologyData = [
  {
    title: "Live Project Experience",
    description: "Create responsive, interactive, and performance-driven websites using modern technologies.",
    image: "/specializedTrainingModules.webp",
  },
  {
    title: "Expert Mentorship",
    description: "Master machine learning, data analytics, and AI-driven solutions shaping tomorrow's industries.",
    image: "/appliedTechnicalExecution.webp",
  },
  {
    title: "Internship Opportunities",
    description: "Learn SEO, social media strategy, content marketing, and performance advertising.",
    image: "/industryAndGovernmentEndorsements.webp",
  },
  {
    title: "Placement Assistance",
    description: "Develop management, communication, and operational skills for modern organizations.",
    image: "/activePlacementTie-Ups.webp",
  },
];

export default function LearningMethodology() {
  return (
    <>
      {/* MOBILE LAYOUT (lg:hidden) - Styled like Enterprise Training Section with top-to-bottom dark purple to light gradient */}
      <section className="block lg:hidden relative w-full bg-gradient-to-b from-[#7143FE] via-[#7143FE] to-[#F5F5F5] pt-10 pb-16 px-4 sm:px-6 overflow-hidden">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2
            className="text-white text-[22px] sm:text-[26px] font-extrabold leading-[1.25] tracking-tight"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Learning{" "}
            <span
              style={{
                fontFamily: "'PP Editorial New', serif",
                color: "#FF5622",
                fontStyle: "italic",
                fontWeight: 400,
              }}
              className="text-[28px] sm:text-[34px] px-1 inline-block"
            >
              Built
            </span>{" "}
            Around
            <br />
            Industry Needs
          </h2>
          <p
            className="mt-3 text-white/90 text-[12.5px] sm:text-[13.5px] leading-relaxed max-w-[380px] sm:max-w-[420px] mx-auto font-light"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Our training methodology combines real-world project experience, personalized mentorship, industry-recognized certifications, and placement support.
          </p>
        </motion.div>

        {/* 4 White Cards Vertical Stack */}
        <div className="flex flex-col gap-4 max-w-[380px] sm:max-w-[420px] mx-auto">
          {methodologyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[22px] sm:rounded-[24px] p-4 sm:p-5 shadow-lg flex flex-col text-left"
            >
              {/* Card Image */}
              <div className="relative w-full h-[140px] sm:h-[160px] rounded-[16px] overflow-hidden mb-3.5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Number Badge */}
              <div
                className="text-[#7143FE] text-[32px] sm:text-[36px] font-black leading-none tracking-tight mb-1"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {`0${index + 1}`}
              </div>

              {/* Card Title */}
              <h3
                className="text-[#111111] text-[15px] sm:text-[16px] font-extrabold leading-snug mb-1.5"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {item.title}
              </h3>

              {/* Card Description */}
              <p
                className="text-gray-500 text-[12.5px] sm:text-[13.5px] leading-relaxed"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DESKTOP LAYOUT (hidden lg:block) - Original layout preserved */}
      <section 
        className="hidden lg:block relative w-full bg-gradient-to-b from-[#9A7DFF] via-[#7144FE] to-[#F5F5F5] pt-16 pb-16 sm:pt-24 sm:pb-20 md:pt-32 md:pb-24 px-4 sm:px-6 md:px-12 overflow-hidden -mt-16"
        style={{
          clipPath: "ellipse(110% 100% at 50% 100%)",
        }}
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-[1200px] mx-auto relative z-10">

          {/* HEADING */}
          <div className="text-center mb-10 sm:mb-14 md:mb-16 px-2 sm:px-4">
            <h2
              className="text-white font-medium leading-[1.2] font-cabinet tracking-tight text-[26px] sm:text-[36px] md:text-[44px] lg:text-[48px]"
            >
              Learning <span className="font-pp italic text-[#FF5622] font-medium inline-block">Built</span> Around
              <br />
              Industry Needs
            </h2>
            <p className="mt-3 sm:mt-4 md:mt-6 text-white/90 text-[14px] sm:text-[16px] md:text-[18px] max-w-[850px] mx-auto font-cabinet font-light leading-relaxed">
              Our training methodology combines real-world project experience, personalized mentorship, industry-recognized certifications, and placement support to help learners become job-ready professionals.
            </p>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-[1440px] mx-auto">
            {methodologyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -6 }}
                transition={{
                  default: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
                  y: { duration: 0.2, ease: "easeOut" }
                }}
                className="bg-white rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 flex flex-col shadow-[0_12px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_38px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[16/6] sm:aspect-[16/4.5] md:aspect-[16/3.5] rounded-[18px] sm:rounded-[24px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="mt-4 sm:mt-6 flex flex-col flex-grow">
                  <h3 className="text-[#171717] font-semibold font-cabinet text-[16px] sm:text-[18px] md:text-[20px] mb-1.5 sm:mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#707070] font-cabinet font-light text-[13.5px] sm:text-[14.5px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
