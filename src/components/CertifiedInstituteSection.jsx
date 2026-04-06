"use client";

import React from "react";
import Image from "next/image";

export default function CertifiedInstituteSection() {
    return (
        <section className="w-full bg-[#6E42F8] py-20 md:py-[100px] font-cabinet relative">
            <div className="max-w-[1320px] mx-auto px-6">
                {/* Title Section */}
                <div className="flex flex-col items-center justify-center text-center w-full mb-20 md:mb-24">
                    <h2 className="text-[26px] sm:text-[30px] md:text-[38px] lg:text-[42px] leading-[1.35] text-white font-[600]">
                        Elite IT Training Architecture Made Accessible <br className="hidden sm:block" />
                        Through a{" "}
                        <span
                            className="text-[#FF5622] font-normal italic"
                            style={{
                                fontFamily: "'PP Editorial New', serif",
                                fontSize: "1.3em",
                                marginLeft: "6px",
                                marginRight: "6px",
                                verticalAlign: "baseline",
                            }}
                        >
                            Certified
                        </span>{" "}
                        Institute
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 lg:gap-8 relative z-10 pt-4 mt-6 md:mt-0">
                    {/* Card 1 */}
                    <div className="bg-white rounded-[28px] p-6 lg:p-7 relative shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300">
                        {/* Icon - Floating without BG */}
                        <div className="absolute top-[-40px] left-8 w-[80px] h-[80px] md:w-[90px] md:h-[90px] flex items-center justify-center overflow-hidden">
                            <Image 
                                src="/Home Page/Certified/1_11zon.webp" 
                                alt="Official Validation" 
                                width={60} 
                                height={60} 
                                className="object-contain rounded-[10px]"
                            />
                        </div>

                        <h3 className="font-[700] text-[18px] text-[#111] mt-10 mb-3 leading-snug">
                            Officially Validated Credentials
                        </h3>
                        <p className="text-[14px] text-gray-500 font-[500] leading-[1.65]">
                            Attain certifications backed by national skill initiatives,
                            ensuring your technical capabilities are recognized by top-tier
                            employers.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-[28px] p-6 lg:p-7 relative shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300">
                        {/* Icon - Floating without BG */}
                        <div className="absolute top-[-40px] left-10 w-[80px] h-[80px] md:w-[90px] md:h-[90px] flex items-center justify-center overflow-hidden">
                            <Image 
                                src="/Home Page/Certified/2_11zon.webp" 
                                alt="Curriculum" 
                                width={60} 
                                height={60} 
                                className="object-contain rounded-[10px]"
                            />
                        </div>

                        <h3 className="font-[700] text-[18px] text-[#111] mt-10 mb-3 leading-snug">
                            Enterprise-Grade Curriculum Structure
                        </h3>
                        <p className="text-[14px] text-gray-500 font-[500] leading-[1.65]">
                            Engineered with input from senior technologists, matching the
                            academic rigor of premier engineering institutions.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-[28px] p-6 lg:p-7 relative shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300">
                        {/* Icon - Floating without BG */}
                        <div className="absolute top-[-40px] left-10 w-[80px] h-[80px] md:w-[90px] md:h-[90px] flex items-center justify-center overflow-hidden">
                            <Image 
                                src="/Home Page/Certified/3_11zon.webp" 
                                alt="Fee Structure" 
                                width={60} 
                                height={60} 
                                
                                className="object-contain rounded-[10px]"
                            />
                        </div>

                        <h3 className="font-[700] text-[18px] text-[#111] mt-10 mb-3 leading-snug">
                            Accessible Fee Structure via No Cost EMI
                        </h3>
                        <p className="text-[14px] text-gray-500 font-[500] leading-[1.65]">
                            Acquire advanced technical skills with straightforward pricing,
                            flexible payment schedules, and zero hidden costs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
