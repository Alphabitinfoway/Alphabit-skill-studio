// ==============================================================================
// Digital Marketing Manager - Master Component Data File
// Edit this file to easily update copy, content, features, stats & curriculum!
// ==============================================================================

/**
 * 1. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: "Digital Marketing",
    titleSuffix: "Manager",
    highlights: [
        "NSDC-Recognised Certification",
        "300+ Active Hiring Partners",
        "Rajkot, Gujarat",
    ],
    primaryCtaText: "Book Free Demo Class",
    secondaryCtaText: "Call Us",
    phoneNumber: "+919409207327",
    heroImage: "/subtract.webp",
};

/**
 * 2. Project Stats Section Data
 */
export const projectStatsSectionData = {
    titleItalic: "Real-World Projects",
    titleAmpersand: "&",
    titleBold: "Industry Work",
    purpleImage: "/purplesubtract.webp",
    stats: [
        { label: "200+ Students Trained" },
        { label: "10 Years Industry Experience" },
        { label: "300+ Hiring Partners" },
        { label: "100% Placement Assistance" },
    ],
    durationVal: "4-6 months",
    durationLabel: "Course Duration",
    hoursVal: "50+ hrs",
    hoursLabel: "Live project hours",
};

/**
 * 3. Course Features Section Data
 */
export const courseFeaturesData = {
    titleNormal: "About",
    titleItalic: "Digital Marketing",
    titleSuffix: "Course",
    description:
        "Every business today — from a local Rajkot shop to a national e-commerce brand — needs someone who can get found online and turn that visibility into customers. Most digital marketing courses teach you to read a dashboard. At Alphabit Skill, you run real campaigns, on real budgets, for real client accounts, so you understand not just what the numbers mean but what to do next. That includes ranking for traditional Google search and showing up in AI answers on ChatGPT, Perplexity, and Google AI Overviews — the search behaviour that's reshaping how people find businesses right now.",
    items: [
        "9 Modules — fundamentals to AI search visibility",
        "5+ live campaigns on real ad accounts & websites",
        "Certified in Google Ads, Meta Ads & Google Analytics",
        "Small batch sizes for personal attention",
        "Weekly performance reviews by working marketers",
        "Resume, LinkedIn & mock interview prep",
        "Government-recognised certification",
        "No Cost EMI — flexible fee structure",
        "Weekend, weekday & online batch options",
    ],
};

/**
 * 4. Track Selector Data
 */
export const trackSelectorData = {
    title: "Choose your track",
    description:
        "Digital marketing splits into two very different day-to-day jobs. Choose the track that matches the kind of work you actually want to do.",
    tracks: [
        {
            title: "Performance Marketing",
            description:
                "Google Ads, Meta Ads, and analytics — the paid, data-driven side of digital marketing that runs campaigns, tracks conversions, and delivers measurable ROI for e-commerce and lead-generation businesses.",
            bestFor: "E-commerce Brands · Performance Marketing Agencies · Lead-Gen Businesses",
            idealIf:
                "Run Google & Meta ad campaigns · Work at a performance marketing agency · Manage ad budgets for real businesses",
        },
        {
            title: "SEO & Content Marketing",
            description:
                "Technical SEO, content strategy, and AI search visibility (GEO/AEO) — the organic side of digital marketing that builds long-term traffic and gets brands cited by both Google and AI search tools.",
            bestFor: "SEO Agencies · IT Companies · Content-Led Businesses",
            idealIf:
                "Rank websites on Google · Get brands cited in ChatGPT & AI Overviews · Build a long-term SEO or content marketing career",
        },
    ],
};

/**
 * 5. Curriculum Section Data
 */
