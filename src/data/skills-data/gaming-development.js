// ==============================================================================
// Game Development - Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

/**
 * 1. Metadata Info
 */
export const metadata = {
    title: "Game Development Course in Rajkot | Alphabit Skill",
    description: "Learn 2D & 3D game development with Unity and C# in Rajkot. Live projects, mobile publishing & 100% placement support. NSDC-recognised."
};

/**
 * 2. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: "Game",
    titleSuffix: "Development",
    highlights: [
        "Rajkot, Gujarat",
        "Ahmedabad, Gujarat",
        "NSDC-Recognised Certification",
        "300+ Hiring Partners"
    ],
    description: "<strong>Game Development Course in Rajkot & Ahmedabad</strong>. Most courses have you drag a cube around a scene and call it a tutorial — never touching build settings, performance, or a phone that isn't a flagship. This course builds real, playable games in Unity or Unreal Engine, with mentors who've shipped games professionally. Choose your track, and leave with a playable portfolio, not just a scene file.",
    primaryCtaText: "Book Free Demo Class",
    secondaryCtaText: "Call Us",
    phoneNumber: "+919409207327",
    heroImage: "/subtract.webp",
};

/**
 * 3. Project Stats Section Data
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
 * 4. Course Features Section Data (About Our Game Development Course)
 */
export const courseFeaturesData = {
    titleNormal: "About Our",
    titleItalic: "Game Development",
    titleSuffix: "Course",
    items: [
        "Comprehensive modules from game programming fundamentals to a shippable build",
        "Hands-on live projects — playable games, not tech demos that only run in the editor",
        "GitHub/itch.io portfolio with deployed, downloadable builds",
        "Small batch sizes for personalized mentor attention",
        "Weekly mentorship reviews from working game developers",
        "Resume, LinkedIn, and mock interview prep",
        "Government-recognised (NSDC), industry-ready certification",
        "No Cost EMI fee options"
    ],
};

/**
 * 5. Track Selector Data (Choose Your Track)
 */
export const trackSelectorData = {
    title: "Choose Your Track",
    description: "Not every student wants to build the same kind of game. Pick the track that matches the studio or project you're aiming for.",
    tracks: [
        {
            title: "Unity Game Development Track",
            description: "Build with Unity and C# — the engine behind the majority of mobile, indie, and 2D/3D hybrid games shipped in India, and the most requested skill in local and remote game studio job postings.",
            bestFor: "Mobile & indie studios · 2D and lightweight 3D games · Fast solo or small-team development",
            idealIf: "Work as a Unity Developer · Ship mobile or PC indie games · Freelance or self-publish your own game"
        },
        {
            title: "Unreal Engine Game Development Track",
            description: "Build with Unreal Engine, Blueprints, and C++ — the engine behind most high-end 3D and AAA-adjacent production, and the skill set larger studios hire for when visual fidelity and performance both matter.",
            bestFor: "AAA-adjacent and larger studios · High-fidelity 3D projects · Technical, performance-focused roles",
            idealIf: "Work as an Unreal Developer · Specialize in high-end 3D game systems · Move toward technical/gameplay programmer roles"
        }
    ]
};

/**
 * 6. Curriculum Modules (Unity & Unreal Engine Tracks)
 */
