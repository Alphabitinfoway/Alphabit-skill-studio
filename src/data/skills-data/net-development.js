// ==============================================================================
// .NET Development - Master Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

/**
 * 1. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: ".NET",
    titleSuffix: "Development",
    highlights: [
        "NSDC-Recognised Certification",
        "300+ Active Hiring Partners",
        "Rajkot, Gujarat"
    ],
    description: "<strong>.NET Development Course in Rajkot & Ahmedabad</strong>. TCS, Infosys, and Wipro interviews don't test \"Hello World\" in C#. They test whether you understand ASP.NET Core, Entity Framework, and SQL Server well enough to design a real backend. This course builds exactly that, taught by working .NET developers. Choose backend-only or add Blazor/Angular for full stack, and leave with deployed APIs on GitHub.",
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
        {
            label: "200+ Students Trained"
        },
        {
            label: "10 Years Industry Experience"
        },
        {
            label: "300+ Hiring Partners"
        },
        {
            label: "100% Placement Assistance"
        }
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
    titleItalic: ".NET Development",
    titleSuffix: "Course",
    items: [
        "7 Modules — C# fundamentals to enterprise deployment",
        "4+ industry-grade live .NET projects, not toy exercises",
        "GitHub portfolio with deployed, working applications",
        "Small batch sizes for personal mentor attention",
        "Weekly code reviews by working .NET developers",
        "Resume, LinkedIn, and mock interview prep",
        "NSDC-recognised government certification",
        "No Cost EMI — flexible fee structure",
        "Weekend & weekday batch options"
    ],
};

/**
 * 4. Curriculum Section Data (.NET Backend Development & .NET Full Stack Development Tracks)
 */
export const netBackendModules = [
    {
        num: "01",
        title: "C# Fundamentals for Backend Development",
        description: "Core syntax, environment setup, and workflow with a backend-first lens — the foundation every server-side .NET role builds on, taught the way you'll actually use it, not as isolated syntax drills.",
        tags: [
            "Core Syntax",
            "Environment Setup",
            "OOP Concepts",
            "Exception Handling"
        ],
        techstack: {
            language: "C#",
            tools: "Visual Studio • .NET SDK"
        }
    },
    {
        num: "02",
        title: "OOP, Collections & Data Structures for APIs",
        description: "C#'s object-oriented principles and collections, covered in the depth every backend interview and real API codebase actually relies on — not the surface-level version most courses stop at.",
        tags: [
            "OOP Principles",
            "Collections & Generics",
            "LINQ Basics",
            "Delegates & Events"
        ],
        techstack: {
            language: "C#",
            tools: "Visual Studio • Git"
        }
    },
    {
        num: "03",
        title: "ASP.NET Core & REST API Development",
        description: "Build backend web APIs using ASP.NET Core — the framework most enterprise and service-based companies in India hire for, focused purely on server-side logic.",
        tags: [
            "ASP.NET Core Setup",
            "MVC Architecture",
            "REST API Development",
            "Dependency Injection"
        ],
        techstack: {
            framework: "ASP.NET Core",
            tools: "Visual Studio • Postman"
        }
    },
    {
        num: "04",
        title: "Entity Framework & SQL Server Database Design",
        description: "Learn ORM-based database management with Entity Framework, plus relational database design using SQL Server — standard practice at enterprise IT firms.",
        tags: [
            "Entity Framework Core",
            "Code-First & DB-First Approaches",
            "SQL Server Queries",
            "Database Design Principles"
        ],
        techstack: {
            orm: "Entity Framework Core",
            database: "SQL Server"
        }
    },
    {
        num: "05",
        title: "API Authentication & Enterprise Security",
        description: "Learn enterprise-grade security practices — ASP.NET Identity, JWT authentication, and role-based access control used to secure backend systems across large organizations.",
        tags: [
            "ASP.NET Identity",
            "JWT Authentication",
            "Role-Based Access Control",
            "Secure API Practices"
        ],
        techstack: {
            framework: "ASP.NET Core Identity",
            tools: "Postman"
        }
    },
    {
        num: "06",
        title: "Microservices Architecture & Cloud Deployment",
        description: "Get introduced to microservices architecture and Microsoft Azure fundamentals — the direction most large-scale enterprise backend systems are moving toward.",
        tags: [
            "Microservices Fundamentals",
            "Azure Basics",
            "API Gateway Concepts",
            "Service Communication"
        ],
        techstack: {
            platform: "Microsoft Azure Basics",
            framework: "ASP.NET Core"
        }
    },
    {
        num: "07",
        title: "Backend Capstone Project, Internship & Portfolio",
        description: "Apply everything into a full backend/API capstone project, complete a guided internship, and build a portfolio of deployed, documented APIs ready for interviews.",
        tags: [
            "Git & GitHub",
            "Backend Deployment",
            "Capstone API Build",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Git • GitHub",
            platform: "Azure App Service Basics"
        }
    }
];

