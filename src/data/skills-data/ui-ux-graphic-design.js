// ==============================================================================
// UI/UX & Graphic Design - Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

export const heroSectionData = {
    titlePrefix: "UI/UX &",
    titleSuffix: "Graphic Design",
    highlights: [
        "NSDC-Recognised Certification",
        "300+ Active Hiring Partners",
        "Rajkot, Gujarat"
    ],
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
        { label: "200+ Students Trained" },
        { label: "10 Years Industry Experience" },
        { label: "300+ Hiring Partners" },
        { label: "100% Placement Assistance" }
    ],
    durationVal: "4-6 months",
    durationLabel: "Course Duration",
    hoursVal: "50+ hrs",
    hoursLabel: "Live project hours"
};

export const courseFeaturesData = {
    titleNormal: "About",
    titleItalic: "UI/UX & Graphic Design",
    titleSuffix: "Course",
    description: "Every app, website, and brand needs a designer who actually knows what they're doing. Most people who search for a UI/UX or graphic design course in Rajkot end up watching free YouTube tool tutorials, copying designs they didn't create, and walking away with a certificate but nothing to show a real client. Recruiters and creative directors don't look at your certificate — they look at your work. At Alphabit Skill, every session is built around creating original work, critiqued by mentors who've actually designed for real clients.",
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

export const trackSelectorData = {
    title: "Choose your track",
    description: "UI/UX and graphic design are related — but they're different careers. Choose the track that matches the job market you want to enter.",
    tracks: [
        {
            title: "UI/UX Design",
            description: "Figma, Adobe XD, user research, prototyping, and developer handoff — the complete product design workflow that tech companies, SaaS businesses, and product startups hire for.",
            bestFor: "IT Companies · Product Startups · SaaS Businesses",
            idealIf: "Design mobile & web app interfaces · Work directly with product teams · Build a career in digital product design"
        },
        {
            title: "Graphic Design",
            description: "Adobe Photoshop, Illustrator, branding systems, social media design, and print — the complete visual communication skill set creative agencies and marketing firms look for.",
            bestFor: "Creative Agencies · Marketing Firms · Freelance Design Work",
            idealIf: "Build brand identities · Work at a creative agency · Freelance for businesses and produce marketing collateral"
        }
    ]
};

// UI/UX Design Modules
const uiUxModules = [
    {
        num: "01",
        title: "Design Thinking & Visual Fundamentals",
        image: null,
        description: "Great UI/UX designers don't start with tools — they start with thinking. Cover colour theory, typography, visual hierarchy, and composition, the fundamentals every design interview tests first.",
        tags: ["Design Thinking", "Colour Theory", "Typography", "Visual Hierarchy", "Composition"],
        techstack: {
            design: "Figma · Adobe XD · Prototyping · Design Systems · Wireframing",
            portfolio: "Behance · Dribbble · Adobe Portfolio"
        }
    },
    {
        num: "02",
        title: "UX Research & User-Centred Design",
        image: null,
        description: "Good design isn't just beautiful — it solves real problems for real people. Learn user personas, journey mapping, information architecture, wireframing, and usability testing.",
        tags: ["User Research", "Personas", "Journey Mapping", "Wireframing", "Usability Testing"],
        techstack: {
            design: "Figma · Adobe XD · Prototyping · Design Systems · Wireframing",
            portfolio: "Behance · Dribbble · Adobe Portfolio"
        }
    },
    {
        num: "03",
        title: "Figma: Industry-Standard UI Design",
        image: null,
        description: "Figma is the tool every product design team uses — not as a preference, as a standard. Learn components, auto layout, design systems, grids, and responsive frames the way product companies actually use them.",
        tags: ["Figma", "Components", "Auto Layout", "Design Systems", "Responsive UI"],
        techstack: {
            design: "Figma · Adobe XD · Prototyping · Design Systems · Wireframing",
            portfolio: "Behance · Dribbble · Adobe Portfolio"
        }
    },
    {
        num: "04",
        title: "Prototyping & Interaction Design",
        image: null,
        description: "Static screens don't show how an app feels. Build fully interactive, clickable prototypes in Figma and Adobe XD, with micro-interactions and animated flows that communicate intent before a single line of code is written.",
        tags: ["Figma Prototyping", "Adobe XD", "Micro-Interactions", "Animated Flows"],
        techstack: {
            design: "Figma · Adobe XD · Prototyping · Design Systems · Wireframing",
            portfolio: "Behance · Dribbble · Adobe Portfolio"
        }
    },
    {
        num: "05",
        title: "Design Systems & Component Libraries",
        image: null,
        description: "Senior UI/UX designers don't design individual screens — they build systems. Learn reusable component libraries, design tokens, style guides, and scalable design systems.",
        tags: ["Design Systems", "Component Libraries", "Design Tokens", "Atomic Design"],
        techstack: {
            design: "Figma · Adobe XD · Prototyping · Design Systems · Wireframing",
            portfolio: "Behance · Dribbble · Adobe Portfolio"
        }
    },
    {
        num: "06",
        title: "Developer Handoff & Design Collaboration",
        image: null,
        description: "Your designs are only as good as how well developers can build them. Learn Figma Inspect, asset export, design specifications, and redlines so your work gets implemented the way you intended.",
        tags: ["Figma Inspect", "Asset Export", "Design Specs", "Redlines", "Zeplin"],
        techstack: {
            design: "Figma · Adobe XD · Prototyping · Design Systems · Wireframing",
            portfolio: "Behance · Dribbble · Adobe Portfolio"
        }
    },
    {
        num: "07",
        title: "Adobe Photoshop for UI Designers",
        image: null,
        description: "UI/UX designers who also understand Photoshop are significantly more valuable in the market. Learn photo editing, image optimisation for web, and mockup creation.",
        tags: ["Photoshop", "Photo Editing", "Image Optimisation", "Mockup Creation"],
        techstack: {
            design: "Figma · Adobe XD · Prototyping · Design Systems · Wireframing",
            portfolio: "Behance · Dribbble · Adobe Portfolio"
        }
    },
    {
        num: "08",
        title: "Capstone Projects & Portfolio",
        image: null,
        description: "Build 2+ complete case studies — a full mobile app design with research, wireframes, and an interactive prototype, plus a web application UI with a full design system. Published on Behance and Dribbble as original work.",
        tags: ["Case Studies", "Behance Portfolio", "Dribbble", "Portfolio Presentation"],
        techstack: {
            design: "Figma · Adobe XD · Prototyping · Design Systems · Wireframing",
            portfolio: "Behance · Dribbble · Adobe Portfolio"
        }
    },
    {
        num: "09",
        title: "Placement Prep",
        image: null,
        description: "Learn case study writing — how you present your process is as important as the final design — plus mock interviews so you walk in with work you made, not work you copied.",
        tags: ["Case Study Writing", "Mock Interviews", "Interview Prep"],
        techstack: {
            design: "Figma · Adobe XD · Prototyping · Design Systems · Wireframing",
            portfolio: "Behance · Dribbble · Adobe Portfolio"
        }
    }
];

// Graphic Design Modules
const graphicDesignModules = [
    {
        num: "01",
        title: "Design Thinking & Visual Fundamentals",
        image: null,
        description: "Colour theory, typography, visual hierarchy, composition, and contrast — the same foundation applies to every design discipline. Every graphic designer needs this solid before opening a single tool.",
        tags: ["Colour Theory", "Typography", "Visual Hierarchy", "Composition", "Contrast"],
        techstack: {
            design: "Adobe Photoshop · Adobe Illustrator · Vector Design · Print Production",
            branding: "Logo Design · Brand Guidelines · Mockup Creation",
            marketing: "Canva Pro · Social Media Templates · Ad Banners"
        }
    },
    {
        num: "02",
        title: "Adobe Photoshop",
        image: null,
        description: "Photoshop is the foundation of every graphic design career. Go well beyond basics — layer management, photo editing, retouching, digital compositing, and print-ready and web-ready graphics.",
        tags: ["Adobe Photoshop", "Layers", "Photo Editing", "Retouching", "Compositing"],
        techstack: {
            design: "Adobe Photoshop · Adobe Illustrator · Vector Design · Print Production",
            branding: "Logo Design · Brand Guidelines · Mockup Creation",
            marketing: "Canva Pro · Social Media Templates · Ad Banners"
        }
    },
    {
        num: "03",
        title: "Adobe Illustrator",
        image: null,
        description: "Logos, icons, brand assets, infographics — all of it lives in Illustrator. Master vector design, the pen tool, shape building, and logo construction.",
        tags: ["Adobe Illustrator", "Vector Graphics", "Logo Design", "Pen Tool"],
        techstack: {
            design: "Adobe Photoshop · Adobe Illustrator · Vector Design · Print Production",
            branding: "Logo Design · Brand Guidelines · Mockup Creation",
            marketing: "Canva Pro · Social Media Templates · Ad Banners"
        }
    },
    {
        num: "04",
        title: "Branding & Visual Identity Design",
        image: null,
        description: "A logo is not a brand — a system is. Create complete brand identity packages including logo suites, brand guidelines, colour palettes, and typography stacks for real and concept brands.",
        tags: ["Brand Identity", "Logo Systems", "Brand Guidelines", "Style Guides"],
        techstack: {
            design: "Adobe Photoshop · Adobe Illustrator · Vector Design · Print Production",
            branding: "Logo Design · Brand Guidelines · Mockup Creation",
            marketing: "Canva Pro · Social Media Templates · Ad Banners"
        }
    },
    {
        num: "05",
        title: "Social Media & Marketing Design",
        image: null,
        description: "Most design jobs in Rajkot and Gujarat involve social media and marketing work. Produce post templates, ad banners, story formats, and email headers using Photoshop, Illustrator, and Canva Pro.",
        tags: ["Social Media Design", "Ad Banners", "Story Templates", "Canva Pro"],
        techstack: {
            design: "Adobe Photoshop · Adobe Illustrator · Vector Design · Print Production",
            branding: "Logo Design · Brand Guidelines · Mockup Creation",
            marketing: "Canva Pro · Social Media Templates · Ad Banners"
        }
    },
    {
        num: "06",
        title: "Figma for Graphic Designers",
        image: null,
        description: "Graphic designers who understand Figma are significantly more hire-able — especially at companies with both design and development teams. Learn Figma basics, UI layout, and component creation.",
        tags: ["Figma Basics", "UI Layout", "Components", "Cross-Tool Workflow"],
        techstack: {
            design: "Adobe Photoshop · Adobe Illustrator · Vector Design · Print Production",
            branding: "Logo Design · Brand Guidelines · Mockup Creation",
            marketing: "Canva Pro · Social Media Templates · Ad Banners"
        }
    },
    {
        num: "07",
        title: "Capstone Projects & Portfolio",
        image: null,
        description: "Build 2+ complete portfolio projects — a full brand identity system and a social media & marketing design package. Published on Behance and Dribbble as original work with case study writeups.",
        tags: ["Brand Identity Project", "Marketing Design Project", "Behance Portfolio"],
        techstack: {
            design: "Adobe Photoshop · Adobe Illustrator · Vector Design · Print Production",
            branding: "Logo Design · Brand Guidelines · Mockup Creation",
            marketing: "Canva Pro · Social Media Templates · Ad Banners"
        }
    },
    {
        num: "08",
        title: "Placement Prep",
        image: null,
        description: "Case study writing, mock interviews, and client pitch prep — so you walk into every client meeting and job interview with a portfolio of work you created, not a course name.",
        tags: ["Case Study Writing", "Mock Interviews", "Client Pitch Prep"],
        techstack: {
            design: "Adobe Photoshop · Adobe Illustrator · Vector Design · Print Production",
            branding: "Logo Design · Brand Guidelines · Mockup Creation",
            marketing: "Canva Pro · Social Media Templates · Ad Banners"
        }
    }
];

export const curriculumTracks = [
    {
        title: "UI/UX Design",
        path: "uiux",
        modules: uiUxModules
    },
    {
        title: "Graphic Design",
        path: "graphicdesign",
        modules: graphicDesignModules
    }
];

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
            usHighlight: "Lifetime portfolio reviews",
            usSuffix: " & mentor access for alumni",
        }
    ]
};

