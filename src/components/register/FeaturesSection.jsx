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
                    <div className="flex-1 max-w-[530px]">
                        <div className="flex items-start">
                            {/* Text Div */}
                            <h2 className="text-[32px] sm:text-[36px] md:text-[42px] leading-[1.15] text-[#111] font-[700] w-[77%]">
                                Why{" "}
                                <span
                                    className="text-[#FF5622] italic text-[50px] sm:text-[58px] md:text-[68px] mr-2 font-normal"
                                    style={{ fontFamily: "'PP Editorial New', serif" }}
                                >
                                Attend
                                </span>
                                {" "}This Seminar
                            </h2>

                            {/* Question Mark Div */}
                            <div className="ml-2 hidden md:block flex-shrink-0">
                                <span
                                    className="text-[100px] rotate-[8deg] inline-block"
                                    style={{
                                        fontFamily: "'PP Editorial New', serif",
                                        fontStyle: "italic",
                                        color: "#F5F5F5",
                                        textShadow: `1px 0 #9CA3AF, -1px 0 #9CA3AF, 0 1px #9CA3AF, 0 -1px #9CA3AF`,
                                    }}
                                >
                                    ?
                                </span>
                            </div>
                        </div>

                        <p className="mt-4 text-[15px] text-gray-500 leading-[1.7]">
                           A focused two-hour session designed to give students real clarity on tech careers—not just through theory, but with practical guidance and a clear roadmap. Students will learn about different career paths in technology, the skills employers expect, portfolio and resume building, internships, and interview preparation. By the end of the session, they'll have a practical action plan and a better understanding of how to confidently start their tech journey.
                        </p>

                        <button className="mt-8 flex items-center gap-2 bg-[#6E42F8] hover:bg-[#5c33dd] text-white px-6 py-3 rounded-full text-[14px] font-semibold transition">
                            <img src="whiteArrow.png" alt="arrow" className="w-6" />
                            Join the Studio
                        </button>
                    </div>
                </div>

                {/* FEATURE CARDS */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 left-0 lg:left-12 mt-8 lg:mt-[-70px] relative z-10">
                    {/* CARD */}
                    <div className="bg-white p-6 rounded-[22px] border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.05)]">
                        <h3 className="font-semibold text-[16px] text-[#111] mb-2">
                            Free Certificate
                        </h3>
                        <p className="text-[14px] text-gray-500 leading-[1.6]">
                            Awarded to every registered attendee on completion.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-[22px] border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.05)]">
                        <h3 className="font-semibold text-[16px] text-[#111] mb-2">
                            Expert Speaker
                        </h3>
                        <p className="text-[14px] text-gray-500 leading-[1.6]">
                            Learn directly from an industry mentor with 9+ years experience.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-[22px] border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.05)]">
                        <h3 className="font-semibold text-[16px] text-[#111] mb-2">
                            Hands-on Session
                        </h3>
                        <p className="text-[14px] text-gray-500 leading-[1.6]">
                            A live mini-project, not just a lecture.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-[22px] border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.05)]">
                        <h3 className="font-semibold text-[16px] text-[#111] mb-2">
                            Networking
                        </h3>
                        <p className="text-[14px] text-gray-500 leading-[1.6]">
                            Meet peers and mentors building the same path as you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
