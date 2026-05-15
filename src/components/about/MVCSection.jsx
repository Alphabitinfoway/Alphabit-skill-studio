"use client";

import React from "react";
import Image from "next/image";

const ArrowIcon = () => (
  <div className="mt-1 flex-shrink-0 relative w-[16px] h-[16px]">
    <Image
      src="/black arrow.png"
      alt="Arrow"
      fill
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
              To future-proof technical careers by providing rigorous, mentor-driven instruction in next-generation frameworks, equipping our learners to solve complex engineering and design challenges.
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
              To act as the premier catalyst for digital innovation, continuously supplying the global IT sector with forward-thinking developers, AI specialists, and UI/UX architects.
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
              <h3 className="text-[#666666] font-bold" style={{ fontSize: "clamp(14px, 1.2vw, 15px)" }}>Technological Agility:</h3>
              <div className="flex items-start gap-4 text-[#666666] leading-[1.65]" style={{ fontSize: "clamp(14px, 1.2vw, 15px)" }}>
                <ArrowIcon />
                <p>
                  To act as the premier catalyst for digital innovation, continuously supplying the global IT sector with forward-thinking developers, AI specialists, and UI/UX architects.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[#666666] font-bold" style={{ fontSize: "clamp(14px, 1.2vw, 15px)" }}>Mentored Execution:</h3>
              <div className="flex items-start gap-4 text-[#666666] leading-[1.65]" style={{ fontSize: "clamp(14px, 1.2vw, 15px)" }}>
                <ArrowIcon />
                <p>
                  Replacing traditional teaching with direct technical oversight from deployed industry veterans.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[#666666] font-bold" style={{ fontSize: "clamp(14px, 1.2vw, 15px)" }}>Verifiable Authority:</h3>
              <div className="flex items-start gap-4 text-[#666666] leading-[1.65]" style={{ fontSize: "clamp(14px, 1.2vw, 15px)" }}>
                <ArrowIcon />
                <p>
                  Validating every learner's expertise through the successful deployment of functional, complex digital products prior to corporate placement.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
