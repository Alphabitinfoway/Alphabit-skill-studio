import HeroSection from "@/components/HeroSection";
import EnterpriseTrainingSection from "@/components/EnterpriseTrainingSection";
import FeaturesSection from "@/components/FeaturesSection";
import CertifiedInstituteSection from "@/components/CertifiedInstituteSection";
import PlacementSupportSection from "@/components/PlacementSupportSection";
import ProgramsSection from "@/components/ProgramsSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import TrustSection from "@/components/TrustSection";
import StatsSection from "@/components/StatsSection";
import CEPSection from "@/components/CEPSection";
import CTASection from "@/components/CTASection";
import NewsSection from "@/components/NewsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CertifiedInstituteSection />
      <PlacementSupportSection />
      <TrustSection />
      <ProgramsSection />

      <CEPSection />

      <EnterpriseTrainingSection />
      <CapabilitiesSection />
      <TestimonialsSection />
      <NewsSection />
      <CTASection />
    </>
  );
}
