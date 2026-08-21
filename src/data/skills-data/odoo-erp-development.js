// ==============================================================================
// Odoo ERP Development - Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

/**
 * 1. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: "Odoo ERP",
    titleSuffix: "Development",
    highlights: [
        "Rajkot, Ahmedabad, Gujarat",
        "NSDC-Recognised Certification",
        "300+ Hiring Partners"
    ],
    description: "<strong>Odoo ERP Development Course in Rajkot & Ahmedabad</strong>. Most \"Odoo\" courses show you Sales and Inventory clicks and call that ERP expertise. Real Odoo work is either configuring a business's actual processes correctly, or writing the Python and XML that makes Odoo do what it doesn't out of the box. Choose Functional Implementation or Technical Development, with mentors who've deployed Odoo for real companies.",
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
    titleItalic: "Odoo ERP Development",
    titleSuffix: "Course",
    items: [
        "Comprehensive modules from Odoo fundamentals to a live, working implementation or module",
        "Hands-on live projects — real business processes or real custom modules, not sandbox demos",
        "GitHub/portfolio with deployed, working Odoo instances or modules",
        "Small batch sizes for personalized mentor attention",
        "Weekly mentorship reviews from working Odoo professionals",
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
    description: "Odoo work splits into two fairly different jobs, and it's worth picking the one that matches where you want to end up — whether you're hiring into Rajkot, Ahmedabad, or beyond.",
    tracks: [
        {
            title: "Odoo Functional Consultant & Implementation Track",
            description: "Configure and implement Odoo's core apps — Sales, Inventory, Accounting, CRM, and Manufacturing — for real business processes, the skill set companies across Gujarat, including Rajkot and Ahmedabad, hire ERP consultants for when they're rolling out or customizing Odoo without writing code.",
            bestFor: "ERP consulting firms · Businesses implementing Odoo in-house · Non-coding backgrounds",
            idealIf: "Work as an Odoo Functional Consultant · Configure ERP systems for real businesses · Enter ERP consulting without a programming background"
        },
        {
            title: "Odoo Technical Development Track",
            description: "Build custom modules, automate workflows, and extend Odoo using Python, XML views, and Odoo's ORM — the skill set companies hire for when the out-of-the-box apps don't cover what their business actually needs.",
            bestFor: "Developers · Odoo implementation partners · Custom development roles",
            idealIf: "Work as an Odoo Developer · Build and customize ERP modules for clients · Combine Python development skills with a high-demand ERP specialization"
        }
    ]
};

/**
 * 5. Curriculum Modules (Functional Consultant + Technical Development Tracks)
 */
export const functionalModules = [
    {
        num: "01",
        title: "Odoo & ERP Fundamentals",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module1.webp",
        imageAlt: "Odoo ERP fundamentals and architecture training",
        description: "What an ERP system is actually solving for, and how Odoo's app structure and database model work under the hood — the context every later module assumes you already have.",
        tags: [
            "ERP Concepts",
            "Odoo Architecture Overview",
            "Apps & Modules Structure",
            "Odoo Editions (Community vs Enterprise)"
        ],
        techstack: {
            platform: "Odoo (Community)",
            tools: "Odoo.sh / Local Install"
        }
    },
    {
        num: "02",
        title: "Sales, CRM & Purchase Configuration",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module2.webp",
        imageAlt: "Odoo Sales CRM and Purchase configuration",
        description: "Configuring the apps most Odoo implementations start with — sales pipelines, quotations, CRM stages, and purchase workflows set up the way a real sales team would actually use them.",
        tags: [
            "Sales & Quotation Workflows",
            "CRM Pipeline Configuration",
            "Purchase Order Management",
            "Pricelists & Discounts"
        ],
        techstack: {
            apps: "Odoo Sales · CRM · Purchase"
        }
    },
    {
        num: "03",
        title: "Inventory & Manufacturing",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module3.webp",
        imageAlt: "Odoo Inventory and Manufacturing MRP training",
        description: "Setting up warehouse operations, stock moves, and manufacturing workflows — the module where a badly configured setting quietly costs a business real money in misplaced stock.",
        tags: [
            "Warehouse & Stock Management",
            "Inventory Valuation",
            "Manufacturing Orders (MRP)",
            "Multi-Warehouse Routing"
        ],
        techstack: {
            apps: "Odoo Inventory · Manufacturing (MRP)"
        }
    },
    {
        num: "04",
        title: "Accounting & Invoicing",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module4.webp",
        imageAlt: "Odoo Accounting and Invoicing financial setup",
        description: "Configuring Odoo Accounting for real financial workflows — invoicing, payments, and tax setup done correctly, since this is the module clients trust least until you prove it's set up right.",
        tags: [
            "Chart of Accounts Setup",
            "Invoicing & Payments",
            "Tax Configuration",
            "Financial Reporting Basics"
        ],
        techstack: {
            app: "Odoo Accounting"
        }
    },
    {
        num: "05",
        title: "Odoo Studio & No-Code Customization",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module5.webp",
        imageAlt: "Odoo Studio no-code customization training",
        description: "Extending Odoo without writing code — custom fields, views, and automated actions using Odoo Studio, the layer between pure configuration and full technical development.",
        tags: [
            "Odoo Studio Basics",
            "Custom Fields & Views",
            "Automated Actions",
            "Report Customization"
        ],
        techstack: {
            tool: "Odoo Studio"
        }
    },
    {
        num: "06",
        title: "Implementation Capstone, Internship & Portfolio",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module6.webp",
        imageAlt: "Odoo implementation capstone project and portfolio",
        description: "Everything comes together in a full Odoo implementation for a simulated business — multiple apps configured and connected, a guided internship, and a portfolio you can walk a client or interviewer through.",
        tags: [
            "Capstone Implementation Build",
            "Client Requirements Documentation",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Odoo.sh · Documentation Portfolio"
        }
    }
];

