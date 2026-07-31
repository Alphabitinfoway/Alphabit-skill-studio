"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel } from "@/components/application/carousel/carousel-base";

// NOTE: apiMeeting is now pre-fetched server-side in page.js (ISR cached).
// This component no longer makes any client-side API calls.

// ── Glance Card ──────────────────────────────────────────────────────────────
function MeetingGlanceCard({ heading, subheading, image1, image2 }) {
  return (
    <div
      className="w-full flex items-center justify-between p-8 md:p-16 rounded-[40px]"
      style={{
        height: "clamp(280px, 34vw, 390px)",
        background: "linear-gradient(to bottom, #F5F5F5 0%, #e5e7eb 100%)",
      }}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl md:text-4xl font-bold text-[#171717] font-cabinet leading-tight">
          {heading}
        </h3>
        <p className="text-gray-500 text-sm md:text-base font-medium max-w-xs sm:max-w-sm md:max-w-md">
          {subheading}
        </p>
      </div>

      <div
        style={{
          position: "relative",
          width: "clamp(210px, 28vw, 330px)",
          height: "clamp(160px, 22vw, 235px)",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: "80%",
            height: "65%",
            backgroundColor: "white",
            borderRadius: "clamp(16px, 2.5vw, 32px)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
            overflow: "hidden",
          }}
        >
          {image2 ? (
            <img src={image2} alt="Meeting Glance 2" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
        </div>
        <div
          style={{
            position: "absolute",
            left: "5%",
            top: 0,
            width: "55%",
            height: "75%",
            backgroundColor: "white",
            borderRadius: "clamp(16px, 2.5vw, 32px)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
            zIndex: 10,
            overflow: "hidden",
          }}
        >
          {image1 ? (
            <img src={image1} alt="Meeting Glance 1" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main Merged Section ───────────────────────────────────────────────────────
/**
 * @param {object} data        - Skill config data (from page.js)
 * @param {object|null} apiMeeting - Pre-fetched meeting from server (ISR cached, never null on cold start)
 */
export default function MeetingVideoSection({ data, apiMeeting = null }) {
  const {
    titlePrefix,
    titleSuffix,
    meetings: MEETINGS = [],
  } = data?.meetingGlanceSectionData || {};

  const { videoUrl } = data?.meetingVideoData || {};

  const [api, setApi] = useState(null);

  // Helper to convert any YouTube URL to embed format
  const getEmbedUrl = (url) => {
    if (!url) return "";
    if (url.includes("embed")) return url;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    return url;
  };

  // Determine meetings and video url to display
  // apiMeeting is now pre-fetched server-side — no client fetch, no spinner
  let displayMeetings = MEETINGS;
  let displayVideoUrl = videoUrl;

  if (apiMeeting) {
    displayMeetings = [
      {
        heading: apiMeeting.title,
        subheading: apiMeeting.subtitle,
        image1: apiMeeting.image1,
        image2: apiMeeting.image2,
      },
    ];
    displayVideoUrl = apiMeeting.videoUrl;
  }

  useEffect(() => {
    if (!api || displayMeetings.length <= 1) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [api, displayMeetings]);

  // Nothing to render if no glance cards AND no video
  if (displayMeetings.length === 0 && !displayVideoUrl) return null;

  return (
    <section className="w-full bg-[#F5F5F5] py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-10">

        {/* ── Title ─────────────────────────────────────────────────────── */}
        <div className="text-left mb-2">
          <h2 className="leading-tight text-gray-950 tracking-tight">
            <span
              className="italic font-medium text-[#FF5622]"
              style={{
                fontFamily: "'PP Editorial New', serif",
                fontSize: "52px",
              }}
            >
              {apiMeeting ? "Meeting" : (titlePrefix || "A Glance")}{" "}
            </span>
            <span
              className="font-semibold"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: "32px",
              }}
            >
              {apiMeeting ? "Glance" : (titleSuffix || "at yesterday's Meeting")}
            </span>
          </h2>
        </div>

        {/* ── Glance Carousel ───────────────────────────────────────────── */}
        {displayMeetings.length > 0 && (
          <div className="w-full">
            {displayMeetings.length === 1 ? (
              <div className="max-w-[900px] mx-auto w-full">
                <MeetingGlanceCard
                  heading={displayMeetings[0].heading}
                  subheading={displayMeetings[0].subheading}
                  image1={displayMeetings[0].image1}
                  image2={displayMeetings[0].image2}
                />
              </div>
            ) : (
              <Carousel.Root
                opts={{ align: "center", loop: displayMeetings.length > 1 }}
                setApi={setApi}
                className="w-full relative group"
              >
                <Carousel.Content style={{ marginLeft: "-2rem" }}>
                  {displayMeetings.map((item, index) => (
                    <Carousel.Item
                      key={index}
                      className="min-w-0 shrink-0 grow-0"
                      style={{ flexBasis: "min(85%, 900px)", paddingLeft: "2rem" }}
                    >
                      <MeetingGlanceCard
                        heading={item.heading}
                        subheading={item.subheading}
                        image1={item.image1}
                        image2={item.image2}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel.Content>

                {displayMeetings.length > 1 && (
                  <div className="flex justify-center items-center mt-12">
                    <Carousel.IndicatorGroup className="flex gap-3 flex-wrap justify-center max-w-[50vw]">
                      {displayMeetings.map((_, index) => (
                        <Carousel.Indicator
                          key={index}
                          index={index}
                          className={({ isSelected }) =>
                            `h-2.5 rounded-full transition-all duration-300 ${
                              isSelected ? "w-8 bg-[#b0b0b0]" : "w-2.5 bg-[#e5e7eb]"
                            }`
                          }
                        />
                      ))}
                    </Carousel.IndicatorGroup>
                  </div>
                )}
              </Carousel.Root>
            )}
          </div>
        )}

        {/* ── Video Player ──────────────────────────────────────────────── */}
        {displayVideoUrl && (
          <div className="w-full max-w-[960px] mx-auto bg-gradient-to-br from-[#EAEAEA] to-[#D5D5D5] rounded-[40px] p-6 shadow-inner border border-gray-200/50 aspect-video relative overflow-hidden flex items-center justify-center">
            <iframe
              className="w-full h-full rounded-[30px] shadow-lg border-0"
              src={getEmbedUrl(displayVideoUrl)}
              title="A Glance at yesterday's Meeting Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        )}

      </div>
    </section>
  );
}