const performanceModules = [
    {
        num: "01",
        title: "Digital Marketing Fundamentals",
        image: "/skill/ITSkills/DigitalMarketing/module1.webp",
        description:
            "Before you touch an ad account, you need to understand how a customer actually moves from seeing a brand to buying from it. Cover the marketing funnel, buyer personas, campaign objectives, and how paid and organic channels work together — the foundation every performance marketer needs before their first campaign brief.",
        tags: ["Marketing Funnel", "Buyer Personas", "Campaign Objectives", "Channel Strategy"],
        techstack: {
            "ad Platforms": "Google Ads · Meta Ads Manager · LinkedIn Ads",
            "analytics": "Google Analytics 4 · Google Tag Manager · Meta Pixel",
            "tools": "Canva · Google Sheets · Looker Studio",
        },
    },
    {
        num: "02",
        title: "Google Ads & Search Engine Marketing",
        image: "/skill/ITSkills/DigitalMarketing/module2.webp",
        description:
            "Google Ads is where most performance marketing budgets in India get spent. Learn search campaigns, keyword match types, Quality Score, ad extensions, and bidding strategies that actually control cost-per-click instead of burning budget.",
        tags: ["Search Campaigns", "Keyword Match Types", "Quality Score", "Bidding Strategies"],
        techstack: {
            "ad Platforms": "Google Ads · Meta Ads Manager · LinkedIn Ads",
            "analytics": "Google Analytics 4 · Google Tag Manager · Meta Pixel",
            "tools": "Canva · Google Sheets · Looker Studio",
        },
    },
    {
        num: "03",
        title: "Meta Ads: Facebook & Instagram Advertising",
        image: "/skill/ITSkills/DigitalMarketing/module3.webp",
        description:
            "Meta Ads Manager runs the ad spend for most D2C and local businesses across Gujarat. Learn campaign structure, audience targeting, creative testing, and how to diagnose a campaign that's spending but not converting — a real skill, not a theory exercise.",
        tags: ["Campaign Structure", "Audience Targeting", "Creative Testing", "Ad Delivery Diagnosis"],
        techstack: {
            "ad Platforms": "Google Ads · Meta Ads Manager · LinkedIn Ads",
            "analytics": "Google Analytics 4 · Google Tag Manager · Meta Pixel",
            "tools": "Canva · Google Sheets · Looker Studio",
        },
    },
    {
        num: "04",
        title: "Google Analytics & Data Tracking",
        image: "/skill/ITSkills/DigitalMarketing/module4.webp",
        description:
            "A campaign you can't measure is a campaign you can't improve. Learn Google Analytics 4, Google Tag Manager, conversion tracking, and how to read a dashboard well enough to tell a client what to change next.",
        tags: ["GA4", "Google Tag Manager", "Conversion Tracking", "Attribution Basics"],
        techstack: {
            "ad Platforms": "Google Ads · Meta Ads Manager · LinkedIn Ads",
            "analytics": "Google Analytics 4 · Google Tag Manager · Meta Pixel",
            "tools": "Canva · Google Sheets · Looker Studio",
        },
    },
    {
        num: "05",
        title: "Conversion Rate Optimisation & Landing Pages",
        image: "/skill/ITSkills/DigitalMarketing/module5.webp",
        description:
            "Traffic that doesn't convert is wasted ad spend. Learn landing page structure, A/B testing, heatmaps, and CRO principles that turn clicks into leads and sales — the skill that separates a media buyer from a growth marketer.",
        tags: ["Landing Page Structure", "A/B Testing", "Heatmaps", "CRO Fundamentals"],
        techstack: {
            "ad Platforms": "Google Ads · Meta Ads Manager · LinkedIn Ads",
            "analytics": "Google Analytics 4 · Google Tag Manager · Meta Pixel",
            "tools": "Canva · Google Sheets · Looker Studio",
        },
    },
    {
        num: "06",
        title: "E-commerce & Retargeting Campaigns",
        image: "/skill/ITSkills/DigitalMarketing/module6.webp",
        description:
            "Learn Meta and Google Shopping campaigns, dynamic product ads, and retargeting funnels built specifically for e-commerce brands — one of the fastest-growing hiring segments for performance marketers in India right now.",
        tags: ["Shopping Campaigns", "Dynamic Product Ads", "Retargeting Funnels"],
        techstack: {
            "ad Platforms": "Google Ads · Meta Ads Manager · LinkedIn Ads",
            "analytics": "Google Analytics 4 · Google Tag Manager · Meta Pixel",
            "tools": "Canva · Google Sheets · Looker Studio",
        },
    },
    {
        num: "07",
        title: "Marketing Automation & Email Marketing",
        image: "/skill/ITSkills/DigitalMarketing/module7.webp",
        description:
            "Learn email sequences, lead nurturing, marketing automation tools, and WhatsApp marketing basics — the follow-up systems that turn a one-time click into a repeat customer.",
        tags: ["Email Sequences", "Lead Nurturing", "Marketing Automation", "WhatsApp Marketing"],
        techstack: {
            "ad Platforms": "Google Ads · Meta Ads Manager · LinkedIn Ads",
            "analytics": "Google Analytics 4 · Google Tag Manager · Meta Pixel",
            "tools": "Canva · Google Sheets · Looker Studio",
        },
    },
    {
        num: "08",
        title: "Capstone Campaigns & Portfolio",
        image: "/skill/ITSkills/DigitalMarketing/module8.webp",
        description:
            "Plan, launch, and optimise 2+ live ad campaigns on real budgets — one Google Ads campaign and one Meta Ads campaign — with a full performance report you can show in interviews.",
        tags: ["Live Ad Campaigns", "Performance Reporting", "Campaign Case Studies"],
        techstack: {
            "ad Platforms": "Google Ads · Meta Ads Manager · LinkedIn Ads",
            "analytics": "Google Analytics 4 · Google Tag Manager · Meta Pixel",
            "tools": "Canva · Google Sheets · Looker Studio",
        },
    },
    {
        num: "09",
        title: "Placement Prep",
        image: "/skill/ITSkills/DigitalMarketing/module9.webp",
        description:
            "Resume building, LinkedIn optimisation, and mock interviews built around the exact questions performance marketing agencies ask — campaign audits, budget allocation, and troubleshooting scenarios.",
        tags: ["Resume Building", "LinkedIn Optimisation", "Mock Interviews"],
        techstack: {
            "ad Platforms": "Google Ads · Meta Ads Manager · LinkedIn Ads",
            "analytics": "Google Analytics 4 · Google Tag Manager · Meta Pixel",
            "tools": "Canva · Google Sheets · Looker Studio",
        },
    },
];

