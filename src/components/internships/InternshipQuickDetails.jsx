"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Laptop, CreditCard, Award, Calendar } from "lucide-react";

const ICON_MAP = {
  Clock,
  Laptop,
  CreditCard,
  Award,
  Calendar,
};

export default function InternshipQuickDetails({ data }) {
  const quickDetails = data?.quickDetails || [];

  return (
    <section className="w-full bg-[#F5F5F5] py-8 sm:py-12 px-4 sm:px-6 lg:px-20 font-cabinet">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 md:gap-5">
          {quickDetails.map((item, idx) => {
            const Icon = ICON_MAP[item.icon] || Award;
            return (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  item.highlight
                    ? "bg-gradient-to-b from-white to-[#F7F3FF] border-[#7143FE]/30 shadow-[0_4px_20px_rgba(113,67,254,0.08)]"
                    : "bg-white border-[#E5E5E5] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[12px] sm:text-[13px] font-semibold text-[#777777] uppercase tracking-wider">
                      {item.label}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        item.highlight
                          ? "bg-[#7143FE] text-white"
                          : "bg-[#7143FE]/10 text-[#7C3AED]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-[16px] sm:text-[18px] font-bold text-[#111111] leading-snug">
                    {item.value}
                  </h3>
                </div>

                {item.subtext && (
                  <p className="mt-2 text-[12px] sm:text-[13px] text-[#666666] leading-tight">
                    {item.subtext}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
