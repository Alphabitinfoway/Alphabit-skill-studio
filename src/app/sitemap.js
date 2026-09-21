import { skills } from "@/data/skills";
import { API_BASE_URL } from "@/config/api";
import { allPosts } from "@/components/case-studies/data/postsData";

export default async function sitemap() {
  const baseUrl = "https://alphabitskill.com";

  // Static core routes
  const staticRoutes = [
    "",
    "/about",
    "/blog",
    "/career",
    "/case-studies",
    "/contact",
    "/privacy",
    "/register",
    "/skills",
    "/skills/curriculum",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic skill course routes
  const skillRoutes = skills.map((skill) => ({
    url: `${baseUrl}/skills/${skill.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Dynamic blog post routes (fetched from API)
  let blogRoutes = [];
  try {
    const res = await fetch(`${API_BASE_URL}/api/blogs`, {
      headers: { "ngrok-skip-browser-warning": "true" },
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const json = await res.json();
      if (json?.success && Array.isArray(json.data)) {
        blogRoutes = json.data.map((blog) => ({
          url: `${baseUrl}/blog/${blog.slug || blog._id}`,
          lastModified: blog.updatedAt || blog.createdAt || new Date().toISOString(),
          changeFrequency: "monthly",
          priority: 0.7,
        }));
      }
    }
  } catch (err) {
    console.warn("[Sitemap] API fetch error:", err?.message);
  }

  // Dynamic case study routes (fetched from API or static fallback)
  let caseStudyRoutes = [];
  try {
    const res = await fetch(`${API_BASE_URL}/api/case-studies`, {
      headers: { "ngrok-skip-browser-warning": "true" },
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const json = await res.json();
      if (json?.success && Array.isArray(json.data) && json.data.length > 0) {
        caseStudyRoutes = json.data.map((cs) => ({
          url: `${baseUrl}/case-studies/${cs.slug || cs._id}`,
          lastModified: cs.updatedAt || cs.createdAt || new Date().toISOString(),
          changeFrequency: "monthly",
          priority: 0.8,
        }));
      }
    }
  } catch (err) {
    console.warn("[Sitemap] Case studies API fetch error:", err?.message);
  }

  if (caseStudyRoutes.length === 0) {
    caseStudyRoutes = allPosts.map((cs) => ({
      url: `${baseUrl}/case-studies/${cs.slug || cs.id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    }));
  }

  return [...staticRoutes, ...skillRoutes, ...blogRoutes, ...caseStudyRoutes];
}
