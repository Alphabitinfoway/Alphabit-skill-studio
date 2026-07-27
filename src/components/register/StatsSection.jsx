"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function StatsSection() {
    return (
        <div className="w-full bg-[#F5F5F5] py-12 md:py-16 font-cabinet border-b border-gray-100">
            <div className="max-w-[1240px] px-4 md:px-6 mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 items-center justify-items-center">
                <StatItem 
                    value={9} 
                    suffix="th" 
                    label="SEMINAR EDITION" 
                    showDivider={true} 
                    dividerClass="block" 
                />
                <StatItem 
                    value={450} 
                    suffix="+" 
                    label="STUDENTS ATTENDED" 
                    showDivider={true} 
                    dividerClass="hidden md:block" 
                />
                <StatItem 
                    value={12} 
                    suffix="+" 
                    label="COLLEGES REACHED" 
                    showDivider={true} 
                    dividerClass="block" 
                />
                <StatItem 
                    value={100} 
                    suffix="%" 
                    label="FREE ENTRY" 
                    showDivider={false} 
                />
            </div>
        </div>
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

function StatItem({ value, suffix = "", label, showDivider, dividerClass = "" }) {
    return (
        <div className="w-full flex items-center justify-center relative">
            <div className="flex flex-col items-center text-center">
                <div className="text-[40px] md:text-[48px] font-bold text-[#7143FE] leading-none flex items-start font-cabinet">
                    <CountingNumber value={value} />
                    {suffix && (
                        <span 
                            className="relative z-10 text-[24px] md:text-[28px] mt-1 ml-1 font-[600]"
                            style={{ textShadow: "1.5px 1.5px 0px #FFCC00" }}
                        >
                            {suffix}
                        </span>
                    )}
                </div>
                <div className="text-[14px] text-gray-700 mt-2 font-[500] whitespace-nowrap uppercase tracking-wider font-cabinet">
                    {label}
                </div>
            </div>
            {showDivider && (
                <div 
                    className={`absolute right-0 top-1/2 w-[1px] h-[65px] bg-gray-200 ${dividerClass}`} 
                    style={{ transform: "translateY(-50%) rotate(20deg)" }}
                />
            )}
        </div>
    );
}
