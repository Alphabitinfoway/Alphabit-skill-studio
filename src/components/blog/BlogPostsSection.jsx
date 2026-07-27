"use client";

import { useState } from "react";
import { MoveRight } from "lucide-react";
import { allPosts, POSTS_PER_PAGE } from "./data/postsData";
import BlogCard from "./cards/BlogCard";

const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

export default function BlogPostsSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = allPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <section className="w-full bg-[#F5F5F5] py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-[1728px] mx-auto">

        {/* ── Card Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* ── Pagination ── */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 rounded-full text-[14px] font-semibold transition-all duration-200 ${
                page === currentPage
                  ? "bg-[#7143FE] text-white shadow-md"
                  : "bg-white text-[#555] border border-[#E0E0E0] hover:border-[#7143FE] hover:text-[#7143FE]"
              }`}
            >
              {page}
            </button>
          ))}
          {/* Next arrow */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="w-9 h-9 rounded-full bg-white border border-[#E0E0E0] flex items-center justify-center text-[#555] hover:border-[#7143FE] hover:text-[#7143FE] transition-all duration-200"
          >
            
            <img src="greyArrow.webp" alt="arrow"  className="w-5 rotate-45"/>
          </button>
        </div>

      </div>
    </section>
  );
}
