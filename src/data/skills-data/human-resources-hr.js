// ==============================================================================
// Human Resources (HR) - Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

/**
 * 1. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: "Human Resources (HR)",
    titleSuffix: "",
    highlights: [
        "NSDC-Recognised Certification",
        "300+ Active Hiring Partners",
        "Rajkot & Ahmedabad, Gujarat"
    ],
    description: "Looking for the best <strong>HR Course in Rajkot</strong> or <strong>HR Training in Ahmedabad</strong>? Most HR courses teach labour law definitions and call it job-ready. Real HR work is screening a hundred resumes to find five worth interviewing, or explaining a policy change to an employee who's upset about it. This course puts you through <strong>real hiring cycles</strong> and <strong>real HR documentation</strong> — not case study slides — with mentors who work in <strong>Talent Acquisition and HR Operations</strong> professionally.",
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
        { label: "Live Hiring & Onboarding Projects" },
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
    titleItalic: "HR Course in",
    titleSuffix: "Rajkot & Ahmedabad",
    items: [
        "Comprehensive modules from HR fundamentals to specialized track depth",
        "Hands-on work on real hiring cycles, HR documentation & policy drafting",
        "Practical exposure to ATS, HRMS, and payroll tools used by real companies",
        "Small batch sizes for personalized mentor attention",
        "Weekly mentorship reviews by working HR professionals",
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
    description: "HR splits into two fairly different day-to-day jobs. Choose the track that matches where you want to work — across Rajkot, Ahmedabad, and beyond.",
    tracks: [
        {
            title: "Talent Acquisition & Recruitment Track",
            description: "Build with sourcing, screening, and interview coordination — the skill set companies hire recruiters for when they need to fill open roles with the right people, fast.",
            bestFor: "Staffing Agencies · IT Companies (Talent Teams) · Startups Scaling Fast",
            idealIf: "Work as a Talent Acquisition Executive or Recruiter · Source and screen candidates for real roles · Manage a hiring pipeline end to end"
        },
        {
            title: "HR Operations & Compliance Track",
            description: "Build with onboarding, payroll basics, labour law compliance, and employee relations — the skill set companies hire HR generalists for when they need someone to run the people side of the business day-to-day.",
            bestFor: "Corporate HR Departments · Manufacturing & Enterprise Companies · HR Consultancies",
            idealIf: "Work as an HR Executive or HR Generalist · Handle onboarding, policy, and compliance · Manage employee relations and HR operations"
        }
    ]
};

/**
 * 5. Curriculum Modules
 */
