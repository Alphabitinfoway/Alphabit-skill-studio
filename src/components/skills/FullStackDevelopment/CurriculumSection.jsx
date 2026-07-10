"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const mernModules = [
    {
        num: "01",
        title: "Web Development Fundamentals",
        icon: "/skill/ITSkills/FullStackDevelopment/Frame1.png",
        image: "/skill/ITSkills/FullStackDevelopment/module1.png",
        description: "Build semantic HTML5 structure, responsive CSS3 layouts using Flexbox and Grid, and real-world design principles every full stack developer is expected to know before their first interview",
        tags: ["HTML 5", "CSS 3", "Css Grid", "Responsiveness", "Semantic Structure"],
        techstack: {
            frontend: "HTML 5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind • CSS",
            backend: "Node.js • Express.js • REST APIs • JWT Authentication • Middleware",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "02",
        title: "Javascript & ES6+",
        icon: "/skill/ITSkills/FullStackDevelopment/Frame2.png",
        image: "/skill/ITSkills/FullStackDevelopment/module2.png",
        description: "Master modern core JavaScript. Understand closures, prototypes, asynchronous execution models, APIs, and modern ES6+ features.",
        tags: ["ES6+", "DOM Manipulation", "Promises", "Async/Await", "Event Loop"],
        techstack: {
            frontend: "HTML 5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind • CSS",
            backend: "Node.js • Express.js • REST APIs • JWT Authentication • Middleware",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "03",
        title: "React.js Frontend",
        icon: "/skill/ITSkills/FullStackDevelopment/Frame3.png",
        image: "/skill/ITSkills/FullStackDevelopment/module3.png",
        description: "Construct scalable user interfaces. Master JSX, props, state, customized hooks, state management with Redux, and React Router.",
        tags: ["React Hooks", "Redux Toolkit", "Context API", "SPA Routing", "Component Lifecycle"],
        techstack: {
           frontend: "HTML 5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind • CSS",
            backend: "Node.js • Express.js • REST APIs • JWT Authentication • Middleware",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "04",
        title: "Node.js & Express.js",
        icon: "/skill/ITSkills/FullStackDevelopment/Frame4.png",
        image: "/skill/ITSkills/FullStackDevelopment/module4.png",
        description: "Build high-performance RESTful APIs. Learn request-response lifecycle, routing, custom middlewares, and file streaming.",
        tags: ["RESTful APIs", "Express Routing", "Middleware Architecture", "Event Loop", "Error Handling"],
        techstack: {
           frontend: "HTML 5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind • CSS",
            backend: "Node.js • Express.js • REST APIs • JWT Authentication • Middleware",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "05",
        title: "MongoDB & Database Design",
        icon: "/skill/ITSkills/FullStackDevelopment/Frame5.png",
        image: "/skill/ITSkills/FullStackDevelopment/module5.png",
        description: "Design efficient NoSQL databases. Master Mongoose schemas, relations, advanced aggregation queries, indexing, and optimization.",
        tags: ["NoSQL DB", "Mongoose ODM", "Data Modeling", "Aggregation Pipelines", "Query Optimization"],
        techstack: {
           frontend: "HTML 5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind • CSS",
            backend: "Node.js • Express.js • REST APIs • JWT Authentication • Middleware",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "06",
        title: "Authentication, Security & APIs",
        icon: "/skill/ITSkills/FullStackDevelopment/Frame6.png",
        image: "/skill/ITSkills/FullStackDevelopment/module6.png",
        description: "Secure your backend infrastructure. Learn password hashing, JSON Web Tokens (JWT), session cookies, OAuth, and API security headers.",
        tags: ["JWT Authentication", "Bcrypt", "Role-based Auth", "CORS & Helmet", "OAuth 2.0"],
        techstack: {
            frontend: "HTML 5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind • CSS",
            backend: "Node.js • Express.js • REST APIs • JWT Authentication • Middleware",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "07",
        title: "Git & Github",
        icon: "/skill/ITSkills/FullStackDevelopment/Frame7.png",
        image: "/skill/ITSkills/FullStackDevelopment/module7.png",
        description: "Collaborate professionally. Master Git branch management, rebasing, pull requests, resolving merge conflicts, and team collaboration models.",
        tags: ["Version Control", "Merge Conflicts", "Pull Requests", "Git Rebase", "Team Workflows"],
        techstack: {
           frontend: "HTML 5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind • CSS",
            backend: "Node.js • Express.js • REST APIs • JWT Authentication • Middleware",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "08",
        title: "Deployment & Cloud Hosting",
        icon: "/skill/ITSkills/FullStackDevelopment/Frame8.png",
        image: "/skill/ITSkills/FullStackDevelopment/module8.png",
        description: "Launch your application. Master AWS cloud environments, containerization with Docker, reverse proxy setups, and environment management.",
        tags: ["Docker Containers", "AWS Cloud", "Reverse Proxies", "CI/CD Pipelines", "SSL Certification"],
        techstack: {
            frontend: "HTML 5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind • CSS",
            backend: "Node.js • Express.js • REST APIs • JWT Authentication • Middleware",
            database: "MongoDB • Mongoose • MySQL • phpMyAdmin",
            tools: "Git • GitHub • Postman • Vercel • Render • Railway • npm • yarn"
        }
    },
    {
        num: "09",
        title: "Capstone Projects, Internship & Portfolio",
        icon: "/skill/ITSkills/FullStackDevelopment/Frame9.png",
        image: "/skill/ITSkills/FullStackDevelopment/module9.png",
        description: "Polish your skills on production projects. Build complex systems, practice technical mock interviews, and optimize your developer profiles.",
        tags: ["Live Capstone", "Developer Portfolio", "Technical Mock Interviews", "Resume Optimization", "LinkedIn Prep"],
        techstack: {
            frontend: "HTML 5 • CSS3 • JavaScript ES6+ • React.js • Redux • Bootstrap • Tailwind • CSS",
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
        icon: "/skill/ITSkills/FullStackDevelopment/Frame1.png",
        image: "/skill/ITSkills/FullStackDevelopment/module1.png",
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
        icon: "/skill/ITSkills/FullStackDevelopment/Frame2.png",
        image: "/skill/ITSkills/FullStackDevelopment/module2.png",
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
        icon: "/skill/ITSkills/FullStackDevelopment/Frame3.png",
        image: "/skill/ITSkills/FullStackDevelopment/module3.png",
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
        icon: "/skill/ITSkills/FullStackDevelopment/Frame4.png",
        image: "/skill/ITSkills/FullStackDevelopment/module4.png",
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
        icon: "/skill/ITSkills/FullStackDevelopment/Frame5.png",
        image: "/skill/ITSkills/FullStackDevelopment/module5.png",
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
        icon: "/skill/ITSkills/FullStackDevelopment/Frame6.png",
        image: "/skill/ITSkills/FullStackDevelopment/module6.png",
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
        icon: "/skill/ITSkills/FullStackDevelopment/Frame7.png",
        image: "/skill/ITSkills/FullStackDevelopment/module7.png",
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
        icon: "/skill/ITSkills/FullStackDevelopment/Frame8.png",
        image: "/skill/ITSkills/FullStackDevelopment/module8.png",
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
        icon: "/skill/ITSkills/FullStackDevelopment/Frame9.png",
        image: "/skill/ITSkills/FullStackDevelopment/module9.png",
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
        icon: "/skill/ITSkills/FullStackDevelopment/Frame9.png",
        image: "/skill/ITSkills/FullStackDevelopment/module9.png",
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

export default function CurriculumSection() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeModule, setActiveModule] = useState(0);
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const tabRefs = useRef([]);

    // Form and Modal States
    const [showFormModal, setShowFormModal] = useState(false);
    const [hasFilledForm, setHasFilledForm] = useState(false);

    // Form inputs state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    useEffect(() => {
        setActiveModule(0);
    }, [activeTab]);

    useEffect(() => {
        const el = tabRefs.current[activeTab];
        if (el) {
            const { offsetLeft, offsetWidth } = el;
            setPillStyle({ left: offsetLeft, width: offsetWidth, opacity: 1 });
        }
    }, [activeTab]);

    const activeModulesList = activeTab === 0 ? mernModules : javaModules;
    const currentData = activeModulesList[activeModule] || activeModulesList[0];

    const currentPathLabel = activeTab === 0 
        ? "Full Stack Web Development (MERN)" 
        : "Full Stack Java Development";

    const handleOpenPdfFlow = () => {
        if (hasFilledForm) {
            window.open(`/skills/curriculum?path=${activeTab === 0 ? "mern" : "java"}`, "_blank");
        } else {
            setShowFormModal(true);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.phone) {
            setHasFilledForm(true);
            setShowFormModal(false);
            window.open(`/skills/curriculum?path=${activeTab === 0 ? "mern" : "java"}`, "_blank");
        }
    };

    return (
        <section
            className="relative w-full bg-gradient-to-b from-[#7143FE] via-[#D7CDF7] to-[#F5F5F5] pt-36 pb-24 px-6 md:px-12 overflow-hidden"
            style={{
                clipPath: "ellipse(110% 100% at 50% 100%)",
                marginTop: "80px"
            }}
        >
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-[1600px] mx-auto relative z-10">

                {/* HEADING */}
                <div className="text-center mb-16 px-4 flex flex-row items-baseline justify-center gap-3 flex-wrap">
                    <span
                        className="text-[#FF5622] italic font-normal"
                        style={{
                            fontFamily: "'PP Editorial New', serif",
                            fontSize: "72px",
                            lineHeight: "100%"
                        }}
                    >
                        Curriculum
                    </span>
                    <h2
                        className="text-black font-bold tracking-tight"
                        style={{
                            fontFamily: "'Cabinet Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: "32px",
                            lineHeight: "100%",
                            letterSpacing: "0%"
                        }}
                    >
                        that shapes your future
                    </h2>
                </div>

                {/* Glass Tabs Selector */}
                <div className="flex justify-start mb-16">
                    <div className="relative flex gap-3 p-1.5 rounded-2xl overflow-hidden"
                        style={{
                            background: "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(230,220,255,0.30) 100%)",
                            backdropFilter: "blur(16px) saturate(1.6)",
                            WebkitBackdropFilter: "blur(16px) saturate(1.6)",
                            border: "1.5px solid rgba(255,255,255,0.65)",
                        }}
                    >
                        <motion.span
                            className="absolute top-1.5 bottom-1.5 rounded-xl pointer-events-none"
                            style={{
                                background: `linear-gradient(170deg, rgba(255,255,255,0.70) 0%, rgba(200,180,255,0.35) 45%, rgba(124,58,237,0.20) 100%)`,
                                boxShadow: `
                                    0 4px 20px rgba(124,58,237,0.20),
                                    0 1.5px 5px rgba(124,58,237,0.12)
                                `,
                                backdropFilter: "blur(18px) saturate(2)",
                                WebkitBackdropFilter: "blur(18px) saturate(2)",
                                border: "1.5px solid rgba(255,255,255,0.70)",
                            }}
                            animate={{
                                left: pillStyle.left,
                                width: pillStyle.width,
                                opacity: pillStyle.opacity,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 34,
                                opacity: { duration: 0.15 },
                            }}
                        />

                        <button
                            ref={(el) => (tabRefs.current[0] = el)}
                            onClick={() => setActiveTab(0)}
                            className={`relative z-10 px-5 py-2.5 whitespace-nowrap text-[14px] font-[600] rounded-xl transition-colors duration-200 ${
                                activeTab === 0
                                    ? "text-[#7C3AED] font-[700]"
                                    : "text-gray-600 hover:text-gray-800"
                            }`}
                        >
                            Full Stack Web Development (MERN)
                        </button>
                        <button
                            ref={(el) => (tabRefs.current[1] = el)}
                            onClick={() => setActiveTab(1)}
                            className={`relative z-10 px-5 py-2.5 whitespace-nowrap text-[14px] font-[600] rounded-xl transition-colors duration-200 ${
                                activeTab === 1
                                    ? "text-[#7C3AED] font-[700]"
                                    : "text-gray-600 hover:text-gray-800"
                            }`}
                        >
                            Full Stack Java Development
                        </button>
                    </div>
                </div>

                {/* Left Timeline + Right Detail Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
                    
                    {/* Left Column: Timeline Modules list */}
                    <div className="lg:col-span-4 relative p-6 border-2 border-black rounded-[32px]">
                        <div className="absolute left-[48px] top-12 bottom-12 w-[2px] border-l-2 border-dashed border-[#7143FE]/35 pointer-events-none" />

                        <div className="flex flex-col gap-6">
                            {activeModulesList.map((item, index) => {
                                const isActive = activeModule === index;

                                return (
                                    <div
                                        key={item.num}
                                        onClick={() => setActiveModule(index)}
                                        className="flex items-center gap-6 cursor-pointer group"
                                    >
                                        <div
                                            className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-2 font-bold transition-all duration-300 z-10 ${
                                                isActive
                                                    ? "bg-[#7143FE] border-[#7143FE] text-white shadow-[0_4px_12px_rgba(113,67,254,0.3)]"
                                                    : "bg-white border-[#7143FE]/40 text-[#7143FE] group-hover:border-[#7143FE] group-hover:bg-[#7143FE]/5"
                                            }`}
                                        >
                                            {item.num}
                                        </div>

                                        <div
                                            className={`flex-grow flex items-center gap-4 px-5 py-4 rounded-2xl border-[1.5px] transition-all duration-300 ${
                                                isActive
                                                    ? "bg-[#E0D7FF] border-[#7143FE] shadow-[0_8px_20px_rgba(113,67,254,0.12)]"
                                                    : "bg-white border-transparent hover:border-[#7143FE]/30 shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                                            }`}
                                        >
                                            <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 flex items-center justify-center bg-white shadow-sm border border-gray-100 p-1.5">
                                                <img
                                                    src={item.icon}
                                                    alt={item.title}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            <span
                                                className={`text-[15px] font-[600] leading-tight font-cabinet transition-colors duration-300 ${
                                                    isActive ? "text-[#7143FE]" : "text-[#374151]"
                                                }`}
                                            >
                                                {item.title}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Module Details Preview Card */}
                    <div className="lg:col-span-8 lg:sticky lg:top-28">
                        <div className="p-8 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${activeTab}-${activeModule}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full"
                                >
                                    {/* MODULE BADGE */}
                                    <div className="mb-4">
                                        <span className="text-[12px] font-[700] uppercase tracking-wider text-[#7143FE] bg-[#B29AFA] border-[1px] border-[#7143FE] px-3.5 py-1.5 rounded-full inline-block">
                                            Module {currentData.num}
                                        </span>
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="text-[40px] font-bold text-gray-900 font-cabinet mb-4 leading-tight">
                                        {currentData.title}
                                    </h3>

                                    {/* TOP SECTION: Flex layout for Description + Image */}
                                    <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
                                        <div className="flex-1 pt-4">
                                            <p className="text-[#374151] leading-relaxed font-cabinet" style={{ fontSize: "20px" }}>
                                                {currentData.description}
                                            </p>
                                        </div>
                                        <div className="w-full md:w-[50%] lg:w-[45%] shrink-0 md:-mt-8">
                                            <div className="relative w-full rounded-2xl overflow-hidden bg-transparent">
                                                <img
                                                    src={currentData.image}
                                                    alt={currentData.title}
                                                    className="w-full h-auto object-contain max-h-[300px]"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* MIDDLE SECTION: What you'll learn */}
                                    <div className="mt-1">
                                        <h4 className="text-[36px] font-bold text-gray-900 font-cabinet mb-4">
                                            What you'll learn
                                        </h4>
                                        <div className="flex flex-wrap gap-2.5">
                                            {currentData.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className=" text-gray-900 text-[16px] font-[500] px-4 py-2 border-[1.5px] border-gray-900 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* BOTTOM SECTION: Techstack */}
                                    <div className="mt-8 pt-4">
                                        <h4 className="text-[36px] font-bold text-gray-900 font-cabinet mb-4">
                                            Techstack
                                        </h4>
                                        <div className="flex flex-col gap-3 text-[20px] leading-relaxed text-gray-800 font-cabinet">
                                            {currentData.techstack.frontend && (
                                                <p>
                                                    <strong className="text-gray-900 font-bold">Frontend:</strong> {currentData.techstack.frontend}
                                                </p>
                                            )}
                                            {currentData.techstack.backend && (
                                                <p>
                                                    <strong className="text-gray-900 font-bold">Backend:</strong> {currentData.techstack.backend}
                                                </p>
                                            )}
                                            {currentData.techstack.database && (
                                                <p>
                                                    <strong className="text-gray-900 font-bold">Database:</strong> {currentData.techstack.database}
                                                </p>
                                            )}
                                            {currentData.techstack.devops && (
                                                <p>
                                                    <strong className="text-gray-900 font-bold">DevOps & Deployment:</strong> {currentData.techstack.devops}
                                                </p>
                                            )}
                                            {currentData.techstack.tools && (
                                                <p>
                                                    <strong className="text-gray-900 font-bold">Tools & Deployment:</strong> {currentData.techstack.tools}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* PDF SECURE VIEW TRIGGERS */}
                                    <div className="mt-12 pt-6 flex justify-end">
                                        <button
                                            onClick={handleOpenPdfFlow}
                                            className="px-8 py-4 bg-[#7143FE] hover:bg-[#5C32EB] text-white font-bold text-[16px] rounded-2xl shadow-[0_6px_20px_rgba(113,67,254,0.3)] hover:shadow-[0_8px_24px_rgba(113,67,254,0.4)] hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2.5"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                            </svg>
                                            View Full Curriculum PDF
                                        </button>
                                    </div>

                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>

            </div>

            {/* MODAL 1: Lead Capture Form */}
            <AnimatePresence>
                {showFormModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowFormModal(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal Container */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-10 border border-gray-100 overflow-hidden"
                        >
                            {/* Decorative Background */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7143FE]/10 rounded-full blur-3xl -mr-10 -mt-10" />

                            <div className="flex justify-between items-start mb-6 relative">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 font-cabinet mb-1">
                                        Unlock Full Curriculum
                                    </h3>
                                    <p className="text-gray-500 text-sm">
                                        Please enter your details below to view the detailed PDF curriculum.
                                    </p>
                                </div>
                                <button 
                                    onClick={() => setShowFormModal(false)}
                                    className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleFormSubmit} className="space-y-4 relative">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Name</label>
                                    <input 
                                        type="text" 
                                        required
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7143FE]/30 focus:border-[#7143FE] transition-all text-gray-900"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                                    <input 
                                        type="email" 
                                        required
                                        placeholder="Enter your email address"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7143FE]/30 focus:border-[#7143FE] transition-all text-gray-900"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        required
                                        placeholder="Enter your mobile number"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7143FE]/30 focus:border-[#7143FE] transition-all text-gray-900"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Selected Path</label>
                                    <input 
                                        type="text" 
                                        disabled
                                        value={currentPathLabel}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 font-[500] cursor-not-allowed"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full mt-4 py-4 bg-[#7143FE] hover:bg-[#5C32EB] text-white font-bold rounded-xl shadow-lg transition-all duration-200"
                                >
                                    Unlock Curriculum PDF
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </section>
    );
}
