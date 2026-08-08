// ==============================================================================
// Java Development - Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

export const heroSectionData = {
    titlePrefix: "Java",
    titleSuffix: "Development",
    highlights: [
        "NSDC-Recognised Certification",
        "300+ Active Hiring Partners",
        "Rajkot & Ahmedabad"
    ],
    description: "Java Development Course in Rajkot & Ahmedabad. Tired of Java institutes teaching the same syntax off a slide deck? Alphabit Skill takes you from Core Java and OOP through Spring Boot, REST APIs, and MySQL — mentors who write backend code for a living, not trainers reading from a PDF. Choose backend-only or full stack, and leave with deployed projects on GitHub, not just a certificate.",
    primaryCtaText: "Book Free Demo Class",
    secondaryCtaText: "Call Us",
    phoneNumber: "+919409207327",
    heroImage: "/subtract.webp",
};

export const projectStatsSectionData = {
    titleItalic: "Real-World Projects",
    titleAmpersand: "&",
    titleBold: "Industry Work",
    purpleImage: "/purplesubtract.webp",
    stats: [
        {
            label: "180+ Java Developers Trained"
        },
        {
            label: "45+ hrs Live Project Work"
        },
        {
            label: "6+ Real-World Applications Built"
        },
        {
            label: "100% Placement Assistance"
        }
    ],
    durationVal: "4–5 months",
    durationLabel: "Course Duration",
    hoursVal: "45+ hrs",
    hoursLabel: "Live project hours"
};

export const courseFeaturesData = {
    titleNormal: "About",
    titleItalic: "Our Modern",
    titleSuffix: "Java Development Course",
    items: [
        "Core Java, OOP, and data structures before any framework is introduced",
        "Hands-on Spring Boot work building REST APIs used in real, production-style projects",
        "Database design and integration with MySQL — not just theory",
        "Version control, debugging, and coding practices used on actual dev teams",
        "Weekly code reviews from mentors who build software professionally",
        "Government-recognised (NSDC), industry-ready certification",
        "No Cost EMI fee options"
    ],
};

export const coreJavaBackendModules = [
    {
        num: "01",
        title: "Java & OOP Foundations",
        description: "Start with the building blocks — variables, control flow, and object-oriented programming — the concepts every Java application, from a simple script to an enterprise system, is built on.",
        tags: [
            "Core Java Syntax",
            "OOP Principles",
            "Classes & Objects",
            "Exception Handling"
        ],
        techstack: {
            language: "Java (JDK 17+)",
            tools: "Eclipse / IntelliJ IDEA"
        }
    },
    {
        num: "02",
        title: "Data Structures & Collections",
        description: "Move from writing code that works to writing code that scales — arrays, collections, generics, and the logic behind choosing the right data structure for the job.",
        tags: [
            "Arrays & Strings",
            "Java Collections Framework",
            "Generics",
            "Algorithmic Thinking"
        ],
        techstack: {
            libraries: "java.util",
            tools: "IntelliJ IDEA"
        }
    },
    {
        num: "03",
        title: "Database Design & JDBC",
        description: "Learn to design relational databases and connect them to Java applications — the skill behind every data-driven backend, from inventory systems to booking platforms.",
        tags: [
            "Relational Database Design",
            "SQL Queries",
            "JDBC Connectivity",
            "CRUD Operations"
        ],
        techstack: {
            database: "MySQL",
            tools: "MySQL Workbench"
        }
    },
    {
        num: "04",
        title: "Spring Boot & REST API Development",
        description: "Build backend applications the way companies actually hire for — using Spring Boot to create REST APIs, handle requests, and structure real, maintainable projects.",
        tags: [
            "Spring Boot Fundamentals",
            "REST API Design",
            "Dependency Injection",
            "Request/Response Handling"
        ],
        techstack: {
            framework: "Spring Boot",
            tools: "Postman",
            buildTool: "Maven"
        }
    },
    {
        num: "05",
        title: "Testing, Security & Deployment",
        description: "Take a project from \"it runs on my machine\" to a secured, deployed application — the practical skills that separate a working backend developer from a classroom coder.",
        tags: [
            "Unit Testing (JUnit)",
            "API Security Basics",
            "Debugging",
            "Application Deployment"
        ],
        techstack: {
            tools: "JUnit • Git",
            security: "Spring Security Basics",
            platforms: "Render / AWS Basics"
        }
    },
    {
        num: "06",
        title: "Capstone Project, Internship & Portfolio",
        description: "Apply everything into a full backend capstone project, complete a guided internship, and leave with a deployed API and a GitHub portfolio ready for interviews.",
        tags: [
            "Capstone Project Build",
            "Code Review",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Git • GitHub",
            platform: "GitHub Pages"
        }
    }
];

