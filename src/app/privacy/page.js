import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Alphabit Skill",
  description: "Privacy Policy for Alphabit Skill  — Learn how we collect, protect, and handle your data.",
};

export default function PrivacyPage() {
  const lastUpdated = "September 1, 2026";

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#171717] py-8 sm:py-12 px-4 sm:px-6 lg:px-20 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#6C4FF6] hover:underline mb-6 sm:mb-8 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header */}
        <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm mb-6 sm:mb-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#6C4FF6]/10 text-[#6C4FF6] flex items-center justify-center mb-4 sm:mb-5">
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 font-medium">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 sm:space-y-8 leading-relaxed text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-[#111111] mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#6C4FF6]" /> 1. Overview & Commitment
            </h2>
            <p className="text-sm sm:text-base">
              At <strong>Alphabit Skill </strong>, we are committed to respecting your privacy and protecting any personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and how we keep it secure.
            </p>
          </section>

          <hr className="border-gray-100" />

          <section>
            <h2 className="text-xl font-bold text-[#111111] mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#6C4FF6]" /> 2. Information We Collect
            </h2>
            <p className="text-sm sm:text-base mb-3">
              We collect minimal data necessary to provide a seamless learning experience and maintain website security:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base pl-2 text-gray-600">
              <li>
                <strong>Contact Information:</strong> Name, email address, phone number when you submit forms or register for courses/seminars.
              </li>
              <li>
                <strong>Anonymous Analytics & IP Tracking:</strong> To calculate unique website visitors, prevent spam, and maintain site security, we record anonymous client IP addresses and user agents.
              </li>
              <li>
                <strong>Cookies & Storage:</strong> Standard session cookies to enhance your browsing experience.
              </li>
            </ul>
          </section>

          <hr className="border-gray-100" />

          <section>
            <h2 className="text-xl font-bold text-[#111111] mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#6C4FF6]" /> 3. How We Use Your Data
            </h2>
            <p className="text-sm sm:text-base mb-3">
              Your information is exclusively used for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base pl-2 text-gray-600">
              <li>Responding to inquiries and course registrations.</li>
              <li>Calculating real-time unique website visitor statistics.</li>
              <li>Improving website performance, security, and course offerings.</li>
            </ul>
            <p className="text-sm sm:text-base mt-4 font-semibold text-[#111111]">
              We do NOT sell, trade, or rent your personal information or IP data to third parties.
            </p>
          </section>

          <hr className="border-gray-100" />

          <section>
            <h2 className="text-xl font-bold text-[#111111] mb-3">
              4. Contact Us
            </h2>
            <p className="text-sm sm:text-base">
              If you have any questions regarding this Privacy Policy, please contact us at:
            </p>
            <div className="mt-3 bg-[#F5F5F5] p-4 rounded-2xl text-sm font-medium text-gray-800">
              <p>Email: <a href="mailto:alphabitinfoway@gmail.com" className="text-[#6C4FF6] hover:underline">alphabitinfoway@gmail.com</a></p>
              <p className="mt-1">Phone: +91 9409207327 | +91 8866549495</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
