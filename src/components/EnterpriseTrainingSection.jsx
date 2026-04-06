"use client";

import React from "react";
import { motion } from "framer-motion";

const trainingData = [
  {
    stat: "50+",
    title: "Specialized Training Modules",
    description: "Targeted education in modern programming, UI design, and data security, engineered specifically to map to current job market requirements.",
  },
  {
    stat: "200+",
    title: "Industry and Government Endorsements",
    description: "Holding formal validations from key skill development authorities, guaranteeing your technical training meets rigorous national standards.",
  },
  {
    stat: "100%",
    title: "Applied Technical Execution",
    description: "Direct, mentor-led execution from the first session. You will build, deploy, and secure actual projects rather than memorizing concepts.",
  },
  {
    stat: "300+",
    title: "Active Placement Tie-Ups",
    description: "A dedicated corporate relations pipeline that connects verified tech talent directly with companies actively seeking qualified developers and analysts.",
  },
  {
    stat: "03+",
    title: "Dedicated Tech Campuses",
    description: "Physical infrastructure built for focused technical development, offering seamless access to high-end systems and collaborative environments.",
  },
];

export default function EnterpriseTrainingSection() {
  return (
    <section 
      className="relative w-full bg-gradient-to-b from-[#7143FE] to-[#F5F5F5] pt-48 pb-24 px-6 md:px-12 overflow-hidden"
      style={{
        clipPath: "ellipse(110% 100% at 50% 100%)",
        marginTop: "80px"
      }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* HEADING */}
        <div className="text-center mb-12 px-4">
          <h2
            className="text-white font-bold leading-[1.2] font-cabinet tracking-tight"
            style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
          >
            Engineer Your Tech{" "}
            <span
              className="text-[#FF5622] italic font-normal inline-block"
              style={{ fontFamily: "'PP Editorial New', serif", fontSize: "1.25em" }}
            >
              Career
            </span>{" "}
            with
            <br />
            Enterprise-Level Training
          </h2>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {trainingData.slice(0, 3).map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>

        {/* BOTTOM ROW (Centered 2 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trainingData.slice(3, 5).map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}

function Card({ stat, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="bg-white border-[2.5px] border-white rounded-[28px] p-5 h-full flex flex-col shadow-[0_15px_30px_rgba(0,0,0,0.08)]"
    >
      {/* Image area + stat overlap wrapper */}
      {/* Extra mb accounts for the stat number that hangs below the image */}
      <div className="relative w-full mb-14">
        {/* Grey Image Area — fixed height so all cards look the same */}
        <div
          className="w-full bg-[#D9D9D9] rounded-[28px] overflow-hidden"
          style={{ height: "200px" }}
        >
          <div className="absolute inset-0 " />
        </div>

        {/* Stat Number — bottom-left, half in / half out of grey card */}
        <div
          className="absolute bottom-0 left-4 translate-y-1/2 z-10 text-[#7143FE] font-extrabold leading-none font-Cabinet Grotesk"
          style={{
            fontSize: "52px",
            fontWeight: "700",
            WebkitTextStroke: "1.5px white",
            textShadow: "0 2px 6px rgba(0,0,0,0.15)"
          }}
        >
          {stat}
        </div>
      </div>

      {/* Title & Description below */}
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
