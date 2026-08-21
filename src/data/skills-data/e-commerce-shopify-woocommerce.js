// ==============================================================================
// E-Commerce (Shopify/WooCommerce) - Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

/**
 * 1. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: "E-Commerce",
    titleSuffix: "(Shopify/WooCommerce)",
    highlights: [
        "NSDC-Recognised Certification",
        "300+ Active Hiring Partners",
        "Rajkot & Ahmedabad, Gujarat"
    ],
    description: "Looking for the best <strong>Shopify Development Course in Rajkot</strong> or <strong> WooCommerce Development Training in Ahmedabad</strong>? Most e-commerce courses have you install a theme, add three products, and call the store finished. Real Shopify and WooCommerce work is <strong>checkout customization</strong> that doesn't break on mobile, <strong>app integrations</strong> that don't slow the site down, and a store that actually converts — not just loads. This course builds <strong>real, live stores</strong> in Shopify or WooCommerce, with mentors who've built stores for actual clients. Choose your track, and leave with a published store you can hand a client or recruiter a link to.",
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
    titleNormal: "About Our",
    titleItalic: "Shopify & WooCommerce",
    titleSuffix: "Development Course",
    items: [
        "Comprehensive modules from platform fundamentals to a live, published store",
        "Hands-on live projects — real online stores, not local-only demo builds",
        "Portfolio of published, working store URLs, not just screenshots",
        "Small batch sizes for personalized mentor attention",
        "Weekly mentorship reviews from working e-commerce developers",
        "Resume, LinkedIn, and mock interview prep",
        "Government-recognised (NSDC), industry-ready certification",
        "Flexible No-Cost EMI fee options"
    ],
};

/**
 * 4. Choose Your Track Data
 */
export const trackSelectorData = {
    title: "Choose Your Track",
    description: "Shopify and WooCommerce are the two platforms almost every e-commerce job or client actually asks for — pick the one that matches the work you want to do.",
    tracks: [
        {
            title: "Shopify Development Track",
            description: "Build and customize Shopify stores — themes, Liquid templating, apps, and checkout customization — the platform funded startups, D2C brands, and international clients hire developers for.",
            bestFor: "D2C brands & startups · Shopify agencies · Freelance & international clients",
            idealIf: "Work as a Shopify Developer · Freelance for D2C and international Shopify clients · Specialize in the platform with the fastest-growing e-commerce job demand"
        },
        {
            title: "WooCommerce (WordPress) Development Track",
            description: "Build and customize WooCommerce stores on WordPress — themes, plugins, and payment integration — the platform most small business and agency e-commerce work in India still runs on.",
            bestFor: "WordPress agencies · Small business clients · Freelance web development",
            idealIf: "Work as a WooCommerce/WordPress Developer · Freelance for local and small business clients · Combine WordPress skills you may already have with e-commerce specialization"
        }
    ]
};

/**
 * 5. Curriculum Modules
 */
export const shopifyModules = [
    {
        num: "01",
        title: "Shopify Fundamentals & Store Setup",
        description: "Setting up a Shopify store the way an actual client project starts — store configuration, product structure, and the admin settings that get skipped in tutorials and cause problems later.",
        tags: [
            "Shopify Admin & Settings",
            "Store Setup & Configuration",
            "Product & Collection Structure",
            "Shopify Plans & Pricing Models"
        ],
        techstack: {
            tools: "Shopify · Shopify Partner Dashboard"
        }
    },
    {
        num: "02",
        title: "Liquid Templating & Theme Customization",
        description: "Shopify's templating language, and how to customize a theme beyond the settings panel — the skill that separates a Shopify developer from someone who just picks a theme from the store.",
        tags: [
            "Liquid Syntax & Objects",
            "Theme Structure",
            "Sections & Blocks",
            "Theme Customization"
        ],
        techstack: {
            tools: "Liquid · Shopify CLI"
        }
    },
    {
        num: "03",
        title: "Custom Sections & Store Design",
        description: "Building custom, reusable sections merchants can actually drag and drop into their store — the difference between a theme that looks stock and one that looks built for the brand.",
        tags: [
            "Custom Section Development",
            "Theme Editor Integration",
            "Responsive Store Design",
            "Store UX Principles"
        ],
        techstack: {
            tools: "Shopify Theme Editor · HTML/CSS/JS"
        }
    },
    {
        num: "04",
        title: "Apps, Integrations & Checkout Customization",
        description: "Integrating third-party apps and customizing checkout and cart behavior — the part of a real project where most of the client's actual requirements live.",
        tags: [
            "Shopify App Ecosystem",
            "App Integration",
            "Cart & Checkout Customization",
            "Shopify APIs Overview"
        ],
        techstack: {
            tools: "Shopify App Store · Shopify API"
        }
    },
    {
        num: "05",
        title: "Performance, SEO & Store Launch",
        description: "Getting a store to actually load fast and rank — page speed, image optimization, and on-page SEO — because a slow store loses sales regardless of how good the design is.",
        tags: [
            "Store Performance Optimization",
            "Shopify SEO Basics",
            "Pre-Launch Checklist",
            "Analytics Setup"
        ],
        techstack: {
            tools: "Shopify Speed Report · Google Analytics"
        }
    },
    {
        num: "06",
        title: "Capstone Store, Internship & Portfolio",
        description: "Everything comes together in a full, published Shopify store built for a simulated brand, a guided internship, and a portfolio with a live store link you can hand anyone.",
        tags: [
            "Capstone Store Build",
            "Client Requirements Documentation",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Shopify · Portfolio Documentation"
        }
    }
];

