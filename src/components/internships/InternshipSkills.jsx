"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Wrench, Cpu } from "lucide-react";

const CATEGORY_ICONS = {
  "Core & Language": Code,
  "Frameworks & APIs": Server,
  "Databases & Storage": Database,
  "DevOps & Tools": Wrench,
  "Architecture & Professional": Cpu,
};

export default function InternshipSkills({ data }) {
  const {
    headingNormal = "Industry Skills",
    headingItalic = "You Will Master",
    description,
    categories = []
  } = data?.skills || {};

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

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => {
            const Icon = CATEGORY_ICONS[category.name] || Code;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-3xl bg-white border border-[#E5E5E5] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#7143FE]/10 text-[#7C3AED] flex items-center justify-center shrink-0">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-[17px] font-bold text-[#111111]">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8F8FA] border border-gray-200/80 text-[13px] font-medium text-[#333333] hover:border-[#7143FE]/30 hover:text-[#7143FE] hover:bg-[#F3EEFF] transition-all"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7143FE]/60" />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
