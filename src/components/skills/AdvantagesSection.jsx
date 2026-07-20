"use client";

import React from "react";

const advantages = [
  {
    icon: "/skill/learnbybuilding.svg",
    title: "Learn by Building",
  },
  {
    icon: "/skill/mentorshipthatmatters.svg",
    title: "Mentorship That Matters",
  },
  {
    icon: "/skill/industrydrivencurriculum.svg",
    title: "Industry-Driven Curriculum",
  },
  {
    icon: "/skill/carreracceleration.svg",
    title: "Career Acceleration",
  },
  {
    icon: "/skill/flexiblelearningpaths.svg",
    title: "Flexible Learning Paths",
  },
  {
    icon: "/skill/realclientprojects.svg",
    title: "Real Client Projects",
  },
  {
    icon: "/skill/futurereadyskills.svg",
    title: "Future Ready Skills",
  },
  {
    icon: "/skill/lifetimecommunitysupport.svg",
    title: "Lifetime Community Support",
  },
];

export default function AdvantagesSection() {
  return (
    <section id="advantage" className="w-full bg-[#F5F5F5] py-10 px-6 lg:px-12 overflow-hidden">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-8 lg:gap-x-12 items-start">
        
        {/* Header Area - Spans 2 columns on large screens */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <h2
            className="text-[#111111] leading-[0.8] tracking-[-0.03em] flex flex-row items-baseline gap-x-2 md:gap-x-4 lg:whitespace-nowrap"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: "clamp(32px, 4.2vw, 32px)",
              fontWeight: 800,
            }}
          >
            <span>The Alphabit</span>
            <span
              style={{
                fontFamily: "'PP Editorial New', serif",
                fontSize: "clamp(42px, 5.5vw, 52px)",
                color: "#FF5622",
                fontStyle: "italic",
                fontWeight: 300,
                lineHeight: 1,
              }}
            >
              Advantage
            </span>
          </h2>
          <p
            className="text-[#111111]/50 text-[10px] lg:text-[18px] leading-relaxed  font-medium"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
            }}
          >
            A breakdown of the primary methodologies and structural benefits integrated into our IT training modules.
          </p>
        </div>

        {/* First Row Items (Remaining 3 columns on large screens) */}
        {advantages.slice(0, 3).map((item, index) => (
          <AdvantageItem key={index} icon={item.icon} title={item.title} />
        ))}

        {/* Second Row Items (All 5 columns on large screens) */}
        {advantages.slice(3).map((item, index) => (
          <AdvantageItem key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </section>
  );
}

function AdvantageItem({ icon, title }) {
  return (
    <div className="flex flex-row items-center gap-5 group cursor-pointer lg:whitespace-normal">
      <div className="relative flex-shrink-0 w-[64px] h-[64px] lg:w-[72px] lg:h-[72px] rounded-full bg-transparent border border-[#7143FE] flex items-center justify-center text-[#7143FE] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:bg-[#7143FE] group-hover:border-transparent group-hover:shadow-[0_15px_30px_rgba(113,67,254,0.2)] group-hover:-translate-y-1">
        <img
          src={icon}
          alt={title}
          className="w-7 h-7 lg:w-8 lg:h-8 object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert group-hover:scale-110"
        />
      </div>
      
      <span
        className="text-[#111111] text-[15px] lg:text-[16px] font-bold leading-[1.3] max-w-[140px] tracking-tight group-hover:text-[#7143FE] transition-colors duration-300"
        style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
        }}
      >
        {title}
      </span>
    </div>
  );
}
