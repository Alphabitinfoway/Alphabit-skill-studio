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

export default function About() {
  return (
    <main>
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