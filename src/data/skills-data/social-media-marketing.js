// ==============================================================================
// Social Media Marketing - Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

/**
 * 1. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: "Social Media",
    titleSuffix: " Marketing",
    highlights: [
        "NSDC-Recognised Certification",
        "300+ Active Hiring Partners",
        "Rajkot & Ahmedabad, Gujarat"
    ],
    description: "Looking for the best <strong>Social Media Marketing Course in Rajkot</strong> or <strong>Social Media Marketing Training in Ahmedabad</strong>? Most social media courses teach you to schedule posts and call it a strategy. Real social media marketers plan <strong>content calendars</strong> around what an audience actually engages with, manage a <strong>brand's voice across platforms</strong>, and explain performance analytics. This course puts you in charge of <strong>real brand accounts</strong> and <strong>live content strategy</strong> — not mock assignments — with mentors who manage social presence professionally.",
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
    titleItalic: "Social Media Marketing",
    titleSuffix: "Course",
    items: [
        "Comprehensive modules from content strategy fundamentals to full brand account management",
        "Hands-on work managing real brand social accounts, not mock assignments",
        "Content portfolio with real posts, campaigns, and engagement data",
        "Small batch sizes for personalized mentor attention",
        "Weekly performance reviews by working social media marketers",
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
    description: "Social media marketing splits into two different day-to-day jobs. Choose the track that matches the kind of work you actually want to do — across Rajkot, Ahmedabad, and beyond.",
    tracks: [
        {
            title: "Organic Growth & Content Track",
            description: "Build with content strategy, platform algorithms, and short-form video — the skill set brands hire for when they need to grow reach and post content that actually performs, not just look good.",
            bestFor: "D2C & Lifestyle Brands · Content-Led Businesses · Personal Brand Building",
            idealIf: "Plan and create content that grows an audience · Work as a Content or Social Media Executive · Build a portfolio of real, high-performing posts"
        },
        {
            title: "Community Management & Influencer Marketing Track",
            description: "Build with community management, brand voice, and influencer collaboration — the skill set brands hire for when they need someone to run the actual relationship between the brand and its audience, not just post content.",
            bestFor: "Social Media Agencies · Customer-Facing Brands · Influencer/Creator-Led Marketing",
            idealIf: "Manage brand community and engagement · Work as a Community or Social Media Manager · Run influencer collaborations and campaigns"
        }
    ]
};

/**
 * 5. Curriculum Modules
 */
export const organicGrowthModules = [
    {
        num: "01",
        title: "Organic Social Fundamentals",
        description: "Before you post anything, understand how a platform's algorithm actually decides what to show people, and how organic reach is earned rather than bought. Cover platform fundamentals and content pillars framed specifically around growth.",
        tags: [
            "Platform Algorithms (Instagram, Facebook)",
            "Content Pillars & Formats",
            "Organic Reach Mechanics",
            "Audience Growth Basics"
        ],
        techstack: {
            tools: "Meta Business Suite · Canva"
        }
    },
    {
        num: "02",
        title: "Content Strategy & Content Calendars",
        description: "Plan content the way real brand accounts do — monthly calendars, content pillars, and post formats mapped to actual business goals, not random daily posting.",
        tags: [
            "Content Calendar Planning",
            "Content Pillars & Formats",
            "Caption & Copywriting Basics",
            "Trend Research"
        ],
        techstack: {
            tools: "Canva · Google Sheets"
        }
    },
    {
        num: "03",
        title: "Reels, Short-Form Video & Discovery",
        description: "Learn what actually drives organic reach on Instagram and Facebook today — Reels strategy, hooks, and hashtag/discovery research based on how the algorithm behaves now.",
        tags: [
            "Reels & Short-Form Video Strategy",
            "Hooks & Retention",
            "Hashtag & Discovery Research",
            "Posting Cadence & Timing"
        ],
        techstack: {
            tools: "Instagram Business · CapCut / Canva"
        }
    },
    {
        num: "04",
        title: "Content Creation & Copywriting for Social",
        description: "Write and design content that stops a scroll — captions, visual hierarchy, and formats matched to what each platform actually rewards.",
        tags: [
            "Copywriting for Social",
            "Visual Content Design Basics",
            "Platform-Specific Formatting",
            "Brand Voice in Content"
        ],
        techstack: {
            tools: "Canva"
        }
    },
    {
        num: "05",
        title: "Social Media Analytics & Reporting",
        description: "Learn to read what a platform's analytics are actually telling you — reach vs engagement vs conversions — and iterate content based on real performance data.",
        tags: [
            "Platform Analytics (Instagram/Facebook Insights)",
            "Engagement vs Reach vs Conversion",
            "Reporting & Dashboards",
            "Performance-Based Iteration"
        ],
        techstack: {
            tools: "Meta Business Suite · Looker Studio"
        }
    },
    {
        num: "06",
        title: "Content Capstone, Internship & Portfolio",
        description: "Apply everything into a real content calendar and posting cycle for a brand account, complete a guided internship, and leave with a content portfolio and growth data ready for interviews.",
        tags: [
            "Capstone Content Calendar Build",
            "Growth & Engagement Reporting",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Canva · Meta Business Suite · Looker Studio"
        }
    }
];

