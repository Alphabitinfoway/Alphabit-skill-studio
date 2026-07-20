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
    CurriculumSection: () => import("@/components/skills/FullStackDevelopment/CurriculumSection"),
    CareerOpportunitiesSection: () => import("@/components/skills/FullStackDevelopment/CareerOpportunitiesSection"),
    IndustriesSection: () => import("@/components/skills/FullStackDevelopment/IndustriesSection"),
    ComparisonSection: () => import("@/components/skills/FullStackDevelopment/ComparisonSection"),
    EarningsSection: () => import("@/components/skills/FullStackDevelopment/EarningsSection"),
    MeetingGlanceSection: () => import("@/components/skills/FullStackDevelopment/MeetingGlanceSection"),
    MeetingVideoSection: () => import("@/components/skills/FullStackDevelopment/MeetingVideoSection"),
    TestimonialsSection: () => import("@/components/TestimonialsSection"),
    FAQSection: () => import("@/components/skills/FullStackDevelopment/FAQsection"),
    CTASection: () => import("@/components/CTASection"),
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
  "digital-marketing": {
    HeroSection: () => import("@/components/skills/DigitalMarketing/HeroSection"),
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
  "java-development": {
    HeroSection: () => import("@/components/skills/JavaDevelopment/HeroSection"),
  },
  "mern-stack-development": {
    HeroSection: () => import("@/components/skills/MERNStackDevelopment/HeroSection"),
  },
  "net-development": {
    HeroSection: () => import("@/components/skills/NETDevelopment/HeroSection"),
  },
  "gaming-development": {
    HeroSection: () => import("@/components/skills/GamingDevelopment/HeroSection"),
  },
  "performance-marketing": {
    HeroSection: () => import("@/components/skills/PerformanceMarketing/HeroSection"),
  },
  "social-media-marketing": {
    HeroSection: () => import("@/components/skills/SocialMediaMarketing/HeroSection"),
  },
  "human-resources-hr": {
    HeroSection: () => import("@/components/skills/HumanResourcesHR/HeroSection"),
  },
  "business-development-executive-bde": {
    HeroSection: () => import("@/components/skills/BusinessDevelopmentExecutiveBDE/HeroSection"),
  },
  "account-manager": {
    HeroSection: () => import("@/components/skills/AccountManager/HeroSection"),
  },
  "sales-executive": {
    HeroSection: () => import("@/components/skills/SalesExecutive/HeroSection"),
  },
  "marketing-manager": {
    HeroSection: () => import("@/components/skills/MarketingManager/HeroSection"),
  },
  "brand-manager": {
    HeroSection: () => import("@/components/skills/BrandManager/HeroSection"),
  },
  "purchase-manager": {
    HeroSection: () => import("@/components/skills/PurchaseManager/HeroSection"),
  },
  "digital-marketing-manager": {
    HeroSection: () => import("@/components/skills/DigitalMarketingManager/HeroSection"),
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



  let CurriculumSection = null;
  if(components.CurriculumSection) {
    const res = await components.CurriculumSection();
    CurriculumSection = res.default;
  }

  let CareerOpportunitiesSection = null;
  if(components.CareerOpportunitiesSection) {
    const res = await components.CareerOpportunitiesSection();
    CareerOpportunitiesSection = res.default;
  }

  let IndustriesSection = null;
  if(components.IndustriesSection) {
    const res = await components.IndustriesSection();
    IndustriesSection = res.default;
  }

  let TestimonialsSection = null;
  if(components.TestimonialsSection) {
    const res = await components.TestimonialsSection();
    TestimonialsSection = res.default;
  }

  let FAQSection = null;
  if(components.FAQSection) {
    const res = await components.FAQSection();
    FAQSection = res.default;
  }

  let CTASection = null;
  if(components.CTASection) {
    const res = await components.CTASection();
    CTASection = res.default;
  }

  let ComparisonSection = null;
  if(components.ComparisonSection) {
    const res = await components.ComparisonSection();
    ComparisonSection = res.default;
  }

  let EarningsSection = null;
  if(components.EarningsSection) {
    const res = await components.EarningsSection();
    EarningsSection = res.default;
  }

  let MeetingGlanceSection = null;
  if(components.MeetingGlanceSection) {
    const res = await components.MeetingGlanceSection();
    MeetingGlanceSection = res.default;
  }

  let MeetingVideoSection = null;
  if(components.MeetingVideoSection) {
    const res = await components.MeetingVideoSection();
    MeetingVideoSection = res.default;
  }

  

  return (
    <>
      <HeroSection />
      {ProjectStatsSection && <ProjectStatsSection />}
      {LandingPageLayout && <LandingPageLayout />}
      {CurriculumSection && <CurriculumSection />}
      {ComparisonSection && <ComparisonSection />}
      {EarningsSection && <EarningsSection />}
      {MeetingGlanceSection && <MeetingGlanceSection />}
      {MeetingVideoSection && <MeetingVideoSection />}
      {CareerOpportunitiesSection && <CareerOpportunitiesSection />}
      {IndustriesSection && <IndustriesSection />}
      {TestimonialsSection && <TestimonialsSection />}
      {FAQSection && <FAQSection />}
      {CTASection && <CTASection />}
    </>
  );
}
