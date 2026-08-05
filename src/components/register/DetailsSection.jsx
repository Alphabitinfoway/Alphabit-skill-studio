"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/config/api";

export default function DetailsSection() {
    const [seminarData, setSeminarData] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        const fetchCurrentSeminar = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/seminars/current`, {
                    headers: {
                        "ngrok-skip-browser-warning": "true"
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log("Current Seminar API raw response:", data);
                    setSeminarData(data);
                } else {
                    const errText = await response.text().catch(() => "");
                    console.error("Seminar fetch failed with status:", response.status, errText);
                    setErrorMsg(`Failed to load: Server returned status ${response.status}`);
                }
            } catch (error) {
                console.error("Error fetching current seminar details:", error);
                setErrorMsg(`Network error: ${error.message || error}`);
            }
        };

        fetchCurrentSeminar();
    }, []);

    // Format date string from API (e.g. "2026-08-10" -> "Monday, 10 August 2026")
    const formatDate = (dateStr) => {
        try {
            const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
            const dateObj = new Date(dateStr);
            if (isNaN(dateObj.getTime())) return dateStr;
            return dateObj.toLocaleDateString('en-US', options);
        } catch (e) {
            return dateStr;
        }
    };

    // Support both raw object or nested data property (e.g. { success: true, data: { ... } })
    const currentData = seminarData?.data || seminarData || {};

    const topic = errorMsg ? `Error (${errorMsg})` : (currentData.topic || "Loading topic...");
    const dateVal = currentData.date ? formatDate(currentData.date) : (errorMsg ? "—" : "Loading date...");
    const timeVal = (currentData.startTime && currentData.endTime)
        ? `${currentData.startTime} – ${currentData.endTime}`
        : (errorMsg ? "—" : "Loading time...");

    const venueImage = currentData.venueImage
        ? (currentData.venueImage.startsWith("http") ? currentData.venueImage : `${API_BASE_URL}${currentData.venueImage}`)
        : "/venue_map.webp";

    const seatsLeft = currentData.seatsLeft !== undefined ? currentData.seatsLeft : "...";

    const modeVal = errorMsg ? "—" : (currentData.mode || "Loading...");
    const langVal = errorMsg ? "—" : (currentData.language || "Loading...");
    const venueVal = errorMsg ? "—" : (currentData.venue || "Loading...");
    const venueMapLink = currentData.venueMapLink || "";
    const totalSeats = errorMsg ? "—" : (currentData.totalSeats || "Loading...");

    const details = [
        { label: "Topic", value: topic },
        { label: "Date", value: dateVal },
        { label: "Time", value: timeVal },
        { label: "Mode", value: modeVal },
        { label: "Language", value: langVal },
        { label: "Venue", value: venueVal, isLink: Boolean(venueMapLink), link: venueMapLink },
    ];

    const mapContent = (
        <div className="w-full relative">
            <img
                src={venueImage}
                alt="Seminar Venue"
                className={`w-full h-auto block ${venueMapLink ? "transition-transform duration-300 group-hover:scale-105" : ""}`}
            />
            {/* Seminar Venue Badge */}
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm py-2 px-4 rounded-full text-white text-[12px] font-bold tracking-wide flex items-center gap-1.5 border border-white/10 transition-colors group-hover:bg-black/80">
                <span>📍</span> Seminar Venue {venueMapLink && <span className="ml-1 text-[11px] opacity-80">↗</span>}
            </div>
        </div>
    );

    return (
        <section className="w-full bg-[#F5F5F5] pb-[60px] md:pb-[100px] px-6 font-cabinet">
            <div className="max-w-[1180px] mx-auto bg-[#7143FE] rounded-[32px] p-6 sm:p-8 md:p-12 shadow-[0_12px_40px_rgba(113,67,254,0.25)]">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

                    {/* LEFT IMAGE / MAP VENUE */}
                    {venueMapLink ? (
                        <a
                            href={venueMapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative w-full lg:w-[480px] rounded-[24px] overflow-hidden flex-shrink-0 block bg-black/20"
                            title="Open Google Maps location"
                        >
                            {mapContent}
                        </a>
                    ) : (
                        <div className="relative w-full lg:w-[480px] rounded-[24px] overflow-hidden flex-shrink-0 bg-black/20">
                            {mapContent}
                        </div>
                    )}

                    {/* RIGHT DETAILS CONTENT */}
                    <div className="flex-1 flex flex-col justify-center text-white py-2">
                        <h2 className="text-[30px] sm:text-[36px] md:text-[40px] leading-tight mb-8">
                            Seminar <span className="font-pp italic text-[52px] text-[#FF5622] font-medium">Details</span>
                        </h2>

                        {/* Details Table */}
                        <div className="flex flex-col gap-5 max-w-[550px] mb-8">
                            {details.map((item, idx) => (
                                <div key={idx} className="flex flex-col sm:flex-row sm:items-start text-[15px] sm:text-[16px] gap-2 sm:gap-0">
                                    <span className="w-full sm:w-[130px] font-bold text-white/80 shrink-0">
                                        {item.label}
                                    </span>
                                    {item.isLink && item.link ? (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-medium text-white underline decoration-white/40 underline-offset-4 hover:decoration-white hover:text-white transition-all inline-flex items-center gap-1"
                                        >
                                            {item.value} ↗
                                        </a>
                                    ) : (
                                        <span className="font-medium text-white">
                                            {item.value}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Seats Left Pill */}
                        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm py-2.5 px-5 rounded-full text-[13px] font-bold tracking-wide w-fit border border-white/5">
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                            Only {seatsLeft} seats left
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
