"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        id: 1,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        name: "Lorem Ipsum",
        title: "Lorem Ipsum",
        image: "/Home Page/1.png" // Kept blank to show the clean white circle just like the picture
    },
    {
        id: 2,
        text: "The hands-on training and community support at the studio are unmatched. I went from zero coding knowledge to building full-stack applications in just a few months.",
        name: "Priya Patel",
        title: "Full Stack Developer",
        image: "/Home Page/2.png" 
    },
    {
        id: 3,
        text: "The placement cell is incredible. They helped me refine my resume and prepared me for tough interviews with top-tier companies.",
        name: "Aniket Verma",
        title: "UX Designer",
        image: "/Home Page/3.png" 
    }
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Automatic change every 3 seconds (2s delay + animation time)
    useEffect(() => {
        const timer = setInterval(() => {
            nextTestimonial();
        }, 5000); // 3 sec loop feels better but it's consistent

        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <section className="relative w-full bg-[#f4f4f6] pb-32 overflow-hidden z-10">
            {/* The background curve transition */}
            <div
                className="absolute top-0 left-0 w-full h-[580px]"
                style={{
                    background: "linear-gradient(180deg, rgba(245, 245, 245, 0) 10% , #7143FE 100%)",
                    clipPath: "ellipse(70% 100% at 50% 0%)",
                    zIndex: -1
                }}
            ></div>

            <div className="container mx-auto px-4 md:px-6 max-w-[1140px] relative z-10 pt-24">
                {/* Header with Navigation */}
                <div className="flex flex-col md:flex-row justify-between  mb-28 gap-8 -ml-4 lg:-ml-10">
                    <div className="max-w-3xl">
                        <p 
                            className="text-black mb-2 tracking-tight"
                            style={{ 
                                fontFamily: "'Cabinet Grotesk', sans-serif", 
                                fontSize: "32px",
                                fontStyle: "bold",
                                fontWeight: 700
                            }}
                        >
                            Verified Career Transitions Hear Directly
                        </p>
                        <div className="flex items-baseline gap-3">
                            <h2 
                                className="text-black"
                                style={{
                                    fontFamily: "'Cabinet Grotesk', sans-serif",
                                    fontSize: "32px",
                                    fontWeight: 700,
                                    lineHeight: "100%",
                                    letterSpacing: "0%"
                                }}
                            >
                                from
                            </h2>
                            <span
                                style={{
                                    fontFamily: "'PP Editorial New', serif",
                                    fontSize: "52px",
                                    color: "#FF5622",
                                    fontStyle: "italic",
                                    fontWeight: 400,
                                    lineHeight: "100%",
                                    letterSpacing: "0%"
                                }}
                            >
                                Deployed Alumni
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-4 pb-4 pr-2 items-end">
                        <button
                            onClick={prevTestimonial}
                            className="w-[48px] h-[48px] rounded-full border-[1.5px] border-[#333]/30 flex items-center justify-center hover:bg-white transition-all active:scale-90 group"
                        >
                            <ArrowLeft size={20} strokeWidth={1.5} className="text-[#111]" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="w-[48px] h-[48px] rounded-full border-[1.5px] border-[#333]/30 flex items-center justify-center hover:bg-white transition-all active:scale-90 group"
                        >
                            <ArrowRight size={20} strokeWidth={1.5} className="text-[#111]" />
                        </button>
                    </div>
                </div>

                {/* Testimonial Card */}
                <div className="relative flex justify-center w-full max-w-[1140px] mx-auto mt-4">

                    {/* Secondary Solid Drop Shadow Layer */}
                    <div
                        className="absolute top-0 left-0 w-full h-[380px] bg-[#d7cdfa] transform translate-y-[24px] opacity-80"
                        style={{ borderRadius: "200px 200px 30px 200px", zIndex: 0 }}
                    ></div>

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
                                className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-[#f8f8fb] rounded-full flex-shrink-0 overflow-hidden relative ml-8 lg:ml-[70px]"
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
                            <div className="flex-1 text-white relative h-full flex flex-col justify-center px-8 lg:px-16 max-w-[800px]">
                                
                                <motion.p 
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="text-[17px] md:text-[20px] font-[400] leading-[1.6] font-sans"
                                >
                                    {testimonials[currentIndex].text}
                                </motion.p>

                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="absolute right-8 lg:right-[60px] bottom-[40px] text-right"
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
        </section>
    );
}
