"use client";

import React from "react";
import TrackCard from "./TrackCard";

export default function TrackSelector({ data }) {
  const { title, description, tracks = [] } = data?.trackSelectorData || {};

  if (!tracks || tracks.length === 0) return null;

  return (
    <div className="flex flex-col gap-6 mt-16">
      {/* Track Selector Header */}
      <div className="flex flex-col gap-2">
        <h3 
          className="text-[28px] sm:text-[32px] font-bold text-[#111111]"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          {title}
        </h3>
        <p 
          className="text-[#111111]/70 text-[16px] sm:text-[18px] leading-relaxed max-w-[650px] font-medium"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          {description}
        </p>
      </div>

      {/* Track Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
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
