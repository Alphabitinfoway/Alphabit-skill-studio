import Link from "next/link";
import { API_BASE_URL } from "@/config/api";

export default function BlogCard({ post }) {
  const slugOrId = post?.slug || post?._id || post?.id;
  const href = `/blog/${slugOrId}`;
  
  const defaultImg = "/Home Page/Career/Specialized Training Modules_11zon.webp";
  let image = defaultImg;
  if (post?.image && post.image !== "no-photo.jpg") {
    image = post.image.startsWith("http") ? post.image : `${API_BASE_URL}/${post.image}`;
  }

  const title = post?.title || post?.excerpt || "Untitled Post";

  return (
    <Link
      href={href}
      className="group bg-white rounded-[24px] shadow-[0_2px_18px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.09)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer p-3 sm:p-3.5 flex flex-col h-full border border-[#EAEAEF]"
    >
      {/* Image — full width inside card with proportional 16:10 aspect ratio and rounded corners */}
      <div className="w-full aspect-[16/10] overflow-hidden rounded-[18px] bg-[#F2F2F5] relative">
        <img
          src={image}
          alt={title}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = defaultImg;
          }}
          className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
        />
      </div>

      {/* Body */}
      <div className="px-2 pt-4 pb-1.5 flex flex-col flex-1 justify-between gap-4">
        <p
          className="text-[#111111] text-[16px] sm:text-[17px] font-bold leading-[1.4] line-clamp-2 group-hover:text-[#7143FE] transition-colors"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          {title}
        </p>

        {/* Read Article Button */}
        <div className="pt-2 mt-auto border-t border-[#F0F0F5] flex items-center justify-between">
          <span 
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold text-[#7143FE] bg-[#7143FE]/10 group-hover:bg-[#7143FE] group-hover:text-white transition-all duration-300 shadow-sm"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Read Article
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

