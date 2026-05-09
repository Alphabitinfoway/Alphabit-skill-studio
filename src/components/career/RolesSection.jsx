"use client";

import { useState } from "react";
import RoleCard from "./cards/RoleCard";
import { rolesTabs } from "./data/rolesData";

export default function RolesSection() {
  const [activeTab, setActiveTab] = useState(0);

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

      <div className="flex overflow-x-auto mb-12 hide-scrollbar">
        <div className="border-b-2 border-gray-200 flex gap-8">
          {rolesTabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`pb-4 whitespace-nowrap text-lg -mb-[1px] ${activeTab === index ? "font-bold text-gray-900 border-b-2 border-gray-900" : "font-medium text-gray-400 hover:text-gray-900 border-transparent transition-colors"}`}
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