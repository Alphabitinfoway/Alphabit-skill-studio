// ==============================================================================
// Mobile App Development - Component Data File
// Driven Dynamically for dynamic routes.
// ==============================================================================

export const heroSectionData = {
    titlePrefix: "Mobile App",
    titleSuffix: "Development",
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
        { "label": "200+ Students Trained" },
        { "label": "10 Years Industry Experience" },
        { "label": "300+ Hiring Partners" },
        { "label": "100% Placement Assistance" }
    ],
    durationVal: "4-6 months",
    durationLabel: "Course Duration",
    hoursVal: "50+ hrs",
    hoursLabel: "Live project hours"
};

export const courseFeaturesData = {
    titleNormal: "About",
    titleItalic: "Mobile App",
    titleSuffix: "Development Course",
    items: [
        "9 Modules — fundamentals to app store deployment",
        "5+ industry-grade live mobile app projects",
        "Apps published on the Google Play Store",
        "Small batch sizes for personal attention",
        "Weekly code reviews by working developers",
        "Resume, LinkedIn & mock interview prep",
        "Government-recognised certification",
        "No Cost EMI — flexible fee structure",
        "Weekend & weekday batch options"
    ],
};

// Android App Development Modules (nativeAndroidModules = Tab 1, n > f alphabetically)
const androidModules = [
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
            frontend: "Kotlin · Android Studio · Jetpack Compose · ViewModel · LiveData",
            database: "Firestore · SQLite · Room · Shared Preferences",
            tools: "Git · GitHub · Play Console"
        }
    },
    {
        num: "02",
        title: "Android Studio & App Architecture",
        description: "Set up Android Studio correctly and understand Activities, Fragments, Intents, and the Android lifecycle — plus MVVM architecture, the pattern enterprise teams use in production.",
        tags: [
            "Android Studio",
            "Activities",
            "Fragments",
            "Intents",
            "MVVM"
        ],
        techstack: {
            frontend: "Kotlin · Android Studio · Jetpack Compose · ViewModel · LiveData",
            database: "Firestore · SQLite · Room · Shared Preferences",
            tools: "Git · GitHub · Play Console"
        }
    },
    {
        num: "03",
        title: "Jetpack Compose UI",
        description: "Google's modern UI toolkit for Android is rapidly replacing XML layouts at enterprise companies across India. Build declarative, reactive UIs with theming, navigation, and animation.",
        tags: [
            "Jetpack Compose",
            "Composables",
            "State in Compose",
            "Navigation"
        ],
        techstack: {
            frontend: "Kotlin · Android Studio · Jetpack Compose · ViewModel · LiveData",
            database: "Firestore · SQLite · Room · Shared Preferences",
            tools: "Git · GitHub · Play Console"
        }
    },
    {
        num: "04",
        title: "ViewModel, LiveData & Room Database",
        description: "ViewModel and LiveData are the backbone of MVVM on Android. Room Database is the most widely used local storage solution in enterprise Android apps — the core data layer employers expect you to know cold.",
        tags: [
            "ViewModel",
            "LiveData",
            "Room Database",
            "Repository Pattern"
        ],
        techstack: {
            frontend: "Kotlin · Android Studio · Jetpack Compose · ViewModel · LiveData",
            database: "Firestore · SQLite · Room · Shared Preferences",
            tools: "Git · GitHub · Play Console"
        }
    },
    {
        num: "05",
        title: "Retrofit & REST API Integration",
        description: "Retrofit is the standard HTTP client for Android. Integrate real backend APIs with JSON parsing, error handling, coroutine-based async calls, and OkHttp interceptors.",
        tags: [
            "Retrofit",
            "OkHttp",
            "Gson/Moshi",
            "Coroutines"
        ],
        techstack: {
            frontend: "Kotlin · Android Studio · Jetpack Compose · ViewModel · LiveData",
            database: "Firestore · SQLite · Room · Shared Preferences",
            tools: "Git · GitHub · Play Console"
        }
    },
    {
        num: "06",
        title: "Firebase Integration for Android",
        description: "Implement Firebase Authentication, Firestore, Storage, and FCM push notifications in native Android — used extensively by product companies across Gujarat and India.",
        tags: [
            "Firebase Auth",
            "Firestore",
            "FCM",
            "Crashlytics"
        ],
        techstack: {
            frontend: "Kotlin · Android Studio · Jetpack Compose · ViewModel · LiveData",
            database: "Firestore · SQLite · Room · Shared Preferences",
            tools: "Git · GitHub · Play Console"
        }
    },
    {
        num: "07",
        title: "Git, GitHub & Play Store Deployment",
        description: "Version control with Git and GitHub, team workflows, APK and AAB builds, app signing, Google Play Store submission, and release management.",
        tags: [
            "Git",
            "GitHub",
            "APK/AAB",
            "App Signing",
            "Play Store"
        ],
        techstack: {
            frontend: "Kotlin · Android Studio · Jetpack Compose · ViewModel · LiveData",
            database: "Firestore · SQLite · Room · Shared Preferences",
            tools: "Git · GitHub · Play Console"
        }
    },
    {
        num: "08",
        title: "Capstone Projects, Internship & Portfolio",
        description: "Build 2+ complete native Android apps — an e-commerce app, task management tool, or real-time chat app — published on the Play Store, with a mobile developer internship for real-world experience.",
        tags: [
            "Live Projects",
            "Android Internship",
            "Play Store",
            "Interview Prep"
        ],
        techstack: {
            frontend: "Kotlin · Android Studio · Jetpack Compose · ViewModel · LiveData",
            database: "Firestore · SQLite · Room · Shared Preferences",
            tools: "Git · GitHub · Play Console"
        }
    }
];

