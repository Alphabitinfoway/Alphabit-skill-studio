import HeroSection from "./HeroSection";
import VideoSection from "./VideoSection";
import UpgradeSection from "./UpgradeSection";
import PrinciplesSection from "./PrinciplesSection";
import AdvantagesSection from "./AdvantagesSection";
import ActivitiesSection from "./ActivitiesSection";
import RolesSection from "./RolesSection";
import CTASection from "@/components/CTASection";

export default function CareerPage() {
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