export const technicalModules = [
    {
        num: "01",
        title: "Odoo Framework & Python Fundamentals",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module1.webp",
        imageAlt: "Odoo framework and Python fundamentals development",
        description: "Python fundamentals taught specifically through Odoo's framework structure — models, fields, and the ORM patterns every custom module is built on, not generic Python exercises.",
        tags: [
            "Python Fundamentals",
            "Odoo ORM Basics",
            "Models & Fields",
            "Odoo Module Structure"
        ],
        techstack: {
            language: "Python",
            framework: "Odoo ORM",
            tools: "VS Code"
        }
    },
    {
        num: "02",
        title: "Building Custom Odoo Modules",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module2.webp",
        imageAlt: "Building custom Odoo modules from scratch",
        description: "Building a custom module from scratch — manifest files, model definitions, and business logic, the actual unit of work in almost every real Odoo development job.",
        tags: [
            "Module Manifest & Structure",
            "Custom Models",
            "Business Logic in Python",
            "Module Dependencies"
        ],
        techstack: {
            framework: "Odoo Development Framework"
        }
    },
    {
        num: "03",
        title: "Views, XML & UI Customization",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module3.webp",
        imageAlt: "Odoo XML views and UI customization",
        description: "Building the interface layer — form views, list views, and menus defined in XML, so a custom module doesn't just work, it looks and feels like it belongs in Odoo.",
        tags: [
            "XML View Architecture",
            "Form/List/Kanban Views",
            "Menus & Actions",
            "QWeb Templating Basics"
        ],
        techstack: {
            tools: "XML · QWeb"
        }
    },
    {
        num: "04",
        title: "Odoo ORM, Workflows & Automations",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module4.webp",
        imageAlt: "Odoo ORM workflows and automated actions",
        description: "Going deeper into the ORM — computed fields, constraints, and automated workflows, the layer that makes a module do something intelligent instead of just storing data.",
        tags: [
            "Computed Fields & Constraints",
            "Workflow Automation",
            "Server Actions",
            "Scheduled Actions (Cron Jobs)"
        ],
        techstack: {
            framework: "Odoo ORM · Automation Tools"
        }
    },
    {
        num: "05",
        title: "APIs, Integrations & Reporting",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module5.webp",
        imageAlt: "Odoo APIs third-party integrations and QWeb reports",
        description: "Connecting Odoo to external systems and building custom reports — the work that comes up in almost every real implementation once the basic modules are in place.",
        tags: [
            "Odoo External API (XML-RPC/JSON-RPC)",
            "Third-Party Integrations",
            "Custom Report Development (QWeb PDF)",
            "Data Import/Export"
        ],
        techstack: {
            tools: "Postman · QWeb Reports"
        }
    },
    {
        num: "06",
        title: "Development Capstone, Internship & Portfolio",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module6.webp",
        imageAlt: "Odoo development capstone project and GitHub portfolio",
        description: "Everything comes together in a full custom Odoo module built and deployed end to end, a guided internship, and a GitHub portfolio ready to show a development team.",
        tags: [
            "Capstone Module Build",
            "Code Review",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Git · GitHub",
            platform: "Odoo.sh"
        }
    }
];

export const curriculumTracks = [
    {
        title: "Odoo Functional Consultant & Implementation Track",
        path: "functional",
        modules: functionalModules
    },
    {
        title: "Odoo Technical Development Track",
        path: "technical",
        modules: technicalModules
    }
];

