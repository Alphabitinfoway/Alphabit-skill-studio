"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import DemoFormSection from "@/components/skills/DemoFormSection";
export default function HeroSection({ data }) {
    const heroSectionData = data?.heroSectionData || {};
    const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

    return (
        <section className="w-full bg-[#F5F5F5] min-h-[85vh] flex items-center px-2 md:px-10 lg:px-20 py-10">
            <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* ── Left: Content ─────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col"
                >
                    {/* Title */}
                    <h1 className="whitespace-nowrap text-[42px] sm:text-[54px] md:text-[64px] lg:text-[72px] leading-[1.05] tracking-tight text-[#111111]">
                        <span
                            className="italic font-medium text-[#E85B2A]"
                            style={{ fontFamily: "'PP Editorial New', serif" }}
                        >
                            {heroSectionData.titlePrefix}
                        </span>{" "}
                        <span className="font-medium" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                            {heroSectionData.titleSuffix}
                        </span>
                    </h1>

                    {/* Bullet Points */}
                    <ul className="mt-8 ms-16 flex flex-col gap-4">
                        {(heroSectionData.highlights || []).map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span className="mt-[7px] w-2 h-2 rounded-full bg-[#7143FE] flex-shrink-0" />
                                <span
                                    className="text-[#111111] text-[17px] font-medium leading-snug"
                                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                                >
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-wrap gap-3">
                        <button
                            onClick={() => setIsDemoFormOpen(true)}
                            suppressHydrationWarning
                            className="inline-flex items-center gap-2 px-4 py-3 bg-[#7143FE] hover:bg-[#5f33eb] text-white rounded-full text-[14px] font-semibold transition-all duration-300 hover:scale-105 shadow-md shadow-[#7143FE]/20 cursor-pointer"
                            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                        >
                            {/* Phone icon */}
                            <Image src="/whiteArrow.webp" alt="whiteArrow" width={20} height={20} className="w-5 h-5" />
                            <span className="py-1">{heroSectionData.primaryCtaText}</span>
                        </button>
                        <Link
                            href={`tel:${heroSectionData.phoneNumber}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#7143FE] hover:bg-[#5f33eb] text-white rounded-full text-[14px] font-semibold transition-all duration-300 hover:scale-105 shadow-md shadow-[#7143FE]/20"
                            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {heroSectionData.secondaryCtaText}
                        </Link>
                    </div>
                </motion.div>

                {/* ── Right: Subtract Shape ──────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    className="flex justify-center items-center w-full"
                >
                    <div className="w-full max-w-[480px] mt-12 ms-16 relative">
                        {heroSectionData.heroImage && (
                            <Image
                                src={heroSectionData.heroImage}
                                alt={heroSectionData.titlePrefix || "Skill Hero"}
                                width={480}
                                height={480}
                                priority
                                className="w-full h-auto object-contain"
                            />
                        )}
                    </div>
                </motion.div>

            </div>

            {/* Popup Form */}
            <DemoFormSection
                isOpen={isDemoFormOpen}
                onClose={() => setIsDemoFormOpen(false)}
            />
        </section>
    );
}
