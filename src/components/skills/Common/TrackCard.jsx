"use client";

import React from "react";

export default function TrackCard({ title, description, bestFor, idealIf }) {
  return (
    <div 
      className="flex-1 flex flex-col p-6 rounded-2xl border border-[#D4D4D8] bg-transparent text-left"
      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
    >
      {/* Header with Gradient Avatar & Title */}
      <div className="flex items-center gap-4 mb-4">
        {/* Gradient Circle Avatar */}
        <div 
          className="w-12 h-12 rounded-full flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #7143FE 0%, #a78bfa 100%)"
          }}
        />
        <h4 className="text-[18px] sm:text-[20px] font-bold text-[#111111] leading-tight">
          {title}
        </h4>
      </div>

      {/* Description */}
      <p className="text-[14px] sm:text-[15px] text-[#111111]/70 leading-relaxed mb-6 font-medium">
        {description}
      </p>

      {/* Footer Details */}
      <div className="mt-auto flex flex-col gap-3">
        <p className="text-[14px] sm:text-[15px] text-[#111111] leading-snug">
          <span className="font-bold">Best for:</span>{" "}
          <span className="text-[#111111]/70 font-medium">{bestFor}</span>
        </p>
        <p className="text-[14px] sm:text-[15px] text-[#111111] leading-snug">
          <span className="font-bold">Ideal if you want to:</span>{" "}
          <span className="text-[#111111]/70 font-medium">{idealIf}</span>
        </p>
      </div>
    </div>
  );
}