export const mernModules = functionalModules;
export const javaModules = technicalModules;

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
            usPrefix: "Working Odoo consultants and developers from ",
            usHighlight: "real implementations",
            usSuffix: "",
        },
        {
            id: "style",
            label: "Learning Style",
            other: "Recorded videos, copied configuration",
            usPrefix: "",
            usHighlight: "100% hands-on",
            usSuffix: ", live, mentor-guided sessions",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            other: "Certificate recruiters ignore",
            usPrefix: "Live deployed implementations or modules on ",
            usHighlight: "GitHub/Odoo.sh",
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
            id: "internship",
            label: "Internship",
            other: "Not included",
            usPrefix: "Guided Odoo project internship, ",
            usHighlight: "online & offline",
            usSuffix: "",
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
    titlePrefix: "What Odoo Professionals",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior Odoo Functional Consultant",
            location: "Rajkot",
            salary: "₹2.5 – ₹4.5 LPA",
            badge: "Entry Level",
            image: "/skill/ITSkills/ror_odoo_golang.webp",
        },
        {
            title: "Odoo Functional Consultant",
            location: "Ahmedabad / Surat",
            salary: "₹4 – ₹7 LPA",
            badge: "Early Career",
            image: "/skill/ITSkills/ror_odoo_golang.webp",
        },
        {
            title: "Odoo Developer (Entry)",
            location: "Gujarat / Remote",
            salary: "₹4.5 – ₹8 LPA",
            badge: "High Demand",
            image: "/skill/ITSkills/ror_odoo_golang.webp",
        },
        {
            title: "Odoo Developer (2–3 yrs exp)",
            location: "PAN India / Remote",
            salary: "₹7 – ₹12 LPA",
            badge: "Mid-Level",
            image: "/skill/ITSkills/ror_odoo_golang.webp",
        },
        {
            title: "Senior Odoo Developer",
            location: "PAN India / Remote",
            salary: "₹10 – ₹16 LPA",
            badge: "Experienced",
            image: "/skill/ITSkills/ror_odoo_golang.webp",
        },
        {
            title: "Odoo Implementation Lead",
            location: "PAN India",
            salary: "₹12 – ₹18 LPA",
            badge: "Experienced",
            image: "/skill/ITSkills/ror_odoo_golang.webp",
        }
    ],
};

export const earningsJobsData = earningsSectionData.jobs;

/**
 * 8. Inside Our Classroom (Glance Data)
 */
export const meetingGlanceSectionData = {
    titlePrefix: "Inside Our",
    titleSuffix: "Classroom",
    meetings: [
        {
            heading: "Live Build Sessions",
            subheading: "Every class is hands-on. Students configure real apps or write real module code alongside the mentor — nobody's just watching a recorded walkthrough.",
        },
        {
            heading: "Mentor-Led Reviews",
            subheading: "Working Odoo consultants and developers review your implementation or module every week and point out what would actually confuse a client or break in production.",
        },
        {
            heading: "Small Batch, Real Attention",
            subheading: "Batches stay small on purpose. If your custom field isn't showing up on a form view the night before a review, someone can actually sit with you and debug the XML.",
        }
    ]
};

export const meetingVideoData = {
    titlePrefix: "Inside Our",
    titleSuffix: "Classroom",
    videoUrl: "",
};

/**
 * 9. Career Opportunities Data
 */
export const careerOpportunitiesData = {
    titleNormal: "Explore",
    titleItalic: "Career Opportunities",
    mernTitle: "Functional Track",
    javaTitle: "Technical Track",
    mernRoles: [
        "Odoo Functional Consultant",
        "ERP Implementation Analyst",
        "Business Process Consultant",
        "Odoo Support Specialist",
        "CRM/Sales Configuration Specialist",
        "Freelance Odoo Consultant"
    ],
    javaRoles: [
        "Odoo Developer",
        "ERP Backend Developer",
        "Odoo Integration Developer",
        "Python Developer (ERP)",
        "Odoo Module Developer",
        "Freelance Odoo Developer"
    ],
};

/**
 * 10. Industries Section Data
 */
