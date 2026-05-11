import HeroSection from "@/components/HeroSection";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata = {
  title: "Contact Us | Alphabit Skill",
  description: "Get in touch with Alphabit Skill. We'd love to hear from you.",
};

export default function ContactUs() {
  return (
    <>
      <HeroSection />
      <ContactFormSection />
    </>
  );
}
