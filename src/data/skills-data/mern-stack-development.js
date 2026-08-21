// ==============================================================================
// MERN Stack Development - Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

export const heroSectionData = {
    titlePrefix: "MERN Stack",
    titleSuffix: "Development",
    highlights: [
        "NSDC-Recognised Certification",
        "300+ Active Hiring Partners",
        "Rajkot, Gujarat"
    ],
    description: "<strong>MERN Stack Development Course in Rajkot & Ahmedabad</strong>. Most MERN courses touch React just enough to say \"useState works\" and never explain why your app keeps re-rendering. This one goes deeper — MongoDB, Express, React, and Node.js taught by mentors currently building with the stack, not reading slides. Choose a frontend-specialist track or go full stack end to end, and leave with 5+ deployed MERN projects on GitHub.",
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

export const courseFeaturesData = {
    titleNormal: "About Our",
    titleItalic: "MERN Stack",
    titleSuffix: "Development Course",
    items: [
        "9 modules — MongoDB to production deployment",
        "5+ industry-grade live MERN projects, not toy exercises",
        "Deep React.js coverage — hooks, state management, and component architecture beyond basics",
        "GitHub portfolio with deployed, working applications",
        "Small batch sizes for personal mentor attention",
        "Weekly code reviews from developers currently working with the MERN stack",
        "NSDC-recognised government certification",
        "No Cost EMI — flexible fee structure",
        "Weekend & weekday batch options"
    ],
};

/**
 * 4. Curriculum Section Data (MERN Frontend Specialist & MERN Full Stack Tracks)
 */
export const mernFrontendModules = [
    {
        num: "01",
        title: "Web Development Fundamentals for Frontend",
        image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1787126310/module-1_ugmlbt.webp",
        description: "Build semantic HTML5 structure, responsive CSS3 layouts using Flexbox and Grid, and real-world design principles every frontend-focused MERN developer needs before their first interview.",
        tags: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design", "Semantic Structure", "Web Accessibility"],
        techstack: {
            frontend: "HTML5 • CSS3 • JavaScript ES6+",
            tools: "Git • GitHub • VS Code"
        }
    },
    {
        num: "02",
        title: "JavaScript & ES6+ for React",
        image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1787126312/module-2_fqg4kf.webp",
        description: "Master the modern JavaScript features that React development runs on — closures, async patterns, and destructuring, framed around what you'll actually use inside components.",
        tags: ["ES6+ Syntax", "Destructuring", "Async/Await", "Promises", "Fetch API", "Modules & Imports"],
        techstack: {
            language: "JavaScript ES6+",
            tools: "Node.js Runtime"
        }
    },
    {
        num: "03",
        title: "React.js Frontend In Depth",
        image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1787126320/module_3_efiymo.webp",
        description: "Go beyond basic components into how production React applications are structured — hooks, routing, and component architecture that scale past a single-page demo.",
        tags: ["Components & Props", "React Hooks (useState, useEffect, useContext)", "React Router", "Component Architecture"],
        techstack: {
            frontend: "React.js • React Router",
            styling: "Tailwind CSS • Bootstrap"
        }
    },
    {
        num: "04",
        title: "State Management & Performance",
        image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1787126322/module_4_fqasfp.webp",
        description: "Learn advanced state management patterns and performance optimization specific to large React applications — the skill that separates a MERN developer from a frontend specialist.",
        tags: ["Redux Toolkit", "Context API vs Redux", "Memoization", "Code Splitting", "Performance Profiling"],
        techstack: {
            libraries: "Redux Toolkit • React DevTools"
        }
    },
    {
        num: "05",
        title: "Advanced UI Patterns & Component Design",
        image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1787126313/module-5_abwlqt.webp",
        description: "Learn reusable component patterns, design systems, and accessibility practices used in production frontend teams — not just making a component work, but making it maintainable.",
        tags: ["Reusable Component Patterns", "Design Systems Basics", "Form Handling & Validation", "Accessibility (a11y) Practices"],
        techstack: {
            libraries: "React Hook Form • Framer Motion (basics)",
            tools: "Figma-to-Code Workflow"
        }
    },
    {
        num: "06",
        title: "Connecting to APIs & Backend Data",
        image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1787126315/module-6_mteipn.webp",
        description: "Learn to consume REST APIs from a React frontend — handling loading states, errors, and authentication tokens the way real applications do, without needing to build the backend yourself.",
        tags: ["API Integration", "Axios/Fetch", "Handling Auth Tokens Client-Side", "Error & Loading State Management"],
        techstack: {
            tools: "Axios • Postman (for testing endpoints)"
        }
    },
    {
        num: "07",
        title: "Frontend Capstone, Deployment & Portfolio",
        image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1787126318/module-7_yyc4lk.webp",
        description: "Learn team version control workflows, deploy your React applications live, and build a capstone frontend project for your portfolio.",
        tags: ["Git & GitHub", "Vercel/Netlify Deployment", "Capstone Project Build", "Portfolio & Resume Prep"],
        techstack: {
            platforms: "Vercel • Netlify",
            tools: "Git • GitHub"
        }
    }
];

export const mernFullStackModules = [
    {
        num: "01",
        title: "Web Development Fundamentals for Full Stack",
        image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1787126857/module-1_cjeplg.webp",
        description: "Build semantic HTML5 structure, responsive CSS3 layouts, and real-world design principles — framed as the frontend surface of an application you'll build end-to-end, backend included.",
        tags: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design", "Semantic Structure", "Web Accessibility"],
        techstack: {
            frontend: "HTML5 • CSS3 • JavaScript ES6+",
            tools: "Git • GitHub • VS Code"
        }
    },
    {
        num: "02",
        title: "JavaScript & ES6+ Across the Stack",
        image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1787126859/module-2_wlacnv.webp",
        description: "Master the modern JavaScript features that power both your frontend and backend — the same syntax you'll reuse across MongoDB queries, Express routes, and React components.",
        tags: ["ES6+ Syntax", "Destructuring", "Async/Await", "Promises", "Fetch API", "Modules & Imports"],
        techstack: {
            language: "JavaScript ES6+",
            tools: "Node.js Runtime"
        }
    },
    {
        num: "03",
        title: "React.js Frontend Framework",
        image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1787126860/module-3_wvduqr.webp",
        description: "Build dynamic, component-based user interfaces with React — hooks, state management, routing, and connecting your frontend to real APIs you'll build yourself.",
        tags: ["Components & Props", "React Hooks", "React Router", "State Management", "API Integration"],
        techstack: {
            frontend: "React.js • Redux",
            styling: "Tailwind CSS • Bootstrap"
        }
    },
    {
        num: "04",
        title: "Node.js & Express.js Backend",
        image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1787126882/module-4_n4ydjn.webp",
        description: "Build fast, scalable backend servers with Node.js and Express — routing, middleware, and REST API design patterns used in real MERN production apps.",
        tags: ["Server Setup", "Express Routing", "Middleware", "REST API Design", "Error Handling"],
        techstack: {
            backend: "Node.js • Express.js",
            tools: "Postman • npm/yarn"
        }
    },
    {
        num: "05",
        title: "MongoDB & Mongoose Database Design",
        image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1787126886/module-5_jccue8.webp",
        description: "Design and query NoSQL databases the way MERN applications structure data — schema design, relationships, and aggregation using MongoDB and Mongoose.",
        tags: ["Schema Design", "CRUD Operations", "Mongoose ODM", "Aggregation Pipelines", "Database Indexing"],
        techstack: {
            database: "MongoDB • Mongoose",
            tools: "MongoDB Compass"
        }
    },
    {
        num: "06",
        title: "Authentication, Security & APIs",
        image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1787126889/module-6_c7ihld.webp",
        description: "Learn how real MERN applications keep user data safe — JWT-based authentication, password hashing, and protected routes across your full stack.",
        tags: ["JWT Authentication", "Password Hashing", "Protected Routes", "API Security Best Practices"],
        techstack: {
            framework: "Express Middleware",
            tools: "JWT • bcrypt"
        }
    },
    {
        num: "07",
        title: "Git, Deployment & Cloud Hosting",
        image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1787126891/module-7_j8n8c7.webp",
        description: "Learn team version control workflows and deploy your full MERN applications live using real hosting platforms.",
        tags: ["Git & GitHub", "Branching Workflows", "Vercel/Render Deployment", "Environment Variables"],
        techstack: {
            platforms: "Vercel • Render • Railway",
            tools: "Git • GitHub Actions Basics"
        }
    },
    {
        num: "08",
        title: "Full Stack Capstone Projects, Internship & Portfolio",
        image: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1787126896/module-8_w35rk9.webp",
        description: "Apply everything into 2–3 full-scale MERN capstone projects, complete a guided internship, and walk away with a GitHub portfolio ready to show recruiters.",
        tags: ["Capstone Project Build", "Code Review", "Internship Experience", "Portfolio & Resume Prep"],
        techstack: {
            platform: "GitHub Pages",
            tools: "Git • GitHub"
        }
    }
];

export const curriculumTracks = [
    {
        title: "MERN Frontend Specialist Track",
        path: "mern-frontend",
        modules: mernFrontendModules
    },
    {
        title: "MERN Full Stack Track",
        path: "mern-fullstack",
        modules: mernFullStackModules
    }
];

export const mernModules = mernFrontendModules;
export const javaModules = mernFullStackModules;

export const comparisonSectionData = {
    titleNormal: "Why Students Choose Our ",
    titleItalic: "MERN Training",
    categories: [
        {
            id: "mentors",
            label: "Mentors",
            other: "Academics reading from slides",
            usPrefix: "Working MERN developers from ",
            usHighlight: "real product companies",
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
            usHighlight: "5+ deployed GitHub projects",
            usSuffix: " with live URLs",
        },
        {
            id: "internship",
            label: "Internship",
            other: "Not included",
            usPrefix: "MERN-focused internship, ",
            usHighlight: "online & offline",
            usSuffix: " options",
        },
        {
            id: "placement",
            label: "Placement",
            other: "Resume forwarding only",
            usPrefix: "",
            usHighlight: "300+ partners",
            usSuffix: ", direct referrals, mock interviews",
        },
        {
            id: "certification",
            label: "Certification",
            other: "Private, unrecognized",
            usPrefix: "",
            usHighlight: "NSDC-recognised",
            usSuffix: " government certification",
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

export const earningsSectionData = {
    titlePrefix: "What MERN Stack Developers",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior MERN Developer",
            location: "Rajkot",
            salary: "₹2.5 – ₹4 LPA",
            badge: "Entry Level",
            image: "/skill/ITSkills/fullstackdevelopment.webp",
        },
        {
            title: "MERN Stack Developer",
            location: "Ahmedabad / Surat",
            salary: "₹4 – ₹7 LPA",
            badge: "Early Career",
            image: "/skill/ITSkills/fullstackdevelopment.webp",
        },
        {
            title: "React.js Developer",
            location: "Remote / PAN India",
            salary: "₹4 – ₹8 LPA",
            badge: "High Demand",
            image: "/skill/ITSkills/webdevelopment.webp",
        },
        {
            title: "Node.js / Backend Developer",
            location: "Ahmedabad / Remote",
            salary: "₹3.5 – ₹6 LPA",
            badge: "Backend Specialist",
            image: "/skill/ITSkills/fullstackdevelopment.webp",
        },
        {
            title: "Full Stack JavaScript Developer",
            location: "PAN India / Remote",
            salary: "₹6 – ₹10 LPA",
            badge: "Mid-Level",
            image: "/skill/ITSkills/webdevelopment.webp",
        },
        {
            title: "MERN Stack Developer (2–3 yrs exp)",
            location: "PAN India",
            salary: "₹7 – ₹14 LPA",
            badge: "Experienced",
            image: "/skill/ITSkills/fullstackdevelopment.webp",
        }
    ],
};

export const careerOpportunitiesData = {
    titleNormal: "Explore",
    titleItalic: "Career Opportunities",
    mernTitle: "MERN Stack Track",
    javaTitle: "",
    mernRoles: [
        "MERN Stack Developer",
        "React.js Frontend Developer",
        "Node.js Backend Developer",
        "JavaScript Full Stack Developer",
        "Web Application Developer",
        "Freelance MERN Developer"
    ],
    javaRoles: [],
};

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
            title: "Media & Publishing",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/retail-tech.webp"
        },
        {
            title: "Startups & Product Studios",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/goverment-it.webp"
        }
    ],
};

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
            question: "Is this course different from the MERN track on your Full Stack Development page?",
            answer: "This course goes deeper into MERN specifically — including advanced state management, performance optimization, and MongoDB schema design that the Full Stack page's MERN track only introduces at a high level. Choose this course if you've already decided on MERN; choose the Full Stack Development course if you're still deciding between MERN and Java."
        },
        {
            id: 2,
            question: "Is this course suitable for complete beginners?",
            answer: "Yes. The course starts from HTML, CSS, and JavaScript fundamentals, assuming no prior coding experience, before moving into the full MERN stack."
        },
        {
            id: 3,
            question: "Do you provide job placement support after this course?",
            answer: "Yes. Placement support includes resume building, mock interviews, and direct referrals through 300+ hiring partners actively hiring MERN developers."
        },
        {
            id: 4,
            question: "How long is the MERN Stack Development course at Alphabit Skill?",
            answer: "The course runs 4 to 6 months, with both weekday and weekend batch options."
        },
        {
            id: 5,
            question: "What projects will I build during the course?",
            answer: "You'll build 5+ industry-grade live MERN projects deployed with working URLs, plus a GitHub portfolio you can show directly to recruiters or freelance clients."
        },
        {
            id: 6,
            question: "Why choose MERN over other tech stacks?",
            answer: "MERN uses one language, JavaScript, across your entire application, from database queries to frontend rendering. That makes it faster to learn deeply and is the default stack most startups and product companies in India currently hire for."
        },
        {
            id: 7,
            question: "What certification do I receive after completing the course?",
            answer: "You receive an NSDC-recognised government certification, validated by national skill development authorities and recognised by employers across India."
        },
        {
            id: 8,
            question: "Is an online MERN course available for students outside Rajkot?",
            answer: "Yes. The course runs both offline at our Rajkot studio and online, with the same mentor-led, live-project structure either way."
        }
    ]
};

