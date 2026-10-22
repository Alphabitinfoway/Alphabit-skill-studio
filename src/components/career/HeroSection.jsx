import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full pt-13 mt-6 mb-3 md:pt-16">
      <div className="w-full max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-20 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-[1.2] space-y-6 z-10">
          <h1 className="text-5xl md:text-6xl font-medium text-[#171717] leading-[1.15] font-cabinet tracking-tight">
            Drive the{" "}
            <span className="text-[#FF5722] font-pp italic font-medium text-6xl md:text-7xl">
              Future
            </span>
            <br />
            of IT Upskilling
          </h1>
          <p className="text-[#666666] text-[22px] leading-relaxed w-5/6">
            Join our core operational team. Apply your technical expertise to structure rigorous, project-driven curriculums that bridge the gap between raw ambition and enterprise-level execution.
          </p>
          <Link
            href="/register"
            style={{ backgroundColor: "#7143FE" }}
            className="text-white px-7 py-3.5 rounded-full font-medium transition-all flex items-center justify-center gap-3 text-[17px] shadow-md w-fit hover:opacity-90 hover:scale-[1.02]"
          >
            <img
              src="/whiteArrow.webp"
              alt="Join icon"
              className="w-5 h-5 object-contain brightness-0 invert"
            />
            Join the Studio
          </Link>
        </div>

        {/* Right: Hero Image (without background shape as requested) */}
        <div className="flex-[0.9] lg:flex-1 w-full flex justify-center md:justify-end items-center relative">
          <img
            src="https://res.cloudinary.com/dir8eqqnk/image/upload/v1792667588/Career_hero_ldtl2z.webp"
            alt="Drive the Future of IT Upskilling - Career at Alphabit Skill"
            className="w-full max-w-[540px] lg:max-w-[620px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)] transform hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
