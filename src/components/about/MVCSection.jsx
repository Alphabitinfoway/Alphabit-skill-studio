"use client";

import React from "react";
import Image from "next/image";

const ArrowIcon = () => (
  <div className="mt-1 flex-shrink-0 relative w-[16px] h-[16px]">
    <Image
      src="/black arrow.webp"
      alt="Arrow"
      fill
      sizes="16px"
      className="object-contain"
    />
  </div>
);

export default function MVCSection() {
  return (
    <section className="w-full bg-[#F5F5F5] pb-16 pt-12 md:pb-24 font-cabinet">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-10">
        
        {/* Mission Row */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
          <div className="md:w-[35%] lg:w-[30%]">
            <h2 className="text-[#FF5622] italic font-medium tracking-tight" style={{ fontFamily: "'PP Editorial New', serif", fontSize: "clamp(36px, 4vw, 48px)" }}>
              Mission
            </h2>
          </div>
          <div className="md:w-[65%] lg:w-[70%] flex items-start gap-4 text-[#666666] leading-[1.65] pt-5" style={{ fontSize: "clamp(14px, 1.2vw, 15px)" }}>
            <ArrowIcon />
            <p>
              To make students job-ready, not just course-complete, through practical, mentor-led training in the tools and frameworks companies use today.
            </p>
          </div>
        </div>

        <hr className="w-full border-t-[2px] border-gray-400/70 m-0" />

        {/* Vision Row */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
          <div className="md:w-[35%] lg:w-[30%]">
            <h2 className="text-[#FF5622] italic font-medium tracking-tight" style={{ fontFamily: "'PP Editorial New', serif", fontSize: "clamp(36px, 4vw, 48px)" }}>
              Vision
            </h2>
          </div>
          <div className="md:w-[65%] lg:w-[70%] flex items-start gap-4 text-[#666666] leading-[1.65] pt-4" style={{ fontSize: "clamp(14px, 1.2vw, 15px)" }}>
            <ArrowIcon />
            <p>
              To become Gujarat's most trusted name in IT and design training, known as much for who we place as what we teach.
            </p>
          </div>
        </div>

        <hr className="w-full border-t-[2px] border-gray-400/70 m-0" />

        {/* Core Values Row */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
          <div className="md:w-[35%] lg:w-[30%]">
            <h2 className="text-[#FF5622] italic font-medium tracking-tight" style={{ fontFamily: "'PP Editorial New', serif", fontSize: "clamp(36px, 4vw, 48px)" }}>
              Core Values
            </h2>
          </div>
          <div className="md:w-[65%] lg:w-[70%] flex flex-col gap-8">
            
            <div className="flex flex-col gap-2">
              <h3 className="text-[#666666] font-bold" style={{ fontSize: "clamp(14px, 1.2vw, 15px)" }}>Skills That Age Well:</h3>
              <div className="flex items-start gap-4 text-[#666666] leading-[1.65]" style={{ fontSize: "clamp(14px, 1.2vw, 15px)" }}>
                <ArrowIcon />
                <p>
                  We update our curriculum as the industry moves, so what you learn on day one is still relevant on the day you get hired.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[#666666] font-bold" style={{ fontSize: "clamp(14px, 1.2vw, 15px)" }}>Mentors, Not Lecturers:</h3>
              <div className="flex items-start gap-4 text-[#666666] leading-[1.65]" style={{ fontSize: "clamp(14px, 1.2vw, 15px)" }}>
                <ArrowIcon />
                <p>
                  Every course is led by people who've built and shipped real software or design work, not read from a slide deck.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[#666666] font-bold" style={{ fontSize: "clamp(14px, 1.2vw, 15px)" }}>Proof Before Placement:</h3>
              <div className="flex items-start gap-4 text-[#666666] leading-[1.65]" style={{ fontSize: "clamp(14px, 1.2vw, 15px)" }}>
                <ArrowIcon />
                <p>
                  No one graduates on attendance alone. Every student defends a working project before we put them in front of a hiring partner.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
