// ==============================================================================
// Sales Executive - Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

/**
 * 1. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: "Sales",
    titleSuffix: "Executive",
    highlights: [
        "NSDC-Recognised Certification",
        "300+ Active Hiring Partners",
        "Rajkot & Ahmedabad, Gujarat"
    ],
    description: "Most sales courses teach you a pitch script and call it training. Real sales executives handle <strong>rejection ten times a day</strong> without losing energy for the eleventh call, and know how to read whether a <strong>\"let me think about it\"</strong> means yes or no. This course puts you through <strong>real selling practice</strong> — in-person or over the phone — with <strong>mentors who work in sales professionally</strong>, not case study slides.",
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
        { label: "Live Selling Practice" },
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
    titleItalic: "Sales Executive ",
    titleSuffix: "Course",
    items: [
        "Comprehensive modules from sales fundamentals to specialized track depth",
        "Hands-on practice with real pitches, objection handling, and closing scenarios",
        "Practical exposure to CRM tools and sales reporting used by real companies",
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
    description: "Sales roles split into two fairly different working styles. Choose the track that matches where you want to work — across Rajkot, Ahmedabad, and beyond.",
    tracks: [
        {
            title: "Field Sales & Direct Selling Track",
            description: "Build with in-person selling, territory management, and product demonstrations — the skill set companies hire field sales executives for when they need someone meeting customers face-to-face and closing on the spot.",
            bestFor: "FMCG & Retail · Real Estate · Direct-to-Consumer Field Sales",
            idealIf: "Work as a Field Sales Executive · Manage a sales territory · Close deals through in-person meetings and demos"
        },
        {
            title: "Inside Sales & Telesales Track",
            description: "Build with telecalling, phone/video pitching, and high-volume lead handling — the skill set companies hire inside sales executives for when they need someone closing deals remotely at scale.",
            bestFor: "IT & SaaS Companies · Call Centers & BPOs · Remote Sales Teams",
            idealIf: "Work as an Inside Sales Executive or Telecaller · Handle a high volume of leads efficiently · Close deals over phone and video calls"
        }
    ]
};

/**
 * 5. Curriculum Modules
 */
export const fieldSalesModules = [
    {
        num: "01",
        title: "Sales Executive Fundamentals",
        description: "Before meeting a single customer, understand how a sales cycle actually works and what separates a field sales role from other sales jobs — in-person trust-building, territory ownership, and on-the-spot decision-making.",
        tags: [
            "Sales Cycle Overview",
            "Field Sales Role & Responsibilities",
            "Customer Psychology Basics",
            "Sales Terminology"
        ],
        techstack: {
            tools: "CRM Basics (Zoho/Salesforce)"
        }
    },
    {
        num: "02",
        title: "Territory & Route Planning",
        description: "Learn to manage a sales territory efficiently — planning visits, prioritizing high-value accounts, and covering ground without wasting a day on low-probability stops.",
        tags: [
            "Territory Mapping",
            "Route & Visit Planning",
            "Account Prioritization",
            "Time Management for Field Sales"
        ],
        techstack: {
            tools: "Google Maps · Route Planning Templates"
        }
    },
    {
        num: "03",
        title: "In-Person Selling & Product Demonstrations",
        description: "Practice the actual in-person pitch — reading a customer's body language, running a product demo that lands, and adjusting the pitch in real time based on reactions.",
        tags: [
            "In-Person Pitching Techniques",
            "Product Demonstration Skills",
            "Reading Customer Signals",
            "Building Rapport Fast"
        ],
        techstack: {
            tools: "Product Demo Kits/Materials"
        }
    },
    {
        num: "04",
        title: "Objection Handling & Closing",
        description: "Learn to handle real objections without freezing or over-explaining, and recognize the moment to actually ask for the close.",
        tags: [
            "Objection Handling Frameworks",
            "Closing Techniques",
            "Handling Price Pushback",
            "Follow-Up After a \"No\""
        ],
        techstack: {
            tools: "Objection Handling Scripts · CRM Basics"
        }
    },
    {
        num: "05",
        title: "Sales Reporting & Target Tracking",
        description: "Understand how field sales performance actually gets tracked and reported — daily visit reports, target achievement, and what managers look for in a sales report.",
        tags: [
            "Daily Sales Reporting",
            "Target & Quota Tracking",
            "CRM Basics for Field Sales",
            "Performance Self-Assessment"
        ],
        techstack: {
            tools: "CRM Basics (Zoho/Salesforce)"
        }
    },
    {
        num: "06",
        title: "Field Sales Capstone, Internship & Portfolio",
        description: "Apply everything into running a real (or simulated) field sales cycle — territory to close — complete a guided internship, and leave with a documented case study for interviews.",
        tags: [
            "Capstone Field Sales Cycle",
            "Sales Case Study",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "CRM Platform · Portfolio Documentation"
        }
    }
];

