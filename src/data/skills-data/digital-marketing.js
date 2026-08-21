// ==============================================================================
// Digital Marketing - Master Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

/**
 * 1. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: "Digital",
    titleSuffix: "Marketing",
    highlights: [
        "NSDC-Recognised Certification",
        "300+ Active Hiring Partners",
        "Rajkot & Ahmedabad, Gujarat"
    ],
    description: "<strong>Digital Marketing Course in Rajkot & Ahmedabad</strong>. Most digital marketing courses show you how to boost a post and call it strategy. Real marketers manage live ad budgets, track conversions that actually matter, and now increasingly optimize for how AI search tools cite brands, not just Google rankings. Choose Performance Marketing or SEO & Content Marketing, and train on real accounts with mentors who work in marketing professionally.",
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
    titleNormal: "About",
    titleItalic: "Digital Marketing",
    titleSuffix: "Course",
    items: [
        "9 Modules — fundamentals to AI search visibility",
        "5+ live campaigns on real ad accounts & websites",
        "Certified in Google Ads, Meta Ads & Google Analytics",
        "Small batch sizes for personal attention",
        "Weekly performance reviews by working marketers",
        "Resume, LinkedIn & mock interview prep",
        "Government-recognised certification",
        "No Cost EMI — flexible fee structure",
        "Weekend, weekday & online batch options"
    ],
};

/**
 * 4. Choose Your Track Data
 */
export const trackSelectorData = {
    title: "Choose Your Track",
    description: "Digital marketing splits into two very different day-to-day jobs. Choose the track that matches the kind of work you actually want to do — whether you're hiring into Rajkot, Ahmedabad, or working remote/freelance.",
    tracks: [
        {
            title: "Performance Marketing Track",
            description: "Google Ads, Meta Ads, and analytics — the paid, data-driven side of digital marketing that runs campaigns, tracks conversions, and delivers measurable ROI for e-commerce and lead-generation businesses.",
            bestFor: "E-commerce Brands · Performance Marketing Agencies · Lead-Gen Businesses",
            idealIf: "Run Google & Meta ad campaigns · Work at a performance marketing agency · Manage ad budgets for real businesses"
        },
        {
            title: "SEO & Content Marketing Track",
            description: "Technical SEO, content strategy, and AI search visibility (GEO/AEO) — the organic side of digital marketing that builds long-term traffic and gets brands cited by both Google and AI search tools.",
            bestFor: "SEO Agencies · IT Companies · Content-Led Businesses",
            idealIf: "Rank websites on Google · Get brands cited in ChatGPT & AI Overviews · Build a long-term SEO or content marketing career"
        }
    ]
};

/**
 * 5. Curriculum Modules (Performance Marketing + SEO & Content Marketing Tracks)
 */
