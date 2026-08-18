// ==============================================================================
// Performance Marketing - Master Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

/**
 * 1. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: "Performance",
    titleSuffix: "Marketing",
    highlights: [
        "NSDC-Recognised Certification",
        "300+ Active Hiring Partners",
        "Rajkot & Ahmedabad, Gujarat"
    ],
    description: "<strong>Performance Marketing Course in Rajkot & Ahmedabad</strong>. Most performance marketing courses show you how to boost a post and call it a campaign. Real performance marketers manage live ad budgets, defend every rupee of spend with conversion data, and know exactly why a campaign hit its click targets but still lost money. This course trains you on real Google Ads and Meta Ads accounts — not sandbox dashboards — with mentors who manage client budgets professionally.",
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
        { label: "100% Placement Assistance" }
    ],
    durationVal: "4–6 months",
    durationLabel: "Course Duration",
    hoursVal: "50+ hrs",
    hoursLabel: "Live project hours"
};

/**
 * 3. Course Features Section Data
 */
export const courseFeaturesData = {
    titleNormal: "About Our",
    titleItalic: "Performance Marketing",
    titleSuffix: "Course",
    items: [
        "Comprehensive modules from campaign fundamentals to live, budget-managed ad accounts",
        "5+ live campaigns run on real Google Ads and Meta Ads accounts, not sandbox demos",
        "Certified in Google Ads, Meta Ads & Google Analytics",
        "Real campaign reports and ROI data for your portfolio",
        "Small batch sizes for personalized mentor attention",
        "Weekly performance reviews by working marketers managing real ad budgets",
        "Resume, LinkedIn, and mock interview prep",
        "Government-recognised (NSDC), industry-ready certification",
        "Flexible No-Cost EMI fee options"
    ],
};

/**
 * 4. Choose Your Track Data
 */
export const trackSelectorData = {
    title: "Choose Your Track",
    description: "Performance marketing splits into two different day-to-day jobs depending on which platform you specialize in. Choose the track that matches where you want to work — across Rajkot, Ahmedabad, and beyond.",
    tracks: [
        {
            title: "Search & Google Ads Track",
            description: "Build with search campaigns, keyword strategy, and Google's ad ecosystem — the skill set companies hire for when they need to capture people already searching for what they sell.",
            bestFor: "SEM Agencies · Lead-Gen Businesses · B2B & High-Intent Products",
            idealIf: "Run Google Ads campaigns · Work as a PPC/SEM Specialist · Manage search ad budgets for real businesses"
        },
        {
            title: "Meta & Paid Social Track",
            description: "Build with Meta Ads Manager, audience targeting, and creative testing — the skill set companies hire for when they need to reach people who aren't searching yet but will stop scrolling for the right ad.",
            bestFor: "E-commerce Brands · D2C & Lifestyle Businesses · Paid Social Agencies",
            idealIf: "Run Meta (Facebook/Instagram) ad campaigns · Work as a Paid Social Specialist · Manage e-commerce ad budgets and retargeting"
        }
    ]
};

/**
 * 5. Curriculum Modules (Search & Google Ads Track + Meta & Paid Social Track)
 */
