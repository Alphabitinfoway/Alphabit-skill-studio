"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function FAQSection({ data }) {
  const { titleNormal = "Frequently Asked", titleItalic = "Questions", faqs: faqData = [] } = data?.faqSectionData || {};
  const [openId, setOpenId] = useState(1); // First item open by default

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#F5F5F5] py-16 md:py-24 font-cabinet">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#171717] font-bold tracking-tight" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
            {titleNormal}{" "}
            <span
              className="text-[#FF5622] italic font-medium"
              style={{ fontFamily: "'PP Editorial New', serif", fontSize: "1.6em" }}
            >
              {titleItalic}
            </span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="w-full border border-gray-400/80 rounded-[20px] overflow-hidden bg-transparent"
              >
                <div
                  onClick={() => toggleAccordion(faq.id)}
                  role="button"
                  tabIndex={0}
                  suppressHydrationWarning
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-[#171717] font-medium" style={{ fontSize: "clamp(15px, 1.2vw, 16px)" }}>
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 text-[#171717] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="px-6 pb-6 text-[#777777] leading-[1.65]" style={{ fontSize: "clamp(14px, 1vw, 15px)" }}>
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
