// ==============================================================================
// Purchase Manager - Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

/**
 * SEO Metadata
 */
export const metadata = {
    title: "Purchase Manager Course in Rajkot & Ahmedabad | Alphabit Skill",
    description: "Purchase Manager course in Rajkot & Ahmedabad — Strategic Sourcing or Purchase Operations tracks. Live vendor projects, 300+ hiring partners. Book a demo."
};

/**
 * 1. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: "Purchase ",
    titleSuffix: "Manager",
    highlights: [
        "NSDC-Recognised Certification",
        "300+ Active Hiring Partners",
        "Rajkot & Ahmedabad, Gujarat"
    ],
    description: "Most purchase management courses teach procurement theory and call it job-ready. Real purchase managers <strong>negotiate a vendor down on price</strong> without damaging the relationship, and know exactly when a <strong>stockout risk is worth paying a premium to avoid</strong>. This course puts you through <strong>real vendor negotiations and real inventory planning</strong> — not textbook cases — with mentors who work in procurement professionally.",
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
        { label: "Live Vendor Negotiation Practice" },
        { label: "300+ Hiring Partners" },
        { label: "100% Placement Assistance" }
    ],
    durationVal: "3–4 months",
    durationLabel: "Course Duration",
    hoursVal: "30+ hrs",
    hoursLabel: "Live project hours"
};

/**
 * 3. Course Features Data (About Section)
 */
