"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { API_BASE_URL } from "@/config/api";

const DEFAULT_POSTS = [
  {
    id: 1,
    title: "How to Build a Full Stack Portfolio That Actually Gets You Hired in 2026",
    date: "AUG 18, 2026",
    image: "/Home Page/Career/Specialized Training Modules_11zon.webp",
  },
  {
    id: 2,
    title: "Should You Learn Full Stack Development in 2026? Honest Guide",
    date: "AUG 18, 2026",
    image: "/Home Page/Career/Specialized Training Modules_11zon.webp",
  },
  {
    id: 3,
    title: "Essential Career Skills to Master for Modern Tech Roles",
    date: "AUG 18, 2026",
    image: "/Home Page/Career/Specialized Training Modules_11zon.webp",
  },
];

export default function NewsSection() {
  const [blogs, setBlogs] = useState(DEFAULT_POSTS);

  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch(`${API_BASE_URL}/api/blogs`, {
          headers: { "ngrok-skip-browser-warning": "true" },
        });
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data) && json.data.length > 0) {
            setBlogs(json.data.slice(0, 3));
          }
        }
      } catch (err) {
        console.warn("[NewsSection] Could not fetch blogs from API:", err?.message);
      }
    }
    getBlogs();
  }, []);

  return (
    <section id="insights" className="w-full bg-[#F3F3F3] px-4 py-12 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2
              className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[#111111] leading-[1.2] tracking-tight"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Latest{" "}
              <span
                className="font-serif italic text-[#FF5622] font-normal"
                style={{ fontFamily: "'PP Editorial New', serif" }}
              >
                Tech Career
              </span>
              <br />
              Insights from Alphabit Skill
            </h2>
          </div>

          <Link
            href="/blog"
            className="self-start sm:self-auto inline-flex items-center gap-2 border border-[#D1D5DB] bg-white px-5 py-2.5 rounded-full text-[14px] font-semibold text-[#111111] hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all duration-300 shadow-sm group"
          >
            View All Blogs
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {blogs.map((post, idx) => {
            const slugOrId = post?.slug || post?._id || post?.id || idx;
            const href = `/blog/${slugOrId}`;

            const defaultImg = "/Home Page/Career/Specialized Training Modules_11zon.webp";
            let image = defaultImg;
            if (post?.image && post.image !== "no-photo.jpg") {
              image = post.image.startsWith("http") ? post.image : `${API_BASE_URL}/${post.image}`;
            }

            const title = post?.title || post?.excerpt || DEFAULT_POSTS[idx % 3].title;

            let formattedDate = DEFAULT_POSTS[idx % 3].date;
            if (post?.createdAt) {
              const d = new Date(post.createdAt);
              if (!isNaN(d.getTime())) {
                formattedDate = d.toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                }).toUpperCase();
              }
            } else if (post?.date) {
              formattedDate = post.date;
            }

            return (
              <Link
                key={slugOrId}
                href={href}
                className="group relative rounded-[28px] overflow-hidden bg-slate-200 border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.09)] transition-all duration-300 cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={image}
                  alt={title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = defaultImg;
                  }}
                  className="relative block w-full h-auto object-contain object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Floating Bottom Card Container */}
                <div className="relative z-10  bg-white rounded-[5px] p-4 sm:p-5 flex flex-col justify-between gap-3 shadow-md border border-[#F0F0F5]/80">
                  <h3
                    className="text-[#111111] text-[15px] sm:text-[17px] font-bold leading-[1.35] line-clamp-2 group-hover:text-[#FF5622] transition-colors"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {title}
                  </h3>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[12px] font-semibold text-[#888888] tracking-wider uppercase">
                      {formattedDate}
                    </span>

                    <span
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-bold text-[#FF5622] bg-[#FFF0EC] group-hover:bg-[#FF5622] group-hover:text-white transition-all duration-300 shadow-sm"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      Read Article
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
