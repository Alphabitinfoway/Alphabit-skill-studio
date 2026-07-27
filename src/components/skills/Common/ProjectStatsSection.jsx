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
        <section className="w-full bg-[#7143FE] py-16 px-6 md:px-12 lg:px-20 overflow-hidden relative">
            {/* Background design elements */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="max-w-[1300px] mx-auto flex flex-col gap-12">

                {/* Centered Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center w-full"
                >
                    <h2 className="text-center text-white flex flex-col items-center gap-2">
                        <div className="flex items-baseline gap-2">
                            <span
                                style={{
                                    fontFamily: "'PP Editorial New', serif",
                                    fontWeight: 400,
                                    fontStyle: "italic",
                                    fontSize: "52px",
                                    lineHeight: "100%",
                                    color: "#FF5622"
                                }}
                            >
                                {titleItalic}
                            </span>
                            <span
                                style={{
                                    fontFamily: "'Cabinet Grotesk', sans-serif",
                                    fontWeight: 700,
                                    fontSize: "32px",
                                    lineHeight: "100%",
                                    color: "#FFFFFF"
                                }}
                            >
                                {titleAmpersand}
                            </span>
                        </div>
                        <span
                            style={{
                                fontFamily: "'Cabinet Grotesk', sans-serif",
                                fontWeight: 700,
                                fontSize: "32px",
                                opacity: 1,
                                lineHeight: "100%"
                            }}
                        >
                            {titleBold}
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left side: purpleImage */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex justify-center items-center w-full"
                    >
                        <div className="w-full max-w-[400px]">
                            <img
                                src={purpleImage}
                                alt="Projects & Stats"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </motion.div>

                    {/* Right side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col text-white"
                    >

                        {/* Stats List */}
                        <ul className="flex flex-col gap-5 mb-10">
                            {stats.map((stat, idx) => (
                                <li key={idx} className="flex items-center gap-4">
                                    <img src="/whiteArrow.webp" alt="arrow" className="w-6 h-6 object-contain opacity-90" />
                                    <span
                                        className="text-white text-[16px] sm:text-[20px] font-medium leading-none"
                                        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                                    >
                                        {stat.label}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Bottom Duration & Hours Card */}
                        <div className="bg-white rounded-[24px] p-6 text-black flex flex-col sm:flex-row items-center gap-8 shadow-lg max-w-[500px]">
                            {/* Course Duration */}
                            <div className="flex items-center gap-3 w-full sm:w-1/2">
                                <div
                                    className="w-12 h-12 rounded-full flex-shrink-0"
                                    style={{ background: "linear-gradient(135deg, #7143FE 0%, #a78bfa 100%)" }}
                                />
                                <div>
                                    <p className="text-[#7143FE] italic font-semibold text-[20px]" style={{ fontFamily: "'PP Editorial New', serif" }}>
                                        {durationVal}
                                    </p>
                                    <p className="text-[14px] font-bold text-gray-800" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                                        {durationLabel}
                                    </p>
                                </div>
                            </div>

                            {/* Divider for desktop */}
                            <div className="hidden sm:block h-10 w-[1px] bg-gray-200" />

                            {/* Live Project Hours */}
                            <div className="flex items-center gap-3 w-full sm:w-1/2">
                                <div
                                    className="w-12 h-12 rounded-full flex-shrink-0"
                                    style={{ background: "linear-gradient(135deg, #7143FE 0%, #a78bfa 100%)" }}
                                />
                                <div>
                                    <p className="text-[#7143FE] italic font-semibold text-[20px]" style={{ fontFamily: "'PP Editorial New', serif" }}>
                                        {hoursVal}
                                    </p>
                                    <p className="text-[14px] font-bold text-gray-800" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
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
