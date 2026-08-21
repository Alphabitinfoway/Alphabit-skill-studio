// ==============================================================================
// Mobile App Development - Master Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

/**
 * 1. Hero Section Data
 */
export const heroSectionData = {
    titlePrefix: "Mobile App",
    titleSuffix: "Development",
    highlights: [
        "NSDC-Recognised Certification",
        "300+ Active Hiring Partners",
        "Rajkot, Ahmedabad Gujarat"
    ],
    description: "<strong>Mobile App Development Course in Rajkot</strong>. Most courses teach one screen, one button, and call it an app. Real mobile teams connect to live APIs, handle a rotated screen without losing state, and actually publish to the Play Store — not just build and stop. Choose Flutter for one codebase across Android and iOS, or Android for the native, enterprise-hired skill set, and leave with a published app you can demo in an interview.",
    primaryCtaText: "Book Free Demo Class",
    secondaryCtaText: "Call Us",
    phoneNumber: "+919409207327",
    heroImage: "https://res.cloudinary.com/dir8eqqnk/image/upload/v1786599863/copy_of_mobile-app_fe2sq9.webp",
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
    titleItalic: "Mobile App",
    titleSuffix: "Development Course",
    items: [
        "8 Modules per track — fundamentals to app store deployment",
        "5+ industry-grade live mobile app projects",
        "Apps published on the Google Play Store",
        "Small batch sizes for personal attention",
        "Weekly code reviews by working developers",
        "Resume, LinkedIn & mock interview prep",
        "Government-recognised (NSDC) certification",
        "No Cost EMI — flexible fee structure",
        "Weekend & weekday batch options"
    ],
};

/**
 * 4. Choose Your Track Data
 */
export const trackSelectorData = {
    title: "Choose Your Track",
    description: "Not every student has the same career goal. Choose the track that matches the job market you want to enter.",
    tracks: [
        {
            title: "Flutter App Development",
            description: "Build with Flutter, Dart, Firebase, and REST APIs — one codebase that runs on both Android and iOS, the fastest-growing cross-platform skill in India's startup and product ecosystem.",
            bestFor: "Startups · Product Companies · Freelance Mobile Developers",
            idealIf: "Work at a product startup · Freelance as a mobile developer · Build your own app for both platforms at once"
        },
        {
            title: "Android App Development",
            description: "Build with Kotlin, Jetpack Compose, Room, and Retrofit — the native Android skill set that enterprise IT companies and service-based firms across India specifically hire for.",
            bestFor: "Enterprise IT Companies · Service-Based Firms · High-Performance Android Roles",
            idealIf: "Work at TCS/Infosys-level firms · Build high-performance native Android apps · Specialise in the Android ecosystem"
        }
    ]
};

/**
 * 5. Curriculum Modules (Flutter App Development + Android App Development Tracks)
 */
