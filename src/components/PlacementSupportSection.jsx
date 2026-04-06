"use client";

import React from "react";

export default function PlacementSupportSection() {
    return (
        <section className="w-full bg-[#F5F5F5] py-8 md:py-[80px]  border-b border-gray-100 font-cabinet">

            <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-3">

                {/* LEFT TEXT */}
                <div className="flex justify-center md:justify-end md:flex-[1.3] pr-2 md:pr-10">

                    <div className="flex flex-col w-fit">
                        {/* Advance Your (Shifted to the right) */}
                        <div
                            className="text-[#FF5622] italic font-[500] text-[32px] sm:text-[40px] md:text-[48px] leading-[1.05] ml-[20px] sm:ml-[40px] md:ml-[100px]"
                            style={{ fontFamily: "'PP Editorial New', serif" }}
                        >
                            Advance Your
                        </div>

                        {/* Tech Career + with Dedicated Placement Support */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 mt-0 md:mt-1">
                            <div
                                className="text-[#FF5622] italic font-[500] text-[32px] sm:text-[40px] md:text-[48px] leading-[1.05]"
                                style={{ fontFamily: "'PP Editorial New', serif" }}
                            >
                                Tech Career
                            </div>

                            <div className="text-[#111] font-[600] text-[15px] sm:text-[16px] md:text-[18px] leading-[1.35] pt-1 sm:pt-4">
                                with Dedicated <br className="hidden sm:block" />
                                Placement Support
                            </div>
                        </div>
                    </div>

                </div>

                {/* Divider 1 */}
                <div className="hidden md:block w-[1px] h-[60px] bg-gray-200/80"></div>

                {/* MIDDLE TEXT */}
                <div className="flex justify-center md:justify-center md:flex-1">
                    <div className="flex items-start gap-2.5">
                        <span className="w-[5px] h-[5px] bg-[#825dfa] rounded-full mt-2.5 shadow-[0_0_8px_rgba(130,93,250,0.8)]"></span>
                        <span className="text-[16px] md:text-[17px] font-[600] leading-[1.4] text-[#111]">
                            Complete <br />
                            Career Guidance
                        </span>
                    </div>
                </div>

                {/* Divider 2 */}
                <div className="hidden md:block w-[1px] h-[60px] bg-gray-200/80"></div>

                {/* RIGHT TEXT */}
                <div className="flex justify-center md:justify-center md:flex-1">
                    <div className="flex items-start gap-2.5">
                        <span className="w-[5px] h-[5px] bg-[#825dfa] rounded-full mt-2.5 shadow-[0_0_8px_rgba(130,93,250,0.8)]"></span>
                        <span className="text-[16px] md:text-[17px] font-[600] leading-[1.4] text-[#111]">
                            300+ Active <br />
                            Hiring Partners
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}