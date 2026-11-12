"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award, FileCheck, Layers, Users, Compass, Sparkles,
  BookOpen, Briefcase, Code2, Star, Target, Zap, Shield, GraduationCap,
} from "lucide-react";

// Exact-match icon map (Python internship uses these names)
const BENEFIT_ICONS = {
  Award,
  FileCheck,
  Layers,
  Users,
  Compass,
  Sparkles,
  BookOpen,
  Briefcase,
  Code2,
  Star,
  Target,
  Zap,
  Shield,
  GraduationCap,
};

// Keyword-based fallback for backend data where icon may be a label/text
function resolveBenefitIcon(iconValue = "") {
  if (BENEFIT_ICONS[iconValue]) return BENEFIT_ICONS[iconValue];
  const v = iconValue.toLowerCase();
  if (v.includes("cert") || v.includes("award") || v.includes("nsdc") || v.includes("iso")) return Award;
  if (v.includes("lor") || v.includes("letter") || v.includes("recommend") || v.includes("file")) return FileCheck;
  if (v.includes("project") || v.includes("live") || v.includes("production") || v.includes("layer")) return Layers;
  if (v.includes("mentor") || v.includes("review") || v.includes("1-on-1") || v.includes("user")) return Users;
  if (v.includes("interview") || v.includes("placement") || v.includes("career") || v.includes("job")) return Compass;
  if (v.includes("communit") || v.includes("alumni") || v.includes("network") || v.includes("spark")) return Sparkles;
  if (v.includes("learn") || v.includes("book") || v.includes("course") || v.includes("content")) return BookOpen;
  if (v.includes("job") || v.includes("work") || v.includes("employ") || v.includes("brief")) return Briefcase;
  if (v.includes("secur") || v.includes("safe") || v.includes("protect") || v.includes("shield")) return Shield;
  if (v.includes("speed") || v.includes("fast") || v.includes("energy") || v.includes("zap")) return Zap;
  if (v.includes("goal") || v.includes("target") || v.includes("aim")) return Target;
  return Star; // universal fallback
}

export default function InternshipBenefits({ data }) {
  const {
    headingNormal = "Exclusive",
    headingItalic = "Internship Benefits",
    description,
    items = []
  } = data?.benefits || {};

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

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((benefit, idx) => {
            const Icon = resolveBenefitIcon(benefit.icon || "");

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E5E5E5] shadow-sm hover:shadow-lg hover:border-[#7143FE]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#7143FE]/10 text-[#7C3AED] flex items-center justify-center shrink-0 mb-5 group-hover:bg-[#7143FE] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#111111] mb-2.5 leading-snug">
                  {benefit.title}
                </h3>

                <p className="text-[14px] sm:text-[15px] text-[#555555] leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
