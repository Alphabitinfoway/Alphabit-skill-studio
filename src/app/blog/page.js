import HeroSection from "@/components/blog/HeroSection";
import BlogPostsSection from "@/components/blog/BlogPostsSection";
import CTASection from "@/components/CTASection";

export default function Blog() {
    return (
        <div className="flex flex-col items-center w-full bg-[#F5F5F5]">
            <HeroSection />
            <BlogPostsSection />
            <CTASection />
        </div>
    );
}