// Flutter App Development Modules (flutterModules = Tab 1 alphabetically, f > k)
const flutterModules = [
    {
        num: "01",
        title: "Programming Fundamentals & UI Basics",
        description: "Programming logic, UI design principles, mobile screen layouts, and how apps communicate with users and backends — so you start the course with clarity, not confusion.",
        tags: [
            "Programming Logic",
            "UI/UX Basics",
            "App Architecture",
            "Mobile Design Principles"
        ],
        techstack: {
            frontend: "Flutter · Dart · Widgets · Animations · Responsive Layouts",
            tools: "Git · GitHub · Postman · Play Console"
        }
    },
    {
        num: "02",
        title: "Dart Programming Language",
        description: "Variables, functions, OOP, null safety, async/await, and streams — the engine behind every Flutter application, covered deeply so the language never slows you down.",
        tags: [
            "Dart",
            "OOP",
            "Null Safety",
            "Async/Await",
            "Streams"
        ],
        techstack: {
            frontend: "Flutter · Dart · Widgets · Animations · Responsive Layouts",
            tools: "Git · GitHub · Postman · Play Console"
        }
    },
    {
        num: "03",
        title: "Flutter UI Development",
        description: "Build beautiful, responsive interfaces using Flutter widgets, layouts, navigation, and animations — screens that run perfectly on both Android and iOS without platform-specific code.",
        tags: [
            "Flutter",
            "Widgets",
            "Layouts",
            "Navigation",
            "Animations"
        ],
        techstack: {
            frontend: "Flutter · Dart · Widgets · Animations · Responsive Layouts",
            tools: "Git · GitHub · Postman · Play Console"
        }
    },
    {
        num: "04",
        title: "State Management",
        description: "Provider, Riverpod, and BLoC — the state management tools production Flutter teams actually rely on, so your apps are scalable, testable, and production-ready.",
        tags: [
            "Provider",
            "Riverpod",
            "BLoC",
            "GetX",
            "Reactive Programming"
        ],
        techstack: {
            frontend: "Flutter · Dart · Widgets · Animations · Responsive Layouts",
            tools: "Git · GitHub · Postman · Play Console"
        }
    },
    {
        num: "05",
        title: "REST APIs & Backend Integration",
        description: "Connect to real backends using REST APIs, Dio, and HTTP — with proper JSON parsing, error handling, and loading state management, exactly what interviewers check in your project code.",
        tags: [
            "REST APIs",
            "Dio",
            "HTTP",
            "JSON Parsing",
            "Error Handling"
        ],
        techstack: {
            frontend: "Flutter · Dart · Widgets · Animations · Responsive Layouts",
            tools: "Git · GitHub · Postman · Play Console"
        }
    },
    {
        num: "06",
        title: "Firebase & Backend Services",
        description: "Firebase Authentication, Firestore, Storage, FCM push notifications, and Crashlytics — a complete backend without building a server from scratch.",
        tags: [
            "Firebase Auth",
            "Firestore",
            "FCM",
            "Crashlytics"
        ],
        techstack: {
            frontend: "Flutter · Dart · Widgets · Animations · Responsive Layouts",
            tools: "Git · GitHub · Postman · Play Console"
        }
    },
    {
        num: "07",
        title: "Git & GitHub",
        description: "Branching, merging, pull requests, and collaborative workflows — and a commit history that actually impresses the companies you're applying to.",
        tags: [
            "Git",
            "GitHub",
            "Branching",
            "Pull Requests",
            "CI/CD Basics"
        ],
        techstack: {
            frontend: "Flutter · Dart · Widgets · Animations · Responsive Layouts",
            tools: "Git · GitHub · Postman · Play Console"
        }
    },
    {
        num: "08",
        title: "App Store Deployment & Publishing",
        description: "APK and AAB builds, app signing, Google Play Store submission, Apple App Store basics, and app store optimisation — skills most courses skip entirely.",
        tags: [
            "Google Play Store",
            "App Signing",
            "AAB Builds",
            "ASO Basics"
        ],
        techstack: {
            frontend: "Flutter · Dart · Widgets · Animations · Responsive Layouts",
            tools: "Git · GitHub · Postman · Play Console"
        }
    },
    {
        num: "09",
        title: "Capstone Projects, Internship & Portfolio",
        description: "Build 2+ complete apps — a food delivery clone, e-commerce app, or social platform — published on the Play Store. Get access to a mobile developer internship for verified, real-world experience.",
        tags: [
            "Live Projects",
            "Mobile Dev Internship",
            "Portfolio Building",
            "Interview Prep"
        ],
        techstack: {
            frontend: "Flutter · Dart · Widgets · Animations · Responsive Layouts",
            tools: "Git · GitHub · Postman · Play Console"
        }
    }
];

