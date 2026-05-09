import HeroSection from "@/components/career/HeroSection";
import VideoSection from "@/components/career/VideoSection";
import UpgradeSection from "@/components/career/UpgradeSection";
import PrinciplesSection from "@/components/career/PrinciplesSection";
import AdvantagesSection from "@/components/career/AdvantagesSection";
import ActivitiesSection from "@/components/career/ActivitiesSection";
import RolesSection from "@/components/career/RolesSection";
import CTASection from "@/components/CTASection";

export default function Career() {
  return (
    <div className="flex flex-col items-center w-full bg-[#F5F5F5]">
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