export const performanceModules = [
    {
        num: "01",
        title: "Performance Marketing Fundamentals",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module1.webp",
        imageAlt: "Performance marketing fundamentals and campaign strategy",
        description: "Before you touch an ad account, you need to understand how paid channels actually move a customer from seeing a brand to buying from it — on someone else's ad budget. Cover the marketing funnel, buyer personas, campaign objectives, and how ROI and ad spend get judged, before opening a single ads dashboard.",
        tags: [
            "Marketing Funnel",
            "Buyer Personas",
            "Campaign Objectives & KPIs",
            "Paid Channel Strategy"
        ],
        techstack: {
            tools: "Google Ads · Meta Ads Manager · Google Sheets"
        }
    },
    {
        num: "02",
        title: "Google Ads & Search Engine Marketing",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module2.webp",
        imageAlt: "Google Ads search engine marketing and keyword planner",
        description: "Build, structure, and optimize real search and display campaigns — keyword match types, bidding strategies, and Quality Score, the mechanics that decide whether an ad budget gets wasted or converts.",
        tags: [
            "Campaign Structure",
            "Keyword Match Types",
            "Bidding Strategies",
            "Quality Score & Ad Rank"
        ],
        techstack: {
            tools: "Google Ads · Google Keyword Planner"
        }
    },
    {
        num: "03",
        title: "Meta Ads: Facebook & Instagram Advertising",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module3.webp",
        imageAlt: "Meta Ads Facebook and Instagram advertising campaigns",
        description: "Run campaigns inside Meta Ads Manager — audience targeting, creative testing, and budget allocation across Facebook and Instagram placements for real lead-gen and e-commerce objectives.",
        tags: [
            "Audience Targeting & Lookalikes",
            "Ad Creative Testing",
            "Campaign Budget Optimisation",
            "Placement Strategy"
        ],
        techstack: {
            tools: "Meta Ads Manager · Meta Pixel"
        }
    },
    {
        num: "04",
        title: "Google Analytics & Conversion Tracking",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module4.webp",
        imageAlt: "Google Analytics 4 and Tag Manager conversion tracking",
        description: "Set up the tracking that makes every other module's data trustworthy — GA4 events, Tag Manager, and pixel setup, so campaign performance numbers reflect what actually happened, not guesswork.",
        tags: [
            "GA4 Setup & Events",
            "Google Tag Manager",
            "Conversion Tracking",
            "Attribution Basics"
        ],
        techstack: {
            tools: "Google Analytics 4 · Google Tag Manager · Looker Studio"
        }
    },
    {
        num: "05",
        title: "Conversion Rate Optimisation & Landing Pages",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module5.webp",
        imageAlt: "Conversion rate optimization and landing page A/B testing",
        description: "Learn why a campaign can hit its click targets and still lose money — landing page structure, A/B testing, and CRO principles that turn traffic into actual conversions.",
        tags: [
            "Landing Page Structure",
            "A/B Testing",
            "CRO Principles",
            "Heatmaps & User Behaviour"
        ],
        techstack: {
            tools: "Unbounce · Hotjar · Google Optimize"
        }
    },
    {
        num: "06",
        title: "E-commerce, Retargeting & Automation",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module6.webp",
        imageAlt: "E-commerce retargeting campaigns and marketing automation",
        description: "Layer retargeting campaigns and automated email/WhatsApp flows on top of paid traffic — the systems that recover abandoned carts and turn one-time buyers into repeat customers.",
        tags: [
            "Retargeting Campaign Setup",
            "E-commerce Catalog Ads",
            "Email & Automation Flows",
            "Customer Lifecycle Marketing"
        ],
        techstack: {
            tools: "Meta Ads Manager · Google Ads · Email Automation Tools"
        }
    },
    {
        num: "07",
        title: "Performance Marketing Capstone, Internship & Portfolio",
        image: "/skill/ITSkills/FullStackDevelopment/Java/module7.webp",
        imageAlt: "Performance marketing capstone project and ROI reporting",
        description: "Apply everything into live campaigns on a real ad account and budget, complete a guided internship, and leave with campaign reports and ROI data you can walk an interviewer through.",
        tags: [
            "Capstone Campaign Build",
            "Budget & ROI Reporting",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Google Ads · Meta Ads Manager · Looker Studio"
        }
    }
];

