"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const methodologyData = [
  {
    title: "Live Project Experience",
    description: "Create responsive, interactive, and performance-driven websites using modern technologies.",
    image: "/specializedTrainingModules.png",
  },
  {
    title: "Expert Mentorship",
    description: "Master machine learning, data analytics, and AI-driven solutions shaping tomorrow's industries.",
    image: "/specializedTrainingModules.png",
  },
  {
    title: "Internship Opportunities",
    description: "Learn SEO, social media strategy, content marketing, and performance advertising.",
    image: "/specializedTrainingModules.png",
  },
  {
    title: "Placement Assistance",
    description: "Develop management, communication, and operational skills for modern organizations.",
    image: "/specializedTrainingModules.png",
  },
];

export default function LearningMethodology() {
  return (
    <section 
      className="relative w-full bg-gradient-to-b from-[#9A7DFF] via-[#7144FE] to-[#F5F5F5] pt-32 pb-24 px-6 md:px-12 overflow-hidden -mt-16"
      style={{
        clipPath: "ellipse(110% 100% at 50% 100%)",
      }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* HEADING */}
        <div className="text-center mb-16 px-4">
          <h2
            className="text-white font-medium leading-[1.2] font-cabinet tracking-tight"
            style={{ fontSize: "clamp(24px, 3.2vw, 34px)" }}
          >
            Learning <span className="font-pp italic text-[#FF5622] font-medium inline-block" style={{ fontSize: "1.5em" }}>Built</span> Around
            <br />
            Industry Needs
          </h2>
          <p className="mt-6 text-white/85 text-[17px] sm:text-[19px] md:text-[20px] max-w-[900px] mx-auto font-cabinet font-light leading-relaxed">
            Our training methodology combines real-world project experience, personalized mentorship, industry-recognized certifications, and placement support to help learners become job-ready professionals.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1440px] mx-auto">
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
              className="bg-white rounded-[32px] p-6 flex flex-col shadow-[0_12px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_38px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/3.5] rounded-[24px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="mt-6 flex flex-col flex-grow">
                <h3 className="text-[#171717] font-semibold font-cabinet text-[18px] sm:text-[20px] mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#707070] font-cabinet font-light text-[14px] sm:text-[14.5px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
