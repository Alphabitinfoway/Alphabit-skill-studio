import CaseStudyDetailPage from "@/components/case-studies/CaseStudyDetailPage";
import { API_BASE_URL } from "@/config/api";

const API_BASE = API_BASE_URL;

async function fetchCaseStudyData(id) {
  try {
    const [caseStudyRes, allRes] = await Promise.all([
      fetch(`${API_BASE}/api/case-studies/${id}`, {
        headers: { "ngrok-skip-browser-warning": "true" },
        next: { revalidate: 60 },
      }),
      fetch(`${API_BASE}/api/case-studies`, {
        headers: { "ngrok-skip-browser-warning": "true" },
        next: { revalidate: 60 },
      }),
    ]);

    const [caseStudyJson, allJson] = await Promise.all([
      caseStudyRes.ok ? caseStudyRes.json() : Promise.resolve(null),
      allRes.ok ? allRes.json() : Promise.resolve(null),
    ]);

    const caseStudy = caseStudyJson?.success
      ? caseStudyJson.data
      : caseStudyJson?._id || caseStudyJson?.slug
        ? caseStudyJson
        : null;
    const allCaseStudies = Array.isArray(allJson)
      ? allJson
      : allJson?.success && Array.isArray(allJson.data)
        ? allJson.data
        : Array.isArray(allJson?.data)
          ? allJson.data
          : [];

    return { caseStudy, allCaseStudies };
  } catch (err) {
    console.warn("[CaseStudyDetailPage] API fetch error:", err?.message);
    return { caseStudy: null, allCaseStudies: [] };
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const { caseStudy } = await fetchCaseStudyData(id);

  if (caseStudy) {
    const title = caseStudy.metaTitle || caseStudy.title || "Case Study Details - Alphabit Skill";
    const description = caseStudy.metaDescription || "Read the latest case study on Alphabit Skill.";

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: caseStudy.image && caseStudy.image !== "no-photo.jpg" ? [caseStudy.image] : [],
      },
    };
  }

  return {
    title: "Case Study Details - Alphabit Skill",
    description: "Read real-world case studies and success stories from Alphabit Skill.",
  };
}

export default async function CaseStudyDetailRoute({ params }) {
  const { id } = await params;
  const { caseStudy, allCaseStudies } = await fetchCaseStudyData(id);

  return (
    <CaseStudyDetailPage
      initialCaseStudy={caseStudy}
      initialAllCaseStudies={allCaseStudies}
      slugOrId={id}
    />
  );
}
