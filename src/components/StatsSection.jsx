"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function StatsSection() {
    return (
        <section className="w-full bg-[#F5F5F5] py-10 sm:py-14 md:py-[72px] border-b border-gray-100 font-cabinet">
            <div className="max-w-[1240px] px-5 sm:px-6 md:px-8 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-10 lg:gap-12">
                {/* Left Side / Heading */}
                <div className="flex flex-col items-start text-left">
                    <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#111111] leading-[1.25] tracking-tight">
                        <span 
                            className="text-[36px] sm:text-[44px] md:text-[48px] font-normal text-[#FF5622] italic mr-2 font-pp inline-block"
                        >
                            9 Years
                        </span>
                        <span>in the IT Training &</span>
                        <span className="block mt-1">Placement Industry</span>
                    </h2>
                </div>

                {/* Right Side Stats */}
                <div className="grid grid-cols-2 md:flex md:flex-wrap lg:flex-nowrap items-start md:items-center justify-between gap-x-8 gap-y-8 sm:gap-x-12 sm:gap-y-10 md:gap-8 w-full lg:w-auto">
                    <StatItem value={200} label="Student Placed" showDivider={true} />
                    <StatItem value={300} label="Companies TieUp" showDivider={true} />
                    <StatItem value={3} label="Office in Gujarat" prefix="0" showDivider={true} />
                    <StatItem value={50} label="Industry Courses" showDivider={false} />
                </div>
            </div>
        </section>
    );
}

function CountingNumber({ value, prefix = "" }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        const num = Math.round(latest);
        return prefix && num < 10 ? `${prefix}${num}` : num;
    });
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            animate(count, value, { duration: 1.8, ease: "easeOut" });
        }
    }, [isInView, count, value]);

    return (
        <motion.span 
            ref={ref} 
            className="inline-block"
            style={{ textShadow: "3px 3px 0px #FFC72C" }}
        >
            <motion.span>{rounded}</motion.span>
        </motion.span>
    );
}

function StatItem({ value, label, showDivider, prefix = "" }) {
    return (
        <div className="flex items-center gap-6 md:gap-8">
            <div className="flex flex-col items-start md:items-center text-left md:text-center">
                <div className="text-[42px] sm:text-[46px] md:text-[48px] font-extrabold text-[#7143FE] leading-none flex items-center font-cabinet">
                    <CountingNumber value={value} prefix={prefix} />
                    <span 
                        className="text-[34px] sm:text-[38px] md:text-[36px] font-extrabold ml-0.5"
                        style={{ textShadow: "2.5px 2.5px 0px #FFC72C" }}
                    >
                        +
                    </span>
                </div>
                <div className="text-[15px] sm:text-[15.5px] text-[#333] mt-2 font-[500] leading-snug">
                    {label}
                </div>
            </div>
            {showDivider && (
                <div className="hidden md:block w-[1px] h-[65px] bg-gray-200" style={{ transform: "rotate(20deg)" }}></div>
            )}
        </div>
    );
}
