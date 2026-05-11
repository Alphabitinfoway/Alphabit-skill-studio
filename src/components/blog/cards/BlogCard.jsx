export default function BlogCard({ post }) {
  return (
    <div className="group bg-white rounded-[24px] shadow-[0_2px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_36px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer p-3">

      {/* Image — padded inside card with its own rounded corners */}
      <div className="w-[calc(100%-16px)] mx-auto h-[180px] overflow-hidden rounded-[16px] bg-[#D9D9D9]">
        <img
          src={post.image}
          alt="blog post"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Body */}
      <div className="px-3 pt-4 pb-3 flex flex-col gap-4">
        <p
          className="text-[#111111] text-[16px] font-bold leading-[1.55] line-clamp-2"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          {post.excerpt}
        </p>

        {/* Read More link — grey arrow image */}
        <span className="inline-flex items-center gap-2 text-[14px] font-medium text-[#555555] group-hover:text-[#7143FE] transition-colors duration-200">
          <img
            src="/greyArrow.png"
            alt="arrow"
            className="w-[20px] h-[20px] object-contain flex-shrink-0"
          />
          Read More
        </span>
      </div>

    </div>
  );
}