export const curriculumTracks = [
    {
        title: "Android Development",
        path: "android",
        modules: androidModules
    },
    {
        title: "Flutter App Development",
        path: "flutter",
        modules: flutterModules
    }
];

export const comparisonSectionData = {
    titleNormal: "Why Students Choose Our ",
    titleItalic: "Mobile App Development Training",
    categories: [
        {
            id: "mentors",
            label: "Mentors",
            other: "Academics reading from slides",
            usPrefix: "",
            usHighlight: "Working mobile developers",
            usSuffix: " who have shipped real apps",
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
            usPrefix: "",
            usHighlight: "Play Store links + GitHub",
            usSuffix: " commit history",
        },
        {
            id: "internship",
            label: "Internship",
            other: "Not Included",
            usPrefix: "",
            usHighlight: "Mobile dev internship",
            usSuffix: " — online & offline options",
        },
        {
            id: "placement",
            label: "Placement",
            other: "Resume forwarding only",
            usPrefix: "",
            usHighlight: "300+ partners",
            usSuffix: ", direct referrals, mock interviews",
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
            usHighlight: "Lifetime doubt support",
            usSuffix: " for alumni",
        }
    ]
};

export const earningsSectionData = {
    titlePrefix: "What Mobile Developers",
    titleItalic: "Earn",
    titleSuffix: "After This Course",
    jobs: [
        {
            title: "Flutter Developer (Fresher)",
            location: "Rajkot",
            salary: "₹2.5 – ₹5 LPA",
            badge: "Entry Level",
            image: "/skill/ITSkills/fullstackdevelopment.webp"
        },
        {
            title: "Android Developer (Fresher)",
            location: "Rajkot / Gujarat",
            salary: "₹3 – ₹6 LPA",
            badge: "Entry Level",
            image: "/skill/ITSkills/fullstackdevelopment.webp"
        },
        {
            title: "Mobile Developer",
            location: "Ahmedabad / Surat",
            salary: "₹3.5 – ₹7 LPA",
            badge: "Early Career",
            image: "/skill/ITSkills/fullstackdevelopment.webp"
        },
        {
            title: "Flutter Developer (1-2 yrs)",
            location: "PAN India / Remote",
            salary: "₹5 – ₹10 LPA",
            badge: "High Demand",
            image: "/skill/ITSkills/fullstackdevelopment.webp"
        },
        {
            title: "Freelance Mobile Developer",
            location: "India / International",
            salary: "₹3.6 – ₹9.6 LPA",
            badge: "Freelance Roles",
            image: "/skill/ITSkills/fullstackdevelopment.webp"
        }
    ],
};

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