export const netFullStackModules = [
    {
        num: "01",
        title: "C# Fundamentals for Full Stack Development",
        description: "Master C#'s core syntax, environment setup, and workflow with an eye toward building complete applications — not just APIs, but the systems that power a real frontend too.",
        tags: [
            "Core Syntax",
            "Environment Setup",
            "OOP Concepts",
            "Exception Handling"
        ],
        techstack: {
            language: "C#",
            tools: "Visual Studio • .NET SDK"
        }
    },
    {
        num: "02",
        title: "OOP & Application Architecture Fundamentals",
        description: "Learn C#'s object-oriented principles and how they translate into structuring a full application — from backend services to how data flows to your frontend.",
        tags: [
            "OOP Principles",
            "Collections & Generics",
            "LINQ Basics",
            "Application Architecture Patterns"
        ],
        techstack: {
            language: "C#",
            tools: "Visual Studio • Git"
        }
    },
    {
        num: "03",
        title: "ASP.NET Core APIs for Frontend Consumption",
        description: "Build the API layer your frontend will run on — using ASP.NET Core to create endpoints designed from the start to be consumed by a Blazor or Angular interface, not just tested in isolation.",
        tags: [
            "ASP.NET Core Setup",
            "REST API Design for Frontend Consumption",
            "CORS & Cross-Origin Requests",
            "Dependency Injection"
        ],
        techstack: {
            framework: "ASP.NET Core",
            tools: "Visual Studio • Postman"
        }
    },
    {
        num: "04",
        title: "Entity Framework & Full Application Data Modeling",
        description: "Learn ORM-based database management with Entity Framework, designing your data models to serve both backend logic and frontend display needs.",
        tags: [
            "Entity Framework Core",
            "Code-First & DB-First Approaches",
            "SQL Server Queries",
            "Data Modeling for Full Stack Apps"
        ],
        techstack: {
            orm: "Entity Framework Core",
            database: "SQL Server"
        }
    },
    {
        num: "05",
        title: "Frontend Integration with Blazor or Angular",
        description: "Connect your .NET backend to a modern frontend using Blazor or Angular, so you can build complete end-to-end enterprise applications rather than just APIs.",
        tags: [
            "Frontend-Backend Integration",
            "Component Basics (Blazor/Angular)",
            "API Consumption",
            "State Handling Basics"
        ],
        techstack: {
            frontend: "Blazor / Angular",
            tools: "Visual Studio Code"
        }
    },
    {
        num: "06",
        title: "End-to-End Authentication & Security",
        description: "Learn enterprise-grade security practices across your full application — ASP.NET Identity, JWT authentication, and role-based access control that protects both backend and frontend layers.",
        tags: [
            "ASP.NET Identity",
            "JWT Authentication",
            "Role-Based Access Control",
            "Secure Frontend-Backend Communication"
        ],
        techstack: {
            framework: "ASP.NET Core Identity",
            tools: "Postman"
        }
    },
    {
        num: "07",
        title: "Microservices, Cloud & Scalable Architecture",
        description: "Get introduced to microservices architecture and Microsoft Azure fundamentals as they apply to full end-to-end applications, not just backend services.",
        tags: [
            "Microservices Fundamentals",
            "Azure Basics",
            "API Gateway Concepts",
            "Full Stack Service Communication"
        ],
        techstack: {
            platform: "Microsoft Azure Basics",
            framework: "ASP.NET Core"
        }
    },
    {
        num: "08",
        title: "Full Stack Capstone Project, Internship & Portfolio",
        description: "Apply everything into a full end-to-end enterprise application capstone project, complete a guided internship, and build a portfolio showcasing complete applications, not just APIs.",
        tags: [
            "Git & GitHub",
            "Full Application Deployment",
            "Capstone Project Build",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Git • GitHub",
            platform: "Azure App Service Basics"
        }
    }
];

export const curriculumTracks = [
    {
        title: ".NET Backend Development Track",
        path: "net-backend",
        modules: netBackendModules
    },
    {
        title: ".NET Full Stack Development Track",
        path: "net-fullstack",
        modules: netFullStackModules
    }
];

export const mernModules = netBackendModules;
export const javaModules = netFullStackModules;

/**
 * 5. Comparison Section Data
 */
