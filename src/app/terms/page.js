import React from "react";
import Link from "next/link";
import { ShieldCheck, FileText, CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Use | Alphabit Skill",
  description: "Terms of Use for Alphabit Skill Studio — Review our terms, user guidelines, and course enrollment policies.",
};

export default function TermsPage() {
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
            <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Terms of Use
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 font-medium">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 sm:space-y-8 leading-relaxed text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-[#111111] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#6C4FF6]" /> 1. Acceptance of Terms
            </h2>
            <p className="text-sm sm:text-base">
              By accessing or using <strong>Alphabit Skill Studio</strong>, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use our services or website.
            </p>
          </section>

          <hr className="border-gray-100" />

          <section>
            <h2 className="text-xl font-bold text-[#111111] mb-3">
              2. Educational Services & Content
            </h2>
            <p className="text-sm sm:text-base mb-3">
              Alphabit Skill provides IT training programs, software development courses, and career assistance. All course material, curriculum design, and branding assets are intellectual property of Alphabit Skill Studio.
            </p>
          </section>

          <hr className="border-gray-100" />

          <section>
            <h2 className="text-xl font-bold text-[#111111] mb-3">
              3. User Conduct & Acceptable Use
            </h2>
            <p className="text-sm sm:text-base mb-3">
              Users agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base pl-2 text-gray-600">
              <li>Attempt to scrape, reverse engineer, or disrupt website services or visitor tracking logic.</li>
              <li>Provide false contact details or impersonate others when submitting inquiry forms.</li>
              <li>Reproduce or redistribute proprietary course materials without written consent.</li>
            </ul>
          </section>

          <hr className="border-gray-100" />

          <section>
            <h2 className="text-xl font-bold text-[#111111] mb-3">
              4. Contact Information
            </h2>
            <p className="text-sm sm:text-base">
              For any questions regarding these Terms of Use, reach out to us at:
            </p>
            <div className="mt-3 bg-[#F5F5F5] p-4 rounded-2xl text-sm font-medium text-gray-800">
              <p>Email: <a href="mailto:alphabitinfoway@gmail.com" className="text-[#6C4FF6] hover:underline">alphabitskillstudio@gmail.com</a></p>
              <p className="mt-1">Phone: +91 9409207327 | +91 8866549495</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
