// ==============================================================================
// UI/UX & Graphic Design - Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

/**
 * 1. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: "UI/UX &",
    titleSuffix: "Graphic Design",
    highlights: [
        "NSDC-Recognised Certification",
        "300+ Active Hiring Partners",
        "Rajkot, Gujarat"
    ],
    description: "<strong>UI/UX & Graphic Design Course in Rajkot & Ahmedabad</strong>. Most design courses teach Figma or Photoshop and call the tool the skill. It isn't — pretty mockups with no research behind them get the same silent rejection as a logo with no strategy. This course builds the thinking first, with weekly critique from working designers who tell you when something doesn't work. Choose UI/UX or Graphic Design, and leave with 5+ published Behance case studies.",
    primaryCtaText: "Book Free Demo Class",
    secondaryCtaText: "Call Us",
    phoneNumber: "+919409207327",
    heroImage: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1786946114/ui-ux-hero-img_cp8vdk.webp",
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
        { label: "100% Placement Assistance" }
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
    titleNormal: "About",
    titleItalic: "UI/UX & Graphic Design",
    titleSuffix: "Course",
    items: [
        "10 Modules — fundamentals to portfolio handoff",
        "5+ live design projects published on Behance",
        "Portfolio on Behance & Dribbble",
        "Small batch sizes for personal attention",
        "Weekly design critiques by working designers",
        "Resume, portfolio review & mock interviews",
        "Government-recognised certification",
        "No Cost EMI — zero hidden charges",
        "Weekend, weekday & online batch options"
    ],
};

/**
 * 4. Choose Your Track Data
 */
export const trackSelectorData = {
    title: "Choose Your Track",
    description: "UI/UX and graphic design are related, but they're different careers. Pick the track that matches the job market you want to enter.",
    tracks: [
        {
            title: "UI/UX Design Track",
            description: "Figma, Adobe XD, user research, prototyping, and developer handoff — the complete product design workflow that tech companies, SaaS businesses, and product startups hire for.",
            bestFor: "IT companies · Product startups · SaaS businesses",
            idealIf: "Design mobile & web app interfaces · Work directly with product teams · Build a career in digital product design"
        },
        {
            title: "Graphic Design Track",
            description: "Adobe Photoshop, Illustrator, branding systems, social media design, and print — the complete visual communication skill set creative agencies and marketing firms look for.",
            bestFor: "Creative agencies · Marketing firms · Freelance design work",
            idealIf: "Build brand identities · Work at a creative agency · Freelance for businesses and produce marketing collateral"
        }
    ]
};

/**
 * 5. Curriculum Modules (UI/UX Design + Graphic Design Tracks)
 */