export const seoModules = [
    {
        num: "01",
        title: "SEO & Content Marketing Fundamentals",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module1.webp",
        imageAlt: "SEO and content marketing fundamentals and search intent",
        description: "Before writing a single article or touching a site's code, you need to understand how search actually works — search intent, how Google and AI search tools decide what to surface, and how organic and content strategy fit together long-term.",
        tags: [
            "Search Intent",
            "How Search Engines Rank Content",
            "Organic vs Paid Strategy",
            "Content Funnel Basics"
        ],
        techstack: {
            tools: "Google Search Console · Google Sheets"
        }
    },
    {
        num: "02",
        title: "Keyword Research & On-Page SEO",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module2.webp",
        imageAlt: "Keyword research and on-page SEO optimization",
        description: "Find the keywords worth targeting and structure a page to actually rank for them — title tags, meta descriptions, headers, and internal linking done the way real audits check for.",
        tags: [
            "Keyword Research",
            "On-Page Optimisation",
            "Meta Tags & Headers",
            "Internal Linking Strategy"
        ],
        techstack: {
            tools: "Ahrefs / Semrush · Google Search Console"
        }
    },
    {
        num: "03",
        title: "Technical SEO & Site Health",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module3.webp",
        imageAlt: "Technical SEO site audits speed and schema markup",
        description: "Learn the site-level issues that quietly cap a page's rankings no matter how good the content is — crawlability, site speed, Core Web Vitals, and structured data.",
        tags: [
            "Crawling & Indexing",
            "Site Speed & Core Web Vitals",
            "Schema Markup",
            "Technical SEO Audits"
        ],
        techstack: {
            tools: "Screaming Frog · Google PageSpeed Insights · Google Search Console"
        }
    },
    {
        num: "04",
        title: "Content Strategy & Writing for Search",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module4.webp",
        imageAlt: "Content strategy and writing for search engine intent",
        description: "Plan and write content that actually ranks and gets read — content calendars, search-intent-matched writing, and structuring articles for both readers and search engines.",
        tags: [
            "Content Planning & Calendars",
            "Writing for Search Intent",
            "Content Structuring",
            "On-Page Content Optimisation"
        ],
        techstack: {
            tools: "WordPress · Google Docs · Surfer SEO"
        }
    },
    {
        num: "05",
        title: "Off-Page SEO & Link Building",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module5.webp",
        imageAlt: "Off-page SEO backlink building and outreach techniques",
        description: "Learn how domain authority actually gets built — white-hat link building, outreach, and the off-page signals that separate a page that should rank from one that actually does.",
        tags: [
            "Link Building Fundamentals",
            "Outreach Techniques",
            "Domain Authority Signals",
            "White-Hat vs Black-Hat SEO"
        ],
        techstack: {
            tools: "Ahrefs / Semrush · Outreach Tools"
        }
    },
    {
        num: "06",
        title: "GEO/AEO: Optimizing for AI Search & Answer Engines",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module6.webp",
        imageAlt: "GEO and AEO optimizing for AI search and ChatGPT citation",
        description: "Go beyond classic SEO into how brands get cited inside ChatGPT, Google AI Overviews, and other AI-driven search tools — the newest, fastest-growing part of organic visibility.",
        tags: [
            "Generative Engine Optimization (GEO)",
            "Answer Engine Optimization (AEO)",
            "Structuring Content for AI Citation",
            "Measuring AI Search Visibility"
        ],
        techstack: {
            tools: "ChatGPT · Perplexity · Google AI Overviews · Schema Validator"
        }
    },
    {
        num: "07",
        title: "SEO Capstone, Internship & Portfolio",
        image: "/skill/ITSkills/WebDevelopment/FrontEndWebDevelopment/module7.webp",
        imageAlt: "SEO capstone case study and ranking performance reporting",
        description: "Apply everything into a full SEO case study on a real website — keyword research through ranking results — complete a guided internship, and leave with ranking data and reports ready for interviews.",
        tags: [
            "Capstone SEO Case Study",
            "Ranking & Traffic Reporting",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Ahrefs / Semrush · Google Search Console · Google Analytics 4"
        }
    }
];

export const curriculumTracks = [
    {
        title: "Performance Marketing Track",
        path: "performance",
        modules: performanceModules,
    },
    {
        title: "SEO & Content Marketing Track",
        path: "seo",
        modules: seoModules,
    },
];

export const mernModules = performanceModules;
export const javaModules = seoModules;

/**
 * 6. Comparison Section Data
 */
export const comparisonSectionData = {
    titleNormal: "Why Students Choose Our ",
    titleItalic: "Digital Marketing Training",
    categories: [
        {
            id: "mentors",
            label: "Mentors",
            other: "Academics teaching from slides",
            usPrefix: "Working marketers managing ",
            usHighlight: "real ad accounts",
            usSuffix: " & client SEO",
        },
        {
            id: "style",
            label: "Learning Style",
            other: "Recorded videos, dummy dashboards",
            usPrefix: "100% hands-on, ",
            usHighlight: "live campaigns",
            usSuffix: " on real budgets & websites",
        },
        {
            id: "portfolio",
            label: "Portfolio",
            other: "Certificate recruiters ignore",
            usPrefix: "Real campaign reports & ",
            usHighlight: "SEO case studies",
            usSuffix: " with ranking data",
        },
        {
            id: "aisearch",
            label: "AI Search Training",
            other: "Not covered",
            usPrefix: "Dedicated ",
            usHighlight: "GEO/AEO module",
            usSuffix: " for AI search visibility",
        },
        {
            id: "placement",
            label: "Placement",
            other: "Resume forwarding only",
            usPrefix: "300+ partners, ",
            usHighlight: "direct referrals",
            usSuffix: ", mock interviews",
        },
        {
            id: "certification",
            label: "Certification",
            other: "Private, unrecognised",
            usPrefix: "Government-recognised ",
            usHighlight: "national certification",
            usSuffix: "",
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
            usPrefix: "Lifetime ",
            usHighlight: "doubt support",
            usSuffix: " for alumni",
        },
    ],
};

export const comparisonCategories = comparisonSectionData.categories.map((cat) => ({
    id: cat.id,
    label: cat.label,
    otherText: cat.other,
    usHighlightText: `${cat.usPrefix}${cat.usHighlight}${cat.usSuffix}`,
}));

