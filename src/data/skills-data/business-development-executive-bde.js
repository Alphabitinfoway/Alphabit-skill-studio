// ==============================================================================
// Business Development Executive (BDE) - Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

/**
 * 1. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: "Business Development Executive ",
    titleSuffix: "(BDE)",
    highlights: [
        "NSDC-Recognised Certification",
        "300+ Active Hiring Partners",
        "Rajkot & Ahmedabad, Gujarat"
    ],
    description: "Looking for the best <strong>BDE Course in Rajkot</strong> or <strong>Sales Training in Ahmedabad</strong>? Most BDE courses teach a sales pitch script and call it training. Real business development is handling the fifth 'not interested right now' of the day without losing momentum, and knowing when to push a deal forward versus when to walk away. This course puts you through <strong>real cold outreach</strong>, <strong>real sales pipelines</strong>, and <strong>real client conversations</strong> — not roleplay scripts — with mentors who work in sales professionally.",
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
        { label: "300+ Career Transitions" },
        { label: "Live Sales Pipeline Practice" },
        { label: "300+ Hiring Partners" },
        { label: "100% Placement Assistance" }
    ],
    durationVal: "3–4 months",
    durationLabel: "Course Duration",
    hoursVal: "30+ hrs",
    hoursLabel: "Live project hours"
};

/**
 * 3. Course Features Section Data
 */
