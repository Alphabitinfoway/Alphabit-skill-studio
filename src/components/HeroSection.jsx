"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
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
                staggerChildren: 0.2, // Time between each child's animation
                delayChildren: 0.1,    // Initial delay before first child starts
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] // Custom ease for a premium feel
            }
        }
    };

    return (
        <div className="bg-[#F5F5F5] pt-[55px] pb-32 min-h-screen flex flex-col items-center">
            <style dangerouslySetInnerHTML={{
                __html: `
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
            `}} />
            <div className="relative w-full max-w-[1240px] px-4 md:px-6 mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full rounded-[44px] bg-[#7143FE] flex flex-col items-center justify-center pt-24 pb-32 md:pt-28 md:pb-[140px] relative shadow-[0_8px_30px_rgb(0,0,0,0.06)] notch-cutout"
                >
                    {/* Text Content Container */}
                    <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">

                        {/* Main Headline */}
                        <div className="text-white font-[500] flex flex-col items-center tracking-normal font-cabinet overflow-hidden">

                            {/* Row 1 */}
                            <motion.div 
                                variants={itemVariants}
                                className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-[18px] text-[36px] sm:text-[42px] md:text-[66px] lg:text-[76px] leading-none"
                            >
                                <span className="mb-1 md:mb-0">Build</span>
                                <div className="relative w-[130px] sm:w-[150px] md:w-[180px] h-[45px] sm:h-[55px] md:h-[100px] rounded-full overflow-hidden flex-shrink-0 shadow-inner">
                                    <Image
                                        src="/Home Page/Header/1.webp"
                                        alt="Skills"
                                        fill
                                        sizes="180px"
                                        className="object-cover object-center"
                                        priority
                                    />
                                </div>
                                <span className="mt-1 md:mt-0">Skills That</span>
                            </motion.div>

                            {/* Row 2 */}
                            <motion.div 
                                variants={itemVariants}
                                className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-[18px] text-[36px] sm:text-[42px] md:text-[66px] lg:text-[76px] leading-none mt-3 sm:mt-[18px]"
                            >
                                <span className="mb-1 md:mb-0">Build Your</span>
                                <div className="relative w-[130px] sm:w-[150px] md:w-[180px] h-[45px] sm:h-[55px] md:h-[100px] rounded-full overflow-hidden flex-shrink-0 shadow-inner">
                                    <Image
                                        src="/Home Page/Header/2.webp"
                                        alt="VR Experience"
                                        fill
                                        sizes="180px"
                                        className="object-cover object-center"
                                        priority
                                    />
                                </div>
                                <span className="font-serif italic text-[#FF5622] font-[500] inline-block md:ml-1 mt-1 md:mt-0">
                                    Future.
                                </span>
                            </motion.div>

                        </div>

                        {/* Subtitle */}
                        <motion.p 
                            variants={itemVariants}
                            className="mt-8 md:mt-[36px] text-[#f2eeff] max-w-[580px] text-[14px] md:text-[14.5px] font-[400] leading-[1.6] tracking-wide"
                        >
                            Join a community of driven learners. Get hands-on training, <br className="hidden md:block" />
                            build a real-world portfolio, and take your career to the next level.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.button 
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-9 px-8 py-[13px] bg-white text-[#7540F0] rounded-full font-[600] text-[13px] shadow-sm hover:bg-[#FFFFFF] transition-all tracking-tight"
                        >
                            Join the Studio
                        </motion.button>
                    </div>
                </motion.div>

                {/* 
          The Badge fitting into the bite mark.
          Positioned absolute relative to the outer wrapper so it overlaps.
        */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[156px] h-[156px] flex items-center justify-center pointer-events-none">
                    {/* Inner Badge Background matching the page background */}
                    <div className="w-[150px] h-[150px] bg-[#F5F5F5] rounded-full flex items-center justify-center relative pointer-events-auto">
                        {/* Real inner circle matching screenshot padding */}
                        <div className="w-[134px] h-[134px] bg-transparent rounded-full border-[2.5px] border-[#7143FE] flex items-center justify-center relative">
                            {/* The arrow in the center */}
                            <div
                                ref={arrowRef}
                                style={{
                                    transform: `rotate(${mousePosition.rotate || 0}deg)`,
                                    transition: "transform 0.1s ease-out"
                                }}
                            >
                                <Image src="/Frame.png" alt="Arrow" width={44} height={46} />
                            </div>

                            {/* Spinning Text SVG */}
                            <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                                <svg viewBox="0 0 100 100" className="w-full h-full" overflow="visible">
                                    {/* Path for the text. Radius 38 */}
                                    <path
                                        id="textCurve"
                                        d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                                        fill="transparent"
                                    />
                                    <text className="text-[9px] font-[600] fill-[#7540F0] tracking-[0.12em] uppercase">
                                        <textPath href="#textCurve" startOffset="0%">
                                            Meet Our Mentors - Meet Our Mentors -
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