export const searchGoogleAdsModules = [
    {
        num: "01",
        title: "Search & Performance Marketing Fundamentals",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module1.webp",
        imageAlt: "Search and performance marketing fundamentals and marketing funnel",
        description: "Before you touch an ad account, understand how people actually search and how ad auctions decide who shows up — the marketing funnel, search intent, and campaign objectives framed specifically around capturing existing demand.",
        tags: [
            "Marketing Funnel",
            "Search Intent",
            "Campaign Objectives & KPIs",
            "Ad Auction Basics"
        ],
        techstack: {
            tools: "Google Ads · Google Sheets"
        }
    },
    {
        num: "02",
        title: "Google Ads Campaign Structure & Search Campaigns",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module2.webp",
        imageAlt: "Google Ads campaign structure and search campaign organization",
        description: "Build and structure real search campaigns — ad groups, ad copy, and campaign settings the way a real account is organized, not a single-ad test.",
        tags: [
            "Campaign & Ad Group Structure",
            "Search Ad Copywriting",
            "Campaign Settings & Extensions",
            "Account Organization"
        ],
        techstack: {
            tools: "Google Ads"
        }
    },
    {
        num: "03",
        title: "Keyword Strategy, Bidding & Quality Score",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module3.webp",
        imageAlt: "Keyword strategy bidding and Quality Score optimization",
        description: "Learn the mechanics that decide whether a search budget gets wasted or converts — keyword match types, bidding strategies, and the Quality Score system that quietly controls your cost per click.",
        tags: [
            "Keyword Match Types",
            "Bidding Strategies",
            "Quality Score & Ad Rank",
            "Negative Keywords"
        ],
        techstack: {
            tools: "Google Ads · Google Keyword Planner"
        }
    },
    {
        num: "04",
        title: "Display, YouTube & Shopping Ads",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module4.webp",
        imageAlt: "Google Display YouTube and Shopping ad campaigns",
        description: "Go beyond search into Google's other ad formats — display remarketing, YouTube ads, and Shopping campaigns for e-commerce clients.",
        tags: [
            "Display & Remarketing Campaigns",
            "YouTube Ads Basics",
            "Shopping Campaign Setup",
            "Merchant Center Basics"
        ],
        techstack: {
            tools: "Google Ads · Google Merchant Center"
        }
    },
    {
        num: "05",
        title: "Google Analytics & Conversion Tracking for Search",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module5.webp",
        imageAlt: "Google Analytics 4 GA4 and Tag Manager conversion tracking",
        description: "Set up the tracking that makes every campaign decision trustworthy — GA4 events, conversion tracking, and attribution for search traffic specifically.",
        tags: [
            "GA4 Setup & Events",
            "Conversion Tracking",
            "Search-Specific Attribution",
            "Reporting Dashboards"
        ],
        techstack: {
            tools: "Google Analytics 4 · Google Tag Manager · Looker Studio"
        }
    },
    {
        num: "06",
        title: "Search Marketing Capstone, Internship & Portfolio",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module6.webp",
        imageAlt: "Search marketing capstone project and ROI reporting",
        description: "Apply everything into a live search campaign on a real ad account and budget, complete a guided internship, and leave with campaign reports and ROI data ready for interviews.",
        tags: [
            "Capstone Campaign Build",
            "Budget & ROI Reporting",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Google Ads · Looker Studio"
        }
    }
];

export const metaPaidSocialModules = [
    {
        num: "01",
        title: "Paid Social Fundamentals",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module1.webp",
        imageAlt: "Paid social fundamentals and audience psychology",
        description: "Before running a single ad, understand how paid social differs from search — you're interrupting a scroll, not capturing existing intent. Cover the social funnel, audience psychology, and campaign objectives built around that difference.",
        tags: [
            "Social Ad Funnel",
            "Audience Psychology",
            "Campaign Objectives & KPIs",
            "Creative-First Thinking"
        ],
        techstack: {
            tools: "Meta Ads Manager · Google Sheets"
        }
    },
    {
        num: "02",
        title: "Meta Ads Manager: Campaign Structure & Objectives",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module2.webp",
        imageAlt: "Meta Ads Manager campaign and ad set structure",
        description: "Build campaigns inside Meta Ads Manager the way real accounts are structured — campaign, ad set, and ad-level settings mapped to the right objective for the business goal.",
        tags: [
            "Campaign/Ad Set/Ad Structure",
            "Objective Selection",
            "Placement Options",
            "Budget Types"
        ],
        techstack: {
            tools: "Meta Ads Manager"
        }
    },
    {
        num: "03",
        title: "Audience Targeting, Lookalikes & Creative Testing",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module3.webp",
        imageAlt: "Audience targeting lookalikes and creative A/B testing",
        description: "Learn to find and reach the right audience, then test creative systematically instead of guessing which ad 'looks good.'",
        tags: [
            "Audience Targeting & Lookalikes",
            "Interest & Behavioural Targeting",
            "Creative A/B Testing",
            "Ad Fatigue Management"
        ],
        techstack: {
            tools: "Meta Ads Manager"
        }
    },
    {
        num: "04",
        title: "Retargeting, Catalog & E-commerce Ads",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module4.webp",
        imageAlt: "Retargeting campaigns and dynamic catalog ads",
        description: "Layer retargeting and dynamic product ads on top of cold traffic — the campaigns that recover abandoned carts and turn browsers into buyers.",
        tags: [
            "Retargeting Campaign Setup",
            "Dynamic Product/Catalog Ads",
            "E-commerce Funnel Structuring",
            "Customer Lifecycle Campaigns"
        ],
        techstack: {
            tools: "Meta Ads Manager · Meta Commerce Manager"
        }
    },
    {
        num: "05",
        title: "Meta Pixel, Conversions API & Tracking",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module5.webp",
        imageAlt: "Meta Pixel setup and Conversions API tracking",
        description: "Set up the tracking that makes campaign data trustworthy on Meta specifically — Pixel setup, Conversions API, and reading Ads Manager reporting correctly.",
        tags: [
            "Meta Pixel Setup",
            "Conversions API Basics",
            "Event Tracking",
            "Ads Manager Reporting"
        ],
        techstack: {
            tools: "Meta Pixel · Meta Events Manager"
        }
    },
    {
        num: "06",
        title: "Paid Social Capstone, Internship & Portfolio",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module6.webp",
        imageAlt: "Paid social capstone project and campaign ROI reporting",
        description: "Apply everything into live campaigns on a real Meta ad account and budget, complete a guided internship, and leave with campaign reports and ROI data ready for interviews.",
        tags: [
            "Capstone Campaign Build",
            "Budget & ROI Reporting",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Meta Ads Manager · Looker Studio"
        }
    }
];

