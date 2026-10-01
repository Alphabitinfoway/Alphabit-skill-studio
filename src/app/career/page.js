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
    "Explore current career opportunities at Alphabit Skill in Rajkot, view available positions, and apply online.",
  keywords: [
    "careers at Alphabit Skill",
    "IT Training Jobs in Rajkot",
    "Alphabit Skill jobs",
    "Rajkot careers",
  ],                          
  openGraph: {
    title: "Careers at Alphabit Skill | IT Training Jobs in Rajkot",
    description:
      "Explore current career opportunities at Alphabit Skill in Rajkot, view available positions, and apply online.",
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
      "Alphabit Skill is a skills training institute based in Rajkot.",
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