export const uiUxModules = [
    {
        num: "01",
        title: "Design Thinking & Visual Fundamentals",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module1.webp",
        imageAlt: "UI/UX design course module - design thinking and colour theory fundamentals",
        description: "Great UI/UX designers don't start with tools, they start with thinking. Colour theory, typography, visual hierarchy, and composition — the fundamentals every design interview tests first, before Figma ever opens.",
        tags: [
            "Design Thinking",
            "Colour Theory",
            "Typography",
            "Visual Hierarchy",
            "Composition"
        ],
        techstack: {
            design: "Figma · Adobe XD",
            portfolio: "Behance · Dribbble"
        }
    },
    {
        num: "02",
        title: "UX Research & User-Centred Design",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module2.webp",
        imageAlt: "UX research training - user personas and journey mapping",
        description: "Learn how real product teams decide what to design in the first place — user interviews, personas, and journey mapping before a single screen gets built.",
        tags: [
            "User Research Methods",
            "Personas",
            "User Journey Mapping",
            "Usability Testing Basics"
        ],
        techstack: {
            tools: "Figma · Miro (or similar)"
        }
    },
    {
        num: "03",
        title: "Figma: Industry-Standard UI Design",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module3.webp",
        imageAlt: "Figma UI design training - components and auto layout",
        description: "Master Figma at the level real product teams use it — components, auto layout, and design files structured to actually hand off to developers, not just look good in isolation.",
        tags: [
            "Figma Interface & Tools",
            "Auto Layout",
            "Components & Variants",
            "Design File Organization"
        ],
        techstack: {
            tool: "Figma"
        }
    },
    {
        num: "04",
        title: "Prototyping & Interaction Design",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module4.webp",
        imageAlt: "Interaction design course - Figma prototyping and micro-interactions",
        description: "Turn static screens into clickable, testable prototypes that show how an app actually feels to use, not just how it looks in a single frame.",
        tags: [
            "Interactive Prototyping",
            "Micro-interactions",
            "Transitions & Animation Basics",
            "User Testing with Prototypes"
        ],
        techstack: {
            tool: "Figma (Prototyping Mode)"
        }
    },
    {
        num: "05",
        title: "Design Systems & Component Libraries",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module5.webp",
        imageAlt: "Design systems training - component libraries and design tokens",
        description: "Learn to build reusable design systems — the shared component libraries that keep large products visually consistent as they grow past a handful of screens.",
        tags: [
            "Design Tokens",
            "Component Libraries",
            "Design System Documentation",
            "Consistency at Scale"
        ],
        techstack: {
            tool: "Figma (Component Libraries)"
        }
    },
    {
        num: "06",
        title: "Developer Handoff & Design Collaboration",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module6.webp",
        imageAlt: "Developer handoff training - design specs and Figma Dev Mode",
        description: "Learn to prepare and communicate designs the way developers actually need them — specs, assets, and the collaboration workflow that prevents a design from getting misread in build.",
        tags: [
            "Developer Handoff Best Practices",
            "Design Specs & Redlines",
            "Asset Export",
            "Design-Dev Collaboration Tools"
        ],
        techstack: {
            tools: "Figma Dev Mode · Zeplin (overview)"
        }
    },
    {
        num: "07",
        title: "UI/UX Capstone Projects & Portfolio",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module7.webp",
        imageAlt: "UI/UX portfolio capstone project - Behance case study",
        description: "Apply everything into 5+ real UI/UX case studies, published on Behance and Dribbble, structured the way hiring managers actually expect a design portfolio to read.",
        tags: [
            "Case Study Writing",
            "Capstone Project Build",
            "Portfolio Curation",
            "Behance/Dribbble Publishing"
        ],
        techstack: {
            platforms: "Behance · Dribbble · Adobe Portfolio"
        }
    },
    {
        num: "08",
        title: "UI/UX Placement Prep",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module8.webp",
        imageAlt: "UI/UX designer interview preparation and portfolio review",
        description: "Prepare specifically for UI/UX interviews — portfolio walkthroughs, design critique responses, and the kind of whiteboard exercises product companies actually run.",
        tags: [
            "Portfolio Presentation",
            "Design Critique Practice",
            "Mock Interviews",
            "Resume & LinkedIn for Designers"
        ],
        techstack: {
            tools: "Portfolio Reviews · Mock Interviews"
        }
    }
];

