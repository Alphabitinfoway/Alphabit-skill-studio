// Simple slug: lowercase, replace any non-alphanumeric run with a single hyphen
export function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const skills = [
  // IT Skills
  { slug: toSlug("Full Stack Development"), title: "Full Stack Development", category: "IT Skills" },
  { slug: toSlug("Web Development"), title: "Web Development", category: "IT Skills" },
  { slug: toSlug("Mobile App Development"), title: "Mobile App Development", category: "IT Skills" },
  { slug: toSlug("UI/UX & Graphic Design"), title: "UI/UX & Graphic Design", category: "IT Skills" },
  { slug: toSlug("Digital Designing"), title: "Digital Designing", category: "IT Skills" },
  { slug: toSlug("Database Management"), title: "Database Management", category: "IT Skills" },
  { slug: toSlug("E-Commerce (Shopify/WooCommerce)"), title: "E-Commerce (Shopify/WooCommerce)", category: "IT Skills" },
  { slug: toSlug("QA Testing"), title: "QA Testing", category: "IT Skills" },
  { slug: toSlug("Cyber Security"), title: "Cyber Security", category: "IT Skills" },
  { slug: toSlug("Ethical Hacking"), title: "Ethical Hacking", category: "IT Skills" },
  { slug: toSlug("Cloud Computing"), title: "Cloud Computing", category: "IT Skills" },
  { slug: toSlug("ROR & Odoo & Golang"), title: "ROR & Odoo & Golang", category: "IT Skills" },

  // Soft Skills
  { slug: toSlug("Communication Skills"), title: "Communication Skills", category: "Soft Skills" },
  { slug: toSlug("Resume & Linkedin"), title: "Resume & Linkedin", category: "Soft Skills" },
  { slug: toSlug("Leadership Development"), title: "Leadership Development", category: "Soft Skills" },
  { slug: toSlug("Video Editing & Content Creation"), title: "Video Editing & Content Creation", category: "Soft Skills" },
  { slug: toSlug("E-Commerce Business Skills"), title: "E-Commerce Business Skills", category: "Soft Skills" },
  { slug: toSlug("Personality Development"), title: "Personality Development", category: "Soft Skills" },

  // AI Courses
  { slug: toSlug("Python for AI/ML"), title: "Python for AI/ML", category: "AI Courses" },
  { slug: toSlug("Data Science & Analytics"), title: "Data Science & Analytics", category: "AI Courses" },
  { slug: toSlug("ChatGPT & Prompt Engineering"), title: "ChatGPT & Prompt Engineering", category: "AI Courses" },
  { slug: toSlug("AI Tools Training"), title: "AI Tools Training", category: "AI Courses" },
  { slug: toSlug("AI Automation"), title: "AI Automation", category: "AI Courses" },
  { slug: toSlug("Generative AI"), title: "Generative AI", category: "AI Courses" },
];

export function getSkillBySlug(slug) {
  return skills.find((s) => s.slug === slug) ?? null;
}

export function getAllSlugs() {
  return skills.map((s) => ({ slug: s.slug }));
}