const seoModules = [
    {
        num: "01",
        title: "Digital Marketing Fundamentals",
        image: "/skill/ITSkills/DigitalMarketing/module1.webp",
        description:
            "The same foundation applies to every marketing discipline. Cover the marketing funnel, buyer personas, and how search engines and AI tools actually decide what to show a user — the mental model every SEO executive needs before touching a website.",
        tags: ["Marketing Funnel", "Buyer Personas", "Search Intent", "Channel Strategy"],
        techstack: {
            "sEO Tools": "Google Search Console · Ahrefs · SEMrush · Screaming Frog",
            "content & CMS": "WordPress · Schema Markup · Google Analytics 4",
            "aI Visibility": "ChatGPT · Perplexity · Google AI Overviews",
        },
    },
    {
        num: "02",
        title: "On-Page & Technical SEO",
        image: "/skill/ITSkills/DigitalMarketing/module2.webp",
        description:
            "Learn meta titles, header structure, internal linking, site speed, crawlability, and schema markup — the technical foundation every page needs before it can rank, whether for Google or an AI search tool.",
        tags: ["Meta Tags", "Internal Linking", "Site Speed", "Schema Markup"],
        techstack: {
            "sEO Tools": "Google Search Console · Ahrefs · SEMrush · Screaming Frog",
            "content & CMS": "WordPress · Schema Markup · Google Analytics 4",
            "aI Visibility": "ChatGPT · Perplexity · Google AI Overviews",
        },
    },
    {
        num: "03",
        title: "Off-Page SEO & Link Building",
        image: "/skill/ITSkills/DigitalMarketing/module3.webp",
        description:
            "Rankings aren't decided by your website alone. Learn backlink building, guest posting, digital PR, and domain authority — the off-page signals that tell Google your site is worth trusting.",
        tags: ["Backlink Building", "Guest Posting", "Digital PR", "Domain Authority"],
        techstack: {
            "sEO Tools": "Google Search Console · Ahrefs · SEMrush · Screaming Frog",
            "content & CMS": "WordPress · Schema Markup · Google Analytics 4",
            "aI Visibility": "ChatGPT · Perplexity · Google AI Overviews",
        },
    },
    {
        num: "04",
        title: "Keyword Research & Content Strategy",
        image: "/skill/ITSkills/DigitalMarketing/module4.webp",
        description:
            "Learn keyword research, search intent mapping, content clusters, and how to plan content that actually gets found — using tools like Ahrefs, SEMrush, and Google Search Console the way agencies use them daily.",
        tags: ["Keyword Research", "Search Intent Mapping", "Content Clusters", "Google Search Console"],
        techstack: {
            "sEO Tools": "Google Search Console · Ahrefs · SEMrush · Screaming Frog",
            "content & CMS": "WordPress · Schema Markup · Google Analytics 4",
            "aI Visibility": "ChatGPT · Perplexity · Google AI Overviews",
        },
    },
    {
        num: "05",
        title: "AI Search & GEO/AEO Optimisation",
        image: "/skill/ITSkills/DigitalMarketing/module5.webp",
        description:
            "Search is no longer just Google. Learn Generative Engine Optimisation (GEO) and Answer Engine Optimization (AEO) — structuring content with clear answers, FAQ schema, and citation-worthy formatting so brands get cited by ChatGPT, Perplexity, and AI Overviews, not just ranked in blue links.",
        tags: ["GEO", "AEO", "FAQ Schema", "AI Citation Structuring"],
        techstack: {
            "sEO Tools": "Google Search Console · Ahrefs · SEMrush · Screaming Frog",
            "content & CMS": "WordPress · Schema Markup · Google Analytics 4",
            "aI Visibility": "ChatGPT · Perplexity · Google AI Overviews",
        },
    },
    {
        num: "06",
        title: "Social Media Marketing & Content Creation",
        image: "/skill/ITSkills/DigitalMarketing/module6.webp",
        description:
            "Learn organic social media strategy, content calendars, and platform-specific content for Instagram, LinkedIn, and Google Business Profile — the channels that support SEO and build brand trust alongside it.",
        tags: ["Social Media Strategy", "Content Calendars", "Google Business Profile"],
        techstack: {
            "sEO Tools": "Google Search Console · Ahrefs · SEMrush · Screaming Frog",
            "content & CMS": "WordPress · Schema Markup · Google Analytics 4",
            "aI Visibility": "ChatGPT · Perplexity · Google AI Overviews",
        },
    },
    {
        num: "07",
        title: "Capstone Projects & Portfolio",
        image: "/skill/ITSkills/DigitalMarketing/module7.webp",
        description:
            "Run a full SEO audit and content strategy sprint for a real or concept website — technical fixes, keyword mapping, and published content — with before-and-after ranking data you can show in interviews.",
        tags: ["SEO Audit", "Content Strategy", "Ranking Reports", "Case Study Writing"],
        techstack: {
            "sEO Tools": "Google Search Console · Ahrefs · SEMrush · Screaming Frog",
            "content & CMS": "WordPress · Schema Markup · Google Analytics 4",
            "aI Visibility": "ChatGPT · Perplexity · Google AI Overviews",
        },
    },
    {
        num: "08",
        title: "Placement Prep",
        image: "/skill/ITSkills/DigitalMarketing/module8.webp",
        description:
            "Resume building, LinkedIn optimisation, and mock interviews built around real SEO and content marketing interview questions — audits, keyword strategy, and AI visibility scenarios.",
        tags: ["Resume Building", "LinkedIn Optimisation", "Mock Interviews"],
        techstack: {
            "sEO Tools": "Google Search Console · Ahrefs · SEMrush · Screaming Frog",
            "content & CMS": "WordPress · Schema Markup · Google Analytics 4",
            "aI Visibility": "ChatGPT · Perplexity · Google AI Overviews",
        },
    },
];