export const curriculumTracks = [
    {
        title: "Search & Google Ads Track",
        path: "search-google-ads",
        modules: searchGoogleAdsModules,
    },
    {
        title: "Meta & Paid Social Track",
        path: "meta-paid-social",
        modules: metaPaidSocialModules,
    },
];

export const mernModules = searchGoogleAdsModules;
export const javaModules = metaPaidSocialModules;

/**
 * 6. Comparison Section Data
 */
export const comparisonSectionData = {
    titleNormal: "Why Students Choose Our ",
    titleItalic: "Training Studio",
    categories: [
        {
            id: "mentors",
            label: "Mentors",
            other: "Academics reading from slides",
            usPrefix: "Working marketers managing ",
            usHighlight: "real ad accounts",
            usSuffix: " & client budgets",
        },
        {
            id: "style",
            label: "Learning Style",
            other: "Recorded videos, dummy dashboards",
            usPrefix: "",
            usHighlight: "100% hands-on",
            usSuffix: ", live campaigns on real ad spend",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            other: "Certificate recruiters ignore",
            usPrefix: "",
            usHighlight: "Real campaign reports & ROI data",
            usSuffix: " on your portfolio",
        },
        {
            id: "placement",
            label: "Placement",
            other: "Job board links only",
            usPrefix: "",
            usHighlight: "Direct referrals",
            usSuffix: " to hiring partners",
        },
        {
            id: "certification",
            label: "Certification",
            other: "Certificate recruiters ignore",
            usPrefix: "Govt.-recognised, ",
            usHighlight: "industry-ready certification",
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
            label: "Support After Course",
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
    titlePrefix: "What Performance Marketers",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior Performance Marketing Executive",
            location: "Rajkot",
            salary: "₹1.8 – ₹3 LPA",
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
            title: "PPC Specialist",
            location: "Gujarat/Remote",
            salary: "₹3.5 – ₹6 LPA",
            badge: "Mid-Level",
            image: "/skill/ITSkills/digitalmarketing.webp",
        },
        {
            title: "Performance Marketing Manager",
            location: "PAN India/Remote",
            salary: "₹6 – ₹10 LPA",
            badge: "High Demand",
            image: "/skill/ITSkills/digitalmarketing.webp",
        },
        {
            title: "Freelance Performance Marketer",
            location: "India/International",
            salary: "₹20,000 – ₹60,000/mo",
            badge: "Freelance Roles",
            image: "/skill/ITSkills/digitalmarketing.webp",
        },
    ],
};

export const earningsJobsData = earningsSectionData.jobs;

/**
 * 8. Classroom Glance Data (Inside Our Classroom)
 */
export const meetingGlanceSectionData = {
    titlePrefix: "Inside ",
    titleSuffix: "a Performance Marketing Batch —Rajkot Studio, Live for Ahmedabad Students",
    meetings: [
        {
            heading: "Live Campaign Reviews",
            subheading: "Students walk through their real Google Ads and Meta Ads dashboards with mentors every week — actual spend, actual conversion data, not mock numbers.",
        },
        {
            heading: "Budget Defense Sessions",
            subheading: "Explain and justify campaign decisions the way you would to a client or manager — why this bid strategy, why this audience, why this budget split.",
        },
        {
            heading: "Small Batch, Real Attention",
            subheading: "If a campaign's conversion tracking looks off the night before a review, someone can actually sit with you and debug the Tag Manager setup.",
        },
    ],
};

export const meetingGlanceData = meetingGlanceSectionData.meetings;

export const meetingVideoData = {
    titlePrefix: "Inside a Performance Marketing Batch —",
    titleSuffix: "Rajkot Studio, Live for Ahmedabad Students",
    videoUrl: "",
};

/**
 * 9. Career Opportunities Roles
 */
export const careerOpportunitiesData = {
    titleNormal: "Explore",
    titleItalic: "Career Opportunities",
    mernTitle: "Search & Google Ads Track",
    javaTitle: "Meta & Paid Social Track",
    mernRoles: [
        "Google Ads Specialist",
        "PPC Specialist",
        "Performance Marketer",
        "Growth Marketing Executive",
        "Freelance Performance Marketer",
    ],
    javaRoles: [
        "Meta Ads Executive",
        "Paid Social Specialist",
        "Social Media Buyer",
        "E-commerce Growth Specialist",
        "Performance Marketing Manager",
    ],
};

