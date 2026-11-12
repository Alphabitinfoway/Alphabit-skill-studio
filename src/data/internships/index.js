import { API_BASE_URL } from "@/config/api";

const API_URL = `${API_BASE_URL}/api/internships`;
const API_OPTIONS = {
  headers: { "ngrok-skip-browser-warning": "true" },
  next: { revalidate: 60 },
};

function getResponseData(payload) {
  if (payload?.success === false) {
    throw new Error(payload.message || "The internship API returned an error.");
  }

  return payload?.data ?? payload;
}

// ── Icon resolver for quickDetails cards ────────────────────────────────────
function resolveQuickDetailIcon(label = "") {
  const l = label.toLowerCase();
  if (l.includes("duration") || l.includes("time")) return "Clock";
  if (l.includes("mode") || l.includes("delivery") || l.includes("online")) return "Laptop";
  if (l.includes("fee") || l.includes("emi") || l.includes("cost") || l.includes("price")) return "CreditCard";
  if (l.includes("cert") || l.includes("award") || l.includes("nsdc")) return "Award";
  if (l.includes("start") || l.includes("date") || l.includes("batch") || l.includes("cohort")) return "Calendar";
  return "Award";
}

// Highlight the fees card (matches Python internship design)
function resolveQuickDetailHighlight(label = "") {
  const l = label.toLowerCase();
  return l.includes("fee") || l.includes("emi") || l.includes("cost") || l.includes("price");
}

