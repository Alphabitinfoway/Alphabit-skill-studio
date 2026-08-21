// ==============================================================================
// Ethical Hacking - Master Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

/**
 * 1. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: "Ethical",
    titleSuffix: "Hacking",
    highlights: [
        "NSDC-Recognised Certification",
        "300+ Active Hiring Partners",
        "Rajkot, Ahmedabad Gujarat"
    ],
    description: "<strong>Ethical Hacking Course in Rajkot & Ahmedabad</strong>. Real ethical hacking work means thinking like an attacker in a controlled, authorized environment — mapping a network, finding what a scanner alone would miss, and writing a report someone can actually act on. Choose Network & Infrastructure Penetration Testing or Web Application & Bug Bounty, and train with mentors who work in security professionally.",
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
            label: "150+ Security Professionals Trained"
        },
        {
            label: "40+ hrs Live Lab Work"
        },
        {
            label: "6+ Real Attack Simulations Covered"
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
    titleItalic: "Ethical Hacking",
    titleSuffix: "Course",
    items: [
        "Hands-on labs using real hacking tools, not just theory slides",
        "Trained to think like an attacker so you can defend systems better",
        "Practice in legal, sandboxed environments — safe, structured, and authorized",
        "Network, wireless, web application, and API-level penetration testing in depth",
        "Weekly mentor reviews from working security professionals",
        "Government-recognised (NSDC), industry-ready certification",
        "No Cost EMI fee options"
    ],
};

/**
 * 4. Curriculum Section Data (Network & Infrastructure + Web Application & Bug Bounty Tracks)
 */
export const networkPentestModules = [
    {
        num: "01",
        title: "Networking Foundations for Ethical Hacking",
        description: "Learn Networking fundamentals, TCP/IP, and the legal boundaries of authorized network testing — the base every network-focused penetration test is built on, covered before a single tool is opened.",
        tags: [
            "Networking Basics",
            "TCP/IP Fundamentals",
            "Legal & Ethical Boundaries",
            "Network Topologies"
        ],
        techstack: {
            os: "Kali Linux",
            tools: "Wireshark"
        }
    },
    {
        num: "02",
        title: "Network Reconnaissance & Host Discovery",
        description: "Learn how attackers map a target network before touching it — host discovery, port scanning, and service enumeration on real lab networks.",
        tags: [
            "Host Discovery",
            "Port Scanning",
            "Service Enumeration",
            "Network Mapping"
        ],
        techstack: {
            tools: "Nmap • Netcat"
        }
    },
    {
        num: "03",
        title: "System & Network Exploitation",
        description: "Learn how systems and networks are actually compromised — password attacks, network-level exploitation, and session hijacking in a controlled lab.",
        tags: [
            "Password Attacks",
            "Network Exploitation",
            "Session Hijacking",
            "Malware Basics (Lab Use Only)"
        ],
        techstack: {
            tools: "Metasploit • Hydra • Wireshark"
        }
    },
    {
        num: "04",
        title: "Wireless Network Attacks",
        description: "Learn how wireless networks get exploited — an attack surface most organizations underprotect compared to their wired infrastructure.",
        tags: [
            "Wireless Network Attacks",
            "WPA/WPA2 Cracking",
            "Rogue Access Points",
            "Wireless Security Assessment"
        ],
        techstack: {
            tools: "Aircrack-ng • Wireshark"
        }
    },
    {
        num: "05",
        title: "Privilege Escalation & Post-Exploitation",
        description: "Learn what happens after initial access — escalating privileges, maintaining access, and understanding attacker persistence techniques defenders need to detect.",
        tags: [
            "Privilege Escalation",
            "Post-Exploitation Basics",
            "Persistence Mechanisms",
            "Lateral Movement Concepts"
        ],
        techstack: {
            tools: "Metasploit • PowerShell (lab use)"
        }
    },
    {
        num: "06",
        title: "Vulnerability Assessment & Risk Reporting",
        description: "Learn to run structured network vulnerability assessments and write professional penetration testing reports clients and employers expect.",
        tags: [
            "Vulnerability Scanning",
            "Risk Rating",
            "Report Writing",
            "Client Communication"
        ],
        techstack: {
            tools: "Nessus • OpenVAS"
        }
    },
    {
        num: "07",
        title: "Network Penetration Testing Capstone & Internship",
        description: "Apply everything into a full internal network penetration testing project on a sandboxed environment, complete a guided internship, and build a portfolio of network-focused findings.",
        tags: [
            "Capstone Network Assessment",
            "Report Review",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Kali Linux",
            platform: "GitHub (for writeups)"
        }
    }
];

