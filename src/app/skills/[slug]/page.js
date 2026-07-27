import { getAllSlugs, getSkillBySlug } from "@/data/skills";
import { notFound } from "next/navigation";

// Import common layout components
import HeroSection from "@/components/skills/Common/HeroSection";
import ProjectStatsSection from "@/components/skills/Common/ProjectStatsSection";
import LandingPageLayout from "@/components/skills/Common/LandingPageLayout";
import CurriculumSection from "@/components/skills/Common/CurriculumSection";
import ComparisonSection from "@/components/skills/Common/ComparisonSection";
import EarningsSection from "@/components/skills/Common/EarningsSection";
import MeetingGlanceSection from "@/components/skills/Common/MeetingGlanceSection";
import MeetingVideoSection from "@/components/skills/Common/MeetingVideoSection";
import CareerOpportunitiesSection from "@/components/skills/Common/CareerOpportunitiesSection";
import IndustriesSection from "@/components/skills/Common/IndustriesSection";
import FAQSection from "@/components/skills/Common/FAQsection";
import CTASection from "@/components/skills/Common/CTASection";

// Import global sections
import TestimonialsSection from "@/components/TestimonialsSection";

// ── SSG: pre-render all slugs at build time ───────────────────────────────
export async function generateStaticParams() {
  return getAllSlugs();
}

// ── Per-page SEO metadata ─────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) return {};
  return {
    title: `${skill.title} | Alphabit Skill`,
    description: `Learn ${skill.title} at Alphabit Skill — expert-led training, real-world projects, and placement support.`,
  };
}

// ── Page ──────────────────────────────────────────────────────────────────
export default async function SkillDetailPage({ params }) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);

  if (!skill) notFound();

  // Load configuration data dynamically for the current slug
  let skillData = {};
  try {
    const dataModule = await import(`@/data/skills-data/${slug}`);
    // Spread the module properties into a plain object to pass across RSC boundary
    skillData = { ...dataModule };
  } catch (err) {
    // Generate dynamic fallback hero data based on course title if custom data file is missing
    const words = skill.title.split(" ");
    const titleSuffix = words.pop() || "";
    const titlePrefix = words.join(" ") || "Professional";

    skillData = {
      heroSectionData: {
        titlePrefix,
        titleSuffix,
        highlights: [
          "Expert-Led Live Training",
          "Hands-On Projects",
          "Placement Assistance",
        ],
        primaryCtaText: "Book Free Demo Class",
        secondaryCtaText: "Call Us",
        phoneNumber: "+919409207327",
        heroImage: "/subtract.webp",
      }
    };
  }

  return (
    <>
      <HeroSection data={skillData} />
      <ProjectStatsSection data={skillData} />
      <LandingPageLayout data={skillData} />
      <CurriculumSection data={skillData} />
      <ComparisonSection data={skillData} />
      <EarningsSection data={skillData} />
      <MeetingGlanceSection data={skillData} />
      <MeetingVideoSection data={skillData} />
      <CareerOpportunitiesSection data={skillData} />
      <IndustriesSection data={skillData} />
      <TestimonialsSection />
      <FAQSection data={skillData} />
      <CTASection data={skillData} />
    </>
  );
}
