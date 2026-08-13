// ==============================================================================
// Cloud Computing - Master Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

/**
 * 1. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: "Cloud ",
    titleSuffix: "Computing",
    highlights: [
        "Rajkot · Ahmedabad, Gujarat",
        "NSDC-Recognised Certification",
        "300+ Hiring Partners"
    ],
    description: "<strong>Cloud Computing Course in Rajkot & Ahmedabad</strong>. Most cloud courses have you click through the AWS console once and call it experience. Real cloud teams get paged at 2 AM for a misconfigured security group; real DevOps engineers debug broken pipelines more than they write new ones — that's what this trains you for. Choose Cloud Infrastructure or DevOps Automation, with mentors who manage cloud infrastructure professionally.",
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
    titleItalic: "Cloud Computing",
    titleSuffix: "Course",
    items: [
        "Real AWS/Azure environments from week one, not just slide-based theory",
        "Trained to size, secure, and monitor cloud infrastructure the way production teams do",
        "Hands-on with both the infrastructure side and the automation side of cloud work",
        "Small batches, so mentors actually know where each student is stuck",
        "Weekly reviews from people who manage cloud infrastructure for a living",
        "Government-recognised (NSDC), industry-ready certification",
        "Flexible No-Cost EMI options"
    ],
};

/**
 * 4. Choose Your Track Data
 */
export const trackSelectorData = {
    title: "Choose Your Track",
    description: "Cloud work splits into two fairly different jobs, and it's worth picking the one that matches where you want to end up.",
    tracks: [
        {
            title: "Cloud Infrastructure & Administration Track",
            description: "Design, deploy, and secure cloud environments on AWS and Azure — compute, storage, networking, and identity management, the core skills behind almost every cloud job posting you'll see.",
            bestFor: "Career starters · IT professionals moving to cloud · Enterprise-focused roles",
            idealIf: "Work as a Cloud Support Associate or Administrator · Manage production cloud environments · Build toward AWS/Azure certification exams"
        },
        {
            title: "DevOps & Cloud Automation Track",
            description: "Automate infrastructure and deployments using CI/CD pipelines, containers, and infrastructure-as-code — the skills that separate a cloud engineer who clicks through a console from one who scripts everything.",
            bestFor: "Developers adding ops skills · Startups · Automation-focused roles",
            idealIf: "Work as a DevOps or Cloud Automation Engineer · Build CI/CD pipelines that ship code automatically · Combine coding ability with cloud infrastructure knowledge"
        }
    ]
};

/**
 * 5. Curriculum Modules (Cloud Infrastructure & Admin + DevOps & Cloud Automation Tracks)
 */
export const cloudInfraModules = [
    {
        num: "01",
        title: "Cloud Computing Fundamentals",
        description: "Before you touch a console, you need to know what you're actually renting. Service models, the major providers, and why companies move to the cloud in the first place — the context every later module assumes you already have.",
        tags: [
            "IaaS/PaaS/SaaS Models",
            "Cloud Service Providers Overview",
            "Cloud Economics & Cost Basics",
            "Shared Responsibility Model"
        ],
        techstack: {
            platforms: "AWS • Microsoft Azure"
        }
    },
    {
        num: "02",
        title: "Compute & Virtual Machines",
        description: "Setting up and managing virtual servers the way real infrastructure teams do — sizing them correctly, configuring them securely, and understanding what happens when one goes down at the worst possible time.",
        tags: [
            "EC2 / Azure VMs",
            "Instance Types & Sizing",
            "Auto Scaling Basics",
            "Load Balancing"
        ],
        techstack: {
            aws: "EC2 • Auto Scaling Groups",
            azure: "Virtual Machines"
        }
    },
    {
        num: "03",
        title: "Storage & Database Services",
        description: "Where cloud data actually lives — object storage, block storage, and managed database services — and how to choose between them for a given use case instead of defaulting to whatever's familiar.",
        tags: [
            "S3 / Azure Blob Storage",
            "EBS Volumes",
            "RDS / Azure SQL Basics",
            "Backup & Recovery Concepts"
        ],
        techstack: {
            aws: "S3 • RDS",
            azure: "Blob Storage • Azure SQL"
        }
    },
    {
        num: "04",
        title: "Networking & Security in the Cloud",
        description: "Most cloud breaches trace back to a misconfigured security setting, not a sophisticated attack. This module is built entirely around avoiding that — VPCs, security groups, and identity management done properly.",
        tags: [
            "VPC & Subnetting",
            "Security Groups & NACLs",
            "IAM & Access Policies",
            "Cloud Firewalls"
        ],
        techstack: {
            aws: "VPC • IAM",
            azure: "Virtual Network • Azure AD"
        }
    },
    {
        num: "05",
        title: "Monitoring, Cost Management & Optimization",
        description: "Keeping an eye on what your cloud infrastructure is actually doing, and just as importantly, what it's costing you every month — the module most beginner courses skip entirely.",
        tags: [
            "CloudWatch / Azure Monitor",
            "Cost Explorer & Budgets",
            "Resource Tagging",
            "Performance Optimization"
        ],
        techstack: {
            aws: "CloudWatch • Cost Explorer",
            azure: "Monitor • Cost Management"
        }
    },
    {
        num: "06",
        title: "Infrastructure Capstone, Internship & Portfolio",
        description: "You'll put it together into a deployed, multi-tier cloud environment — not a diagram, an actual running setup you can walk an interviewer through — plus a guided internship and a portfolio that shows it.",
        tags: [
            "Capstone Infrastructure Build",
            "Documentation",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "AWS/Azure Free Tier • Git"
        }
    }
];