export const woocommerceModules = [
    {
        num: "01",
        title: "WordPress & WooCommerce Fundamentals",
        description: "Setting up WordPress and WooCommerce correctly from the start — hosting basics, plugin architecture, and store configuration, the foundation every later module builds on.",
        tags: [
            "WordPress Fundamentals",
            "WooCommerce Setup & Configuration",
            "Hosting & Domain Basics",
            "Product & Category Structure"
        ],
        techstack: {
            tools: "WordPress · WooCommerce"
        }
    },
    {
        num: "02",
        title: "Theme Customization & Page Building",
        description: "Customizing WooCommerce themes and building store pages using page builders — the way most real WooCommerce projects are actually built, not hand-coded from scratch every time.",
        tags: [
            "WooCommerce Theme Structure",
            "Page Builder Tools (Elementor)",
            "Custom Templates",
            "Store Layout Design"
        ],
        techstack: {
            tools: "Elementor · WordPress Customizer"
        }
    },
    {
        num: "03",
        title: "Essential Plugins & Store Functionality",
        description: "Configuring the plugin stack every real WooCommerce store needs — SEO, caching, security — and knowing which plugins are worth using versus which ones slow a site down.",
        tags: [
            "Plugin Selection & Configuration",
            "SEO Plugins (Yoast/Rank Math)",
            "Caching & Performance Plugins",
            "Security Basics"
        ],
        techstack: {
            tools: "Yoast SEO · WP Rocket"
        }
    },
    {
        num: "04",
        title: "Payment Gateways & Shipping Setup",
        description: "Configuring payment gateways and shipping rules correctly — the module where a small misconfiguration directly costs a client real money or lost orders.",
        tags: [
            "Payment Gateway Integration",
            "Shipping Zones & Rules",
            "Tax Configuration",
            "Order Management"
        ],
        techstack: {
            tools: "Razorpay / Stripe · WooCommerce Shipping"
        }
    },
    {
        num: "05",
        title: "Custom Functionality & Light Development",
        description: "Extending WooCommerce beyond default plugin behavior using PHP snippets and hooks — the skill that lets you actually fulfill a client's unusual request instead of saying it's not possible.",
        tags: [
            "WooCommerce Hooks & Filters",
            "Custom PHP Snippets",
            "Child Theme Development",
            "Basic Store Customization Code"
        ],
        techstack: {
            tools: "PHP Basics · Code Snippets Plugin"
        }
    },
    {
        num: "06",
        title: "Capstone Store, Internship & Portfolio",
        description: "Everything comes together in a full, published WooCommerce store for a simulated business, a guided internship, and a portfolio with a live store link ready to show clients or employers.",
        tags: [
            "Capstone Store Build",
            "Client Requirements Documentation",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "WordPress · WooCommerce"
        }
    }
];

export const curriculumTracks = [
    {
        title: "Shopify Development Track",
        path: "shopify",
        modules: shopifyModules,
    },
    {
        title: "WooCommerce (WordPress) Development Track",
        path: "woocommerce",
        modules: woocommerceModules,
    },
];

export const mernModules = shopifyModules;
export const javaModules = woocommerceModules;

/**
 * 6. Comparison Section Data
 */