export const earningsSectionData = {
    titlePrefix: "What UI/UX & Graphic Designers",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    jobs: [
        {
            title: "Junior UI/UX Designer",
            location: "Rajkot",
            salary: "₹2 – ₹3.5 LPA",
            badge: "Entry Level",
        },
        {
            title: "UI/UX Designer",
            location: "Ahmedabad/Surat",
            salary: "₹3 – ₹5 LPA",
            badge: "Early Career",
        },
        {
            title: "Product Designer",
            location: "Gujarat/Remote",
            salary: "₹4 – ₹7 LPA",
            badge: "High Demand",
        },
        {
            title: "Junior Graphic Designer",
            location: "Rajkot",
            salary: "₹1.8 – ₹3 LPA",
            badge: "Entry Level",
        },
        {
            title: "Graphic Designer (Agency)",
            location: "Ahmedabad/Gujarat",
            salary: "₹2.5 – ₹4.5 LPA",
            badge: "Early Career",
        },
        {
            title: "UI/UX Designer (2-3 yrs)",
            location: "PAN India/Remote",
            salary: "₹5 – ₹12 LPA",
            badge: "Experienced",
        },
        {
            title: "Freelance Designer",
            location: "India/International",
            salary: "₹2.4 – 8.4 LPA",
            badge: "Freelance Roles",
        }
    ],
};

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

