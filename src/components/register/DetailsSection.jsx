"use client";

import Image from "next/image";

// Temporary mock data mimicking an API response
const TEMP_SEMINAR_DATA = {
    venueImage: "/venue_map.png",
    details: [
        { label: "Topic", value: "Cracking Your First Tech Career" },
        { label: "Date", value: "Saturday, 2 August 2026" },
        { label: "Time", value: "4:00 PM – 6:00 PM IST" },
        { label: "Mode", value: "Offline — Alphabit Skill Studio, Rajkot" },
        { label: "Language", value: "English & Gujarati/Hindi mix" }
    ],
    seatsLeft: 40
};

export default function DetailsSection() {
    const { venueImage, details, seatsLeft } = TEMP_SEMINAR_DATA;

    return (
        <section className="w-full bg-[#F5F5F5] pb-[60px] md:pb-[100px] px-6 font-cabinet">
            <div className="max-w-[1180px] mx-auto bg-[#7143FE] rounded-[32px] p-6 sm:p-8 md:p-12 shadow-[0_12px_40px_rgba(113,67,254,0.25)]">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch">

                    {/* LEFT IMAGE / MAP VENUE */}
                    <div className="relative w-full lg:w-[480px] min-h-[300px] sm:min-h-[360px] lg:min-h-[unset] rounded-[24px] overflow-hidden flex-shrink-0">
                        <Image
                            src={venueImage}
                            alt="Seminar Venue"
                            fill
                            className="object-cover"
                        />

                        {/* Seminar Venue Badge */}
                        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm py-2 px-4 rounded-full text-white text-[12px] font-bold tracking-wide flex items-center gap-1.5 border border-white/10">
                            <span>📍</span> Seminar Venue
                        </div>
                    </div>

                    {/* RIGHT DETAILS CONTENT */}
                    <div className="flex-1 flex flex-col justify-center text-white py-2">
                        <h2 className="text-[32px] sm:text-[38px] md:text-[44px] leading-tight font-bold mb-8">
                            Seminar <span className="font-pp italic font-normal text-white">Details</span>
                        </h2>

                        {/* Details Table */}
                        <div className="flex flex-col gap-5 max-w-[550px] mb-8">
                            {details.map((item, idx) => (
                                <div key={idx} className="flex flex-col sm:flex-row sm:items-start text-[15px] sm:text-[16px] gap-2 sm:gap-0">
                                    <span className="w-full sm:w-[130px] font-bold text-white/80 shrink-0">
                                        {item.label}
                                    </span>
                                    <span className="font-medium text-white">
                                        {item.value}
                                    </span>
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
