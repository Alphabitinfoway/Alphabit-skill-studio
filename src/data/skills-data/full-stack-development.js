// ==============================================================================
// Full Stack Development - Master Component Data File
// Edit this file to easily update copy, content, features, stats & curriculum!
// ==============================================================================

/**
 * 1. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: "Full Stack",
    titleSuffix: "Development",
    highlights: [
        "Rajkot & Ahmedabad",
        "NSDC-Recognised Certification",
        "300+ Hiring Partners",
    ],
    description: "Looking for the best <strong>Full Stack Development Course in Rajkot</strong> or <strong>Full Stack Development Training in Ahmedabad</strong>? Alphabit Skill offers hands-on training in <strong>MERN Stack (MongoDB, Express.js, React, Node.js)</strong> and <strong>PHP Full Stack Development with Laravel and MySQL</strong>. From week one, you'll build real-world web applications through live projects, learn from experienced industry mentors, and receive <strong>100% placement assistance</strong> to launch your career as a full stack developer.",
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
        { label: "100% Placement Assistance" },
    ],
    durationVal: "4-6 months",
    durationLabel: "Course Duration",
    hoursVal: "50+ hrs",
    hoursLabel: "Live project hours"
};

/**
 * 3. Course Features Section Data
 */
export const courseFeaturesData = {
    titleNormal: "About",
    titleItalic: "Full-Stack",
    titleSuffix: "Development Course",
    items: [
        "10 Modules- frontend to deployment",
        "5+ industry-grade live full stack projects",
        "GitHub portfolio with deployed applications",
        "Small batch sizes for personal attention",
        "Weekly code reviews by working developers",
        "Resume, LinkedIn & mock interview prep",
        "NSDC-recognised government certification",
        "No Cost EMI – flexible fee structure",
        "Weekend & weekday batch options",
    ],
};

/**
 * 4. Curriculum Section Data (MERN & Java Tracks)
 */