export const unityModules = [
    {
        num: "01",
        title: "Game Programming Fundamentals & C#",
        description: "Core programming logic and C# syntax, taught the way a game actually uses it — loops driving gameplay, not abstract \"print a number\" exercises.",
        tags: [
            "C# Fundamentals",
            "Object-Oriented Programming",
            "Unity Editor Basics",
            "Version Control for Game Projects"
        ],
        techstack: {
            engine: "Unity",
            language: "C#",
            tools: "Visual Studio • Git"
        }
    },
    {
        num: "02",
        title: "2D & 3D Game Mechanics",
        description: "Player movement, collision, and core gameplay mechanics — the systems every playable prototype needs before art or polish matters at all.",
        tags: [
            "Player Controllers",
            "Physics & Collision",
            "Camera Systems",
            "Prefabs & Scene Management"
        ],
        techstack: {
            engine: "Unity",
            tools: "Unity Physics • 2D/3D Toolkits"
        }
    },
    {
        num: "03",
        title: "Animation, UI & Game Feel",
        description: "Animator controllers, in-game UI, and the small feedback details — screen shake, hit pause, sound cues — that separate a game that feels responsive from one that just technically works.",
        tags: [
            "Animation Controllers",
            "UI Toolkit / Canvas System",
            "Audio Integration",
            "Game Feel & Juice"
        ],
        techstack: {
            engine: "Unity",
            tools: "Unity Animator • Unity UI"
        }
    },
    {
        num: "04",
        title: "Game Architecture & Data Systems",
        description: "Structuring a project so it doesn't collapse under its own scripts by month three — save systems, scriptable objects, and architecture patterns real teams use to keep a codebase manageable.",
        tags: [
            "Scriptable Objects",
            "Save/Load Systems",
            "Design Patterns for Games",
            "Event-Driven Architecture"
        ],
        techstack: {
            engine: "Unity",
            tools: "Unity ScriptableObjects • JSON Serialization"
        }
    },
    {
        num: "05",
        title: "Performance, Build & Deployment",
        description: "Getting a game to actually run well on target hardware — profiling, optimization, and building for PC, Android, or WebGL instead of leaving everything at editor-only quality.",
        tags: [
            "Performance Profiling",
            "Build Settings & Platforms",
            "Mobile Optimization",
            "Publishing Basics (Play Store/itch.io)"
        ],
        techstack: {
            engine: "Unity",
            tools: "Unity Profiler • Android Build Support"
        }
    },
    {
        num: "06",
        title: "Capstone Game, Internship & Portfolio",
        description: "Everything comes together in a full playable capstone game, a guided internship, and a downloadable build plus GitHub/itch.io portfolio ready to show a studio.",
        tags: [
            "Capstone Game Build",
            "Playtesting & Iteration",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Git • GitHub",
            platform: "itch.io"
        }
    }
];

export const unrealModules = [
    {
        num: "01",
        title: "Game Programming Fundamentals & Blueprints",
        description: "Core programming logic taught through Unreal's visual scripting system first, building the same logical thinking you'll later apply in C++ without fighting syntax on day one.",
        tags: [
            "Blueprint Visual Scripting",
            "Unreal Editor Basics",
            "Actors & Components",
            "Version Control for Game Projects"
        ],
        techstack: {
            engine: "Unreal Engine",
            tools: "Perforce • Git"
        }
    },
    {
        num: "02",
        title: "3D Game Mechanics & Physics",
        description: "Player movement, collision, and physics-driven gameplay in true 3D space — the mechanics behind everything from a platformer to a first-person shooter prototype.",
        tags: [
            "Character Movement",
            "Physics & Collision",
            "Camera Systems",
            "Level Blueprints"
        ],
        techstack: {
            engine: "Unreal Engine",
            tools: "Unreal Physics"
        }
    },
    {
        num: "03",
        title: "C++ for Game Development",
        description: "Moving from Blueprints into C++ — the language behind performance-critical systems in almost every serious Unreal project, and a skill that distinguishes a technical candidate from a Blueprints-only one.",
        tags: [
            "C++ Fundamentals",
            "Unreal C++ Classes",
            "Blueprint-C++ Communication",
            "Memory Management Basics"
        ],
        techstack: {
            engine: "Unreal Engine",
            language: "C++",
            tools: "Visual Studio"
        }
    },
    {
        num: "04",
        title: "Animation, UI & Game Feel",
        description: "Animation Blueprints, UMG-based UI, and the feedback layer — camera shake, hit-stop, sound cues — that makes a 3D game feel responsive instead of technically correct but flat.",
        tags: [
            "Animation Blueprints",
            "UMG UI Framework",
            "Audio Integration",
            "Game Feel & Juice"
        ],
        techstack: {
            engine: "Unreal Engine",
            tools: "Unreal Animation Blueprints • UMG"
        }
    },
    {
        num: "05",
        title: "Performance, Build & Deployment",
        description: "Profiling and optimizing a 3D game for real hardware, then packaging a build for PC or console-adjacent platforms instead of leaving everything running only inside the editor.",
        tags: [
            "Performance Profiling",
            "Level Optimization",
            "Build & Packaging",
            "Platform Considerations"
        ],
        techstack: {
            engine: "Unreal Engine",
            tools: "Unreal Insights • Packaging Settings"
        }
    },
    {
        num: "06",
        title: "Capstone Game, Internship & Portfolio",
        description: "Everything comes together in a full playable 3D capstone game, a guided internship, and a downloadable build plus portfolio ready to show a studio or recruiter.",
        tags: [
            "Capstone Game Build",
            "Playtesting & Iteration",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Git • GitHub",
            platform: "itch.io"
        }
    }
];

