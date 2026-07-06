"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative bg-[#F5F5F5] min-h-screen flex items-center overflow-hidden py-12 lg:py-8 my-8">
            <div className="relative w-full max-w-[1400px] px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Side: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left"
                    >
                        <div className="relative w-full">

                            <h1 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-cabinet font-medium leading-none tracking-tight text-[#171717]">
                                Build <span className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-pp italic text-[#E85B2A] font-medium whitespace-nowrap">Industry-Ready Skills</span><br />
                                for Tomorrow's Tech
                            </h1>
                        </div>

                        <p className="mt-14 text-[#707070] text-[15px] sm:text-[20px] md:text-[22px] leading-[1.65] max-w-[750px] font-cabinet font-light">
                            Explore hands-on training programs designed by industry experts. Learn through live projects, mentorship, internships, and placement-focused learning paths.
                        </p>

                        <div className="mt-8">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center gap-2 px-6 py-[13px] bg-[#7143FE] hover:bg-[#5f33eb] text-white rounded-full font-cabinet font-medium text-[13.5px] transition-all duration-300 shadow-md shadow-[#7143fe]/10 hover:shadow-[#7143fe]/20 cursor-pointer"
                            >
                                <img src="whiteArrow.png" alt="arrow" className="w-[24px] h-[24px] object-cover" />
                                <span>Explore Courses</span>
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right Side: Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="lg:col-span-5 xl:col-span-4 relative flex justify-center items-center w-full min-h-[380px] sm:min-h-[480px] lg:min-h-[520px]"
                    >
                        <div>
                            <img className="w-full object-contain h-[700px]" src="/skill/herosection1.png" alt="" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}