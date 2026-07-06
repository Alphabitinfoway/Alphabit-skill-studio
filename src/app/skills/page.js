import CTASection from "@/components/CTASection";
import HeroSection from "@/components/skills/HeroSection";
import LearningMethodology from "@/components/skills/LearningMethodology";
import AdvantagesSection from "@/components/skills/AdvantagesSection";
import LearningPathsSection from "@/components/skills/LearningPathsSection";

export default function SkillPage() {
  return (
    <>
      <HeroSection />
      <LearningMethodology />
      <LearningPathsSection />
      <AdvantagesSection/>
      <CTASection/>
    </>
  );
}

