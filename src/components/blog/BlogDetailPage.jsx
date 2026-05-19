"use client";

import { useState } from "react";
import Link from "next/link";
import { blogDetailData } from "./data/blogDetailData";
import CTASection from "@/components/CTASection";

/* ─── Calendar icon SVG ───────────────────────────────────────────── */
function CalendarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

/* ─── Sidebar post card ───────────────────────────────────────────── */
function SidebarCard({ post }) {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="flex-shrink-0 w-[72px] h-[54px] rounded-[8px] overflow-hidden bg-[#E0E0E0]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <p className="text-[13px] font-semibold text-[#111] leading-[1.4] line-clamp-2 group-hover:text-[#7143FE] transition-colors">
          {post.title}
        </p>
        <span className="inline-flex items-center gap-1 text-[11px] text-[#888]">
          <CalendarIcon />
          {post.date}
        </span>
      </div>
    </div>
  );
}

/* ─── Step content renderer ───────────────────────────────────────── */
function StepBlock({ step }) {
  return (
    <div className="mb-10">
      <h2 className="text-[22px] sm:text-[24px] font-bold text-[#111] leading-[1.3] mb-5"
        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
        {step.heading}
      </h2>
      <div className="space-y-4">
        {step.paragraphs.map((item, i) => {
          /* bullet list */
          if (item.type === "bullets") {
            return (
              <ul key={i} className="space-y-1.5 pl-1">
                {item.items.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2 text-[14px] text-[#444] leading-[1.75]">
                    <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-[#333] flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            );
          }
          /* paragraph — with or without bold label */
          return (
            <p key={i} className="text-[14px] text-[#444] leading-[1.85]">
              {item.label && (
                <strong className="text-[#111] font-semibold">{item.label} </strong>
              )}
              {item.text}
            </p>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Main component ──────────────────────────────────────────────── */
export default function BlogDetailPage() {
  const [search, setSearch] = useState("");
  const post = blogDetailData;

  return (
    <div className="w-full min-h-screen bg-[#F5F5F5]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 pt-32 pb-16">

        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[13px] text-[#888] hover:text-[#7143FE] transition-colors mb-6 group"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform duration-200">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Blog
        </Link>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-10 items-start">

          {/* ── LEFT: Article ───────────────────────────────────── */}
          <article className="flex-1 min-w-0 bg-white rounded-[20px] overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.06)] px-6 sm:px-10 pt-8 pb-10">

            {/* Title above image */}
            <h1
              className="text-[22px] sm:text-[28px] font-bold text-[#111] leading-[1.35] mb-6"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              {post.title}
            </h1>

            {/* Hero image */}
            <div className="w-full h-[220px] sm:h-[300px] rounded-[14px] overflow-hidden bg-[#D9D9D9] mb-7">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Intro paragraphs */}
            <div className="mb-8 space-y-4">
              {post.content
                .filter((b) => b.type === "paragraph")
                .map((b, i) => (
                  <p key={i} className="text-[14px] text-[#444] leading-[1.85]">
                    {b.text}
                  </p>
                ))}
            </div>

            {/* Steps */}
            {post.content
              .filter((b) => b.type === "step")
              .map((step, i) => (
                <StepBlock key={i} step={step} />
              ))}

          </article>

          {/* ── RIGHT: Sidebar ──────────────────────────────────── */}
          <aside className="w-full lg:w-[290px] xl:w-[320px] flex-shrink-0 flex flex-col gap-5 lg:sticky lg:top-28">

            {/* Search */}
            <div className="bg-[#F5F5F5] border border-[#DCDCDC] rounded-[20px] px-5 py-5">
              <h3
                className="text-[17px] font-bold text-[#111] mb-4"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Search
              </h3>
              {/* Pill input with overlapping purple button */}
              <div className="relative flex items-center">
                <input
                  suppressHydrationWarning
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  className="w-full h-[44px] rounded-full border border-[#BDBDBD] bg-white pl-5 pr-[100px] text-[15px] text-[#333] placeholder:text-[#AEAEAE] outline-none focus:border-[#7143FE] transition-all"
                />
                <button
                  suppressHydrationWarning
                  className="absolute right-0 h-[44px] px-8 rounded-full bg-[#7143FE] flex items-center justify-center hover:bg-[#5e35d4] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-[16px] shadow-[0_2px_14px_rgba(0,0,0,0.06)] px-5 py-5">
              <h3
                className="text-[15px] font-bold text-[#111] mb-4"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Recent Posts
              </h3>
              <div className="flex flex-col gap-4">
                {post.recentPosts.map((p) => (
                  <SidebarCard key={p.id} post={p} />
                ))}
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-[16px] shadow-[0_2px_14px_rgba(0,0,0,0.06)] px-5 py-5">
              <h3
                className="text-[15px] font-bold text-[#111] mb-4"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Popular Posts
              </h3>
              <div className="flex flex-col gap-4">
                {post.popularPosts.map((p) => (
                  <SidebarCard key={p.id} post={p} />
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
