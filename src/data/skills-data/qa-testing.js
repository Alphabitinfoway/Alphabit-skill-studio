// ==============================================================================
// QA Testing Course - Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

/**
 * 1. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: "QA",
    titleSuffix: "Testing",
    highlights: [
        "NSDC-Recognised Certification",
        "300+ Active Hiring Partners",
        "Rajkot, Gujarat"
    ],
    description: "<strong>QA Testing Course in Rajkot & Ahmedabad</strong>. Most QA courses hand you a demo app that was built to be tested and never breaks in interesting ways. Real applications have edge cases nobody documented, APIs that return the wrong error code, and bugs that only show up after three specific clicks in the wrong order — and that's what you'll actually test here. Choose Manual & Functional Testing or Automation with Selenium, taught by working QA engineers, and leave with a portfolio of real test cases and bug reports.",
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
            label: "150+ QA Professionals Trained"
        },
        {
            label: "40+ hrs Live Project Work"
        },
        {
            label: "6+ Real Applications Tested"
        },
        {
            label: "100% Placement Assistance"
        }
    ],
    durationVal: "3–4 months",
    durationLabel: "Course Duration",
    hoursVal: "40+ hrs",
    hoursLabel: "Live project hours"
};

/**
 * 3. Course Features Section Data
 */
export const courseFeaturesData = {
    titleNormal: "About Our",
    titleItalic: "QA Testing",
    titleSuffix: "Course",
    items: [
        "Test real, working applications — not sample screenshots or theory slides",
        "Learn the mindset of breaking software methodically, not randomly clicking around",
        "Practice writing test cases, bug reports, and test plans clients actually use",
        "Covers both manual testing fundamentals and automation scripting",
        "Weekly mentor reviews by working QA engineers",
        "Government-recognised, industry-ready certification",
        "Flexible No-Cost EMI fee options"
    ],
};

/**
 * 4. Curriculum Section Data (Manual & Functional Testing + Automation Testing Tracks)
 */
export const manualFunctionalModules = [
    {
        num: "01",
        title: "Software Testing Fundamentals",
        description: "Learn the core principles of software testing — the software development lifecycle, testing levels, and the mindset every QA tester needs before touching a real application.",
        tags: [
            "SDLC & STLC",
            "Testing Principles",
            "Types of Testing",
            "Bug Life Cycle"
        ],
        techstack: {
            tools: "Jira • Excel"
        }
    },
    {
        num: "02",
        title: "Test Case Design & Documentation",
        description: "Learn to write clear, structured test cases and test plans — the core deliverable every QA tester produces, whether working solo or on a large team.",
        tags: [
            "Test Case Design Techniques",
            "Test Plan Writing",
            "Boundary Value Analysis",
            "Equivalence Partitioning"
        ],
        techstack: {
            tools: "TestRail • Excel"
        }
    },
    {
        num: "03",
        title: "Functional & Regression Testing",
        description: "Learn to systematically test application features and verify that new changes haven't broken existing functionality — the daily work of a manual QA tester.",
        tags: [
            "Functional Testing",
            "Regression Testing",
            "Smoke & Sanity Testing",
            "Cross-Browser Testing"
        ],
        techstack: {
            tools: "Chrome DevTools • BrowserStack"
        }
    },
    {
        num: "04",
        title: "API & Database Testing Basics",
        description: "Learn to test beyond the user interface — verifying API responses and checking database records directly, a skill that separates a strong manual tester from a UI-only tester.",
        tags: [
            "API Testing Basics",
            "Postman",
            "SQL for Testers",
            "Backend Validation"
        ],
        techstack: {
            tools: "Postman • MySQL Workbench"
        }
    },
    {
        num: "05",
        title: "Bug Reporting & QA Tools",
        description: "Learn to write bug reports developers can actually act on, and manage your testing workflow using tools real QA teams rely on daily.",
        tags: [
            "Bug Reporting Standards",
            "Severity & Priority Classification",
            "Jira Workflow",
            "Test Management Tools"
        ],
        techstack: {
            tools: "Jira • TestRail"
        }
    },
    {
        num: "06",
        title: "Manual Testing Capstone, Internship & Portfolio",
        description: "Apply everything into a full manual testing capstone project on a real application, complete a guided internship, and leave with a documented test portfolio ready for interviews.",
        tags: [
            "Capstone Test Cycle",
            "Report Review",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Jira • TestRail",
            platform: "Portfolio Document"
        }
    }
];

