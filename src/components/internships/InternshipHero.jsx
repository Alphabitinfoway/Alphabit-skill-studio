"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function InternshipHero({ data, onApplyClick }) {
  const {
    titlePrefix = "Python",
    titleSuffix = "Internship",
    tagline,
    heroImage,
    highlights = [],
    primaryCtaText = "Apply Now",
    secondaryCtaText = "Call Us",
    phoneNumber = "+919409207327",
    badgeText = "Spring & Summer 2026 Batch Open"
  } = data?.hero || {};

  return (
    <section className="w-full bg-[#F5F5F5] pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-20 font-cabinet overflow-hidden">
      <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge */}
          {badgeText && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0E0E0] shadow-sm mb-5 text-[12px] sm:text-[13px] font-semibold text-[#7C3AED]">
              <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>{badgeText}</span>
            </div>
          )}

          {/* Heading */}
          <h1 className="leading-tight tracking-tight text-[#111111] flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-cabinet font-semibold text-[38px] sm:text-[52px] md:text-[62px] lg:text-[70px]">
              {titlePrefix}
            </span>
            <span
              className="italic font-medium text-[#FF5622] text-[46px] sm:text-[62px] md:text-[74px] lg:text-[84px] leading-none"
              style={{ fontFamily: "'PP Editorial New', serif" }}
            >
              {titleSuffix}
            </span>
          </h1>

          {/* Tagline */}
          {tagline && (
            <p className="mt-4 sm:mt-5 text-[#555555] text-[15px] sm:text-[18px] md:text-[19px] leading-relaxed max-w-2xl">
              {tagline}
            </p>
          )}

          {/* Highlights Bullets */}
          {highlights.length > 0 && (
            <ul className="mt-6 sm:mt-7 flex flex-col gap-2.5 sm:gap-3 w-full">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#7143FE] flex-shrink-0" />
                  <span className="text-[#222222] text-[14.5px] sm:text-[16px] font-medium leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
            <button
              onClick={onApplyClick}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 bg-[#7143FE] hover:bg-[#5f33eb] text-white rounded-full text-[15px] sm:text-[16px] font-bold transition-all duration-300 hover:scale-105 shadow-md shadow-[#7143FE]/25 cursor-pointer text-center"
            >
              <img
                src="/whiteArrow.webp"
                alt="arrow"
                className="w-4.5 h-4.5 object-contain shrink-0"
              />
              <span>{primaryCtaText}</span>
            </button>

            <Link
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 bg-white hover:bg-gray-50 text-[#111111] border border-[#DCDCDC] rounded-full text-[15px] sm:text-[16px] font-semibold transition-all duration-300 hover:border-[#7143FE] hover:text-[#7143FE] shadow-sm text-center"
            >
              <Phone className="w-4 h-4 text-[#7143FE] shrink-0" />
              <span>{secondaryCtaText}</span>
            </Link>

            <a
              href="#syllabus"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:py-3.5 text-[#555555] hover:text-[#7143FE] text-[14px] sm:text-[15px] font-medium transition-colors text-center"
            >
              <span>Explore Topics</span>
              <ArrowUpRight className="w-4 h-4 rotate-45" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center w-full relative"
        >
          <div className="relative w-full max-w-[460px] lg:max-w-[520px]">
            {/* Subtle background glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#7143FE]/15 to-[#FF5622]/15 rounded-3xl blur-2xl -z-10" />

            {heroImage ? (
              <img
                src={heroImage}
                alt={`${titlePrefix} ${titleSuffix}`}
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-transform duration-500"
              />
            ) : (
              <img
                src="/subtract.webp"
                alt="Internship Hero"
                className="w-full h-auto object-contain"
              />
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