export const devopsAutomationModules = [
    {
        num: "01",
        title: "DevOps & Cloud Fundamentals",
        description: "What DevOps actually changes about how software gets shipped, and the cloud fundamentals every automation script eventually has to interact with, whether the tutorial mentions it or not.",
        tags: [
            "DevOps Culture & Practices",
            "CI/CD Concepts",
            "Cloud Provider Basics",
            "Version Control Fundamentals"
        ],
        techstack: {
            tools: "Git • GitHub",
            platforms: "AWS • Azure"
        }
    },
    {
        num: "02",
        title: "Linux, Scripting & Automation Basics",
        description: "Almost every DevOps task eventually runs through a terminal. This module gets you comfortable enough with Linux and shell scripting that later modules don't slow you down waiting on basics.",
        tags: [
            "Linux Command Line",
            "Shell Scripting",
            "Cron Jobs & Task Automation",
            "File System & Permissions"
        ],
        techstack: {
            os: "Linux (Ubuntu)",
            tools: "Bash"
        }
    },
    {
        num: "03",
        title: "Containers with Docker",
        description: "Packaging applications into containers — the format that's replaced \"it works on my machine\" as the standard way software actually gets deployed across a team.",
        tags: [
            "Docker Fundamentals",
            "Dockerfiles & Images",
            "Container Networking",
            "Docker Compose"
        ],
        techstack: {
            tools: "Docker • Docker Compose"
        }
    },
    {
        num: "04",
        title: "Container Orchestration with Kubernetes",
        description: "Once you have more than a handful of containers, something has to manage them. Kubernetes is that something, covered here at the level real teams actually use it day to day, not just a demo cluster.",
        tags: [
            "Kubernetes Architecture",
            "Pods, Deployments & Services",
            "Scaling & Self-Healing",
            "kubectl Basics"
        ],
        techstack: {
            tools: "Kubernetes (K8s) • Minikube"
        }
    },
    {
        num: "05",
        title: "CI/CD Pipelines & Infrastructure as Code",
        description: "Automating the path from a code commit to a live deployment, and defining infrastructure in code instead of clicking through a console every single time something needs to change.",
        tags: [
            "Jenkins / GitHub Actions",
            "Pipeline Design",
            "Terraform Basics",
            "Infrastructure as Code Principles"
        ],
        techstack: {
            tools: "Jenkins • Terraform • GitHub Actions"
        }
    },
    {
        num: "06",
        title: "Automation Capstone, Internship & Portfolio",
        description: "You'll build a working CI/CD pipeline end to end — code commit to automated deployment — plus a guided internship and a GitHub portfolio that actually demonstrates it instead of describing it.",
        tags: [
            "Capstone Pipeline Build",
            "Documentation",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Git • GitHub • Docker • Terraform"
        }
    }
];

export const curriculumTracks = [
    {
        title: "Cloud Infrastructure & Administration Track",
        path: "cloud-infrastructure",
        modules: cloudInfraModules
    },
    {
        title: "DevOps & Cloud Automation Track",
        path: "devops-automation",
        modules: devopsAutomationModules
    }
];

