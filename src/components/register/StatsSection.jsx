"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function StatsSection() {
    return (
        <div className="w-full bg-[#F5F5F5] py-12 md:py-16">
            <div className="max-w-[1200px] px-4 mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0">
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

function CountingNumber({ value, suffix = "" }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        const num = Math.round(latest);
        return `${num}${suffix}`;
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
        >
            <motion.span>{rounded}</motion.span>
        </motion.span>
    );
}

function StatItem({ value, suffix, label, showDivider, dividerClass = "" }) {
    return (
        <div className="flex-1 w-full flex items-center justify-between md:justify-center relative">
            <div className="flex flex-col items-center justify-center text-center w-full">
                <div 
                    className="text-[46px] md:text-[56px] font-semibold text-[#7143FE] leading-none italic"
                    style={{ 
                        fontFamily: "'PP Editorial New', Georgia, serif"
                    }}
                >
                    <CountingNumber value={value} suffix={suffix} />
                </div>
                <div className="text-[11px] font-bold text-gray-500 mt-3 tracking-widest uppercase font-cabinet">
                    {label}
                </div>
            </div>
            {showDivider && (
                <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[55px] bg-gray-200/80 ${dividerClass}`} />
            )}
        </div>
    );
}
