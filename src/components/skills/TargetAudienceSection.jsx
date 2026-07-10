"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TargetAudienceSection() {
  const leftCards = [
    {
      id: "01",
      title: "Fresh Graduates",
      desc: "BCA, B.Sc IT, B.Tech, or any stream — get practical skills, a portfolio of real projects, an internship certificate, and placement support to start your career with confidence.",
      icon: (
        <img src="/skill/freshGraduates.png" alt="Fresh Graduates" className="w-10 h-10" />
      ),
    },
    {
      id: "02",
      title: "Career Switchers",
      desc: "Coming from a non-technical background? You'll get structured mentorship and placement support at every step — from zero experience to job-ready.",
      icon: (
        <img src="/skill/careerSwitchers.png" alt="Career Switchers" className="w-10 h-10" />
      ),
    },
    {
      id: "03",
      title: "Working Professionals",
      desc: "Weekend batches and online options let you upskill and move into a new role without leaving your current job.",
      icon: (
        <img src="/skill/workingProfessionals.png" alt="Working Professionals" className="w-8 h-8" />
      ),
    },
  ];

  const rightCards = [
    {
      id: "04",
      title: "Aspiring Freelancers",
      desc: "Learn the complete skill set end to end and start freelancing with confidence, working on real projects for real clients.",
      icon: (
        <img src="/skill/aspiringFreelancers.png" alt="Aspiring Freelancers" className="w-8 h-8" />
      ),
    },
    {
      id: "05",
      title: "Entrepreneurs",
      desc: "Build your own product or business without outsourcing. Get complete hands-on ownership of your work from day one.",
      icon: (
        <img src="/skill/entrepreneurs.png" alt="Entrepreneurs" className="w-10 h-10" />
      ),
    },
    {
      id: "06",
      title: "Internship Seekers",
      desc: "This course includes an internship pathway — online and offline — so you graduate with verified real-world experience on your resume.",
      icon: (
        <img src="/skill/internshipSeekers.png" alt="Internship Seekers" className="w-8 h-8" />
      ),
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f7] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-cabinet">
      {/* Title */}
      <div className="max-w-[1300px] mx-auto mb-16">
        <h2 className="text-[#111111] text-[32px] font-bold tracking-tight font-cabinet">
          Is this course right for{" "}
          <span
            className="italic font-medium text-[#E85B2A]"
            style={{ fontFamily: "'PP Editorial New', serif", fontSize: "52px" }}
          >
            You?
          </span>
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-0 items-center relative z-10">

        {/* Left Column (Cards 01 - 03) */}
        <div className="flex flex-col gap-6 w-full lg:max-w-[500px] mx-auto lg:mx-0">
          {leftCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-md border-l-[6px] border-[#7c5cf0] p-6 flex items-center gap-4 hover:shadow-lg transition-all duration-300 relative group h-[200px]"
            >
              {/* Icon Container with gradient background and white icon */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#7c5cf0] to-[#FFFFFF] flex items-center justify-center flex-shrink-0 shadow-sm">
                {card.icon}
              </div>

              {/* Content */}
              <div className="flex-1 pr-8">
                <h3 className="text-[#111111] font-bold text-[24px] leading-snug mb-1 font-cabinet">
                  {card.title}
                </h3>
                <p className="text-[#555555] text-[16px] leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>

              {/* Huge Number at top right corner */}
              <span
                className="absolute right-4 top-2.5 text-[#7143FE] text-[34px] sm:text-[38px] font-medium italic transition-colors duration-300 pointer-events-none select-none"
                style={{ fontFamily: "'PP Editorial New', serif" }}
              >
                {card.id}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Center Hexagon Column */}
        <div className="relative flex items-center justify-center w-full max-w-[420px] lg:w-[460px] mx-auto py-10 lg:py-0 z-10">
          <img
            src="/skill/hexagon.png"
            alt="Different People. One Destination. Your Future."
            className="w-full h-auto object-contain drop-shadow-md transition-transform duration-500 "
          />
        </div>

        {/* Right Column (Cards 04 - 06) */}
        <div className="flex flex-col gap-6 w-full lg:max-w-[500px] mx-auto lg:mx-0">
          {rightCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-md border-r-[6px] border-[#7c5cf0] p-6 flex items-center gap-4 hover:shadow-lg transition-all duration-300 relative group h-[200px]"
            >
              {/* Icon Container with gradient background and white icon */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#7c5cf0] to-[#FFFFFF] flex items-center justify-center flex-shrink-0 shadow-sm">
                {card.icon}
              </div>

              {/* Content */}
              <div className="flex-1 pr-8">
                <h3 className="text-[#111111] font-bold text-[24px] leading-snug mb-1 font-cabinet">
                  {card.title}
                </h3>
                <p className="text-[#555555] text-[16px] leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>

              {/* Huge Number at top right corner */}
              <span
                className="absolute right-4 top-2.5 text-[#7143FE] text-[34px] sm:text-[38px] font-medium italic transition-colors duration-300 pointer-events-none select-none"
                style={{ fontFamily: "'PP Editorial New', serif" }}
              >
                {card.id}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