export const mernModules = cloudInfraModules;
export const javaModules = devopsAutomationModules;

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
            usPrefix: "Working cloud/DevOps engineers from ",
            usHighlight: "real companies",
            usSuffix: "",
        },
        {
            id: "style",
            label: "Learning Style",
            other: "Recorded videos, copied commands",
            usPrefix: "",
            usHighlight: "100% hands-on",
            usSuffix: ", live, mentor-guided sessions",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            other: "Certificate recruiters ignore",
            usPrefix: "Real deployed infrastructure or pipelines on your ",
            usHighlight: "GitHub",
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
            usPrefix: "Guided cloud/DevOps project internship, ",
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
 * 7. Earnings Section Data
 */
export const earningsSectionData = {
    titlePrefix: "What Cloud Professionals",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior Cloud Support Associate",
            location: "Rajkot",
            salary: "₹3 – ₹5 LPA",
            badge: "Entry Level",
            image: "/skill/ITSkills/cloudcomputing.webp",
        },
        {
            title: "Cloud Administrator",
            location: "Ahmedabad / Surat",
            salary: "₹4.5 – ₹7 LPA",
            badge: "Early Career",
            image: "/skill/ITSkills/cloudcomputing.webp",
        },
        {
            title: "DevOps Engineer (Entry)",
            location: "Gujarat (Enterprise)",
            salary: "₹5 – ₹9 LPA",
            badge: "High Demand",
            image: "/skill/ITSkills/cloudcomputing.webp",
        },
        {
            title: "Cloud Engineer (2–3 yrs exp)",
            location: "PAN India / Remote",
            salary: "₹7 – ₹12 LPA",
            badge: "Mid-Level",
            image: "/skill/ITSkills/cloudcomputing.webp",
        },
        {
            title: "DevOps Engineer (Experienced)",
            location: "PAN India / Remote",
            salary: "₹9 – ₹15 LPA",
            badge: "Experienced",
            image: "/skill/ITSkills/cloudcomputing.webp",
        },
        {
            title: "Cloud Solutions Architect",
            location: "PAN India",
            salary: "₹12 – ₹20 LPA",
            badge: "Experienced",
            image: "/skill/ITSkills/cloudcomputing.webp",
        }
    ],
};

/**
 * 8. Inside Our Classroom (Glance Carousel Data)
 */
export const meetingGlanceSectionData = {
    titlePrefix: "Inside Our",
    titleSuffix: "Classroom",
    meetings: [
        {
            heading: "Live Infrastructure Sessions",
            subheading: "Students build and break real cloud environments alongside the mentor in every session — nobody's just watching a recorded demo of someone else's console.",
        },
        {
            heading: "Mentor-Led Reviews",
            subheading: "Working cloud and DevOps engineers walk through your setup every week, catching the kind of misconfigurations that would otherwise show up as a production incident.",
        },
        {
            heading: "Small Batch, Real Attention",
            subheading: "Batches stay small on purpose. If your Terraform apply keeps failing on a dependency you can't spot at 9 PM before a review, someone can actually help you trace it.",
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
    mernTitle: "Cloud Infrastructure & Administration Track",
    javaTitle: "DevOps & Cloud Automation Track",
    mernRoles: [
        "Cloud Support Associate",
        "Cloud Administrator",
        "Cloud Infrastructure Engineer",
        "Systems Administrator (Cloud)",
        "Cloud Security Analyst (Entry Level)",
        "Freelance Cloud Consultant"
    ],
    javaRoles: [
        "DevOps Engineer",
        "Cloud Automation Engineer",
        "Site Reliability Engineer (Entry Level)",
        "CI/CD Pipeline Engineer",
        "Kubernetes/Container Engineer",
        "Freelance DevOps Consultant"
    ],
};

/**
 * 10. Industries Section Data
 */
export const industriesSectionData = {
    titleNormal: "Industries that",
    titleItalic: "Hire",
    description: "Cloud and DevOps skills are critically needed across every modern industry managing digital products, services, and infrastructure.",
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
            title: "SaaS & Product Companies",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/manufacturingSaaS.webp"
        },
        {
            title: "Healthcare Tech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/healthcaretech.webp"
        },
        {
            title: "Banking & Insurance",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/fintech.webp"
        },
        {
            title: "Government IT",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/goverment-it.webp"
        },
        {
            title: "Telecom",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/ed-tech.webp"
        }
    ],
};

export const industriesData = industriesSectionData.industries;

/**
 * 11. Alumni Testimonials Section Data
 */
