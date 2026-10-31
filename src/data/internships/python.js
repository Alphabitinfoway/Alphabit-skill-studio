// ==============================================================================
// Python Internship - Complete Data Configuration
// Alphabit Skill Studio
// ==============================================================================

export const pythonInternshipData = {
  slug: "python",
  title: "Python Internship",
  category: "Technical Internships",

  // ── SEO Metadata ──────────────────────────────────────────────────────────
  metadata: {
    title: "Python Internship in Rajkot & Online | Alphabit Skill",
    description:
      "Join Alphabit Skill's hands-on Python Internship. Build production-grade APIs, work on live projects, get 1-on-1 mentorship, NSDC-recognized certificate, and placement support.",
    keywords: [
      "Python Internship",
      "Python Internship in Rajkot",
      "Python Developer Internship",
      "Software Engineering Internship",
      "Live Python Projects",
      "FastAPI Django Internship",
      "Alphabit Skill Internship"
    ],
    openGraph: {
      title: "Python Internship | Alphabit Skill Studio",
      description:
        "Industrial Python Internship with live project development, industry mentorship, and verified certification.",
      url: "https://alphabitskill.com/internships/python",
      siteName: "Alphabit Skill",
      type: "website",
    },
  },

  // ── Hero Section ─────────────────────────────────────────────────────────
  hero: {
    titlePrefix: "Python",
    titleSuffix: "Internship",
    tagline:
      "Accelerate your engineering career with real-world production projects, 1-on-1 industry mentorship, NSDC-recognized certification, and 100% placement support.",
    heroImage:
      "https://res.cloudinary.com/dir8eqqnk/image/upload/v1792580784/Python_hero_zyjvwq.webp",
    highlights: [
      "Government (NSDC) & ISO Verified Certification",
      "100% Production Codebase & Live Industrial Repos",
      "1-on-1 Senior Developer Mentorship & Code Reviews",
      "Mock Technical Interviews & Placement Assistance",
    ],
    primaryCtaText: "Apply Now",
    secondaryCtaText: "Call Us",
    phoneNumber: "+919409207327",
    badgeText: "Winter 2026 Batch Open",
  },

  // ── Quick Details Cards ──────────────────────────────────────────────────
  quickDetails: [
    {
      id: "duration",
      label: "Duration",
      value: "3–6 Months",
      subtext: "Flexible Pace (10-15 hrs/week)",
      icon: "Clock",
      highlight: false,
    },
    {
      id: "mode",
      label: "Mode",
      value: "Online & Offline",
      subtext: "Interactive Live + Lab Access",
      icon: "Laptop",
      highlight: false,
    },
    {
      id: "fees",
      label: "Fees",
      value: "Flexible EMI",
      subtext: "No-Cost EMI & Scholarships",
      icon: "CreditCard",
      highlight: true,
    },
    {
      id: "certificate",
      label: "Certificate",
      value: "Yes (NSDC & ISO)",
      subtext: "Industry & Govt. Verified",
      icon: "Award",
      highlight: false,
    },
    {
      id: "start-date",
      label: "Start Date",
      value: "Upcoming Cohort",
      subtext: "1st & 15th of Every Month",
      icon: "Calendar",
      highlight: false,
    },
  ],

  // ── Overview Section ─────────────────────────────────────────────────────
  overview: {
    headingNormal: "About The",
    headingItalic: "Python Internship",
    subheading:
      "Bridge the gap between academic theory and enterprise software engineering.",
    description: [
      "The Python Internship at Alphabit Skill Studio is an intensive, industry-aligned training and execution program designed for students, fresh graduates, and career changers looking to become high-impact software developers.",
      "Unlike conventional training where you only watch pre-recorded tutorials or build toy apps, our internship immerses you into real production environments. You will write clean, PEP 8-compliant Python code, architect relational database schemas, construct high-performance REST APIs with FastAPI and Django, and deploy containerized microservices to cloud infrastructure.",
      "You work alongside senior software engineers, participate in weekly code reviews, and build an impressive portfolio of real-world GitHub repositories that hiring managers value."
    ],
    features: [
      "Work on active production repositories with Git branching & pull request workflows",
      "Weekly 1-on-1 architecture feedback & code optimization by senior engineers",
      "Hands-on experience with modern industry tools: Docker, PostgreSQL, Redis & FastAPI",
      "Official Letter of Recommendation (LOR) for top-performing interns",
      "Comprehensive placement training: mock technical coding rounds & system design",
      "Dual delivery modes: Join remotely online or in-person at our tech campus"
    ],
    stats: [
      { label: "Hours of Practical Execution", value: "180+ Hrs" },
      { label: "Production Repositories Built", value: "5+ Apps" },
      { label: "Active Hiring Partners", value: "300+" },
      { label: "Internship Satisfaction Rate", value: "98.7%" }
    ]
  },

  // ── Syllabus / Topics Covered ────────────────────────────────────────────
  syllabus: {
    headingNormal: "Curriculum &",
    headingItalic: "Topics Covered",
    description:
      "A progressive, project-driven syllabus designed to take you from core programming to scalable cloud-deployed architectures.",
    modules: [
      {
        num: "01",
        title: "Python Core Architecture & Advanced OOP",
        duration: "Weeks 1–3",
        summary: "Build rock-solid mastery over modern Python idioms, memory model, and object-oriented principles.",
        topics: [
          "Python 3.12 syntax, dynamic typing, and memory management",
          "Virtual environments, dependency management with venv & Poetry",
          "Object-Oriented Programming (OOP): classes, inheritance, dunder methods & polymorphism",
          "Decorators, generator functions, iterators, and context managers",
          "Robust exception handling, custom errors, and clean logging practices"
        ],
        tools: ["Python 3.12", "VS Code", "Black Formatter", "Flake8"]
      },
      {
        num: "02",
        title: "Data Structures, Algorithms & Clean Code",
        duration: "Weeks 4–6",
        summary: "Develop computational problem-solving and algorithmic thinking required for technical interviews.",
        topics: [
          "Asymptotic analysis: Big-O time and space complexity",
          "Built-in collections: lists, dicts, sets, tuples, and the collections module",
          "Custom data structures: linked lists, stacks, queues, hash maps, and binary trees",
          "Essential searching & sorting algorithms with optimization techniques",
          "Writing testable, maintainable, PEP 8-compliant code with type hints"
        ],
        tools: ["Python Collections", "PyTest", "Mypy", "LeetCode Patterns"]
      },
      {
        num: "03",
        title: "Database Modeling, SQL & ORM Engineering",
        duration: "Weeks 7–9",
        summary: "Master data persistence, schema design, relational normalization, and modern ORM libraries.",
        topics: [
          "Relational database design, 3NF normalization, and foreign keys",
          "Advanced SQL queries: joins, group by, window functions, and indexing",
          "PostgreSQL and SQLite integration in Python backends",
          "Object-Relational Mapping (ORM) with SQLAlchemy and Django ORM",
          "Database migrations, transaction management, and connection pooling"
        ],
        tools: ["PostgreSQL", "SQLite", "SQLAlchemy", "Alembic", "DBeaver"]
      },
      {
        num: "04",
        title: "Backend Web Development with FastAPI & Django",
        duration: "Weeks 10–13",
        summary: "Construct production-ready RESTful APIs, business logic layers, and authentication mechanisms.",
        topics: [
          "FastAPI fundamentals: routing, Pydantic schemas, dependency injection, and automatic OpenAPI docs",
          "Django framework: MVT pattern, built-in ORM, admin dashboard, and Django REST Framework (DRF)",
          "RESTful architectural constraints, HTTP status codes, and JSON serialization",
          "User authentication: password hashing with bcrypt, JWT tokens, and OAuth2 scopes",
          "Role-based access control (RBAC) and security best practices against CORS, CSRF, and SQLi"
        ],
        tools: ["FastAPI", "Django REST Framework", "Pydantic", "PyJWT", "Postman"]
      },
      {
        num: "05",
        title: "Asynchronous APIs, Background Workers & Integrations",
        duration: "Weeks 14–17",
        summary: "Tackle high-concurrency systems, asynchronous I/O, event-driven jobs, and external web APIs.",
        topics: [
          "AsyncIO fundamentals: event loops, coroutines, tasks, and non-blocking I/O",
          "Real-time bidirectional communication using WebSockets",
          "Background task processing and message queues with Celery and Redis",
          "Third-party integrations: payment gateways (Stripe/Razorpay), SMS/Email notifications",
          "Consuming and deploying AI APIs (OpenAI, Gemini) into backend services"
        ],
        tools: ["AsyncIO", "WebSockets", "Celery", "Redis", "HTTPX"]
      },
      {
        num: "06",
        title: "Testing, Containerization, CI/CD & Cloud Deployment",
        duration: "Weeks 18–20",
        summary: "Package, test, and ship your applications to the cloud following modern DevOps methodologies.",
        topics: [
          "Automated unit, integration, and endpoint testing with PyTest and fixtures",
          "Containerization with Docker: multi-stage Dockerfiles and docker-compose orchestration",
          "Continuous Integration & Continuous Deployment (CI/CD) with GitHub Actions",
          "Production deployment on cloud platforms (Render, AWS EC2, or Railway)",
          "Application monitoring, health checks, environment variables, and log management"
        ],
        tools: ["PyTest", "Docker", "Docker Compose", "GitHub Actions", "AWS / Render"]
      }
    ]
  },

  // ── Projects Students Will Build ─────────────────────────────────────────
  projects: {
    headingNormal: "Real-World Projects",
    headingItalic: "You Will Build",
    description:
      "No generic tutorial clones. You will build enterprise-grade applications designed to stand out on GitHub and in technical interviews.",
    items: [
      {
        id: "proj-1",
        title: "Enterprise Multi-Vendor E-Commerce REST API",
        category: "Full Backend System",
        description:
          "A robust, multi-tenant marketplace backend featuring product catalogs, inventory control, cart checkout, payment gateway integration, and automated invoice emails.",
        highlights: [
          "JWT & Role-based authentication (Admin, Seller, Customer)",
          "PostgreSQL database with indexed search & complex queries",
          "Payment processing with webhook listeners & idempotency",
          "Asynchronous email delivery using Celery & Redis"
        ],
        techStack: ["Django REST Framework", "PostgreSQL", "Celery", "Redis", "Stripe API", "Docker"]
      },
      {
        id: "proj-2",
        title: "AI-Powered Smart Knowledge Search & Q&A Assistant",
        category: "AI / GenAI Backend",
        description:
          "An intelligent Retrieval-Augmented Generation (RAG) backend that ingests company PDF documents, generates semantic embeddings, and streams contextual AI answers.",
        highlights: [
          "FastAPI asynchronous streaming endpoints",
          "Document parsing, chunking, and vector indexing with ChromaDB",
          "LLM integration using LangChain with OpenAI & Gemini APIs",
          "Rate limiting, user session history, and prompt caching"
        ],
        techStack: ["FastAPI", "LangChain", "ChromaDB", "Python AsyncIO", "Pydantic", "OpenAI / Gemini"]
      },
      {
        id: "proj-3",
        title: "Real-Time Collaborative Workspace & Chat Engine",
        category: "Real-Time WebSockets",
        description:
          "A scalable real-time backend powering instant messaging, channel broadcasting, typing indicators, read receipts, and live team task updates.",
        highlights: [
          "Persistent bi-directional WebSocket connections",
          "Redis Pub/Sub message broker for multi-instance scaling",
          "Message persistence with timestamps & message pagination",
          "Online presence tracking & notification triggers"
        ],
        techStack: ["FastAPI", "WebSockets", "Redis Pub/Sub", "MongoDB", "PyTest"]
      },
      {
        id: "proj-4",
        title: "Automated Web Intelligence & Price Tracker Pipeline",
        category: "Data Engineering & Automation",
        description:
          "An autonomous data scraping and monitoring system that crawls target websites, parses dynamic content, stores clean time-series data, and generates analytics reports.",
        highlights: [
          "Headless browser crawling with anti-bot bypass & proxy rotation",
          "Scheduled cron tasks for continuous automated scraping",
          "Data transformation & anomaly detection using Pandas",
          "Automated PDF & Excel report dispatch via SMTP"
        ],
        techStack: ["Python 3", "Playwright", "BeautifulSoup4", "Pandas", "SQLite", "ReportLab"]
      },
      {
        id: "proj-5",
        title: "Microservices Authentication & Single Sign-On (SSO) Service",
        category: "System Architecture",
        description:
          "A standalone, high-security microservice handling user registrations, password resets, multi-factor authentication (MFA), JWT issue/refresh, and token blacklisting.",
        highlights: [
          "Stateless JWT access tokens with encrypted refresh token rotation",
          "IP-based rate limiting & brute-force protection",
          "Complete PyTest coverage with automated mock database fixtures",
          "Ready-to-deploy Docker image with zero-downtime health endpoints"
        ],
        techStack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "PyTest", "Bcrypt"]
      }
    ]
  },

  // ── Skills You Will Learn ────────────────────────────────────────────────
  skills: {
    headingNormal: "Industry Skills",
    headingItalic: "You Will Master",
    description:
      "Acquire the precise engineering toolchain and conceptual competencies top tech employers demand.",
    categories: [
      {
        name: "Core & Language",
        skills: [
          "Python 3.12+",
          "Object-Oriented Programming (OOP)",
          "Data Structures & Algorithms",
          "Functional Programming",
          "PEP 8 Clean Code Standards",
          "Type Hinting & Mypy"
        ]
      },
      {
        name: "Frameworks & APIs",
        skills: [
          "FastAPI",
          "Django & Django REST Framework",
          "RESTful Architecture",
          "Pydantic Validation",
          "WebSockets",
          "AsyncIO Non-blocking I/O"
        ]
      },
      {
        name: "Databases & Storage",
        skills: [
          "PostgreSQL",
          "SQLite",
          "SQLAlchemy ORM",
          "Django ORM",
          "Redis Caching & Pub/Sub",
          "Vector Databases (ChromaDB)"
        ]
      },
      {
        name: "DevOps & Tools",
        skills: [
          "Git & GitHub Workflows",
          "Docker & Docker Compose",
          "PyTest & Unit Testing",
          "Postman API Testing",
          "CI/CD with GitHub Actions",
          "Cloud Deployment (AWS / Render)"
        ]
      },
      {
        name: "Architecture & Professional",
        skills: [
          "Microservices Patterns",
          "Token-Based Auth (JWT & OAuth2)",
          "Agile / Scrum Methodologies",
          "Technical Code Reviews",
          "System Design Basics",
          "Technical Problem Solving"
        ]
      }
    ]
  },

  // ── Eligibility Criteria ─────────────────────────────────────────────────
  eligibility: {
    headingNormal: "Eligibility &",
    headingItalic: "Who Can Apply",
    description:
      "Our internship is structured to accommodate ambitious learners from varied technical backgrounds.",
    cards: [
      {
        title: "College Students",
        description:
          "Students currently pursuing B.E., B.Tech (CS/IT/EC), BCA, MCA, B.Sc IT/CS, or Diploma engineering seeking real practical experience or fulfilling their university final semester project requirement.",
        icon: "GraduationCap",
        requirements: "Valid college ID or enrollment proof; 2nd year and above preferred."
      },
      {
        title: "Recent Graduates & Job Seekers",
        description:
          "Fresh graduates looking to bridge the employability gap with real-world production projects on GitHub and gain confidence for technical interviews.",
        icon: "Briefcase",
        requirements: "Graduated within the last 1–3 years; dedicated commitment to placement preparation."
      },
      {
        title: "Career Changers & Transitioners",
        description:
          "Working professionals from non-tech or support backgrounds wanting to pivot into high-growth Python backend development and software engineering roles.",
        icon: "Repeat",
        requirements: "Basic computer familiarity; dedication of 10–15 hours weekly."
      },
      {
        title: "Self-Taught Programmers",
        description:
          "Learners who have studied basic Python syntax online and now need formal engineering methodology, code reviews, and production-grade project experience.",
        icon: "Code2",
        requirements: "Basic programming curiosity and strong willingness to build projects."
      }
    ],
    prerequisites: [
      "A laptop or desktop PC (Windows, macOS, or Linux) with at least 8GB RAM",
      "Reliable internet connection for live code reviews and repository sync",
      "Basic understanding of any programming language or logic (Python basics are a plus, but covered from foundations)",
      "Commitment of 10 to 15 hours per week for project milestones and mentorship"
    ]
  },

  // ── Benefits Section ─────────────────────────────────────────────────────
  benefits: {
    headingNormal: "Exclusive",
    headingItalic: "Internship Benefits",
    description:
      "Equip yourself with verified credentials, real portfolio artifacts, and lifelong career leverage.",
    items: [
      {
        title: "NSDC & ISO Verified Certification",
        description:
          "Earn a government-recognized National Skill Development Corporation (NSDC) and ISO certified internship credential verifiable online.",
        icon: "Award"
      },
      {
        title: "Official Letter of Recommendation (LOR)",
        description:
          "High-performing interns receive an official personalized LOR from our Lead Engineers to elevate their master's or job applications.",
        icon: "FileCheck"
      },
      {
        title: "100% Live Industrial Projects",
        description:
          "Work on production-grade GitHub repositories with real pull requests, architectural reviews, and continuous integration testing.",
        icon: "Layers"
      },
      {
        title: "1-on-1 Senior Developer Mentorship",
        description:
          "Weekly private review sessions with working backend architects who critique your code, optimize queries, and guide your growth.",
        icon: "Users"
      },
      {
        title: "Mock Interviews & Placement Assistance",
        description:
          "Rigorous technical mock coding rounds, system design discussions, and direct resume referrals to our 300+ hiring partners.",
        icon: "Compass"
      },
      {
        title: "Lifetime Alumni & Coding Community",
        description:
          "Join our private developer community with ongoing access to workshop recordings, tech talks, open-source cohorts, and hiring leads.",
        icon: "Sparkles"
      }
    ]
  },

  // ── FAQ Section (Accordion) ──────────────────────────────────────────────
  faqs: {
    headingNormal: "Frequently Asked",
    headingItalic: "Questions",
    description: "Got questions about the Python Internship? Here are answers to common queries.",
    items: [
      {
        id: 1,
        question: "What is the duration and weekly time commitment for this internship?",
        answer:
          "The program runs flexibly for 3 to 6 months depending on whether you choose the fast-track or standard track. We recommend committing approximately 10 to 15 hours per week, which includes live sessions, project development, and 1-on-1 mentorship reviews."
      },
      {
        id: 2,
        question: "Is this Python internship available online or offline?",
        answer:
          "Both options are available! You can participate 100% remotely online with interactive live sessions and digital code reviews, or attend in person at our campus lab in Rajkot, Gujarat. Both tracks share the same syllabus, project mentors, and verified certifications."
      },
      {
        id: 3,
        question: "Will I receive an official certificate and Letter of Recommendation (LOR)?",
        answer:
          "Yes! Upon successful completion of your internship project milestones, you receive a Government-recognized NSDC and ISO verified Internship Completion Certificate. In addition, interns who demonstrate exceptional performance receive an official Letter of Recommendation (LOR)."
      },
      {
        id: 4,
        question: "Do I need prior advanced coding experience in Python to apply?",
        answer:
          "No advanced experience is required. We start with Python core foundations, OOP principles, and clean coding practices before transitioning into databases and web frameworks. Basic familiarity with logic or any programming language is helpful, but our mentors guide you step-by-step."
      },
      {
        id: 5,
        question: "Can I use this internship for my university/college final semester project?",
        answer:
          "Absolutely. Our internship fulfills academic project submission guidelines for B.E., B.Tech, BCA, MCA, and Diploma degrees. We provide official project acceptance letters, weekly synopsis logs, and final completion letters required by your college."
      },
      {
        id: 6,
        question: "What kind of projects will I build during the internship?",
        answer:
          "You will build 5 enterprise-grade applications including an E-Commerce REST API with Django and PostgreSQL, an AI RAG Assistant with FastAPI and Vector Databases, a Real-Time WebSocket Chat system, an Automated Web Scraping Pipeline, and an SSO Authentication Microservice."
      },
      {
        id: 7,
        question: "How does the placement support and hiring referral process work?",
        answer:
          "Alphabit Skill has tie-ups with 300+ hiring companies across Ahmedabad, Rajkot, Surat, Pune, and Bengaluru. Our career team optimizes your GitHub profile, conducts mock coding interviews, and forwards your profile directly to tech leads and HR managers."
      },
      {
        id: 8,
        question: "How do I apply, and what is the selection procedure?",
        answer:
          "Click the 'Apply Now' button on this page to submit your details. Our admissions counselor will schedule a quick consultation to understand your learning goals, explain batch timings, and guide you through the enrollment process."
      }
    ]
  },

  // ── Bottom Call To Action ────────────────────────────────────────────────
  cta: {
    line1Normal: "Ready to Master",
    line1Italic: "Python Engineering",
    line1Suffix: "and Build Production Apps?",
    line2Normal: "Apply For The",
    line2Italic: "Python Internship Today",
    buttonText: "Apply Now",
    buttonHref: "/register",
    phone: "+919409207327"
  }
};
