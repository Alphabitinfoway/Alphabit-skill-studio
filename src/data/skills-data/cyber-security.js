// ==============================================================================
// Cyber Security Course - Master Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

/**
 * 1. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: "Cyber Security",
    titleSuffix: "Course",
    highlights: [
        "NSDC-Recognised Certification",
        "300+ Active Hiring Partners",
        "Rajkot, Gujarat"
    ],
    description: "<strong>Cyber Security Course in Rajkot & Ahmedabad</strong>. Most courses teach the CIA triad, show one Nmap scan, and call it practical. Real SOC analysts read hundreds of alerts a shift; real pentesters spend more time writing reports than exploiting anything — that's what this trains you for. Build fundamentals first, then go deep in real labs with working security mentors. Choose SOC or Ethical Hacking, and leave with lab reports you can defend.",
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
            label: "140+ Security Professionals Trained"
        },
        {
            label: "40+ hrs Live Lab Work"
        },
        {
            label: "6+ Real Attack & Defense Simulations"
        },
        {
            label: "100% Placement Assistance"
        }
    ],
    durationVal: "4–5 months",
    durationLabel: "Course Duration",
    hoursVal: "40+ hrs",
    hoursLabel: "Live lab hours"
};

/**
 * 3. Course Features Section Data
 */
export const courseFeaturesData = {
    titleNormal: "About Our",
    titleItalic: "Cyber Security",
    titleSuffix: "Course",
    items: [
        "One of Rajkot's most hands-on Cyber Security courses — built around real labs, not slides",
        "Solid grounding in networking and security fundamentals before touching offensive or defensive tools",
        "Hands-on work with real SOC tools, attack simulations, and vulnerability scanners",
        "Trained to think like both a defender and an attacker, so threats make sense from both sides",
        "Live labs that mirror real-world breach and monitoring scenarios",
        "Weekly project reviews from mentors who work in security roles professionally",
        "Government-recognised (NSDC), industry-ready certification",
        "No Cost EMI fee options"
    ],
};

/**
 * 4. Curriculum Section Data (SOC & Defensive Security + Ethical Hacking & Penetration Testing Tracks)
 */
export const socDefensiveModules = [
    {
        num: "01",
        title: "Networking & Security Fundamentals for Defenders",
        description: "Learn how networks actually work — protocols, IP addressing, and traffic flow — framed around what a defender needs to spot when something looks wrong.",
        tags: [
            "Networking Basics",
            "TCP/IP & Protocols",
            "OS Fundamentals (Windows/Linux)",
            "Core Security Principles"
        ],
        techstack: {
            tools: "Wireshark • Linux Terminal"
        }
    },
    {
        num: "02",
        title: "Threats, Vulnerabilities & Risk",
        description: "Understand how attacks actually happen — malware types, common vulnerabilities, and how organizations assess and prioritize risk before it becomes a breach.",
        tags: [
            "Malware & Attack Types",
            "Vulnerability Basics",
            "Risk Assessment",
            "Security Policies"
        ],
        techstack: {
            frameworks: "CIA Triad • OWASP Basics"
        }
    },
    {
        num: "03",
        title: "SOC Operations & SIEM Tools",
        description: "Learn how a real Security Operations Center monitors an organization — using SIEM tools to detect, investigate, and triage alerts the way analysts do daily.",
        tags: [
            "SIEM Fundamentals",
            "Log Analysis",
            "Alert Triage",
            "Threat Detection Basics"
        ],
        techstack: {
            tools: "Splunk / Wazuh Basics • SIEM Dashboards"
        }
    },
    {
        num: "04",
        title: "Incident Response & Threat Hunting",
        description: "Move from detecting an alert to responding to a real incident — containment, investigation, and the structured process security teams follow under pressure.",
        tags: [
            "Incident Response Process",
            "Threat Hunting Basics",
            "Forensics Fundamentals",
            "Documentation & Reporting"
        ],
        techstack: {
            tools: "Log Analysis Tools • Incident Playbooks"
        }
    },
    {
        num: "05",
        title: "Cloud & Enterprise Security Basics",
        description: "Get introduced to securing cloud environments and enterprise systems — the direction most modern SOC and defensive roles are moving toward.",
        tags: [
            "Cloud Security Basics",
            "Identity & Access Management",
            "Zero Trust Concepts",
            "Compliance Basics"
        ],
        techstack: {
            platforms: "AWS / Azure Security Basics"
        }
    },
    {
        num: "06",
        title: "SOC Capstone Project, Internship & Portfolio",
        description: "Apply everything into a full SOC capstone project, complete a guided internship, and leave with real lab experience and a portfolio ready for interviews.",
        tags: [
            "Capstone Project Build",
            "Case Review",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Documentation Portfolio",
            platform: "GitHub Pages"
        }
    }
];