export const webAppBugBountyModules = [
    {
        num: "01",
        title: "Web Fundamentals for Ethical Hacking",
        description: "Learn how web applications actually work — HTTP requests, sessions, and the legal boundaries of authorized web testing, before touching any exploitation tool.",
        tags: [
            "HTTP/HTTPS Basics",
            "Sessions & Cookies",
            "Legal & Ethical Boundaries",
            "Web App Architecture"
        ],
        techstack: {
            tools: "Burp Suite (Community) • Browser DevTools"
        }
    },
    {
        num: "02",
        title: "Web Reconnaissance & Enumeration",
        description: "Learn how bug bounty hunters map an application's attack surface before testing — subdomain enumeration, endpoint discovery, and technology fingerprinting.",
        tags: [
            "Subdomain Enumeration",
            "Endpoint Discovery",
            "Technology Fingerprinting",
            "OSINT for Web Targets"
        ],
        techstack: {
            tools: "theHarvester • Burp Suite"
        }
    },
    {
        num: "03",
        title: "Core Web Application Exploitation",
        description: "Learn to find and exploit the most common web vulnerabilities — the attack surface most companies actually get breached through, and the one most bug bounty programs pay out on.",
        tags: [
            "SQL Injection",
            "Cross-Site Scripting (XSS)",
            "Authentication Bypass",
            "OWASP Top 10 Vulnerabilities"
        ],
        techstack: {
            tools: "Burp Suite • SQLmap • OWASP ZAP"
        }
    },
    {
        num: "04",
        title: "Advanced Web Exploitation & API Security",
        description: "Go beyond OWASP Top 10 basics into API vulnerabilities and business logic flaws — the harder-to-find issues that separate a scanner report from a real bug bounty submission.",
        tags: [
            "API Security Testing",
            "Business Logic Flaws",
            "Server-Side Request Forgery (SSRF)",
            "Insecure Deserialization Basics"
        ],
        techstack: {
            tools: "Burp Suite (Advanced) • Postman"
        }
    },
    {
        num: "05",
        title: "Social Engineering & Client-Side Attacks",
        description: "Learn how human behavior and browser-side weaknesses get exploited — attack surfaces that pure server-side testing misses.",
        tags: [
            "Social Engineering Techniques",
            "Phishing Simulation",
            "Client-Side Attack Vectors",
            "Browser Security Basics"
        ],
        techstack: {
            tools: "Social Engineering Toolkit (SET) • Burp Suite"
        }
    },
    {
        num: "06",
        title: "Bug Bounty Methodology & Responsible Disclosure",
        description: "Learn how real bug bounty hunters structure their testing and write submissions that actually get accepted and paid — a different skill from a standard corporate pentest report.",
        tags: [
            "Bug Bounty Platforms Overview",
            "Scope & Rules of Engagement",
            "Proof-of-Concept Writing",
            "Responsible Disclosure"
        ],
        techstack: {
            platforms: "HackerOne / Bugcrowd (overview)",
            tools: "Burp Suite"
        }
    },
    {
        num: "07",
        title: "Web Application Capstone & Bug Bounty Portfolio",
        description: "Apply everything into a full web application penetration testing capstone project, complete a guided internship, and leave with documented findings and bug bounty-style reports ready for platform submissions.",
        tags: [
            "Capstone Web App Assessment",
            "Report Review",
            "Internship Experience",
            "Bug Bounty Portfolio Prep"
        ],
        techstack: {
            tools: "Burp Suite",
            platform: "GitHub (for writeups)"
        }
    }
];

export const curriculumTracks = [
    {
        title: "Network & Infrastructure Penetration Testing Track",
        path: "network-pentesting",
        modules: networkPentestModules
    },
    {
        title: "Web Application & Bug Bounty Track",
        path: "web-bug-bounty",
        modules: webAppBugBountyModules
    }
];