export const javaFullStackModules = [
    {
        num: "01",
        title: "Java & OOP Foundations",
        description: "Start with the building blocks — variables, control flow, and object-oriented programming — the concepts every Java application, from a simple script to an enterprise system, is built on.",
        tags: [
            "Core Java Syntax",
            "OOP Principles",
            "Classes & Objects",
            "Exception Handling"
        ],
        techstack: {
            language: "Java (JDK 17+)",
            tools: "Eclipse / IntelliJ IDEA"
        }
    },
    {
        num: "02",
        title: "Database Design & Backend Basics",
        description: "Learn to design relational databases and build the server-side logic that powers real applications, using Java and SQL together.",
        tags: [
            "Relational Database Design",
            "SQL Queries",
            "JDBC Connectivity",
            "CRUD Operations"
        ],
        techstack: {
            database: "MySQL",
            tools: "MySQL Workbench"
        }
    },
    {
        num: "03",
        title: "Spring Boot & REST API Development",
        description: "Build the backend half of a full stack application — using Spring Boot to create REST APIs that a frontend can actually consume.",
        tags: [
            "Spring Boot Fundamentals",
            "REST API Design",
            "Dependency Injection",
            "Request/Response Handling"
        ],
        techstack: {
            framework: "Spring Boot",
            tools: "Postman",
            buildTool: "Maven"
        }
    },
    {
        num: "04",
        title: "Frontend Fundamentals",
        description: "Learn to build the interface users actually see and interact with — structured markup, styling, and interactivity that connects to your Java backend.",
        tags: [
            "HTML & CSS",
            "JavaScript Basics",
            "DOM Manipulation",
            "API Integration (Fetch/Axios)"
        ],
        techstack: {
            languages: "HTML5 • CSS3 • JavaScript",
            tools: "VS Code"
        }
    },
    {
        num: "05",
        title: "Connecting Frontend & Backend",
        description: "Bring both halves together — call your Spring Boot APIs from a frontend interface and handle real data flow end to end, the way a full stack role actually works.",
        tags: [
            "Full Stack Integration",
            "React Basics",
            "State & Data Handling",
            "Deployment"
        ],
        techstack: {
            framework: "React (Basics)",
            platforms: "Vercel / Render"
        }
    },
    {
        num: "06",
        title: "Capstone Project, Internship & Portfolio",
        description: "Apply everything into a full stack capstone project, complete a guided internship, and leave with a deployed application and a GitHub portfolio ready for interviews.",
        tags: [
            "Capstone Project Build",
            "Code Review",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Git • GitHub",
            platform: "GitHub Pages"
        }
    }
];

export const mernModules = coreJavaBackendModules;
export const javaModules = javaFullStackModules;

export const curriculumTracks = [
    {
        title: "Core Java & Backend Development Track",
        path: "core-java-backend",
        modules: coreJavaBackendModules
    },
    {
        title: "Java Full Stack Development Track",
        path: "java-full-stack",
        modules: javaFullStackModules
    }
];

