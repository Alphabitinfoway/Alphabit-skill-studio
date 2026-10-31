"use client";

import React, { useState } from "react";
import InternshipHero from "./InternshipHero";
import InternshipQuickDetails from "./InternshipQuickDetails";
import InternshipOverview from "./InternshipOverview";
import InternshipSyllabus from "./InternshipSyllabus";
import InternshipProjects from "./InternshipProjects";
import InternshipSkills from "./InternshipSkills";
import InternshipEligibility from "./InternshipEligibility";
import InternshipBenefits from "./InternshipBenefits";
import InternshipFAQ from "./InternshipFAQ";
import InternshipCTA from "./InternshipCTA";
import DemoFormSection from "@/components/skills/DemoFormSection";

export default function InternshipTemplate({ data }) {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const handleApplyClick = () => {
    setIsApplyOpen(true);
  };

  const courseTitle = data?.title || "Python Internship";

  return (
    <div className="w-full bg-[#F5F5F5] flex flex-col items-center">
      {/* 1. Hero Section */}
      <InternshipHero data={data} onApplyClick={handleApplyClick} />

      {/* 2. Quick Details Cards */}
      <InternshipQuickDetails data={data} />

      {/* 3. Overview Section */}
      <InternshipOverview data={data} />

      {/* 4. Syllabus / Topics Covered */}
      <InternshipSyllabus data={data} />

      {/* 5. Projects Students Will Build */}
      <InternshipProjects data={data} />

      {/* 6. Skills You Will Master */}
      <InternshipSkills data={data} />

      {/* 7. Eligibility & Who Can Apply */}
      <InternshipEligibility data={data} />

      {/* 8. Exclusive Benefits */}
      <InternshipBenefits data={data} />

      {/* 9. FAQ Section */}
      <InternshipFAQ data={data} />

      {/* 10. Bottom CTA Section */}
      <InternshipCTA data={data} onApplyClick={handleApplyClick} />

      {/* Application / Inquiry Modal Form */}
      <DemoFormSection
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        defaultCourse={courseTitle}
      />
    </div>
  );
}
