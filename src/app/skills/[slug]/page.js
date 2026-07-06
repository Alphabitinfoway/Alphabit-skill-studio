import { getAllSlugs, getSkillBySlug } from "@/data/skills";
import { notFound } from "next/navigation";

// ── Skill component map ───────────────────────────────────────────────────
// Each skill folder has its own HeroSection component.
// Add more components here (e.g. FAQSection) as each skill grows.
const skillComponents = {
  "full-stack-development": {
    HeroSection: () => import("@/components/skills/FullStackDevelopment/HeroSection"),
    ProjectStatsSection: () => import("@/components/skills/FullStackDevelopment/ProjectStatsSection"),
    LandingPageLayout: () => import("@/components/skills/FullStackDevelopment/LandingPageLayout"),
  },
  "web-development": {
    HeroSection: () => import("@/components/skills/WebDevelopment/HeroSection"),
  },
  "mobile-app-development": {
    HeroSection: () => import("@/components/skills/MobileAppDevelopment/HeroSection"),
  },
  "ui-ux-graphic-design": {
    HeroSection: () => import("@/components/skills/UIUXGraphicDesign/HeroSection"),
  },
  "digital-designing": {
    HeroSection: () => import("@/components/skills/DigitalDesigning/HeroSection"),
  },
  "database-management": {
    HeroSection: () => import("@/components/skills/DatabaseManagement/HeroSection"),
  },
  "e-commerce-shopify-woocommerce": {
    HeroSection: () => import("@/components/skills/ECommerceShopifyWooCommerce/HeroSection"),
  },
  "qa-testing": {
    HeroSection: () => import("@/components/skills/QATesting/HeroSection"),
  },
  "cyber-security": {
    HeroSection: () => import("@/components/skills/CyberSecurity/HeroSection"),
  },
  "ethical-hacking": {
    HeroSection: () => import("@/components/skills/EthicalHacking/HeroSection"),
  },
  "cloud-computing": {
    HeroSection: () => import("@/components/skills/CloudComputing/HeroSection"),
  },
  "ror-odoo-golang": {
    HeroSection: () => import("@/components/skills/ROROdooGolang/HeroSection"),
  },
  "communication-skills": {
    HeroSection: () => import("@/components/skills/CommunicationSkills/HeroSection"),
  },
  "resume-linkedin": {
    HeroSection: () => import("@/components/skills/ResumeLinkedIn/HeroSection"),
  },
  "leadership-development": {
    HeroSection: () => import("@/components/skills/LeadershipDevelopment/HeroSection"),
  },
  "video-editing-content-creation": {
    HeroSection: () => import("@/components/skills/VideoEditingContentCreation/HeroSection"),
  },
  "e-commerce-business-skills": {
    HeroSection: () => import("@/components/skills/ECommerceBusinessSkills/HeroSection"),
  },
  "personality-development": {
    HeroSection: () => import("@/components/skills/PersonalityDevelopment/HeroSection"),
  },
  "python-for-ai-ml": {
    HeroSection: () => import("@/components/skills/PythonForAIML/HeroSection"),
  },
  "data-science-analytics": {
    HeroSection: () => import("@/components/skills/DataScienceAnalytics/HeroSection"),
  },
  "chatgpt-prompt-engineering": {
    HeroSection: () => import("@/components/skills/ChatGPTPromptEngineering/HeroSection"),
  },
  "ai-tools-training": {
    HeroSection: () => import("@/components/skills/AIToolsTraining/HeroSection"),
  },
  "ai-automation": {
    HeroSection: () => import("@/components/skills/AIAutomation/HeroSection"),
  },
  "generative-ai": {
    HeroSection: () => import("@/components/skills/GenerativeAI/HeroSection"),
  },
};

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

  const components = skillComponents[slug];
  if (!components) notFound();

  const { default: HeroSection } = await components.HeroSection();

  let ProjectStatsSection = null;
  if (components.ProjectStatsSection) {
    const res = await components.ProjectStatsSection();
    ProjectStatsSection = res.default;
  }

  let LandingPageLayout = null;
  if (components.LandingPageLayout) {
    const res = await components.LandingPageLayout();
    LandingPageLayout = res.default;
  }

  return (
    <>
      <HeroSection />
      {ProjectStatsSection && <ProjectStatsSection />}
      {LandingPageLayout && <LandingPageLayout />}
    </>
  );
}
