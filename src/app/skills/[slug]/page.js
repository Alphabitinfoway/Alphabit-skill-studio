import { getAllSlugs, getSkillBySlug } from "@/data/skills";
import { notFound } from "next/navigation";
import { API_BASE_URL } from "@/config/api";

// Import common layout components
import HeroSection from "@/components/skills/Common/HeroSection";
import ProjectStatsSection from "@/components/skills/Common/ProjectStatsSection";
import LandingPageLayout from "@/components/skills/Common/LandingPageLayout";
import CurriculumSection from "@/components/skills/Common/CurriculumSection";
import ComparisonSection from "@/components/skills/Common/ComparisonSection";
import EarningsSection from "@/components/skills/Common/EarningsSection";
import MeetingVideoSection from "@/components/skills/Common/MeetingVideoSection";
import CareerOpportunitiesSection from "@/components/skills/Common/CareerOpportunitiesSection";
import IndustriesSection from "@/components/skills/Common/IndustriesSection";
import FAQSection from "@/components/skills/Common/FAQsection";
import CTASection from "@/components/skills/Common/CTASection";

// Import global sections
import TestimonialsSection from "@/components/skills/Common/TestimonialsSection";

// ── SSG: pre-render all slugs at build time ───────────────────────────────
export async function generateStaticParams() {
  return getAllSlugs();
}

// ── Per-page SEO metadata ─────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) return {};

  try {
    const dataModule = await import(`@/data/skills-data/${slug}`);
    if (dataModule.metadata) {
      return dataModule.metadata;
    }
  } catch (err) {
    // Fall back to default if import fails or metadata is missing
  }

  return {
    title: `${skill.title} | Alphabit Skill`,
    description: `Learn ${skill.title} at Alphabit Skill — expert-led training, real-world projects, and placement support.`,
  };
}

// ── Server-side API helpers ───────────────────────────────────────────────
const API_BASE = API_BASE_URL;

/**
 * Fetch meetings and syllabus data from the backend in parallel.
 * Uses Next.js ISR (revalidate: 3600 = 1 hour) so the Render.com free-tier
 * cold-start only ever affects the very first server render, not user visits.
 * Returns nulls gracefully if the API is unreachable.
 */
async function fetchSkillApiData(slug) {
  try {
    const [meetingsRes, syllabusRes] = await Promise.all([
      fetch(`${API_BASE}/api/meetings`, {
        headers: { "ngrok-skip-browser-warning": "true" },
        next: { revalidate: 3600 }, // ISR: re-fetch at most once per hour
      }),
      fetch(`${API_BASE}/api/syllabus`, {
        headers: { "ngrok-skip-browser-warning": "true" },
        next: { revalidate: 3600 },
      }),
    ]);

    const [meetingsJson, syllabusJson] = await Promise.all([
      meetingsRes.ok ? meetingsRes.json() : Promise.resolve({ data: [] }),
      syllabusRes.ok ? syllabusRes.json() : Promise.resolve({ data: [] }),
    ]);

    const apiMeetings =
      meetingsJson?.success && Array.isArray(meetingsJson.data)
        ? meetingsJson.data.filter((m) => m.skillSlug === slug)
        : [];

    const syllabusPdf =
      syllabusJson?.success && Array.isArray(syllabusJson.data)
        ? (syllabusJson.data.find((s) => s.skillSlug === slug)?.pdfUrl ?? null)
        : null;

    return { apiMeetings, syllabusPdf };
  } catch (err) {
    // Backend unreachable (e.g. Render.com cold start timeout) — degrade gracefully
    console.error("[SkillDetailPage] API fetch failed:", err?.message);
    return { apiMeetings: [], syllabusPdf: null };
  }
}

// ── Page ──────────────────────────────────────────────────────────────────
export default async function SkillDetailPage({ params }) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);

  if (!skill) notFound();

  // Load skill config data + API data in parallel
  const [skillDataResult, apiData] = await Promise.all([
    // Dynamic import for skill-specific config
    import(`@/data/skills-data/${slug}`)
      .then((mod) => ({ ...mod }))
      .catch(() => {
        // Fallback hero data if no skill-specific file exists
        const words = skill.title.split(" ");
        const titleSuffix = words.pop() || "";
        const titlePrefix = words.join(" ") || "Professional";
        return {
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
          },
        };
      }),
    // Server-side API fetch (cached with ISR)
    fetchSkillApiData(slug),
  ]);

  const skillData = skillDataResult;
  const { apiMeetings, syllabusPdf } = apiData;

  return (
    <>
      <HeroSection data={skillData} />
      <ProjectStatsSection data={skillData} />
      <LandingPageLayout data={skillData} />
      <CurriculumSection data={skillData} syllabusPdf={syllabusPdf} />
      <ComparisonSection data={skillData} />
      <EarningsSection data={skillData} />
      <MeetingVideoSection data={skillData} apiMeetings={apiMeetings} />
      <CareerOpportunitiesSection data={skillData} />
      <IndustriesSection data={skillData} />
      <TestimonialsSection data={skillData} />
      <FAQSection data={skillData} />
      <CTASection data={skillData} />
    </>
  );
}