/**
 * 10. Industries Hiring Data
 */
export const industriesSectionData = {
    titleNormal: "Industries that",
    titleItalic: "Hire",
    description: "The skills you gain are highly sought after across multiple high-growth industries in Rajkot, Ahmedabad & across Gujarat.",
    industries: [
        {
            title: "IT Services",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp",
        },
        {
            title: "Fintech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/fintech.webp",
        },
        {
            title: "E-commerce",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp",
        },
        {
            title: "D2C Brands",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/retail-tech.webp",
        },
        {
            title: "Healthcare Tech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/healthcaretech.webp",
        },
        {
            title: "EdTech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/ed-tech.webp",
        },
        {
            title: "Local & Franchise Businesses",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/goverment-it.webp",
        },
    ],
};

export const industriesData = industriesSectionData.industries;

/**
 * 11. Alumni Testimonials Section Data
 */
export const testimonialsSectionData = {
    titleNormal: "Verified Career Transitions — Hear Directly",
    titleParent: "from",
    titleItalic: "Deployed Alumni",
    testimonials: [
        {
            id: 1,
            text: "I had zero marketing background when I joined. Within 4 months I was running live Google Ads campaigns on a real client account and got placed at a digital agency in Rajkot. Managing an actual ad budget during training made all the difference.",
            name: "Krisha Vaghela",
            title: "Performance Marketer, Rajkot",
            track: "Performance Marketing Track",
            image: "",
        },
        {
            id: 2,
            text: "I chose performance marketing because I wanted to work with real ad budgets, not just boost posts. The Meta Ads module and audience targeting was extremely practical. Placed at a performance marketing agency in Surat right after the course.",
            name: "Foram Trivedi",
            title: "Meta Ads Specialist, Surat",
            track: "Meta & Paid Social Track",
            image: "",
        },
        {
            id: 3,
            text: "The hands-on Google Ads bidding strategies and GA4 conversion tracking training helped me defend ROI with real data. Landed a PPC Specialist role in Ahmedabad within 6 weeks of completion.",
            name: "Yash Ramani",
            title: "PPC Specialist, Ahmedabad",
            track: "Search & Google Ads Track",
            image: "",
        },
    ],
};

/**
 * 12. FAQ Data
 */
export const faqSectionData = {
    titleNormal: "Placement & Curriculum",
    titleItalic: "FAQ",
    faqs: [
        {
            id: 1,
            question: "Is this course suitable for complete beginners?",
            answer: "Yes. The course starts from performance marketing fundamentals, assuming no prior experience, before moving into live Google Ads and Meta Ads campaigns.",
        },
        {
            id: 2,
            question: "Do you provide job placement support?",
            answer: "Yes. Placement support includes resume building, mock interviews, and direct referrals through 300+ hiring partners actively looking for performance marketing talent across Rajkot, Ahmedabad, and Gujarat.",
        },
        {
            id: 3,
            question: "Will I actually manage a real ad budget, or just watch demos?",
            answer: "You'll run live campaigns on real Google Ads and Meta Ads accounts during the course, with weekly mentor reviews on actual spend and conversion data — not sandbox dashboards.",
        },
        {
            id: 4,
            question: "How long is the Performance Marketing course at Alphabit Skill?",
            answer: "The course runs 4 to 6 months, with flexible batch timing and No Cost EMI payment options.",
        },
        {
            id: 5,
            question: "What certification do I receive after completing the course?",
            answer: "You receive a government-recognised (NSDC), industry-ready certification validating your performance marketing skills.",
        },
        {
            id: 6,
            question: "Is this Performance Marketing course available in Rajkot and Ahmedabad, or only online?",
            answer: "It runs offline at our Rajkot studio, live online for students in Ahmedabad, and online more broadly for students across Gujarat and beyond — all with the same mentor-led, hands-on structure.",
        },
    ],
};

export const faqData = faqSectionData.faqs;

/**
 * 13. CTA Section Data
 */
export const ctaSectionData = {
    line1Normal: "Ready to Master",
    line1Italic: "Performance Marketing",
    line1Suffix: "?",
    line2Normal: "Join Us in",
    line2Italic: "Rajkot & Ahmedabad",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};

/**
 * 14. Metadata Info
 */
export const metadata = {
    title: "Performance Marketing Course in Rajkot & Ahmedabad | Alphabit Skill",
    description: "Performance Marketing course in Rajkot & Ahmedabad — Google Ads, Meta Ads & analytics on real campaigns. 300+ hiring partners. Book a free demo."
};