export const curriculumTracks = [
    {
        title: "Performance Marketing",
        path: "performance",
        modules: performanceModules,
    },
    {
        title: "SEO & Content Marketing",
        path: "seo",
        modules: seoModules,
    },
];

/**
 * 6. Comparison Section Data
 */
export const comparisonSectionData = {
    titleNormal: "Why Students Choose Our ",
    titleItalic: "Digital Marketing Training",
    categories: [
        {
            id: "mentors",
            label: "Mentors",
            other: "Academics teaching from slides",
            usPrefix: "Working marketers managing ",
            usHighlight: "real ad accounts",
            usSuffix: " & client SEO",
        },
        {
            id: "style",
            label: "Learning Style",
            other: "Recorded videos, dummy dashboards",
            usPrefix: "100% hands-on, ",
            usHighlight: "live campaigns",
            usSuffix: " on real budgets & websites",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            other: "Certificate recruiters ignore",
            usPrefix: "Real campaign reports & ",
            usHighlight: "SEO case studies",
            usSuffix: " with ranking data",
        },
        {
            id: "aisearch",
            label: "AI Search Training",
            other: "Not covered",
            usPrefix: "Dedicated ",
            usHighlight: "GEO/AEO module",
            usSuffix: " for AI search visibility",
        },
        {
            id: "placement",
            label: "Placement",
            other: "Resume forwarding only",
            usPrefix: "300+ partners, ",
            usHighlight: "direct referrals",
            usSuffix: ", mock interviews",
        },
        {
            id: "certification",
            label: "Certification",
            other: "Private, unrecognised",
            usPrefix: "Government-recognised ",
            usHighlight: "national certification",
            usSuffix: "",
        },
        {
            id: "fees",
            label: "Fees",
            other: "Hidden charges, no EMI",
            usPrefix: "Transparent pricing, ",
            usHighlight: "No Cost EMI",
            usSuffix: ", zero hidden fees",
        },
        {
            id: "support",
            label: "Support after course",
            other: "None",
            usPrefix: "Lifetime ",
            usHighlight: "doubt support",
            usSuffix: " for alumni",
        },
    ],
};