/**
 * 7. Earnings Section Data
 */
export const earningsSectionData = {
    titlePrefix: "What Digital Marketers",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior Digital Marketing Executive",
            location: "Rajkot",
            salary: "₹1.8 – ₹3 LPA",
            badge: "Entry Level",
            image: "/skill/ITSkills/digitalmarketing.webp",
        },
        {
            title: "SEO Executive",
            location: "Rajkot/Ahmedabad",
            salary: "₹2 – ₹3.5 LPA",
            badge: "Entry Level",
            image: "/skill/ITSkills/digitalmarketing.webp",
        },
        {
            title: "Performance Marketer (Google/Meta Ads)",
            location: "Ahmedabad/Surat",
            salary: "₹2.5 – ₹4.5 LPA",
            badge: "Early Career",
            image: "/skill/ITSkills/digitalmarketing.webp",
        },
        {
            title: "Digital Marketing Manager",
            location: "Gujarat/Remote",
            salary: "₹4 – 0.6 LPA",
            badge: "High Demand",
            image: "/skill/ITSkills/digitalmarketing.webp",
        },
        {
            title: "SEO Specialist (2–3 yrs)",
            location: "PAN India/Remote",
            salary: "₹5 – ₹9 LPA",
            badge: "Experienced",
            image: "/skill/ITSkills/digitalmarketing.webp",
        },
        {
            title: "Freelance Digital Marketer",
            location: "India/International",
            salary: "₹20,000 – ₹60,000/mo",
            badge: "Freelance Roles",
            image: "/skill/ITSkills/digitalmarketing.webp",
        },
    ],
};

export const earningsJobsData = earningsSectionData.jobs;

/**
 * 8. Recent Batch Highlights (Classroom Glance Data)
 */
export const meetingGlanceSectionData = {
    titlePrefix: "Inside a Recent Batch —",
    titleSuffix: "Rajkot Studio, Live for Ahmedabad Students",
    meetings: [
        {
            heading: "Live Campaign Reviews",
            subheading: "Students walk through their real Google Ads and Meta Ads dashboards with mentors, not mock data.",
        },
        {
            heading: "SEO Case Study Presentations",
            subheading: "Batch members present ranking movement on real client or personal-project websites.",
        },
        {
            heading: "Placement Prep Sessions",
            subheading: "Mock interviews and resume reviews run by working marketers ahead of hiring partner introductions.",
        },
    ],
};

export const meetingGlanceData = meetingGlanceSectionData.meetings;

export const meetingVideoData = {
    titlePrefix: "Inside a Recent Batch —",
    titleSuffix: "Rajkot Studio, Live for Ahmedabad Students",
    videoUrl: "",
};

/**
 * 9. Career Opportunities Roles
 */
export const careerOpportunitiesData = {
    titleNormal: "Explore",
    titleItalic: "Career Opportunities",
    mernTitle: "Performance Marketing Track",
    javaTitle: "SEO & Content Marketing Track",
    mernRoles: [
        "Performance Marketer",
        "PPC Specialist",
        "Meta Ads Executive",
        "Google Ads Specialist",
        "Growth Marketing Executive",
        "Freelance Performance Marketer",
    ],
    javaRoles: [
        "SEO Executive",
        "Content Marketing Specialist",
        "SEO Analyst",
        "AI Search / GEO Specialist",
        "Freelance SEO Consultant",
    ],
};

/**
 * 10. Industries Hiring Data
 */
