export default function HeroSection() {
  return (
    <section className="w-full pt-13 mt-6 mb-3 md:pt-16">
      <div className="w-full max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-20 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left: Text Content */}
        <div className="flex-[1.2] space-y-6 z-10">
          <h1 className="text-5xl md:text-6xl font-medium text-[#171717] leading-[1.15] font-cabinet tracking-tight">
            <span className="text-[#FF5722] font-pp italic font-normal text-6xl md:text-7xl ">Repository</span>{" "}
            for Technical <br />
            Analysis &amp; Strategy
          </h1>
          <p className="text-[#666666] text-[17px] leading-relaxed w-5/6">
            Navigate our archive of advanced development workflows, modern UI/UX design methodologies, and strict corporate placement protocols.
          </p>
        </div>

        {/* Right: Abstract Shape (same gradient as Career HeroSection) */}
        <div className="flex-[0.75] w-full flex justify-end relative h-full min-h-[350px]">
          <div
            className="absolute top-[58%] -translate-y-1/2 pointer-events-none z-0"
            style={{
              width: "130%",
              minWidth: "500px",
              maxWidth: "750px",
              right: "-15%",
              height: "130%",
            }}
          >
            <svg
              viewBox="0 0 750 620"
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Linear gradient taken from career/HeroSection.jsx */}
                <linearGradient id="blogHeroShapeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F8F8F8" />
                  <stop offset="100%" stopColor="#D8D8D8" />
                </linearGradient>
              </defs>
              <path
                d="M 220 0 H 610 A 40 40 0 0 1 650 40 V 480 A 40 40 0 0 1 610 520 H 40 A 40 40 0 0 1 0 480 V 220 Q 0 150 60 150 A 100 100 0 0 0 150 60 Q 150 0 220 0 Z"
                fill="url(#blogHeroShapeGrad)"
              />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
