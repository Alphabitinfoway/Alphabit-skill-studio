"use client";

export default function HeroSection() {
  return (
    <section className="w-full pt-13 mt-6 mb-[-2%] md:pt-16">
      <div className="w-full max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-20 pt-6 pb-10 md:pt-8 md:pb-12 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* ── LEFT: Text Content ── */}
        <div className="flex-[1.8] space-y-6 z-10">
          <h1
            className="font-medium text-[#171717] leading-[1.15] font-cabinet tracking-tight"
            style={{ fontSize: "clamp(36px, 5vw, 62px)" }}
          >
            <span
              className="text-[#FF5722] italic text-3xl font-medium"
              style={{ fontFamily: "'PP Editorial New', serif", fontSize: "1.2em" }}
            >
              Transforming
            </span>{" "}
            Tech Skills into
            <br />
            Corporate Careers
          </h1>

          <p className="text-[#666666] text-[16px] leading-relaxed max-w-[600px]">
            Alphabit Skill focuses purely on execution and employment. We engineer
            proficient developers and designers in AI, IT, and Multimedia through
            intensive practical training, expert mentorship, and aggressive placement
            support.
          </p>

          <button
            style={{ backgroundColor: "#7143FE" }}
            className="text-white px-4 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2 text-[16px] shadow-md w-fit hover:opacity-90 hover:scale-[1.03]"
          >
            <img src="https://res.cloudinary.com/dir8eqqnk/image/upload/v1785222060/whiteArrow_tqeact.webp" alt="arrow" className="w-6" />
            Join the Studio
          </button>
        </div>

        {/* ── RIGHT: Shape + Image ── */}
        <div className="flex-[0.85] w-full flex justify-end relative min-h-[500px] md:min-h-[560px]">

          {/* SVG gradient background shape — identical to Career HeroSection */}
          <div
            className="absolute top-[102%] -translate-y-1/2 pointer-events-none z-0"
            style={{
              width: "130%",
              minWidth: "500px",
              maxWidth: "750px",
              right: "-10%",
              height: "170%",
            }}
          >
            <svg
              viewBox="0 0 750 620"
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="aboutHeroShapeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F8F8F8" />
                  <stop offset="100%" stopColor="#D8D8D8" />
                </linearGradient>
              </defs>
              <path
                d="M 220 0 H 610 A 40 40 0 0 1 650 40 V 480 A 40 40 0 0 1 610 520 H 40 A 40 40 0 0 1 0 480 V 220 Q 0 150 60 150 A 100 100 0 0 0 150 60 Q 150 0 220 0 Z"
                fill="url(#aboutHeroShapeGrad)"
              />
            </svg>
          </div>


          {/* Degree person image — anchored to bottom of shape */}
          <div
            className="absolute z-10 flex items-end justify-center"
            style={{
              top: "-35%",
              right: "15%",
              width: "85%",
              maxWidth: "520px",
              height: "120%",
            }}
          >
            <img
              src="https://res.cloudinary.com/dir8eqqnk/image/upload/v1785217257/degree_person_pc3fhl.webp"
              alt="Graduate showcasing Alphabit Skill"
              className="w-full h-full object-contain object-bottom"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