export const graphicDesignModules = [
    {
        num: "01",
        title: "Design Fundamentals & Visual Communication",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module1.webp",
        imageAlt: "Graphic design fundamentals - typography and visual composition",
        description: "Every strong graphic designer starts with the same fundamentals — colour theory, typography, and composition — taught here through the lens of print and brand communication rather than app screens.",
        tags: [
            "Design Fundamentals",
            "Colour Theory",
            "Typography",
            "Visual Composition"
        ],
        techstack: {
            tools: "Adobe Photoshop · Adobe Illustrator"
        }
    },
    {
        num: "02",
        title: "Adobe Photoshop for Design",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module2.webp",
        imageAlt: "Adobe Photoshop training - photo manipulation and compositing",
        description: "Master Photoshop at a professional level — photo manipulation, compositing, and the retouching and layout skills client work actually demands.",
        tags: [
            "Photo Manipulation",
            "Layer Techniques",
            "Compositing",
            "Retouching Basics"
        ],
        techstack: {
            tool: "Adobe Photoshop"
        }
    },
    {
        num: "03",
        title: "Adobe Illustrator & Vector Design",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module3.webp",
        imageAlt: "Adobe Illustrator training - vector logo and icon design",
        description: "Learn vector-based design for logos, icons, and illustrations that need to scale cleanly from a business card to a billboard.",
        tags: [
            "Vector Illustration",
            "Logo Design Basics",
            "Icon Design",
            "Scalable Graphics"
        ],
        techstack: {
            tool: "Adobe Illustrator"
        }
    },
    {
        num: "04",
        title: "Brand Identity & Logo Design",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module4.webp",
        imageAlt: "Brand identity design course - logo design and brand guidelines",
        description: "Learn to build a complete brand identity — not just a logo, but the guidelines, colour palette, and typography system that keeps a brand consistent everywhere it appears.",
        tags: [
            "Brand Strategy Basics",
            "Logo Design Process",
            "Brand Guidelines",
            "Colour & Type Systems"
        ],
        techstack: {
            tools: "Adobe Illustrator · Adobe Photoshop"
        }
    },
    {
        num: "05",
        title: "Social Media & Digital Design",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module5.webp",
        imageAlt: "Social media graphic design training - ad creatives and templates",
        description: "Learn to design for the platforms brands actually post on daily — templates, ad creatives, and content that's built to perform, not just look good.",
        tags: [
            "Social Media Design Templates",
            "Ad Creative Design",
            "Content Calendars for Design",
            "Platform-Specific Sizing"
        ],
        techstack: {
            tools: "Adobe Photoshop · Canva (overview)"
        }
    },
    {
        num: "06",
        title: "Print Design & Layout",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module6.webp",
        imageAlt: "Print design course - brochure layout and packaging design",
        description: "Learn print-specific design skills — brochures, packaging, and layout work that still makes up a large share of real client and agency briefs.",
        tags: [
            "Print Layout Principles",
            "Brochure & Flyer Design",
            "Packaging Design Basics",
            "Print-Ready File Prep"
        ],
        techstack: {
            tools: "Adobe InDesign (overview) · Adobe Illustrator"
        }
    },
    {
        num: "07",
        title: "Graphic Design Capstone Projects & Portfolio",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module7.webp",
        imageAlt: "Graphic design portfolio capstone project - Behance branding case study",
        description: "Apply everything into 5+ real graphic design projects across branding, social, and print, published on Behance the way agencies expect a hireable portfolio to look.",
        tags: [
            "Capstone Project Build",
            "Portfolio Curation",
            "Client-Style Briefs",
            "Behance Publishing"
        ],
        techstack: {
            platforms: "Behance · Adobe Portfolio"
        }
    },
    {
        num: "08",
        title: "Graphic Design Placement Prep",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module9.webp",
        imageAlt: "Graphic designer interview preparation and freelance pricing",
        description: "Prepare specifically for graphic design and agency interviews — portfolio presentation, client-brief responses, and freelance pricing basics if you plan to go independent.",
        tags: [
            "Portfolio Presentation",
            "Client Brief Response Practice",
            "Mock Interviews",
            "Freelance Pricing Basics"
        ],
        techstack: {
            tools: "Portfolio Reviews · Mock Interviews"
        }
    }
];

export const curriculumTracks = [
    {
        title: "UI/UX Design Track",
        path: "uiux",
        modules: uiUxModules
    },
    {
        title: "Graphic Design Track",
        path: "graphicdesign",
        modules: graphicDesignModules
    }
];

export const mernModules = uiUxModules;
export const javaModules = graphicDesignModules;

/**
 * 6. Comparison Section Data
 */
export const comparisonSectionData = {
    titleNormal: "Why Students Choose Our ",
    titleItalic: "UI/UX & Graphic Design Training",
    categories: [
        {
            id: "mentors",
            label: "Mentors",
            other: "Academics teaching design theory",
            usPrefix: "",
            usHighlight: "Working designers",
            usSuffix: " with real client experience",
        },
        {
            id: "style",
            label: "What You Build",
            other: "Copied templates & tool exercises",
            usPrefix: "",
            usHighlight: "5+ original projects",
            usSuffix: " published on Behance",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            other: "Certificate recruiters ignore",
            usPrefix: "",
            usHighlight: "Behance case studies",
            usSuffix: " + Dribbble shots",
        },
        {
            id: "critique",
            label: "Critique Style",
            other: "Generic feedback on course exercises",
            usPrefix: "Weekly critiques based on ",
            usHighlight: "real client standards",
            usSuffix: "",
        },
        {
            id: "placement",
            label: "Placement",
            other: "Resume forwarding only",
            usPrefix: "",
            usHighlight: "300+ partners",
            usSuffix: ", direct referrals, portfolio reviews",
        },
        {
            id: "certification",
            label: "Certification",
            other: "Private, unrecognized",
            usPrefix: "",
            usHighlight: "Government-recognised",
            usSuffix: " national certification",
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
            usHighlight: "Lifetime portfolio reviews",
            usSuffix: " & mentor access for alumni",
        }
    ]
};

/**
 * 7. Earnings Section Data
 */
