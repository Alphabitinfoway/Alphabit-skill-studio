"use client";

import React from "react";
import Image from "next/image";


export default function TrustSection() {
  return (
    <section
      className="w-full bg-[#F5F5F5] overflow-hidden"
      style={{ padding: "60px 20px 80px" }}
    >
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
            50% { transform: translateY(-210px); }
          }
          .pill-float {
            animation: pill-float 6s ease-in-out infinite;
          }
          
          @keyframes pill-float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(180px); }
          }
          .pill-float-slow {
            animation: pill-float-slow 6s ease-in-out infinite;
          }
        `,
        }}
      />

      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-[60px]">

          {/* ──────────── LEFT CONTENT ──────────── */}
          <div className="flex-1 max-w-[560px]">

            {/* Heading */}
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
              of Tomorrow&apos;s{" "}
              {/* <br className="hidden md:block" /> */}
              Tech Leaders &amp; Their Families
            </h2>

            {/* Bullet Points */}
            <div className="flex flex-col gap-5">
              {[
                "Alphabit Skill is recognized for transforming ambitious students into highly capable IT professionals, bridging the gap between academic learning and industry demands.",
                "With a rapidly expanding alumni network and active tie-ups with 300+ hiring enterprises, we focus on delivering actual career results, not marketing hype.",
                "Our core philosophy is simple: provide transparent, hands-on technical education that directly translates into high-value professional roles.",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Image
                    src="/black arrow.png"
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

          {/* ──────────── RIGHT SIDE ──────────── */}
          <div className="relative flex-1 flex justify-center lg:justify-end">
            {/* Outer wrapper controlling height */}
            <div
              className="relative w-full"
              style={{ maxWidth: 480, height: 460 }}
            >

              {/* Grey blob — behind image, notch at top-left */}
              <div
                className="absolute bottom-0 right-[10px] bg-[#E8E8E8] notch-cutout-trust"
                style={{
                  top: "50px",
                  left: "20px",
                  borderRadius: "36px 36px 60px 36px",
                }}
              />

              {/* Person image — absolute, fills from top */}
              <div
                className="absolute z-10 w-full right-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.13)]"
                style={{ bottom: 0, left: 40, right: 0 }}
              >
                <Image
                  src="/Home Page/Trust/1.webp"
                  alt="Happy Student"
                  width={700}
                  height={700}
                  className="w-full h-auto object-contain origin-bottom"
                  style={{ maxHeight: "530px", objectFit: "contain", objectPosition: "bottom" }}
                />
              </div>

              {/* ── Spinning circular badge — top-left corner of blob ── */}
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
                {/* Outer Background */}
                <div className="w-[150px] h-[150px] bg-[#F5F5F5] rounded-full flex items-center justify-center relative pointer-events-auto">

                  {/* Inner Border Circle */}
                  <div className="w-[134px] h-[134px] rounded-full border-[2.5px] border-[#7143FE] flex items-center justify-center relative">

                    {/* Arrow */}
                    <div>
                      <Image src="/purpleArrow.png" alt="Arrow" width={46} height={46} />
                    </div>

                    {/* Spinning Text */}
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

              {/* ── Yellow pill — "200+ Trained Students" — bottom left ── */}
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

              {/* ── Green pill — "50+ Industry Courses" — right middle ── */}
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