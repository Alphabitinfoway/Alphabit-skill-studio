// ==============================================================================
// Account Manager - Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

/**
 * 1. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: "Account ",
    titleSuffix: "Manager",
    highlights: [
        "NSDC-Recognised Certification",
        "300+ Active Hiring Partners",
        "Rajkot & Ahmedabad, Gujarat"
    ],
    description: "Most account management courses teach you to smile through a client call and call it relationship-building. Real account managers catch a <strong>client's frustration</strong> before it becomes a <strong>churn risk</strong>, and know exactly when a <strong>renewal conversation</strong> needs to start weeks early instead of the week before. This course trains you on <strong>real client accounts</strong> and <strong>real renewal cycles</strong> — not roleplay — with mentors who manage client relationships professionally.",
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
        { label: "Live Client Account Practice" },
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
    titleItalic: "Account Manager",
    titleSuffix: " Course",
    items: [
        "Comprehensive modules from account management fundamentals to specialized track depth",
        "Hands-on work on real client accounts, renewal cycles, and account health tracking",
        "Practical exposure to CRM tools and account performance dashboards used by real companies",
        "Small batch sizes for personalized mentor attention",
        "Weekly mentorship reviews by working account managers",
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
    description: "Account management splits into two fairly different day-to-day jobs. Choose the track that matches where you want to work — across Rajkot, Ahmedabad, and beyond.",
    tracks: [
        {
            title: "Client Success & Relationship Management Track",
            description: "Build with onboarding, communication, and account health monitoring — the skill set companies hire Client Success/Account Managers for when they need someone keeping existing clients happy and retained day-to-day.",
            bestFor: "SaaS & Subscription Businesses · Service Agencies · Client-Facing Support Teams",
            idealIf: "Work as a Client Success Executive or Account Manager · Manage day-to-day client relationships · Catch and resolve account issues before they become churn"
        },
        {
            title: "Strategic Account Growth & Renewals Track",
            description: "Build with QBRs (quarterly business reviews), upselling, and renewal negotiation — the skill set companies hire senior Account Managers for when they need someone growing revenue from existing clients, not just retaining them.",
            bestFor: "Enterprise Accounts · B2B SaaS & Consulting · Agencies with Retainer Clients",
            idealIf: "Work as a Strategic/Senior Account Manager · Run renewal negotiations and QBRs · Grow account revenue through upselling and expansion"
        }
    ]
};

/**
 * 5. Curriculum Modules
 */
export const clientSuccessModules = [
    {
        num: "01",
        title: "Account Management Fundamentals",
        description: "Before managing a single account, understand the full client lifecycle — from handoff after a sale to renewal — and where an account manager's job actually sits in that process.",
        tags: [
            "Client Lifecycle Overview",
            "Account Manager Role & Responsibilities",
            "Handoff from Sales",
            "Relationship Management Basics"
        ],
        techstack: {
            tools: "CRM Basics (Zoho/Salesforce)"
        }
    },
    {
        num: "02",
        title: "Client Onboarding",
        description: "Learn to run a real client onboarding — setting expectations, kickoff calls, and the early relationship-building that sets the tone for the whole account.",
        tags: [
            "Onboarding Process Design",
            "Kickoff Call Structure",
            "Setting Client Expectations",
            "Early Relationship Building"
        ],
        techstack: {
            tools: "Onboarding Templates · Calendly/Google Calendar"
        }
    },
    {
        num: "03",
        title: "Communication & Client Check-Ins",
        description: "Practice the ongoing communication that keeps an account healthy — regular check-ins, status updates, and knowing what to say when something's gone wrong.",
        tags: [
            "Client Communication Cadence",
            "Status Reporting",
            "Difficult Conversation Handling",
            "Email & Call Etiquette"
        ],
        techstack: {
            tools: "Email Templates · CRM Activity Logging"
        }
    },
    {
        num: "04",
        title: "Account Health Monitoring & Churn Prevention",
        description: "Learn to read the early warning signs of a client about to churn, and how to intervene before it's too late.",
        tags: [
            "Account Health Metrics",
            "Churn Risk Indicators",
            "Proactive Intervention Strategies",
            "Escalation Handling"
        ],
        techstack: {
            tools: "CRM Dashboards"
        }
    },
    {
        num: "05",
        title: "Cross-Team Coordination",
        description: "Learn how account managers work as the bridge between the client and internal teams — support, product, and delivery — without becoming a bottleneck.",
        tags: [
            "Internal Stakeholder Coordination",
            "Ticket & Issue Escalation",
            "Setting Realistic Client Timelines",
            "Feedback Loop Management"
        ],
        techstack: {
            tools: "Project/Ticketing Tools (e.g. Jira/Trello)"
        }
    },
    {
        num: "06",
        title: "Client Success Capstone, Internship & Portfolio",
        description: "Apply everything into managing a real (or simulated) client account through a full quarter, complete a guided internship, and leave with a documented account management case study for interviews.",
        tags: [
            "Capstone Account Management",
            "Client Health Case Study",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "CRM Platform · Portfolio Documentation"
        }
    }
];

