// Simple slug: lowercase, replace any non-alphanumeric run with a single hyphen
export function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const skills = [
  // Coding Programs
  { slug: toSlug("Full Stack Development"), title: "Full Stack Development", category: "Coding Programs" },
  { slug: toSlug("Web Development"), title: "Web Development", category: "Coding Programs" },
  { slug: toSlug("Python for AI/ML"), title: "Python for AI/ML", category: "Coding Programs" },
  { slug: toSlug("Java Development"), title: "Java Development", category: "Coding Programs" },
  { slug: toSlug("Data Science & Analytics"), title: "Data Science & Analytics", category: "Coding Programs" },
  { slug: toSlug("MERN Stack Development"), title: "MERN Stack Development", category: "Coding Programs" },
  { slug: toSlug(".NET Development"), title: ".NET Development", category: "Coding Programs" },
  { slug: toSlug("Cyber Security"), title: "Cyber Security", category: "Coding Programs" },
  { slug: toSlug("Ethical Hacking"), title: "Ethical Hacking", category: "Coding Programs" },
  { slug: toSlug("QA Testing"), title: "QA Testing", category: "Coding Programs" },
  { slug: toSlug("Gaming Development"), title: "Gaming Development", category: "Coding Programs" },
  { slug: toSlug("Cloud Computing"), title: "Cloud Computing", category: "Coding Programs" },
  { slug: toSlug("Mobile App Development"), title: "Mobile App Development", category: "Coding Programs" },

  // Non-Coding Programs
  { slug: toSlug("UI/UX & Graphic Design"), title: "UI/UX & Graphic Design", category: "Non-Coding Programs" },
  { slug: toSlug("ROR & Odoo & Golang"), title: "ROR & Odoo & Golang", category: "Non-Coding Programs" },
  { slug: toSlug("E-Commerce (Shopify/WooCommerce)"), title: "E-Commerce (Shopify/WooCommerce)", category: "Non-Coding Programs" },
  { slug: toSlug("Digital Marketing"), title: "Digital Marketing", category: "Non-Coding Programs" },
  { slug: toSlug("Performance Marketing"), title: "Performance Marketing", category: "Non-Coding Programs" },
  { slug: toSlug("Social Media Marketing"), title: "Social Media Marketing", category: "Non-Coding Programs" },

  // Non-Tech Field
  { slug: toSlug("Human Resources (HR)"), title: "Human Resources (HR)", category: "Non-Tech Field" },
  { slug: toSlug("Business Development Executive (BDE)"), title: "Business Development Executive (BDE)", category: "Non-Tech Field" },
  { slug: toSlug("Account Manager"), title: "Account Manager", category: "Non-Tech Field" },
  { slug: toSlug("Sales Executive"), title: "Sales Executive", category: "Non-Tech Field" },
  { slug: toSlug("Marketing Manager"), title: "Marketing Manager", category: "Non-Tech Field" },
  { slug: toSlug("Brand Manager"), title: "Brand Manager", category: "Non-Tech Field" },
  { slug: toSlug("Purchase Manager"), title: "Purchase Manager", category: "Non-Tech Field" },
  { slug: toSlug("Digital Marketing Manager"), title: "Digital Marketing Manager", category: "Non-Tech Field" },
];

export function getSkillBySlug(slug) {
  return skills.find((s) => s.slug === slug) ?? null;
}

export function getAllSlugs() {
  return skills.map((s) => ({ slug: s.slug }));
}
