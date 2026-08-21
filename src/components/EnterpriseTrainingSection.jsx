"use client";

import React from "react";
import { motion } from "framer-motion";

const trainingData = [
  {
    stat: "50+",
    title: "Specialized Training Modules",
    description: "Targeted education in modern programming, UI design, and data security, engineered specifically to map to current job market requirements.",
    image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1785219966/specializedTrainingModules_qg02zc.webp",
  },
  {
    stat: "200+",
    title: "Industry and Government Endorsements",
    description: "Holding formal validations from key skill development authorities, guaranteeing your technical training meets rigorous national standards.",
    image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1785219971/industryAndGovernmentEndorsements_ykcyzd.webp",
  },
  {
    stat: "100%",
    title: "Applied Technical Execution",
    description: "Direct, mentor-led execution from the first session. You will build, deploy, and secure actual projects rather than memorizing concepts.",
    image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1785219986/appliedTechnicalExecution_efknr8.webp",
  },
  {
    stat: "300+",
    title: "Active Placement Tie-Ups",
    description: "A dedicated corporate relations pipeline that connects verified tech talent directly with companies actively seeking qualified developers and analysts.",
    image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1785219977/activePlacementTie-Ups_etvkoc.webp",
  },
  {
    stat: "03+",
    title: "Dedicated Tech Campuses",
    description: "Physical infrastructure built for focused technical development, offering seamless access to high-end systems and collaborative environments.",
    image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1785219982/dedicatedTechCampuses_kns7ve.webp",
  },
];

export default function EnterpriseTrainingSection() {
  return (
    <>
      {/* MOBILE LAYOUT (lg:hidden) - Pixel perfect matching user screenshot */}
      <section className="block lg:hidden relative w-full bg-[#7143FE] py-10 px-4 sm:px-6 overflow-hidden">
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
            Engineer Your Tech{" "}
            <span
              style={{
                fontFamily: "'PP Editorial New', serif",
                color: "#FF5622",
                fontStyle: "italic",
                fontWeight: 400,
              }}
              className="text-[28px] sm:text-[34px] px-1 inline-block"
            >
              Career
            </span>{" "}
            with
            <br />
            Enterprise-Level Training
          </h2>
        </motion.div>

        {/* 5 White Cards Vertical Stack */}
        <div className="flex flex-col gap-4 max-w-[380px] sm:max-w-[420px] mx-auto">
          {trainingData.map((item, index) => (
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

              {/* Stat Number */}
              <div
                className="text-[#7143FE] text-[32px] sm:text-[36px] font-black leading-none tracking-tight mb-1"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {item.stat}
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

      {/* DESKTOP LAYOUT (hidden lg:block) - Original curve layout preserved */}
      <section
        className="hidden lg:block relative w-full bg-gradient-to-b from-[#7143FE] to-[#F5F5F5] pt-36 pb-24 px-6 md:px-12 overflow-hidden"
        style={{
          clipPath: "ellipse(110% 100% at 50% 100%)",
          marginTop: "80px"
        }}
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-[1440px] mx-auto relative z-10">
          {/* HEADING */}
          <div className="text-center mb-24 px-4">
            <h2
              className="text-white font-semibold leading-[1.2] font-cabinet tracking-tight"
              style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
            >
              Engineer Your Tech{" "}
              <span
                className="text-[#FF5622] italic font-normal inline-block"
                style={{ fontFamily: "'PP Editorial New', serif", fontSize: "1.4em" }}
              >
                Career
              </span>{" "}
              with
              <br />
              Enterprise-Level Training
            </h2>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-6">
            {trainingData.map((item, index) => {
              const isTopRow = index < 3;
              
              let gridClasses = "";
              if (isTopRow) {
                gridClasses = "md:col-span-3 lg:col-span-2";
              } else {
                gridClasses = "md:col-span-3 lg:col-span-3";
                if (index === 3) {
                  gridClasses += " md:col-start-1 lg:col-auto";
                }
              }

              return (
                <div key={index} className={`w-full h-full ${gridClasses}`}>
                  <Card {...item} isLarge={!isTopRow} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function Card({ stat, title, description, image, isLarge }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="bg-white border-[2.5px] border-white rounded-[28px] p-5 h-full flex flex-col shadow-[0_15px_30px_rgba(0,0,0,0.08)]"
    >
      <div className="relative w-full mb-8">
        <div
          className="w-full rounded-[28px] overflow-hidden"
          style={{ height: isLarge ? "220px" : "160px" }}
        >
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[#D9D9D9]" />
          )}
        </div>

        <div
          className="absolute bottom-0 left-4 translate-y-1/2 z-10 text-[#7143FE] font-extrabold leading-none"
          style={{
            fontSize: "52px",
            fontWeight: "800",
            WebkitTextStroke: "1.5px white",
            textShadow: "0 2px 6px rgba(0,0,0,0.15)"
          }}
        >
          {stat}
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-[#111111] font-bold mb-2 font-cabinet leading-tight" style={{ fontSize: "clamp(16px, 1.8vw, 18px)" }}>
          {title}
        </h3>
        <p className="text-[#555555] leading-[1.6] font-cabinet" style={{ fontSize: "clamp(12.5px, 1vw, 14px)" }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}