export const curriculumTracks = [
    {
        title: "Unity Game Development Track",
        path: "unity-game-development",
        modules: unityModules
    },
    {
        title: "Unreal Engine Game Development Track",
        path: "unreal-engine-game-development",
        modules: unrealModules
    }
];

export const mernModules = unityModules;
export const javaModules = unrealModules;

/**
 * 7. Comparison Section Data (Why Students Choose Our Training Studio)
 */
export const comparisonSectionData = {
    titleNormal: "Why Students Choose Our ",
    titleItalic: "Training Studio",
    categories: [
        {
            id: "mentors",
            label: "Mentors",
            other: "Academics reading from slides",
            usPrefix: "Working game developers who've ",
            usHighlight: "shipped real titles",
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
            usPrefix: "Playable, downloadable builds on ",
            usHighlight: "GitHub/itch.io",
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
            usPrefix: "Guided game dev internship, ",
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
 * 8. Earnings Section Data
 */
export const earningsSectionData = {
    titlePrefix: "What Game Developers",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior Unity Developer",
            location: "Rajkot",
            salary: "₹2.5 – ₹4.5 LPA",
            badge: "ENTRY LEVEL",
            image: "/skill/ITSkills/fullstackdevelopment.webp",
        },
        {
            title: "Unity Developer",
            location: "Ahmedabad / Surat",
            salary: "₹4 – ₹7 LPA",
            badge: "EARLY CAREER",
            image: "/skill/ITSkills/webdevelopment.webp",
        },
        {
            title: "Unreal Developer (Entry)",
            location: "Gujarat / Remote",
            salary: "₹4.5 – ₹8 LPA",
            badge: "HIGH DEMAND",
            image: "/skill/ITSkills/cybersecurity.webp",
        },
        {
            title: "Game Programmer (2–3 yrs exp)",
            location: "PAN India / Remote",
            salary: "₹6 – ₹11 LPA",
            badge: "MID-LEVEL",
            image: "/skill/ITskills/ror_odoo_golang.webp",
        },
        {
            title: "Gameplay Programmer (Unreal C++)",
            location: "PAN India / Remote",
            salary: "₹8 – ₹14 LPA",
            badge: "EXPERIENCED",
            image: "/skill/ITSkills/fullstackdevelopment.webp",
        },
        {
            title: "Senior Game Developer",
            location: "PAN India",
            salary: "₹10 – ₹18 LPA",
            badge: "EXPERIENCED",
            image: "/skill/ITSkills/fullstackdevelopment.webp",
        }
    ],
};

export const earningsJobsData = earningsSectionData.jobs;

/**
 * 9. Meetings Glance ("Inside Our Classroom")
 */
export const meetingGlanceSectionData = {
    titlePrefix: "Inside Our",
    titleSuffix: "Classroom",
    description: "A look at how our Game Development batches actually run — live coding, mentor guidance, and real playable builds from prototype to release.",
    meetings: [
        {
            heading: "Live Build Sessions",
            subheading: "Every class is hands-on. Students write scripts, wire up gameplay systems, and playtest builds alongside the mentor in real time — nobody's just watching a tutorial video.",
        },
        {
            heading: "Mentor-Led Project Reviews",
            subheading: "Working game developers review your build every week and point out what actually breaks the experience — framerate drops, unclear feedback, mechanics that don't read as intended.",
        },
        {
            heading: "Small Batch, Real Attention",
            subheading: "Batches stay small on purpose. If your character controller is clipping through a wall at 9 PM before a playtest, someone can actually sit with you and debug it.",
        }
    ]
};

export const meetingVideoData = {
    titlePrefix: "Inside Our",
    titleSuffix: "Classroom",
    videoUrl: "",
};

/**
 * 10. Career Opportunities Data
 */
export const careerOpportunitiesData = {
    titleNormal: "Explore",
    titleItalic: "Career Opportunities",
    mernTitle: "Unity Game Development Track",
    javaTitle: "Unreal Engine Game Development Track",
    mernRoles: [
        "Unity Developer",
        "Mobile Game Developer",
        "Indie Game Developer",
        "2D/3D Game Programmer",
        "Gameplay Scripter",
        "Freelance Unity Developer"
    ],
    javaRoles: [
        "Unreal Developer",
        "Gameplay Programmer",
        "3D Game Programmer",
        "Technical Game Designer",
        "C++ Game Developer",
        "Freelance Unreal Developer"
    ],
};

/**
 * 11. Industries Section Data
 */
export const industriesSectionData = {
    titleNormal: "Industries That",
    titleItalic: "Hire",
    description: "Game development and real-time interactive skills are in high demand across multiple rapid-growth industries.",
    industries: [
        {
            title: "Gaming Studios",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Mobile App & Entertainment",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp"
        },
        {
            title: "Ed-Tech (Gamified Learning)",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/ed-tech.webp"
        },
        {
            title: "AR/VR Studios",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/healthcaretech.webp"
        },
        {
            title: "Simulation & Training Tech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/manufacturingSaaS.webp"
        },
        {
            title: "Advertising & Interactive Media",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/retail-tech.webp"
        },
        {
            title: "Freelance / Indie Publishing",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/fintech.webp"
        }
    ],
};

export const industriesData = industriesSectionData.industries;

/**
 * 12. Placement & Curriculum FAQ Data
 */
export const faqSectionData = {
    titleNormal: "Placement & Curriculum",
    titleItalic: "FAQ",
    faqs: [
        {
            id: 1,
            question: "Is this Game Development course suitable for complete beginners?",
            answer: "Yes. The course starts from core programming fundamentals, assuming no prior coding or game engine experience, before moving into Unity or Unreal Engine."
        },
        {
            id: 2,
            question: "Do you provide job placement support after this course?",
            answer: "Yes. Placement support includes resume building, mock interviews, and direct referrals through 300+ hiring partners actively looking for game development talent."
        },
        {
            id: 3,
            question: "Which track should I choose — Unity, or Unreal Engine?",
            answer: "Choose Unity if you want to build mobile, indie, or 2D/lightweight 3D games and enter the job market faster. Choose Unreal Engine if you're aiming for high-end 3D visuals, larger studios, or a more technical gameplay programmer role."
        },
        {
            id: 4,
            question: "Do I need to know how to draw or use art software to join this course?",
            answer: "No. This course focuses on game programming and systems, not art or 3D modeling. You'll use free or placeholder assets for your projects — art skills are a separate, optional specialization."
        },
        {
            id: 5,
            question: "What will I actually build during the course?",
            answer: "You'll build a full playable capstone game with a downloadable build, plus smaller projects along the way covering mechanics, UI, and performance — not just scenes that only open in the editor."
        },
        {
            id: 6,
            question: "How long is the Game Development course at Alphabit Skill?",
            answer: "The course runs 4 to 6 months, with flexible weekday and weekend batch options and No Cost EMI payment options."
        },
        {
            id: 7,
            question: "What certification do I receive after completing the course?",
            answer: "You receive a government-recognised (NSDC), industry-ready certification validating your game development skills in your chosen engine track."
        },
        {
            id: 8,
            question: "Is game development a realistic, well-paying career path in India right now?",
            answer: "Yes. India's gaming and interactive media industry is growing quickly, and Unity and Unreal developers are hired not just by gaming studios but by ed-tech, AR/VR, and simulation companies building interactive and gamified products."
        }
    ]
};

export const faqData = faqSectionData.faqs;

/**
 * 13. Alumni Testimonials Section Data
 */
export const testimonialsSectionData = {
    titleNormal: "Verified Career Transitions Hear Directly",
    titleParent: "from",
    titleItalic: "Deployed Alumni",
    testimonials: [
        {
            id: 1,
            text: "I'd only ever followed random YouTube tutorials before this. By month four I had a playable mobile game on itch.io and actually understood why my scripts were structured the way they were — that's what got me through my first interview.",
            name: "Jiya Joshi",
            title: "Junior Unity Developer, April 2026",
            image: "/Home Page/Trust/1.webp"
        },
        {
            id: 2,
            text: "The C++ module was intimidating at first, but starting with Blueprints made it click faster than I expected. Having a real capstone game instead of a tech demo made a huge difference when I was applying to studios.",
            name: "Jasleen Singh",
            title: "Unreal Developer, Batch October 2025",
            image: "/2.webp"
        },
        {
            id: 3,
            text: "What stood out was the performance module — nobody else taught me why my game was lagging on my own phone. Getting an actual APK that ran smoothly felt like a real milestone, not just another editor scene.",
            name: "Karan Chauhan",
            title: "Mobile Game Developer, Batch July 2026",
            image: "/3.webp"
        }
    ]
};

/**
 * 14. Final CTA Section Data
 */
export const ctaSectionData = {
    line1Normal: "Access the",
    line1Italic: "Game Development",
    line1Suffix: " Curriculum — Apply Today and",
    line2Normal: "Start Building",
    line2Italic: "Interactive Worlds",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};
