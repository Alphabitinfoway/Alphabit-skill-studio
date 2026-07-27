"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function StatsSection() {
    return (
        <div className="w-full bg-[#F5F5F5] py-12 md:py-[80px] border-b border-gray-100 font-cabinet">
            <div className="max-w-[1240px] px-4 md:px-6 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Left Side */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-w-max">
                    <div className="text-[20px] md:text-[24px] font-bold text-[#111] leading-tight flex flex-col sm:flex-row items-center sm:items-baseline">
                        <span 
                            className="text-[40px] sm:text-[48px] md:text-[58px] font-normal text-[#FF5622] leading-[0.8] sm:mr-2 italic mb-1 sm:mb-0"
                            style={{ 
                                fontFamily: "'PP Editorial New', serif"
                            }}
                        >
                            9 Years
                        </span>
                        <span>in the IT Training &</span>
                    </div>
                    <div className="text-[20px] md:text-[24px] font-bold text-[#111] mt-1">Placement Industry</div>
                </div>

                {/* Right Side Stats */}
                <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center xl:flex-nowrap items-center gap-x-2 gap-y-8 md:gap-8 w-full mt-4 lg:mt-0">
                    <StatItem value={2000} label="Student Placed" showDivider={true} />
                    <StatItem value={300} label="Companies TieUp" showDivider={true} />
                    <StatItem value={3} label="Office in Gujarat" prefix="0" showDivider={true} />
                    <StatItem value={50} label="Industry Skills" showDivider={false} />
                </div>
            </div>
        </div>
    );
}

function CountingNumber({ value, prefix = "" }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        const num = Math.round(latest);        return prefix && num < 10 ? `${prefix}${num}` : num;
    });
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            animate(count, value, { duration: 2, ease: "easeOut" });
        }
    }, [isInView, count, value]);

    return (
        <motion.span 
            ref={ref} 
            className="inline-block"
            style={{ textShadow: "2px 2px 0px #FFCC00" }}
        >
            <motion.span>{rounded}</motion.span>
        </motion.span>
    );
}

function StatItem({ value, label, showDivider, prefix = "" }) {
    return (
        <div className="flex items-center gap-6 md:gap-8">
            <div className="flex flex-col items-center">
                <div className="text-[40px] md:text-[48px] font-bold text-[#7143FE] leading-none flex items-start font-cabinet">
                    <CountingNumber value={value} prefix={prefix} />
                    <span 
                        className="relative z-10 text-[24px] md:text-[28px] mt-1 ml-1 font-[600]"
                        style={{ textShadow: "1.5px 1.5px 0px #FFCC00" }}
                    >
                        +
                    </span>
                </div>
                <div className="text-[14px] text-gray-700 mt-2 font-[500] whitespace-nowrap uppercase tracking-wider">{label}</div>
            </div>
            {showDivider && (
                <div className="hidden md:block w-[1px] h-[65px] bg-gray-200" style={{ transform: "rotate(20deg)" }}></div>
            )}
        </div>
    );
}
