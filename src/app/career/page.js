import HeroSection from "@/components/career/HeroSection";
import VideoSection from "@/components/career/VideoSection";
import UpgradeSection from "@/components/career/UpgradeSection";
import PrinciplesSection from "@/components/career/PrinciplesSection";
import AdvantagesSection from "@/components/career/AdvantagesSection";
import ActivitiesSection from "@/components/career/ActivitiesSection";
import RolesSection from "@/components/career/RolesSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Careers at Alphabit Skill | IT Training Jobs in Rajkot",
  description:
    "Hiring now at Alphabit Skill, Rajkot — UI/UX, digital marketing training, counselling & finance roles. Apply today and join a growing IT skills institute.",
  keywords: [
    "careers at Alphabit Skill",
    "IT Training Jobs in Rajkot",
    "Alphabit Skill jobs",
    "Rajkot IT jobs",
  ],                          
  openGraph: {
    title: "Careers at Alphabit Skill | IT Training Jobs in Rajkot",
    description:
      "Hiring now at Alphabit Skill, Rajkot — UI/UX, digital marketing training, counselling & finance roles. Apply today and join a growing IT skills institute.",
    url: "https://alphabitskill.com/career",
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
      "Alphabit Skill is a Rajkot-based IT training institute hiring tech trainers, design mentors, academic counsellors, and finance professionals.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ayodhya Chowk",
      "addressLocality": "Rajkot",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/alphabitskill",
      "https://www.instagram.com/alphabitskill",
      "https://www.linkedin.com/company/alphabit-skill"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Careers & Open Positions at Alphabit Skill",
    "description":
      "Current job openings in Rajkot at Alphabit Skill for IT trainers, UI/UX designers, counsellors, and administrative staff.",
    "itemListElement": [
      {
        "@type": "JobPosting",
        "title": "UI/UX & Design Trainer",
        "description":
          "Looking for an experienced UI/UX Designer and mentor to conduct hands-on training sessions, portfolio building, and design workshops at Alphabit Skill Rajkot campus.",
        "datePosted": "2026-01-15",
        "validThrough": "2026-12-31",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Alphabit Skill",
          "sameAs": "https://alphabitskill.com"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rajkot",
            "addressRegion": "Gujarat",
            "addressCountry": "IN"
          }
        }
      },
      {
        "@type": "JobPosting",
        "title": "Digital Marketing & Performance Mentor",
        "description":
          "Join Alphabit Skill as a Digital Marketing Trainer covering SEO, Meta Ads, Google Ads, and analytics for budding marketers.",
        "datePosted": "2026-01-15",
        "validThrough": "2026-12-31",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Alphabit Skill",
          "sameAs": "https://alphabitskill.com"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rajkot",
            "addressRegion": "Gujarat",
            "addressCountry": "IN"
          }
        }
      },
      {
        "@type": "JobPosting",
        "title": "Academic & Admission Counsellor",
        "description":
          "Guide aspiring students and career-seekers on choosing the right IT skill track, course curriculum, and career pathways.",
        "datePosted": "2026-01-15",
        "validThrough": "2026-12-31",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Alphabit Skill",
          "sameAs": "https://alphabitskill.com"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rajkot",
            "addressRegion": "Gujarat",
            "addressCountry": "IN"
          }
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://alphabitskill.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Careers",
        "item": "https://alphabitskill.com/career"
      }
    ]
  }
];

export default function Career() {
  return (
    <div className="flex flex-col items-center w-full bg-[#F5F5F5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <VideoSection />
      <UpgradeSection />
      <PrinciplesSection />
      <AdvantagesSection />
      <ActivitiesSection />
      <RolesSection />
      <CTASection />
    </div>
  );
}
