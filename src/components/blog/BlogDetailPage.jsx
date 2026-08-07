"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Search, ArrowLeft, ChevronDown, Check, Sparkles } from "lucide-react";
import { blogDetailData } from "./data/blogDetailData";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/skills/Common/FAQsection";
import { API_BASE_URL } from "@/config/api";

/* ─── Sidebar post card ───────────────────────────────────────────── */
function SidebarCard({ post }) {
  const href = `/blog/${post.slug || post.id || post._id}`;
  let img = "/Home Page/Career/Specialized Training Modules_11zon.webp";
  if (post?.image && post.image !== "no-photo.jpg") {
    img = post.image.startsWith("http") ? post.image : `${API_BASE_URL}/${post.image}`;
  }

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
  return (
    <FAQSection
      data={{
        faqSectionData: {
          titleNormal: "Frequently Asked",
          titleItalic: "Questions",
          faqs: items.map((item, idx) => ({
            id: item.id || idx + 1,
            question: item.question,
            answer: item.answer,
          })),
        },
      }}
    />
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

/* ─── Clean Blog Content Renderer ───────────────────────────────── */
function BlogContentRenderer({ content }) {
  if (!content) return null;

  // Check if content is HTML (contains HTML tags like <p>, <h2>, <div>, <br>)
  const isHtml = /<[a-z][\s\S]*>/i.test(content);

  if (isHtml) {
    return (
      <div
        className="blog-prose-content w-full max-w-full overflow-hidden break-words font-cabinet"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // Parse plain text content with line breaks into clean structured elements
  const rawBlocks = content
    .split(/\r?\n\r?\n/)
    .map((b) => b.trim())
    .filter(Boolean);

  // Filter out pure SEO meta fields like "Meta title", "Meta description", "Url"
  const blocks = rawBlocks.filter((b) => {
    const lower = b.toLowerCase();
    return !lower.startsWith("meta title") && !lower.startsWith("meta description") && !lower.startsWith("url\n") && lower !== "url";
  });

  return (
    <div className="space-y-6 text-[#333333] text-[16px] leading-[1.85] font-cabinet w-full max-w-full overflow-hidden break-words">
      {blocks.map((block, idx) => {
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

        // Headings (Markdown headings or short section title lines)
        const isMarkdownHeading = /^#{1,4}\s+/.test(block);
        const cleanHeadingText = block.replace(/^#{1,4}\s+/, "").trim();

        const isHeading =
          isMarkdownHeading ||
          (block.length < 85 && !block.endsWith(".") && !block.endsWith(",") && !block.includes("\n"));

        if (isHeading) {
          return (
            <h2
              key={idx}
              className="text-[22px] sm:text-[26px] font-bold text-[#111111] leading-[1.3] mt-8 mb-3 font-cabinet"
            >
              {cleanHeadingText}
            </h2>
          );
        }

        // List / Bullet Block
        const lines = block.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
        const bulletRegex = /^([•\-\*]|->|>|\d+[\.\)])\s+/;
        const hasBulletLines = lines.some((l) => bulletRegex.test(l));

        if (hasBulletLines) {
          const bulletItems = lines.filter((l) => bulletRegex.test(l)).map((l) => l.replace(bulletRegex, ""));
          const introLines = lines.filter((l) => !bulletRegex.test(l));

          return (
            <div key={idx} className="my-4 font-cabinet space-y-3">
              {introLines.length > 0 && (
                <p className="text-[16px] text-[#333333] leading-[1.85]">
                  {introLines.join(" ")}
                </p>
              )}
              <ul className="space-y-2 pl-6 list-disc text-[#333333]">
                {bulletItems.map((item, lIdx) => (
                  <li key={lIdx} className="text-[16px] leading-[1.75]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        // Standard Paragraph
        return (
          <p key={idx} className="text-[16px] text-[#333333] leading-[1.85] mb-4 font-cabinet">
            {block}
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
  let image = blogDetailData.image;
  if (initialBlog?.image && initialBlog.image !== "no-photo.jpg") {
    image = initialBlog.image.startsWith("http") ? initialBlog.image : `${API_BASE_URL}/${initialBlog.image}`;
  }

  const contentHtml = initialBlog?.content;

  // Format sidebar posts from API or fallback
  const sidebarPosts = Array.isArray(initialAllBlogs) && initialAllBlogs.length > 0
    ? initialAllBlogs.map((b) => ({
        id: b._id,
        slug: b.slug || b._id,
        title: b.title,
        image: b.image && b.image !== "no-photo.jpg" ? b.image : "/Home Page/Career/Specialized Training Modules_11zon.webp",
        date: b.createdAt ? new Date(b.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "",
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
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 pt-32 sm:pt-36 lg:pt-40 pb-16">

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
              <BlogContentRenderer content={contentHtml} />
            ) : (
              <BlogContentRenderer content={blogDetailData.rawText || ""} />
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
