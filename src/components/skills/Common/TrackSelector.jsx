"use client";

import React from "react";
import TrackCard from "./TrackCard";

export default function TrackSelector({ data }) {
  const { title, description, tracks = [] } = data?.trackSelectorData || {};

  if (!tracks || tracks.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 sm:gap-6 mt-10 sm:mt-16 font-cabinet">
      {/* Track Selector Header */}
      <div className="flex flex-col gap-1.5 sm:gap-2">
        <h3 
          className="text-[22px] sm:text-[28px] md:text-[32px] font-bold text-[#111111]"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          {title}
        </h3>
        <p 
          className="text-[#111111]/70 text-[14.5px] sm:text-[17px] md:text-[18px] leading-relaxed max-w-[650px] font-medium"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          {description}
        </p>
      </div>

      {/* Track Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-2 sm:mt-4">
        {tracks.map((track, index) => (
          <TrackCard
            key={index}
            title={track.title}
            description={track.description}
            bestFor={track.bestFor}
            idealIf={track.idealIf}
          />
        ))}
      </div>
    </div>
  );
}
