import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import FAQSection from "@/components/contact/FAQSection";

export const metadata = {
  title: "Contact Alphabit Skill | Industrial Internship & Training Company, Rajkot",
  description: "Contact Alphabit Skill in Rajkot for IT, AI, and design course enrollment. Call, email, or visit our Ayodhya Chowk campus — we reply within 24 hours.",
};

export default function ContactUs() {
  return (
    <>
      <ContactHeroSection />
      <ContactFormSection />
      <FAQSection />
    </>
  );
}

