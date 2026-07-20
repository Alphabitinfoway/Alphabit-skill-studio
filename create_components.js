const fs = require('fs');
const path = require('path');

const newSkills = [
  {
    dirName: "JavaDevelopment",
    title: "Java",
    spanTitle: "Development",
    desc: "Master Java programming, OOP concepts, data structures, and enterprise application development.",
    category: "IT Skills"
  },
  {
    dirName: "MERNStackDevelopment",
    title: "MERN Stack",
    spanTitle: "Development",
    desc: "Build full-stack web applications using MongoDB, Express.js, React, and Node.js.",
    category: "IT Skills"
  },
  {
    dirName: "NETDevelopment",
    title: ".NET",
    spanTitle: "Development",
    desc: "Develop powerful enterprise and cloud applications using C# and Microsoft's .NET framework.",
    category: "IT Skills"
  },
  {
    dirName: "GamingDevelopment",
    title: "Gaming",
    spanTitle: "Development",
    desc: "Create immersive 2D and 3D games using Unity, Unreal Engine, and modern design principles.",
    category: "IT Skills"
  },
  {
    dirName: "PerformanceMarketing",
    title: "Performance",
    spanTitle: "Marketing",
    desc: "Drive growth and optimize advertising campaigns with data-driven performance marketing strategies.",
    category: "IT Skills"
  },
  {
    dirName: "SocialMediaMarketing",
    title: "Social Media",
    spanTitle: "Marketing",
    desc: "Engage audiences and grow brand presence across Instagram, LinkedIn, and major social networks.",
    category: "IT Skills"
  },
  {
    dirName: "HumanResourcesHR",
    title: "Human Resources",
    spanTitle: "(HR)",
    desc: "Learn talent acquisition, employee relations, policy design, and HR operations management.",
    category: "Non-Tech Field"
  },
  {
    dirName: "BusinessDevelopmentExecutiveBDE",
    title: "Business Development",
    spanTitle: "Executive (BDE)",
    desc: "Master sales strategy, lead generation, client negotiation, and business development pipelines.",
    category: "Non-Tech Field"
  },
  {
    dirName: "AccountManager",
    title: "Account",
    spanTitle: "Manager",
    desc: "Build strong client relationships, manage accounts, and drive retention and growth.",
    category: "Non-Tech Field"
  },
  {
    dirName: "SalesExecutive",
    title: "Sales",
    spanTitle: "Executive",
    desc: "Learn retail and B2B sales techniques, customer interaction, and conversion tactics.",
    category: "Non-Tech Field"
  },
  {
    dirName: "MarketingManager",
    title: "Marketing",
    spanTitle: "Manager",
    desc: "Coordinate campaigns, execute market research, and design branding strategies.",
    category: "Non-Tech Field"
  },
  {
    dirName: "BrandManager",
    title: "Brand",
    spanTitle: "Manager",
    desc: "Define brand identities, design guidelines, and lead product positioning efforts.",
    category: "Non-Tech Field"
  },
  {
    dirName: "PurchaseManager",
    title: "Purchase",
    spanTitle: "Manager",
    desc: "Manage procurement, supply chains, vendor negotiations, and inventory forecasting.",
    category: "Non-Tech Field"
  },
  {
    dirName: "DigitalMarketingManager",
    title: "Digital Marketing",
    spanTitle: "Manager",
    desc: "Lead online marketing initiatives, SEO/SEM strategies, and content team management.",
    category: "Non-Tech Field"
  }
];

const basePath = path.join(__dirname, 'src', 'components', 'skills');

newSkills.forEach(skill => {
  const dirPath = path.join(basePath, skill.dirName);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const content = `"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-[#6E42F8] via-[#7C3AED] to-[#4F1FD4]">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      <div className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full bg-[#FF5622]/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[320px] h-[320px] rounded-full bg-[#a78bfa]/30 blur-[100px] pointer-events-none" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 py-24">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-[13px] font-medium mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5622] inline-block" />
            ${skill.category}
          </span>
          <h1 className="text-[48px] sm:text-[60px] md:text-[72px] lg:text-[86px] font-bold text-white leading-[1.05] tracking-tight font-cabinet mb-6">
            ${skill.title}{" "}
            <span className="text-[#FF5622] italic font-medium" style={{ fontFamily: "'PP Editorial New', serif" }}>
              ${skill.spanTitle}
            </span>
          </h1>
          <p className="text-white/70 text-[18px] md:text-[20px] font-light font-cabinet max-w-[560px] leading-relaxed mb-10">
            ${skill.desc}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FF5622] hover:bg-[#e04d1e] text-white rounded-full font-semibold text-[15px] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#FF5622]/30">
              Enroll Now →
            </Link>
            <Link href="/skills" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-medium text-[15px] transition-all duration-300 backdrop-blur-sm">
              ← Back to Skills
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
`;

  const heroPath = path.join(dirPath, 'HeroSection.jsx');
  if (!fs.existsSync(heroPath)) {
    fs.writeFileSync(heroPath, content, 'utf8');
    console.log(`Generated ${skill.dirName}/HeroSection.jsx`);
  } else {
    console.log(`Skipped (already exists): ${skill.dirName}/HeroSection.jsx`);
  }
});