export const industriesSectionData = {
    titleNormal: "Industries That Hire",
    titleItalic: "in India",
    description: "The skills you gain are relevant across multiple industries actively hiring Odoo consultants and developers in Gujarat and across India.",
    industries: [
        { title: "Manufacturing", icon: "/skill/ITSkills/FullStackDevelopment/industriessection/manufacturingSaaS.webp" },
        { title: "Retail & E-commerce", icon: "/skill/ITSkills/FullStackDevelopment/industriessection/retail-tech.webp" },
        { title: "Distribution & Logistics", icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp" },
        { title: "Professional Services", icon: "/skill/ITSkills/FullStackDevelopment/industriessection/ed-tech.webp" },
        { title: "Healthcare", icon: "/skill/ITSkills/FullStackDevelopment/industriessection/healthcaretech.webp" },
        { title: "Construction & Real Estate", icon: "/skill/ITSkills/FullStackDevelopment/industriessection/goverment-it.webp" },
        { title: "IT Services & Consulting", icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp" },
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
            text: "I came from a business background with zero coding experience and assumed ERP work needed programming skills. Configuring a full sales-to-invoice workflow for a simulated company taught me otherwise — I could walk a client through it confidently in my first interview.",
            name: "Siya Nimavat",
            title: "Odoo Functional Consultant, Batch October 2025",
            track: "Functional Track",
            image: ""
        },
        {
            id: 2,
            text: "I knew Python before this course but had never touched Odoo's framework. Building a custom module from scratch — models, views, and business logic — made the ORM click in a way reading documentation alone never did.",
            name: "Sejal Patel",
            title: "Odoo Developer, Batch January 2026",
            track: "Technical Track",
            image: ""
        },
        {
            id: 3,
            text: "What surprised me was how much of real Odoo work is understanding a business's actual process, not just clicking through settings. That's the part this course actually teaches, and it's the part that got me hired.",
            name: "Krisha Pala",
            title: "Odoo Functional Consultant, Batch April 2026",
            track: "Functional Track",
            image: ""
        }
    ]
};

/**
 * 12. Placement & Curriculum FAQ Section Data
 */
export const faqSectionData = {
    titleNormal: "Placement & Curriculum",
    titleItalic: "FAQ",
    faqs: [
        {
            id: 1,
            question: "Is this Odoo ERP course suitable for complete beginners?",
            answer: "Yes. The course starts from ERP and Odoo fundamentals, assuming no prior experience, before splitting into your chosen Functional or Technical track."
        },
        {
            id: 2,
            question: "Do you provide job placement support after this course?",
            answer: "Yes. Placement support includes resume building, mock interviews, and direct referrals through 300+ hiring partners actively looking for Odoo talent across Rajkot, Ahmedabad, and Gujarat."
        },
        {
            id: 3,
            question: "Which track should I choose — Functional Consultant, or Technical Development?",
            answer: "Choose Functional Consultant & Implementation if you want to configure ERP systems for real businesses without writing code. Choose Technical Development if you're comfortable with or want to learn Python and want to build custom modules and integrations."
        },
        {
            id: 4,
            question: "Do I need a coding background to join this Odoo course in Rajkot or Ahmedabad?",
            answer: "Not for the Functional Consultant track — it's primarily configuration-based. The Technical Development track teaches Python and Odoo's framework from scratch, so prior coding experience helps but isn't required."
        },
        {
            id: 5,
            question: "Is this Odoo ERP course available in Rajkot and Ahmedabad, or only online?",
            answer: "It runs offline at our Rajkot studio, live online for students in Ahmedabad, and online more broadly for students across Gujarat and beyond — all with the same mentor-led, live-session structure."
        },
        {
            id: 6,
            question: "What is Odoo, and why is it worth specializing in over a general ERP course?",
            answer: "Odoo is a modular, open-source ERP platform used by businesses from small companies to large enterprises across sales, inventory, accounting, and manufacturing. Specializing in it, rather than generic ERP theory, matters because Odoo implementation and development are specific, in-demand skills that generic ERP courses don't actually teach hands-on."
        },
        {
            id: 7,
            question: "How long is the Odoo ERP Development course at Alphabit Skill?",
            answer: "The course runs 4 to 6 months, with flexible weekday and weekend batch options and No Cost EMI payment options."
        },
        {
            id: 8,
            question: "What certification do I receive after completing the course?",
            answer: "You receive a government-recognised (NSDC), industry-ready certification validating your Odoo functional or technical development skills, depending on your chosen track."
        },
        {
            id: 9,
            question: "What will I have to show recruiters by the end of the course?",
            answer: "A full simulated business implementation across multiple Odoo apps (Functional track), or a custom-built and deployed Odoo module on GitHub (Technical track) — something you can actually walk an interviewer through, not just a certificate."
        }
    ]
};

export const faqData = faqSectionData.faqs;

/**
 * 13. Final CTA Section Data
 */
export const ctaSectionData = {
    line1Normal: "Access the Odoo ERP Curriculum -",
    line1Italic: " Apply Today and",
    line1Suffix: "",
    line2Normal: "Start Building",
    line2Italic: "Real Implementations",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};

/**
 * 14. Metadata Info
 */
export const metadata = {
    title: "Odoo ERP Development Course in Rajkot & Ahmedabad | Alphabit Skill",
    description: "Odoo ERP course in Rajkot & Ahmedabad — Functional Implementation, or Technical Development tracks. Live projects, 300+ hiring partners. Book a demo."
};
