"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1B8A4E] via-[#22A05A] to-[#0D6E3C]">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      <div className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full bg-white/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[320px] h-[320px] rounded-full bg-[#6ee7b7]/20 blur-[100px] pointer-events-none" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 py-24">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-[13px] font-medium mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#86efac] inline-block" />
            Soft Skills
          </span>
          <h1 className="text-[48px] sm:text-[60px] md:text-[72px] lg:text-[86px] font-bold text-white leading-[1.05] tracking-tight font-cabinet mb-6">
            Resume &{" "}
            <span className="text-[#86efac] italic font-medium" style={{ fontFamily: "'PP Editorial New', serif" }}>
              LinkedIn
            </span>
          </h1>
          <p className="text-white/70 text-[18px] md:text-[20px] font-light font-cabinet max-w-[560px] leading-relaxed mb-10">
            Learn to design a high-converting resume and build a strong LinkedIn profile to catch the eye of global recruiters.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#1B8A4E] hover:bg-white/90 rounded-full font-semibold text-[15px] transition-all duration-300 hover:scale-105 shadow-lg">Enroll Now →</Link>
            <Link href="/skills" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-medium text-[15px] transition-all duration-300 backdrop-blur-sm">← Back to Skills</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