export const comparisonCategories = comparisonSectionData.categories.map((cat) => ({
    id: cat.id,
    label: cat.label,
    otherText: cat.other,
    usHighlightText: `${cat.usPrefix}${cat.usHighlight}${cat.usSuffix}`,
}));

/**
 * 7. Earnings Section Data
 */
export const earningsSectionData = {
    titlePrefix: "What Digital Marketers",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    jobs: [
        {
            title: "Junior Digital Marketing Executive",
            location: "Rajkot",
            salary: "₹1.8 – ₹3 LPA",
            badge: "Entry Level",
            image: "/skill/ITSkills/digitalmarketing.webp",
        },
        {
            title: "SEO Executive",
            location: "Rajkot/Ahmedabad",
            salary: "₹2 – ₹3.5 LPA",
            badge: "Entry Level",
            image: "/skill/ITSkills/digitalmarketing.webp",
        },
        {
            title: "Performance Marketer (Google/Meta Ads)",
            location: "Ahmedabad/Surat",
            salary: "₹2.5 – ₹4.5 LPA",
            badge: "Early Career",
            image: "/skill/ITSkills/digitalmarketing.webp",
        },
        {
            title: "Digital Marketing Manager",
            location: "Gujarat/Remote",
            salary: "₹4 – ₹7 LPA",
            badge: "High Demand",
            image: "/skill/ITSkills/digitalmarketing.webp",
        },
        {
            title: "SEO Specialist (2-3 yrs)",
            location: "PAN India/Remote",
            salary: "₹5 – ₹9 LPA",
            badge: "Experienced",
            image: "/skill/ITSkills/digitalmarketing.webp",
        },
        {
            title: "Freelance Digital Marketer",
            location: "India/International",
            salary: "₹20,000 – ₹60,000/mo",
            badge: "Freelance Roles",
            image: "/skill/ITSkills/digitalmarketing.webp",
        },
    ],
};

