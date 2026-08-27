"use client";

import React from "react";
import CourseFeatures from "./CourseFeatures";
import TrackSelector from "./TrackSelector";
import DemoFormSection from "@/components/skills/DemoFormSection";

export default function LandingPageLayout({ data }) {
  const courseName = data?.heroSectionData 
    ? `${data.heroSectionData.titlePrefix} ${data.heroSectionData.titleSuffix}`.trim()
    : "Full Stack Development";

  return (
    <section className="w-full bg-[#F5F5F5] py-10 sm:py-16 px-4 sm:px-6 lg:px-8 font-cabinet">
      {/* 
        Parent Container:
        - Must have items-start so sticky child does not stretch.
        - Must NOT have overflow-hidden or overflow-auto.
      */}
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row gap-8 sm:gap-10 items-start">
        
        {/* Left Column (Scrollable Content) */}
        <div className="flex-1 w-full flex flex-col">
          <CourseFeatures data={data} />
          <TrackSelector data={data} />
        </div>

        {/* Right Column (Sticky Sidebar) */}
        <div className="w-full md:w-auto md:sticky md:top-28 flex-shrink-0 z-30">
          <DemoFormSection isInline={true} defaultCourse={courseName} />
        </div>

      </div>
    </section>
  );
}


