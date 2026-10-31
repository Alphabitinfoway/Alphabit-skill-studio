"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Repeat, Code2, CheckSquare } from "lucide-react";

const ICON_MAP = {
  GraduationCap,
  Briefcase,
  Repeat,
  Code2,
};

export default function InternshipEligibility({ data }) {
  const {
    headingNormal = "Eligibility &",
    headingItalic = "Who Can Apply",
    description,
    cards = [],
    prerequisites = []
  } = data?.eligibility || {};

  return (
    <section className="w-full bg-[#F5F5F5] py-14 sm:py-18 md:py-20 px-4 sm:px-6 lg:px-20 font-cabinet">
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

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {cards.map((card, idx) => {
            const Icon = ICON_MAP[card.icon] || GraduationCap;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E5E5E5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#7143FE]/10 text-[#7C3AED] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-[#111111]">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-[14px] sm:text-[15px] text-[#555555] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {card.requirements && (
                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-start gap-2 text-[13px] text-[#666666]">
                    <span className="font-semibold text-[#111111] shrink-0">Criteria:</span>
                    <span>{card.requirements}</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Prerequisites Box */}
        {prerequisites.length > 0 && (
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white to-[#FAF8FF] border border-[#E0D8F8] shadow-sm">
            <h3 className="text-[17px] sm:text-[19px] font-bold text-[#111111] mb-4 flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-[#7143FE]" />
              <span>Program Prerequisites &amp; Setup Requirements</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {prerequisites.map((req, rIdx) => (
                <div key={rIdx} className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#7143FE] mt-2 shrink-0" />
                  <span className="text-[14px] sm:text-[15px] text-[#444444] leading-relaxed">
                    {req}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
