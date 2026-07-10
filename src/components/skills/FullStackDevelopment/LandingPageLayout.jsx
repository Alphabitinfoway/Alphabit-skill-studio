"use client";

import React from "react";
import CourseFeatures from "./CourseFeatures";
import TrackSelector from "./TrackSelector";
import DemoFormSection from "@/components/skills/DemoFormSection";

export default function LandingPageLayout() {
  return (
    <section className="w-full bg-[#F5F5F5] py-16 px-4 sm:px-6 lg:px-8">
      {/* 
        Parent Container:
        - Must have items-start so sticky child does not stretch.
        - Must NOT have overflow-hidden or overflow-auto.
      */}
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row gap-10 items-start">
        
        {/* Left Column (Scrollable Content) */}
        <div className="flex-1 w-full flex flex-col">
          <CourseFeatures />
          <TrackSelector />
        </div>

        {/* Right Column (Sticky Sidebar) */}
        <div className="w-full md:w-auto md:sticky md:top-28 flex-shrink-0 z-30">
          <DemoFormSection isInline={true} defaultCourse="Full Stack Development" />
        </div>

      </div>
    </section>
  );
}


