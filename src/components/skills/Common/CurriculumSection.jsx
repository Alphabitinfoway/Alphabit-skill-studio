"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import { getSkillBySlug } from "@/data/skills";
import { API_BASE_URL } from "@/config/api";

export default function CurriculumSection({ data, syllabusPdf = null }) {
    const params = useParams();
    const pathname = usePathname();

    // Support the new unified curriculumTracks array of dict, or build it dynamically from legacy module exports
    let curriculumTracks = data?.curriculumTracks;

    if (!curriculumTracks) {
        const legacyKeys = Object.keys(data || {}).filter(key => key.endsWith("Modules") && Array.isArray(data[key]) && data[key].length > 0);
        const configTracks = data?.trackSelectorData?.tracks || [];
        const orderedKeys = [];

        configTracks.forEach(track => {
            const trackTitle = track.title.toLowerCase();
            const matchingKey = legacyKeys.find(key => {
                const arrayTitle = data[key]?.title;
                if (arrayTitle) {
                    return arrayTitle.toLowerCase() === trackTitle;
                }
                const baseKey = key.replace("Modules", "").toLowerCase();
                const normalizedTrack = trackTitle.replace(/-/g, " ").replace(/[^a-z0-9\s]/g, "");
                const trackWords = normalizedTrack.split(/\s+/).filter(Boolean);
                const keyWords = baseKey.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().split(/\s+/).filter(Boolean);

                return trackWords.some(w => keyWords.includes(w) || baseKey.includes(w)) || 
                       keyWords.some(w => trackWords.includes(w) || normalizedTrack.includes(w));
            });
            if (matchingKey) orderedKeys.push(matchingKey);
        });

        legacyKeys.forEach(key => {
            if (!orderedKeys.includes(key)) orderedKeys.push(key);
        });

        curriculumTracks = orderedKeys.map((key, idx) => ({
            title: configTracks[idx]?.title || key.replace("Modules", "").replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim(),
            path: key.replace("Modules", "").toLowerCase(),
            modules: data[key]
        }));
    }

    const [activeTab, setActiveTab] = useState(0);
    const [activeModule, setActiveModule] = useState(0);
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const tabRefs = useRef([]);

    // Form and Modal States
    const [showFormModal, setShowFormModal] = useState(false);
    const [showPdfModal, setShowPdfModal] = useState(false);
    const [hasFilledForm, setHasFilledForm] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    // Form inputs state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    useEffect(() => {
        setActiveModule(0);
    }, [activeTab]);

    useEffect(() => {
        const el = tabRefs.current[activeTab];
        if (el) {
            const { offsetLeft, offsetWidth } = el;
            setPillStyle({ left: offsetLeft, width: offsetWidth, opacity: 1 });
        }
    }, [activeTab, curriculumTracks.length]);

    if (curriculumTracks.length === 0) return null;

    const hasMultipleTracks = curriculumTracks.length > 1;
    const activeModulesList = curriculumTracks[activeTab]?.modules || [];
    const currentData = activeModulesList[activeModule] || activeModulesList[0];

    // Get the track title matching the active tab index from trackSelectorData
    const currentPathLabel = curriculumTracks[activeTab]?.title;

    const openPdfViewer = () => {
        if (syllabusPdf) {
            setShowPdfModal(true);
        } else {
            window.open(`/skills/curriculum?path=${curriculumTracks[activeTab].path}`, "_blank");
        }
    };

    const handleOpenPdfFlow = () => {
        if (hasFilledForm) {
            openPdfViewer();
        } else {
            setShowFormModal(true);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.phone) {
            setSubmitting(true);
            setError(null);
            try {
                const slug = params?.slug || (pathname?.startsWith("/skills/") ? pathname.split("/skills/")[1]?.split("/")[0] : null);
                let skillTitle = "";
                if (slug) {
                    const skillObj = getSkillBySlug(slug);
                    if (skillObj?.title) skillTitle = skillObj.title;
                }
                if (!skillTitle) {
                    skillTitle = currentPathLabel;
                }

                const payload = {
                    name: formData.name,
                    email: formData.email,
                    contactNumber: formData.phone,
                    skill: skillTitle
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
                    setHasFilledForm(true);
                    setShowFormModal(false);
                    openPdfViewer();
                } else {
                    const errText = await response.text().catch(() => "");
                    let errData = {};
                    try {
                        errData = JSON.parse(errText);
                    } catch (err) {
                        errData = { rawText: errText };
                    }
                    const serverMsg = errData.message || errData.error || (Array.isArray(errData.errors) ? errData.errors.join(", ") : (typeof errData.errors === 'object' ? JSON.stringify(errData.errors) : null)) || errData.rawText;
                    setError(serverMsg || `Submission failed with status ${response.status}`);
                }
            } catch (err) {
                console.error("Inquiries API Error: ", err);
                setError("An error occurred. Please try again.");
            } finally {
                setSubmitting(false);
            }
        }
    };

    return (
        <section
            className="relative w-full bg-gradient-to-b from-[#7143FE] via-[#D7CDF7] to-[#F5F5F5] pt-36 pb-24 px-6 md:px-12 overflow-hidden"
            style={{
                clipPath: "ellipse(110% 100% at 50% 100%)",
                marginTop: "80px"
            }}
        >
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-[1600px] mx-auto relative z-10">

                {/* HEADING */}
                <div className="text-center mb-16 px-4 flex flex-row items-baseline justify-center gap-3 flex-wrap">
                    <span
                        className="text-[#FF5622] italic font-normal"
                        style={{
                            fontFamily: "'PP Editorial New', serif",
                            fontSize: "72px",
                            lineHeight: "100%"
                        }}
                    >
                        Curriculum
                    </span>
                    <h2
                        className="text-black font-bold tracking-tight"
                        style={{
                            fontFamily: "'Cabinet Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: "32px",
                            lineHeight: "100%",
                            letterSpacing: "0%"
                        }}
                    >
                        that shapes your future
                    </h2>
                </div>

                {/* Glass Tabs Selector */}
                {hasMultipleTracks && (
                    <div className="flex justify-start mb-16">
                        <div className="relative flex gap-3 p-1.5 rounded-2xl overflow-hidden"
                            style={{
                                background: "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(230,220,255,0.30) 100%)",
                                backdropFilter: "blur(16px) saturate(1.6)",
                                WebkitBackdropFilter: "blur(16px) saturate(1.6)",
                                border: "1.5px solid rgba(255,255,255,0.65)",
                            }}
                        >
                            <motion.span
                                className="absolute top-1.5 bottom-1.5 rounded-xl pointer-events-none"
                                style={{
                                    background: `linear-gradient(170deg, rgba(255,255,255,0.70) 0%, rgba(200,180,255,0.35) 45%, rgba(124,58,237,0.20) 100%)`,
                                    boxShadow: `
                                        0 4px 20px rgba(124,58,237,0.20),
                                        0 1.5px 5px rgba(124,58,237,0.12)
                                    `,
                                    backdropFilter: "blur(18px) saturate(2)",
                                    WebkitBackdropFilter: "blur(18px) saturate(2)",
                                    border: "1.5px solid rgba(255,255,255,0.70)",
                                }}
                                animate={{
                                    left: pillStyle.left,
                                    width: pillStyle.width,
                                    opacity: pillStyle.opacity,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 380,
                                    damping: 34,
                                    opacity: { duration: 0.15 },
                                }}
                            />

                            {curriculumTracks.map((track, idx) => {
                                const title = track.title;
                                return (
                                    <button
                                        key={track.path || idx}
                                        ref={(el) => (tabRefs.current[idx] = el)}
                                        onClick={() => setActiveTab(idx)}
                                        suppressHydrationWarning
                                        className={`relative z-10 px-5 py-2.5 whitespace-nowrap text-[14px] font-[600] rounded-xl transition-colors duration-200 ${
                                            activeTab === idx
                                                ? "text-[#7C3AED] font-[700]"
                                                : "text-gray-600 hover:text-gray-800"
                                        }`}
                                    >
                                        {title}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Left Timeline + Right Detail Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
                    
                    {/* Left Column: Modules list */}
                    <div className="lg:col-span-4 relative p-6 border-2 border-black rounded-[32px]">

                        <div className="flex flex-col gap-6">
                            {activeModulesList.map((item, index) => {
                                const isActive = activeModule === index;

                                return (
                                    <div
                                        key={item.num}
                                        onClick={() => setActiveModule(index)}
                                        className="flex items-center cursor-pointer group"
                                    >
                                        <div
                                            className={`flex-grow flex items-center gap-4 px-5 py-4 rounded-2xl border-[1.5px] transition-all duration-300 ${
                                                isActive
                                                    ? "bg-[#E0D7FF] border-[#7143FE] shadow-[0_8px_20px_rgba(113,67,254,0.12)]"
                                                    : "bg-white border-transparent hover:border-[#7143FE]/30 shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                                            }`}
                                        >
                                            <div
                                                className={`w-11 h-11 rounded-full shrink-0 flex items-center justify-center font-bold text-[14px] transition-all duration-300 ${
                                                    isActive
                                                        ? "bg-[#7143FE] text-white shadow-[0_4px_12px_rgba(113,67,254,0.3)]"
                                                        : "bg-white border border-[#7143FE]/40 text-[#7143FE] group-hover:border-[#7143FE] group-hover:bg-[#7143FE]/5"
                                                }`}
                                            >
                                                {item.num}
                                            </div>

                                            <span
                                                className={`text-[15px] font-[600] leading-tight font-cabinet transition-colors duration-300 ${
                                                    isActive ? "text-[#7143FE]" : "text-[#374151]"
                                                }`}
                                            >
                                                {item.title}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Module Details Preview Card */}
                    <div className="lg:col-span-8 lg:sticky lg:top-28">
                        <div className="p-8 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${activeTab}-${activeModule}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full"
                                >
                                    {/* MODULE BADGE + NAV BUTTONS */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-[12px] font-[700] uppercase tracking-wider text-[#7143FE] bg-[#B29AFA] border-[1px] border-[#7143FE] px-3.5 py-1.5 rounded-full inline-block">
                                            Module {currentData.num}
                                        </span>
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => setActiveModule((prev) => Math.max(prev - 1, 0))}
                                                disabled={activeModule === 0}
                                                suppressHydrationWarning
                                                className="w-[48px] h-[48px] rounded-full border-[1.5px] border-[#333]/50 flex items-center justify-center hover:bg-white transition-all active:scale-90 group disabled:opacity-30 disabled:cursor-not-allowed"
                                                aria-label="Previous module"
                                            >
                                                <Image src="/black arrow.webp" alt="arrow" width={28} height={28} className="w-7 rotate-225" />
                                            </button>
                                            <button
                                                onClick={() => setActiveModule((prev) => Math.min(prev + 1, activeModulesList.length - 1))}
                                                disabled={activeModule === activeModulesList.length - 1}
                                                suppressHydrationWarning
                                                className="w-[48px] h-[48px] rounded-full border-[1.5px] border-[#333]/50 flex items-center justify-center hover:bg-white transition-all active:scale-90 group disabled:opacity-30 disabled:cursor-not-allowed"
                                                aria-label="Next module"
                                            >
                                                <Image src="/black arrow.webp" alt="arrow" width={28} height={28} className="w-7 rotate-45" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="text-[40px] font-bold text-gray-900 font-cabinet mb-4 leading-tight">
                                        {currentData.title}
                                    </h3>

                                    {/* TOP SECTION: Flex layout for Description + Image */}
                                    <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
                                        <div className="flex-1 pt-4">
                                            <p className="text-[#374151] leading-relaxed font-cabinet" style={{ fontSize: "20px" }}>
                                                {currentData.description}
                                            </p>
                                        </div>
                                        <div className="w-full md:w-[50%] lg:w-[45%] shrink-0 md:-mt-8">
                                            <div className="relative w-full rounded-2xl overflow-hidden bg-transparent">
                                                {currentData.image && (
                                                    <Image
                                                        src={currentData.image}
                                                        alt={currentData.title || "Module Preview"}
                                                        width={400}
                                                        height={300}
                                                        className="w-full h-auto object-contain max-h-[300px]"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* MIDDLE SECTION: What you'll learn */}
                                    <div className="mt-1">
                                        <h4 className="text-[36px] font-bold text-gray-900 font-cabinet mb-4">
                                            What you'll learn
                                        </h4>
                                        <div className="flex flex-wrap gap-2.5">
                                            {currentData.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className=" text-gray-900 text-[16px] font-[500] px-4 py-2 border-[1.5px] border-gray-900 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* BOTTOM SECTION: Techstack */}
                                    <div className="mt-8 pt-4">
                                        <h4 className="text-[36px] font-bold text-gray-900 font-cabinet mb-4">
                                            Techstack
                                        </h4>
                                        <div className="flex flex-col gap-3 text-[20px] leading-relaxed text-gray-800 font-cabinet">
                                            {Object.entries(currentData.techstack || {}).map(([key, value]) =>
                                                value ? (
                                                    <p key={key}>
                                                        <strong className="text-gray-900 font-bold capitalize">
                                                            {key === "cms" ? "CMS" : key.charAt(0).toUpperCase() + key.slice(1)}:
                                                        </strong>{" "}{value}
                                                    </p>
                                                ) : null
                                            )}
                                        </div>
                                    </div>

                                    {/* PDF SECURE VIEW TRIGGERS */}
                                    <div className="mt-12 pt-6 flex justify-end">
                                        <button
                                            onClick={handleOpenPdfFlow}
                                            suppressHydrationWarning
                                            className="px-8 py-4 bg-[#7143FE] hover:bg-[#5C32EB] text-white font-bold text-[16px] rounded-2xl shadow-[0_6px_20px_rgba(113,67,254,0.3)] hover:shadow-[0_8px_24px_rgba(113,67,254,0.4)] hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2.5"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                            </svg>
                                            View Full Curriculum PDF
                                        </button>
                                    </div>

                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>

            </div>

            {/* MODAL 1: Lead Capture Form */}
            <AnimatePresence>
                {showFormModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowFormModal(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal Container */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-10 border border-gray-100 overflow-hidden"
                        >
                            {/* Decorative Background */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7143FE]/10 rounded-full blur-3xl -mr-10 -mt-10" />

                            <div className="flex justify-between items-start mb-6 relative">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 font-cabinet mb-1">
                                        Unlock Full Curriculum
                                    </h3>
                                    <p className="text-gray-500 text-sm">
                                        Please enter your details below to view the detailed PDF curriculum.
                                    </p>
                                </div>
                                <button 
                                    onClick={() => setShowFormModal(false)}
                                    className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleFormSubmit} className="space-y-4 relative">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Name</label>
                                    <input 
                                        type="text" 
                                        required
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7143FE]/30 focus:border-[#7143FE] transition-all text-gray-900"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                                    <input 
                                        type="email"
                                        required
                                        placeholder="Enter your email address"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7143FE]/30 focus:border-[#7143FE] transition-all text-gray-900"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        required
                                        pattern="[0-9]{10}"
                                        maxLength={10}
                                        title="Please enter a valid 10-digit mobile number."
                                        placeholder="Enter your mobile number"
                                        value={formData.phone}
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/\D/g, "");
                                            if (value.length <= 10) {
                                                setFormData({...formData, phone: value});
                                            }
                                        }}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7143FE]/30 focus:border-[#7143FE] transition-all text-gray-900 [&:not(:placeholder-shown):invalid]:border-red-400"
                                    />
                                    {error && (
                                        <p className="text-red-500 text-sm font-semibold mt-1.5">
                                            {error}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Selected Path</label>
                                    <input 
                                        type="text" 
                                        disabled
                                        value={currentPathLabel}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 font-[500] cursor-not-allowed"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full mt-4 py-4 bg-[#7143FE] hover:bg-[#5C32EB] text-white font-bold rounded-xl shadow-lg transition-all duration-200 disabled:bg-[#7143FE]/50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {submitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </>
                                    ) : (
                                        "Unlock Curriculum PDF"
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* MODAL 2: Secure PDF Viewer (No Download Toolbar Option) */}
            <AnimatePresence>
                {showPdfModal && syllabusPdf && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowPdfModal(false)}
                            className="absolute inset-0 bg-black/75 backdrop-blur-md"
                        />

                        {/* Modal Window Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-5xl h-[88vh] bg-white rounded-3xl p-6 shadow-2xl z-10 border border-gray-100 flex flex-col overflow-hidden"
                            onContextMenu={(e) => e.preventDefault()}
                        >
                            {/* Modal Header */}
                            <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-200">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 font-cabinet">
                                        {currentPathLabel || "Curriculum Syllabus"}
                                    </h3>
                                    <p className="text-xs text-gray-500 font-medium">
                                        Protected Document Viewer
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowPdfModal(false)}
                                    className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                                    aria-label="Close PDF Viewer"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Secure PDF Iframe (Toolbar/Download Disabled) */}
                            <div className="flex-1 w-full h-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 relative">
                                <iframe
                                    src={`${syllabusPdf}#toolbar=0&navpanes=0&scrollbar=1`}
                                    className="w-full h-full border-0 select-none"
                                    title="Syllabus PDF Preview"
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </section>
    );
}
