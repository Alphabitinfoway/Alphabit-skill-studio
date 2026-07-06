"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import RoleCard from "./cards/RoleCard";
import { rolesTabs } from "./data/rolesData";

export default function RolesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const tabRefs = useRef([]);

  useEffect(() => {
    const el = tabRefs.current[activeTab];
    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setPillStyle({ left: offsetLeft, width: offsetWidth, opacity: 1 });
    }
  }, [activeTab]);

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 border-gray-200 pb-8 gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-cabinet leading-tight">
          Scale Your Own <span className="text-[#FF5722] text-5xl font-pp italic font-normal">Career</span> While Architecting<br />
          the Next Generation of Tech Talent
        </h2>
        <p className="text-gray-500 text-base max-w-sm md:pt-6 pt-4">
          Browse our active listings and join an agile studio ecosystem dedicated to advanced IT and design training.
        </p>
      </div>

      {/* Glass Tab Labels */}
      <div className="flex overflow-x-auto mb-12 hide-scrollbar">
        <div className="relative flex gap-3 p-1.5 rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(230,220,255,0.30) 100%)",
            backdropFilter: "blur(16px) saturate(1.6)",
            WebkitBackdropFilter: "blur(16px) saturate(1.6)",
            border: "1.5px solid rgba(255,255,255,0.65)",
          }}
        >
          {/* Sliding glass active pill */}
          <motion.span
            className="absolute top-1.5 bottom-1.5 rounded-xl pointer-events-none"
            style={{
              background: `linear-gradient(170deg, rgba(255,255,255,0.70) 0%, rgba(200,180,255,0.35) 45%, rgba(124,58,237,0.20) 100%)`,
              boxShadow: `
                0 4px 20px rgba(124,58,237,0.20),
                0 1.5px 5px rgba(124,58,237,0.12)
              `,
              backdropFilter: "blur(18px) saturate(2)",
              WebkitBackdropFilter: "blur(18px) saturate(2)",
              border: "1.5px solid rgba(255,255,255,0.70)",
            }}
            animate={{
              left: pillStyle.left,
              width: pillStyle.width,
              opacity: pillStyle.opacity,
            }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 34,
              opacity: { duration: 0.15 },
            }}
          />

          {rolesTabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => setActiveTab(index)}
              className={`relative z-10 px-5 py-2 whitespace-nowrap text-[14px] font-[500] rounded-xl transition-colors duration-200 ${
                activeTab === index
                  ? "text-[#7C3AED] font-[700]"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full overflow-hidden pb-4">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeTab * 100}%)` }}>
          {rolesTabs.map((tab) => (
            <div key={tab.id} className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-1">
              {tab.cards.map((card) => (
                <RoleCard key={card.id} card={card} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}