"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function TrustSection() {
  const bulletPoints = [
    "Alphabit Skill is recognized for transforming ambitious students into highly capable IT professionals, bridging the gap between academic learning and industry demands.",
    "With a rapidly expanding alumni network and active tie-ups with 300+ hiring enterprises, we focus on delivering actual career results, not marketing hype.",
    "Our core philosophy is simple: provide transparent, hands-on technical education that directly translates into high-value professional roles.",
  ];

  return (
    <section className="w-full bg-[#F5F5F5] overflow-hidden py-10 lg:py-[80px]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .notch-cutout-trust {
            -webkit-mask: radial-gradient(92px circle at 30px 10px , transparent 100%, black 100%);
            mask: radial-gradient(92px circle at 30px  10px, transparent 100%, black 100%);
          }
          @keyframes trust-spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          .trust-spin { animation: trust-spin 10s linear infinite; }
          
          @keyframes pill-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .pill-float {
            animation: pill-float 4s ease-in-out infinite;
          }
          
          @keyframes pill-float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(10px); }
          }
          .pill-float-slow {
            animation: pill-float-slow 4s ease-in-out infinite;
          }
        `,
        }}
      />

      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        {/* MOBILE LAYOUT (lg:hidden) - Pixel perfect matching user screenshot */}
        <div className="block lg:hidden">
          {/* Left Aligned Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left mb-6"
          >
            <h2
              className="text-[#111111] text-[26px] sm:text-[30px] font-extrabold leading-[1.25]"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Earning the{" "}
              <span
                style={{
                  fontFamily: "'PP Editorial New', serif",
                  color: "#FF5622",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
                className="text-[28px] sm:text-[34px] px-0.5 inline-block"
              >
                Trust
              </span>{" "}
              of Tomorrow&apos;s Tech Leaders &amp; Their Families
            </h2>
          </motion.div>

          {/* Student Image with Spinning Arrow Badge & Floating Badges (No grey blob) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-full max-w-[360px] mx-auto h-[340px] sm:h-[380px] mb-8"
          >
            {/* Person Image */}
            <div className="absolute inset-0 z-10 w-full h-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]">
              <Image
                src="https://res.cloudinary.com/dir8eqqnk/image/upload/v1785215291/1_ng5tct.webp"
                alt="Happy Student"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Spinning Circular Badge with Purple Arrow */}
            <div
              className="absolute z-20 flex items-center justify-center pointer-events-none"
              style={{
                top: "35px",
                left: "20px",
                width: 100,
                height: 100,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-[95px] h-[95px] bg-[#F5F5F5] rounded-full flex items-center justify-center relative pointer-events-auto shadow-md">
                <div className="w-[84px] h-[84px] rounded-full border-[2px] border-[#7143FE] flex items-center justify-center relative">
                  <div>
                    <Image
                      src="https://res.cloudinary.com/dir8eqqnk/image/upload/v1785216791/purpleArrow_ypjtzq.webp"
                      alt="Arrow"
                      width={28}
                      height={28}
                    />
                  </div>

                  <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                    <svg viewBox="0 0 100 100" className="w-full h-full" overflow="visible">
                      <path
                        id="textCurveMobile"
                        d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                        fill="transparent"
                      />
                      <text
                        fontSize="9"
                        fontWeight="600"
                        fill="#7540F0"
                        letterSpacing="1.7"
                      >
                        <textPath href="#textCurveMobile" startOffset="0%">
                          Explore Our Impact - Explore Our Impact -
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Right Yellow Badge: 200+ Trained Students (Floating Up/Down) */}
            <div className="absolute top-[20px] right-[0px] z-20 pill-float">
              <div className="bg-[#FABC2A] rounded-full px-4 py-2 sm:px-5 sm:py-2.5 shadow-lg shadow-amber-500/25 text-left">
                <div
                  className="text-[17px] sm:text-[19px] font-bold text-[#111111] leading-none"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  200+
                </div>
                <div
                  className="text-[11px] sm:text-[12px] font-semibold text-[#111111] mt-0.5 whitespace-nowrap"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  Trained Students
                </div>
              </div>
            </div>

            {/* Bottom Left Green Badge: 50+ Industry Courses (Floating Up/Down) */}
            <div className="absolute bottom-[15px] left-[0px] z-20 pill-float-slow">
              <div className="bg-[#48EA94] rounded-full px-4 py-2 sm:px-5 sm:py-2.5 shadow-lg shadow-emerald-500/25 text-left">
                <div
                  className="text-[17px] sm:text-[19px] font-bold text-[#111111] leading-none"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  50+
                </div>
                <div
                  className="text-[11px] sm:text-[12px] font-semibold text-[#111111] mt-0.5 whitespace-nowrap"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  Industry Courses
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3 Paragraph Points with Black Arrow Image */}
          <div className="flex flex-col gap-5 pt-2">
            {bulletPoints.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <Image
                  src="https://res.cloudinary.com/dir8eqqnk/image/upload/v1785218120/black_arrow_kbjuyy.webp"
                  alt="arrow"
                  width={15}
                  height={15}
                  className="mt-[5px] shrink-0"
                  style={{ objectFit: "contain" }}
                />
                <p
                  className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DESKTOP LAYOUT (hidden lg:flex) - Original preserved */}
        <div className="hidden lg:flex flex-row items-center justify-between gap-[60px]">
          {/* LEFT CONTENT */}
          <div className="flex-1 max-w-[560px]">
            <h2
              className="leading-[1] text-[#111111] font-[700] mb-8"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: "clamp(32px, 3.2vw , 38px)",
              }}
            >
              Earning the{" "}
              <span
                style={{
                  fontFamily: "'PP Editorial New', serif",
                  fontSize: "clamp(40px, 4vw, 48px)",
                  color: "#FF5622",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                Trust
              </span>{" "}
              of Tomorrow&apos;s Tech Leaders &amp; Their Families
            </h2>

            <div className="flex flex-col gap-5">
              {bulletPoints.map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Image
                    src="https://res.cloudinary.com/dir8eqqnk/image/upload/v1785218120/black_arrow_kbjuyy.webp"
                    alt="arrow"
                    width={15}
                    height={15}
                    className="mt-[5px] shrink-0"
                    style={{ objectFit: "contain" }}
                  />
                  <p
                    className="text-[#6B7280] leading-[1.75]"
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontSize: "clamp(13px, 1.1vw, 15px)",
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex-1 flex justify-end">
            <div
              className="relative w-full"
              style={{ maxWidth: 480, height: 460 }}
            >
              <div
                className="absolute bottom-0 right-[10px] bg-[#E8E8E8] notch-cutout-trust"
                style={{
                  top: "50px",
                  left: "20px",
                  borderRadius: "36px 36px 60px 36px",
                }}
              />

              <div
                className="absolute z-10 w-full right-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.13)]"
                style={{ bottom: 0, left: 40, right: 0 }}
              >
                <Image
                  src="https://res.cloudinary.com/dir8eqqnk/image/upload/v1785215291/1_ng5tct.webp"
                  alt="Happy Student"
                  width={700}
                  height={700}
                  className="w-full h-auto object-contain origin-bottom"
                  style={{ maxHeight: "530px", objectFit: "contain", objectPosition: "bottom" }}
                />
              </div>

              {/* Spinning circular badge */}
              <div
                className="absolute z-20 flex items-center justify-center pointer-events-none"
                style={{
                  top: "60px",
                  left: "40px",
                  width: 156,
                  height: 156,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="w-[150px] h-[150px] bg-[#F5F5F5] rounded-full flex items-center justify-center relative pointer-events-auto">
                  <div className="w-[134px] h-[134px] rounded-full border-[2.5px] border-[#7143FE] flex items-center justify-center relative">
                    <div>
                      <Image src="https://res.cloudinary.com/dir8eqqnk/image/upload/v1785216791/purpleArrow_ypjtzq.webp" alt="Arrow" width={46} height={46} />
                    </div>

                    <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                      <svg viewBox="0 0 100 100" className="w-full h-full" overflow="visible">
                        <path
                          id="textCurve"
                          d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                          fill="transparent"
                        />
                        <text
                          fontSize="9"
                          fontWeight="600"
                          fill="#7540F0"
                          letterSpacing="1.7"
                        >
                          <textPath href="#textCurve" startOffset="0%">
                            Explore Our Impact - Explore Our Impact -
                          </textPath>
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yellow pill badge */}
              <div className="absolute z-20 pill-float" style={{ bottom: "20px", left: "24px" }}>
                <div
                  className="hover:scale-105 transition-transform duration-300 cursor-default"
                  style={{
                    background: "#FABC2A",
                    borderRadius: "999px",
                    padding: "12px 24px",
                    boxShadow: "0 10px 28px rgba(250,188,42,0.35)",
                    width: "fit-content",
                  }}
                >
                  <div
                    className="flex items-start leading-none"
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontSize: "26px",
                      fontWeight: 700,
                      color: "#111111",
                    }}
                  >
                    2000<span style={{ fontSize: "16px", marginTop: "2px" }}>+</span>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#111111",
                      marginTop: "3px",
                    }}
                  >
                    Trained Students
                  </div>
                </div>
              </div>

              {/* Green pill badge */}
              <div className="absolute z-20 pill-float-slow" style={{ top: "200px", right: "-14px" }}>
                <div
                  className="hover:scale-105 transition-transform duration-300 cursor-default"
                  style={{
                    background: "#48EA94",
                    borderRadius: "999px",
                    padding: "12px 22px",
                    boxShadow: "0 10px 28px rgba(72,234,148,0.35)",
                  }}
                >
                  <div
                    className="flex items-start leading-none"
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#111111",
                    }}
                  >
                    50<span style={{ fontSize: "14px", marginTop: "2px" }}>+</span>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#111111",
                      marginTop: "3px",
                    }}
                  >
                    Industry Skills
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}