export const talentAcquisitionModules = [
    {
        num: "01",
        title: "Recruitment Fundamentals",
        description: "Before sourcing a single candidate, understand how a hiring cycle actually works — job descriptions, hiring manager alignment, and what makes a candidate genuinely a fit versus just qualified on paper.",
        tags: [
            "Hiring Cycle Overview",
            "Job Description Writing",
            "Hiring Manager Coordination",
            "Candidate Fit Criteria"
        ],
        techstack: {
            tools: "LinkedIn Recruiter · Naukri"
        }
    },
    {
        num: "02",
        title: "Sourcing & Candidate Screening",
        description: "Learn to actually find candidates, not just wait for applications — boolean search, portal sourcing, and resume screening that filters efficiently without missing good candidates.",
        tags: [
            "Sourcing Techniques",
            "Boolean Search",
            "Resume Screening",
            "Candidate Shortlisting"
        ],
        techstack: {
            tools: "LinkedIn Recruiter · Naukri · Indeed"
        }
    },
    {
        num: "03",
        title: "Interview Coordination & Assessment",
        description: "Run the logistics and structure of real interview processes — scheduling, structured interview formats, and evaluation scorecards that make hiring decisions defensible.",
        tags: [
            "Interview Scheduling & Coordination",
            "Structured Interview Formats",
            "Evaluation Scorecards",
            "Reference Checks"
        ],
        techstack: {
            tools: "Google Calendar / Calendly · Interview Scorecard Templates"
        }
    },
    {
        num: "04",
        title: "Applicant Tracking Systems & Recruitment Analytics",
        description: "Learn to manage a hiring pipeline inside a real ATS, and track recruitment metrics that show whether a hiring process is actually working.",
        tags: [
            "ATS Pipeline Management",
            "Recruitment Metrics (Time-to-Hire, Cost-per-Hire)",
            "Reporting to Hiring Managers",
            "Offer Management Basics"
        ],
        techstack: {
            tools: "ATS Platforms (e.g. Zoho Recruit) · Google Sheets"
        }
    },
    {
        num: "05",
        title: "Employer Branding & Candidate Experience",
        description: "Understand how candidates experience your hiring process from the outside — and why a bad candidate experience costs you good hires later.",
        tags: [
            "Employer Branding Basics",
            "Candidate Communication",
            "Offer Negotiation",
            "Rejection Handling"
        ],
        techstack: {
            tools: "LinkedIn (alphabit infoway) · Email Templates for Candidate Communication"
        }
    },
    {
        num: "06",
        title: "Recruitment Capstone, Internship & Portfolio",
        description: "Apply everything into running a real (or simulated) hiring cycle end to end, complete a guided internship, and leave with a documented recruitment case study for interviews.",
        tags: [
            "Capstone Hiring Cycle",
            "Recruitment Case Study",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "ATS Platform (e.g. Zoho Recruit) · Portfolio Documentation"
        }
    }
];

export const hrOperationsModules = [
    {
        num: "01",
        title: "HR Fundamentals & the Employee Lifecycle",
        description: "Before drafting a single policy, understand the full employee lifecycle — from onboarding to exit — and where HR operations actually sits in a company's structure.",
        tags: [
            "Employee Lifecycle Overview",
            "HR Functions & Structure",
            "HR's Role in Business Operations",
            "Basic HR Terminology"
        ],
        techstack: {
            tools: "HRMS Overview (e.g. Zoho People) · Org Chart Tools"
        }
    },
    {
        num: "02",
        title: "Onboarding & Employee Documentation",
        description: "Learn to run a real onboarding process — offer letters, joining formalities, and the documentation that protects both employee and employer from day one.",
        tags: [
            "Onboarding Process Design",
            "Offer Letters & Appointment Documents",
            "Employee Records Management",
            "Induction Planning"
        ],
        techstack: {
            tools: "HRMS Onboarding Modules · Offer/Appointment Letter Templates"
        }
    },
    {
        num: "03",
        title: "Payroll Basics & Statutory Compliance",
        description: "Understand the compliance side of HR that companies get penalized for getting wrong — PF, ESI, and basic payroll structuring, at the level an HR executive actually needs.",
        tags: [
            "Payroll Structuring Basics",
            "PF & ESI Fundamentals",
            "Statutory Compliance Overview",
            "Payslip & CTC Breakdown"
        ],
        techstack: {
            tools: "Excel · Payroll Software Basics"
        }
    },
    {
        num: "04",
        title: "Labour Law & Workplace Policy",
        description: "Learn the labour law fundamentals and internal policies HR is responsible for enforcing — leave policy, POSH compliance, and employee handbooks.",
        tags: [
            "Labour Law Fundamentals",
            "POSH Act Compliance",
            "Leave & Attendance Policy",
            "Employee Handbook Structuring"
        ],
        techstack: {
            tools: "Employee Handbook Templates · Compliance Checklists"
        }
    },
    {
        num: "05",
        title: "Employee Relations & Performance Management",
        description: "Handle the interpersonal side of HR — conflict resolution, performance review cycles, and disciplinary processes done fairly and documented properly.",
        tags: [
            "Employee Relations & Conflict Resolution",
            "Performance Review Cycles",
            "Disciplinary Process & Documentation",
            "Exit Interviews & Offboarding"
        ],
        techstack: {
            tools: "Performance Review Templates · HRMS (Appraisal Modules)"
        }
    },
    {
        num: "06",
        title: "HR Operations Capstone, Internship & Portfolio",
        description: "Apply everything into a full HR operations case study — an onboarding-to-offboarding cycle for a simulated company, complete a guided internship, and leave with documentation ready to show an interviewer.",
        tags: [
            "Capstone HR Operations Case Study",
            "Policy Documentation",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "HRMS Platform · Portfolio Documentation"
        }
    }
];