export const faqData = faqSectionData.faqs;

export const trackSelectorData = {
    title: "Choose your track",
    description: "Not every student has the same career goal. Choose the track that matches the job market you want to enter.",
    tracks: [
        {
            title: "MERN Frontend Specialist Track",
            description: "Built with React.js, Redux, and modern UI tooling in depth — for students who want to specialize in frontend interfaces while still understanding how the backend connects to it.",
            bestFor: "UI-Focused Roles · Frontend-Heavy Startups · Design-to-Code Specialists",
            idealIf: "Work as a React.js Developer · Specialize in frontend performance and state management · Build interfaces for product teams"
        },
        {
            title: "MERN Full Stack Track",
            description: "Build end-to-end with MongoDB, Express.js, React.js, and Node.js — for students who want to own an entire application, from database to deployment, not just one layer.",
            bestFor: "Startups · Product companies · Freelance full stack developers",
            idealIf: "Work at a product startup · Freelance as a full stack developer · Build and ship your own SaaS product independently"
        }
    ]
};

export const testimonialsSectionData = {
    titleNormal: "Verified Career Transitions",
    titleParent: "Hear Directly from",
    titleItalic: "Deployed Alumni",
    testimonials: [
        {
            id: 1,
            text: "I chose the MERN-specific course over a general full stack program because I already knew I wanted to work at a startup. By month 4, I had 3 deployed MERN projects and a clear understanding of Redux that most bootcamp grads don't have.",
            name: "Yash Dayal",
            title: "MERN Stack Developer at a Rajkot-based startup, Batch April 2026",
            image: "/Home Page/Trust/1.webp"
        },
        {
            id: 2,
            text: "The performance and state management module was the difference-maker for me. Most courses stop at 'useState works' — this went into why my app was re-rendering too much and how to actually fix it.",
            name: "Sweta Limbasiya",
            title: "React.js Developer, Batch October 2025",
            image: "/2.webp"
        },
        {
            id: 3,
            text: "I was freelancing before this course but kept hitting a ceiling with client projects. Learning proper MongoDB schema design and authentication practices let me take on bigger, better-paying MERN projects.",
            name: "Pradip Maitri",
            title: "Freelance MERN Developer, Batch July 2026",
            image: "/3.webp"
        }
    ]
};


export const ctaSectionData = {
    line1Normal: "Access the",
    line1Italic: "MERN Stack ",
    line1Suffix: "Curriculum — Apply Today and",
    line2Normal: "Start Building",
    line2Italic: "Production Apps",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};

/**
 * 13. Metadata Info
 */
export const metadata = {
    title: "MERN Stack Development Course in Rajkot & Ahmedabad",
    description: "MERN Stack Development course in Rajkot & Ahmedabad — MongoDB, Express, React & Node.js in depth. Live projects, 300+ hiring partners. Book a free demo."
};