export const courseFeaturesData = {
    titleNormal: "About Our ",
    titleItalic: "Purchase Manager",
    titleSuffix: "Course",
    items: [
        "Comprehensive modules from procurement fundamentals to specialized track depth",
        "Hands-on work on real vendor negotiations, purchase orders, and inventory planning",
        "Practical exposure to procurement and inventory tracking tools used by real companies",
        "Small batch sizes for personalized mentor attention",
        "Weekly mentorship reviews by working purchase managers",
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
    description: "Purchase management splits into two fairly different responsibilities. Choose the track that matches where you want to work — across Rajkot, Ahmedabad, and beyond.",
    tracks: [
        {
            title: "Strategic Sourcing & Vendor Management Track",
            description: "Build with supplier evaluation, negotiation, and contract management — the skill set companies hire purchase managers for when they need someone finding and managing the right vendors at the right cost.",
            bestFor: "Manufacturing · Retail & Distribution · Companies with Complex Supply Chains",
            idealIf: "Work as a Purchase/Procurement Manager · Negotiate vendor contracts and pricing · Build and manage supplier relationships"
        },
        {
            title: "Purchase Operations & Inventory Coordination Track",
            description: "Build with purchase order management, inventory planning, and stock coordination — the skill set companies hire for when they need someone running the day-to-day purchasing function, not just negotiating deals.",
            bestFor: "E-commerce & Retail · Manufacturing Operations · Companies Managing High SKU Volumes",
            idealIf: "Work as a Purchase Executive or Inventory Coordinator · Manage purchase orders and stock levels · Keep procurement running smoothly day-to-day"
        }
    ]
};

/**
 * 5. Curriculum Modules
 */
export const strategicSourcingModules = [
    {
        num: "01",
        title: "Purchase Management Fundamentals",
        description: "Before evaluating a single vendor, understand how procurement fits into a business — the purchase cycle, cost centers, and how a purchase manager's decisions affect the bottom line.",
        tags: [
            "Purchase Cycle Overview",
            "Procurement's Role in Business",
            "Cost Center Basics",
            "Purchase Terminology"
        ],
        techstack: {
            tools: "Excel/Google Sheets"
        }
    },
    {
        num: "02",
        title: "Supplier Identification & Evaluation",
        description: "Learn to find and vet vendors properly — not just picking the cheapest quote, but evaluating reliability, quality, and long-term fit.",
        tags: [
            "Supplier Sourcing",
            "Vendor Evaluation Criteria",
            "RFQ/RFP Basics",
            "Supplier Risk Assessment"
        ],
        techstack: {
            tools: "Vendor Evaluation Templates · RFQ/RFP Templates"
        }
    },
    {
        num: "03",
        title: "Negotiation & Contract Management",
        description: "Practice real vendor negotiation — pricing, payment terms, and contract clauses that protect the business without souring the relationship.",
        tags: [
            "Negotiation Techniques",
            "Payment Terms & Pricing Structures",
            "Contract Basics & Key Clauses",
            "Building Long-Term Vendor Relationships"
        ],
        techstack: {
            tools: "Contract Templates · Negotiation Checklists"
        }
    },
    {
        num: "04",
        title: "Cost Analysis & Budgeting",
        description: "Understand how purchase decisions get judged financially — total cost of ownership, budget tracking, and justifying spend to finance or leadership.",
        tags: [
            "Total Cost of Ownership",
            "Purchase Budgeting",
            "Cost-Saving Analysis",
            "Reporting to Finance"
        ],
        techstack: {
            tools: "Excel/Google Sheets · TCO Calculation Templates"
        }
    },
    {
        num: "05",
        title: "Vendor Performance & Risk Management",
        description: "Learn to monitor vendor performance after a contract is signed, and manage the risk of supply disruption before it becomes a crisis.",
        tags: [
            "Vendor Performance Tracking",
            "Supply Risk Management",
            "Vendor Scorecards",
            "Escalation & Contingency Planning"
        ],
        techstack: {
            tools: "Vendor Scorecards · Google Sheets"
        }
    },
    {
        num: "06",
        title: "Strategic Sourcing Capstone, Internship & Portfolio",
        description: "Apply everything into a full sourcing and negotiation cycle for a real or simulated procurement need, complete a guided internship, and leave with a documented case study for interviews.",
        tags: [
            "Capstone Sourcing Project",
            "Vendor Negotiation Case Study",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Procurement/ERP Basics (e.g. Odoo Purchase) · Portfolio Documentation"
        }
    }
];

export const purchaseOpsModules = [
    {
        num: "01",
        title: "Purchase Operations Fundamentals",
        description: "Before processing a single purchase order, understand how day-to-day procurement operations actually run — the difference between strategic sourcing and operational execution.",
        tags: [
            "Purchase Operations Overview",
            "Purchase Order Process",
            "Operational vs Strategic Procurement",
            "Purchase Terminology"
        ],
        techstack: {
            tools: "Procurement/ERP Basics (e.g. Odoo Purchase, Zoho Inventory)"
        }
    },
    {
        num: "02",
        title: "Purchase Order Management",
        description: "Learn to create, process, and track purchase orders accurately — the operational backbone of any purchasing function. You'll follow a PO from request through approval to invoice matching, so nothing slips through untracked.",
        tags: [
            "PO Creation & Processing",
            "Order Tracking",
            "Approval Workflows",
            "Documentation & Record-Keeping"
        ],
        techstack: {
            tools: "Procurement/ERP Basics (e.g. Odoo Purchase, Zoho Inventory)"
        }
    },
    {
        num: "03",
        title: "Inventory Planning & Stock Management",
        description: "Understand how purchasing and inventory connect — reorder points, safety stock, and avoiding both stockouts and overstock that quietly cost the business money.",
        tags: [
            "Inventory Planning Basics",
            "Reorder Point Calculation",
            "Safety Stock Management",
            "Demand Forecasting Basics"
        ],
        techstack: {
            tools: "Inventory Dashboards · Excel/Google Sheets"
        }
    },
    {
        num: "04",
        title: "Vendor Coordination & Delivery Tracking",
        description: "Learn to coordinate with vendors on delivery timelines and handle the operational back-and-forth of orders, delays, and discrepancies.",
        tags: [
            "Delivery Coordination",
            "Handling Order Discrepancies",
            "Vendor Communication",
            "Quality Check Basics on Receipt"
        ],
        techstack: {
            tools: "Vendor Communication Logs · Delivery Tracking Sheets"
        }
    },
    {
        num: "05",
        title: "Inventory & Purchase Reporting",
        description: "Learn to track and report on purchasing and inventory metrics that operations managers and leadership actually check regularly.",
        tags: [
            "Inventory Turnover Metrics",
            "Purchase Spend Reporting",
            "Stock Level Dashboards",
            "Operational KPI Tracking"
        ],
        techstack: {
            tools: "Google Sheets · Inventory Dashboards"
        }
    },
    {
        num: "06",
        title: "Purchase Operations Capstone, Internship & Portfolio",
        description: "Apply everything into running a full purchase-to-inventory cycle for a real or simulated business, complete a guided internship, and leave with a documented case study for interviews.",
        tags: [
            "Capstone Purchase Operations Project",
            "Inventory Coordination Case Study",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Procurement/ERP Basics (e.g. Odoo Purchase) · Portfolio Documentation"
        }
    }
];

export const curriculumTracks = [
    {
        title: "Strategic Sourcing & Vendor Management Track",
        path: "strategic-sourcing",
        modules: strategicSourcingModules
    },
    {
        title: "Purchase Operations & Inventory Coordination Track",
        path: "purchase-ops",
        modules: purchaseOpsModules
    }
];

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
            usPrefix: "Working purchase managers from ",
            usHighlight: "real companies",
            usSuffix: "",
        },
        {
            id: "style",
            label: "Learning Style",
            other: "Recorded videos, textbook case studies",
            usPrefix: "",
            usHighlight: "100% hands-on",
            usSuffix: ", live negotiation & inventory practice",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            other: "Certificate recruiters ignore",
            usPrefix: "Real sourcing & operations case studies ",
            usHighlight: "on your portfolio",
            usSuffix: "",
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
    titlePrefix: "What Purchase Managers",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior Purchase Executive",
            location: "Rajkot",
            salary: "₹2 – ₹3.5 LPA",
            badge: "Entry Level",
        },
        {
            title: "Purchase Executive / Inventory Coordinator",
            location: "Ahmedabad / Surat",
            salary: "₹3 – ₹5 LPA",
            badge: "Early Career",
        },
        {
            title: "Purchase Manager",
            location: "Gujarat / Remote",
            salary: "₹5 – ₹8 LPA",
            badge: "Mid-Level",
        },
        {
            title: "Senior Purchase Manager",
            location: "PAN India / Remote",
            salary: "₹8 – ₹13 LPA",
            badge: "Mid-Level",
        },
        {
            title: "Procurement Head / Director",
            location: "PAN India",
            salary: "₹15 – ₹22 LPA",
            badge: "Experienced",
        }
    ],
};

