"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Layers, Terminal } from "lucide-react";

export default function InternshipSyllabus({ data }) {
  const {
    headingNormal = "Curriculum &",
    headingItalic = "Topics Covered",
    description,
    modules = []
  } = data?.syllabus || {};

  // Keep first module open by default
  const [openModule, setOpenModule] = useState(0);

  const toggleModule = (idx) => {
    setOpenModule((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section id="syllabus" className="w-full bg-[#F5F5F5] py-14 sm:py-18 md:py-20 px-4 sm:px-6 lg:px-20 font-cabinet">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-10 sm:mb-12">
          <h2 className="leading-tight tracking-tight text-[#111111] flex flex-wrap items-baseline gap-x-2.5 sm:gap-x-3.5">
            <span className="font-cabinet font-semibold text-[26px] sm:text-[38px] md:text-[44px]">
              {headingNormal}
            </span>
            <span
              className="italic font-medium text-[#FF5622] text-[34px] sm:text-[48px] md:text-[56px] leading-none"
              style={{ fontFamily: "'PP Editorial New', serif" }}
            >
              {headingItalic}
            </span>
          </h2>
          {description && (
            <p className="mt-2 sm:mt-3 text-[#666666] text-[15px] sm:text-[17px] max-w-2xl">
              {description}
            </p>
          )}
        </div>

        {/* Modules List */}
        <div className="flex flex-col gap-4">
          {modules.map((mod, idx) => {
            const isOpen = openModule === idx;

            return (
              <div
                key={mod.num || idx}
                className={`w-full rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#7143FE]/30 shadow-[0_6px_24px_rgba(113,67,254,0.06)]"
                    : "bg-white/80 border-[#E5E5E5] hover:border-[#D5D5D5] shadow-sm"
                }`}
              >
                {/* Module Header Bar */}
                <div
                  onClick={() => toggleModule(idx)}
                  role="button"
                  tabIndex={0}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3.5 sm:gap-5 flex-1 pr-4">
                    <span
                      className={`text-[14px] sm:text-[16px] font-extrabold px-3 py-1 rounded-xl shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#7143FE] text-white"
                          : "bg-gray-100 text-[#444444]"
                      }`}
                    >
                      {mod.num}
                    </span>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <h3 className="text-[16px] sm:text-[19px] font-bold text-[#111111]">
                        {mod.title}
                      </h3>
                      {mod.duration && (
                        <span className="text-[12px] font-semibold text-[#7C3AED] bg-[#7143FE]/10 px-2.5 py-0.5 rounded-full w-fit">
                          {mod.duration}
                        </span>
                      )}
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-gray-200 text-[#333333] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#7143FE]/10 text-[#7143FE] border-[#7143FE]/30" : "bg-white"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-gray-100">
                        {mod.summary && (
                          <p className="text-[14px] sm:text-[15px] text-[#555555] mb-4 italic">
                            {mod.summary}
                          </p>
                        )}

                        {/* Bullet Topics */}
                        <div className="mb-4">
                          <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#888888] mb-2.5 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-[#7143FE]" />
                            <span>Core Topics &amp; Practice</span>
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                            {mod.topics.map((topic, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2.5">
                                <span className="text-[#7143FE] mt-1 shrink-0">
                                  <svg
                                    className="w-3.5 h-3.5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                                <span className="text-[#333333] text-[13.5px] sm:text-[14.5px] leading-snug">
                                  {topic}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tools / Tech Stack */}
                        {mod.tools && mod.tools.length > 0 && (
                          <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-2">
                            <span className="text-[12px] font-bold text-[#777777] flex items-center gap-1">
                              <Terminal className="w-3.5 h-3.5 text-[#7143FE]" />
                              <span>Stack:</span>
                            </span>
                            {mod.tools.map((tool, toolIdx) => (
                              <span
                                key={toolIdx}
                                className="text-[12px] font-medium bg-gray-100 text-[#444444] px-2.5 py-0.5 rounded-md"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