export const curriculumTracks = [
    {
        title: "Talent Acquisition & Recruitment Track",
        path: "talent-acquisition",
        modules: talentAcquisitionModules,
    },
    {
        title: "HR Operations & Compliance Track",
        path: "hr-operations",
        modules: hrOperationsModules,
    },
];

export const mernModules = talentAcquisitionModules;
export const javaModules = hrOperationsModules;

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
            usPrefix: "Working HR professionals from ",
            usHighlight: "real companies",
            usSuffix: "",
        },
        {
            id: "style",
            label: "Learning Style",
            other: "Recorded videos, theoretical case studies",
            usPrefix: "",
            usHighlight: "100% hands-on",
            usSuffix: ", live hiring cycles & HR documentation",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            other: "Certificate recruiters ignore",
            usPrefix: "Real recruitment case studies & ",
            usHighlight: "HR documentation",
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
    titlePrefix: "What HR Professionals",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior Talent Acquisition Executive",
            location: "Rajkot",
            salary: "₹2 – ₹3.5 LPA",
            badge: "Entry Level",
        },
        {
            title: "HR Executive",
            location: "Ahmedabad/Surat",
            salary: "₹2.5 – ₹4.5 LPA",
            badge: "Early Career",
        },
        {
            title: "Recruiter / TA Specialist",
            location: "Gujarat/Remote",
            salary: "₹3.5 – ₹6 LPA",
            badge: "Mid-Level",
        },
        {
            title: "HR Generalist",
            location: "PAN India/Remote",
            salary: "₹4 – ₹7 LPA",
            badge: "Mid-Level",
        },
        {
            title: "HR Manager",
            location: "PAN India",
            salary: "₹8 – ₹14 LPA",
            badge: "Experienced",
        }
    ],
};

/**
 * 8. Classroom / Glance Section Data
 */
export const meetingGlanceSectionData = {
    titlePrefix: "Inside an HR",
    titleSuffix: "Batch — Live for Ahmedabad Students",
    meetings: [
        {
            heading: "Live Hiring Simulations",
            subheading: "Students run real sourcing and screening exercises on live or simulated job requisitions, not textbook case studies.",
        },
        {
            heading: "Mentor-Led Document Reviews",
            subheading: "Working HR professionals review your job descriptions, policy drafts, and offer letters every week for what would actually pass a real HR audit.",
        },
        {
            heading: "Small Batch, Real Attention",
            subheading: "If you're not sure how to handle a tricky reference check or a leave policy edge case, someone can actually walk through it with you.",
        }
    ]
};

export const meetingVideoData = {
    titlePrefix: "Inside an HR",
    titleSuffix: "Batch — Live for Ahmedabad Students",
    videoUrl: "",
};

/**
 * 9. Career Opportunities Data
 */
export const careerOpportunitiesData = {
    titleNormal: "Explore",
    titleItalic: "Career Opportunities",
    mernTitle: "Talent Acquisition & Recruitment Track",
    javaTitle: "HR Operations & Compliance Track",
    mernRoles: [
        "Talent Acquisition Executive",
        "Recruiter",
        "Technical Recruiter",
        "Sourcing Specialist",
        "Campus Recruitment Coordinator"
    ],
    javaRoles: [
        "HR Executive",
        "HR Generalist",
        "HR Operations Associate",
        "Payroll & Compliance Executive",
        "Employee Relations Executive"
    ],
};