export const mernModules = networkPentestModules;
export const javaModules = webAppBugBountyModules;

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
            usPrefix: "Working security analysts and ",
            usHighlight: "penetration testers",
            usSuffix: "",
        },
        {
            id: "style",
            label: "Learning Style",
            other: "Recorded videos, copied code",
            usPrefix: "",
            usHighlight: "100% hands-on",
            usSuffix: ", live, mentor-guided lab sessions",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            other: "Certificate recruiters ignore",
            usPrefix: "",
            usHighlight: "Real documented findings and lab reports",
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
            usPrefix: "Guided security project internship, ",
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
    titlePrefix: "What Ethical Hacking Professionals",
    titleItalic: "Earn",
    titleSuffix: "After Training",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior Security Analyst",
            location: "Rajkot",
            salary: "₹3 – ₹5 LPA",
            badge: "Entry Level",
            image: "/skill/ITSkills/cybersecurity.webp",
        },
        {
            title: "Penetration Tester (Entry)",
            location: "Ahmedabad / Remote",
            salary: "₹4 – ₹7 LPA",
            badge: "Early Career",
            image: "/skill/ITSkills/ethicalhacking.webp",
        },
        {
            title: "Vulnerability Analyst",
            location: "Gujarat (Enterprise)",
            salary: "₹5 – ₹8 LPA",
            badge: "High Demand",
            image: "/skill/ITSkills/cybersecurity.webp",
        },
        {
            title: "Security Analyst (2–3 yrs exp)",
            location: "PAN India / Remote",
            salary: "₹6 – ₹10 LPA",
            badge: "Mid-Level",
            image: "/skill/ITSkills/cybersecurity.webp",
        },
        {
            title: "Penetration Tester (Experienced)",
            location: "PAN India / Remote",
            salary: "₹8 – ₹14 LPA",
            badge: "Experienced",
            image: "/skill/ITSkills/ethicalhacking.webp",
        },
        {
            title: "Security Consultant",
            location: "PAN India",
            salary: "₹9 – ₹16 LPA",
            badge: "Experienced",
            image: "/skill/ITSkills/ethicalhacking.webp",
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
            heading: "Live Lab Sessions",
            subheading: "Every class is hands-on. Students run real attacks and exploits in a sandboxed lab environment alongside the mentor — nobody's just watching slides.",
        },
        {
            heading: "Mentor-Led Report Reviews",
            subheading: "Working security professionals review your vulnerability reports every week and guide you toward industry-standard documentation practices, not just 'did the exploit work.'",
        },
        {
            heading: "Small Batch, Real Attention",
            subheading: "Batches stay small on purpose. If your Burp Suite intercept isn't catching a request the way it should at 9 PM before a review, someone can actually help you troubleshoot it.",
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
    mernTitle: "Network & Infrastructure Penetration Testing Track",
    javaTitle: "Web Application & Bug Bounty Track",
    mernRoles: [
        "Network Penetration Tester",
        "Infrastructure Security Analyst",
        "Red Team Associate",
        "Vulnerability Analyst",
        "Security Consultant",
        "Freelance Network Security Researcher"
    ],
    javaRoles: [
        "Web Application Penetration Tester",
        "Bug Bounty Hunter",
        "API Security Tester",
        "Application Security Engineer",
        "Freelance Security Researcher",
        "Security Consultant"
    ],
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
            title: "Fintech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/fintech.webp"
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
            title: "Healthcare Tech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/healthcaretech.webp"
        },
        {
            title: "E-commerce",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp"
        },
        {
            title: "SaaS & Product Companies",
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
            question: "Is this course suitable for complete beginners?",
            answer: "Yes. The course starts from networking fundamentals and legal/ethical boundaries, assuming no prior security experience, before moving into hands-on penetration testing."
        },
        {
            id: 2,
            question: "Do you provide job placement support after this course?",
            answer: "Yes — resume building, mock interviews, and direct referrals through our hiring partners actively looking for security talent."
        },
        {
            id: 3,
            question: "Is ethical hacking legal, and will I be trained on real systems?",
            answer: "Yes, ethical hacking is fully legal when performed with authorization. All hands-on practice happens in controlled, sandboxed lab environments — never on live systems without permission."
        },
        {
            id: 4,
            question: "Do I need a programming or networking background to join this course in Rajkot?",
            answer: "Basic computer literacy is enough to start. The course builds your networking and security foundation from the ground up before introducing hacking tools and techniques."
        },
        {
            id: 5,
            question: "What tools will I actually work with during the course?",
            answer: "Kali Linux, Nmap, Metasploit, Burp Suite, Wireshark, and other industry-standard penetration testing tools used by real security professionals."
        },
        {
            id: 6,
            question: "How long is the Ethical Hacking course at Alphabit Skill?",
            answer: "The course runs 3 to 4 months, with flexible batch timing and No Cost EMI payment options."
        },
        {
            id: 7,
            question: "What certification do I receive after completing the course?",
            answer: "You receive a government-recognised (NSDC), industry-ready certification validating your ethical hacking and penetration testing skills."
        },
        {
            id: 8,
            question: "What will I have to show recruiters by the end of the course?",
            answer: "Documented vulnerability assessment reports, lab writeups, and internship experience — concrete proof of hands-on skills rather than just a certificate."
        },
        {
            id: 9,
            question: "Which track should I choose — Network & Infrastructure, or Web Application & Bug Bounty?",
            answer: "Choose Network & Infrastructure if you want to test enterprise systems and internal networks for security consultancies or IT teams. Choose Web Application & Bug Bounty if you want to specialize in web vulnerabilities and potentially freelance through bug bounty platforms."
        }
    ]
};

