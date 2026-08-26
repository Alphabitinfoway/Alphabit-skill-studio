"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import DemoFormSection from "@/components/skills/DemoFormSection";

export default function PricingSection() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  const points = [
    "No Cost EMI available from day one",
    "Zero hidden charges – one total fee covers everything",
    "Fee covers: all modules, live projects, internship, placement support & certification",
    "Flexible payment plans for students from all financial backgrounds",
  ];

  return (
    <section className="w-full bg-[#F5F5F5] py-10 sm:py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1300px] mx-auto w-full">
        {/* Title - Centered on Mobile, Left-aligned on Desktop */}
        <div className="mb-8 md:mb-14 text-center lg:text-left">
          <h2
            className="text-[#111111] leading-tight tracking-tight inline-flex items-baseline justify-center lg:justify-start gap-x-2.5 sm:gap-x-3 flex-wrap"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
            }}
          >
            <span className="text-[28px] sm:text-[36px] lg:text-[40px] font-extrabold text-[#111111]">
              Transparent
            </span>{" "}
            <span
              className="text-[40px] sm:text-[48px] lg:text-[54px] text-[#FF5622] italic font-normal"
              style={{
                fontFamily: "'PP Editorial New', serif",
              }}
            >
              Pricing
            </span>
          </h2>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Left: Image Container with White Card Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center items-center"
          >
            <div className="w-full max-w-[450px] relative bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100/80 flex items-center justify-center">
              <img
                src="/skill/pricing.webp"
                alt="Transparent Pricing"
                className="w-full h-auto object-contain select-none max-h-[300px] sm:max-h-[380px]"
              />
            </div>
          </motion.div>

          {/* Right: Key Details & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <ul className="flex flex-col gap-5 sm:gap-7 mb-8 sm:mb-12">
              {points.map((text, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3.5 group"
                >
                  <span className="flex-shrink-0 mt-0.5">
                    <ArrowUpRight className="w-5 h-5 text-[#333333] stroke-[2]" />
                  </span>
                  <span
                    className="text-[#111111]/85 text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed font-medium"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Buttons - Side by Side Pill Buttons matching mockup */}
            <div className="flex flex-row items-center gap-3 sm:gap-4 w-full">
              <button
                onClick={() => setIsDemoFormOpen(true)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 sm:px-6 py-3.5 bg-[#7143FE] hover:bg-[#5f33eb] text-white rounded-full text-[13px] sm:text-[15px] font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-[#7143FE]/20 cursor-pointer whitespace-nowrap"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                <img src="/whiteArrow.webp" alt="whitearrow" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"/>
                <span>Book Free Demo Class</span>
              </button>

              <Link
                href="tel:+919409207327"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 sm:px-6 py-3.5 bg-[#7143FE] hover:bg-[#5f33eb] text-white rounded-full text-[13px] sm:text-[15px] font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-[#7143FE]/20 cursor-pointer whitespace-nowrap"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                <img src="/whiteArrow.webp" alt="whitearrow" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"/>
                <span>Call Us</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Demo Form Popup Modal */}
      <DemoFormSection
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />
    </section>
  );
}

