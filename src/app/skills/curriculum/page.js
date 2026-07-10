"use client";

import React, { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SecurePdfViewerContent() {
    const searchParams = useSearchParams();
    const path = searchParams.get("path");
    
    const title = path === "java" 
        ? "Full Stack Java Development - Detailed Syllabus" 
        : "Full Stack Web Development (MERN) - Detailed Syllabus";

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && (e.key === "p" || e.key === "s")) {
                e.preventDefault();
                alert("Downloading and printing this syllabus is restricted.");
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="w-screen h-screen flex flex-col bg-gray-900 text-white overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4 bg-gray-800 border-b border-gray-700 z-40">
                <div>
                    <h1 className="text-lg font-bold font-cabinet">{title}</h1>
                    <span className="text-xs text-red-400 font-medium font-cabinet">
                        🔒 Downloading, printing, and sharing this syllabus is restricted.
                    </span>
                </div>
            </div>
            <div className="flex-1 w-full relative bg-gray-800">
                {/* Overlay to block right-clicks and mouse commands */}
                <div 
                    className="absolute inset-0 z-30 bg-transparent"
                    onContextMenu={(e) => {
                        e.preventDefault();
                        alert("Syllabus download/print/right-click options are disabled.");
                    }}
                />
                <iframe 
                    src="/skill/ITSkills/FullStackDevelopment/curriculum.pdf#toolbar=0&navpanes=0&scrollbar=0"
                    className="w-full h-full border-none z-10"
                    title="Syllabus PDF Viewer"
                />
            </div>
        </div>
    );
}

export default function SecurePdfPage() {
    return (
        <Suspense fallback={<div className="w-screen h-screen flex items-center justify-center bg-gray-900 text-white">Loading...</div>}>
            <SecurePdfViewerContent />
        </Suspense>
    );
}
