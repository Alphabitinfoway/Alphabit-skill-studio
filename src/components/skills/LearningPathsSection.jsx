"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toSlug } from "@/data/skills";

const skillCategories = {
    "IT Skills": [
        {
            title: "Full Stack Development",
            description: "Go from zero to building real web apps. You'll learn both the front-end and back-end, so you can create something complete on your own.",
            image: "/skill/ITSkills/fullstackdevelopment.png"
        },
        {
            title: "Web Development",
            description: "Learn how websites are actually built – HTML, CSS, JavaScript, and the frameworks real developers use every day.",
            image: "/skill/ITSkills/webdevelopment.png"
        },
        {
            title: "Mobile App Development",
            description: "Build real Android and iOS apps step by step, using the same tools companies use to hire app developers.",
            image: "/skill/ITSkills/moblieappdevelopment.png"
        },
        {
            title: "UI/UX & Graphic Design",
            description: "Learn to design interfaces people actually enjoy using – clean, intuitive, and good-looking, with the tools the industry runs on.",
            image: "/skill/ITskills/ui_uxgraphicdesign.png"
        },
        {
            title: "Digital Marketing",
            description: "Create banners, posts, and visuals that grab attention, using the same design software professionals use daily.",
            image: "/skill/ITskills/digitalmarketing.png"
        },
        {
            title: "Database Management",
            description: "Understand how data is stored, organized, and queried – a skill nearly every tech job quietly depends on.",
            image: "/skill/ITskills/databasemanagement.png"
        },
        {
            title: "E-Commerce (Shopify/WooCommerce)",
            description: "Learn how to build, manage, and optimize online stores using Shopify and WooCommerce to drive massive sales.",
            image: "/skill/ITskills/e-commerce(shopify_woocommerce).png"
        },
        {
            title: "QA Testing",
            description: "Master software testing methodologies, automated testing tools, and quality assurance processes to ship bug-free code.",
            image: "/skill/ITskills/qatesting.png"
        },
        {
            title: "Cyber Security",
            description: "Understand network security, penetration testing, and security protocols to defend digital infrastructure against cyber threats.",
            image: "/skill/ITskills/cybersecurity.png"
        },
        {
            title: "Ethical Hacking",
            description: "Learn to think like a hacker to identify, test, and patch system vulnerabilities before malicious actors exploit them.",
            image: "/skill/ITskills/ethicalhacking.png"
        },
        {
            title: "Cloud Computing",
            description: "Master AWS, Azure, and cloud infrastructure deployment to build reliable, high-availability web applications.",
            image: "/skill/ITskills/cloudcomputing.png"
        },
        {
            title: "ROR & Odoo & Golang",
            description: "Learn Ruby on Rails, Odoo ERP, and Go language to build efficient enterprise applications and APIs.",
            image: "/skill/ITskills/ror_odoo_golang.png"
        },

    ],
    "Soft Skills": [
        {
            title: "Communication Skills",
            description: "Develop strong verbal, written, and interpersonal communication skills crucial for teamwork and leadership.",
            image: "/skill/softskills/communicationskills.png"
        },
        {
            title: "Resume & Linkedin",
            description: "Learn to design a high-converting resume and build a strong LinkedIn profile to catch the eye of global recruiters.",
            image: "/skill/softskills/resume_linkedin.png"
        },
        {
            title: "Leadership Development",
            description: "Master team management, emotional intelligence, strategic thinking, and decision-making to lead teams effectively.",
            image: "/skill/softskills/leadershipdevelopment.png"
        },
        {
            title: "Video Editing & Content Creation",
            description: "Master video editing tools, storytelling, and content creation strategies to build an engaging digital presence.",
            image: "/skill/softskills/videoediting_contentcreation.png"
        },
        {
            title: "E-Commerce Business Skills",
            description: "Develop business acumen, marketing strategies, and operational knowledge required to run a successful online business.",
            image: "/skill/softskills/e-commercebusinessskills.png"
        },
        {
            title: "Personality Development",
            description: "Enhance your self-confidence, body language, presentation, and overall personality to stand out in any professional setting.",
            image: "/skill/softskills/personalitydevelopment.png"
        }
    ],
    "AI Courses": [
        {
            title: "Python for AI/ML",
            description: "Master Python programming basics, libraries like NumPy, Pandas, and Scikit-Learn for machine learning foundations.",
            image: "/skill/AIcourses/pythonforaiml.png"
        },
        {
            title: "Data Science & Analytics",
            description: "Learn to clean, visualize, analyze complex data and build predictive models to drive data-backed business decisions.",
            image: "/skill/AIcourses/datascienceanalytics.png"
        },
        {
            title: "ChatGPT & Prompt Engineering",
            description: "Learn to craft effective prompts, automate daily workflows, and harness the power of large language models.",
            image: "/skill/AIcourses/chatgptpromptengineering.png"
        },
        {
            title: "AI Tools Training",
            description: "Explore advanced AI tools for design, copywriting, coding, and marketing to boost your productivity by 10x.",
            image: "/skill/AIcourses/aitoolstraining.png"
        },
        {
            title: "AI Automation",
            description: "Build AI-powered agents, chatbots, and automated workflows using Make, Zapier, and API integrations.",
            image: "/skill/AIcourses/aiautomation.png"
        },
        {
            title: "Generative AI",
            description: "Dive into deep learning, neural networks, LLM fine-tuning, and image generation models to build cutting-edge AI apps.",
            image: "/skill/AIcourses/generativeai.png"
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
    const [activeTab, setActiveTab] = useState("IT Skills");
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
        <section id="learning-paths" className="w-full bg-[#6E42F8] py-12 md:py-[50px] font-cabinet relative px-6 md:px-16 lg:px-24">
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
                            className="absolute left-[-20px] md:left-[-40px] top-[50%] -translate-y-[50%] z-20 w-11 h-11 rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all text-gray-600 hover:text-[#FF5622]"
                            aria-label="Previous Page"
                        >
                            <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-[-20px] md:right-[-40px] top-[50%] -translate-y-[50%] z-20 w-11 h-11 rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all text-gray-600 hover:text-[#FF5622]"
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