export const comparisonSectionData = {
    titleNormal: "Why Students Choose Our ",
    titleItalic: "Java Training",
    categories: [
        {
            id: "mentors",
            label: "Mentors",
            other: "Academics reading from slides",
            usPrefix: "Working ",
            usHighlight: "Java/backend developers",
            usSuffix: " from real companies",
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
            usHighlight: "Live deployed Java projects",
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
            usPrefix: "",
            usHighlight: "Guided Java development internship",
            usSuffix: ", online & offline",
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

export const earningsSectionData = {
    titlePrefix: "What Java Developers",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior Java Developer",
            location: "Rajkot",
            salary: "₹3 – ₹5 LPA",
            badge: "Entry Level",
            image: "/skill/ITskills/ror_odoo_golang.webp",
        },
        {
            title: "Java Developer",
            location: "Ahmedabad / Surat",
            salary: "₹4 – ₹7.5 LPA",
            badge: "Early Career",
            image: "/skill/ITSkills/fullstackdevelopment.webp",
        },
        {
            title: "Backend Developer (Spring Boot)",
            location: "Gujarat (Enterprise)",
            salary: "₹5 – ₹9 LPA",
            badge: "High Demand",
            image: "/skill/ITskills/databasemanagement.webp",
        },
        {
            title: "Java Full Stack Developer",
            location: "Remote / PAN India",
            salary: "₹5 – ₹10 LPA",
            badge: "Backend + Frontend",
            image: "/skill/ITSkills/webdevelopment.webp",
        },
        {
            title: "Software Engineer (Java)",
            location: "Ahmedabad / Remote",
            salary: "₹7 – ₹12 LPA",
            badge: "Experienced",
            image: "/skill/ITSkills/fullstackdevelopment.webp",
        },
        {
            title: "Senior Java Developer (2–3 yrs exp)",
            location: "PAN India",
            salary: "₹9 – ₹16 LPA",
            badge: "Experienced",
            image: "/skill/ITskills/ror_odoo_golang.webp",
        }
    ],
};

export const earningsJobsData = earningsSectionData.jobs;

export const careerOpportunitiesData = {
    titleNormal: "Explore",
    titleItalic: "Career Opportunities",
    mernTitle: "",
    javaTitle: "",
    mernRoles: [
        "Java Developer",
        "Backend Developer",
        "Java Full Stack Developer",
        "Software Engineer (Java)",
        "API Developer",
        "Freelance Java Developer"
    ],
    javaRoles: [],
};

export const industriesSectionData = {
    titleNormal: "Industries that",
    titleItalic: "Hire",
    description: "The skills you gain are relevant across multiple industries actively hiring Java developers.",
    industries: [
        {
            title: "IT Services",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Fintech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/fintech.webp"
        },
        {
            title: "E-commerce",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp"
        },
        {
            title: "Ed-Tech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/ed-tech.webp"
        },
        {
            title: "Healthcare Tech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/healthcaretech.webp"
        },
        {
            title: "SaaS & Product Companies",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/manufacturingSaaS.webp"
        },
        {
            title: "Government IT",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/goverment-it.webp"
        },
        {
            title: "Banking & Insurance",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/fintech.webp"
        }
    ],
};

export const industriesData = industriesSectionData.industries;

export const meetingGlanceSectionData = {
    titlePrefix: "A Glance",
    titleSuffix: "at yesterday's Class",
    meetings: [
        {
            heading: "Live Mentor Sessions",
            subheading: "Interactive daily reviews and coding challenges.",
        },
        {
            heading: "Doubt Solving",
            subheading: "Instant error debugging with real-time feedback.",
        }
    ]
};

export const meetingVideoData = {
    titlePrefix: "A Glance",
    titleSuffix: "at yesterday's Meeting",
    videoUrl: "",
};

export const faqSectionData = {
    titleNormal: "Placement & Curriculum",
    titleItalic: "FAQ",
    faqs: [
        {
            id: 1,
            question: "Is this course suitable for complete beginners?",
            answer: "Yes. The course starts from Java fundamentals and object-oriented programming, assuming no prior coding experience, before moving into databases, Spring Boot, and API development."
        },
        {
            id: 2,
            question: "Do you provide job placement support?",
            answer: "Yes — resume building, mock interviews, and direct referrals through our hiring partners actively looking for Java and backend development talent."
        },
        {
            id: 3,
            question: "Do I need a programming background to join?",
            answer: "No. Basic computer literacy is enough to start — the course builds your programming foundation from the ground up before introducing frameworks."
        },
        {
            id: 4,
            question: "What will I actually be able to build by the end of the course?",
            answer: "You'll build and deploy a full Java application with a Spring Boot backend and a connected MySQL database — a project you can walk recruiters through, not just describe."
        },
        {
            id: 5,
            question: "What is the course duration?",
            answer: "4–5 months, with flexible batch timing and No Cost EMI payment options."
        },
        {
            id: 6,
            question: "What certification do I receive?",
            answer: "A government-recognised, industry-ready certification validating your Java development skills."
        },
        {
            id: 7,
            question: "Is this only backend, or does it cover full stack?",
            answer: "Both — choose the track that fits your goal. The Core Java & Backend track focuses on Spring Boot, APIs, and databases. The Java Full Stack track adds HTML, CSS, JavaScript, and React basics on top of the same backend foundation."
        },
        {
            id: 8,
            question: "How is this different from a generic \"learn Java\" course?",
            answer: "This course is built around what companies actually hire for — real database design, API development with Spring Boot, testing, and deployment — not just Java syntax in isolation."
        },
        {
            id: 9,
            question: "Which track should I choose — Core Java & Backend, or Java Full Stack Development?",
            answer: "Choose Core Java & Backend if you want to specialize deep in server-side systems and enterprise roles. Choose Java Full Stack if you want to build and own complete applications end to end, which is what most startups and product companies are hiring for."
        }
    ]
};

export const trackSelectorData = {
    title: "Choose your track",
    description: "Not every student wants the same job. Pick the track that matches where you want to land.",
    tracks: [
        {
            title: "Core Java & Backend Development Track",
            description: "Build with Java, Spring Boot, and relational databases — the backend foundation enterprise IT companies and product companies hire for when they need someone who can own server-side systems and API development.",
            bestFor: "Enterprise IT companies · Product companies · Backend-focused roles",
            idealIf: "Work as a Java backend developer · Join an enterprise dev team · Go deep on server-side systems rather than wide across the stack"
        },
        {
            title: "Java Full Stack Development Track",
            description: "Build with Java, Spring Boot, and a modern frontend (HTML, CSS, JavaScript, React basics) — the end-to-end skill set startups and product companies look for when they want one developer who can take a feature from database to browser.",
            bestFor: "Startups · Product companies · Full stack roles",
            idealIf: "Build complete web applications on your own · Work at a fast-moving product startup · Add frontend skills on top of a Java backend foundation"
        }
    ]
};

export const testimonialsSectionData = {
    titleNormal: "Verified Career Transitions Hear Directly",
    titleParent: "from",
    titleItalic: "Deployed Alumni",
    testimonials: [
        {
            id: 1,
            text: "I came in only knowing basic programming logic. By the end, I was building REST APIs with Spring Boot and connecting them to a real database — that project is what got me through my first technical interview.",
            name: "Heer Lakhani",
            title: "Java Developer at a Gujarat-based IT firm, Batch January 2024",
            image: "/Home Page/Trust/1.webp"
        },
        {
            id: 2,
            text: "The weekly code reviews made the biggest difference. My mentor didn't just tell me if my code worked — he explained why the way I'd written it wouldn't scale, and how to fix it.",
            name: "Mantra Hirpara",
            title: "Backend Developer, Batch April 2026",
            image: "/2.webp"
        },
        {
            id: 3,
            text: "I'd tried learning Java on my own from YouTube twice before and gave up both times. Having a structured curriculum and a mentor to ask questions made it finally click.",
            name: "Aarav Sanghani",
            title: "Java Full Stack Developer, Batch October 2025",
            image: "/3.webp"
        }
    ]
};


export const ctaSectionData = {
    line1Normal: "Access the",
    line1Italic: "Java Development Curriculum",
    line1Suffix: "- Apply Today and",
    line2Normal: "Start Building",
    line2Italic: "Real Applications",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};

/**
 * 13. Metadata Info
 */
export const metadata = {
    title: "Java Development Course in Rajkot | Alphabit Infoway",
    description: "Java development course in Rajkot & Ahmedabad — Core Java, Spring Boot, REST APIs, MySQL. Live projects, 300+ hiring partners. Book a free demo class."
};