export const flutterModules = [
    {
        num: "01",
        title: "Programming Fundamentals & Dart Basics",
        description: "Start with programming logic, then move into Dart — the language Flutter runs on — covering variables, functions, OOP, and asynchronous programming from the ground up.",
        tags: [
            "Dart Syntax",
            "OOP",
            "Async/Await & Futures",
            "Null Safety"
        ],
        techstack: {
            languages: "Dart",
            tools: "VS Code • Android Studio"
        }
    },
    {
        num: "02",
        title: "Flutter Fundamentals & Widget Architecture",
        description: "Learn how Flutter apps are actually structured — everything in Flutter is a widget, and this module covers how to think in widgets to build real interfaces.",
        tags: [
            "Flutter Setup",
            "Widget Tree",
            "Stateless vs Stateful Widgets",
            "Hot Reload Workflow"
        ],
        techstack: {
            framework: "Flutter SDK",
            tools: "Android Studio • VS Code"
        }
    },
    {
        num: "03",
        title: "Layouts, Navigation & UI Design",
        description: "Build responsive, good-looking interfaces that work identically on Android and iOS — layouts, navigation between screens, and Flutter's theming system.",
        tags: [
            "Rows, Columns & Layouts",
            "Navigation & Routing",
            "Theming & Styling",
            "Responsive Design"
        ],
        techstack: {
            framework: "Flutter",
            workflow: "Figma-to-Flutter Workflow"
        }
    },
    {
        num: "04",
        title: "State Management with Provider/Riverpod",
        description: "Learn to manage app state properly at scale — the single skill that separates a Flutter developer who can build a demo from one who can build a real, maintainable app.",
        tags: [
            "Provider / Riverpod",
            "State Lifting",
            "App-Wide State Patterns",
            "Performance Basics"
        ],
        techstack: {
            libraries: "Provider • Riverpod"
        }
    },
    {
        num: "05",
        title: "REST API Integration",
        description: "Connect your Flutter app to real backend services — fetching, sending, and handling data from live APIs across both platforms from a single codebase.",
        tags: [
            "HTTP Package",
            "REST API Calls",
            "JSON Parsing",
            "Error & Loading States"
        ],
        techstack: {
            libraries: "http / dio",
            tools: "Postman"
        }
    },
    {
        num: "06",
        title: "Firebase Integration for Flutter",
        description: "Learn to add authentication, real-time data, and push notifications to your app using Firebase — the backend-as-a-service most Flutter apps rely on early on.",
        tags: [
            "Firebase Authentication",
            "Firestore Database",
            "Push Notifications",
            "Firebase Analytics Basics"
        ],
        techstack: {
            backend: "Firebase (Firestore, Auth, FCM)",
            libraries: "FlutterFire"
        }
    },
    {
        num: "07",
        title: "Git, GitHub & App Store Deployment",
        description: "Learn team version control workflows, and take your app through both the Google Play Store and Apple App Store publishing processes — the real advantage of building cross-platform.",
        tags: [
            "Git & GitHub",
            "App Signing (Android & iOS)",
            "Play Console & App Store Connect",
            "Submission Process"
        ],
        techstack: {
            tools: "Git • GitHub • Google Play Console • App Store Connect"
        }
    },
    {
        num: "08",
        title: "Capstone Projects, Internship & Portfolio",
        description: "Apply everything into 2–3 full-scale Flutter capstone projects, complete a guided internship, and walk away with published apps and a GitHub portfolio ready to show recruiters.",
        tags: [
            "Capstone Project Build",
            "Code Review",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Git • GitHub • Play Console • App Store Connect"
        }
    }
];

export const androidModules = [
    {
        num: "01",
        title: "Programming Fundamentals & Kotlin Basics",
        description: "Start with programming logic, then move into Kotlin — the official language of Android development — covering variables, functions, OOP, coroutines, and null safety from the ground up.",
        tags: [
            "Kotlin",
            "OOP",
            "Coroutines",
            "Null Safety"
        ],
        techstack: {
            languages: "Kotlin",
            ide: "Android Studio"
        }
    },
    {
        num: "02",
        title: "Android Studio & App Architecture",
        description: "Learn to navigate Android Studio properly and understand how a real Android app is structured — activities, fragments, and the architecture patterns production apps actually follow.",
        tags: [
            "Android Studio Setup",
            "Activities & Fragments",
            "MVVM Architecture",
            "App Lifecycle"
        ],
        techstack: {
            tools: "Android Studio • Android SDK"
        }
    },
    {
        num: "03",
        title: "Jetpack Compose UI",
        description: "Build modern Android interfaces using Jetpack Compose — Google's current recommended toolkit, replacing the older XML-based layout system most tutorials still teach.",
        tags: [
            "Composable Functions",
            "State in Compose",
            "Layouts & Modifiers",
            "Navigation Compose"
        ],
        techstack: {
            framework: "Jetpack Compose",
            ide: "Android Studio"
        }
    },
    {
        num: "04",
        title: "ViewModel, LiveData & Room Database",
        description: "Learn to manage app state properly and store data locally — the pattern that keeps an app working smoothly even when the screen rotates or the user navigates away and back.",
        tags: [
            "ViewModel",
            "LiveData",
            "Room Database",
            "Local Data Persistence"
        ],
        techstack: {
            database: "Room • SQLite",
            architecture: "ViewModel • LiveData"
        }
    },
    {
        num: "05",
        title: "Retrofit & REST API Integration",
        description: "Connect your Android app to real backend services — fetching, sending, and handling data from live APIs the way production apps do.",
        tags: [
            "Retrofit Setup",
            "REST API Calls",
            "JSON Parsing",
            "Error & Loading States"
        ],
        techstack: {
            libraries: "Retrofit",
            tools: "Postman"
        }
    },
    {
        num: "06",
        title: "Firebase Integration for Android",
        description: "Learn to add authentication, real-time data, and push notifications to your app using Firebase — the backend-as-a-service most Android apps rely on early on.",
        tags: [
            "Firebase Authentication",
            "Firestore Database",
            "Push Notifications",
            "Firebase Analytics Basics"
        ],
        techstack: {
            backend: "Firebase (Firestore, Auth, FCM)"
        }
    },
    {
        num: "07",
        title: "Git, GitHub & Play Store Deployment",
        description: "Learn team version control workflows, and take your app through the actual Google Play Store publishing process — not just a local build.",
        tags: [
            "Git & GitHub",
            "App Signing",
            "Play Console Setup",
            "Play Store Submission Process"
        ],
        techstack: {
            tools: "Git • GitHub • Google Play Console"
        }
    },
    {
        num: "08",
        title: "Capstone Projects, Internship & Portfolio",
        description: "Apply everything into 2–3 full-scale native Android capstone projects, complete a guided internship, and walk away with a Play Store listing and GitHub portfolio ready to show recruiters.",
        tags: [
            "Capstone Project Build",
            "Code Review",
            "Internship Experience",
            "Portfolio & Resume Prep"
        ],
        techstack: {
            tools: "Git • GitHub • Play Console"
        }
    }
];