const mernModules = [
    {
        num: "01",
        title: "Web Development Fundamentals",
        image: "/skill/ITSkills/FullStackDevelopment/MERN/module1.webp",
        description: "Build semantic HTML5 structure, responsive CSS3 layouts using Flexbox and Grid, and real-world design principles every full stack developer is expected to know before their first interview.",
        tags: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design", "Semantic Structure", "Web Accessibility"],
        techstack: {
            frontend: "HTML 5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind CSS",
            backend: "Node.js • Express.js • REST APIs • JWT Authentication • Middleware",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "02",
        title: "JavaScript & ES6+",
        image: "/skill/ITSkills/FullStackDevelopment/MERN/module2.webp",
        description: "Master variables, functions, arrays, objects, DOM manipulation, ES6+ features, async/await, the Fetch API, and event-driven programming that powers every modern web application.",
        tags: ["JavaScript", "ES6+", "DOM Manipulation", "Async/Await", "Fetch API", "Closures", "Promises"],
        techstack: {
            frontend: "HTML 5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind CSS",
            backend: "Node.js • Express.js • REST APIs • JWT Authentication • Middleware",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "03",
        title: "React.js Frontend Framework",
        image: "/skill/ITSkills/FullStackDevelopment/MERN/module3.webp",
        description: "React is the most hired frontend skill in India's full stack developer job market. Learn to build dynamic, component-based interfaces using React Hooks, Redux Toolkit, and third-party API integration.",
        tags: ["React.js", "Hooks", "useState/useEffect", "Redux Toolkit", "React Router", "API Integration"],
        techstack: {
            frontend: "HTML 5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind CSS",
            backend: "Node.js • Express.js • REST APIs • JWT Authentication • Middleware",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "04",
        title: "Node.js & Express.js Backend",
        image: "/skill/ITSkills/FullStackDevelopment/MERN/module4.webp",
        description: "Build production-grade server-side applications and REST APIs using Node.js and Express.js — with middleware, routing, JWT authentication, error handling, and server-side file management.",
        tags: ["Node.js", "Express.js", "REST APIs", "Middleware", "JWT Auth", "Error Handling", "File Handling"],
        techstack: {
            frontend: "HTML 5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind CSS",
            backend: "Node.js • Express.js • REST APIs • JWT Authentication • Middleware",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "05",
        title: "MongoDB & Database Design",
        image: "/skill/ITSkills/FullStackDevelopment/MERN/module5.webp",
        description: "Work with MongoDB and Mongoose to design data models, execute CRUD operations, build aggregation pipelines, apply indexing, and connect your database to a live Node.js backend.",
        tags: ["MongoDB", "Mongoose", "CRUD Operations", "Aggregation Pipeline", "Data Modeling", "Indexing"],
        techstack: {
            frontend: "HTML 5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind CSS",
            backend: "Node.js • Express.js • REST APIs • JWT Authentication • Middleware",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "06",
        title: "Authentication, Security & APIs",
        image: "/skill/ITSkills/FullStackDevelopment/MERN/module6.webp",
        description: "Implement JWT authentication, OAuth2, bcrypt password hashing, and learn how to build and consume third-party APIs in a secure, production-ready way.",
        tags: ["JWT", "OAuth2", "bcrypt", "API Security", "CORS", "Session Management"],
        techstack: {
            frontend: "HTML 5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind CSS",
            backend: "Node.js • Express.js • REST APIs • JWT Authentication • Middleware",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "07",
        title: "Git & GitHub",
        image: "/skill/ITSkills/FullStackDevelopment/MERN/module7.webp",
        description: "Recruiters check your GitHub before they read your resume. Learn branching, merging, pull requests, and collaborative team workflows — and build a clean commit history that hiring managers notice.",
        tags: ["Git", "GitHub", "Branching", "Pull Requests", "Collaborative Workflows", "CI/CD Basics"],
        techstack: {
            frontend: "HTML 5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind CSS",
            backend: "Node.js • Express.js • REST APIs • JWT Authentication • Middleware",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "08",
        title: "Deployment & Cloud Hosting",
        image: "/skill/ITSkills/FullStackDevelopment/MERN/module8.webp",
        description: "Learn to deploy full stack applications on Vercel, Render, and Railway — with environment configuration, domain setup, SSL, and foundational DevOps concepts every full stack developer must understand.",
        tags: ["Vercel", "Render", "Railway", "DevOps Basics", "SSL", "Cloud Hosting"],
        techstack: {
            frontend: "HTML 5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind CSS",
            backend: "Node.js • Express.js • REST APIs • JWT Authentication • Middleware",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "09",
        title: "Capstone Projects, Internship & Portfolio",
        image: "/skill/ITSkills/FullStackDevelopment/MERN/module9.webp",
        description: "Build 2+ complete applications from scratch — an e-commerce platform, task management tool, or social application. Get access to a full stack developer internship for hands-on, real-world experience. Walk into every interview with deployed, live work on GitHub and verified internship experience.",
        tags: ["Live Projects", "Full Stack Internship", "Portfolio Building", "GitHub Showcase", "Interview Prep"],
        techstack: {
            frontend: "HTML 5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind CSS",
            backend: "Node.js • Express.js • REST APIs • JWT Authentication • Middleware",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    }
];

const javaModules = [
    {
        num: "01",
        title: "Web Development Fundamentals",
        image: "/skill/ITSkills/FullStackDevelopment/JAVA/module1.webp",
        description: "Build semantic HTML5 structure, responsive CSS3 layouts using Flexbox and Grid, and real-world design principles every full stack developer is expected to know before their first interview.",
        tags: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design", "Semantic Structure", "Web Accessibility"],
        techstack: {
            frontend: "HTML5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind CSS",
            backend: "Core Java • OOP • Spring Boot • Hibernate • JPA • Maven • Spring Security",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "02",
        title: "Core Java & OOP",
        image: "/skill/ITSkills/FullStackDevelopment/JAVA/module2.webp",
        description: "Master Java fundamentals — data types, control flow, arrays, collections, and the object-oriented principles that every Java interview will test you on: classes, inheritance, polymorphism, abstraction, and encapsulation.",
        tags: ["Core Java", "OOP", "Collections Framework", "Exception Handling", "Generics", "Java 8+ Features"],
        techstack: {
            frontend: "HTML5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind CSS",
            backend: "Core Java • OOP • Spring Boot • Hibernate • JPA • Maven • Spring Security",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "03",
        title: "Advanced Java & Java 8+",
        image: "/skill/ITSkills/FullStackDevelopment/JAVA/module3.webp",
        description: "Go deeper with Java 8+ features that modern enterprise applications depend on — Lambda expressions, Stream API, Functional Interfaces, Optional, and the Date/Time API that replaces legacy patterns.",
        tags: ["Lambda Expressions", "Stream API", "Functional Interfaces", "Optional", "Method References", "Date/Time API"],
        techstack: {
            frontend: "HTML5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind CSS",
            backend: "Core Java • OOP • Spring Boot • Hibernate • JPA • Maven • Spring Security",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "04",
        title: "Spring Boot Backend Framework",
        image: "/skill/ITSkills/FullStackDevelopment/JAVA/module4.webp",
        description: "Spring Boot is the most hired backend skill in India's Java full stack job market. Learn to build production-grade REST APIs with Spring Boot, dependency injection, Spring MVC, and auto-configuration.",
        tags: ["Spring Boot", "Spring MVC", "REST APIs", "Dependency Injection", "Spring Annotations", "Auto-Configuration"],
        techstack: {
            frontend: "HTML5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind CSS",
            backend: "Core Java • OOP • Spring Boot • Hibernate • JPA • Maven • Spring Security",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "05",
        title: "Spring Data JPA & Database Design",
        image: "/skill/ITSkills/FullStackDevelopment/JAVA/module5.webp",
        description: "Work with Spring Data JPA and Hibernate to design relational data models, execute CRUD operations, write custom queries, and connect your database to a live Spring Boot backend.",
        tags: ["Spring Data JPA", "Hibernate", "MySQL", "CRUD Operations", "JPQL", "Entity Relationships", "Database Design"],
        techstack: {
            frontend: "HTML5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind CSS",
            backend: "Core Java • OOP • Spring Boot • Hibernate • JPA • Maven • Spring Security",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "06",
        title: "Authentication, Security & APIs",
        image: "/skill/ITSkills/FullStackDevelopment/JAVA/module6.webp",
        description: "Implement JWT authentication, Spring Security, BCrypt password hashing, role-based access control, and learn how to build and consume third-party APIs in a secure, production-ready way.",
        tags: ["Spring Security", "JWT", "BCrypt", "Role-Based Access", "OAuth2", "CORS", "API Security"],
        techstack: {
            frontend: "HTML5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind CSS",
            backend: "Core Java • OOP • Spring Boot • Hibernate • JPA • Maven • Spring Security",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "07",
        title: "React.js Frontend Integration",
        image: "/skill/ITSkills/FullStackDevelopment/JAVA/module7.webp",
        description: "Java full stack developers are expected to build the complete picture. Learn React.js, component-based UI design, Hooks, Axios for API calls, and how to connect your React frontend to a Spring Boot backend.",
        tags: ["React.js", "Hooks", "useState/useEffect", "Axios", "REST Integration", "React Router", "Component Architecture"],
        techstack: {
            frontend: "HTML5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind CSS",
            backend: "Core Java • OOP • Spring Boot • Hibernate • JPA • Maven • Spring Security",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "08",
        title: "Git, GitHub & DevOps Basics",
        image: "/skill/ITSkills/FullStackDevelopment/JAVA/module8.webp",
        description: "Recruiters check your GitHub before they read your resume. Learn branching, merging, pull requests, and collaborative team workflows — and build a clean commit history that hiring managers notice.",
        tags: ["Git", "GitHub", "Branching", "Pull Requests", "Collaborative Workflows", "Maven", "CI/CD Basics"],
        techstack: {
            frontend: "HTML5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind CSS",
            backend: "Core Java • OOP • Spring Boot • Hibernate • JPA • Maven • Spring Security",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "09",
        title: "Deployment & Cloud Hosting",
        image: "/skill/ITSkills/FullStackDevelopment/JAVA/module9.webp",
        description: "Learn to deploy Java full stack applications on AWS, Railway, and Render — with environment configuration, domain setup, SSL, Docker basics, and foundational DevOps concepts every Java developer must understand.",
        tags: ["AWS EC2", "Docker Basics", "Railway", "Render", "DevOps Fundamentals", "SSL", "Cloud Hosting"],
        techstack: {
            frontend: "HTML5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind CSS",
            backend: "Core Java • OOP • Spring Boot • Hibernate • JPA • Maven • Spring Security",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "10",
        title: "Capstone Projects, Internship & Portfolio",
        image: "/skill/ITSkills/FullStackDevelopment/JAVA/module10.webp",
        description: "Build 2+ complete applications from scratch — a banking portal, inventory management system, or job board platform. Get access to a Java full stack internship for hands-on, real-world experience. Walk into every interview with deployed, live work on GitHub and verified internship experience.",
        tags: ["Live Projects", "Full Stack Internship", "Portfolio Building", "GitHub Showcase", "Interview Prep"],
        techstack: {
            frontend: "HTML5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind CSS",
            backend: "Core Java • OOP • Spring Boot • Hibernate • JPA • Maven • Spring Security",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    }
];

export const curriculumTracks = [
    {
        title: "Full Stack Web Development (MERN)",
        path: "mern",
        modules: mernModules
    },
    {
        title: "Full Stack Java Development",
        path: "java",
        modules: javaModules
    }
];

/**
 * 5. Comparison Section Data
 */
export const comparisonSectionData = {
    titleNormal: "Why Students Choose Our ",
    titleItalic: "Full Stack Training",
    categories: [
        {
            id: "mentors",
            label: "Mentors",
            other: "Academics reading from slides",
            usPrefix: "Working developers from ",
            usHighlight: "IT companies & startups",
            usSuffix: "",
        },
        {
            id: "style",
            label: "Learning Style",
            other: "Recoded videos, copied code",
            usPrefix: "",
            usHighlight: "100% hands-on",
            usSuffix: ", live, mentor-guided sessions",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            other: "Certificate recruiters ignore",
            usPrefix: "",
            usHighlight: "5+ deployed Github projects",
            usSuffix: " with live URLs",
        },
        {
            id: "internship",
            label: "Internship",
            other: "Not Included",
            usPrefix: "Full Stack internship- ",
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
            other: "Hidden Charges, no EMI",
            usPrefix: "Transparent pricing, ",
            usHighlight: "No Cost EMI",
            usSuffix: ", zero hidden fees",
        },
        {
            id: "support",
            label: "Support after course",
            other: "None",
            usPrefix: "",
            usHighlight: "Lifetime doubt support",
            usSuffix: " for alumni",
        },
    ]
};

// For backwards compatibility
export const comparisonCategories = comparisonSectionData.categories.map(cat => ({
    id: cat.id,
    label: cat.label,
    otherText: cat.other,
    usHighlightText: `${cat.usPrefix}${cat.usHighlight}${cat.usSuffix}`
}));

/**
 * 6. Earnings Section Data
 */
export const earningsSectionData = {
    titlePrefix: "What Full Stack Developers",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior Full Stack Developer (MERN)",
            location: "Rajkot",
            salary: "₹2.5 - ₹4 LPA",
            badge: "Entry Level",
            image: "/skill/ITSkills/fullstackdevelopment.webp",
        },
        {
            title: "Full Stack Developer (MERN)",
            location: "Ahmedabad / Surat",
            salary: "₹4 - ₹7 LPA",
            badge: "Early Career",
            image: "/skill/ITSkills/fullstackdevelopment.webp",
        },
        {
            title: "Java Full Stack Developer",
            location: "Gujarat (Enterprise)",
            salary: "₹3.5 - ₹6 LPA",
            badge: "Enterprise Roles",
            image: "/skill/ITskills/ror_odoo_golang.webp",
        },
        {
            title: "React JS Developer",
            location: "Remote / PAN India",
            salary: "₹4 - ₹8 LPA",
            badge: "High Demand",
            image: "/skill/ITSkills/webdevelopment.webp",
        },
        {
            title: "Node JS / Backend Developer",
            location: "Ahmedabad / Remote",
            salary: "₹3.5 - ₹6 LPA",
            badge: "Backend Specialist",
            image: "/skill/ITskills/databasemanagement.webp",
        },
        {
            title: "Full Stack Developer (2-3 yrs exp)",
            location: "PAN India",
            salary: "₹7 - ₹14 LPA",
            badge: "Experienced",
            image: "/skill/ITSkills/fullstackdevelopment.webp",
        },
    ]
};

export const earningsJobsData = earningsSectionData.jobs;

/**
 * 7. Career Opportunities Roles
 */
export const careerOpportunitiesData = {
    titleNormal: "Explore",
    titleItalic: "Career Opportunities",
    mernTitle: "MERN Stack Track",
    javaTitle: "Java Full Stack Track",
    mernRoles: [
        "MERN Stack Developer",
        "React JS Frontend Developer",
        "Node JS Backend Developer",
        "Javascript Full Stack Developer",
        "Web Application Developer",
        "Freelance Full Stack Developer",
    ],
    javaRoles: [
        "Java Full Stack Developer",
        "Spring Boot Backend Developer",
        "Java Web Developer",
        "Enterprise Application Developer",
        "Software Engineer (Java)",
        "Microservices Developer",
    ],
};

/**
 * 8. Industries Hiring Data
 */
export const industriesSectionData = {
    titleNormal: "Industries that",
    titleItalic: "Hire",
    description: "The skills you gain are relevant across multiple industries actively hiring modern full stack developers.",
    industries: [
    {
        title: "IT Services",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp",
    },
    {
        title: "Fintech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/fintech.webp",
    },
    {
        title: "E-commerce",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp",
    },
    {
        title: "Ed-Tech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/ed-tech.webp",
    },
    {
        title: "Healthcare Tech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/healthcaretech.webp",
    },
    {
        title: "Manufacturing SaaS",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/manufacturingSaaS.webp",
    },
    {
        title: "Government IT",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/goverment-it.webp",
    },
    {
        title: "Retail Tech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp",
    }
    ]
};

export const industriesData = industriesSectionData.industries;

/**
 * 9. Meetings Glance Carousel Data
 */
export const meetingGlanceSectionData = {
    titlePrefix: "A Glance",
    titleSuffix: "at yesterday's Meeting",
    meetings: [
        {
            heading: "Heading",
            subheading: "Subheading",
        },
        {
            heading: "Heading",
            subheading: "Subheading",
        },
        {
            heading: "Heading",
            subheading: "Subheading",
        },
    ]
};

export const meetingGlanceData = meetingGlanceSectionData.meetings;

/**
 * 10. Meeting Video Data
 */
export const meetingVideoData = {
    titlePrefix: "A Glance",
    titleSuffix: "at yesterday's Meeting",
    videoUrl: "", // YouTube embed URL (must use /embed/ format, not /watch?v=)
};

/**
 * 11. FAQ Data
 */
export const faqSectionData = {
    titleNormal: "Corporate Placement & Curriculum",
    titleItalic: "FAQ",
    faqs: [
        {
            id: 1,
            question: "Is this course suitable for freshers with no coding experience?",
            answer:
                "Yes. Our full stack development course is designed for freshers, BCA/B.Tech/BSc IT graduates, and career changers. No prior coding experience is required — the course begins from fundamentals and builds up to full application deployment.",
        },
        {
            id: 2,
            question: "Which track should a fresher choose — MERN or Java?",
            answer:
                "Freshers targeting startups and product companies typically choose MERN (MongoDB, Express, React, Node.js). Freshers targeting enterprise IT companies and TCS/Infosys/Wipro-level firms choose the Java track (Spring Boot, Hibernate, React). Attend a free demo and our mentors will guide you based on your goals.",
        },
        {
            id: 3,
            question: "What is the course duration?",
            answer:
                "The full stack developer course at Alphabit Skill is 4 to 6 months long, covering 9 modules from HTML and CSS basics to backend APIs, databases, and live project deployment.",
        },
        {
            id: 4,
            question: "What projects will I build?",
            answer:
                "Students build 5+ industry-grade live projects — including complete web applications with frontend, backend, and database integration. All projects are deployed and added to a verified GitHub portfolio that you present during job interviews.",
        },
        {
            id: 5,
            question: "Do you provide 100% placement assistance?",
            answer:
                "Yes. Alphabit Skill provides 100% placement assistance with 300+ hiring partners across Rajkot, Ahmedabad, Surat, Vadodara, and across India. Placement support includes resume building, LinkedIn optimization, mock technical interviews, and direct company referrals.",
        },
        {
            id: 6,
            question: "Is an online full stack course available for students outside Rajkot?",
            answer:
                "Yes. Alphabit Skill offers an online full stack development course for students across Gujarat and India who cannot attend in person. The online track includes the same curriculum, live projects, internship access, and placement support as the classroom course.",
        },
        {
            id: 7,
            question: "What certification do I receive?",
            answer:
                "Students receive an NSDC-recognised government certification backed by national skill development initiatives, accepted by employers across India — whether applying locally in Rajkot or for remote roles nationally.",
        },
        {
            id: 8,
            question: "Is this better than learning PHP or WordPress?",
            answer:
                "Our curriculum focuses on MERN Stack and Java — the technologies modern product companies, startups, and enterprise IT firms are actively hiring for. Full stack JavaScript (MERN) and Java offer higher salaries, broader job opportunities, and stronger long-term career growth across India's IT sector.",
        }
    ]
};

export const faqData = faqSectionData.faqs;

/**
 * 12. Track Selector Data
 */
export const trackSelectorData = {
    title: "Choose your track",
    description: "Not every student has the same career goal. Choose the track that matches the job market you want to enter.",
    tracks: [
        {
            title: "Full Stack Web Development (MERN)",
            description: "Build with MongoDB, Express.js, React.js, and Node.js – the most popular combination for modern web application development in India right now.",
            bestFor: "Startups · Product Companies · Freelance Web Developers",
            idealIf: "Work at a product startup · Freelance as a web developer · Build your own web application from scratch"
        },
        {
            title: "Full Stack Java Development",
            description: "Build with Core Java, Spring Boot, Hibernate, and React or Angular – the backend combination large organizations across India specifically hire for.",
            bestFor: "Enterprise IT companies · Service-based firms · Government IT",
            idealIf: "Work at TCS / Infosys / Wipro-level firms · Join service-based IT companies · Build enterprise-grade applications"
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
            track: "MERN Track",
            text: "I had zero coding experience when I joined. Within 5 months I had three live projects deployed on GitHub and got placed at a software company in Rajkot. The training here is genuinely industry-level.",
            name: "Priya Desai",
            title: "Junior React Developer, Rajkot",
            image: "/Home Page/Trust/1.webp"
        },
        {
            id: 2,
            track: "MERN Track",
            text: "The mentors know exactly what companies ask in technical interviews. I completed the training and cracked three interviews in my first month of job hunting.",
            name: "Karan Patel",
            title: "Full Stack Developer, Ahmedabad",
            image: "/2.webp"
        },
        {
            id: 3,
            track: "Java Track",
            text: "I chose the Java track because I wanted to work at an enterprise company. The Spring Boot and Hibernate modules were extremely detailed and practical. I got placed within 6 weeks of completing the training.",
            name: "Meenal Shah",
            title: "Java Backend Developer, Surat",
            image: "/3.webp"
        }
    ]
};


export const ctaSectionData = {
    line1Normal: "Access the",
    line1Italic: "Full Stack Curriculum",
    line1Suffix: "- Apply Today and",
    line2Normal: "Start Building",
    line2Italic: "Production Apps",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};

/**
 * 13. Metadata Info
 */
export const metadata = {
    title: "Full Stack Development Course in Rajkot & Ahmedabad",
    description: "Alphabit Skill's Full Stack Development course in Rajkot & Ahmedabad — Front-End or PHP tracks, live projects, 300+ hiring partners. NSDC-certified. Book a free demo."
};