export const earningsJobsData = earningsSectionData.jobs;

/**
 * 8. Career Opportunities Roles
 */
export const careerOpportunitiesData = {
    titleNormal: "Explore",
    titleItalic: "Career Opportunities",
    mernTitle: "Performance Marketing Track",
    javaTitle: "SEO & Content Marketing Track",
    mernRoles: [
        "Performance Marketer",
        "PPC Specialist",
        "Meta Ads Executive",
        "Google Ads Specialist",
        "Growth Marketing Executive",
        "Freelance Performance Marketer",
    ],
    javaRoles: [
        "SEO Executive",
        "Content Marketing Specialist",
        "SEO Analyst",
        "AI Search / GEO Specialist",
        "Freelance SEO Consultant",
    ],
};

/**
 * 9. Industries Hiring Data
 */
export const industriesSectionData = {
    titleNormal: "Industries that",
    titleItalic: "Hire",
    description:
        "The skills you gain are relevant across multiple industries actively hiring digital marketers in Gujarat.",
    industries: [
        {
            title: "E-commerce",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp",
        },
        {
            title: "IT Services",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp",
        },
        {
            title: "Real Estate",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/goverment-it.webp",
        },
        {
            title: "Healthcare",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/healthcaretech.webp",
        },
        {
            title: "EdTech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/ed-tech.webp",
        },
        {
            title: "Hospitality & Travel",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/manufacturingSaaS.webp",
        },
        {
            title: "D2C Brands",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp",
        },
        {
            title: "Local & Franchise Businesses",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/fintech.webp",
        },
    ],
};

export const industriesData = industriesSectionData.industries;

/**
 * 10. Meeting Glance Section Data
 */
export const meetingGlanceSectionData = {
    titlePrefix: "A Glance",
    titleSuffix: "at yesterday's Meeting",
    meetings: [
        { heading: "Heading", subheading: "Subheading" },
        { heading: "Heading", subheading: "Subheading" },
        { heading: "Heading", subheading: "Subheading" },
    ],
};

export const meetingGlanceData = meetingGlanceSectionData.meetings;

/**
 * 11. Meeting Video Data
 */
export const meetingVideoData = {
    titlePrefix: "A Glance",
    titleSuffix: "at yesterday's Meeting",
    videoUrl: "https://www.youtube.com/embed/LUgpPmj6nR8?si=I7GhUwTuKYRCdj6q", // YouTube embed URL (must use /embed/ format, not /watch?v=)
};
/**
 * 12. FAQ Data
 */