export const curriculumTracks = [
    {
        title: "Flutter App Development",
        path: "flutter",
        modules: flutterModules
    },
    {
        title: "Android App Development",
        path: "android",
        modules: androidModules
    }
];

export const mernModules = flutterModules;
export const javaModules = androidModules;

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
            usPrefix: "Working mobile developers who've shipped ",
            usHighlight: "real apps",
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
            usPrefix: "Published ",
            usHighlight: "Play Store apps",
            usSuffix: " and a real GitHub",
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
            usPrefix: "Guided mobile app project internship, ",
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
    titlePrefix: "What Mobile Developers",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    disclaimer: "Figures are indicative ranges based on regional job market trends and vary with company, experience, and negotiation.",
    jobs: [
        {
            title: "Junior Android/Flutter Developer",
            location: "Rajkot",
            salary: "₹3 – ₹5 LPA",
            badge: "Entry Level",
            image: "/skill/ITSkills/moblieappdevelopment.webp",
        },
        {
            title: "Mobile App Developer",
            location: "Ahmedabad / Surat",
            salary: "₹4 – ₹7 LPA",
            badge: "Early Career",
            image: "/skill/ITSkills/moblieappdevelopment.webp",
        },
        {
            title: "Flutter Developer (Product Co.)",
            location: "Gujarat (Startups)",
            salary: "₹5 – ₹8 LPA",
            badge: "High Demand",
            image: "/skill/ITSkills/moblieappdevelopment.webp",
        },
        {
            title: "Android Developer (Enterprise)",
            location: "Gujarat (Enterprise)",
            salary: "₹5 – ₹9 LPA",
            badge: "High Demand",
            image: "/skill/ITSkills/moblieappdevelopment.webp",
        },
        {
            title: "Mobile Developer (2–3 yrs exp)",
            location: "PAN India / Remote",
            salary: "₹7 – ₹12 LPA",
            badge: "Mid-Level",
            image: "/skill/ITSkills/moblieappdevelopment.webp",
        },
        {
            title: "Senior Mobile Engineer",
            location: "PAN India",
            salary: "₹12 – ₹18 LPA",
            badge: "Experienced",
            image: "/skill/ITSkills/moblieappdevelopment.webp",
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
            heading: "Live Build Sessions",
            subheading: "Every class is hands-on — students write and run real Flutter or Kotlin code alongside the mentor, not just watch slides.",
        },
        {
            heading: "Mentor-Led Code Reviews",
            subheading: "Working mobile developers who've actually shipped apps review your code weekly and guide you toward production-ready practices.",
        },
        {
            heading: "Small Batch, Real Attention",
            subheading: "Limited seats per batch mean every student gets doubt-clearing and feedback, not just a lecture.",
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
    mernTitle: "Flutter Track",
    javaTitle: "Android Track",
    mernRoles: [
        "Flutter Developer",
        "Cross-Platform App Developer",
        "Mobile UI Developer",
        "Freelance App Developer",
        "Startup Mobile Engineer"
    ],
    javaRoles: [
        "Android Developer (Kotlin)",
        "Native Mobile Engineer",
        "Enterprise App Developer",
        "Jetpack Compose Developer",
        "Software Engineer (Android)"
    ],
};

/**
 * 10. Industries Section Data
 */
export const industriesSectionData = {
    titleNormal: "Industries That Hire",
    titleItalic: "in India",
    description: "The skills you gain are relevant across multiple high-growth industries actively hiring mobile developers.",
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
            title: "Ed-Tech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/ed-tech.webp"
        },
        {
            title: "Healthcare Tech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/healthcaretech.webp"
        },
        {
            title: "Food & Delivery Tech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/itservices.webp"
        },
        {
            title: "Government IT",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/goverment-it.webp"
        },
        {
            title: "Retail Tech",
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/retail-tech.webp"
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
            text: "I wanted to build something that worked on both Android and iOS without learning two completely different languages. By the end, I had 3 Flutter apps live on the Play Store — one of them started as a freelance project I picked up mid-course.",
            name: "Dhruv Nirmal",
            title: "Flutter Developer at a Rajkot-based startup, Batch January 2026",
            image: "/Home Page/Trust/1.webp"
        },
        {
            id: 2,
            text: "I'd tried a couple of Kotlin tutorials on my own before this and kept losing motivation halfway through. Having a real mentor review my Jetpack Compose code every week is what actually got me to a working app instead of another abandoned project.",
            name: "Naman Dave",
            title: "Android Developer at an enterprise IT firm, Batch October 2025",
            image: "/2.webp"
        },
        {
            id: 3,
            text: "The Firebase and Retrofit module was the turning point for me — connecting an app to a real backend and database made everything before that finally make sense.",
            name: "Daksh Lakhani",
            title: "Mobile Developer at a Gujarat-based company, Batch April 2026",
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
            question: "What is the difference between the Flutter and Android app development courses?",
            answer: "Flutter covers Dart, cross-platform UI, Firebase, and REST APIs — one codebase for both Android and iOS, ideal for startups and freelancers. Android covers Kotlin, Jetpack Compose, Room, and Retrofit — native Android built for enterprise IT firms. Both use the same project-based approach and lead to the same certification."
        },
        {
            id: 2,
            question: "Do I need prior coding experience?",
            answer: "No. The course starts from programming fundamentals before moving into Dart (Flutter track) or Kotlin (Android track), so no prior mobile development experience is required."
        },
        {
            id: 3,
            question: "How long is the mobile app development course?",
            answer: "4–6 months, with both weekday and weekend batch options and No Cost EMI payment plans available."
        },
        {
            id: 4,
            question: "Will my apps actually be published on the Google Play Store?",
            answer: "Yes — as part of your capstone projects, you'll take at least one working app through the actual Play Store publishing process, not just build it and stop at a local build."
        },
        {
            id: 5,
            question: "Does Alphabit Skill provide placement assistance?",
            answer: "Yes — resume building, mock interviews, and direct referrals through our 300+ hiring partners actively looking for Flutter and Android developers."
        },
        {
            id: 6,
            question: "Is Flutter or Android better for jobs in Gujarat?",
            answer: "Both are in demand, but for different reasons. Android (Kotlin) is what most enterprise IT and service-based companies in Gujarat specifically list in job postings. Flutter is more common at startups and product companies, and is also the stronger choice if you want to freelance or build your own app for both platforms at once."
        },
        {
            id: 7,
            question: "Is this Mobile App Development course available in Rajkot as well as online?",
            answer: "Yes. The course runs both offline at our Rajkot studio and online for students across Gujarat and beyond, with the same mentor-led, live-project structure either way."
        }
    ]
};

export const faqData = faqSectionData.faqs;

/**
 * 13. Final CTA Section Data
 */
export const ctaSectionData = {
    line1Normal: "Join the",
    line1Italic: "Mobile App Development ",
    line1Suffix: " Course in Rajkot, Gujarat — Apply Today and",
    line2Normal: "Start Building",
    line2Italic: "Real Apps",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};

/**
 * 14. Metadata Info
 */
export const metadata = {
    title: "Mobile App Development Course in Rajkot | Alphabit Skill",
    description: "Mobile App Development course in Rajkot — Flutter cross-platform, or native Android tracks. NSDC-certified, 300+ hiring partners. Book a free demo."
};
