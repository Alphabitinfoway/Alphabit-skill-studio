"use client";

import { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { getSkillBySlug, skills } from "@/data/skills";
import { API_BASE_URL } from "@/config/api";

export default function DemoFormSection({ isOpen, onClose, isInline = false, defaultCourse = "" }) {
    const params = useParams();
    const pathname = usePathname();
    const isSlugPage = Boolean(params?.slug || (pathname?.startsWith("/skills/") && pathname.split("/skills/")[1]));

    // Dynamically detect skill title from slug URL if defaultCourse not provided
    const getPrefilledCourse = () => {
        if (defaultCourse) return defaultCourse;
        const slug = params?.slug || (pathname?.startsWith("/skills/") ? pathname.split("/skills/")[1]?.split("/")[0] : null);
        if (slug) {
            const skillObj = getSkillBySlug(slug);
            if (skillObj?.title) return skillObj.title;
        }
        return "";
    };

    const initialCourse = getPrefilledCourse();

    const [form, setForm] = useState({
        name: "",
        email: "",
        contact: "",
        course: initialCourse,
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    // Sync prefilled course when navigation changes or modal opens
    useEffect(() => {
        const detectedCourse = getPrefilledCourse();
        if (detectedCourse && !form.course) {
            setForm((prev) => ({ ...prev, course: detectedCourse }));
        }
    }, [params, pathname, defaultCourse, isOpen]);

    const handleChange = (e) => {
        if (e.target.name === "contact") {
            const value = e.target.value.replace(/\D/g, "");
            if (value.length <= 10) {
                setForm((prev) => ({ ...prev, contact: value }));
            }
        } else {
            setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }
        if (error) setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        try {
            const payload = {
                name: form.name,
                email: form.email,
                contactNumber: form.contact,
                skill: form.course
            };

            const response = await fetch(`${API_BASE_URL}/api/inquiries`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "true"
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                    setForm({
                        name: "",
                        email: "",
                        contact: "",
                        course: getPrefilledCourse(),
                    });
                    if (onClose) onClose();
                }, 2500);
            } else {
                const errText = await response.text().catch(() => "");
                let errData = {};
                try {
                    errData = JSON.parse(errText);
                } catch (e) {
                    errData = { rawText: errText };
                }
                console.error("Inquiries API Error 400 details: " + JSON.stringify({
                    status: response.status,
                    errorResponse: errData,
                    sentPayload: payload
                }, null, 2));
                const serverMsg = errData.message || errData.error || (Array.isArray(errData.errors) ? errData.errors.join(", ") : (typeof errData.errors === 'object' ? JSON.stringify(errData.errors) : null)) || errData.rawText;
                setError(serverMsg || `Submission failed with status ${response.status}`);
            }
        } catch (err) {
            console.error("Error submitting inquiry form:", err);
            setError(err.message || "Network error. Please try again.");
        } finally {
            setSubmitting(false);
        }
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
                    className="text-[#FFFFFF] text-[20px] italic font-semibold leading-snug"
                    style={{ fontFamily: "'PP Editorial New', serif" }}
                >
                    Book a Free Demo Class{" "}
                    <span
                        className="font-medium text-black not-italic"
                        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
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
                    <div
                        className="py-8 text-center text-[#7143FE] font-bold"
                        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
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
                                suppressHydrationWarning
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
                                suppressHydrationWarning
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
                                suppressHydrationWarning
                                id="demo-contact"
                                name="contact"
                                type="tel"
                                pattern="[0-9]{10}"
                                maxLength={10}
                                title="Please enter a valid 10-digit mobile number."
                                placeholder="Contact Number"
                                value={form.contact}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E4E4E7] text-[14px] text-[#111] placeholder:text-[#aaa] outline-none focus:border-[#7143FE] focus:ring-2 focus:ring-[#7143FE]/15 transition-all [&:not(:placeholder-shown):invalid]:border-red-400"
                                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                            />
                            {error && (
                                <p className="text-red-500 text-xs font-semibold mt-0.5">
                                    {error}
                                </p>
                            )}
                        </div>

                        {/* Technical Skill / Course */}
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="demo-course"
                                className="text-[13px] font-medium text-[#111111]"
                                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                            >
                                Technical Skills
                            </label>
                            {isSlugPage ? (
                                <input
                                    id="demo-course"
                                    name="course"
                                    type="text"
                                    value={form.course}
                                    readOnly
                                    tabIndex={-1}
                                    aria-readonly="true"
                                    className="w-full px-4 py-3 rounded-xl bg-[#EFEFEF] border border-[#E4E4E7] text-[14px] text-[#555] cursor-not-allowed outline-none select-none font-medium"
                                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                                />
                            ) : (
                                <select
                                    id="demo-course"
                                    name="course"
                                    value={form.course}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E4E4E7] text-[14px] text-[#111] outline-none focus:border-[#7143FE] focus:ring-2 focus:ring-[#7143FE]/15 transition-all cursor-pointer"
                                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                                >
                                    <option value="" disabled>Select Technical Skill</option>
                                    {skills.map((s) => (
                                        <option key={s.slug} value={s.title}>
                                            {s.title}
                                        </option>
                                    ))}
                                    {form.course && !skills.some((s) => s.title === form.course) && (
                                        <option value={form.course}>{form.course}</option>
                                    )}
                                </select>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center mt-2">
                            <button
                                suppressHydrationWarning
                                type="submit"
                                disabled={submitting}
                                className="inline-flex items-center gap-1.5 px-6 py-3 bg-[#7143FE] hover:bg-[#5f33eb] disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-full text-[14px] font-semibold transition-all duration-300 hover:scale-105 shadow-md shadow-[#7143FE]/30 cursor-pointer"
                                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                            >
                                {!submitting && <img src="/whiteArrow.webp" alt="" className="w-5 h-5" />}
                                {submitting ? "Submitting..." : "Submit"}
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
                        onClick={(e) => e.stopPropagation()}
                    >
                        {renderFormCard()}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
