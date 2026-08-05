import HeroSection from "@/components/blog/HeroSection";
import BlogPostsSection from "@/components/blog/BlogPostsSection";
import CTASection from "@/components/CTASection";
import { API_BASE_URL } from "@/config/api";

const API_BASE = API_BASE_URL;

async function fetchBlogs() {
  try {
    const res = await fetch(`${API_BASE}/api/blogs`, {
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
    console.error("[BlogPage] Error fetching blogs:", err?.message);
  }
  return [];
}

export default async function Blog() {
  const blogs = await fetchBlogs();

  return (
    <div className="flex flex-col items-center w-full bg-[#F5F5F5]">
      <HeroSection />
      <BlogPostsSection initialBlogs={blogs} />
      <CTASection />
    </div>
  );
}