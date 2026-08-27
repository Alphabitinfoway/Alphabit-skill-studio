"use client";

import { motion } from "framer-motion";

export default function ProjectStatsSection({ data }) {
    const {
        titleItalic,
        titleAmpersand,
        titleBold,
        purpleImage,
        stats = [],
        durationVal,
        durationLabel,
        hoursVal,
        hoursLabel
    } = data?.projectStatsSectionData || {};

    if (!stats || stats.length === 0) return null;

    return (
        <section className="w-full bg-[#7143FE] py-10 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden relative font-cabinet">
            {/* Background design elements */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="max-w-[1300px] mx-auto flex flex-col gap-8 sm:gap-12">

                {/* Centered Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center w-full"
                >
                    <h2 className="text-center text-white flex flex-col items-center justify-center gap-1 sm:gap-2">
                        <div className="flex items-baseline justify-center gap-2 flex-wrap">
                            <span
                                className="text-[34px] sm:text-[46px] md:text-[52px] italic font-normal text-[#FF5622] leading-none"
                                style={{
                                    fontFamily: "'PP Editorial New', serif",
                                }}
                            >
                                {titleItalic}
                            </span>
                            <span
                                className="text-[22px] sm:text-[28px] md:text-[32px] font-bold text-white leading-none"
                                style={{
                                    fontFamily: "'Cabinet Grotesk', sans-serif",
                                }}
                            >
                                {titleAmpersand}
                            </span>
                        </div>
                        <span
                            className="text-[22px] sm:text-[28px] md:text-[32px] font-bold text-white leading-none"
                            style={{
                                fontFamily: "'Cabinet Grotesk', sans-serif",
                            }}
                        >
                            {titleBold}
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

                    {/* Left side: purpleImage */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex justify-center items-center w-full"
                    >
                        <div className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[400px]">
                            <img
                                src={purpleImage}
                                alt="Projects & Stats"
                                className="w-full h-auto object-contain mx-auto"
                            />
                        </div>
                    </motion.div>

                    {/* Right side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col text-white w-full"
                    >

                        {/* Stats List */}
                        <ul className="flex flex-col gap-3.5 sm:gap-5 mb-8 sm:mb-10 w-full">
                            {stats.map((stat, idx) => (
                                <li key={idx} className="flex items-start gap-3 sm:gap-4">
                                    <img src="/whiteArrow.webp" alt="arrow" className="w-4.5 h-4.5 sm:w-6 sm:h-6 object-contain opacity-90 shrink-0 mt-0.5" />
                                    <span
                                        className="text-white text-[14.5px] sm:text-[18px] md:text-[20px] font-medium leading-snug"
                                        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                                    >
                                        {stat.label}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Bottom Duration & Hours Card */}
                        <div className="bg-white rounded-[20px] sm:rounded-[24px] p-4.5 sm:p-6 text-black flex flex-col sm:flex-row items-center gap-4 sm:gap-8 shadow-lg max-w-[500px] w-full">
                            {/* Course Duration */}
                            <div className="flex items-center gap-3 w-full sm:w-1/2">
                                <div
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0"
                                    style={{ background: "linear-gradient(180deg, #7143FE 0%, #ffffff 87.93%)" }}
                                />
                                <div>
                                    <p className="text-[#7143FE] italic font-semibold text-[18px] sm:text-[20px] leading-tight" style={{ fontFamily: "'PP Editorial New', serif" }}>
                                        {durationVal}
                                    </p>
                                    <p className="text-[13px] sm:text-[14px] font-bold text-gray-800" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                                        {durationLabel}
                                    </p>
                                </div>
                            </div>

                            {/* Divider for desktop */}
                            <div className="hidden sm:block h-10 w-[1px] bg-gray-200" />
                            {/* Divider for mobile */}
                            <div className="block sm:hidden w-full border-t border-gray-100" />

                            {/* Live Project Hours */}
                            <div className="flex items-center gap-3 w-full sm:w-1/2">
                                <div
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0"
                                    style={{ background: "linear-gradient(180deg, #7143FE 0%, #ffffff 87.93%)" }}
                                />
                                <div>
                                    <p className="text-[#7143FE] italic font-semibold text-[18px] sm:text-[20px] leading-tight" style={{ fontFamily: "'PP Editorial New', serif" }}>
                                        {hoursVal}
                                    </p>
                                    <p className="text-[13px] sm:text-[14px] font-bold text-gray-800" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                                        {hoursLabel}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
