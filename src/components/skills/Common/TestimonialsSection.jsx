"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsSection({ data }) {
    const testimonials = data?.testimonialsSectionData?.testimonials || [
        {
            id: 1,
            text: '"I had zero coding experience when I joined. Within 5 months I had three live projects deployed on GitHub and got placed at a software company in Rajkot. The training here is genuinely industry-level."',
            name: "Priya Desai",
            title: "Junior React Developer, Rajkot",
            image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1786443919/copy_of_whatsapp_image_2026-08-11_at_31908_pm_ugdoba.jpg"
        },
        {
            id: 2,
            text: '"I always wanted to build a career in IT, but Alphabit Skill Studio gave me the clarity and direction I was missing. The hands-on learning, practical exposure, and expert mentorship transformed my curiosity into confidence."',
            name: "Harshad Zalaniya",
            title: "Cyber Security Specialist, Ahmedabad",
            image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1786443959/copy_of_whatsapp_image_2026-08-11_at_31948_pm_1_yokobz.jpg"
        },
        {
            id: 3,
            text: '"I discovered Alphabit Skill Studio through a reel, and it completely changed my perspective. The mentors helped strengthen my fundamentals through practical learning, boosting my confidence and taking my skills to the next level."',
            name: "Aanshi Bhuva",
            title: "Python AI/ML Developer, Surat",
            image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1786444211/WhatsApp_Image_2026-08-11_at_3.19.48_PM_o3z71q.jpg" 
        }       
    ];

    const titleNormal = data?.testimonialsSectionData?.titleNormal || "Verified Career Transitions";
    const titleParent = data?.testimonialsSectionData?.titleParent || "Hear Directly from";
    const titleItalic = data?.testimonialsSectionData?.titleItalic || "Deployed Alumni";

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        if (testimonials.length <= 1) return;
        const timer = setInterval(() => {
            nextTestimonial();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex, testimonials.length]);

    if (testimonials.length === 0) return null;

    return (
        <section className="relative w-full bg-[#F5F5F5] py-10 lg:pb-32 overflow-hidden z-10">
            {/* Desktop Background Curve */}
            <div
                className="hidden lg:block absolute top-0 left-0 w-full h-[580px]"
                style={{
                    background: "linear-gradient(180deg, rgba(245, 245, 245, 0) 10% , #7143FE 100%)",
                    clipPath: "ellipse(70% 100% at 50% 0%)",
                    zIndex: -1
                }}
            />

            <div className="container mx-auto px-5 sm:px-8 max-w-[1140px] relative z-10 lg:pt-24">
                
                {/* MOBILE LAYOUT (lg:hidden) - Pixel perfect matching user screenshot */}
                <div className="block lg:hidden">
                    {/* Mobile Header with Top-Right Nav Controls */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                        <div>
                            <h2
                                className="text-[#111111] text-[24px] sm:text-[28px] font-extrabold tracking-tight leading-[1.2]"
                                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                            >
                                {titleNormal}
                                <br />
                                {titleParent}
                            </h2>
                            <span
                                className="text-[#FF5622] text-[30px] sm:text-[36px] font-normal leading-[1.1] block mt-0.5"
                                style={{ fontFamily: "'PP Editorial New', serif", fontStyle: "italic" }}
                            >
                                {titleItalic}
                            </span>
                        </div>

                        {/* Top-Right Navigation Arrow Buttons */}
                        {testimonials.length > 1 && (
                            <div className="flex items-center gap-2 shrink-0 pt-1">
                                <button
                                    onClick={prevTestimonial}
                                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-900 flex items-center justify-center active:scale-90 transition-all hover:bg-white"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="w-5 h-5 text-zinc-900 stroke-[2]" />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-900 flex items-center justify-center active:scale-90 transition-all hover:bg-white"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight className="w-5 h-5 text-zinc-900 stroke-[2]" />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Purple Testimonial Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.4 }}
                            className="bg-[#7143FE] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 text-white shadow-xl shadow-purple-500/20 relative"
                        >
                            {/* Translucent Avatar Circle */}
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden relative bg-white/30 backdrop-blur-sm border-2 border-white/40 mb-5">
                                {testimonials[currentIndex].image && (
                                    <Image
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                            </div>

                            {/* Quote Text */}
                            <p
                                className="text-white text-[14px] sm:text-[16px] leading-relaxed font-medium mb-6"
                                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                            >
                                {testimonials[currentIndex].text}
                            </p>

                            {/* Author Info */}
                            <div>
                                <h4
                                    className="text-white text-[17px] sm:text-[18px] font-bold leading-tight"
                                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                                >
                                    {testimonials[currentIndex].name}
                                </h4>
                                <p
                                    className="text-white/80 text-[13px] sm:text-[14px] font-normal mt-0.5"
                                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                                >
                                    {testimonials[currentIndex].title}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Pagination Dots below Card */}
                    {testimonials.length > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-6">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`transition-all duration-300 rounded-full ${
                                        index === currentIndex
                                            ? "w-6 h-2 bg-[#7143FE]"
                                            : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* DESKTOP LAYOUT (hidden lg:block) - Original layout preserved */}
                <div className="hidden lg:block">
                    {/* Header with Navigation */}
                    <div className="flex flex-row justify-between mb-28 gap-8 -ml-10">
                        <div className="max-w-3xl">
                            <p 
                                className="text-black mb-2 tracking-tight"
                                style={{ 
                                    fontFamily: "'Cabinet Grotesk', sans-serif", 
                                    fontSize: "32px",
                                    fontWeight: 700
                                }}
                            >
                                {titleNormal}
                            </p>
                            <div className="flex items-baseline gap-3">
                                <h2 
                                    className="text-black"
                                    style={{
                                        fontFamily: "'Cabinet Grotesk', sans-serif",
                                        fontSize: "32px",
                                        fontWeight: 700,
                                        lineHeight: "100%",
                                    }}
                                >
                                    {titleParent}
                                </h2>
                                <span
                                    style={{
                                        fontFamily: "'PP Editorial New', serif",
                                        fontSize: "52px",
                                        color: "#FF5622",
                                        fontStyle: "italic",
                                        fontWeight: 400,
                                        lineHeight: "100%",
                                    }}
                                >
                                    {titleItalic}
                                </span>
                            </div>
                        </div>

                        {testimonials.length > 1 && (
                            <div className="flex gap-4 pb-4 pr-2 items-end">
                                <button
                                    onClick={prevTestimonial}
                                    className="w-[48px] h-[48px] rounded-full border-[1.5px] border-[#333]/50 flex items-center justify-center hover:bg-white transition-all active:scale-90 group cursor-pointer"
                                >
                                    <img src="/black arrow.webp" alt="arrow" className="w-7 rotate-225" />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="w-[48px] h-[48px] rounded-full border-[1.5px] border-[#333]/50 flex items-center justify-center hover:bg-white transition-all active:scale-90 group cursor-pointer"
                                >
                                    <img src="/black arrow.webp" alt="arrow" className="w-7 rotate-45" />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Testimonial Card */}
                    <div className="relative flex justify-center w-full max-w-[1140px] mx-auto mt-4">
                        {/* Secondary Solid Drop Shadow Layer */}
                        <div
                            className="absolute top-0 left-0 w-full h-[380px] bg-[#d7cdfa] transform translate-y-[24px] opacity-80"
                            style={{ borderRadius: "200px 200px 30px 200px", zIndex: 0 }}
                        />

                        {/* Main Purple Card with Motion */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                                className="relative bg-[#7445FE] w-full h-[380px] flex items-center shadow-sm"
                                style={{ borderRadius: "200px 200px 30px 200px", zIndex: 10 }}
                            >
                                {/* Student Image Bubble */}
                                <motion.div 
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="w-[200px] h-[200px] bg-[#f8f8fb] rounded-full flex-shrink-0 overflow-hidden relative ml-[70px]"
                                >
                                    {testimonials[currentIndex].image && (
                                        <Image
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            fill
                                            className="object-cover"
                                        />
                                    )}
                                </motion.div>

                                {/* Testimonial Content Box */}
                                <div className="flex-1 text-white relative h-full flex flex-col justify-center px-16 max-w-[800px]">
                                    {testimonials[currentIndex].track && (
                                        <motion.span
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.4 }}
                                            className="inline-block w-fit bg-white/20 backdrop-blur-sm text-white text-[12px] font-semibold px-3 py-1 rounded-full mb-2 tracking-wide uppercase"
                                        >
                                            {testimonials[currentIndex].track}
                                        </motion.span>
                                    )}
                                    <motion.p 
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        className="text-[20px] font-[400] leading-[1.6] font-sans"
                                    >
                                        {testimonials[currentIndex].text}
                                    </motion.p>

                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 0.5 }}
                                        className="absolute right-[60px] bottom-[40px] text-right"
                                    >
                                        <h4 className="text-[16px] font-[500] text-white">
                                            {testimonials[currentIndex].name}
                                        </h4>
                                        <p className="text-[12px] text-white font-[400] mt-[2px]">
                                            {testimonials[currentIndex].title}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
}

