const fs = require('fs');
const path = require('path');

const skillsMap = {
    "account-manager": "Account Manager",
    "brand-manager": "Brand Manager",
    "business-development-executive-bde": "Business Development Executive (BDE)",
    "cloud-computing": "Cloud Computing",
    "cyber-security": "Cyber Security",
    "data-science-analytics": "Data Science & Analytics",
    "digital-marketing-manager": "Digital Marketing Manager",
    "digital-marketing": "Digital Marketing",
    "e-commerce-shopify-woocommerce": "E-Commerce (Shopify/WooCommerce)",
    "ethical-hacking": "Ethical Hacking",
    "full-stack-development": "Full Stack Development",
    "gaming-development": "Gaming Development",
    "human-resources-hr": "Human Resources (HR)",
    "java-development": "Java Development",
    "marketing-manager": "Marketing Manager",
    "mern-stack-development": "MERN Stack Development",
    "mobile-app-development": "Mobile App Development",
    "net-development": ".NET Development",
    "performance-marketing": "Performance Marketing",
    "purchase-manager": "Purchase Manager",
    "python-for-ai-ml": "Python for AI/ML",
    "qa-testing": "QA Testing",
    "ror-odoo-golang": "ROR & Odoo & Golang",
    "sales-executive": "Sales Executive",
    "social-media-marketing": "Social Media Marketing",
    "ui-ux-graphic-design": "UI/UX & Graphic Design",
    "web-development": "Web Development"
};

const dataDir = path.join(__dirname, 'skills-data');

Object.entries(skillsMap).forEach(([slug, title]) => {
    const filePath = path.join(dataDir, `${slug}.js`);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Check if metadata is already exported
    if (content.includes('export const metadata =')) {
        console.log(`Metadata already exists in: ${slug}.js`);
        return;
    }

    const metadataBlock = `
/**
 * 13. Metadata Info
 */
export const metadata = {
    title: "${title} | Alphabit Skill",
    description: "Learn ${title} at Alphabit Skill — expert-led training, real-world projects, and placement support."
};
`;

    // Append to file
    fs.appendFileSync(filePath, metadataBlock, 'utf8');
    console.log(`Added metadata to: ${slug}.js`);
});