// ── Main mapper: backend API shape → InternshipTemplate prop shape ───────────
function toInternshipPageData(internship) {
  const displayTitle =
    internship.seo?.h1?.replace(/^H1\s*/i, "").trim() || internship.title;
  const metaDescription =
    internship.seo?.description
      ?.replace(/^Meta Description\s*/i, "")
      .trim() || "";
  const titleParts = displayTitle.match(/^(.*?)\s+(Internship)\b/i);
  const titlePrefix = titleParts?.[1] || displayTitle;
  const titleSuffix = titleParts?.[2] || "";

  // Map raw stats/quickDetails to card shape with icons + highlight flag
  const rawStats =
    internship.hero?.stats ||
    internship.quickDetails ||
    [];
  const quickDetails = rawStats.map((stat, idx) => ({
    id: stat.id || `detail-${idx}`,
    label: stat.label || stat.title || "",
    value: stat.value || "",
    subtext: stat.subtext || stat.subtitle || stat.description || "",
    icon:
      stat.icon ||
      resolveQuickDetailIcon(stat.label || stat.title || ""),
    highlight:
      stat.highlight !== undefined
        ? stat.highlight
        : resolveQuickDetailHighlight(stat.label || stat.title || ""),
  }));

  // All stats come directly from backend executionBenchmark / stats
  const backendStats = (
    internship.executionBenchmark ||
    internship.overview?.stats ||
    []
  ).map((item) => ({
    label: item.label || item.title || item.name || "",
    value: item.value ?? item.metric ?? item.stat ?? item.number ?? "",
  }));

  return {
    ...internship,
    title: displayTitle,

    // ── SEO Metadata ────────────────────────────────────────────────────
    metadata: {
      title: internship.seo?.title || `${displayTitle} | Alphabit Skill`,
      description: metaDescription,
    },

    // ── Hero Section ────────────────────────────────────────────────────
    hero: {
      ...internship.hero,
      titlePrefix,
      titleSuffix,
      tagline: internship.hero?.tagline || internship.hero?.subtitle,
      heroImage:
        internship.hero?.heroImage ||
        internship.hero?.image ||
        internship.image,
      highlights:
        internship.hero?.highlights ||
        internship.hero?.bullets ||
        [],
      primaryCtaText:
        internship.hero?.primaryCtaText || "Apply Now",
      secondaryCtaText:
        internship.hero?.secondaryCtaText || "Call Us",
      phoneNumber:
        internship.hero?.phoneNumber ||
        internship.phone ||
        "+919409207327",
      badgeText:
        internship.hero?.badgeText ||
        internship.batchText ||
        "Winter 2026 Batch Open",
    },

    // ── Quick Details Cards ─────────────────────────────────────────────
    quickDetails,

    // ── Overview Section ────────────────────────────────────────────────
    overview: {
      headingNormal:
        internship.overview?.headingNormal || "About The",
      headingItalic:
        internship.overview?.headingItalic || displayTitle,
      subheading:
        internship.overview?.subheading ||
        internship.about?.subheading ||
        "Bridge the gap between academic theory and real-world engineering.",
      description:
        internship.about?.paragraphs ||
        internship.overview?.description ||
        [],
      features:
        internship.about?.highlights ||
        internship.overview?.features ||
        [],
      stats: backendStats,
    },

    // ── Syllabus / Curriculum ───────────────────────────────────────────
    syllabus: {
      headingNormal:
        internship.syllabus?.headingNormal || "Curriculum &",
      headingItalic:
        internship.syllabus?.headingItalic || "Topics Covered",
      description:
        internship.syllabus?.description ||
        "A progressive, project-driven syllabus designed to take you from core concepts to production-ready deployments.",
      modules: (internship.curriculum || []).map((module, index) => ({
        num: String(index + 1).padStart(2, "0"),
        title: module.title,
        duration: module.weeks || module.duration,
        summary: module.description || module.summary,
        topics: module.topics || [],
        tools: module.stack || module.tools || [],
      })),
    },

    // ── Projects ────────────────────────────────────────────────────────
    projects: {
      headingNormal:
        internship.projects?.headingNormal || "Real-World Projects",
      headingItalic:
        internship.projects?.headingItalic || "You Will Build",
      description:
        internship.projects?.description ||
        "No generic tutorial clones. You will build enterprise-grade applications designed to stand out on GitHub and in technical interviews.",
      items: (internship.projects || []).map((project) => ({
        ...project,
        techStack: project.techStack || project.stack || [],
        highlights: project.highlights || project.features || [],
      })),
    },

    // ── Skills ──────────────────────────────────────────────────────────
    skills: {
      headingNormal:
        internship.skills?.headingNormal || "Industry Skills",
      headingItalic:
        internship.skills?.headingItalic || "You Will Master",
      description:
        internship.skills?.description ||
        "Acquire the precise engineering toolchain and conceptual competencies top tech employers demand.",
      categories: (internship.skills || []).map((category) => ({
        name: category.category || category.name,
        skills: category.items || category.skills || [],
      })),
    },

    // ── Eligibility ─────────────────────────────────────────────────────
    eligibility: {
      headingNormal:
        internship.eligibility?.headingNormal || "Eligibility &",
      headingItalic:
        internship.eligibility?.headingItalic || "Who Can Apply",
      description:
        internship.eligibility?.description ||
        "Our internship is structured to accommodate ambitious learners from varied technical backgrounds.",
      cards: (internship.eligibility || []).map((item) => ({
        ...item,
        requirements: item.criteria || item.requirements,
      })),
      prerequisites: internship.prerequisites || [],
    },

    // ── Benefits ────────────────────────────────────────────────────────
    benefits: {
      headingNormal:
        internship.benefits?.headingNormal || "Exclusive",
      headingItalic:
        internship.benefits?.headingItalic || "Internship Benefits",
      description:
        internship.benefits?.description ||
        "Equip yourself with verified credentials, real portfolio artifacts, and lifelong career leverage.",
      items: internship.benefits || [],
    },

    // ── FAQs ────────────────────────────────────────────────────────────
    faqs: {
      headingNormal:
        internship.faqs?.headingNormal || "Frequently Asked",
      headingItalic:
        internship.faqs?.headingItalic || "Questions",
      description:
        internship.faqs?.description ||
        `Got questions about the ${displayTitle}? Here are answers to common queries.`,
      items: (internship.faqs || []).map((faq, index) => ({
        ...faq,
        id: faq.id || index + 1,
      })),
    },

    // ── Bottom CTA ──────────────────────────────────────────────────────
    cta: internship.cta || {
      line1Normal: "Ready to Master",
      line1Italic: titlePrefix,
      line1Suffix: "and Build Production Apps?",
      line2Normal: "Apply For The",
      line2Italic: displayTitle,
      buttonText: "Apply Now",
      buttonHref: "/register",
      phone: internship.phone || "+919409207327",
    },
  };
}

export async function getInternships() {
  const response = await fetch(API_URL, API_OPTIONS);

  if (!response.ok) {
    throw new Error(`Failed to load internships (${response.status}).`);
  }

  const internships = getResponseData(await response.json());
  if (!Array.isArray(internships)) {
    throw new Error("The internship API did not return an array.");
  }

  return internships.map(toInternshipPageData);
}

export async function getInternshipBySlug(slug) {
  const response = await fetch(
    `${API_URL}/${encodeURIComponent(slug)}`,
    API_OPTIONS,
  );

  if (response.status === 404) return null;
  if (!response.ok) {
    throw new Error(`Failed to load internship "${slug}" (${response.status}).`);
  }

  const internship = getResponseData(await response.json());
  if (!internship || typeof internship !== "object" || Array.isArray(internship)) {
    throw new Error(`The internship API returned invalid data for "${slug}".`);
  }

  return toInternshipPageData(internship);
}