export const communityManagementModules = [
    {
        num: "01",
        title: "Community & Brand Voice Fundamentals",
        description: "Before responding to a single comment, understand how a brand's voice needs to stay consistent across every public interaction, and why community management is different from just posting content.",
        tags: [
            "Brand Voice & Tone Guidelines",
            "Community Management Principles",
            "Platform Etiquette",
            "Audience Psychology"
        ],
        techstack: {
            tools: "Meta Business Suite"
        }
    },
    {
        num: "02",
        title: "Community Management & Engagement Practices",
        description: "Learn the day-to-day of running a brand's community — responding to comments and DMs in the brand's voice, and turning casual followers into an engaged audience.",
        tags: [
            "Comment & DM Management",
            "Engagement Tactics",
            "Response Time & Tone Standards",
            "Community Building Activities"
        ],
        techstack: {}
    },
    {
        num: "03",
        title: "Handling Negative Feedback & Crisis Response",
        description: "Learn the part most courses skip — responding to negative comments and public complaints in a way that protects the brand instead of escalating the situation.",
        tags: [
            "Negative Feedback Response Frameworks",
            "De-escalation Techniques",
            "Crisis Communication Basics",
            "When to Take a Conversation Private"
        ],
        techstack: {}
    },
    {
        num: "04",
        title: "Influencer Identification & Outreach",
        description: "Learn how brands actually find and approach creators — vetting for audience fit, not just follower count, and writing outreach that gets a response.",
        tags: [
            "Influencer Vetting & Audience Fit",
            "Outreach & Pitching",
            "Rate Negotiation Basics",
            "Platform-Specific Creator Discovery"
        ],
        techstack: {}
    },
    {
        num: "05",
        title: "Collaboration Structuring, UGC & Campaign ROI",
        description: "Learn how to structure a creator collaboration properly and measure whether it was worth the spend — briefs, deliverables, and ROI tracking.",
        tags: [
            "Collaboration & Barter Structuring",
            "Campaign Briefs & Deliverables",
            "UGC (User-Generated Content) Strategy",
            "Campaign ROI Basics"
        ],
        techstack: {
            tools: "Google Sheets"
        }
    },
    {
        num: "06",
        title: "Community Capstone, Internship & Portfolio",
        description: "Apply everything into managing a real brand's community and running a small influencer collaboration, complete a guided internship, and leave with a portfolio of documented engagement and campaign work.",
        tags: [
            "Capstone Community Management",
            "Influencer Campaign Execution",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Meta Business Suite · Google Sheets"
        }
    }
];