export const ethicalHackingPentestModules = [
    {
        num: "01",
        title: "Ethical Hacking Fundamentals & Legal Boundaries",
        description: "Understand the mindset and legal boundaries of ethical hacking — how authorized testing works, and the methodology every penetration test follows, framed entirely around offense, not defense.",
        tags: [
            "Ethical Hacking Principles",
            "Legal & Scope Boundaries",
            "Reconnaissance Techniques",
            "Footprinting"
        ],
        techstack: {
            tools: "Kali Linux • Nmap"
        }
    },
    {
        num: "02",
        title: "Vulnerability Assessment & Scanning",
        description: "Learn to systematically find weaknesses in systems and applications — the same scanning and assessment process used before any real penetration test begins.",
        tags: [
            "Vulnerability Scanning",
            "OWASP Top 10",
            "Network Scanning",
            "Risk Prioritization"
        ],
        techstack: {
            tools: "Nessus / OpenVAS • Burp Suite"
        }
    },
    {
        num: "03",
        title: "Exploitation & Web Application Testing",
        description: "Move from finding vulnerabilities to safely exploiting them in a controlled lab — the hands-on skill that separates a certified pentester from a theory-only student.",
        tags: [
            "Exploitation Basics",
            "Web App Attacks (SQLi, XSS)",
            "Password Attacks",
            "Privilege Escalation Basics"
        ],
        techstack: {
            tools: "Metasploit • Burp Suite"
        }
    },
    {
        num: "04",
        title: "Network & System Penetration Testing",
        description: "Learn to test internal networks and systems the way a real attacker would — going beyond web applications into infrastructure-level exploitation.",
        tags: [
            "Network Exploitation Basics",
            "System-Level Attacks",
            "Password Cracking",
            "Lateral Movement Concepts"
        ],
        techstack: {
            tools: "Metasploit • Hydra"
        }
    },
    {
        num: "05",
        title: "Reporting & Client Communication",
        description: "Learn the part most courses skip — writing a penetration test report that a client or employer can actually act on, clearly and professionally.",
        tags: [
            "Vulnerability Reporting",
            "Risk Communication",
            "Remediation Recommendations",
            "Professional Documentation"
        ],
        techstack: {
            tools: "Reporting Templates"
        }
    },
    {
        num: "06",
        title: "Penetration Testing Capstone, Internship & Portfolio",
        description: "Apply everything into a full penetration testing capstone project, complete a guided internship, and leave with a real test report and a portfolio ready for interviews.",
        tags: [
            "Capstone Project Build",
            "Case Review",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Documentation Portfolio",
            platform: "GitHub Pages"
        }
    }
];

export const curriculumTracks = [
    {
        title: "SOC & Defensive Security Track",
        path: "soc-defense",
        modules: socDefensiveModules
    },
    {
        title: "Ethical Hacking & Penetration Testing Track",
        path: "ethical-hacking",
        modules: ethicalHackingPentestModules
    }
];

export const mernModules = socDefensiveModules;
export const javaModules = ethicalHackingPentestModules;

/**
 * 5. Comparison Section Data
 */
