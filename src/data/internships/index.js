// ==============================================================================
// Internships Registry & Helpers
// Reusable index for all internship programs (Python, Java, Web Dev, etc.)
// ==============================================================================

import { pythonInternshipData } from "./python";

// Master list of all internship programs
export const internships = [
  pythonInternshipData,
];

/**
 * Find internship data by URL slug (e.g. 'python', 'java', etc.)
 */
export function getInternshipBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return internships.find((item) => item.slug === normalized) ?? null;
}

/**
 * Get all slugs for static generation (SSG)
 */
export function getAllInternshipSlugs() {
  return internships.map((item) => ({ slug: item.slug }));
}
