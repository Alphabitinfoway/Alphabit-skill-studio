"use client";

import React, { useEffect, useState } from "react";
import { Carousel } from "@/components/application/carousel/carousel-base";
// Removed static import

function MeetingGlanceCard({ heading, subheading }) {
  return (
    <div
      className="w-full flex items-center justify-between p-8 md:p-16 rounded-[40px]"
      style={{
        height: "clamp(280px, 34vw, 390px)",
        background: "linear-gradient(to bottom, #F5F5F5 0%, #e5e7eb 100%)",
      }}
    >
      <div className="flex flex-col gap-2">
        <h3
          className="text-3xl md:text-4xl font-bold text-[#171717] font-cabinet leading-tight"
        >
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
          }}
        />
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
          }}
        />
      </div>
    </div>
  );
}

export default function MeetingGlanceSection({ data }) {
  const { titlePrefix, titleSuffix, meetings: MEETINGS = [] } = data?.meetingGlanceSectionData || {};
  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api || MEETINGS.length <= 1) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api, MEETINGS]);

  if (MEETINGS.length === 0) return null;

  return (
    <section className="w-full bg-[#F5F5F5] py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
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

        {/* Gray Container Block with Carousel or Centered Card */}
        <div className="w-full">
          {MEETINGS.length === 1 ? (
            <div className="max-w-[900px] mx-auto w-full">
              <MeetingGlanceCard
                heading={MEETINGS[0].heading}
                subheading={MEETINGS[0].subheading}
              />
            </div>
          ) : (
            <Carousel.Root opts={{ align: "center", loop: MEETINGS.length > 1 }} setApi={setApi} className="w-full relative group">
              <Carousel.Content style={{ marginLeft: "-2rem" }}>
                {MEETINGS.map((item, index) => (
                  <Carousel.Item
                    key={index}
                    className="min-w-0 shrink-0 grow-0"
                    style={{ flexBasis: "min(85%, 900px)", paddingLeft: "2rem" }}
                  >
                    <MeetingGlanceCard
                      heading={item.heading}
                      subheading={item.subheading}
                    />
                  </Carousel.Item>
                ))}
              </Carousel.Content>

              {MEETINGS.length > 1 && (
                <div className="flex justify-center items-center mt-12">
                  <Carousel.IndicatorGroup className="flex gap-3 flex-wrap justify-center max-w-[50vw]">
                    {MEETINGS.map((_, index) => (
                      <Carousel.Indicator
                        key={index}
                        index={index}
                        className={({ isSelected }) =>
                          `h-2.5 rounded-full transition-all duration-300 ${isSelected ? "w-8 bg-[#b0b0b0]" : "w-2.5 bg-[#e5e7eb]"}`
                        }
                      />
                    ))}
                  </Carousel.IndicatorGroup>
                </div>
              )}
            </Carousel.Root>
          )}
        </div>

      </div>
    </section>
  );
}