export const earningsSectionData = {
    titlePrefix: "What UI/UX & Graphic Designers",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior UI/UX Designer",
            location: "Rajkot",
            salary: "₹2 – ₹3.5 LPA",
            badge: "Entry Level",
            image: "/skill/ITSkills/ui_uxgraphicdesign.webp",
        },
        {
            title: "UI/UX Designer",
            location: "Ahmedabad / Surat",
            salary: "₹3 – ₹5 LPA",
            badge: "Early Career",
            image: "/skill/ITSkills/ui_uxgraphicdesign.webp",
        },
        {
            title: "Product Designer",
            location: "Gujarat / Remote",
            salary: "₹4 – ₹7 LPA",
            badge: "High Demand",
            image: "/skill/ITSkills/ui_uxgraphicdesign.webp",
        },
        {
            title: "Junior Graphic Designer",
            location: "Rajkot",
            salary: "₹1.8 – ₹3 LPA",
            badge: "Entry Level",
            image: "/skill/ITSkills/ui_uxgraphicdesign.webp",
        },
        {
            title: "Graphic Designer (Agency)",
            location: "Ahmedabad / Gujarat",
            salary: "₹2.5 – ₹4.5 LPA",
            badge: "Early Career",
            image: "/skill/ITSkills/ui_uxgraphicdesign.webp",
        },
        {
            title: "UI/UX Designer (2–3 yrs)",
            location: "PAN India / Remote",
            salary: "₹5 – ₹12 LPA",
            badge: "Experienced",
            image: "/skill/ITSkills/ui_uxgraphicdesign.webp",
        }
    ],
};

export const earningsJobsData = earningsSectionData.jobs;

/**
 * 8. Glance at Yesterday's Class
 */
export const meetingGlanceSectionData = {
    titlePrefix: "A Glance",
    titleSuffix: "at yesterday's Class",
    meetings: [
        {
            heading: "Live Design Critiques",
            subheading: "Real feedback on original work, not course exercises. If your hierarchy leads the eye to the wrong place, someone tells you before a recruiter does.",
        },
        {
            heading: "Mentor-Guided Sessions",
            subheading: "Working designers reviewing your case studies live, holding them to the same standard a client or hiring manager would.",
        },
        {
            heading: "Small Batch, Real Attention",
            subheading: "Batches stay small on purpose. Limited seats per batch mean every student gets detailed, individual critique, not generic group feedback lost in a crowd.",
        }
    ]
};

export const meetingVideoData = {
    titlePrefix: "A Glance",
    titleSuffix: "at yesterday's Class",
    videoUrl: "",
};

/**
 * 9. Career Opportunities Data
 */
export const careerOpportunitiesData = {
    titleNormal: "Explore",
    titleItalic: "Career Opportunities",
    mernTitle: "UI/UX Track",
    javaTitle: "Graphic Design Track",
    mernRoles: [
        "UI/UX Designer",
        "Product Designer",
        "Interaction Designer",
        "Visual Designer",
        "UX Researcher",
        "Freelance UI/UX Designer"
    ],
    javaRoles: [
        "Graphic Designer",
        "Brand Designer",
        "Visual Communication Designer",
        "Social Media Designer",
        "Creative Designer (Agency)",
        "Freelance Graphic Designer"
    ],
};

/**
 * 10. Industries Section Data
 */