export const comparisonSectionData = {
    titleNormal: "Why Students Choose Our ",
    titleItalic: "Cyber Security Course",
    categories: [
        {
            id: "mentors",
            label: "Mentors",
            other: "Academics reading from slides",
            usPrefix: "Working security analysts and testers from ",
            usHighlight: "real companies",
            usSuffix: "",
        },
        {
            id: "style",
            label: "Learning Style",
            other: "Recorded videos, copied theory",
            usPrefix: "",
            usHighlight: "100% hands-on",
            usSuffix: ", live, mentor-guided labs",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            other: "Certificate recruiters ignore",
            usPrefix: "",
            usHighlight: "Real lab reports and case studies",
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
    titlePrefix: "What Cyber Security Professionals",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior SOC Analyst",
            location: "Rajkot",
            salary: "₹3 – ₹5.5 LPA",
            badge: "Entry Level",
            image: "/skill/ITSkills/cybersecurity.webp",
        },
        {
            title: "SOC Analyst",
            location: "Ahmedabad / Surat",
            salary: "₹4 – ₹7 LPA",
            badge: "Early Career",
            image: "/skill/ITSkills/cybersecurity.webp",
        },
        {
            title: "Security Analyst (Enterprise)",
            location: "Gujarat (Enterprise)",
            salary: "₹5 – ₹9 LPA",
            badge: "High Demand",
            image: "/skill/ITSkills/cybersecurity.webp",
        },
        {
            title: "Junior Penetration Tester",
            location: "Remote / PAN India",
            salary: "₹4 – ₹8 LPA",
            badge: "Offensive Security",
            image: "/skill/ITSkills/ethicalhacking.webp",
        },
        {
            title: "Penetration Tester / Ethical Hacker",
            location: "Ahmedabad / Remote",
            salary: "₹7 – ₹13 LPA",
            badge: "Experienced",
            image: "/skill/ITSkills/ethicalhacking.webp",
        },
        {
            title: "Security Engineer (2–3 yrs exp)",
            location: "PAN India",
            salary: "₹10 – ₹18 LPA",
            badge: "Experienced",
            image: "/skill/ITSkills/cybersecurity.webp",
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
            subheading: "Every class is hands-on. Students investigate real logs, scan real vulnerabilities, and run controlled exploits alongside the mentor — nobody's just watching a demo.",
        },
        {
            heading: "Mentor-Led Case Reviews",
            subheading: "Working security professionals review your lab reports every week and push you toward the practices real SOC and penetration testing teams actually follow.",
        },
        {
            heading: "Small Batch, Real Attention",
            subheading: "Batches stay small on purpose. If you're not sure whether a spike in outbound traffic at 2 AM is actually suspicious, someone can sit with you and work through the log.",
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
    mernTitle: "SOC & Defensive Security Track",
    javaTitle: "Ethical Hacking & Penetration Testing Track",
    mernRoles: [
        "SOC Analyst",
        "Security Analyst",
        "Incident Response Analyst",
        "Threat Intelligence Analyst",
        "Compliance & GRC Analyst",
        "Cloud Security Analyst (Entry Level)"
    ],
    javaRoles: [
        "Penetration Tester",
        "Ethical Hacker",
        "Vulnerability Analyst",
        "Web Application Security Tester",
        "Red Team Associate",
        "Freelance Security Consultant"
    ],
};

/**
 * 9. Industries Section Data
 */
export const industriesSectionData = {
    titleNormal: "Industries That Hire",
    titleItalic: "in India",
    description: "Security professionals are needed across every sector that handles sensitive customer, financial, or organizational data.",
    industries: [
        {
            title: "IT Services",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "BFSI & Fintech",
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
            title: "Government IT",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/goverment-it.webp"
        },
        {
            title: "Telecom",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/ed-tech.webp"
        },
        {
            title: "SaaS & Product Companies",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/manufacturingSaaS.webp"
        },
        {
            title: "Manufacturing",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/retail-tech.webp"
        }
    ],
};

export const industriesData = industriesSectionData.industries;

export const faqSectionData = {
    titleNormal: "Placement & Curriculum",
    titleItalic: "FAQ",
    faqs: [
        {
            id: 1,
            question: "Is this Cyber Security course suitable for complete beginners?",
            answer: "Yes. The course starts from networking and security fundamentals, assuming no prior experience, before moving into SOC tools or offensive security techniques."
        },
        {
            id: 2,
            question: "Do you provide job placement support after this course?",
            answer: "Yes. Placement support includes resume building, mock interviews, and direct referrals through hiring partners actively looking for SOC and penetration testing talent across Gujarat."
        },
        {
            id: 3,
            question: "Do I need a coding background to join a cyber security course in Rajkot?",
            answer: "No. Basic computer literacy is enough to start. Scripting in Python or Bash is introduced later and is genuinely useful for penetration testing, but it isn't a prerequisite."
        },
        {
            id: 4,
            question: "What tools will I actually work with during the course?",
            answer: "Wireshark, SIEM platforms, and log analysis tools in the SOC track; Kali Linux, Nmap, Burp Suite, and Metasploit in the Ethical Hacking track — the same tools used on real security teams."
        },
        {
            id: 5,
            question: "How long is the Cyber Security course at Alphabit Skill?",
            answer: "The course runs 4 to 5 months, with flexible batch timing and No Cost EMI payment options."
        },
        {
            id: 6,
            question: "What certification do I receive after completing the course?",
            answer: "You receive a government-recognised (NSDC), industry-ready certification validating your defensive or offensive security skills, depending on your chosen track."
        },
        {
            id: 7,
            question: "Which track should I choose — SOC & Defensive Security, or Ethical Hacking & Penetration Testing?",
            answer: "Choose SOC & Defensive Security if you want a structured, entry-friendly path into monitoring and responding to threats. Choose Ethical Hacking & Penetration Testing if you want a more specialized, offensive path testing and breaking systems legally."
        },
        {
            id: 8,
            question: "What's the difference between ethical hacking and penetration testing?",
            answer: "Ethical hacking is the broader practice of legally testing systems for weaknesses. Penetration testing is a specific, structured method within that practice, focused on simulating targeted attacks against a defined scope."
        },
        {
            id: 9,
            question: "Is this Cyber Security course available in Rajkot as well as online?",
            answer: "Yes. The course runs both offline at our Rajkot studio and online for students across Gujarat and beyond, with the same mentor-led, live-lab structure either way."
        }
    ]
};

export const faqData = faqSectionData.faqs;

/**
 * 11. Choose Your Track Data
 */
export const trackSelectorData = {
    title: "Choose Your Track",
    description: "Not every student wants the same kind of security role. Choose the track that matches the job market you want to enter.",
    tracks: [
        {
            title: "SOC & Defensive Security Track",
            description: "Build with network security, SIEM tools, and incident response — the foundation companies across Gujarat and beyond look for when hiring for security monitoring and defense roles.",
            bestFor: "Enterprise IT Companies · BFSI & Fintech · Government IT",
            idealIf: "Work as a SOC Analyst · Monitor and respond to real threats · Build a stable, structured entry into a security career"
        },
        {
            title: "Ethical Hacking & Penetration Testing Track",
            description: "Build with vulnerability assessment, exploitation techniques, and reporting — the offensive security skill set companies hire for when they need to find weaknesses before attackers do.",
            bestFor: "Security Consultancies · Product Companies · Freelance Security Testing",
            idealIf: "Work as a Penetration Tester or Ethical Hacker · Legally test and break systems to make them safer · Stand out with a more specialized, higher-demand skill set"
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
            text: "I came from an IT support background with no formal security experience. The SOC track gave me real log analysis and incident response practice — I could talk through actual cases in my interview, not just theory.",
            name: "Prakruti Shah",
            title: "SOC Analyst at a Gujarat-based IT firm, Batch Oct 2025",
            image: "/Home Page/Trust/1.webp"
        },
        {
            id: 2,
            text: "What stood out was working in real labs with Kali Linux and Burp Suite instead of just watching demos. By the end, I'd actually found and reported real vulnerabilities, not simulated ones.",
            name: "Avani Ranjan",
            title: "Junior Penetration Tester, Batch March 2026",
            image: "/2.webp"
        },
        {
            id: 3,
            text: "I switched from a non-technical role and was worried cybersecurity would be too advanced. Starting from networking fundamentals before anything else made it click, and I landed a SOC role within weeks of finishing.",
            name: "Athrv Solanki",
            title: "Security Analyst, Batch July 2026",
            image: "/3.webp"
        }
    ]
};

/**
 * 13. Final CTA Section Data
 */
export const ctaSectionData = {
    line1Normal: "Join the",
    line1Italic: "Cyber Security Course",
    line1Suffix: "in Rajkot, Gujarat — Apply Today and",
    line2Normal: "Start Defending",
    line2Italic: "Real Systems",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};

/**
 * 14. Metadata Info
 */
export const metadata = {
    title: "Cyber Security Course in Rajkot & Ahmedabad | Alphabit Skill",
    description: "Cyber Security course in Rajkot & Ahmedabad — SOC & Defensive Security, or Ethical Hacking tracks. Live labs, 300+ hiring partners. Book a free demo."
};