export const comparisonSectionData = {
    titleNormal: "Why Students Choose Our ",
    titleItalic: "Training Studio",
    categories: [
        {
            id: "mentors",
            label: "Mentors",
            other: "Academics reading from slides",
            usPrefix: "Working .NET developers from ",
            usHighlight: "IT companies & startups",
            usSuffix: "",
        },
        {
            id: "style",
            label: "Learning Style",
            other: "Recorded videos, copied code",
            usPrefix: "",
            usHighlight: "100% hands-on",
            usSuffix: ", live, mentor-guided sessions",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            other: "Certificate recruiters ignore",
            usPrefix: "",
            usHighlight: "Live deployed projects",
            usSuffix: " on your GitHub",
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
            usPrefix: "Guided .NET project internship, ",
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
        },
    ]
};

/**
 * 6. Earnings Section Data
 */
export const earningsSectionData = {
    titlePrefix: "What .NET Developers",
    titleItalic: "Earn",
    titleSuffix: "After Training",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior .NET Developer",
            location: "Gujarat / Remote",
            salary: "₹3 – ₹5 LPA",
            badge: "Entry Level",
            image: "/skill/ITSkills/ror_odoo_golang.webp",
        },
        {
            title: ".NET Backend Developer",
            location: "Ahmedabad / Remote",
            salary: "₹5 – ₹8 LPA",
            badge: "Early Career",
            image: "/skill/ITSkills/ror_odoo_golang.webp",
        },
        {
            title: "ASP.NET Core Developer",
            location: "Gujarat (Enterprise)",
            salary: "₹6 – ₹9 LPA",
            badge: "High Demand",
            image: "/skill/ITSkills/ror_odoo_golang.webp",
        },
        {
            title: ".NET Full Stack Developer",
            location: "PAN India / Remote",
            salary: "₹6 – ₹10 LPA",
            badge: "Mid-Level",
            image: "/skill/ITSkills/fullstackdevelopment.webp",
        },
        {
            title: ".NET Microservices Developer",
            location: "PAN India / Remote",
            salary: "₹8 – ₹13 LPA",
            badge: "Experienced",
            image: "/skill/ITSkills/ror_odoo_golang.webp",
        },
        {
            title: "Senior .NET Engineer",
            location: "PAN India / Remote",
            salary: "₹8 – ₹16 LPA",
            badge: "Experienced",
            image: "/skill/ITSkills/fullstackdevelopment.webp",
        }
    ],
};

/**
 * 7. Meetings Glance Carousel Data ("Inside Our Classroom")
 */
export const meetingGlanceSectionData = {
    titlePrefix: "Inside Our",
    titleSuffix: "Classroom",
    meetings: [
        {
            heading: "Live Backend Coding Sessions",
            subheading: "Every class is hands-on. Students write and run real C# and ASP.NET Core code alongside the mentor in real time — nobody's just watching slides go by.",
        },
        {
            heading: "Mentor-Led Code Reviews",
            subheading: "Working .NET developers review your code every week and guide you toward enterprise-standard practices, the kind that actually hold up in a code review at a real company.",
        },
        {
            heading: "Small Batch, Real Attention",
            subheading: "Batches stay small on purpose. If your Entity Framework migrations are throwing an error at 9 PM before an assignment is due, someone can actually help you figure out why.",
        }
    ]
};

export const meetingVideoData = {
    titlePrefix: "Inside Our",
    titleSuffix: "Classroom",
    videoUrl: "",
};

/**
 * 8. Career Opportunities Data
 */
export const careerOpportunitiesData = {
    titleNormal: "Explore",
    titleItalic: "Career Opportunities",
    mernTitle: "Core Career Track",
    javaTitle: "",
    mernRoles: [
        "Junior .NET Developer",
        "ASP.NET Core Developer",
        ".NET Backend Developer",
        ".NET Microservices Developer",
        "Enterprise Application Developer",
        "Freelance .NET Consultant"
    ],
    javaRoles: [],
};

/**
 * 9. Industries Section Data
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
            title: "Banking & Insurance",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/fintech.webp"
        },
        {
            title: "Fintech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/fintech.webp"
        },
        {
            title: "Government IT",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/goverment-it.webp"
        },
        {
            title: "Healthcare Tech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/healthcaretech.webp"
        },
        {
            title: "E-commerce",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp"
        },
        {
            title: "SaaS & Enterprise Software",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/manufacturingSaaS.webp"
        }
    ],
};

export const industriesData = industriesSectionData.industries;

/**
 * 10. FAQ Section Data
 */