export const insideSalesModules = [
    {
        num: "01",
        title: "Sales Executive Fundamentals",
        description: "Before making a single call, understand how inside sales differs from field sales — high call volume, shorter interactions, and building trust through voice alone.",
        tags: [
            "Sales Cycle Overview",
            "Inside Sales Role & Responsibilities",
            "Phone-Based Customer Psychology",
            "Sales Terminology"
        ],
        techstack: {
            tools: "CRM Basics (Zoho/Salesforce)"
        }
    },
    {
        num: "02",
        title: "Telecalling & Lead Handling",
        description: "Learn to handle a high volume of inbound and outbound calls efficiently without losing quality on any single conversation.",
        tags: [
            "Telecalling Techniques",
            "Lead Prioritization",
            "Call Volume Management",
            "Voice & Tone Control"
        ],
        techstack: {
            tools: "Dialer/Calling Software (e.g. Exotel) · CRM Basics"
        }
    },
    {
        num: "03",
        title: "Product Pitching Over Phone & Video",
        description: "Practice pitching a product without the visual cues of an in-person meeting — structuring a pitch that works when the customer can't see a demo.",
        tags: [
            "Phone/Video Pitching Structure",
            "Verbal Product Demonstration",
            "Building Rapport Remotely",
            "Script Adaptation"
        ],
        techstack: {
            tools: "Zoom/Google Meet · Call Scripts"
        }
    },
    {
        num: "04",
        title: "Objection Handling & Closing (Remote)",
        description: "Learn to handle objections and close deals when you can't read body language — listening for tone shifts and knowing when to push for the close over the phone.",
        tags: [
            "Remote Objection Handling",
            "Closing Techniques Over Phone/Video",
            "Handling Price Pushback",
            "Follow-Up Sequencing"
        ],
        techstack: {
            tools: "Call Recording & Review Tools · CRM Basics"
        }
    },
    {
        num: "05",
        title: "CRM & Call Reporting",
        description: "Learn to manage a high-volume pipeline inside a CRM — call logging, lead status tracking, and reporting that shows real performance, not just call counts.",
        tags: [
            "CRM Pipeline Management",
            "Call Logging & Notes",
            "Lead Status Tracking",
            "Performance Reporting"
        ],
        techstack: {
            tools: "CRM Basics (Zoho/Salesforce)"
        }
    },
    {
        num: "06",
        title: "Inside Sales Capstone, Internship & Portfolio",
        description: "Apply everything into running a real (or simulated) inside sales campaign, complete a guided internship, and leave with a documented case study for interviews.",
        tags: [
            "Capstone Inside Sales Campaign",
            "Sales Case Study",
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
        title: "Field Sales & Direct Selling Track",
        path: "field-sales",
        modules: fieldSalesModules,
    },
    {
        title: "Inside Sales & Telesales Track",
        path: "inside-sales",
        modules: insideSalesModules,
    },
];

export const mernModules = fieldSalesModules;
export const javaModules = insideSalesModules;

/**
 * 6. Comparison Section Data
 */
export const comparisonSectionData = {
    titleNormal: "Why Students Choose Our ",
    titleItalic: "Training",
    titleSuffix: "in Rajkot & Ahmedabad",
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
            usSuffix: ", live selling practice",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            other: "Certificate recruiters ignore",
            usPrefix: "Real sales ",
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
            usPrefix: "Transparent pricing, ",
            usHighlight: "No Cost EMI",
            usSuffix: ", zero hidden fees",
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
    titlePrefix: "What Sales Executives",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    jobs: [
        {
            title: "Junior Sales Executive",
            location: "Rajkot",
            salary: "₹1.8 – ₹3 LPA",
            badge: "Entry Level",
        },
        {
            title: "Field Sales Executive",
            location: "Ahmedabad/Surat",
            salary: "₹2.5 – ₹4 LPA",
            badge: "Early Career",
        },
        {
            title: "Inside Sales Executive",
            location: "Gujarat/Remote",
            salary: "₹3 – ₹5 LPA",
            badge: "Mid-Level",
        },
        {
            title: "Senior Sales Executive",
            location: "PAN India/Remote",
            salary: "₹5 – ₹8 LPA",
            badge: "Mid-Level",
        },
        {
            title: "Sales Team Lead",
            location: "PAN India",
            salary: "₹8 – ₹13 LPA",
            badge: "Experienced",
        }
    ],
};

/**
 * 8. Classroom / Meeting Glance Section Data
 */
export const meetingGlanceSectionData = {
    titlePrefix: "Inside a Sales ",
    titleItalic: "",
    titleSuffix: "Executive Batch — Rajkot Studio, Live for Ahmedabad Students",
    meetings: [
        {
            heading: "Live Pitch Practice",
            subheading: "Students run real pitches — in-person or over the phone depending on track — during class, with mentors giving feedback right after.",
        },
        {
            heading: "Mentor-Led Objection Drills",
            subheading: "Working sales professionals throw real objections at you in mock scenarios and coach you through handling them without freezing.",
        },
        {
            heading: "Small Batch, Real Attention",
            subheading: "If a pitch fell flat in practice, someone can actually sit with you and figure out where it lost the customer.",
        }
    ]
};

export const meetingVideoData = {
    titlePrefix: "Inside a Sales Executive Batch — ",
    titleSuffix: "Rajkot Studio, Live for Ahmedabad Students",
    videoUrl: "",
};

/**
 * 9. Career Opportunities Section Data
 */
export const careerOpportunitiesData = {
    titleNormal: "Explore",
    titleItalic: "Career Opportunities",
    mernTitle: "Field Sales & Direct Selling Track",
    javaTitle: "Inside Sales & Telesales Track",
    mernRoles: [
        "Field Sales Executive",
        "Territory Sales Executive",
        "Retail Sales Executive",
        "Direct Sales Representative"
    ],
    javaRoles: [
        "Inside Sales Executive",
        "Telesales Executive",
        "Sales Development Associate",
        "Remote Sales Executive"
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
            title: "FMCG & Retail",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp"
        },
        {
            title: "Real Estate",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/fintech.webp"
        },
        {
            title: "IT & SaaS",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "BPO & Call Centers",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Insurance & Financial Services",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/fintech.webp"
        },
        {
            title: "E-commerce",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp"
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
            text: "I'd never sold anything before this course and was nervous about field sales specifically — walking into someone's shop and pitching cold felt impossible at first. The route planning and in-person practice made it click, and I got placed as a field sales executive within a month.",
            name: "Harsh Panchal",
            title: "Field Sales Executive, Batch October 2025",
            image: "/Home Page/Trust/1.webp"
        },
        {
            id: 2,
            text: "Telecalling sounded easy until I actually tried it — you can't see the customer, so every signal is in their voice. The remote objection handling module taught me to actually listen for that instead of just pushing through my script.",
            name: "Drashti Oza",
            title: "Inside Sales Executive, Batch April 2026",
            image: "/2.webp"
        },
        {
            id: 3,
            text: "The mock objection drills were brutal in a good way — mentors threw every excuse at us they'd actually heard from real customers. By the time I did real sales calls, nothing caught me off guard.",
            name: "Nikunj Vyas",
            title: "Sales Executive, Batch July 2026",
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
            answer: "Yes. The course starts from sales fundamentals, assuming no prior experience, before splitting into your chosen Field Sales or Inside Sales track."
        },
        {
            id: 2,
            question: "Do you provide job placement support?",
            answer: "Yes. Placement support includes resume building, mock interviews, and direct referrals through 300+ hiring partners actively looking for sales talent across Rajkot, Ahmedabad, and Gujarat."
        },
        {
            id: 3,
            question: "Which track should I choose — Field Sales, or Inside Sales & Telesales?",
            answer: "Choose Field Sales & Direct Selling if you're comfortable meeting customers in person and want to manage a territory. Choose Inside Sales & Telesales if you'd rather work remotely or on-site handling a high volume of calls and video pitches."
        },
        {
            id: 4,
            question: "How is this different from the BDE course?",
            answer: "Sales Executive covers direct/field and inside sales roles — closing deals with individual customers, often B2C or high-volume. BDE (Business Development Executive) focuses on B2B outbound prospecting and building a company's client pipeline from scratch. Choose based on whether you want to sell directly to customers or generate business leads for a company."
        },
        {
            id: 5,
            question: "Do I need prior sales experience to join this course?",
            answer: "No. The course starts from sales fundamentals assuming no prior experience, though comfort talking to people and handling rejection helps."
        },
        {
            id: 6,
            question: "How long is the Sales Executive course at Alphabit Skill?",
            answer: "The course runs 3 to 4 months, with flexible batch timing and No Cost EMI payment options."
        },
        {
            id: 7,
            question: "What certification do I receive after completing the course?",
            answer: "You receive a government-recognised (NSDC), industry-ready certification validating your sales skills in your chosen track."
        },
        {
            id: 8,
            question: "Is this Sales Executive course available in Rajkot and Ahmedabad, or only online?",
            answer: "It runs offline at our Rajkot studio, live online for students in Ahmedabad, and online more broadly for students across Gujarat and beyond — all with the same mentor-led, hands-on structure."
        }
    ]
};

/**
 * 13. Final CTA Section Data
 */
export const ctaSectionData = {
    line1Normal: "Master Sales Executive Skills -",
    line1Italic: "Apply Today",
    line1Suffix: "and",
    line2Normal: "Start",
    line2Italic: "Closing More Deals",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};

/**
 * 14. Metadata Info
 */
export const metadata = {
    title: "Sales Executive Course in Rajkot & Ahmedabad | Alphabit Skill",
    description: "Sales Executive course in Rajkot & Ahmedabad — Field Sales or Inside Sales tracks. Live selling practice, 300+ hiring partners. Book a free demo."
};
