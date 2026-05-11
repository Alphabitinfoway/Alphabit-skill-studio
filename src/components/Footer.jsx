import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f0f] text-[#7A7A7A] pt-16 pb-0 px-0 lg:px-0">
      <div className=" mx-auto px-6 lg:px-20 mb-14">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-10 mb-14">

          {/* Logo + Description */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2">
              <img src="/flogo.png" alt="logo" className="h-10 lg:h-12" />
            </Link>

            <p className="text-[15px] leading-relaxed text-[#7A7A7A] max-w-sm">
              At Alphabit Skill, we go beyond traditional learning.
              We are a dedicated IT training hub designed to transform
              passionate individuals into industry-ready professionals.
            </p>

            <div className="flex gap-3 mt-4">
              <Link href="#" className="w-8 h-8 rounded-full bg-[#7A7A7A] flex items-center justify-center text-[#0f0f0f] transition-all hover:bg-white hover:scale-110">
                <Facebook size={20} fill="currentColor" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-[12px] bg-[#7A7A7A] flex items-center justify-center text-[#0f0f0f] transition-all hover:bg-white hover:scale-110">
                <Instagram size={20} strokeWidth={1.5} />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-[12px] bg-[#7A7A7A] flex items-center justify-center text-[#0f0f0f] transition-all hover:bg-white hover:scale-110">
                <Linkedin size={20} fill="currentColor" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-1 lg:col-start-7">
            <h4 className="text-white text-[15px] font-semibold mb-6">
              Company
            </h4>
            <ul className="space-y-4 text-[13px] lg:text-[14px]">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/skills" className="hover:text-white transition-colors">Skills</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/activities" className="hover:text-white transition-colors">Activities</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-[15px] font-semibold mb-6">
              Trending Course
            </h4>
            <ul className="space-y-4 text-[13px] lg:text-[14px]">
              <li><Link href="#" className="hover:text-white transition-colors">AI/ML & Data Science Course</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Business Administration & Commerce</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Full Stack Development</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Digital Marketing Training</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">UI/UX & Graphic Design Course</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 whitespace-nowrap lg:-ml-15">{/**lg:-ml-15 to move the text to left */}
            <h4 className="text-white text-[15px] font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-[13px] lg:text-[14px]">
              <li>
                <a href="tel:+911234567890" className="hover:text-white transition-colors">
                  +91 9409207327
                </a>
              </li>
              <li>
                <a href="tel:+911234567890" className="hover:text-white transition-colors">
                  +91 88665 49495
                </a>
              </li>
              <li>
                <a href="mailto:alphabitskillstudio@gmail.com" className="hover:text-white transition-colors">
                  alphabitskillstudio@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Full width Bottom Bar */}
      <div className="w-full border-t border-white/10 mt-10">
        <div className=" mx-auto py-8 px-6 lg:px-20 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[14px] lg:text-[16px] text-[#7A7A7A]">
            © {currentYear} Alphabit Skill. All rights reserved.
          </p>

          <div className="flex gap-6 text-[14px] lg:text-[16px] text-[#7A7A7A]">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/legal" className="hover:text-white transition-colors">Legal</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