/**
 * 10. Industries Section Data
 */
export const industriesSectionData = {
    titleNormal: "Industries That Hire",
    titleItalic: "in India",
    description: "The skills you gain are highly sought after across multiple high-growth industries across Gujarat and PAN India.",
    industries: [
        {
            title: "IT Services",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Manufacturing",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Fintech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/fintech.webp"
        },
        {
            title: "Retail & E-commerce",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp"
        },
        {
            title: "Healthcare",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Staffing & Recruitment Agencies",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Startups",
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
            text: "I switched from a customer support role with zero HR background. The sourcing and screening practice in the Talent Acquisition track meant I could actually run a real hiring pipeline in my interview, not just talk about it.",
            name: "Dhruvi Chauhan",
            title: "Talent Acquisition Executive, Batch October 2025",
            image: "/Home Page/Trust/1.webp"
        },
        {
            id: 2,
            text: "The HR Operations track's payroll and compliance modules gave me the confidence to handle POSH and PF questions I would've otherwise had to Google mid-conversation. I got placed as an HR Executive within a month of finishing.",
            name: "Meet Rathod",
            title: "HR Executive, Batch January 2026",
            image: "/2.webp"
        },
        {
            id: 3,
            text: "I came in worried that HR was mostly paperwork. Running an actual onboarding-to-offboarding case study during the capstone changed that — I understood how much of the job is really about people, not just policy.",
            name: "Kavya Trivedi",
            title: "HR Generalist, Batch April 2026",
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
            answer: "Yes. The course starts from HR fundamentals, assuming no prior experience, before splitting into your chosen Talent Acquisition or HR Operations track."
        },
        {
            id: 2,
            question: "Do you provide job placement support?",
            answer: "Yes. Placement support includes resume building, mock interviews, and direct referrals through 300+ hiring partners actively looking for HR talent across Rajkot, Ahmedabad, and Gujarat."
        },
        {
            id: 3,
            question: "Which track should I choose — Talent Acquisition, or HR Operations & Compliance?",
            answer: "Choose Talent Acquisition & Recruitment if you want to focus on sourcing, screening, and hiring. Choose HR Operations & Compliance if you want to handle onboarding, payroll, policy, and employee relations after people are hired."
        },
        {
            id: 4,
            question: "Do I need an HR or commerce degree to join this course?",
            answer: "No. The course starts from HR fundamentals assuming no prior HR background, though a business, commerce, or psychology-related degree can help with some concepts."
        },
        {
            id: 5,
            question: "How long is the HR course at Alphabit Skill?",
            answer: "The course runs 3 to 4 months, with flexible batch timing and No Cost EMI payment options."
        },
        {
            id: 6,
            question: "What certification do I receive after completing the course?",
            answer: "You receive a government-recognised (NSDC), industry-ready certification validating your HR skills in your chosen track."
        },
        {
            id: 7,
            question: "Is this HR course available in Rajkot and Ahmedabad, or only online?",
            answer: "It runs offline at our Rajkot studio, live online for students in Ahmedabad, and online more broadly for students across Gujarat and beyond — all with the same mentor-led, hands-on structure."
        }
    ]
};

/**
 * 13. CTA Section Data
 */
export const ctaSectionData = {
    line1Normal: "Access the",
    line1Italic: "HR Curriculum",
    line1Suffix: "in Rajkot & Ahmedabad — Apply Today and",
    line2Normal: "Start Building Careers Around People & Organisations",
    line2Italic: "",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};

/**
 * 14. Metadata Info
 */
export const metadata = {
    title: "HR Course in Rajkot & Ahmedabad | Alphabit Skill",
    description: "HR course in Rajkot & Ahmedabad — Talent Acquisition or HR Operations & Compliance tracks. Live hiring projects, 300+ hiring partners. Book a free demo."
};
