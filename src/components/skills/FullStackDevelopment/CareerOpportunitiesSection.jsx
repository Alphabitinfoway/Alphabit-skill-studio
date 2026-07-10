"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CareerOpportunitiesSection() {
  const mernRoles = [
    "MERN Stack Developer",
    "React JS Frontend Developer",
    "Node JS Backend Developer",
    "Javascript Full Stack Developer",
    "Web Application Developer",
    "Freelance Full Stack Developer",
  ];

  const javaRoles = [
    "Java Full Stack Developer",
    "Spring Boot Backend Developer",
    "Java Web Developer",
    "Enterprise Application Developer",
    "Software Engineer (Java)",
    "Microservices Developer"
  ];

  return (
    <section className="w-full bg-[#F5F5F5] py-16 md:py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 md:gap-16">

        {/* Header */}
        <h2 className="tracking-tight flex items-baseline gap-x-3 flex-wrap">
          <span
            className="font-semibold text-[#111111]"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: "32px" }}
          >
            Explore
          </span>
          <span
            className="font-medium text-[#FF5622]"
            style={{ fontFamily: "'PP Editorial New', serif", fontSize: "52px", fontStyle: "italic" }}
          >
            Career Opportunities
          </span>
        </h2>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 relative">

          {/* Vertical Divider (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300/60 -translate-x-1/2" />

          {/* MERN Stack Column */}
          <div className="flex flex-col items-center text-center gap-6 md:pr-12">
            <h3
              className="text-[28px] sm:text-[34px] italic font-medium text-[#7143FE] mb-2"
              style={{ fontFamily: "'PP Editorial New', serif" }}
            >
              MERN Stack Track
            </h3>
            <ul className="flex flex-col gap-4">
              {mernRoles.map((role, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <img src="/black arrow.png" alt="arrow" className="w-5 h-5" />
                  <span
                    className="text-[#111111] text-[16px] sm:text-[18px] font-medium group-hover:text-[#7143FE] transition-colors duration-200"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {role}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Java Full Stack Column */}
          <div className="flex flex-col items-center text-center gap-6 md:pl-12">
            <h3
              className="text-[28px] sm:text-[34px] italic font-medium text-[#7143FE] mb-2"
              style={{ fontFamily: "'PP Editorial New', serif" }}
            >
              Java Full Stack Track
            </h3>
            <ul className="flex flex-col gap-4">
              {javaRoles.map((role, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <img src="/black arrow.png" alt="arrow" className="w-5 h-5" />
                  <span
                    className="text-[#111111] text-[16px] sm:text-[18px] font-medium group-hover:text-[#7143FE] transition-colors duration-200"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {role}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
