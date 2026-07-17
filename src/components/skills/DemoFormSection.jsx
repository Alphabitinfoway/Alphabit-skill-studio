"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function DemoFormSection({ isOpen, onClose, isInline = false, defaultCourse = "" }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        contact: "",
        course: defaultCourse || "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: connect to backend / email service
        console.log("Demo form submitted:", form);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setForm({
                name: "",
                email: "",
                contact: "",
                course: defaultCourse || "",
            });
            if (onClose) onClose();
        }, 2000);
    };

    const renderFormCard = () => (
        <div className="relative w-full max-w-[400px] bg-white rounded-[24px] overflow-hidden shadow-2xl">
            {/* Close Button - only if modal */}
            {!isInline && (
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors duration-200"
                    aria-label="Close"
                >
                    <X className="w-4 h-4" />
                </button>
            )}

            {/* Purple Header */}
            <div
                className="px-6 pt-8 pb-6"
                style={{
                    background: "linear-gradient(180deg, #7143FE 0%, #F5F5F5 100%)",
                }}
            >
                <p
                    className="text-[#FF5622] text-[20px] italic font-semibold  leading-snug"
                    style={{ fontFamily: "'PP Editorial New', serif" }}
                >
                    Book a Free Demo Class {" "}
                    <span
                        className="font-medium text-black not-italic " style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                        - your path to becoming a pro at your skill.
                    </span>
                </p>
            </div>

            {/* Form Body */}
            <form
                onSubmit={handleSubmit}
                className="px-6 py-6 flex flex-col gap-4 bg-[#F5F5F5]"
            >
                {submitted ? (
                    <div className="py-8 text-center text-[#7143FE] font-bold" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                        Thank you! Your demo class is booked.
                    </div>
                ) : (
                    <>
                        {/* Name */}
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="demo-name"
                                className="text-[13px] font-medium text-[#111111]"
                                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                            >
                                Name
                            </label>
                            <input
                                id="demo-name"
                                name="name"
                                type="text"
                                placeholder="Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E4E4E7] text-[14px] text-[#111] placeholder:text-[#aaa] outline-none focus:border-[#7143FE] focus:ring-2 focus:ring-[#7143FE]/15 transition-all"
                                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="demo-email"
                                className="text-[13px] font-medium text-[#111111]"
                                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                            >
                                Email
                            </label>
                            <input
                                id="demo-email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E4E4E7] text-[14px] text-[#111] placeholder:text-[#aaa] outline-none focus:border-[#7143FE] focus:ring-2 focus:ring-[#7143FE]/15 transition-all"
                                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                            />
                        </div>

                        {/* Contact Number */}
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="demo-contact"
                                className="text-[13px] font-medium text-[#111111]"
                                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                            >
                                Contact Number
                            </label>
                            <input
                                id="demo-contact"
                                name="contact"
                                type="tel"
                                placeholder="Contact Number"
                                value={form.contact}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E4E4E7] text-[14px] text-[#111] placeholder:text-[#aaa] outline-none focus:border-[#7143FE] focus:ring-2 focus:ring-[#7143FE]/15 transition-all"
                                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                            />
                        </div>

                        {/* Course */}
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="demo-course"
                                className="text-[13px] font-medium text-[#111111]"
                                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                            >
                                Techinal Skills
                            </label>
                            <input
                                id="demo-course"
                                name="course"
                                type="text"
                                placeholder="Techinal Skill"
                                value={form.course}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E4E4E7] text-[14px] text-[#111] placeholder:text-[#aaa] outline-none focus:border-[#7143FE] focus:ring-2 focus:ring-[#7143FE]/15 transition-all"
                                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                            />
                        </div>

                        {/* Submit */}
                        <div className="flex justify-center mt-2">
                            <button
                                type="submit"
                                className="inline-flex items-center gap-1 px-4 py-3 bg-[#7143FE] hover:bg-[#5f33eb] text-white rounded-full text-[14px] font-semibold transition-all duration-300 hover:scale-105 shadow-md shadow-[#7143FE]/30 cursor-pointer"
                                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                            >
                                <img src="/whiteArrow.png" alt="" className="w-6 h-6" />
                                Submit
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );

    if (isInline) {
        return renderFormCard();
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.92, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 24 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4"
                        // Stop clicks inside the modal from closing
                        onClick={(e) => e.stopPropagation()}
                    >
                        {renderFormCard()}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
