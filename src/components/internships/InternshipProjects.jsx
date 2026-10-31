"use client";

import React from "react";
import { motion } from "framer-motion";
import { FolderGit2, CheckCircle2, Code2 } from "lucide-react";

export default function InternshipProjects({ data }) {
  const {
    headingNormal = "Real-World Projects",
    headingItalic = "You Will Build",
    description,
    items = []
  } = data?.projects || {};

  return (
    <section className="w-full bg-[#F5F5F5] py-14 sm:py-18 md:py-20 px-4 sm:px-6 lg:px-20 font-cabinet">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-10 sm:mb-12">
          <h2 className="leading-tight tracking-tight text-[#111111] flex flex-wrap items-baseline gap-x-2.5 sm:gap-x-3.5">
            <span className="font-cabinet font-semibold text-[26px] sm:text-[38px] md:text-[44px]">
              {headingNormal}
            </span>
            <span
              className="italic font-medium text-[#FF5622] text-[34px] sm:text-[48px] md:text-[56px] leading-none"
              style={{ fontFamily: "'PP Editorial New', serif" }}
            >
              {headingItalic}
            </span>
          </h2>
          {description && (
            <p className="mt-2 sm:mt-3 text-[#666666] text-[15px] sm:text-[17px] max-w-2xl">
              {description}
            </p>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((project, idx) => (
            <motion.div
              key={project.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-[#E5E5E5] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#7143FE]/30 transition-all duration-300 group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[12px] font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-[#7143FE]/10 text-[#7C3AED]">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-[#7143FE] group-hover:text-white transition-colors duration-200">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#111111] leading-snug group-hover:text-[#7143FE] transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="mt-3 text-[14px] text-[#555555] leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights List */}
                {project.highlights && (
                  <ul className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
                    {project.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-[13px] text-[#444444]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Tech Stack Pills */}
              {project.techStack && (
                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11.5px] font-medium bg-[#F5F5F7] text-[#555555] px-2.5 py-0.5 rounded-lg border border-gray-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