export const industriesSectionData = {
    titleNormal: "Industries That Hire",
    titleItalic: "in India",
    description:
        "The skills you gain are relevant across multiple industries actively hiring digital marketers in Gujarat.",
    industries: [
        {
            title: "E-commerce",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp",
        },
        {
            title: "IT Services",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp",
        },
        {
            title: "Real Estate",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/goverment-it.webp",
        },
        {
            title: "Healthcare",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/healthcaretech.webp",
        },
        {
            title: "EdTech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/ed-tech.webp",
        },
        {
            title: "Hospitality & Travel",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/manufacturingSaaS.webp",
        },
        {
            title: "D2C Brands",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp",
        },
        {
            title: "Local & Franchise Businesses",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/fintech.webp",
        },
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
            text: "I had zero marketing background when I joined. Within 4 months I was running live Google Ads campaigns on a real client account and got placed at a digital agency in Rajkot. Managing an actual ad budget during training made all the difference.",
            name: "Krisha Vaghela",
            title: "Performance Marketer, Rajkot, Batch October 2025",
            track: "Performance Marketing Track",
            image: "",
        },
        {
            id: 2,
            text: "The SEO module went far beyond basic keyword stuffing — the GEO/AEO training on getting cited in AI search was something no other institute in Rajkot was even teaching. Got placed within 6 weeks.",
            name: "Yash Ramani",
            title: "SEO Executive, Ahmedabad",
            track: "SEO & Content Marketing Track",
            image: "",
        },
        {
            id: 3,
            text: "I chose performance marketing because I wanted to work with ad budgets, not just write blogs. The Meta Ads module was extremely detailed and practical. Placed at a performance marketing agency in Surat right after the course.",
            name: "Foram Trivedi",
            title: "Meta Ads Specialist, Surat",
            track: "Performance Marketing Track",
            image: "",
        },
    ],
};

/**
 * 12. FAQ Data
 */
export const faqSectionData = {
    titleNormal: "Corporate Placement &",
    titleItalic: "Curriculum FAQ",
    faqs: [
        {
            id: 1,
            question: "What is the difference between the performance marketing and SEO & content marketing tracks?",
            answer:
                "Performance marketing covers Google Ads, Meta Ads, analytics, and conversion optimisation — ideal for e-commerce brands and paid marketing agencies. SEO & content marketing covers technical SEO, content strategy, and AI search visibility (GEO/AEO) — ideal for SEO agencies, IT companies, and long-term organic growth roles. Both are available at Alphabit Skill in Rajkot and Ahmedabad, with the same live, hands-on training approach.",
        },
        {
            id: 2,
            question: "Do I need prior marketing experience to join?",
            answer:
                "No. The course starts from digital marketing fundamentals, assuming no prior experience, before splitting into your chosen Performance Marketing or SEO & Content Marketing track.",
        },
        {
            id: 3,
            question: "Will I actually run live ad campaigns, or just watch demos?",
            answer:
                "You'll run 5+ live campaigns on real ad accounts and websites during the course — not sandbox demos or dummy dashboards.",
        },
        {
            id: 4,
            question: "What is GEO/AEO, and why does this course teach it?",
            answer:
                "GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) are the practices of getting a brand cited directly inside AI tools like ChatGPT and Google AI Overviews, not just ranked on a traditional search results page. As more people search through AI tools instead of typing into Google, this is becoming as important as classic SEO — which is why it gets a dedicated module here instead of being an afterthought.",
        },
        {
            id: 5,
            question: "Is this Digital Marketing course available in Rajkot and Ahmedabad, or only online?",
            answer:
                "It runs offline at our Rajkot studio, live online for students in Ahmedabad, and online more broadly for students across Gujarat and beyond — all with the same mentor-led, hands-on structure.",
        },
        {
            id: 6,
            question: "How long is the digital marketing course?",
            answer:
                "The course runs 4 to 6 months, with flexible weekday, weekend, and online batch options plus No Cost EMI payment options.",
        },
        {
            id: 7,
            question: "Does Alphabit Skill provide placement assistance after the course?",
            answer:
                "Yes. Placement support includes resume building, mock interviews, and direct referrals through 300+ hiring partners actively looking for digital marketing talent across Rajkot, Ahmedabad, and Gujarat.",
        },
        {
            id: 8,
            question: "Why choose Alphabit Skill over YouTube or Udemy for digital marketing?",
            answer:
                "Free content teaches concepts; it doesn't put you in charge of a real ad budget, give you a working mentor to review your campaigns, or connect you to hiring partners when you're done. This course does all three, alongside a government-recognised certification.",
        },
    ],
};

export const faqData = faqSectionData.faqs;

/**
 * 13. CTA Section Data
 */
export const ctaSectionData = {
    line1Normal: "Access the Digital Marketing Curriculum in Rajkot & Ahmedabad -",
    line1Italic: "Apply Today",
    line1Suffix: "-&    ",
    line2Normal: "Master Digital Marketing",
    line2Italic: "Frameworks",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};

/**
 * 14. Metadata Info
 */
export const metadata = {
    title: "Digital Marketing Course in Rajkot & Ahmedabad | Alphabit Skill",
    description: "Digital Marketing course in Rajkot & Ahmedabad — Performance Marketing or SEO & Content Marketing tracks. Live campaigns, 300+ hiring partners. Book a free demo."
};
