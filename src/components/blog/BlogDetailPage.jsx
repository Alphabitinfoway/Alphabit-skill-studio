"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Search, ArrowLeft, ChevronDown, Check, Sparkles } from "lucide-react";
import { blogDetailData } from "./data/blogDetailData";
import CTASection from "@/components/CTASection";

/* ─── Sidebar post card ───────────────────────────────────────────── */
function SidebarCard({ post }) {
  const href = `/blog/${post.slug || post.id || post._id}`;
  const img = post.image && post.image !== "no-photo.jpg" ? post.image : "/Home Page/Career/Specialized Training Modules_11zon.webp";

  return (
    <Link href={href} className="flex items-center gap-3.5 group cursor-pointer">
      <div className="flex-shrink-0 w-[72px] h-[54px] rounded-[10px] overflow-hidden bg-[#E0E0E0]">
        <img
          src={img}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <p
          className="text-[13px] font-semibold text-[#111111] leading-[1.35] line-clamp-2 group-hover:text-[#7143FE] transition-colors font-cabinet"
        >
          {post.title}
        </p>
        <span className="inline-flex items-center gap-1.5 text-[11px] text-[#888888]">
          <Calendar size={13} className="flex-shrink-0 text-[#888888]" />
          {post.date}
        </span>
      </div>
    </Link>
  );
}

