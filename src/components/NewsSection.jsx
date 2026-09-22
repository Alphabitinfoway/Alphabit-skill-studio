"use client";

import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, FileText, UserRound } from "lucide-react";

const insightItems = [
  {
    title: "Blogs",
    href: "/blog",
    icon: FileText,
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    icon: BriefcaseBusiness,
  },
  // {
  //   title: "Career",
  //   href: "/career",
  //   icon: UserRound,
  // },
];

export default function NewsSection() {
  return (
    <section id="insights" className="w-full bg-[#F3F3F3] px-4 py-10 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-6 flex items-center gap-2">
          <h2
            className="text-[26px] font-semibold tracking-[-0.04em] text-[#7143FE] sm:text-[32px]"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Insights
          </h2>
          <span className="text-[#7143FE]">
            <ArrowUpRight className="h-5 w-5 rotate-45 sm:h-6 sm:w-6" />
          </span>
        </div>

        <div className="overflow-hidden rounded-[22px] border border-[#e7e7e7] bg-[#f7f7f7] shadow-[0_8px_30px_rgba(17,17,17,0.04)]">
          {insightItems.map(({ title, href, icon: Icon }) => (
            <Link
              key={title}
              href={href}
              className="group flex items-center justify-between gap-4 border-b border-[#e9e9e9] px-4 py-4 transition-colors duration-200 last:border-b-0 hover:bg-white sm:px-5 sm:py-5"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e0d9ff] bg-white text-[#7143FE] shadow-sm sm:h-12 sm:w-12">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>

                <span
                  className="text-[18px] font-medium text-[#111111] sm:text-[22px]"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {title}
                </span>
              </div>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dfdfdf] bg-white text-[#111111] transition-all duration-200 group-hover:border-[#7143FE] group-hover:text-[#7143FE] sm:h-10 sm:w-10">
                <ArrowUpRight className="h-4 w-4 rotate-45 sm:h-5 sm:w-5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
