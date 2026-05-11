export default function PrinciplesSection() {
  return (
    <section
      className="relative w-full bg-gradient-to-b from-[#7143FE] to-[#F5F5F5] pt-24 pb-24 px-6 md:px-12 overflow-hidden"
      style={{ clipPath: "ellipse(110% 100% at 50% 100%)", marginTop: "24px" }}
    >
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-12 px-4">
          <h2 className="text-white font-bold font-cabinet tracking-tight mb-2" style={{ fontSize: "clamp(28px, 3.5vw, 35px)" }}>
            The Core Operational Principles
          </h2>
          <h2 className="text-white font-bold font-cabinet tracking-tight mb-6 flex items-end justify-center gap-3 flex-wrap" style={{ fontSize: "clamp(28px, 3.5vw, 35px)" }}>
            of Our Technical
            <span className="text-[#FF5722] italic font-normal leading-none" style={{ fontFamily: "'PP Editorial New', serif", fontSize: "clamp(40px, 5.5vw, 68px)", lineHeight: 1 }}>
              Infrastructure
            </span>
          </h2>
          <p className="text-white text-sm leading-relaxed mx-auto" style={{ maxWidth: "700px" }}>
            Driven by our engineering objectives, we bypass traditional educational models to focus purely on the rigorous development, validation, and corporate deployment of highly capable IT professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-white/50">
            <div className="w-14 h-14 bg-gray-200 rounded-[10px] mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-3 font-cabinet">Professional Accountability</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              We maintain strict operational standards across our entire ecosystem. From writing secure, optimized code to ensuring absolute transparency in our placement protocols, we cultivate reliable professionals who operate with precision in enterprise environments.
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-white/50">
            <div className="w-14 h-14 bg-gray-200 rounded-[10px] mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-3 font-cabinet">Outcome-Driven Development</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Every technical module, live project, and code review is engineered entirely around your career integration. We prioritize hands-on portfolio execution and functional mastery to ensure our talent is immediately deployable in the modern tech workforce.
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-white/50">
            <div className="w-14 h-14 bg-gray-200 rounded-[10px] mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-3 font-cabinet">Technological Agility</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              The IT sector does not wait for static curriculums. We continuously calibrate our training methodologies, actively integrating the latest software frameworks, AI protocols, and modern UI architectures to ensure total alignment with current corporate demands.
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-white/50">
            <div className="w-14 h-14 bg-gray-200 rounded-[10px] mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-3 font-cabinet">Collaborative Ecosystem</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Enterprise software and digital design are never built in a vacuum. We mirror real-world agile environments, fostering a collaborative studio culture where learners participate in joint design sprints, peer code reviews, and cross-functional problem-solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}