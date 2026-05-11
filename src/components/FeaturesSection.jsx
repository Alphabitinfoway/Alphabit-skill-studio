"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function FeaturesSection() {
    return (
        <section className="w-full bg-[#F5F5F5] py-[60px] md:py-[110px] font-cabinet">
            <div className="max-w-[1180px] mx-auto px-6">
                {/* Top Layout */}
                <div className="flex flex-col lg:flex-row gap-[90px] items-start">
                    {/* LEFT IMAGE */}
                    <div className="relative w-full lg:w-[539px] h-[300px] sm:h-[400px] md:h-[520px] rounded-[34px] overflow-hidden shadow-sm">
                        <Image
                            src="/Home Page/About/1.webp"
                            alt="Studio"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex-1 max-w-[520px]">
                        <div className="flex items-start">
                            {/* Text Div */}
                            <h2 className="text-[32px] sm:text-[36px] md:text-[42px] leading-[1.15] text-[#111] font-[700]">
                                <span
                                    className="text-[#FF5622] italic text-[50px] sm:text-[58px] md:text-[68px] mr-2 font-normal"
                                    style={{ fontFamily: "'PP Editorial New', serif" }}
                                >
                                    Why
                                </span>
                                Choose
                                <br />
                                Alphabit Skill
                            </h2>

                            {/* Question Mark Div */}
                            <div className="ml-6 hidden md:block">
                                <span
                                    className="text-[100px] rotate-[8deg] inline-block"
                                    style={{
                                        fontFamily: "'PP Editorial New', serif",
                                        fontStyle: "italic",
                                        color: "#F5F5F5",
                                        textShadow: `
          1px 0 #9CA3AF,
          -1px 0 #9CA3AF,
          0 1px #9CA3AF,
          0 -1px #9CA3AF
        `,
                                    }}
                                >
                                    ?
                                </span>
                            </div>
                        </div>

                        <p className="mt-6 text-[15px] text-gray-500 leading-[1.7]">
                         At Alphabit Skill, we go beyond traditional learning. We are a dedicated IT training hub designed to transform passionate individuals into industry-ready professionals. By focusing on high-demand technologies—from core programming to artificial intelligence and cyber security—we provide the hands-on experience and expert mentorship needed to thrive in the modern tech landscape.
                        </p>

                        <button className="mt-8 flex items-center gap-2 bg-[#6E42F8] hover:bg-[#5c33dd] text-white px-6 py-3 rounded-full text-[14px] font-semibold transition">
                            <ArrowUpRight size={18} strokeWidth={2.5} />
                            Join the Studio
                        </button>
                    </div>
                </div>

                {/* FEATURE CARDS */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 left-0 lg:left-12 mt-8 lg:mt-[-70px] relative z-10">
                    {/* CARD */}
                    <div className="bg-white p-6 rounded-[22px] border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.05)]">
                        <h3 className="font-semibold text-[16px] text-[#111] mb-2">
                            Future-Ready Curriculum
                        </h3>
                        <p className="text-[14px] text-gray-500 leading-[1.6]">
                        Specialized, in-depth training modules covering high-demand sectors like Artificial Intelligence, Machine Learning, and Cyber Security.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-[22px] border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.05)]">
                        <h3 className="font-semibold text-[16px] text-[#111] mb-2">
                            Advanced Java Development
                        </h3>
                        <p className="text-[14px] text-gray-500 leading-[1.6]">
                   Master both core and advanced programming concepts through rigorous, hands-on coding and enterprise-level application architecture.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-[22px] border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.05)]">
                        <h3 className="font-semibold text-[16px] text-[#111] mb-2">
                            Project-Based Application
                        </h3>
                        <p className="text-[14px] text-gray-500 leading-[1.6]">
                         Move entirely beyond theoretical concepts. You will write code, identify vulnerabilities, and build intelligent systems to create a tangible portfolio. 
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-[22px] border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.05)]">
                        <h3 className="font-semibold text-[16px] text-[#111] mb-2">
                            Industry-Standard Practices
                        </h3>
                        <p className="text-[14px] text-gray-500 leading-[1.6]">
           Learn the exact frameworks, security protocols, and development methodologies currently utilized by top IT companies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
