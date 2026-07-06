"use client";

import React from "react";
import TrackCard from "./TrackCard";

export default function TrackSelector() {
  const tracks = [
    {
      title: "Full Stack Web Development (MERN)",
      description: "Build with MongoDB, Express.js, React.js, and Node.js – the most popular combination for modern web application development in India right now.",
      bestFor: "Startups · Product Companies · Freelance Web Developers",
      idealIf: "Work at a product startup · Freelance as a web developer · Build your own web application from scratch"
    },
    {
      title: "Full Stack Java Development",
      description: "Build with Core Java, Spring Boot, Hibernate, and React or Angular – the backend combination large organizations across India specifically hire for.",
      bestFor: "Enterprise IT companies · Service-based firms · Government IT",
      idealIf: "Work at TCS / Infosys / Wipro-level firms · Join service-based IT companies · Build enterprise-grade applications"
    }
  ];

  return (
    <div className="flex flex-col gap-6 mt-16">
      {/* Track Selector Header */}
      <div className="flex flex-col gap-2">
        <h3 
          className="text-[28px] sm:text-[32px] font-bold text-[#111111]"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Choose your track
        </h3>
        <p 
          className="text-[#111111]/70 text-[16px] sm:text-[18px] leading-relaxed max-w-[650px] font-medium"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Not every student has the same career goal. Choose the track that matches the job market you want to enter.
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
