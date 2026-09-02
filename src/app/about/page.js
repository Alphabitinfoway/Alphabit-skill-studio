import HeroSection from "@/components/about/HeroSection";
import AboutMissionSection from "@/components/about/AboutMissionSection";
import MVCSection from "@/components/about/MVCSection";
import FAQSection from "@/components/about/FAQSection";
import CertifiedInstituteSection from "@/components/CertifiedInstituteSection";
import CTASection from "@/components/CTASection";
import EnterpriseTrainingSection from "@/components/EnterpriseTrainingSection";
import PlacementSupportSection from "@/components/PlacementSupportSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata = {
  title: "About Alphabit Skill | IT Training Institute, Rajkot & Pan-India",
  description:
    "Alphabit Skill is a Rajkot-based IT training institute with 9+ years of experience, training students online across India and offline in Gujarat — into placed developers, designers, and marketers.",
  keywords: [
    "IT training institute in Rajkot",
    "About Alphabit Skill",
    "IT training institute Gujarat",
    "computer training institute Rajkot",
  ],
  openGraph: {
    title: "About Alphabit Skill | IT Training Institute, Rajkot & Pan-India",
    description:
      "Alphabit Skill is a Rajkot-based IT training institute with 9+ years of experience, training students online across India and offline in Gujarat — into placed developers, designers, and marketers.",
    url: "https://alphabitskill.com/about",
    siteName: "Alphabit Skill",
    type: "website",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Alphabit Skill",
    "url": "https://alphabitskill.com",
    "logo": "https://alphabitskill.com/logo.webp",
    "description":
      "Alphabit Skill is a Rajkot-based IT training institute with 9+ years of experience, training students online across India and offline in Gujarat — into placed developers, designers, and marketers.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ayodhya Chowk",
      "addressLocality": "Rajkot",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9409207327",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Gujarati", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/alphabitskill",
      "https://www.instagram.com/alphabitskill",
      "https://www.linkedin.com/company/alphabit-skill"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What courses does Alphabit Skill offer in Rajkot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Alphabit Skill offers industry-aligned training programs in Full Stack Web Development (MERN, PHP, Python, Java), Mobile App Development, UI/UX Design, Digital Marketing, Artificial Intelligence, Machine Learning, and Software Testing with 100% placement assistance."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Alphabit Skill located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Alphabit Skill is headquartered at Ayodhya Chowk, Rajkot, Gujarat. We conduct offline classroom training in Gujarat as well as online live interactive classes for students pan-India."
        }
      },
      {
        "@type": "Question",
        "name": "Does Alphabit Skill provide placement assistance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Alphabit Skill offers 100% placement assistance, including portfolio reviews, technical mock interviews, soft skill training, and direct placement drives with hiring partner IT companies."
        }
      },
      {
        "@type": "Question",
        "name": "Who can join the IT training programs at Alphabit Skill?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our courses are designed for freshers, BCA/B.Tech/BSc IT students, non-IT graduates, and working professionals looking to upskill or transition into high-paying IT careers."
        }
      }
    ]
  }
];

export default function About() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <StatsSection />
      <AboutMissionSection />
      <EnterpriseTrainingSection />
      <MVCSection />
      <CertifiedInstituteSection />
      <PlacementSupportSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}