export const automationTestingModules = [
    {
        num: "01",
        title: "QA & Programming Fundamentals for Automation",
        description: "Learn core testing principles alongside the basic programming concepts every automation tester needs — the foundation for writing your first test scripts.",
        tags: [
            "SDLC & STLC",
            "Testing Principles",
            "Java/Python Basics for Testers",
            "Bug Life Cycle"
        ],
        techstack: {
            language: "Java or Python",
            tools: "Eclipse • VS Code"
        }
    },
    {
        num: "02",
        title: "Selenium WebDriver Fundamentals",
        description: "Learn to automate browser interactions using Selenium WebDriver — the industry-standard tool for web application test automation.",
        tags: [
            "Selenium WebDriver Basics",
            "Locators & XPath",
            "Browser Automation",
            "Handling Web Elements"
        ],
        techstack: {
            tool: "Selenium WebDriver",
            language: "Java"
        }
    },
    {
        num: "03",
        title: "Test Automation Frameworks",
        description: "Learn to structure automation projects the way real QA teams do — using frameworks that make test scripts reusable, maintainable, and scalable.",
        tags: [
            "TestNG / JUnit",
            "Page Object Model",
            "Data-Driven Testing",
            "Framework Design Patterns"
        ],
        techstack: {
            frameworks: "TestNG • Page Object Model"
        }
    },
    {
        num: "04",
        title: "API Automation Testing",
        description: "Learn to automate API testing — verifying backend responses and data without needing a browser, a core skill for modern automation roles.",
        tags: [
            "REST Assured Basics",
            "API Test Automation",
            "JSON/XML Validation",
            "Automated API Test Suites"
        ],
        techstack: {
            tools: "REST Assured • Postman"
        }
    },
    {
        num: "05",
        title: "CI/CD Integration & Reporting",
        description: "Learn to integrate your automated tests into a CI/CD pipeline so tests run automatically on every code change — the workflow real development teams expect.",
        tags: [
            "CI/CD Basics",
            "Jenkins Integration",
            "Test Reporting",
            "Version Control for Test Scripts"
        ],
        techstack: {
            tools: "Jenkins • Git • GitHub"
        }
    },
    {
        num: "06",
        title: "Automation Capstone, Internship & Portfolio",
        description: "Apply everything into a full automation framework capstone project, complete a guided internship, and leave with a working automation suite and GitHub portfolio ready for interviews.",
        tags: [
            "Capstone Automation Framework Build",
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

export const curriculumTracks = [
    {
        title: "Manual & Functional Testing Track",
        path: "manual-functional-testing",
        modules: manualFunctionalModules
    },
    {
        title: "Automation Testing Track",
        path: "automation-testing",
        modules: automationTestingModules
    }
];

export const mernModules = manualFunctionalModules;
export const javaModules = automationTestingModules;

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
            usPrefix: "Working QA engineers from ",
            usHighlight: "real companies",
            usSuffix: "",
        },
        {
            id: "style",
            label: "Learning Style",
            other: "Recorded videos, copied test cases",
            usPrefix: "",
            usHighlight: "100% hands-on",
            usSuffix: ", live, mentor-guided sessions",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            other: "Certificate recruiters ignore",
            usPrefix: "Real test cases, ",
            usHighlight: "bug reports, and automation scripts",
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
            id: "internship",
            label: "Internship",
            other: "Not included",
            usPrefix: "Guided QA project internship, ",
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
 * 6. Earnings Section Data
 */
export const earningsSectionData = {
    titlePrefix: "What QA Professionals",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior Manual Tester",
            location: "Rajkot",
            salary: "₹2.5 – ₹4 LPA",
            badge: "Entry Level",
            image: "/skill/QA Testing/test.png",
        },
        {
            title: "QA Analyst",
            location: "Ahmedabad / Surat",
            salary: "₹3.5 – ₹6 LPA",
            badge: "Early Career",
            image: "/skill/ITSkills/fullstackdevelopment.webp",
        },
        {
            title: "Automation Test Engineer",
            location: "Gujarat (Enterprise)",
            salary: "₹5 – ₹8 LPA",
            badge: "High Demand",
            image: "/skill/ITSkills/webdevelopment.webp",
        },
        {
            title: "Senior QA Tester",
            location: "PAN India / Remote",
            salary: "₹6 – ₹9 LPA",
            badge: "Mid-Level",
            image: "/skill/ITSkills/cybersecurity.webp",
        },
        {
            title: "SDET (Automation)",
            location: "PAN India / Remote",
            salary: "₹8 – ₹14 LPA",
            badge: "Experienced",
            image: "/skill/ITskills/ror_odoo_golang.webp",
        },
        {
            title: "QA Lead",
            location: "PAN India",
            salary: "₹9 – ₹15 LPA",
            badge: "Experienced",
            image: "/skill/ITSkills/fullstackdevelopment.webp",
        }
    ],
};

export const earningsJobsData = earningsSectionData.jobs;

/**
 * 7. Meetings Glance Carousel Data ("Inside Our Classroom")
 */
export const meetingGlanceSectionData = {
    titlePrefix: "Inside Our",
    titleSuffix: "Classroom",
    description: "A look at how our QA Testing batches actually run — live test case writing, mentor guidance, and real bug hunting on working applications.",
    meetings: [
        {
            heading: "Live Testing Sessions",
            subheading: "Every class is hands-on — students test real applications and write real test cases alongside the mentor, not just watch slides.",
        },
        {
            heading: "Mentor-Led Bug Report Reviews",
            subheading: "Working QA engineers review your test cases and bug reports weekly and guide you toward industry-standard documentation practices.",
        },
        {
            heading: "Small Batch, Real Attention",
            subheading: "Limited seats per batch mean every student gets doubt-clearing and feedback, not just a lecture.",
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
    mernTitle: "Manual & Functional Testing Track",
    javaTitle: "Automation Testing Track",
    mernRoles: [
        "Junior QA Tester",
        "Manual Test Engineer",
        "Functional Test Analyst",
        "QA Analyst",
        "Regression Test Engineer",
        "Freelance QA Consultant"
    ],
    javaRoles: [
        "Automation Test Engineer",
        "SDET (Software Development Engineer in Test)",
        "Selenium Test Automation Engineer",
        "QA Automation Analyst",
        "API Test Automation Engineer",
        "Freelance Automation Tester"
    ],
};

/**
 * 9. Industries Section Data
 */
export const industriesSectionData = {
    titleNormal: "Industries That Hire",
    titleItalic: "in India",
    description: "QA testers and automation engineers are needed across every sector that builds, ships, and maintains software applications.",
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
            title: "Healthcare Tech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/healthcaretech.webp"
        },
        {
            title: "Ed-Tech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/ed-tech.webp"
        },
        {
            title: "SaaS & Product Companies",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/manufacturingSaaS.webp"
        },
        {
            title: "Banking & Insurance",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/retail-tech.webp"
        }
    ],
};

export const industriesData = industriesSectionData.industries;

/**
 * 10. Placement & Curriculum FAQ Data
 */
export const faqSectionData = {
    titleNormal: "Placement & Curriculum",
    titleItalic: "FAQ",
    faqs: [
        {
            id: 1,
            question: "Is this course suitable for complete beginners?",
            answer: "Yes. The course starts from software testing fundamentals, assuming no prior QA or coding experience, before moving into your chosen track."
        },
        {
            id: 2,
            question: "Do you provide job placement support?",
            answer: "Yes — resume building, mock interviews, and direct referrals through our hiring partners actively looking for QA talent."
        },
        {
            id: 3,
            question: "Do I need a coding background to join?",
            answer: "No, not for the Manual & Functional Testing track. The Automation Testing track introduces basic programming concepts from scratch, so prior coding experience helps but isn't required."
        },
        {
            id: 4,
            question: "What tools will I actually work with?",
            answer: "Jira, TestRail, and Postman in the Manual track; Selenium, TestNG, REST Assured, and Jenkins in the Automation track — the same tools real QA teams use daily."
        },
        {
            id: 5,
            question: "What is the course duration?",
            answer: "3–4 months, with flexible batch timing and No Cost EMI payment options."
        },
        {
            id: 6,
            question: "What certification do I receive?",
            answer: "A government-recognised, industry-ready certification validating your manual or automation testing skills, depending on your chosen track."
        },
        {
            id: 7,
            question: "Which track should I choose — Manual & Functional Testing, or Automation Testing?",
            answer: "Choose Manual & Functional Testing if you want a structured, beginner-friendly entry into QA without needing to code. Choose Automation Testing if you're comfortable with basic programming and want to specialize in a higher-paying, in-demand QA skill set."
        },
        {
            id: 8,
            question: "What will I have to show recruiters by the end of the course?",
            answer: "A documented test case portfolio and bug reports (Manual track), or a working automation framework and GitHub portfolio (Automation track) — concrete proof of skills rather than just a certificate."
        }
    ]
};

export const faqData = faqSectionData.faqs;

/**
 * 11. Choose Your Track Data
 */
export const trackSelectorData = {
    title: "Choose Your Track",
    description: "Not every student wants the same kind of QA role. Pick the track that matches where you want to land.",
    tracks: [
        {
            title: "Manual & Functional Testing Track",
            description: "Build with test case design, bug tracking, and structured manual testing methodology — the foundational QA skill set every company needs regardless of team size or budget.",
            bestFor: "Career Starters · Non-Coding Backgrounds · Structured, Process-Driven Roles",
            idealIf: "Work as a Manual QA Tester · Enter QA without a programming background · Build a stable entry point into the software industry"
        },
        {
            title: "Automation Testing Track",
            description: "Build with Selenium, test scripting, and CI/CD-integrated automation frameworks — the skill set companies pay a premium for once manual testing repeats itself at scale.",
            bestFor: "Career Starters with Basic Coding Interest · Product Companies · Higher-Paying QA Roles",
            idealIf: "Work as an Automation Test Engineer · Write scripts that test software continuously · Combine QA thinking with programming skills"
        }
    ]
};

/**
 * 12. Alumni Testimonials Section Data
 */
export const testimonialsSectionData = {
    titleNormal: "Verified Career Transitions Hear Directly",
    titleParent: "from",
    titleItalic: "Deployed Alumni",
    testimonials: [
        {
            id: 1,
            text: "I came from a non-technical background and was worried QA needed coding skills. The manual testing track taught me test case design and bug reporting well enough to land a QA analyst role within weeks of finishing.",
            name: "Vivek Dahiya",
            title: "QA Analyst at a Gujarat-based IT firm, Batch March 2024",
            image: "/Home Page/Trust/1.webp"
        },
        {
            id: 2,
            text: "I'd been doing manual testing for a year but wanted to move into automation. Learning Selenium and building a real framework from scratch — not just running someone else's scripts — made the difference in my interviews.",
            name: "Pari Pala",
            title: "Automation Test Engineer, Batch April 2025",
            image: "/2.webp"
        },
        {
            id: 3,
            text: "The API and database testing module was something my previous course never covered. Being able to talk about backend testing, not just UI clicking, made recruiters take me more seriously.",
            name: "Sunny Ahya",
            title: "Senior QA Tester at a Rajkot-based company, Batch April 2026",
            image: "/3.webp"
        }
    ]
};

/**
 * 13. Final CTA Section Data
 */
export const ctaSectionData = {
    line1Normal: "Access the",
    line1Italic: "QA Testing Curriculum",
    line1Suffix: "— Apply Today and",
    line2Normal: "Start Testing",
    line2Italic: "Real Applications",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};

/**
 * 14. Metadata Info
 */
export const metadata = {
    title: "QA Testing Course in Rajkot & Ahmedabad | Alphabit Skill",
    description: "QA Testing course in Rajkot & Ahmedabad — Manual & Functional, or Automation with Selenium tracks. Live projects, 300+ hiring partners. Book a demo."
};
