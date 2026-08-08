import BlogDetailPage from "@/components/blog/BlogDetailPage";
import { API_BASE_URL } from "@/config/api";

const API_BASE = API_BASE_URL;

async function fetchBlogData(id) {
  try {
    const [blogRes, allBlogsRes] = await Promise.all([
      fetch(`${API_BASE}/api/blogs/${id}`, {
        headers: { "ngrok-skip-browser-warning": "true" },
        next: { revalidate: 60 },
      }),
      fetch(`${API_BASE}/api/blogs`, {
        headers: { "ngrok-skip-browser-warning": "true" },
        next: { revalidate: 60 },
      }),
    ]);

    const [blogJson, allBlogsJson] = await Promise.all([
      blogRes.ok ? blogRes.json() : Promise.resolve(null),
      allBlogsRes.ok ? allBlogsRes.json() : Promise.resolve(null),
    ]);

    const blog = blogJson?.success ? blogJson.data : null;
    const allBlogs =
      allBlogsJson?.success && Array.isArray(allBlogsJson.data)
        ? allBlogsJson.data
        : [];

    return { blog, allBlogs };
  } catch (err) {
    console.error("[BlogDetailPage] API fetch error:", err?.message);
    return { blog: null, allBlogs: [] };
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const { blog } = await fetchBlogData(id);

  if (blog) {
    const title = blog.metaTitle || blog.title || "Blog Details - Alphabit Skill";
    const description = blog.metaDescription || "Read the latest article on Alphabit Skill blog.";

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: blog.image && blog.image !== "no-photo.jpg" ? [blog.image] : [],
      },
    };
  }

  return {
    title: "Blog Details - Alphabit Skill",
    description: "Read the latest tech articles and guides from Alphabit Skill.",
  };
}

// ── BlogPosting JSON-LD Structured Data Schema ───────────────────────────
function getBlogPostingJsonLd(id, blog) {
  if (!blog) return null;
  const title = blog.metaTitle || blog.title || "Blog Details - Alphabit Skill";
  const description =
    blog.metaDescription ||
    blog.excerpt ||
    blog.description ||
    "Read the latest tech, coding, and design insights from Alphabit Skill.";
  const publishedDate = blog.createdAt || blog.date || "2024-01-01T00:00:00.000Z";
  const modifiedDate = blog.updatedAt || blog.createdAt || blog.date || "2024-01-01T00:00:00.000Z";
  const imageUrl =
    blog.image && blog.image !== "no-photo.jpg"
      ? blog.image
      : "https://alphabitskill.com/logo.webp";

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": [imageUrl],
    "datePublished": publishedDate,
    "dateModified": modifiedDate,
    "author": {
      "@type": "Person",
      "name": blog.author || "Alphabit Skill Editorial Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Alphabit Skill",
      "url": "https://alphabitskill.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://alphabitskill.com/logo.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://alphabitskill.com/blog/${id}`
    }
  };
}

export default async function BlogDetailRoute({ params }) {
  const { id } = await params;
  const { blog, allBlogs } = await fetchBlogData(id);
  const blogJsonLd = getBlogPostingJsonLd(id, blog);

  return (
    <>
      {blogJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
        />
      )}
      <BlogDetailPage
        initialBlog={blog}
        initialAllBlogs={allBlogs}
        slugOrId={id}
      />
    </>
  );
}