export const strategicAccountGrowthModules = [
    {
        num: "01",
        title: "Strategic Account Management Fundamentals",
        description: "Understand how account growth differs from account maintenance — the revenue-focused side of managing existing clients, and how it fits into a company's broader growth strategy.",
        tags: [
            "Account Growth vs Retention",
            "Revenue Expansion Basics",
            "Account Segmentation",
            "Strategic Account Planning"
        ],
        techstack: {
            tools: "CRM Basics (Zoho/Salesforce) · Account Segmentation Templates"
        }
    },
    {
        num: "02",
        title: "Quarterly Business Reviews (QBRs)",
        description: "Learn to run a QBR that actually demonstrates value delivered and sets up the next stage of the relationship, instead of a status update nobody remembers.",
        tags: [
            "QBR Structure & Preparation",
            "Value Demonstration",
            "Data-Driven Presentations",
            "Stakeholder Alignment"
        ],
        techstack: {
            tools: "PowerPoint/Canva · Google Sheets"
        }
    },
    {
        num: "03",
        title: "Upselling & Cross-Selling",
        description: "Learn to identify genuine expansion opportunities within an existing account and pitch them without it feeling like a hard sell.",
        tags: [
            "Identifying Expansion Opportunities",
            "Upsell & Cross-Sell Techniques",
            "Timing & Positioning",
            "ROI-Based Pitching"
        ],
        techstack: {
            tools: "CRM Opportunity Tracking"
        }
    },
    {
        num: "04",
        title: "Renewal Strategy & Negotiation",
        description: "Handle the renewal conversation the way experienced account managers do — starting early, addressing risk before it surfaces, and negotiating terms without giving away margin unnecessarily.",
        tags: [
            "Renewal Timeline Planning",
            "Renewal Risk Assessment",
            "Negotiation Techniques",
            "Contract Renewal Basics"
        ],
        techstack: {
            tools: "Contract & Renewal Templates · CRM Basics"
        }
    },
    {
        num: "05",
        title: "Account Growth Metrics & Reporting",
        description: "Understand the numbers that define account growth success — net revenue retention, expansion revenue, and how to report account performance to leadership.",
        tags: [
            "Net Revenue Retention (NRR)",
            "Expansion Revenue Metrics",
            "Account Performance Reporting",
            "Forecasting Basics"
        ],
        techstack: {
            tools: "Google Sheets · CRM Reporting Dashboards"
        }
    },
    {
        num: "06",
        title: "Strategic Growth Capstone, Internship & Portfolio",
        description: "Apply everything into a full account growth plan for a real (or simulated) enterprise client — QBR through renewal — complete a guided internship, and leave with a documented case study ready for interviews.",
        tags: [
            "Capstone Account Growth Plan",
            "Renewal & Expansion Case Study",
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
        title: "Client Success & Relationship Management Track",
        path: "client-success",
        modules: clientSuccessModules,
    },
    {
        title: "Strategic Account Growth & Renewals Track",
        path: "strategic-account-growth",
        modules: strategicAccountGrowthModules,
    },
];

export const mernModules = clientSuccessModules;
export const javaModules = strategicAccountGrowthModules;

/**
 * 6. Comparison Section Data
 */
export const comparisonSectionData = {
    titleNormal: "Why Students Choose Our ",
    titleItalic: "Training ",
    
    categories: [
        {
            id: "mentors",
            label: "Mentors",
            other: "Academics reading from slides",
            usPrefix: "Working account managers from ",
            usHighlight: "real companies",
            usSuffix: "",
        },
        {
            id: "style",
            label: "Learning Style",
            other: "Recorded videos, scripted roleplay",
            usPrefix: "",
            usHighlight: "100% hands-on",
            usSuffix: ", live client account practice",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            other: "Certificate recruiters ignore",
            usPrefix: "Real account management ",
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
    titlePrefix: "What Account Managers",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior Account Manager",
            location: "Rajkot",
            salary: "₹2.5 – ₹4 LPA",
            badge: "Entry Level",
        },
        {
            title: "Client Success Executive",
            location: "Ahmedabad/Surat",
            salary: "₹3 – ₹5 LPA",
            badge: "Early Career",
        },
        {
            title: "Account Manager",
            location: "Gujarat/Remote",
            salary: "₹4.5 – ₹7 LPA",
            badge: "Mid-Level",
        },
        {
            title: "Senior Account Manager",
            location: "PAN India/Remote",
            salary: "₹7 – ₹12 LPA",
            badge: "Mid-Level",
        },
        {
            title: "Strategic Account Manager",
            location: "PAN India",
            salary: "₹12 – ₹18 LPA",
            badge: "Experienced",
        }
    ],
};

/**
 * 8. Classroom / Glance Section Data
 */
export const meetingGlanceSectionData = {
    titlePrefix: "Inside an Account Manager Batch",
    titleSuffix: " — Rajkot Studio, Live for Ahmedabad Students",
    meetings: [
        {
            heading: "Live Client Call Practice",
            subheading: "Students run real check-in calls and QBR presentations during class, with mentors giving feedback right after.",
        },
        {
            heading: "Mentor-Led Account Reviews",
            subheading: "Working account managers review your account health assessments and renewal plans every week for what would actually hold up with a real client.",
        },
        {
            heading: "Small Batch, Real Attention",
            subheading: "If a client just raised something unexpected in a mock QBR, someone can actually help you figure out how to respond before the next session.",
        }
    ]
};

export const meetingVideoData = {
    titlePrefix: "Inside an Account Manager Batch —",
    titleSuffix: "Rajkot Studio, Live for Ahmedabad Students",
    videoUrl: "",
};

/**
 * 9. Career Opportunities Data
 */
export const careerOpportunitiesData = {
    titleNormal: "Explore",
    titleItalic: "Career Opportunities",
    mernTitle: "Client Success & Relationship Management Track",
    javaTitle: "Strategic Account Growth & Renewals Track",
    mernRoles: [
        "Client Success Executive",
        "Account Manager",
        "Client Relationship Executive",
        "Customer Success Associate"
    ],
    javaRoles: [
        "Strategic Account Manager",
        "Senior Account Manager",
        "Key Account Manager",
        "Renewals Manager"
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
            title: "SaaS & Product Companies",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "IT Services & Consulting",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Fintech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/fintech.webp"
        },
        {
            title: "Agencies & Consultancies",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Healthcare Tech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Manufacturing",
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
            text: "I moved into account management from a support role and assumed it was just being nice to clients on calls. Learning to actually read account health signals meant I caught a client about to churn before my manager even flagged it — that's what got me hired.",
            name: "Vidhi Marfatia",
            title: "Client Success Executive, Batch April 2025",
            image: "/Home Page/Trust/1.webp"
        },
        {
            id: 2,
            text: "Running a mock QBR for a large enterprise account during the course was more useful than anything I'd read about account management. I walked into my first real QBR already knowing how to structure it.",
            name: "Rushabh Doshi",
            title: "Account Manager, Batch July 2026",
            image: "/2.webp"
        },
        {
            id: 3,
            text: "I used to avoid renewal conversations until the last week and then scramble. The renewal strategy module taught me to start that conversation early and handle risk before it becomes a problem — I use that on every account I manage now.",
            name: "Aditi Sanghvi",
            title: "Strategic Account Manager, Batch Jaunary 2026",
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
            answer: "Yes. The course starts from account management fundamentals, assuming no prior experience, before splitting into your chosen Client Success or Strategic Account Growth track."
        },
        {
            id: 2,
            question: "Do you provide job placement support?",
            answer: "Yes. Placement support includes resume building, mock interviews, and direct referrals through 300+ hiring partners actively looking for account management talent across Rajkot, Ahmedabad, and Gujarat."
        },
        {
            id: 3,
            question: "Which track should I choose — Client Success, or Strategic Account Growth & Renewals?",
            answer: "Choose Client Success & Relationship Management if you want to focus on day-to-day client health and retention. Choose Strategic Account Growth & Renewals if you want to focus on QBRs, upselling, and renewal negotiation for larger or more established accounts."
        },
        {
            id: 4,
            question: "How is this different from the BDE course?",
            answer: "BDE (Business Development Executive) is about generating new business and closing new deals. Account Manager is about managing and growing relationships with clients you already have. Some students take both to cover the full client lifecycle."
        },
        {
            id: 5,
            question: "Do I need prior client-facing experience to join this course?",
            answer: "No. The course starts from account management fundamentals assuming no prior experience, though comfort with communication and problem-solving helps."
        },
        {
            id: 6,
            question: "How long is the Account Manager course at Alphabit Skill?",
            answer: "The course runs 3 to 4 months, with flexible batch timing and No Cost EMI payment options."
        },
        {
            id: 7,
            question: "What certification do I receive after completing the course?",
            answer: "You receive a government-recognised (NSDC), industry-ready certification validating your account management skills in your chosen track."
        },
        {
            id: 8,
            question: "Is this Account Manager course available in Rajkot and Ahmedabad, or only online?",
            answer: "It runs offline at our Rajkot studio, live online for students in Ahmedabad, and online more broadly for students across Gujarat and beyond — all with the same mentor-led, hands-on structure."
        }
    ]
};

/**
 * 13. CTA Section Data
 */
export const ctaSectionData = {
    line1Normal: "Master",
    line1Italic: "Account Management",
    line1Suffix: " — Apply Today and",
    line2Normal: "Start Building",
    line2Italic: "Client Success",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};

/**
 * 14. Metadata Info
 */
export const metadata = {
    title: "Account Manager Course in Rajkot & Ahmedabad | Alphabit Skill",
    description: "Account Manager course in Rajkot & Ahmedabad — Client Success or Strategic Account Growth tracks. 300+ hiring partners, live client accounts. Book a free demo."
};
