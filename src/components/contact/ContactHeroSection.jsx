"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ContactHeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const arrowRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (arrowRef.current) {
                const rect = arrowRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const angleRad = Math.atan2(e.clientY - centerY, e.clientX - centerX);
                const angleDeg = (angleRad * 180) / Math.PI + 45;
                setMousePosition({ rotate: angleDeg });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.1,
            }
        }
    };

    const textRevealVariant = {
        hidden: { y: "110%", opacity: 0 },
        visible: {
            y: "0%",
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const titleWords = [
        { text: "Talk", isHighlight: false },
        { text: "to", isHighlight: false },
        { text: "Alphabit", isHighlight: false },
        { text: "Skill", isHighlight: false },
        { text: "—", isHighlight: false },
        { text: "Industrial", isHighlight: false },
        { text: "Internship", isHighlight: false },
        { text: "&", isHighlight: false },
        { text: "Training", isHighlight: false },
        { text: "Company", isHighlight: true }
    ];

    const fadeUpVariant = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <div className="bg-[#F5F5F5] pt-28 sm:pt-32 md:pt-[55px] pb-16 md:pb-32 flex flex-col items-center font-cabinet">
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (min-width: 768px) {
                    .notch-cutout {
                        --r: 52px;
                        --s: 94px;
                        --a: 22deg;
                        
                        --_m: 100% / calc(2 * var(--r)) var(--r) no-repeat radial-gradient(50% 100% at top, #000 calc(100% - 1px), transparent);
                        --_d: calc((var(--s) + var(--r)) * cos(var(--a)));
                        
                        -webkit-mask: 
                            calc(50% + var(--_d)) var(--_m),
                            calc(50% - var(--_d)) var(--_m),
                            radial-gradient(var(--s) at 50% calc(100% + sin(var(--a)) * var(--s)), transparent 100%, #000 calc(100% + 1px)) 0 calc(100% - var(--r) * (1 - sin(var(--a)))) no-repeat,
                            linear-gradient(90deg, #000 calc(50% - var(--_d)), transparent 0 calc(50% + var(--_d)), #000 0);
                        mask: 
                            calc(50% + var(--_d)) var(--_m),
                            calc(50% - var(--_d)) var(--_m),
                            radial-gradient(var(--s) at 50% calc(100% + sin(var(--a)) * var(--s)), transparent 100%, #000 calc(100% + 1px)) 0 calc(100% - var(--r) * (1 - sin(var(--a)))) no-repeat,
                            linear-gradient(90deg, #000 calc(50% - var(--_d)), transparent 0 calc(50% + var(--_d)), #000 0);
                    }
                }
            `}} />
            <div className="relative w-full max-w-[1240px] px-3 sm:px-4 md:px-6 mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full rounded-[36px] sm:rounded-[44px] bg-[#7143FE] flex flex-col items-center justify-center pt-10 pb-12 sm:pt-14 sm:pb-16 md:pt-24 md:pb-[130px] relative shadow-[0_8px_30px_rgb(0,0,0,0.06)] notch-cutout"
                >
                    <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-[960px] mx-auto w-full">
                        {/* Word-by-word animated H1 */}
                        <h1 className="text-white font-[600] text-[32px] sm:text-[44px] md:text-[54px] lg:text-[62px] leading-[1.18] tracking-tight font-cabinet flex flex-wrap justify-center gap-x-[0.25em] gap-y-1">
                            {titleWords.map((item, index) => (
                                <span key={index} className="inline-block overflow-hidden py-1">
                                    <motion.span
                                        variants={textRevealVariant}
                                        className={`inline-block ${
                                            item.isHighlight 
                                                ? "font-pp italic text-[#FF5622] font-[500]" 
                                                : ""
                                        }`}
                                    >
                                        {item.text}
                                    </motion.span>
                                </span>
                            ))}
                        </h1>

                        {/* Subtitle */}
                        <div className="overflow-hidden mt-5 sm:mt-6">
                            <motion.p
                                variants={fadeUpVariant}
                                className="text-[#f2eeff] max-w-[720px] text-[15px] sm:text-[16.5px] font-[400] leading-[1.65] tracking-normal"
                            >
                                Questions about a course, fees, or which track fits your goals? Reach out — our team replies within 24 hours, and you can book a free counseling session before you enroll.
                            </motion.p>
                        </div>

                        {/* CTA Button */}
                        <motion.div variants={fadeUpVariant}>
                            <Link href="/register" className="inline-block mt-8 sm:mt-9">
                                <motion.button
                                    whileHover={{ scale: 1.06, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-[13px] bg-white text-[#7143FE] rounded-full font-[600] text-[14px] shadow-sm hover:bg-[#FFFFFF] transition-all tracking-tight cursor-pointer"
                                >
                                    Join the Studio
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                {/* The Badge fitting into the bite mark (Desktop only) */}
                <div className="hidden md:flex absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[156px] h-[156px] items-center justify-center pointer-events-none">
                    <div className="w-[150px] h-[150px] bg-[#F5F5F5] rounded-full flex items-center justify-center relative pointer-events-auto">
                        <div className="w-[134px] h-[134px] bg-transparent rounded-full border-[2.5px] border-[#7143FE] flex items-center justify-center relative">
                            <div
                                ref={arrowRef}
                                style={{
                                    transform: `rotate(${mousePosition.rotate || 0}deg)`,
                                    transition: "transform 0.1s ease-out"
                                }}
                            >
                                <Image src="https://res.cloudinary.com/dir8eqqnk/image/upload/v1785216791/purpleArrow_ypjtzq.webp" alt="Arrow" width={44} height={46} />
                            </div>

                            <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                                <svg viewBox="0 0 100 100" className="w-full h-full" overflow="visible">
                                    <path
                                        id="textCurveContact"
                                        d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                                        fill="transparent"
                                    />
                                    <text className="text-[9px] font-[600] fill-[#7540F0] tracking-[0.12em] uppercase">
                                        <textPath href="#textCurveContact" startOffset="0%">
                                            Get In Touch - Alphabit Skill Studio -
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
