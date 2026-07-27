export default function HeroSection() {
  return (
    <section className="w-full pt-13 mt-6 mb-3 md:pt-16">
      <div className="w-full max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-20 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-[1.2] space-y-6 z-10">
          <h1 className="text-5xl md:text-6xl font-medium text-[#171717] leading-[1.1] font-cabinet tracking-tight">
            Drive the <span className="text-[#FF5722] text-5xl md:text-6xl font-pp italic font-normal">Future</span><br />
            of IT Upskilling
          </h1>
          <p className="text-[#666666] text-[17px] leading-relaxed w-5/6">
            Join our core operational team. Apply your technical expertise to structure rigorous, project-driven curriculums that bridge the gap between raw ambition and enterprise-level execution.
          </p>
          <button style={{ backgroundColor: "#7143FE" }} className="text-white px-5 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-3 text-[17px] shadow-md w-fit hover:opacity-90">
            <img src="/whiteArrow.webp" alt="Join icon" className="w-6 h-6 object-contain brightness-0 invert" />
            Join the Studio
          </button>
        </div>
        <div className="flex-[0.75] w-full flex justify-end relative h-full min-h-[350px]">
          <div
            className="absolute top-[58%] -translate-y-1/2 pointer-events-none z-0"
            style={{ width: "130%", minWidth: "500px", maxWidth: "750px", right: "-15%", height: "130%" }}
          >
            <svg viewBox="0 0 750 620" className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.06)]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="heroShapeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F8F8F8" />
                  <stop offset="100%" stopColor="#D8D8D8" />
                </linearGradient>
              </defs>
              <path
                d="M 220 0 H 610 A 40 40 0 0 1 650 40 V 480 A 40 40 0 0 1 610 520 H 40 A 40 40 0 0 1 0 480 V 220 Q 0 150 60 150 A 100 100 0 0 0 150 60 Q 150 0 220 0 Z"
                fill="url(#heroShapeGrad)"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}