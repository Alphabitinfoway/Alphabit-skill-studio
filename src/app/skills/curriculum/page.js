"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function SecurePdfViewerContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const path = searchParams.get("path");
    
    const title = path === "java" 
        ? "Full Stack Java Development Syllabus" 
        : "Full Stack Web Development (MERN) Syllabus";

    const handleBack = () => {
        if (typeof window !== "undefined") {
            if (window.history.length <= 1) {
                window.close();
                // Redirection fallback in case browser blocks window.close()
                setTimeout(() => {
                    router.push("/skills/full-stack-development");
                }, 150);
            } else {
                router.back();
            }
        }
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-[#F5F5F5] text-black px-6">
            <div className="max-w-[500px] w-full bg-white p-8 md:p-12 rounded-[32px] border border-gray-200/80 shadow-lg text-center flex flex-col items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[#7143FE]/10 flex items-center justify-center text-[#7143FE]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="12" y1="18" x2="12" y2="12" />
                        <line x1="9" y1="15" x2="15" y2="15" />
                    </svg>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[22px] md:text-[24px] font-bold text-gray-900 leading-tight" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                        PDF will be uploaded soon
                    </h1>
                    <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed font-medium" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                        We are currently updating our detailed syllabus structure with the latest 2026 enterprise modules. Please check back shortly.
                    </p>
                </div>
                <button 
                    onClick={handleBack}
                    className="mt-2 inline-flex items-center gap-2 bg-[#7143FE] text-white px-6 py-3 rounded-full text-[14px] font-bold transition-all duration-300 hover:bg-[#6136e0] hover:scale-105 hover:shadow-[0_10px_20px_rgba(113,67,254,0.2)]"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default function SecurePdfPage() {
    return (
        <Suspense fallback={<div className="w-screen h-screen flex items-center justify-center bg-[#F5F5F5] text-gray-900">Loading...</div>}>
            <SecurePdfViewerContent />
        </Suspense>
    );
}