export const comparisonSectionData = {
    titleNormal: "Why Students Choose Our ",
    titleItalic: "Training ",
    categories: [
        {
            id: "mentors",
            label: "Mentors",
            other: "Academics reading from slides",
            usPrefix: "Working e-commerce developers who've built ",
            usHighlight: "stores for real clients",
            usSuffix: "",
        },
        {
            id: "style",
            label: "Learning Style",
            other: "Recorded videos, copied themes",
            usPrefix: "",
            usHighlight: "100% hands-on",
            usSuffix: ", live, mentor-guided sessions",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            other: "Certificate recruiters ignore",
            usPrefix: "",
            usHighlight: "Live, published store URLs",
            usSuffix: ", not just screenshots",
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
            usPrefix: "Guided e-commerce project ",
            usHighlight: "internship",
            usSuffix: ", online & offline",
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
            usPrefix: "",
            usHighlight: "Transparent pricing",
            usSuffix: ", No Cost EMI, zero hidden fees",
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
 * 7. Earnings Section Data
 */
export const earningsSectionData = {
    titlePrefix: "What E-Commerce Developers",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior WooCommerce Developer",
            location: "Rajkot",
            salary: "₹2 – ₹3.5 LPA",
            badge: "Entry Level",
        },
        {
            title: "Shopify Developer (Entry)",
            location: "Ahmedabad / Surat",
            salary: "₹3 – ₹5.5 LPA",
            badge: "Early Career",
        },
        {
            title: "Shopify Developer",
            location: "Gujarat / Remote",
            salary: "₹4.5 – ₹8 LPA",
            badge: "High Demand",
        },
        {
            title: "WooCommerce Developer (2–3 yrs exp)",
            location: "PAN India / Remote",
            salary: "₹4 – ₹7 LPA",
            badge: "Mid-Level",
        },
        {
            title: "Shopify Developer (Experienced)",
            location: "PAN India / Remote",
            salary: "₹7 – ₹12 LPA",
            badge: "Experienced",
        },
        {
            title: "Freelance Shopify/WooCommerce Developer",
            location: "India / International",
            salary: "₹2.4 – ₹9.6 LPA",
            badge: "Freelance Roles",
        }
    ],
};

/**
 * 8. Classroom / Glance Section Data
 */
export const meetingGlanceSectionData = {
    titlePrefix: "Inside Our Classroom",
    titleSuffix: " — Shopify & WooCommerce Studio",
    meetings: [
        {
            heading: "Live Build Sessions",
            subheading: "Every class is hands-on. Students customize real stores and troubleshoot real checkout flows alongside the mentor — nobody's just watching a theme install video.",
        },
        {
            heading: "Mentor-Led Store Reviews",
            subheading: "Working e-commerce developers review your store every week and point out what would actually cost a real client conversions or orders.",
        },
        {
            heading: "Small Batch, Real Attention",
            subheading: "Batches stay small on purpose. If your Liquid section isn't rendering correctly the night before a launch, someone can actually sit with you and debug it.",
        }
    ]
};

export const meetingVideoData = {
    titlePrefix: "Inside Our Classroom —",
    titleSuffix: "Shopify & WooCommerce Studio",
    videoUrl: "",
};

/**
 * 9. Career Opportunities Data
 */
export const careerOpportunitiesData = {
    titleNormal: "Explore",
    titleItalic: "Career Opportunities",
    mernTitle: "Shopify Development Track",
    javaTitle: "WooCommerce (WordPress) Track",
    mernRoles: [
        "Shopify Developer",
        "Shopify Theme Developer",
        "E-commerce Store Manager (Shopify)",
        "Shopify App Integration Specialist",
        "Freelance Shopify Developer",
        "Shopify Partner Agency Developer"
    ],
    javaRoles: [
        "WooCommerce Developer",
        "WordPress E-commerce Developer",
        "WooCommerce Store Manager",
        "Freelance WooCommerce Developer",
        "WordPress Web Developer",
        "E-commerce Support Specialist"
    ],
};

/**
 * 10. Industries Section Data
 */
export const industriesSectionData = {
    titleNormal: "Industries That Hire",
    titleItalic: "in India",
    description: "The skills you gain are highly sought after across multiple high-growth e-commerce and retail sectors.",
    industries: [
        {
            title: "D2C Brands & Startups",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp"
        },
        {
            title: "Retail & Fashion",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp"
        },
        {
            title: "Marketing & Web Agencies",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "IT Services",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Freelance / Consulting",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Export & B2B E-commerce",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp"
        }
    ],
};

/**
 * 11. Testimonials Section Data
 */
export const testimonialsSectionData = {
    titleNormal: "Verified Career Transitions Hear Directly",
    titleParent: "from",
    titleItalic: "Deployed Alumni",
    testimonials: [
        {
            id: 1,
            text: "I'd built a couple of practice stores on my own but never dealt with real app integrations or checkout customization. Launching an actual live store during the course, not just a local demo, is what I showed in every interview.",
            name: "Harsh Kansara",
            title: "Shopify Developer, Batch April 2026",
            image: "/Home Page/Trust/1.webp"
        },
        {
            id: 2,
            text: "I already knew basic WordPress from freelancing small sites, but WooCommerce projects kept intimidating me. Learning the plugin stack and payment setup properly meant I could finally take on e-commerce client work confidently.",
            name: "Denisha Vaghela",
            title: "WooCommerce Developer, Batch July 2025",
            image: "/2.webp"
        },
        {
            id: 3,
            text: "What stood out was the performance module — I didn't know a slow store could lose that many sales until I saw the numbers. That's the kind of thing that made clients trust my recommendations, not just my code.",
            name: "Gargi Pasha",
            title: "Freelance Shopify Developer, Batch October 2025",
            image: "/3.webp"
        }
    ]
};

/**
 * 12. FAQ Section Data
 */
export const faqSectionData = {
    titleNormal: "Placement & Curriculum",
    titleItalic: "FAQ",
    faqs: [
        {
            id: 1,
            question: "Is this Shopify & WooCommerce course suitable for complete beginners?",
            answer: "Yes. The course starts from platform fundamentals, assuming no prior e-commerce or coding experience, before moving into your chosen Shopify or WooCommerce track."
        },
        {
            id: 2,
            question: "Do you provide job placement support after this course?",
            answer: "Yes. Placement support includes resume building, mock interviews, and direct referrals through 300+ hiring partners actively hiring Shopify and WooCommerce developers."
        },
        {
            id: 3,
            question: "Which track should I choose — Shopify or WooCommerce?",
            answer: "Choose Shopify if you want to work with D2C brands, startups, or international clients, where Shopify is the dominant platform. Choose WooCommerce if you're interested in WordPress-based work, since it's still the platform most small business and agency e-commerce projects in India run on."
        },
        {
            id: 4,
            question: "Do I need coding experience to join a Shopify development course in Rajkot?",
            answer: "No. Both tracks start from platform fundamentals. Shopify introduces Liquid templating and WooCommerce introduces basic PHP later in the course, but neither requires prior coding experience to begin."
        },
        {
            id: 5,
            question: "Is Shopify or WooCommerce better for a career in India right now?",
            answer: "Both have real, steady demand. Shopify demand is growing faster and tends to pay more due to international and D2C client work, while WooCommerce has a larger existing base of small business and agency projects. Many developers eventually learn both."
        },
        {
            id: 6,
            question: "How long is the Shopify & WooCommerce Development course at Alphabit Skill?",
            answer: "The course runs 4 to 6 months, with flexible weekday and weekend batch options and No Cost EMI payment options."
        },
        {
            id: 7,
            question: "What certification do I receive after completing the course?",
            answer: "You receive a government-recognised (NSDC), industry-ready certification validating your Shopify or WooCommerce development skills, depending on your chosen track."
        },
        {
            id: 8,
            question: "What will I have to show recruiters or clients by the end of the course?",
            answer: "A fully built and published store with a live URL, not just screenshots or a local install — something you can actually hand someone a link to and let them click around."
        }
    ]
};

/**
 * 13. CTA Section Data
 */
export const ctaSectionData = {
    line1Normal: "Access the",
    line1Italic: "Shopify & WooCommerce ",
    line1Suffix: "Curriculum — Apply Today and",
    line2Normal: "Start Building",
    line2Italic: "Online Stores",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};

/**
 * 14. Metadata Info
 */
export const metadata = {
    title: "Shopify Development Course in Rajkot & Ahmedabad | Alphabit Skill",
    description: "Shopify Development course  & Woo commerce development course in Rajkot & Ahmedabad — Shopify or WooCommerce tracks. Build real live stores, 300+ hiring partners. Book a free demo."
};
