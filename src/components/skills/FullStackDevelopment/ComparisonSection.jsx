"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  const categories = [
    {
      id: "mentors",
      label: "Mentors",
      other: "Academics reading from slides",
      us: (
        <>
          Working developers from{" "}
          <span className="text-[#7C3AED] font-semibold">
            IT companies & startups
          </span>
        </>
      ),
    },
    {
      id: "style",
      label: "Learning Style",
      other: "Recoded videos, copied code",
      us: (
        <>
          <span className="text-[#7C3AED] font-semibold">100% hands-on</span>,
          live, mentor-guided sessions
        </>
      ),
    },
    {
      id: "portfolio",
      label: "Portfolio",
      other: "Certificate recruiters ignore",
      us: (
        <>
          <span className="text-[#7C3AED] font-semibold">
            5+ deployed Github projects
          </span>{" "}
          with live URLs
        </>
      ),
    },
    {
      id: "internship",
      label: "Internship",
      other: "Not Included",
      us: (
        <>
          Full Stack internship-{" "}
          <span className="text-[#7C3AED] font-semibold">online & offline</span>{" "}
          options
        </>
      ),
    },
    {
      id: "placement",
      label: "Placement",
      other: "Resume forwarding only",
      us: (
        <>
          <span className="text-[#7C3AED] font-semibold">300+ partners</span>,
          direct referrals, mock interviews
        </>
      ),
    },
    {
      id: "certification",
      label: "Certification",
      other: "Private, unrecognized",
      us: (
        <>
          <span className="text-[#7C3AED] font-semibold">NSDC-recognised</span>{" "}
          government certification
        </>
      ),
    },
    {
      id: "fees",
      label: "Fees",
      other: "Hidden Charges, no EMI",
      us: (
        <>
          Transparent pricing,{" "}
          <span className="text-[#7C3AED] font-semibold">No Cost EMI</span>,
          zero hidden fees
        </>
      ),
    },
    {
      id: "support",
      label: "Support after course",
      other: "None",
      us: (
        <>
          <span className="text-[#7C3AED] font-semibold">
            Lifetime doubt support
          </span>{" "}
          for alumni
        </>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [hoveredRow, setHoveredRow] = useState(null);

  const activeCategory = categories.find((cat) => cat.id === activeTab);

  return (
    <section className="w-full bg-[#F5F5F5] py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-10">

        {/* Title */}
        <div className="text-center">
          <h2 className="leading-[1.1] text-[#111111] tracking-tight">
            <span
              className="font-semibold"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: "40px",
              }}
            >
              Why Students Choose Our{" "}
            </span>
            <span
              className="italic font-medium text-[#FF5622]"
              style={{
                fontFamily: "'PP Editorial New', serif",
                fontSize: "52px",
              }}
            >
              Full Stack Training
            </span>
          </h2>
        </div>

        {/* Desktop Comparison Grid (Hidden on Mobile/Tablet) */}
        <div className="hidden md:grid grid-cols-[280px_1fr_1fr] gap-x-8 items-start mt-6">

          {/* Column 1 Header: WHAT MATTERS */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200/60 shadow-sm self-stretch flex flex-col">
            <div className="text-[20px] font-bold text-[#7C3AED] uppercase tracking-widest mb-6 border-b border-[#7C3AED]/20 pb-3">
              WHAT MATTERS
            </div>
            <div className="flex flex-col gap-0">
              {categories.map((cat, idx) => (
                <div
                  key={cat.id}
                  className={`py-4 text-[18px] font-medium transition-colors duration-200 ${hoveredRow === idx ? "text-[#7C3AED]" : "text-gray-700"
                    } ${idx !== categories.length - 1 ? " border-gray-100" : ""}`}
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  onMouseEnter={() => setHoveredRow(idx)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  {cat.label}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 Header: Other Institutes */}
          <div className="flex flex-col">
            <div className="bg-[#B3B3B3] text-white text-center py-3.5 px-6 rounded-2xl font-semibold text-[20px] mb-6 shadow-sm">
              Other Institutes
            </div>
            <div className="flex flex-col bg-white rounded-3xl p-6 border border-gray-200/60 shadow-sm">
              {categories.map((cat, idx) => (
                <div
                  key={cat.id}
                  className={`flex items-center gap-4 py-4 min-h-[58px] transition-colors duration-200 ${hoveredRow === idx ? "bg-gray-50/55" : ""
                    } ${idx !== categories.length - 1 ? "border-b border-gray-100" : ""}`}
                  onMouseEnter={() => setHoveredRow(idx)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <div className="w-6 h-6 rounded-full bg-[#FF5252] flex items-center justify-center text-white shrink-0 shadow-sm shadow-[#FF5252]/20">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[16px] font-medium text-gray-600">
                    {cat.other}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 Header: Alphabet Skill */}
          <div className="flex flex-col">
            <div className="bg-[#7C3AED] text-white text-center py-3.5 px-6 rounded-2xl font-semibold text-[20px] mb-6 shadow-md shadow-[#7C3AED]/20">
              Alphabit Skill
            </div>
            <div className="flex flex-col bg-white rounded-3xl p-6 border border-purple-100 shadow-lg shadow-purple-500/5">
              {categories.map((cat, idx) => (
                <div
                  key={cat.id}
                  className={`flex items-center gap-4 py-4 min-h-[58px] transition-colors duration-200 ${hoveredRow === idx ? "bg-purple-50/30" : ""
                    } ${idx !== categories.length - 1 ? "border-b border-gray-100" : ""}`}
                  onMouseEnter={() => setHoveredRow(idx)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center text-white shrink-0 shadow-sm shadow-[#10B981]/20">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[16px] font-medium text-gray-700">
                    {cat.us}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile / Tablet Accordion/Tabbed comparison (Visible only on smaller screens) */}
        <div className="flex md:hidden flex-col gap-6">
          {/* Scrollable Tabs */}
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none snap-x snap-mandatory">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap snap-align-start transition-all duration-300 ${activeTab === cat.id
                    ? "bg-[#F9FAFB] text-white shadow-md shadow-[#7C3AED]/20"
                    : "bg-white text-gray-600 border border-gray-200"
                  }`}
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Tab Content comparison cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Other Institutes */}
            <motion.div
              key={`other-${activeTab}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex flex-col gap-3"
            >
              <div className="bg-[#B3B3B3] text-white text-xs font-bold px-3 py-1.5 rounded-lg w-max uppercase">
                Other Institutes
              </div>
              <div className="flex items-start gap-3 mt-2">
                <div className="w-6.5 h-6.5 rounded-full bg-[#FF5252] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm shadow-[#FF5252]/25">
                  <X className="w-4 h-4 stroke-[3]" />
                </div>
                <p className="text-[16px] text-gray-600 font-medium">
                  {activeCategory.other}
                </p>
              </div>
            </motion.div>

            {/* Alphabet Skill */}
            <motion.div
              key={`us-${activeTab}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="bg-white border border-purple-100 rounded-2xl p-5 shadow-md shadow-purple-500/5 flex flex-col gap-3"
            >
              <div className="bg-[#7C3AED] text-white text-xs font-bold px-3 py-1.5 rounded-lg w-max uppercase">
                Alphabet Skill
              </div>
              <div className="flex items-start gap-3 mt-2">
                <div className="w-6.5 h-6.5 rounded-full bg-[#10B981] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm shadow-[#10B981]/25">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <p className="text-[16px] text-gray-700 font-medium">
                  {activeCategory.us}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
