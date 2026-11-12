import Link from "next/link";
import Image from "next/image";

export default function InternshipCard({ internship }) {
  const { title, slug, category, hero, quickDetails = [], about } = internship;
  const internshipSlug = slug || internship._id || internship.id;
  const duration = quickDetails.find(
    (detail) =>
      detail.id === "duration" ||
      detail.label?.trim().toLowerCase() === "duration",
  );
  const summary =
    hero?.tagline ||
    hero?.subtitle ||
    about?.paragraphs?.[0];

  return (
    <Link
      href={`/internships/${internshipSlug}`}
      className="group flex h-full flex-col rounded-[24px] border border-[#EAEAEF] bg-white p-3 shadow-[0_2px_18px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.09)] sm:p-3.5"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-[#F2F2F5]">
        {hero?.heroImage && (
          <Image
            src={hero.heroImage}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 px-2 pb-1.5 pt-4">
        <div>
          {category && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#7143FE]">
              {category}
            </p>
          )}
          <h2 className="line-clamp-2 font-cabinet text-[18px] font-bold leading-[1.4] text-[#111111] transition-colors group-hover:text-[#7143FE]">
            {title}
          </h2>
          {summary && (
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#666666]">
              {summary}
            </p>
          )}
          {duration?.value && (
            <p className="mt-3 text-sm font-medium text-[#555555]">
              Duration: {duration.value}
            </p>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-[#F0F0F5] pt-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7143FE]/10 px-3 py-1.5 text-xs font-bold text-[#7143FE] shadow-sm transition-all duration-300 group-hover:bg-[#7143FE] group-hover:text-white">
            Explore Internship
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
