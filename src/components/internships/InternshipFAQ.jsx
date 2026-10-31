"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InternshipFAQ({ data }) {
  const {
    headingNormal = "Frequently Asked",
    headingItalic = "Questions",
    description,
    items = []
  } = data?.faqs || {};

  const [openId, setOpenId] = useState(1); // First item open by default

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#F5F5F5] py-14 sm:py-18 md:py-20 px-4 sm:px-6 font-cabinet">
      <div className="max-w-[900px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="leading-tight tracking-tight text-[#111111] flex flex-wrap items-baseline justify-center gap-x-2.5 sm:gap-x-3.5">
            <span className="font-cabinet font-semibold text-[26px] sm:text-[36px] md:text-[40px]">
              {headingNormal}
            </span>
            <span
              className="italic font-medium text-[#FF5622] text-[34px] sm:text-[46px] md:text-[52px] leading-none"
              style={{ fontFamily: "'PP Editorial New', serif" }}
            >
              {headingItalic}
            </span>
          </h2>
          {description && (
            <p className="mt-2 text-[#666666] text-[15px] sm:text-[16px] max-w-xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3.5 sm:gap-4">
          {items.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`w-full rounded-[20px] transition-colors border overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#7143FE]/30 shadow-[0_4px_16px_rgba(113,67,254,0.06)]"
                    : "bg-white/80 border-gray-300 hover:border-gray-400"
                }`}
              >
                <div
                  onClick={() => toggleAccordion(faq.id)}
                  role="button"
                  tabIndex={0}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none cursor-pointer select-none"
                >
                  <span className="text-[#171717] font-semibold text-[15px] sm:text-[17px] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 text-[#171717] transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-[#7143FE]" : ""
                    }`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-[#666666] text-[14.5px] sm:text-[15.5px] leading-relaxed border-t border-gray-100">
                        {faq.answer}
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
