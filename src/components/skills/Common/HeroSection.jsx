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
        <section className="w-full bg-[#F5F5F5] min-h-[auto] lg:min-h-[85vh] flex items-center px-4 sm:px-6 md:px-10 lg:px-20 pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-10 sm:pb-16 font-cabinet">
            <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* ── Left: Content ─────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col w-full text-left"
                >
                    {/* Title */}
                    <h1 className="text-left leading-tight sm:leading-[0.8] tracking-tight text-[#111111] flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                        <span className="skill-hero-title-italic">
                            {heroSectionData.titlePrefix}
                        </span>
                        <span className="skill-hero-title-normal">
                            {heroSectionData.titleSuffix}
                        </span>
                    </h1>

                    {/* Description */}
                    {heroSectionData.description && (
                        <p
                            className="mt-3.5 sm:mt-5 text-[#444444] text-[14px] sm:text-[16px] leading-relaxed [&>strong]:font-bold [&>strong]:text-[#111111]"
                            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                            dangerouslySetInnerHTML={{ __html: heroSectionData.description }}
                        />
                    )}

                    {/* Bullet Points */}
                    <ul className="mt-4 sm:mt-6 flex flex-col gap-2.5 sm:gap-3">
                        {(heroSectionData.highlights || []).map((item) => (
                            <li key={item} className="flex items-start gap-2.5 sm:gap-3">
                                <span className="mt-2 w-2 h-2 rounded-full bg-[#7143FE] flex-shrink-0" />
                                <span
                                    className="text-[#111111] text-[14.5px] sm:text-[17px] font-medium leading-snug"
                                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                                >
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Buttons */}
                    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <button
                            onClick={() => setIsDemoFormOpen(true)}
                            suppressHydrationWarning
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 bg-[#7143FE] hover:bg-[#5f33eb] text-white rounded-full text-[14px] sm:text-[15px] font-semibold transition-all duration-300 hover:scale-105 shadow-md shadow-[#7143FE]/20 cursor-pointer text-center"
                            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                        >
                            {/* Phone icon */}
                            <Image src="/whiteArrow.webp" alt="whiteArrow" width={20} height={20} className="w-4.5 h-4.5 sm:w-5 sm:h-5 shrink-0" />
                            <span>{heroSectionData.primaryCtaText}</span>
                        </button>
                        <Link
                            href={`tel:${heroSectionData.phoneNumber}`}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 bg-[#7143FE] hover:bg-[#5f33eb] text-white rounded-full text-[14px] sm:text-[15px] font-semibold transition-all duration-300 hover:scale-105 shadow-md shadow-[#7143FE]/20 text-center"
                            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                        >
                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>{heroSectionData.secondaryCtaText}</span>
                        </Link>
                    </div>
                </motion.div>

                {/* ── Right: Subtract Shape (Hidden on Mobile) ───────────── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    className="hidden lg:flex justify-center items-center w-full"
                >
                    <div className="w-full max-w-[680px] mt-12 ms-16 relative">
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
