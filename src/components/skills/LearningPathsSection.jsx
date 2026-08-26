"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toSlug } from "@/data/skills";

const skillCategories = {
    "Coding Programs": [
        {
            title: "Full Stack Development",
            description: "Go from zero to building real web apps. You'll learn both the front-end and back-end, so you can create something complete on your own.",
            image: "/skill/ITSkills/fullstackdevelopment.webp"
        },
        {
            title: "Web Development",
            description: "Learn how websites are actually built – HTML, CSS, JavaScript, and the frameworks real developers use every day.",
            image: "/skill/ITSkills/webdevelopment.webp"
        },
        {
            title: "Python for AI/ML",
            description: "Master Python programming basics, libraries like NumPy, Pandas, and Scikit-Learn for machine learning foundations.",
            image: "/skill/AIcourses/pythonforaiml.webp"
        },
        {
            title: "Java Development",
            description: "Learn core Java, object-oriented programming, database connectivity, and backend development with Spring Boot.",
            image: "/skill/ITSkills/fullstackdevelopment.webp"
        },
        {
            title: "Data Science & Analytics",
            description: "Learn to clean, visualize, analyze complex data and build predictive models to drive data-backed business decisions.",
            image: "/skill/AIcourses/datascienceanalytics.webp"
        },
        {
            title: "MERN Stack Development",
            description: "Build modern web apps using MongoDB, Express.js, React.js, and Node.js for complete full-stack mastery.",
            image: "/skill/ITSkills/fullstackdevelopment.webp"
        },
        {
            title: ".NET Development",
            description: "Master C#, ASP.NET Core, MVC architecture, and SQL Server to build high-performance enterprise applications.",
            image: "/skill/ITSkills/webdevelopment.webp"
        },
        {
            title: "Cyber Security",
            description: "Understand network security, penetration testing, and security protocols to defend digital infrastructure against cyber threats.",
            image: "/skill/ITSkills/cybersecurity.webp"
        },
        {
            title: "Ethical Hacking",
            description: "Learn to think like a hacker to identify, test, and patch system vulnerabilities before malicious actors exploit them.",
            image: "/skill/ITSkills/ethicalhacking.webp"
        },
        {
            title: "QA Testing",
            description: "Master software testing methodologies, automated testing tools, and quality assurance processes to ship bug-free code.",
            image: "/skill/ITSkills/qatesting.webp"
        },
        {
            title: "Gaming Development",
            description: "Learn to design, program, and publish immersive 2D and 3D games using Unity, Unreal Engine, and C#.",
            image: "/skill/ITSkills/moblieappdevelopment.webp"
        },
        {
            title: "Cloud Computing",
            description: "Master AWS, Azure, and cloud infrastructure deployment to build reliable, high-availability web applications.",
            image: "/skill/ITSkills/cloudcomputing.webp"
        },
        {
            title: "Mobile App Development",
            description: "Build real Android and iOS apps step by step, using the same tools companies use to hire app developers.",
            image: "/skill/ITSkills/moblieappdevelopment.webp"
        }
    ],
    "Non-Coding Programs": [
        {
            title: "UI/UX & Graphic Design",
            description: "Learn to design interfaces people actually enjoy using – clean, intuitive, and good-looking, with the tools the industry runs on.",
            image: "/skill/ITSkills/ui_uxgraphicdesign.webp"
        },
        {
            title: "ROR & Odoo & Golang",
            description: "Learn Ruby on Rails, Odoo ERP, and Go language to build efficient enterprise applications and APIs.",
            image: "/skill/ITSkills/ror_odoo_golang.webp"
        },
        {
            title: "E-Commerce (Shopify/WooCommerce)",
            description: "Learn how to build, manage, and optimize online stores using Shopify and WooCommerce to drive massive sales.",
            image: "/skill/ITSkills/e-commerce(shopify_woocommerce).webp"
        },
        {
            title: "Digital Marketing",
            description: "Create banners, posts, and visuals that grab attention, using the same design software professionals use daily.",
            image: "/skill/ITSkills/digitalmarketing.webp"
        },
        {
            title: "Performance Marketing",
            description: "Master paid advertising, ROI tracking, conversion rate optimization, and data-driven marketing campaigns.",
            image: "/skill/ITSkills/digitalmarketing.webp"
        },
        {
            title: "Social Media Marketing",
            description: "Learn content strategy, brand positioning, audience engagement, and social media advertising across top platforms.",
            image: "/skill/ITSkills/digitalmarketing.webp"
        }
    ],
    "Non-Tech Field": [
        {
            title: "Human Resources (HR)",
            description: "Master recruitment, employee relations, talent management, HR analytics, and organizational behavior.",
            image: "/skill/SoftSkills/communicationskills.webp"
        },
        {
            title: "Business Development Executive (BDE)",
            description: "Learn lead generation, sales pitching, client relationship management, and strategic business growth.",
            image: "/skill/SoftSkills/leadershipdevelopment.webp"
        },
        {
            title: "Account Manager",
            description: "Develop client retention strategies, project management skills, and portfolio growth techniques.",
            image: "/skill/SoftSkills/e-commercebusinessskills.webp"
        },
        {
            title: "Sales Executive",
            description: "Master negotiation, consultative selling, lead conversion, and customer service to drive revenue.",
            image: "/skill/SoftSkills/communicationskills.webp"
        },
        {
            title: "Marketing Manager",
            description: "Learn campaign planning, market research, brand building, and marketing analytics to lead campaigns.",
            image: "/skill/SoftSkills/e-commercebusinessskills.webp"
        },
        {
            title: "Brand Manager",
            description: "Master brand strategy, positioning, identity design, and consumer behavior analysis.",
            image: "/skill/SoftSkills/personalitydevelopment.webp"
        },
        {
            title: "Purchase Manager",
            description: "Learn supply chain management, vendor negotiation, procurement strategies, and inventory control.",
            image: "/skill/SoftSkills/e-commercebusinessskills.webp"
        },
        {
            title: "Digital Marketing Manager",
            description: "Lead multi-channel digital campaigns, optimize budgets, and analyze overall marketing ROI.",
            image: "/skill/SoftSkills/e-commercebusinessskills.webp"
        }
    ]
};