export const industriesSectionData = {
    titleNormal: "Industries that",
    titleItalic: "Hire",
    description: "The skills you gain are relevant across multiple industries actively hiring designers in Gujarat.",
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

export const meetingGlanceSectionData = {
    titlePrefix: "A Glance",
    titleSuffix: "at yesterday's Class",
    meetings: [
        {
            heading: "Live Design Critiques",
            subheading: "Real feedback on original work, not course exercises.",
        },
        {
            heading: "Mentor-Guided Sessions",
            subheading: "Working designers reviewing your case studies live.",
        }
    ]
};

export const meetingVideoData = {
    titlePrefix: "A Glance",
    titleSuffix: "at yesterday's Meeting",
    videoUrl: "",
};

export const testimonialsSectionData = {
    titleNormal: "Verified Career Transitions — Hear Directly",
    titleParent: "from",
    titleItalic: "Deployed Alumni",
    testimonials: [
        {
            id: 1,
            text: "I had no design background at all when I joined. Within 5 months of the UI/UX course I had a complete Figma portfolio with three original case studies and got placed at a product company in Rajkot. The feedback sessions alone were worth the entire course fee.",
            name: "Pooja Raval",
            title: "UI/UX Designer, Rajkot",
            image: "/Home Page/1.webp"
        },
        {
            id: 2,
            text: "The mentors know exactly what creative directors and hiring managers look for in a portfolio — because they've worked with them. I completed the graphic design course and started freelancing within weeks.",
            name: "Nikunj Shah",
            title: "Freelance Graphic Designer, Ahmedabad",
            image: "/Home Page/2.webp"
        },
        {
            id: 3,
            text: "I chose the UI/UX course because I wanted to work at a tech startup, not an agency. The Figma and prototyping modules were incredibly detailed. Got placed within 6 weeks of completing the course.",
            name: "Drashti Mehta",
            title: "Product Designer, Surat",
            image: "/Home Page/3.webp"
        }
    ]
};

export const faqSectionData = {
    titleNormal: "Corporate Placement &",
    titleItalic: "Curriculum FAQ",
    faqs: [
        {
            id: 1,
            question: "What is the difference between the UI/UX design course and the graphic design course?",
            answer: "The UI/UX design course focuses on Figma, user research, wireframing, prototyping, and developer handoff — ideal for IT companies, product startups, and SaaS businesses. The graphic design course focuses on Photoshop, Illustrator, branding, social media design, and print — ideal for creative agencies, marketing firms, and freelancing. Both are available at Alphabit Skill in Rajkot with the same project-based approach."
        },
        {
            id: 2,
            question: "Does UI/UX design require coding knowledge?",
            answer: "No. UI/UX design doesn't require coding. You'll learn how to prepare designs for developers using Figma Inspect and design specifications — but writing code isn't part of the course. Many placed UI/UX designers came from completely non-technical backgrounds."
        },
        {
            id: 3,
            question: "Do I need prior design experience to join?",
            answer: "No. Both tracks start from visual fundamentals. Many placed students came from arts, commerce, and non-IT backgrounds with no prior design experience. An eye for aesthetics and the willingness to build original work is enough to start."
        },
        {
            id: 4,
            question: "How long is the UI/UX & graphic design course?",
            answer: "4 to 6 months depending on your batch schedule, with weekday, weekend, and online options available."
        },
        {
            id: 5,
            question: "What will my portfolio look like after completing the course?",
            answer: "UI/UX graduates leave with a Behance portfolio containing 2+ full case studies — research, wireframes, high-fidelity screens, and interactive prototypes. Graphic design graduates leave with a full brand identity project and a marketing design collection, all original work."
        },
        {
            id: 6,
            question: "Does Alphabit Skill provide placement assistance after the design course?",
            answer: "Yes. 100% placement assistance including portfolio review, Behance and Dribbble optimisation, mock design interviews, and direct referrals to 300+ hiring partners across Rajkot, Ahmedabad, Surat, Vadodara, and across India."
        },
        {
            id: 7,
            question: "Why choose Alphabit Skill over learning design on YouTube or Udemy?",
            answer: "YouTube and Udemy give you tool tutorials. Alphabit Skill gives you live design critiques from working designers, weekly feedback on your original work, a Behance portfolio of case studies, and a direct path to placement through 300+ hiring partners."
        }
    ]
};

export const ctaSectionData = {
    line1Normal: "Access the Curriculum",
    line1Italic: "— Apply Today &",
    line1Suffix: "",
    line2Normal: "Master Advanced",
    line2Italic: "Design Frameworks",
    buttonText: "Book Free Demo Class",
    buttonHref: "/register",
};
