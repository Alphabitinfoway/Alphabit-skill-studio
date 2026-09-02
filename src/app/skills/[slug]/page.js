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

// Force dynamic rendering to ensure fresh API data on every page request
export const revalidate = 0;

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
 * cold-start only ever affects the very first server render, not user visits.
 * Returns nulls gracefully if the API is unreachable.
 */
async function fetchSkillApiData(slug) {
  try {
    const [meetingsRes, syllabusRes] = await Promise.all([
      fetch(`${API_BASE}/api/meetings`, {
        headers: { "ngrok-skip-browser-warning": "true" },
        cache: "no-store",
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



    const matchSlug = (itemSlug, currentSlug) => {
      if (!itemSlug || !currentSlug) return false;
      const norm1 = itemSlug.toLowerCase().trim().replace(/[-\s]+/g, " ");
      const norm2 = currentSlug.toLowerCase().trim().replace(/[-\s]+/g, " ");
      return norm1 === norm2;
    };

    const apiMeetings =
      meetingsJson?.success && Array.isArray(meetingsJson.data)
        ? meetingsJson.data.filter((m) => matchSlug(m.skillSlug, slug) || matchSlug(m.title, slug))
        : [];

    const syllabusPdf =
      syllabusJson?.success && Array.isArray(syllabusJson.data)
        ? (syllabusJson.data.find((s) => matchSlug(s.skillSlug, slug) || matchSlug(s.title, slug))?.pdfUrl ?? null)
        : null;

    return { apiMeetings, syllabusPdf };
  } catch (err) {
    // Backend unreachable (e.g. Render.com cold start timeout) — degrade gracefully
    console.warn("[SkillDetailPage] API fetch failed:", err?.message);
    return { apiMeetings: [], syllabusPdf: null };
  }
}

// ── Course JSON-LD Structured Data Schema ────────────────────────────────
function getCourseJsonLd(slug, skill, skillData) {
  const meta = skillData?.metadata || {};
  const courseTitle = meta.title || `${skill.title} Course | Alphabit Skill`;
  const courseDesc =
    meta.description ||
    skillData?.heroSectionData?.description ||
    `Learn ${skill.title} with hands-on projects, industry mentors, and placement support at Alphabit Skill.`;
  const durationText = skillData?.projectStatsSectionData?.durationVal || "4–5 months";

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseTitle,
    "description": courseDesc,
    "provider": {
      "@type": "Organization",
      "name": "Alphabit Skill",
      "sameAs": "https://alphabitskill.com",
      "url": "https://alphabitskill.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://alphabitskill.com/logo.webp"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kalawad Road",
        "addressLocality": "Rajkot",
        "addressRegion": "Gujarat",
        "postalCode": "360005",
        "addressCountry": "IN"
      }
    },
    "educationalCredentialAwarded": "Government-Recognised (NSDC) Industry-Ready Certification",
    "courseMode": ["Blended", "Onsite", "Online"],
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "courseMode": "Blended",
        "duration": durationText,
        "instructor": {
          "@type": "Person",
          "name": "Working Industry Mentors"
        },
        "location": {
          "@type": "Place",
          "name": "Alphabit Skill Training ",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kalawad Road",
            "addressLocality": "Rajkot",
            "addressRegion": "Gujarat",
            "postalCode": "360005",
            "addressCountry": "IN"
          }
        }
      }
    ],
    "offers": [
      {
        "@type": "Offer",
        "category": "Paid",
        "price": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "description": "Transparent pricing with No Cost EMI options and free demo class",
        "url": `https://alphabitskill.com/skills/${slug}`
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": "380",
      "reviewCount": "195"
    }
  };
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
  const courseJsonLd = getCourseJsonLd(slug, skill, skillData);

  return (
    <>
      {/* Schema.org Course Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
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