export const faqSectionData = {
    titleNormal: "Corporate Placement & Curriculum",
    titleItalic: "FAQ",
    faqs: [
        {
            id: 1,
            question: "What is the difference between the performance marketing and SEO & content marketing tracks?",
            answer:
                "Performance marketing covers Google Ads, Meta Ads, analytics, and conversion optimisation — ideal for e-commerce brands and paid marketing agencies. SEO & content marketing covers technical SEO, content strategy, and AI search visibility (GEO/AEO) — ideal for SEO agencies, IT companies, and long-term organic growth roles. Both are available at Alphabit Skill in Rajkot with the same live, hands-on training approach.",
        },
        {
            id: 2,
            question: "Do I need prior marketing experience to join?",
            answer:
                "No. Both tracks start from digital marketing fundamentals. Many placed students came from commerce, arts, and non-marketing backgrounds with zero prior experience.",
        },
        {
            id: 3,
            question: "Will I actually run live ad campaigns, or just watch demos?",
            answer:
                "You'll plan, launch, and optimise real campaigns on real ad budgets as part of the capstone module — not just observe a mentor's screen. You graduate with actual performance reports, not simulated data.",
        },
        {
            id: 4,
            question: "What is GEO/AEO, and why does this course teach it?",
            answer:
                "GEO (Generative Engine Optimisation) and AEO (Answer Engine Optimization) are the practices behind getting a website or brand cited by AI tools like ChatGPT, Perplexity, and Google AI Overviews — not just ranked in traditional search. This is one of the fastest-growing skill gaps in digital marketing hiring right now, and it's a dedicated module in our SEO & content marketing track.",
        },
        {
            id: 5,
            question: "How long is the digital marketing course?",
            answer:
                "4 to 6 months depending on your batch schedule, with weekday, weekend, and online options available.",
        },
        {
            id: 6,
            question: "Does Alphabit Skill provide placement assistance after the course?",
            answer:
                "Yes. 100% placement assistance including resume building, LinkedIn optimisation, mock interviews, and direct referrals to 300+ hiring partners across Rajkot, Ahmedabad, Surat, Vadodara, and across India.",
        },
        {
            id: 7,
            question: "Why choose Alphabit Skill over YouTube or Udemy for digital marketing?",
            answer:
                "YouTube and Udemy give you tool tutorials on a demo dashboard. Alphabit Skill gives you live campaigns on real ad accounts and websites, weekly performance reviews from working marketers, and a direct path to placement through 300+ hiring partners — built for what agencies in the Rajkot and Gujarat job market are actually hiring for.",
        },
    ],
};

export const faqData = faqSectionData.faqs;

/**
 * 13. CTA Section Data
 */
export const ctaSectionData = {
    line1Normal: "Access the",
    line1Italic: "Curriculum",
    line1Suffix: " — Apply Today & ",
    line2Normal: "Master Digital Marketing",
    line2Italic: "Frameworks",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};

export const testimonialsSectionData = {
    titleNormal: "Verified Career Transitions",
    titleParent: "— Hear Directly from",
    titleItalic: "Deployed Alumni",
    testimonials: [
        {
            id: 1,
            text: "I had zero marketing background when I joined. Within 4 months I was running live Google Ads campaigns on a real client account and got placed at a digital agency in Rajkot. Managing an actual ad budget during training made all the difference.",
            name: "Krisha Vaghela",
            title: "Performance Marketer, Rajkot",
            image: "/Home Page/1.webp",
        },
        {
            id: 2,
            text: "The SEO module went far beyond basic keyword stuffing — the GEO/AEO training on getting cited in AI search was something no other institute in Rajkot was even teaching. Got placed within 6 weeks.",
            name: "Yash Ramani",
            title: "SEO Executive, Ahmedabad",
            image: "/Home Page/2.webp",
        },
        {
            id: 3,
            text: "I chose performance marketing because I wanted to work with ad budgets, not just write blogs. The Meta Ads module was extremely detailed and practical. Placed at a performance marketing agency in Surat right after the course.",
            name: "Foram Trivedi",
            title: "Meta Ads Specialist, Surat",
            image: "/Home Page/3.webp",
        },
    ],
};

/**
 * 13. Metadata Info
 */
export const metadata = {
    title: "Digital Marketing | Alphabit Skill",
    description: "Learn Digital Marketing at Alphabit Skill — expert-led training, real-world projects, and placement support."
};
