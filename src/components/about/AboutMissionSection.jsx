"use client";

import Image from "next/image";

export default function AboutMissionSection() {
  return (
    <section className="w-full bg-[#F5F5F5] py-16 md:py-20 font-cabinet">
      <div className="w-full px-4 sm:px-8 lg:px-14 flex flex-col md:flex-row items-center gap-10 lg:gap-16">

        {/* ── LEFT: Image ── */}
        <div className="flex-[1.7] w-full min-w-0">
          <div
            className="relative w-full overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="/Home Page/About/1.webp"
              alt="Alphabit Skill – modern training campus"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>
        </div>

        {/* ── RIGHT: Text Content ── */}
        <div className="flex-[2] flex flex-col pt-1 justify-center space-y-6 min-w-0">

          {/* Heading */}
          <h2
            className="text-[#171717] font-medium leading-[1.2] tracking-tight"
            style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
          >
            Engineering Talent for the{" "}
            <br className="hidden sm:block" />
            <span
              className="text-[#FF5622] italic font-medium"
              style={{ fontFamily: "'PP Editorial New', serif", fontSize: "1.4em" }}
            >
              Next Era
            </span>{" "}
            of Digital Innovation
          </h2>

          {/* Body paragraphs */}
          <div className="space-y-4">
            <p className="text-[#555555] leading-[1.75]" style={{ fontSize: "clamp(13.5px, 1.1vw, 15px)" }}>
              The technological landscape is evolving faster than traditional academic curricula can adapt.
              Alphabit Skill acts as a real-time bridge to the future of IT, focusing intensely on
              the frameworks and logical architectures driving today's top tech enterprises. We cultivate
              specialized expertise in high-impact domains, including Artificial Intelligence, Cyber
              Security, Advanced Full-Stack Development, and Multimedia Design.
            </p>
            <p className="text-[#555555] leading-[1.75]" style={{ fontSize: "clamp(13.5px, 1.1vw, 15px)" }}>
              Our infrastructure is designed to build adaptable problem-solvers, not just syntax
              memorizers. Through rigorous technical mentorship, continuous live-project deployment, and a
              highly structured corporate integration process, we validate our learners' capabilities
              against strict industry benchmarks. When our talent enters the placement pipeline, they do
              so with a verified portfolio of highly functional digital products.
            </p>
          </div>

          {/* CTA Button */}
          <div>
            <button
              style={{ backgroundColor: "#7143FE" }}
              className="text-white px-4 py-2.5 rounded-full font-medium flex items-center gap-1.5 text-[15px] shadow-md w-fit hover:opacity-90 hover:scale-[1.03] transition-all"
            >
              <Image
                src="/whiteArrow.png"
                alt="arrow"
                width={22}
                height={22}
                className="object-contain"
              />
              Join the Studio
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
