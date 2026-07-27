"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
    <section className="w-full bg-[#F5F5F5] py-10 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1300px] mx-auto w-full">
        {/* Title */}
        <div className="mb-10 md:mb-14">
          <h2
            className="text-[#111111] leading-tight tracking-tight flex items-baseline gap-x-3 flex-wrap"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: "32px",
              fontWeight: 800,
            }}
          >
            <span>Transparent</span>{" "}
            <span
              style={{
                fontFamily: "'PP Editorial New', serif",
                fontSize: "52px",
                color: "#FF5622",
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              Pricing
            </span>
          </h2>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Left: Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center items-center"
          >
            <div className="w-full max-w-[450px] relative rounded-[32px] overflow-hidden">
              <img
                src="/skill/pricing.webp"
                alt="Transparent Pricing"
                className="w-full h-auto object-contain select-none"
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
            <ul className="flex flex-col gap-6 md:gap-8 mb-10 md:mb-12">
              {points.map((text, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 group"
                >
                  <span className="flex-shrink-0  w-6 h-6 mt-0.5  flex items-center justify-center text-[#7143FE] ">
                    <img src="/black arrow.webp" alt="blackxarrow" className="w-6 h-6"/>
                  </span>
                  <span
                    className="text-[#111111]/80 text-[16px] md:text-[18px] leading-relaxed font-medium"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsDemoFormOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#7143FE] hover:bg-[#5f33eb] text-white rounded-full text-[15px] font-semibold transition-all duration-300 hover:scale-105 shadow-md shadow-[#7143FE]/20 cursor-pointer"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                <img src="/whiteArrow.webp" alt="whitearrow" className="w-6 h-6"/>
                <span>Book Free Demo Class</span>
              </button>

              <Link
                href="tel:+919409207327"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#7143FE] hover:bg-[#5f33eb] text-white rounded-full text-[15px] font-semibold transition-all duration-300 hover:scale-105 shadow-md shadow-[#7143FE]/20 cursor-pointer"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                <img src="/whiteArrow.webp" alt="whitearrow" className="w-6 h-6"/>
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