export const industriesSectionData = {
    titleNormal: "Industries that",
    titleItalic: "Hire",
    description: "The skills you gain are relevant across multiple industries actively hiring mobile developers.",
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
            icon: "/skill/ITSkills/FullStackDevelopment/industriessection/e-commerce.webp"
    }
    ],
};

export const meetingGlanceSectionData = {
    titlePrefix: "A Glance",
    titleSuffix: "at yesterday's Class",
    meetings: [
        {
            heading: "Live Mentor Sessions",
            subheading: "Interactive daily reviews and coding challenges.",
        },
        {
            heading: "Doubt Solving",
            subheading: "Instant error debugging with real-time feedback.",
        }
    ]
};

export const meetingVideoData = {
    titlePrefix: "A Glance",
    titleSuffix: "at yesterday's Meeting",
    videoUrl: "",
};

export const faqSectionData = {
    titleNormal: "Corporate Placement &",
    titleItalic: "Curriculum FAQ",
    faqs: [
        {
            id: 1,
            question: "What is the difference between the Flutter and Android app development courses?",
            answer: "Flutter covers Dart, cross-platform UI, Firebase, and REST APIs — one codebase for both Android and iOS, ideal for startups and freelancers. Android covers Kotlin, Jetpack Compose, Room, and Retrofit — native Android built for enterprise IT firms. Both use the same project-based approach and lead to the same certification."
        },
        {
            id: 2,
            question: "Do I need prior coding experience?",
            answer: "No. The Flutter track starts with Dart fundamentals, the Android track starts with Kotlin basics. Many placed students came from arts, commerce, and non-IT backgrounds with zero prior coding experience."
        },
        {
            id: 3,
            question: "How long is the mobile app development course?",
            answer: "4 to 6 months depending on batch schedule, with weekday and weekend batches available. The Android track may run slightly longer due to the depth of native frameworks covered."
        },
        {
            id: 4,
            question: "Will my apps actually be published on the Google Play Store?",
            answer: "Yes — it's part of the curriculum. You'll learn APK/AAB builds, app signing, and Play Store submission, and graduate with real Play Store links in your portfolio."
        },
        {
            id: 5,
            question: "Does Alphabit Skill provide placement assistance?",
            answer: "Yes, 100% placement assistance including resume building, LinkedIn optimisation, mock interviews, and direct referrals to 300+ hiring partners across Rajkot, Ahmedabad, Surat, and across India."
        },
        {
            id: 6,
            question: "Is Flutter or Android better for jobs in Gujarat?",
            answer: "Both are in demand. Flutter suits startups and remote roles; Android is preferred by enterprise IT firms, often at slightly higher starting salaries. Attend a free demo and our mentors will help you choose based on your goals."
        }
    ]
};

export const trackSelectorData = {
    title: "Choose your track",
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

export const testimonialsSectionData = {
    titleNormal: "Verified Career Transitions — Hear Directly",
    titleParent: "from",
    titleItalic: "Deployed Alumni",
    testimonials: [
        {
            id: 1,
            text: "Zero coding experience when I joined. Within 5 months I had two live apps on the Play Store and got placed at a mobile development company in Rajkot.",
            name: "Riya Mehta",
            title: "Flutter Developer, Rajkot",
            image: "/Home Page/Trust/1.webp"
        },
        {
            id: 2,
            text: "The mentors know exactly what companies ask in technical interviews. I cracked three interviews in my first month of job hunting after completing the course.",
            name: "Harsh Patel",
            title: "Mobile App Developer, Ahmedabad",
            image: "/2.webp"
        },
        {
            id: 3,
            text: "I chose the Android track for enterprise work. The Kotlin and Jetpack Compose modules were incredibly detailed and practical. Placed within 6 weeks.",
            name: "Sneha Joshi",
            title: "Android Developer, Surat",
            image: "/3.webp"
        }
    ]
};

export const ctaSectionData = {
    line1Normal: "Access the Curriculum —",
    line1Italic: "Apply Today",
    line1Suffix: "& Master",
    line2Normal: "Advanced",
    line2Italic: "Mobile Frameworks",
    buttonText: "Join The Studio",
    buttonHref: "/register",
};