export const courseFeaturesData = {
    titleNormal: "About Our",
    titleItalic: "BDE Course",
    titleSuffix: "",
    items: [
        "Comprehensive modules from sales fundamentals to specialized track depth",
        "Hands-on work on real outreach, pipelines, and client conversations",
        "Practical exposure to CRM tools and sales tracking dashboards used by real companies",
        "Small batch sizes for personalized mentor attention",
        "Weekly mentorship reviews by working sales professionals",
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
    description: "Business development splits into two fairly different day-to-day jobs. Choose the track that matches where you want to work — across Rajkot, Ahmedabad, and beyond.",
    tracks: [
        {
            title: "Sales & Lead Generation Track",
            description: "Build with cold outreach, lead qualification, and pipeline management — the skill set companies hire SDRs and BDEs for when they need a steady flow of qualified leads entering the sales funnel.",
            bestFor: "SaaS & IT Companies · Staffing & B2B Services · Startups Building Outbound Sales",
            idealIf: "Work as a Business Development Executive or SDR · Generate and qualify leads through cold outreach · Build and manage a sales pipeline"
        },
        {
            title: "Client Acquisition & Account Management Track",
            description: "Build with proposal writing, negotiation, and relationship management — the skill set companies hire for when they need someone to close deals and grow existing client accounts, not just fill the pipeline.",
            bestFor: "Agencies & Consultancies · Enterprise Sales Teams · Client-Facing Service Businesses",
            idealIf: "Work as a Client Acquisition Executive or Account Manager · Close deals and negotiate contracts · Manage and grow existing client relationships"
        }
    ]
};

/**
 * 5. Curriculum Modules
 */
export const salesLeadGenModules = [
    {
        num: "01",
        title: "Sales & Business Development Fundamentals",
        description: "Before making a single call, understand how a sales funnel actually works — from cold lead to closed deal — and where a BDE's job sits inside that process.",
        tags: [
            "Sales Funnel Overview",
            "BDE Role & Responsibilities",
            "Target Market & ICP Basics",
            "Sales Terminology"
        ],
        techstack: {
            tools: "CRM Basics (Zoho/Salesforce)"
        }
    },
    {
        num: "02",
        title: "Lead Generation & Prospecting",
        description: "Learn to actually find prospects, not just wait for inbound leads — LinkedIn Sales Navigator, list building, and research techniques that make outreach worth sending.",
        tags: [
            "Prospecting Techniques",
            "LinkedIn Sales Navigator",
            "List Building & Research",
            "Lead Qualification Criteria"
        ],
        techstack: {
            tools: "LinkedIn Sales Navigator · Google Sheets"
        }
    },
    {
        num: "03",
        title: "Cold Outreach: Calls, Email & LinkedIn",
        description: "Run real cold outreach across channels — call scripts that don't sound scripted, cold emails that get replies, and LinkedIn messaging that doesn't get ignored.",
        tags: [
            "Cold Calling Techniques",
            "Cold Email Writing",
            "LinkedIn Outreach",
            "Objection Handling Basics"
        ],
        techstack: {
            tools: "Cold Email Tools (e.g. Apollo/Lemlist) · LinkedIn Sales Navigator"
        }
    },
    {
        num: "04",
        title: "Pipeline Management & CRM",
        description: "Learn to manage a real sales pipeline inside a CRM — stage tracking, follow-up cadences, and the discipline that keeps deals from going cold.",
        tags: [
            "CRM Pipeline Management",
            "Follow-Up Cadences",
            "Deal Stage Tracking",
            "Sales Reporting Basics"
        ],
        techstack: {
            tools: "Zoho CRM / Salesforce"
        }
    },
    {
        num: "05",
        title: "Sales Metrics & Performance",
        description: "Understand the numbers that actually matter in sales — conversion rates, pipeline velocity, and how targets get set and tracked in a real sales team.",
        tags: [
            "Sales KPIs & Metrics",
            "Conversion Rate Analysis",
            "Target Setting",
            "Performance Reporting"
        ],
        techstack: {
            tools: "CRM Reporting Dashboards · Google Sheets"
        }
    },
    {
        num: "06",
        title: "Sales Capstone, Internship & Portfolio",
        description: "Apply everything into running a real (or simulated) outbound campaign end to end, complete a guided internship, and leave with a documented pipeline case study for interviews.",
        tags: [
            "Capstone Outbound Campaign",
            "Pipeline Case Study",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Zoho CRM / Salesforce · Portfolio Documentation"
        }
    }
];

export const clientAcquisitionModules = [
    {
        num: "01",
        title: "Client Acquisition Fundamentals",
        description: "Before pitching a client, understand what actually moves a prospect from 'interested' to 'signed' — the buying process, decision-maker mapping, and how deals really get won.",
        tags: [
            "B2B Buying Process",
            "Decision-Maker Mapping",
            "Client Acquisition Funnel",
            "Sales Terminology"
        ],
        techstack: {
            tools: "CRM Basics (Zoho/Salesforce)"
        }
    },
    {
        num: "02",
        title: "Discovery Calls & Needs Analysis",
        description: "Learn to run a discovery call that actually uncovers what a client needs, instead of pitching before you understand the problem.",
        tags: [
            "Discovery Call Structure",
            "Needs Analysis",
            "Active Listening & Questioning",
            "Qualifying Budget & Authority"
        ],
        techstack: {
            tools: "Call Recording/Notes Tools · Discovery Call Templates"
        }
    },
    {
        num: "03",
        title: "Proposal Writing & Presentations",
        description: "Build proposals and pitch decks that actually address what a client said in discovery, not generic templates with the client's name swapped in.",
        tags: [
            "Proposal Writing",
            "Pitch Deck Structure",
            "Pricing Presentation",
            "Client Presentation Skills"
        ],
        techstack: {
            tools: "PowerPoint / Canva"
        }
    },
    {
        num: "04",
        title: "Negotiation & Deal Closing",
        description: "Learn to negotiate terms and close deals without either caving on every objection or losing the deal over inflexibility.",
        tags: [
            "Negotiation Techniques",
            "Handling Price Objections",
            "Closing Techniques",
            "Contract Basics"
        ],
        techstack: {
            tools: "Contract & Quote Templates · CRM Deal Tracking"
        }
    },
    {
        num: "05",
        title: "Account Management & Client Retention",
        description: "Understand what happens after the deal closes — onboarding a new client properly and growing the account instead of just servicing it.",
        tags: [
            "Client Onboarding",
            "Account Growth Strategies",
            "Upselling & Cross-Selling",
            "Client Retention & Relationship Management"
        ],
        techstack: {
            tools: "CRM Basics (Zoho/Salesforce)"
        }
    },
    {
        num: "06",
        title: "Client Acquisition Capstone, Internship & Portfolio",
        description: "Apply everything into a full client acquisition cycle — from discovery to proposal to close — complete a guided internship, and leave with a documented case study ready for interviews.",
        tags: [
            "Capstone Client Acquisition Cycle",
            "Deal Case Study",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "CRM Platform · Portfolio Documentation"
        }
    }
];

export const curriculumTracks = [
    {
        title: "Sales & Lead Generation Track",
        path: "sales-lead-gen",
        modules: salesLeadGenModules,
    },
    {
        title: "Client Acquisition & Account Management Track",
        path: "client-acquisition",
        modules: clientAcquisitionModules,
    },
];

export const mernModules = salesLeadGenModules;
export const javaModules = clientAcquisitionModules;

/**
 * 6. Comparison Section Data
 */
export const comparisonSectionData = {
    titleNormal: "Why Students Choose Our ",
    titleItalic: "Training",
    categories: [
        {
            id: "mentors",
            label: "Mentors",
            other: "Academics reading from slides",
            usPrefix: "Working sales professionals from ",
            usHighlight: "real companies",
            usSuffix: "",
        },
        {
            id: "style",
            label: "Learning Style",
            other: "Recorded videos, scripted roleplay",
            usPrefix: "",
            usHighlight: "100% hands-on",
            usSuffix: ", live outreach & real pipeline work",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            other: "Certificate recruiters ignore",
            usPrefix: "Real pipeline and deal ",
            usHighlight: "case studies",
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
    titlePrefix: "What BDE Professionals",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior BDE / SDR",
            location: "Rajkot",
            salary: "₹2 – ₹3.5 LPA",
            badge: "Entry Level",
        },
        {
            title: "Business Development Executive",
            location: "Ahmedabad/Surat",
            salary: "₹2.5 – ₹4.5 LPA",
            badge: "Early Career",
        },
        {
            title: "Client Acquisition Executive",
            location: "Gujarat/Remote",
            salary: "₹3.5 – ₹6 LPA",
            badge: "Mid-Level",
        },
        {
            title: "Senior BDE / Account Executive",
            location: "PAN India/Remote",
            salary: "₹6 – ₹10 LPA",
            badge: "Mid-Level",
        },
        {
            title: "Business Development Manager",
            location: "PAN India",
            salary: "₹10 – ₹16 LPA",
            badge: "Experienced",
        }
    ],
};

/**
 * 8. Classroom / Glance Section Data
 */
export const meetingGlanceSectionData = {
    titlePrefix: "Inside a BDE Batch",
    titleSuffix: " — Rajkot Studio, Live for Ahmedabad Students",
    meetings: [
        {
            heading: "Live Outreach Sessions",
            subheading: "Students make real prospecting calls and send real cold emails during class, with mentors listening in and giving feedback right after.",
        },
        {
            heading: "Mentor-Led Pipeline Reviews",
            subheading: "Working sales professionals review your pipeline every week — what's stalling, what's moving, and why.",
        },
        {
            heading: "Small Batch, Real Attention",
            subheading: "If a prospect just gave you an objection you didn't expect, someone can actually help you work through how to respond before your next call.",
        }
    ]
};

export const meetingVideoData = {
    titlePrefix: "Inside a BDE Batch —",
    titleSuffix: "Rajkot Studio, Live for Ahmedabad Students",
    videoUrl: "",
};

/**
 * 9. Career Opportunities Data
 */
export const careerOpportunitiesData = {
    titleNormal: "Explore",
    titleItalic: "Career Opportunities",
    mernTitle: "Sales & Lead Generation Track",
    javaTitle: "Client Acquisition & Account Management Track",
    mernRoles: [
        "Business Development Executive",
        "Sales Development Representative (SDR)",
        "Lead Generation Specialist",
        "Inside Sales Executive"
    ],
    javaRoles: [
        "Client Acquisition Executive",
        "Account Executive",
        "Business Development Manager",
        "Key Account Manager"
    ],
};

/**
 * 10. Industries Section Data
 */
export const industriesSectionData = {
    titleNormal: "Industries That Hire",
    titleItalic: "in India",
    description: "The skills you gain are highly sought after across multiple high-growth industries.",
    industries: [
        {
            title: "IT Services",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "SaaS & Product Companies",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Staffing & B2B Services",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Fintech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/fintech.webp"
        },
        {
            title: "Manufacturing",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Real Estate",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Consulting",
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
            text: "I came from a customer support background with zero sales experience. Running real cold outreach during the course meant I'd already handled objections dozens of times before my first real prospect said 'not interested.' Got placed as a BDE within three weeks of finishing.",
            name: "Parth Zaveri",
            title: "Business Development Executive, Batch April 2025",
            image: "/Home Page/Trust/1.webp"
        },
        {
            id: 2,
            text: "The Client Acquisition track's negotiation module was the turning point — I used to just accept the first pushback on price. Now I actually know how to hold a deal together without either caving or losing it.",
            name: "Nishi Gohil",
            title: "Client Acquisition Executive, Batch October 2026",
            image: "/2.webp"
        },
        {
            id: 3,
            text: "I'd tried cold calling on my own before this and hated it because I didn't know what I was doing wrong. Having a mentor listen in on real calls and tell me exactly where I lost the prospect made all the difference.",
            name: "Kevin Dave",
            title: "Sales Development Representative, Batch June 2026",
            image: "/3.webp"
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
            answer: "Yes. The course starts from sales and business development fundamentals, assuming no prior experience, before splitting into your chosen Sales & Lead Generation or Client Acquisition track."
        },
        {
            id: 2,
            question: "Do you provide job placement support?",
            answer: "Yes. Placement support includes resume building, mock interviews, and direct referrals through 300+ hiring partners actively looking for BDE talent across Rajkot, Ahmedabad, and Gujarat."
        },
        {
            id: 3,
            question: "Which track should I choose — Sales & Lead Generation, or Client Acquisition & Account Management?",
            answer: "Choose Sales & Lead Generation if you want to focus on prospecting, cold outreach, and filling the pipeline. Choose Client Acquisition & Account Management if you want to focus on closing deals and managing client relationships after the pipeline hands them off."
        },
        {
            id: 4,
            question: "Do I need prior sales experience to join this course?",
            answer: "No. The course starts from sales fundamentals assuming no prior experience, though comfort with talking to people and handling rejection helps."
        },
        {
            id: 5,
            question: "How long is the BDE course at Alphabit Skill?",
            answer: "The course runs 3 to 4 months, with flexible batch timing and No Cost EMI payment options."
        },
        {
            id: 6,
            question: "What certification do I receive after completing the course?",
            answer: "You receive a government-recognised (NSDC), industry-ready certification validating your business development skills in your chosen track."
        },
        {
            id: 7,
            question: "Is this BDE course available in Rajkot and Ahmedabad, or only online?",
            answer: "It runs offline at our Rajkot studio, live online for students in Ahmedabad, and online more broadly for students across Gujarat and beyond — all with the same mentor-led, hands-on structure."
        }
    ]
};

/**
 * 13. CTA Section Data
 */
export const ctaSectionData = {
    line1Normal: "Access the",
    line1Italic: "BDE Curriculum",
    line1Suffix: "in Rajkot & Ahmedabad — Apply Today and",
    line2Normal: "Start Building",
    line2Italic: "Real Revenue Growth",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};

/**
 * 14. Metadata Info
 */
export const metadata = {
    title: "Business Development Executive (BDE) Course in Rajkot & Ahmedabad | Alphabit Skill",
    description: "BDE course in Rajkot & Ahmedabad — Sales & Lead Generation or Client Acquisition tracks. Live pipelines, 300+ hiring partners. Book a free demo."
};
