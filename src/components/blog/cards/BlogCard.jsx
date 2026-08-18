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

        {/* Read More link — grey arrow image */}
        <span className="inline-flex items-center gap-2 text-[14px] font-medium text-[#555555] group-hover:text-[#7143FE] transition-colors duration-200 mt-auto">
          <img
            src="/greyArrow.webp"
            alt="arrow"
            className="w-[18px] h-[18px] object-contain flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          />
          Read More
        </span>
      </div>
    </Link>
  );
}