/**
 * 8. Inside Our Classroom (replaces "A Glance at yesterday's Class")
 */
export const meetingGlanceSectionData = {
    titlePrefix: "Inside a Purchase Manager Batch",
    titleSuffix: "— Rajkot Studio, Live for Ahmedabad Students",
    meetings: [
        {
            heading: "Live Negotiation Simulations",
            subheading: "Students run real vendor negotiation role-plays during class, with mentors giving feedback on pricing and terms right after.",
        },
        {
            heading: "Mentor-Led Case Reviews",
            subheading: "Working purchase managers review your sourcing decisions and purchase orders every week for what would actually hold up in a real procurement audit.",
        },
        {
            heading: "Small Batch, Real Attention",
            subheading: "If your reorder point calculation doesn't account for lead time properly, someone can actually sit with you and fix the math.",
        }
    ]
};

export const meetingVideoData = {
    titlePrefix: "Inside a Purchase Manager Batch",
    titleSuffix: "— Rajkot Studio, Live for Ahmedabad Students",
    videoUrl: "",
};

/**
 * 9. Explore Career Opportunities
 */
export const careerOpportunitiesData = {
    titleNormal: "Explore",
    titleItalic: "Career Opportunities",
    mernTitle: "Strategic Sourcing & Vendor Management Track",
    javaTitle: "Purchase Operations & Inventory Coordination Track",
    mernRoles: [
        "Purchase Manager",
        "Procurement Manager",
        "Sourcing Specialist",
        "Vendor Relationship Manager"
    ],
    javaRoles: [
        "Purchase Executive",
        "Inventory Coordinator",
        "Procurement Operations Associate",
        "Supply Chain Coordinator"
    ],
};

