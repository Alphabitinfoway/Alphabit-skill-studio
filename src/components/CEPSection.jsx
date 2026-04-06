"use client";

import React from "react";

export default function CEPSection() {
  return (
    <section className="w-full bg-[#F5F5F5] py-20 md:py-[80px] flex flex-col items-center justify-center overflow-hidden">
      {/* Philosophy Text */}
      <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-2 px-6">
        {/* Concept */}
        <div className="flex items-baseline">
          <span
            className="text-[#FF5622] text-[42px] sm:text-[52px] md:text-[62px] italic font-pp pr-0.5"
            style={{ fontWeight: 400, lineHeight: 1 }}
          >
            C
          </span>
          <span className="text-[#111111] text-[28px] sm:text-[36px] md:text-[42px] font-cabinet font-[800] tracking-tight leading-none">
            oncept.
          </span>
        </div>

        {/* Execution */}
        <div className="flex items-baseline ml-2 md:ml-4">
          <span
            className="text-[#FF5622] text-[42px] sm:text-[52px] md:text-[62px] italic font-pp pr-0.5"
            style={{ fontWeight: 400, lineHeight: 1 }}
          >
            E
          </span>
          <span className="text-[#111111] text-[28px] sm:text-[36px] md:text-[42px] font-cabinet font-[800] tracking-tight leading-none">
            xecution.
          </span>
        </div>

        {/* Placement */}
        <div className="flex items-baseline ml-2 md:ml-4">
          <span
            className="text-[#FF5622] text-[42px] sm:text-[52px] md:text-[62px] italic font-pp pr-0.5"
            style={{ fontWeight: 400, lineHeight: 1 }}
          >
            P
          </span>
          <span className="text-[#111111] text-[28px] sm:text-[36px] md:text-[42px] font-cabinet font-[800] tracking-tight leading-none">
            lacement.
          </span>
        </div>
      </div>
    </section>
  );
}