export const curriculumTracks = [
    {
        title: "Organic Growth & Content Track",
        path: "organic-growth",
        modules: organicGrowthModules,
    },
    {
        title: "Community Management & Influencer Marketing Track",
        path: "community-management",
        modules: communityManagementModules,
    },
];

export const mernModules = organicGrowthModules;
export const javaModules = communityManagementModules;

/**
 * 6. Comparison Section Data
 */
export const comparisonSectionData = {
    titleNormal: "Why Students Choose Our ",
    titleItalic: "Training Studio in Rajkot & Ahmedabad",
    categories: [
        {
            id: "mentors",
            label: "Mentors",
            other: "Academics reading from slides",
            usPrefix: "Working social media marketers managing ",
            usHighlight: "real brand accounts",
            usSuffix: "",
        },
        {
            id: "style",
            label: "Learning Style",
            other: "Recorded videos, mock assignments",
            usPrefix: "",
            usHighlight: "100% hands-on",
            usSuffix: ", live account management",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            other: "Certificate recruiters ignore",
            usPrefix: "Real content, campaigns & ",
            usHighlight: "engagement data",
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
            usPrefix: "",
            usHighlight: "Govt.-recognised",
            usSuffix: ", industry-ready certification",
        },
        {
            id: "fees",
            label: "Fees",
            other: "Hidden charges, no EMI",
            usPrefix: "",
            usHighlight: "Transparent pricing",
            usSuffix: ", No Cost EMI, zero hidden fees",
        },
        {
            id: "support",
            label: "Support After Course",
            other: "None",
            usPrefix: "",
            usHighlight: "Lifetime doubt support",
            usSuffix: " for alumni",
        }
    ]
};

/**
 * 7. Earnings Section Data
 */
export const earningsSectionData = {
    titlePrefix: "What Social Media Marketers",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior Social Media Executive",
            location: "Rajkot",
            salary: "₹1.8 – ₹3 LPA",
            badge: "Entry Level",
        },
        {
            title: "Social Media Manager",
            location: "Ahmedabad/Surat",
            salary: "₹2.5 – ₹4.5 LPA",
            badge: "Early Career",
        },
        {
            title: "Content & Community Manager",
            location: "Gujarat/Remote",
            salary: "₹3.5 – ₹6 LPA",
            badge: "Mid-Level",
        },
        {
            title: "Social Media Strategist",
            location: "PAN India/Remote",
            salary: "₹6 – ₹10 LPA",
            badge: "High Demand",
        },
        {
            title: "Freelance Social Media Manager",
            location: "India/International",
            salary: "₹15,000 – ₹50,000/mo",
            badge: "Freelance Roles",
        }
    ],
};

/**
 * 8. Classroom / Glance Section Data
 */
export const meetingGlanceSectionData = {
    titlePrefix: "Inside a Social Media Marketing",
    titleSuffix: "Batch — Live for Ahmedabad Students",
    meetings: [
        {
            heading: "Live Content Reviews",
            subheading: "Students bring real drafted posts and calendars for mentor feedback every week — actual captions, actual creative, not mock briefs.",
        },
        {
            heading: "Account Strategy Sessions",
            subheading: "Walk through a real (or capstone) brand account's performance and decide what to post next, the way an in-house social media manager would.",
        },
        {
            heading: "Small Batch, Real Attention",
            subheading: "If a Reel isn't getting the reach you expected the night before a review, someone can actually sit with you and figure out why.",
        }
    ]
};

export const meetingVideoData = {
    titlePrefix: "Inside a Social Media Marketing",
    titleSuffix: "Batch — Live for Ahmedabad Students",
    videoUrl: "",
};

/**
 * 9. Career Opportunities Data
 */
export const careerOpportunitiesData = {
    titleNormal: "Explore",
    titleItalic: "Career Opportunities",
    mernTitle: "Organic Growth & Content Track",
    javaTitle: "Community Management & Influencer Track",
    mernRoles: [
        "Social Media Executive",
        "Social Media Manager",
        "Social Media Strategist"
    ],
    javaRoles: [
        "Content & Community Manager",
        "Influencer Marketing Coordinator",
        "Freelance Social Media Manager"
    ],
};

