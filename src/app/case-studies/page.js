import HeroSection from "@/components/case-studies/HeroSection";
import CaseStudyPostsSection from "@/components/case-studies/CaseStudyPostsSection";
import CTASection from "@/components/CTASection";
import { API_BASE_URL } from "@/config/api";

const API_BASE = API_BASE_URL;

async function fetchCaseStudies() {
  try {
    const res = await fetch(`${API_BASE}/api/case-studies`, {
      headers: { "ngrok-skip-browser-warning": "true" },
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        return json.data;
      }
    }
  } catch (err) {
    console.warn("[CaseStudiesPage] Error fetching case studies:", err?.message);
  }
  return [];
}

export default async function CaseStudies() {
  const caseStudies = await fetchCaseStudies();

  return (
    <div className="flex flex-col items-center w-full bg-[#F5F5F5]">
      <HeroSection />
      <CaseStudyPostsSection initialCaseStudies={caseStudies} />
      <CTASection />
    </div>
  );
}