/* ─── FAQ Accordion Component ────────────────────────────────────── */
function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="my-8 flex flex-col gap-3 font-cabinet">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-[16px] border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white border-[#7143FE]/40 shadow-[0_4px_20px_rgba(113,67,254,0.08)]"
                : "bg-white border-[#E4E4E9] hover:border-[#7143FE]/30 shadow-sm"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 cursor-pointer select-none"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[13px] flex-shrink-0 transition-colors ${
                    isOpen ? "bg-[#7143FE] text-white" : "bg-[#F4F2FF] text-[#7143FE]"
                  }`}
                >
                  Q
                </span>
                <h4 className="text-[15px] sm:text-[17px] font-bold text-[#111111] leading-[1.4]">
                  {item.question}
                </h4>
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#F5F5F7] text-[#555] flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 bg-[#7143FE]/10 text-[#7143FE]" : ""
                }`}
              >
                <ChevronDown size={16} className="flex-shrink-0" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-3 text-[14px] sm:text-[15px] text-[#444444] leading-[1.8] border-t border-[#F0F0F5] mx-5">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─── Comparison Table Component ─────────────────────────────────── */
function ComparisonTable({ rows }) {
  return (
    <div className="my-8 overflow-hidden rounded-[20px] border border-[#E4E4E9] shadow-[0_4px_20px_rgba(0,0,0,0.04)] bg-white font-cabinet">
      {/* Desktop View */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F4F2FF] border-b border-[#E0DAFE] text-[12px] uppercase tracking-wider text-[#7143FE] font-extrabold">
              <th className="py-4 px-6">Your Goal</th>
              <th className="py-4 px-6">Recommended Learning Path</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0F0F5] text-[14px]">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#F9F8FF] transition-colors group">
                <td className="py-4 px-6 font-semibold text-[#111111] text-[15px]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#7143FE] opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    <span>{row.goal}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F0EBFF] text-[#7143FE] border border-[#7143FE]/25 font-bold text-[13px]">
                    <Check size={12} strokeWidth={3} className="flex-shrink-0" />
                    {row.path}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Grid View */}
      <div className="sm:hidden flex flex-col divide-y divide-[#F0F0F5]">
        <div className="p-4 bg-[#F4F2FF] border-b border-[#E0DAFE] text-[12px] uppercase tracking-wider text-[#7143FE] font-extrabold">
          Goal & Recommended Path
        </div>
        {rows.map((row, idx) => (
          <div key={idx} className="p-4 flex flex-col gap-2 bg-white">
            <span className="text-[11px] uppercase tracking-wider text-[#888888] font-bold">Goal</span>
            <p className="text-[15px] font-semibold text-[#111111] mb-1">{row.goal}</p>
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F0EBFF] text-[#7143FE] border border-[#7143FE]/25 font-bold text-[13px]">
                <Check size={12} strokeWidth={3} className="flex-shrink-0" />
                {row.path}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Smart Blog Content Renderer ───────────────────────────────── */
function BlogContentRenderer({ content, ctaLink }) {
  if (!content) return null;

  // Check if content is HTML (contains HTML tags like <p>, <h2>, <div>, <br>)
  const isHtml = /<[a-z][\s\S]*>/i.test(content);

  if (isHtml) {
    return (
      <div
        className="blog-prose-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // Parse plain text content with line breaks into structured elements
  const rawBlocks = content
    .split(/\r?\n\r?\n/)
    .map((b) => b.trim())
    .filter(Boolean);

  // Filter out pure SEO meta fields like "Meta title", "Meta description", "Url"
  const blocks = rawBlocks.filter((b) => {
    const lower = b.toLowerCase();
    return !lower.startsWith("meta title") && !lower.startsWith("meta description") && !lower.startsWith("url\n") && lower !== "url";
  });

  // Group consecutive FAQ blocks
  const processedBlocks = [];
  let currentFaqs = [];

  blocks.forEach((block) => {
    const faqMatch = block.match(/^([^\?]{5,120}\?)\s*(.+)$/s);
    const isMajorSectionHeader = /^(should you|why is|what does)/i.test(block);

    if (faqMatch && !isMajorSectionHeader) {
      currentFaqs.push({ question: faqMatch[1].trim(), answer: faqMatch[2].trim() });
    } else {
      if (currentFaqs.length > 0) {
        processedBlocks.push({ type: 'faq', items: [...currentFaqs] });
        currentFaqs = [];
      }
      processedBlocks.push({ type: 'block', content: block });
    }
  });

  if (currentFaqs.length > 0) {
    processedBlocks.push({ type: 'faq', items: [...currentFaqs] });
  }

  return (
    <div className="space-y-6 text-[#333333] text-[15px] sm:text-[16px] leading-[1.85] font-cabinet">
      {processedBlocks.map((item, idx) => {
        if (item.type === 'faq') {
          return <FaqAccordion key={idx} items={item.items} />;
        }

        const block = item.content;

        // Meta header block (Last updated / Written by)
        if (block.toLowerCase().startsWith("last updated") || block.toLowerCase().startsWith("written by")) {
          const lines = block.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
          return (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-[14px] bg-[#F5F5F8] border border-[#E2E2E8] text-[13px] text-[#555555] mb-8 shadow-sm">
              {lines.map((line, i) => (
                <div key={i} className="flex items-center gap-2">
                  {line.toLowerCase().startsWith("written by") ? (
                    <span className="w-7 h-7 rounded-full bg-[#7143FE] text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                      JS
                    </span>
                  ) : (
                    <Calendar size={13} className="flex-shrink-0 text-[#777]" />
                  )}
                  <span className="font-medium text-[#222]">{line}</span>
                </div>
              ))}
            </div>
          );
        }

        // Key Takeaway / Highlight Box (Matches "Key Takeaway:", "Summary:", "Pro Tip:", "Note:", etc.)
        const takeawayMatch = block.match(/^(key takeaway|takeaway|summary|pro tip|important|note|highlights|conclusion)[:\-]?\s*(.*)/i);
        if (takeawayMatch) {
          const label = takeawayMatch[1].toUpperCase();
          const takeawayText = takeawayMatch[2] || block;
          return (
            <div key={idx} className="my-6 p-5 rounded-2xl bg-[#F3EFFF] border-l-4 border-[#7143FE] text-[#111111] text-[15px] sm:text-[16px] font-medium leading-[1.75] shadow-sm">
              <span className="text-[#7143FE] font-bold flex items-center gap-1.5 mb-1 uppercase tracking-wider text-[12px]">
                <Sparkles size={14} className="flex-shrink-0" /> {label}
              </span>
              {takeawayText}
            </div>
          );
        }

        // Comparison Table detection
        if ((block.includes("Your Goal") && block.includes("Recommended Learning Path")) || block.includes("| --- |")) {
          const lines = block.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
          const rows = [];
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes("---") || lines[i] === "Your Goal" || lines[i] === "Recommended Learning Path") continue;
            const parts = lines[i].includes("|") ? lines[i].split("|").map(p => p.trim()).filter(Boolean) : null;
            if (parts && parts.length >= 2) {
              rows.push({ goal: parts[0], path: parts[1] });
            } else if (i + 1 < lines.length) {
              rows.push({ goal: lines[i], path: lines[i + 1] });
              i++;
            }
          }
          if (rows.length > 0) {
            return <ComparisonTable key={idx} rows={rows} />;
          }
        }

        // CTA / Link block (starts with 👉 or Primary CTA / Secondary CTA)
        if (block.startsWith("👉") || block.toLowerCase().startsWith("cta:") || block.toLowerCase().startsWith("[cta]")) {
          const isSecondary = block.toLowerCase().includes("secondary") || block.toLowerCase().includes("counseling");
          let targetUrl = ctaLink || "/register";
          let cleanText = block.replace(/^(👉|cta:|\[cta\])\s*(Primary CTA:|Secondary CTA:)?\s*/i, "").trim();

          // Custom explicit link syntax e.g. "👉 Explore Course | /custom-link"
          if (cleanText.includes("|")) {
            const parts = cleanText.split("|");
            cleanText = parts[0].trim();
            targetUrl = parts[1].trim();
          }

          return (
            <div
              key={idx}
              className={`my-6 p-5 rounded-[18px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm transition-all ${
                isSecondary
                  ? "bg-[#F0EBFF] border border-[#7143FE]/30 text-[#7143FE]"
                  : "bg-gradient-to-r from-[#7143FE] to-[#5B2ED7] text-white shadow-[0_4px_20px_rgba(113,67,254,0.25)]"
              }`}
            >
              <div className="flex items-center gap-3 font-semibold text-[15px] sm:text-[16px]">
                <span className="text-xl">👉</span>
                <span>{cleanText}</span>
              </div>
              <Link
                href={targetUrl}
                className={`px-6 py-2.5 rounded-full font-bold text-[13px] flex-shrink-0 transition-all ${
                  isSecondary
                    ? "bg-[#7143FE] text-white hover:bg-[#5e35d4]"
                    : "bg-white text-[#7143FE] hover:bg-opacity-95 shadow-sm"
                }`}
              >
                {isSecondary ? "Book Session" : "Explore Course"}
              </Link>
            </div>
          );
        }

        // Stage / Step Sub-Headings (e.g. Stage 1: ..., Step 1: ..., Phase 1: ...)
        const stageMatch = block.match(/^(stage|step|phase|part|module)\s*(\d+)?[:\-]?\s*(.*)/i);
        if (stageMatch) {
          const badgeLabel = stageMatch[1].toUpperCase();
          const stageNum = stageMatch[2] || "";
          const stageTitle = stageMatch[3] || block;

          return (
            <div key={idx} className="my-7 p-4 sm:p-5 rounded-[16px] bg-[#F7F5FF] border-l-4 border-[#7143FE] border border-[#E9E4FF] flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#7143FE] text-white flex items-center justify-center font-extrabold text-[15px] flex-shrink-0 shadow-md font-cabinet">
                {stageNum ? (stageNum.length === 1 ? `0${stageNum}` : stageNum) : "★"}
              </div>
              <div className="font-cabinet">
                <span className="text-[11px] uppercase tracking-wider text-[#7143FE] font-extrabold block mb-0.5">
                  {badgeLabel} {stageNum}
                </span>
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#111111] leading-[1.3]">
                  {stageTitle}
                </h3>
              </div>
            </div>
          );
        }

        // Main Section Headings (Markdown headings, short lines, or section titles)
        const isMarkdownHeading = /^#{1,4}\s+/.test(block);
        const cleanHeadingText = block.replace(/^#{1,4}\s+/, "").trim();

        const isHeading =
          isMarkdownHeading ||
          (block.length < 95 && !block.endsWith(".") && !block.endsWith(",") && !block.includes("\n")) ||
          /^(quick answer|why is|should you|full stack vs|common mistakes|career opportunities|salary expectations|is full stack|frequently asked|final thoughts|ready to start|skills employers)/i.test(block);

        if (isHeading) {
          return (
            <h2
              key={idx}
              className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold text-[#111111] leading-[1.3] mt-10 mb-4 font-cabinet"
            >
              {cleanHeadingText}
            </h2>
          );
        }

        // List / Bullet Block (contains any lines starting with •, -, *, 1., 2., ->, >)
        const lines = block.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
        const bulletRegex = /^([•\-\*]|->|>|\d+[\.\)])\s+/;
        const hasBulletLines = lines.some(l => bulletRegex.test(l));

        if (hasBulletLines) {
          const introLines = [];
          const bulletItems = [];

          lines.forEach(line => {
            if (bulletRegex.test(line)) {
              bulletItems.push(line.replace(bulletRegex, ""));
            } else {
              introLines.push(line);
            }
          });

          const isShortGrid = bulletItems.length > 0 && bulletItems.every(item => item.length < 36);

          return (
            <div key={idx} className="my-5 font-cabinet space-y-4">
              {introLines.length > 0 && (
                <p className="text-[15px] sm:text-[16px] text-[#333333] leading-[1.85]">
                  {introLines.join(" ")}
                </p>
              )}

              {isShortGrid ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                  {bulletItems.map((item, lIdx) => (
                    <div key={lIdx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#E6E6EC] shadow-sm hover:border-[#7143FE]/40 transition-all">
                      <span className="w-3 h-3 rounded-full bg-[#7143FE] flex-shrink-0 shadow-[0_0_6px_rgba(113,67,254,0.4)]" />
                      <span className="text-[15px] sm:text-[16px] font-semibold text-[#111111]">{item}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-3.5 my-4 pl-1">
                  {bulletItems.map((item, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-3.5 text-[15px] sm:text-[16px] text-[#222222] font-medium leading-[1.75]">
                      <span className="mt-[8px] w-3 h-3 rounded-full bg-[#7143FE] flex-shrink-0 shadow-[0_0_6px_rgba(113,67,254,0.4)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        }

        // Paragraph block with possible inline line breaks or bold prefix
        return (
          <p key={idx} className="text-[15px] sm:text-[16px] text-[#333333] leading-[1.85] mb-5 font-cabinet">
            {lines.map((line, lIdx) => {
              // Check if line starts with a bold label e.g., "Label — text" or "Label:"
              const labelMatch = line.match(/^([^—:]{3,45})([—:])\s*(.*)$/);
              if (labelMatch && !line.startsWith("http") && !line.toLowerCase().startsWith("stage")) {
                return (
                  <span key={lIdx} className="block mb-2">
                    <strong className="text-[#111111] font-bold">{labelMatch[1]}{labelMatch[2]} </strong>
                    {labelMatch[3]}
                  </span>
                );
              }
              return (
                <span key={lIdx} className={lIdx > 0 ? "block mt-2" : ""}>
                  {line}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

/* ─── Main component ──────────────────────────────────────────────── */
export default function BlogDetailPage({ initialBlog = null, initialAllBlogs = [], slugOrId = "" }) {
  const [search, setSearch] = useState("");

  // Map API blog object or fallback to static blogDetailData
  const hasApiBlog = !!initialBlog;
  const title = initialBlog?.title || blogDetailData.title;
  const image =
    initialBlog?.image && initialBlog.image !== "no-photo.jpg"
      ? initialBlog.image
      : blogDetailData.image;

  const contentHtml = initialBlog?.content;

  // Format sidebar posts from API or fallback
  const sidebarPosts = Array.isArray(initialAllBlogs) && initialAllBlogs.length > 0
    ? initialAllBlogs.map((b) => ({
        id: b._id,
        slug: b.slug || b._id,
        title: b.title,
        image: b.image && b.image !== "no-photo.jpg" ? b.image : "/Home Page/Career/Specialized Training Modules_11zon.webp",
        date: new Date(b.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      }))
    : [];

  const recentPosts = sidebarPosts.length > 0 ? sidebarPosts.slice(0, 4) : blogDetailData.recentPosts;
  const popularPosts = sidebarPosts.length > 0 ? sidebarPosts.slice(0, 4) : blogDetailData.popularPosts;

  const filterBySearch = (posts) => {
    if (!search.trim()) return posts;
    return posts.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
  };

  return (
    <div className="w-full min-h-screen bg-[#F5F5F5]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 pt-28 sm:pt-32 pb-16">

        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[13px] text-[#777777] hover:text-[#7143FE] transition-colors mb-6 group font-medium"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Blog
        </Link>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start">

          {/* ── LEFT: Article (Clean layout matching Image 2, no white box around whole section) ── */}
          <article className="flex-1 min-w-0">

            {/* Main Blog Title */}
            <h1
              className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[#111111] leading-[1.25] tracking-tight mb-6 sm:mb-8"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              {title}
            </h1>

            {/* Large Featured / Cover Image Banner */}
            <div className="w-full h-[240px] sm:h-[340px] lg:h-[420px] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#D9D9D9] mb-8 sm:mb-10 shadow-sm">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            {hasApiBlog && contentHtml ? (
              <BlogContentRenderer content={contentHtml} ctaLink={initialBlog?.ctaLink} />
            ) : (
              <BlogContentRenderer content={blogDetailData.rawText || ""} ctaLink={initialBlog?.ctaLink} />
            )}

          </article>

          {/* ── RIGHT: Sidebar (Individual White Cards) ──────────────────────────────────── */}
          <aside className="w-full lg:w-[300px] xl:w-[330px] flex-shrink-0 flex flex-col gap-6 lg:sticky lg:top-28">

            {/* Card 1: Search */}
            <div className="bg-white rounded-[20px] p-5 sm:p-6 border border-[#E5E5E5] shadow-[0_2px_14px_rgba(0,0,0,0.04)]">
              <h3
                className="text-[17px] font-bold text-[#111111] mb-4"
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
                  className="w-full h-[46px] rounded-full border border-[#DCDCDC] bg-[#F9F9F9] pl-5 pr-[54px] text-[14px] text-[#111111] placeholder:text-[#999999] outline-none focus:border-[#7143FE] focus:bg-white transition-all font-cabinet"
                />
                <button
                  suppressHydrationWarning
                  className="absolute right-[3px] w-[40px] h-[40px] rounded-full bg-[#7143FE] flex items-center justify-center hover:bg-[#5e35d4] transition-colors text-white"
                >
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Card 2: Recent Posts */}
            <div className="bg-white rounded-[20px] p-5 sm:p-6 border border-[#E5E5E5] shadow-[0_2px_14px_rgba(0,0,0,0.04)]">
              <h3
                className="text-[16px] font-bold text-[#111111] mb-5"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Recent Posts
              </h3>
              <div className="flex flex-col gap-4">
                {filterBySearch(recentPosts).map((p, idx) => (
                  <SidebarCard key={p.id || p.slug || idx} post={p} />
                ))}
              </div>
            </div>

            {/* Card 3: Popular Posts */}
            <div className="bg-white rounded-[20px] p-5 sm:p-6 border border-[#E5E5E5] shadow-[0_2px_14px_rgba(0,0,0,0.04)]">
              <h3
                className="text-[16px] font-bold text-[#111111] mb-5"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Popular Posts
              </h3>
              <div className="flex flex-col gap-4">
                {filterBySearch(popularPosts).map((p, idx) => (
                  <SidebarCard key={p.id || p.slug || idx} post={p} />
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