export const testimonialsSectionData = {
    titleNormal: "Alumni",
    titleParent: "Verified",
    titleItalic: "Testimonials",
    testimonials: [
        {
            id: 1,
            text: "I'd read about AWS for months on my own and never actually deployed anything real. Within a few weeks here I'd set up a working multi-tier environment with proper security groups — the kind of thing I could actually explain in an interview instead of just naming services I'd read about.",
            name: "Gurleen Singh",
            title: "Cloud Administrator at a Gujarat-based IT firm, Batch April 2025",
            image: "/Home Page/Trust/1.webp"
        },
        {
            id: 2,
            text: "I was a developer who kept getting stuck whenever deployment issues came up, and I wanted to stop depending on someone else to fix them. Building an actual CI/CD pipeline from scratch, not just watching one, is what finally made Docker and Jenkins click.",
            name: "Gaurav Bhatt",
            title: "DevOps Engineer, Batch January 2026",
            image: "/2.webp"
        },
        {
            id: 3,
            text: "The cost management module surprised me — I didn't expect a technical course to also teach you how to avoid a shocking AWS bill, but that's turned out to be just as useful on the job as the technical skills.",
            name: "Moksh Joshi",
            title: "Cloud Engineer at a Rajkot-based company, Batch June 2026",
            image: "/3.webp"
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
            question: "Is this Cloud Computing course suitable for complete beginners?",
            answer: "Yes. The course starts from core cloud computing concepts, assuming no prior AWS, Azure, or DevOps experience, before moving into your chosen track."
        },
        {
            id: 2,
            question: "Do you provide job placement support after this course?",
            answer: "Yes. Placement support includes resume building, mock interviews, and direct referrals through hiring partners actively hiring for cloud and DevOps roles."
        },
        {
            id: 3,
            question: "Do I need a coding background to join a cloud computing course in Rajkot?",
            answer: "Not for the Cloud Infrastructure track — it's largely console and configuration-based. The DevOps & Automation track involves scripting, so basic programming familiarity helps, though the course builds that from scratch too."
        },
        {
            id: 4,
            question: "Which cloud platform will I actually learn — AWS or Azure?",
            answer: "Both are covered, since job postings across Gujarat and beyond ask for either one depending on the company. You'll get comfortable enough with the core concepts to move between them."
        },
        {
            id: 5,
            question: "How long is the Cloud Computing course at Alphabit Skill?",
            answer: "The course runs 4 to 6 months, with flexible weekday and weekend batch timing, plus No Cost EMI."
        },
        {
            id: 6,
            question: "What certification do I receive after completing the course?",
            answer: "You receive an NSDC-recognised, industry-ready certification, and the course is also structured to prepare you for AWS or Azure's own certification exams if you want to pursue those separately."
        },
        {
            id: 7,
            question: "Which track should I choose — Cloud Infrastructure & Administration, or DevOps & Cloud Automation?",
            answer: "Choose Infrastructure & Administration if you want a more structured entry point into managing cloud environments directly. Choose DevOps & Automation if you already have some coding comfort and want to specialize in the automation side, which tends to pay more once you have a couple of years of experience."
        },
        {
            id: 8,
            question: "Is this Cloud Computing course available in Rajkot as well as online?",
            answer: "Yes. The course runs both offline at our Rajkot studio and online for students across Gujarat and beyond, with the same mentor-led, live-project structure either way."
        },
        {
            id: 9,
            question: "What will I have to show recruiters by the end of the course?",
            answer: "A deployed, documented cloud environment from the Infrastructure track, or a working CI/CD pipeline with containers from the DevOps track — something you can actually walk an interviewer through, not just a certificate."
        }
    ]
};

export const faqData = faqSectionData.faqs;

/**
 * 13. Final CTA Section Data
 */
export const ctaSectionData = {
    line1Normal: "Access the",
    line1Italic: "Cloud Computing ",
    line1Suffix: "Curriculum — Apply Today and",
    line2Normal: "Start Building",
    line2Italic: "Cloud Infrastructure",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};

/**
 * 14. Metadata Info
 */
export const metadata = {
    title: "Cloud Computing Course in Rajkot & Ahmedabad | Alphabit Skill",
    description: "Cloud Computing course in Rajkot & Ahmedabad — AWS & Azure Infrastructure, or DevOps Automation tracks. Live projects, 300+ hiring partners. Book a demo."
};
