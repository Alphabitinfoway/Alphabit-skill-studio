"use client";

import React from "react";
export default function MeetingVideoSection({ data }) {
  const { titlePrefix, titleSuffix, videoUrl } = data?.meetingVideoData || {};

  if (!videoUrl) return null;

  return (
    <section className="w-full bg-[#F5F5F5] py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-10">

        {/* Title */}
        <div className="text-left mb-2">
          <h2 className="leading-tight text-gray-950 tracking-tight">
            <span
              className="italic font-medium text-[#FF5622]"
              style={{
                fontFamily: "'PP Editorial New', serif",
                fontSize: "52px",
              }}
            >
              {titlePrefix || "A Glance"}{" "}
            </span>
            <span
              className="font-semibold"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: "32px",
              }}
            >
              {titleSuffix || "at yesterday's Meeting"}
            </span>
          </h2>
        </div>

        {/* Video Card Container */}
        <div className="w-full max-w-[960px] mx-auto bg-gradient-to-br from-[#EAEAEA] to-[#D5D5D5] rounded-[40px] p-6 shadow-inner border border-gray-200/50 aspect-video relative overflow-hidden flex items-center justify-center">
          {videoUrl ? (
            <iframe
              className="w-full h-full rounded-[30px] shadow-lg border-0"
              src={videoUrl}
              title="A Glance at yesterday's Meeting Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <span className="text-gray-500 font-cabinet font-semibold text-lg md:text-xl">
                Youtube Video Link
              </span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