function SkillCard({ image, title, description }) {
    return (
        <Link
            href={`/skills/${toSlug(title)}`}
            className="group bg-white rounded-[28px] pt-5 pb-4 px-6 lg:px-7 relative shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer"
        >
            {/* Icon - Floating without BG */}
            <div className="absolute top-[-40px] left-8 w-[80px] h-[80px] md:w-[90px] md:h-[90px] flex items-center justify-start overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={60}
                    height={60}
                    className="object-contain rounded-[10px]"
                />
            </div>

            <h3 className="font-[700] text-[18px] text-[#111] mt-5 mb-1.5 leading-snug group-hover:text-[#6E42F8] transition-colors duration-200">
                {title}
            </h3>
            <p className="text-[14px] text-gray-500 font-[500] leading-[1.5] flex-grow">
                {description}
            </p>
            <span className="mt-3 text-[13px] font-semibold text-[#6E42F8] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                View Course →
            </span>
        </Link>
    );
}

export default function LearningPathsSection() {
    const [activeTab, setActiveTab] = useState("Coding Programs");
    const [pageIndex, setPageIndex] = useState(0);

    const skills = skillCategories[activeTab];
    const totalPages = Math.ceil(skills.length / 6);

    const handlePrev = () => {
        setPageIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
    };

    const handleNext = () => {
        setPageIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
    };

    const selectTab = (tab) => {
        setActiveTab(tab);
        setPageIndex(0);
    };

    const visibleSkills = skills.slice(pageIndex * 6, (pageIndex * 6) + 6);

    return (
        <section id="learning-paths" className="w-full bg-[#6E42F8] py-12 md:py-[50px] font-cabinet relative px-6 md:px-16 lg:px-24 overflow-hidden">
            {/* Title Section */}
            <div className="flex flex-col items-center justify-center text-center w-full mb-6">
                <h2 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] leading-[1.35] text-white font-[600]">
                    Explore{" "}
                    <span
                        className="text-[#FF5622] font-normal italic text-[36px] sm:text-[42px] md:text-[48px] lg:text-[52px]"
                        style={{
                            fontFamily: "'PP Editorial New', serif",
                            marginLeft: "6px",
                            marginRight: "6px",
                            verticalAlign: "baseline",
                        }}
                    >
                        Learning
                    </span>{" "}
                    Paths
                </h2>
            </div>

            {/* Category Switcher Tabs */}
            <div className="flex justify-start gap-4 mb-8 flex-wrap relative z-10">
                {Object.keys(skillCategories).map((category) => {
                    const isActive = activeTab === category;
                    return (
                        <button
                            key={category}
                            onClick={() => selectTab(category)}
                            className={`px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-300 ${isActive
                                    ? "bg-[#FF5622] text-white shadow-md"
                                    : "border border-white/30 text-white hover:border-white hover:bg-white/10"
                                }`}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>

            {/* Carousel / Grid Wrapper */}
            <div className="relative max-w-[1800px] mx-auto px-4 md:px-8">
                {/* Arrow Controls */}
                {skills.length > 6 && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 md:left-[-40px] top-[50%] -translate-y-[50%] z-20 w-11 h-11 rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all text-gray-600 hover:text-[#FF5622]"
                            aria-label="Previous Page"
                        >
                            <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-0 md:right-[-40px] top-[50%] -translate-y-[50%] z-20 w-11 h-11 rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all text-gray-600 hover:text-[#FF5622]"
                            aria-label="Next Page"
                        >
                            <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}

                {/* Card Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 relative z-10 pt-4">
                    {visibleSkills.map((skill, index) => (
                        <div key={index} className="h-full">
                            <SkillCard
                                image={skill.image}
                                title={skill.title}
                                description={skill.description}
                            />
                        </div>
                    ))}
                </div>

                {/* Pagination Dots */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-8 relative z-10">
                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setPageIndex(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${pageIndex === idx
                                        ? "bg-[#FF5622] w-6"
                                        : "bg-white/40 hover:bg-white/70"
                                    }`}
                                aria-label={`Go to page ${idx + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}