export const faqData = faqSectionData.faqs;

/**
 * 11. Choose Your Track Data
 */
export const trackSelectorData = {
    title: "Choose Your Track",
    description: "Not every student wants the same kind of security role. Pick the track that matches where you want to land — whether that's Rajkot, Ahmedabad, or a remote/freelance path.",
    tracks: [
        {
            title: "Network & Infrastructure Penetration Testing Track",
            description: "Build with network scanning, system exploitation, and wireless attack techniques — the offensive security skill set companies across Rajkot, Ahmedabad, and Gujarat hire penetration testers for when they need infrastructure and internal network systems tested.",
            bestFor: "IT security teams · Enterprise penetration testing roles · Infrastructure-focused careers",
            idealIf: "Work as a Network Penetration Tester · Test internal enterprise systems and infrastructure · Specialize in system and network-level exploitation"
        },
        {
            title: "Web Application & Bug Bounty Track",
            description: "Build with web exploitation techniques, API security testing, and bug bounty methodology — the skill set freelance security researchers and web-focused penetration testers use to find real, payable vulnerabilities.",
            bestFor: "Freelance security researchers · Bug bounty hunters · Web-focused security roles",
            idealIf: "Work as a Web Application Penetration Tester · Freelance through bug bounty platforms · Specialize in finding vulnerabilities in live web applications"
        }
    ]
};

/**
 * 12. Testimonials Section Data
 */
export const testimonialsSectionData = {
    titleNormal: "Alumni",
    titleParent: "Verified",
    titleItalic: "Testimonials",
    testimonials: [
        {
            id: 1,
            text: "I came in with basic networking knowledge and no security background. By the end, I'd run real penetration tests in the lab and written vulnerability reports I could actually show in interviews.",
            name: "Saurav Jain",
            title: "Junior Security Analyst at a Gujarat-based IT firm, October 2025",
            image: "/Home Page/Trust/1.webp"
        },
        {
            id: 2,
            text: "The web application module was the turning point for me — learning SQL injection and XSS hands-on, not just reading about them, made the OWASP Top 10 finally click.",
            name: "Kruti Patel",
            title: "Penetration Tester, Batch April 2026",
            image: "/2.webp"
        },
        {
            id: 3,
            text: "I was working in general IT support and wanted to move into security. The structured labs and mentor feedback on my reports gave me the confidence to apply for analyst roles.",
            name: "Jaimin Chauhan",
            title: "Security Analyst at a Rajkot-based company, Batch August 2026",
            image: "/3.webp"
        }
    ]
};

/**
 * 13. Final CTA Section Data
 */
export const ctaSectionData = {
    line1Normal: "Access the",
    line1Italic: "Ethical Hacking",
    line1Suffix: "Curriculum — Apply Today and",
    line2Normal: "Start Securing",
    line2Italic: "Real Systems",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};

/**
 * 14. Metadata Info
 */
export const metadata = {
    title: "Ethical Hacking Course in Rajkot & Ahmedabad | Alphabit Skill",
    description: "Ethical Hacking course in Rajkot & Ahmedabad — Network Pentesting or Web App & Bug Bounty tracks. Real labs, 300+ hiring partners. Book a free demo."
};