/**
 * 10. Industries That Hire
 */
export const industriesSectionData = {
    titleNormal: "Industries That Hire",
    titleItalic: "in India",
    description: "Purchase management and procurement skills are critical across leading sectors in Gujarat and PAN India.",
    industries: [
        {
            title: "Manufacturing",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Retail & E-commerce",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp"
        },
        {
            title: "FMCG",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/fintech.webp"
        },
        {
            title: "Construction & Real Estate",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Automotive",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Textiles",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp"
        }
    ],
};

/**
 * 11. Alumni Testimonials
 */
export const testimonialsSectionData = {
    titleNormal: "Verified Career Transitions Hear Directly",
    titleParent: "from",
    titleItalic: "Our Alumni",
    testimonials: [
        {
            id: 1,
            text: "I assumed purchase management was just approving orders. The negotiation practice changed that — I actually got a vendor to lower their price in a mock negotiation, and used the same technique in my first week on the job.",
            name: "Bhavya Solanki",
            title: "Purchase Executive (Batch Apr 2026)",
            image: "/Home Page/Trust/1.webp"
        },
        {
            id: 2,
            text: "The inventory planning module made reorder points finally make sense — I used to just guess how much stock to keep. Now I can actually calculate it properly.",
            name: "Om Prajapati",
            title: "Inventory Coordinator (Batch Oct 2025)",
            image: "/2.webp"
        },
        {
            id: 3,
            text: "Vendor performance tracking was the part I didn't expect to matter this much — knowing how to spot a supplier risk early instead of after a shipment gets delayed made a real difference in my interview.",
            name: "Foram Desai",
            title: "Purchase Manager (Batch Jul 2026)",
            image: "/3.webp"
        }
    ]
};

/**
 * 12. Placement & Curriculum FAQ
 */
export const faqSectionData = {
    titleNormal: "Placement & Curriculum",
    titleItalic: "FAQ",
    faqs: [
        {
            id: 1,
            question: "Is this course suitable for complete beginners?",
            answer: "Yes. The course starts from purchase management fundamentals, assuming no prior experience, before splitting into your chosen Strategic Sourcing or Purchase Operations track."
        },
        {
            id: 2,
            question: "Do you provide job placement support?",
            answer: "Yes. Placement support includes resume building, mock interviews, and direct referrals through 300+ hiring partners actively looking for purchase management talent across Rajkot, Ahmedabad, and Gujarat."
        },
        {
            id: 3,
            question: "Which track should I choose — Strategic Sourcing, or Purchase Operations & Inventory Coordination?",
            answer: "Choose Strategic Sourcing & Vendor Management if you want to focus on finding vendors and negotiating deals. Choose Purchase Operations & Inventory Coordination if you want to focus on running the day-to-day purchasing and stock management function."
        },
        {
            id: 4,
            question: "Do I need a commerce or supply chain background to join this course?",
            answer: "No. The course starts from procurement fundamentals assuming no prior background, though basic comfort with numbers helps with the budgeting and inventory modules."
        },
        {
            id: 5,
            question: "How long is the Purchase Manager course at Alphabit Skill?",
            answer: "The course runs 3 to 4 months, with flexible batch timing and No Cost EMI payment options."
        },
        {
            id: 6,
            question: "What certification do I receive after completing the course?",
            answer: "You receive a government-recognised (NSDC), industry-ready certification validating your purchase management skills in your chosen track."
        },
        {
            id: 7,
            question: "Is this Purchase Manager course available in Rajkot and Ahmedabad, or only online?",
            answer: "It runs offline at our Rajkot studio, live online for students in Ahmedabad, and online more broadly for students across Gujarat and beyond — all with the same mentor-led, hands-on structure."
        }
    ]
};

/**
 * 13. Final CTA
 */
export const ctaSectionData = {
    line1Normal: "Master",
    line1Italic: "Purchase Management",
    line1Suffix: "— Apply Today and",
    line2Normal: "Start Building",
    line2Italic: "Supply Chain Mastery",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};
