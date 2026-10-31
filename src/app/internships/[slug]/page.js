import { notFound } from "next/navigation";
import { getInternshipBySlug, getAllInternshipSlugs } from "@/data/internships";
import InternshipTemplate from "@/components/internships/InternshipTemplate";

// ── SSG: Pre-render all internship slugs ──────────────────────────────────
export async function generateStaticParams() {
  return getAllInternshipSlugs();
}

// ── SEO Metadata ──────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const internship = getInternshipBySlug(slug);

  if (!internship) return {};

  return (
    internship.metadata || {
      title: `${internship.title} | Alphabit Skill`,
      description: `Join Alphabit Skill's ${internship.title} program with hands-on projects, industry mentorship, and verified certification.`,
    }
  );
}

// ── JSON-LD Course / Internship Schema ────────────────────────────────────
function getInternshipJsonLd(internship) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `${internship.title} | Alphabit Skill`,
    "description":
      internship.hero?.tagline ||
      "Industrial Python Internship with live project development, industry mentorship, and verified certification.",
    "provider": {
      "@type": "Organization",
      "name": "Alphabit Skill",
      "sameAs": "https://alphabitskill.com",
      "url": "https://alphabitskill.com",
      "logo": "https://alphabitskill.com/logo.webp",
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
        "duration": "P3M to P6M",
        "instructor": {
          "@type": "Person",
          "name": "Working Industry Mentors"
        }
      }
    ]
  };
}

// ── Page Component ────────────────────────────────────────────────────────
export default async function InternshipDetailPage({ params }) {
  const { slug } = await params;
  const internship = getInternshipBySlug(slug);

  if (!internship) {
    notFound();
  }

  const jsonLd = getInternshipJsonLd(internship);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InternshipTemplate data={internship} />
    </>
  );
}
