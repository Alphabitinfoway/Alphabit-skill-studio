import HeroSection from "@/components/HeroSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import FAQSection from "@/components/contact/FAQSection";

export const metadata = {
  title: "Contact Us | Alphabit Skill",
  description: "Get in touch with Alphabit Skill. We'd love to hear from you.",
};

export default function ContactUs() {
  return (
    <>
      <HeroSection />
      <ContactFormSection />
      <FAQSection />
    </>
  );
}