export const industriesSectionData = {
    titleNormal: "Industries That",
    titleItalic: "Hire",
    description: "The skills you gain are relevant across multiple industries actively hiring designers in Gujarat and beyond.",
    industries: [
        { title: "IT Services", icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp" },
        { title: "Product Startups", icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp" },
        { title: "SaaS Companies", icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp" },
        { title: "Creative Agencies", icon: "/skill/ITSkills/FullStackDevelopment/industriessection/retail-tech.webp" },
        { title: "Marketing Firms", icon: "/skill/ITSkills/FullStackDevelopment/industriessection/retail-tech.webp" },
        { title: "E-commerce", icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp" },
        { title: "Healthcare", icon: "/skill/ITSkills/FullStackDevelopment/industriessection/healthcaretech.webp" },
        { title: "Education", icon: "/skill/ITSkills/FullStackDevelopment/industriessection/ed-tech.webp" },
        { title: "Real Estate", icon: "/skill/ITSkills/FullStackDevelopment/industriessection/manufacturingSaaS.webp" },
    ],
};

export const industriesData = industriesSectionData.industries;

/**
 * 11. Alumni Testimonials Section Data
 */
export const testimonialsSectionData = {
    titleNormal: "Verified Career Transitions — Hear Directly",
    titleParent: "from",
    titleItalic: "Deployed Alumni",
    testimonials: [
        {
            id: 1,
            text: "I came from a completely non-design background and assumed you needed an art degree to break into UX. Building real case studies from actual user research, not just pretty mockups, is what got noticed in interviews.",
            name: "Varushka Sharma",
            title: "UI/UX Designer at a Gujarat-based product startup, Batch April 2025",
            track: "UI/UX Track",
            image: ""
        },
        {
            id: 2,
            text: "I'd been freelancing casually for a while, mostly underpricing myself. The branding and client-brief modules taught me to work the way agencies actually expect, and I could finally charge what the work was worth.",
            name: "Manu Joshi",
            title: "Graphic Designer at a creative agency, Batch October 2025",
            track: "Graphic Design Track",
            image: ""
        },
        {
            id: 3,
            text: "The weekly critiques were harder than I expected — no one just said 'looks good.' That honest feedback is exactly what made my Behance portfolio strong enough to get replies from recruiters.",
            name: "Avani Patel",
            title: "Product Designer, Batch May 2026",
            track: "UI/UX Track",
            image: ""
        }
    ]
};

/**
 * 12. Placement & Curriculum FAQ Section Data
 */
export const faqSectionData = {
    titleNormal: "Corporate Placement &",
    titleItalic: "Curriculum FAQ",
    faqs: [
        {
            id: 1,
            question: "What is the difference between the UI/UX design course and the graphic design course?",
            answer: "The UI/UX design course focuses on Figma, user research, wireframing, prototyping, and developer handoff, ideal for IT companies, product startups, and SaaS businesses. The graphic design course focuses on Photoshop, Illustrator, branding, social media design, and print, ideal for creative agencies, marketing firms, and freelancing. Both are available at Alphabit Skill in Rajkot and Ahmedabad with the same project-based approach."
        },
        {
            id: 2,
            question: "Does UI/UX design require coding knowledge?",
            answer: "No. UI/UX design is a design discipline, not a development one — you'll work in Figma and Adobe XD, not code. Understanding basic frontend concepts helps when collaborating with developers, but it isn't required to join or complete the course."
        },
        {
            id: 3,
            question: "Do I need prior design experience to join a UI/UX or graphic design course in Rajkot?",
            answer: "No. Both tracks start from design fundamentals — colour theory, typography, and composition — assuming no prior design background."
        },
        {
            id: 4,
            question: "How long is the UI/UX & Graphic Design course at Alphabit Skill?",
            answer: "The course runs 4 to 6 months, with weekday, weekend, and online batch options, plus No Cost EMI payment plans."
        },
        {
            id: 5,
            question: "What will my portfolio look like after completing the course?",
            answer: "5+ real, published case studies or design projects on Behance and Dribbble, structured the way hiring managers and agencies actually expect a design portfolio to read, not a folder of course exercises."
        },
        {
            id: 6,
            question: "Does Alphabit Skill provide placement assistance after the design course?",
            answer: "Yes. Placement support includes resume building, portfolio reviews, mock interviews, and direct referrals through 300+ hiring partners actively hiring UI/UX and graphic designers."
        },
        {
            id: 7,
            question: "Why choose Alphabit Skill over learning design on YouTube or Udemy?",
            answer: "Free tutorials teach you tools; they don't tell you if your work is actually good enough to get hired for. Here, working designers critique your real projects weekly against client and industry standards, and you leave with a structured, published portfolio rather than a folder of disconnected practice files."
        },
        {
            id: 8,
            question: "Which track should I choose — UI/UX Design, or Graphic Design?",
            answer: "Choose UI/UX Design if you want to work with product teams designing app and web interfaces at tech companies or startups. Choose Graphic Design if you're drawn to branding, print, and visual communication work at agencies or as a freelancer."
        }
    ]
};

export const faqData = faqSectionData.faqs;

/**
 * 13. Final CTA Section Data
 */
export const ctaSectionData = {
    line1Normal: "Access the Curriculum -",
    line1Italic: " Apply Today ",
    line1Suffix: "",
    line2Normal: "Master Advanced",
    line2Italic: "Design Frameworks",
    buttonText: "Book Free Demo Class",
    buttonHref: "/register",
};

/**
 * 14. Metadata Info
 */
export const metadata = {
    title: "UI/UX & Graphic Design Course in Rajkot & Ahmedabad | Alphabit Skill",
    description: "UI/UX & Graphic Design course in Rajkot & Ahmedabad — Figma product design, or Photoshop branding tracks. Real Behance portfolio. Book a free demo."
};