export const faqSectionData = {
    titleNormal: "Placement & Curriculum",
    titleItalic: "FAQ",
    faqs: [
        {
            id: 1,
            question: "Is this .NET course suitable for complete beginners?",
            answer: "Yes. The course starts from C# fundamentals, assuming no prior programming experience, before moving into ASP.NET Core, Entity Framework, and enterprise application development."
        },
        {
            id: 2,
            question: "Do you provide job placement support after this course?",
            answer: "Yes. Placement support includes resume building, mock interviews, and direct referrals through 300+ hiring partners actively looking for .NET developers."
        },
        {
            id: 3,
            question: "Do I need prior programming experience to join a .NET course in Rajkot?",
            answer: "No. The course starts from Core C# fundamentals before moving into ASP.NET Core, Entity Framework, and enterprise development."
        },
        {
            id: 4,
            question: "How long is the .NET Development course at Alphabit Skill?",
            answer: "The course runs 4 to 6 months, with both weekday and weekend batch options available."
        },
        {
            id: 5,
            question: "Will I work on real projects, or is this mostly theory?",
            answer: "You'll work on real projects. The course includes 4+ live backend and full stack projects using ASP.NET Core and Entity Framework, deployed and added to your GitHub portfolio."
        },
        {
            id: 6,
            question: "What certification do I receive after completing the course?",
            answer: "You receive an NSDC-recognised government certification, validated by national skill development authorities and recognised by employers across India."
        },
        {
            id: 7,
            question: "Is .NET still in demand compared to newer stacks like MERN?",
            answer: "Yes. .NET remains the standard for banking, insurance, government, and large enterprise systems across India, where security, stability, and long-term support matter more than using the newest framework."
        },
        {
            id: 8,
            question: "Which track should I choose — .NET Backend, or .NET Full Stack Development?",
            answer: "Choose .NET Backend if you want to specialize deep in server-side systems for enterprise and government IT roles. Choose .NET Full Stack if you want to own complete applications end to end using Blazor or Angular alongside your ASP.NET Core backend."
        }
    ]
};

export const faqData = faqSectionData.faqs;

/**
 * 11. Choose Your Track Data
 */
export const trackSelectorData = {
    title: "Choose Your Track",
    description: "Not every student has the same career goal. Choose the track that matches the job market you want to enter.",
    tracks: [
        {
            title: ".NET Backend Development Track",
            description: "Build backend systems and APIs with C#, ASP.NET Core, Entity Framework, and SQL Server — the core skill set enterprise IT companies and service-based firms hire specifically for.",
            bestFor: "Enterprise IT companies · Service-based firms · Government IT",
            idealIf: "Work at TCS/Infosys/Wipro-level firms · Build secure backend systems · Go deep on enterprise backend architecture"
        },
        {
            title: ".NET Full Stack Development Track",
            description: "Build complete applications with C#, ASP.NET Core, Entity Framework, SQL Server, and a frontend framework (Blazor or Angular) — for developers who want to own the entire application, not just the backend.",
            bestFor: "Enterprise product teams · Full stack enterprise roles · Freelance .NET developers",
            idealIf: "Build end-to-end enterprise applications · Work across both backend and frontend in .NET environments · Freelance as a full stack .NET developer"
        }
    ]
};

/**
 * 12. Testimonials Section Data
 */
export const testimonialsSectionData = {
    titleNormal: "Verified Career Transitions",
    titleParent: "Hear Directly from",
    titleItalic: "Deployed Alumni",
    testimonials: [
        {
            id: 1,
            text: "I had no backend experience before this course. Within 4 months, I was building REST APIs with ASP.NET Core and had 3 deployed projects on my GitHub — that's what got my first interview call.",
            name: "Reet Mehta",
            title: ".NET Backend Developer at a Rajkot IT firm, Batch October 2025",
            image: "/Home Page/Trust/1.webp"
        },
        {
            id: 2,
            text: "I'd applied to service-based companies before without luck. The mentors here were working .NET developers, and they taught exactly what enterprise interviews actually test — I had an offer within two months of finishing.",
            name: "Swara Puri",
            title: "ASP.NET Core Developer at an enterprise IT firm, Batch March 2026",
            image: "/2.webp"
        },
        {
            id: 3,
            text: "The Entity Framework and SQL Server module made the biggest difference for me — I finally understood database design well enough to talk through it confidently in interviews.",
            name: "Henny Chauhan",
            title: ".NET Developer at a Gujarat-based company, Batch July 2026",
            image: "/3.webp"
        }
    ]
};

/**
 * 13. Final CTA Section Data
 */
export const ctaSectionData = {
    line1Normal: "Access the",
    line1Italic: ".NET Development",
    line1Suffix: "Curriculum — Apply Today and",
    line2Normal: "Start Building",
    line2Italic: "Enterprise Applications",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};

/**
 * 14. Metadata Info
 */
export const metadata = {
    title: ".NET Development Course in Rajkot & Ahmedabad | Alphabit Skill",
    description: ".NET Development course in Rajkot & Ahmedabad — C#, ASP.NET Core & SQL Server for enterprise roles. Live projects, 300+ hiring partners. Book a free demo."
};