/**
 * 10. Industries Section Data
 */
export const industriesSectionData = {
    titleNormal: "Industries That Hire",
    titleItalic: "in India",
    description: "The skills you gain are highly sought after across multiple high-growth consumer and digital brands.",
    industries: [
        {
            title: "D2C & Lifestyle Brands",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp"
        },
        {
            title: "IT Services",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "E-commerce",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp"
        },
        {
            title: "Hospitality & Travel",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Healthcare Tech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "EdTech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/ed-tech.webp"
        },
        {
            title: "Local & Franchise Businesses",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        }
    ],
};

/**
 * 11. Testimonials Section Data
 */
export const testimonialsSectionData = {
    titleNormal: "Verified Career Transitions Hear Directly",
    titleParent: "from",
    titleItalic: "Deployed Alumni",
    testimonials: [
        {
            id: 1,
            text: "Managing real brand social accounts and building monthly content calendars during the course helped me land my first role as a Social Media Manager within weeks of completing the studio program.",
            name: "Social Media Alumnus",
            title: "Social Media Manager, Batch 2026",
            image: "/Home Page/Trust/1.webp"
        }
    ]
};

/**
 * 12. FAQ Section Data
 */
export const faqSectionData = {
    titleNormal: "Placement & Curriculum",
    titleItalic: "FAQ",
    faqs: [
        {
            id: 1,
            question: "Is this course suitable for complete beginners?",
            answer: "Yes. The course starts from social media marketing fundamentals, assuming no prior experience, before moving into live content strategy and account management."
        },
        {
            id: 2,
            question: "Do you provide job placement support?",
            answer: "Yes. Placement support includes resume building, mock interviews, and direct referrals through 300+ hiring partners actively looking for social media talent across Rajkot, Ahmedabad, and Gujarat."
        },
        {
            id: 3,
            question: "Will I actually manage a real brand account, or just create mock posts?",
            answer: "You'll manage a real (or capstone) brand's social media account during the course, with weekly mentor reviews on actual content and engagement data — not sandbox assignments."
        },
        {
            id: 4,
            question: "How is this different from the Performance Marketing course?",
            answer: "Performance Marketing is the paid, ad-account side of digital marketing (Google Ads, Meta Ads, ROI tracking). Social Media Marketing is the organic, content and community side — content strategy, growth, and audience building without ad spend. Many students take both to cover the full picture."
        },
        {
            id: 5,
            question: "How long is the Social Media Marketing course at Alphabit Skill?",
            answer: "The course runs 4 to 6 months, with flexible batch timing and No Cost EMI payment options."
        },
        {
            id: 6,
            question: "What certification do I receive after completing the course?",
            answer: "You receive a government-recognised (NSDC), industry-ready certification validating your social media marketing skills."
        },
        {
            id: 7,
            question: "Is this Social Media Marketing course available in Rajkot and Ahmedabad, or only online?",
            answer: "It runs offline at our Rajkot studio, live online for students in Ahmedabad, and online more broadly for students across Gujarat and beyond — all with the same mentor-led, hands-on structure."
        }
    ]
};

/**
 * 13. CTA Section Data
 */
export const ctaSectionData = {
    line1Normal: "Master",
    line1Italic: "Social Media Marketing",
    line1Suffix: "— Apply Today and",
    line2Normal: "Start Building",
    line2Italic: "Real Brand Presence",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};

/**
 * 14. Metadata Info
 */
export const metadata = {
    title: "Social Media Marketing Course in Rajkot & Ahmedabad | Alphabit Skill",
    description: "Social Media Marketing course in Rajkot & Ahmedabad — content strategy, community management & analytics on real brand accounts. Book a free demo."
};
