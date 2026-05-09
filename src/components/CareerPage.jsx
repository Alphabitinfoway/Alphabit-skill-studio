"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Play, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, useCarousel } from "@/components/application/carousel/carousel-base";
import CTASection from "./CTASection";

function CarouselCard({ index }) {
  return (
    <div
      className="w-full flex items-center justify-between p-8 md:p-16 rounded-[40px] "
      style={{
        height: 'clamp(320px, 40vw, 450px)',
        background: 'linear-gradient(to bottom, #F5F5F5 0%, #e5e7eb 100%)'
      }}
    >
      <h3 className="text-4xl md:text-5xl font-bold text-[#171717] font-cabinet">Navratri {index + 1}</h3>
      <div
        style={{
          position: 'relative',
          width: 'clamp(220px, 30vw, 360px)',
          height: 'clamp(180px, 25vw, 260px)',
          flexShrink: 0
        }}
      >
        {/* Back Rectangle */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: '80%',
            height: '65%',
            backgroundColor: 'white',
            borderRadius: 'clamp(16px, 2.5vw, 32px)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.04)'
          }}
        ></div>
        {/* Front Box */}
        <div
          style={{
            position: 'absolute',
            left: '5%',
            top: 0,
            width: '55%',
            height: '75%',
            backgroundColor: 'white',
            borderRadius: 'clamp(16px, 2.5vw, 32px)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
            zIndex: 10
          }}
        ></div>
      </div>
    </div>
  );
}

export default function CareerPage() {
  const [api, setApi] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [api]);

  const renderTab1Cards = () => {
    const data = [
      { id: 1, title: 'Sr. UI/UX Designer 1', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...' },
      { id: 2, title: 'Sr. UI/UX Designer 2', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...' },
      { id: 3, title: 'Sr. UI/UX Designer 3', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...' },
      { id: 4, title: 'Sr. UI/UX Designer 4', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...' },
    ];
    return data.map((card) => (
      <div key={card.id} className="bg-white rounded-[32px] p-8 shadow-sm flex flex-col items-start">
        <h4 className="text-2xl font-bold text-gray-900 mb-2 font-cabinet">{card.title}</h4>
        <p className="text-gray-500 text-[12px] leading-relaxed mb-3">
          {card.desc}
        </p>
        <button className="bg-[#7143FE] text-white px-4 py-2 rounded-full text-base font-medium hover:opacity-90 transition-opacity">
          Apply
        </button>
      </div>
    ));
  };

  const renderTab2Cards = () => {
    const data = [
      { id: 1, title: 'Sr. UI/UX Designer 5', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...' },
      { id: 2, title: 'Sr. UI/UX Designer 6', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...' },
      { id: 3, title: 'Sr. UI/UX Designer 7', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...' },
      { id: 4, title: 'Sr. UI/UX Designer 8', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...' },
    ];
    return data.map((card) => (
      <div key={card.id} className="bg-white rounded-[32px] p-8 shadow-sm flex flex-col items-start">
        <h4 className="text-2xl font-bold text-gray-900 mb-2 font-cabinet">{card.title}</h4>
        <p className="text-gray-500 text-[12px] leading-relaxed mb-3">
          {card.desc}
        </p>
        <button className="bg-[#7143FE] text-white px-4 py-2 rounded-full text-base font-medium hover:opacity-90 transition-opacity">
          Apply
        </button>
      </div>
    ));
  };

  const renderTab3Cards = () => {
    const data = [
      { id: 1, title: 'Sr. UI/UX Designer 9', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...' },
      { id: 2, title: 'Sr. UI/UX Designer 10', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...' },
      { id: 3, title: 'Sr. UI/UX Designer 11', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...' },
      { id: 4, title: 'Sr. UI/UX Designer 12', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...' },
    ];
    return data.map((card) => (
      <div key={card.id} className="bg-white rounded-[32px] p-8 shadow-sm flex flex-col items-start">
        <h4 className="text-2xl font-bold text-gray-900 mb-2 font-cabinet">{card.title}</h4>
        <p className="text-gray-500 text-[12px] leading-relaxed mb-3">
          {card.desc}
        </p>
        <button className="bg-[#7143FE] text-white px-4 py-2 rounded-full text-base font-medium hover:opacity-90 transition-opacity">
          Apply
        </button>
      </div>
    ));
  };

  return (
    <div className="flex flex-col items-center w-full bg-[#F5F5F5]">
      {/* 1. Hero Section */}
      <section className="w-full pt-28 mt-6 mb-3 md:pt-32">
        <div className="w-full max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-20 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-[#171717] leading-[1.1] font-cabinet tracking-tight">
              Drive the <span className="text-[#FF5722] font-pp italic font-normal">Future</span><br />
              of IT Upskilling
            </h1>
            <p className="text-[#666666] text-[17px] leading-relaxed w-5/6">
              Join our core operational team. Apply your technical expertise to structure rigorous, project-driven curriculums that bridge the gap between raw ambition and enterprise-level execution.
            </p>
            <button style={{ backgroundColor: '#7143FE' }} className="text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-3 text-[15px] shadow-md w-fit hover:opacity-90">
              <img src="/white arrow.png" alt="Join icon" className="w-6 h-6 object-contain brightness-0 invert" />
              Join the Studio
            </button>
          </div>
          <div className="flex-1 w-full flex justify-end relative h-full min-h-[350px]">
            {/* Abstract shape graphic with gradient for light theme */}
            <div
              className="absolute top-1/2 -translate-y-1/2 pointer-events-none z-0"
              style={{ width: '85%', minWidth: '380px', maxWidth: '560px', right: '-5%' }}
            >
              <svg viewBox="0 0 750 620" className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.06)]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="heroShapeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F8F8F8" />
                    <stop offset="100%" stopColor="#D8D8D8" />
                  </linearGradient>
                </defs>
                {/* Shape: rect with concave quarter-circle bite on top-left */}
                <path
                  d="M 220 0 H 610 A 40 40 0 0 1 650 40 V 480 A 40 40 0 0 1 610 520 H 40 A 40 40 0 0 1 0 480 V 220 Q 0 150 60 150 A 100 100 0 0 0 150 60 Q 150 0 220 0 Z"
                  fill="url(#heroShapeGrad)"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Video Section Placeholder */}
      <section className="w-full mt-24 max-w-5xl mx-auto mt-10 px-4 py-8">
        <div className="w-full aspect-[21/9] bg-[#E0E0E0] rounded-[40px] flex items-center justify-center relative overflow-hidden group cursor-pointer">
          <div className="text-gray-600 text-xl font-medium flex flex-col items-center gap-4">
            Youtube Video Link
          </div>
        </div>
      </section>

      {/* 3. Upgrade Trajectory */}
      <section className="w-full text-center py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-cabinet">
          <span className="text-[#FF5722] font-pp italic font-normal text-4xl md:text-5xl">Upgrade</span> Your Technical Trajectory for<br /> High-Value Enterprise Roles
        </h2>
        <p className="text-gray-500 mx-auto text-base" style={{ maxWidth: '860px' }}>
          Transition into high-value IT roles with Alphabit Skill. We combine rigorous practical execution, enterprise-grade frameworks, and direct mentorship from active developers to ensure your skill set directly meets modern corporate standards.
        </p>
      </section>

      {/* 4. Advantage Section with Gradient BG */}
      <section
        className="relative w-full bg-gradient-to-b from-[#7143FE] to-[#F5F5F5] pt-24 pb-24 px-6 md:px-12 overflow-hidden"
        style={{ clipPath: "ellipse(110% 100% at 50% 100%)", marginTop: "80px" }}
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-12 px-4">
            <h2 className="text-white font-bold font-cabinet tracking-tight mb-2" style={{ fontSize: "clamp(28px, 3.5vw, 35px)" }}>
              The Core Operational Principles
            </h2>
            <h2 className="text-white font-bold font-cabinet tracking-tight mb-6 flex items-end justify-center gap-3 flex-wrap" style={{ fontSize: "clamp(18px, 2.2vw, 35px)" }}>
              of Our Technical
              <span className="text-[#FF5722] italic font-normal leading-none" style={{ fontFamily: "'PP Editorial New', serif", fontSize: "clamp(40px, 5.5vw, 68px)", lineHeight: 1 }}>
                Infrastructure
              </span>
            </h2>
            <p className="text-white text-sm leading-relaxed mx-auto" style={{ maxWidth: '700px' }}>
              Driven by our engineering objectives, we bypass traditional educational models to focus purely on the rigorous development, validation, and corporate deployment of highly capable IT professionals.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
            {/* Card 1 */}
            <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-white/50">
              <div className="w-14 h-14 bg-gray-200 rounded-[10px] mb-4"></div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 font-cabinet">Professional Accountability</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                We maintain strict operational standards across our entire ecosystem. From writing secure, optimized code to ensuring absolute transparency in our placement protocols, we cultivate reliable professionals who operate with precision in enterprise environments.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-white/50">
              <div className="w-14 h-14 bg-gray-200 rounded-[10px] mb-4"></div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 font-cabinet">Outcome-Driven Development</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Every technical module, live project, and code review is engineered entirely around your career integration. We prioritize hands-on portfolio execution and functional mastery to ensure our talent is immediately deployable in the modern tech workforce.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-white/50">
              <div className="w-14 h-14 bg-gray-200 rounded-[10px] mb-4"></div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 font-cabinet">Technological Agility</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                The IT sector does not wait for static curriculums. We continuously calibrate our training methodologies, actively integrating the latest software frameworks, AI protocols, and modern UI architectures to ensure total alignment with current corporate demands.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-white/50">
              <div className="w-14 h-14 bg-gray-200 rounded-[10px] mb-4"></div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 font-cabinet">Collaborative Ecosystem</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Enterprise software and digital design are never built in a vacuum. We mirror real-world agile environments, fostering a collaborative studio culture where learners participate in joint design sprints, peer code reviews, and cross-functional problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Unmatched Advantages For Our Talent (Purple Background) */}
      <section className="w-full bg-[#6B46C1] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-16 font-cabinet">
            Unmatched <span className="text-[#FF5722] font-pp italic font-normal">Advantages</span> For Our Talent
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Advantage 1 */}
            <div className="bg-white rounded-[32px] p-5 shadow-xl overflow-hidden flex flex-col h-full">
              <div className="w-full rounded-[24px] overflow-hidden mb-5">
                <img src="/Home%20Page/Career/Specialized%20Training%20Modules_11zon.webp" alt="High-Performance Workspace" className="w-full h-[260px] object-cover" />
              </div>
              <div className="p-4 md:p-6 flex-grow flex flex-col">
                <h4 className="text-[20px] font-bold text-gray-900 mb-3 font-cabinet leading-tight">High-Performance Workspace</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  A collaborative, agile environment designed to eliminate operational bottlenecks and support uninterrupted technical execution.
                </p>
              </div>
            </div>
            {/* Advantage 2 */}
            <div className="bg-white rounded-[32px] p-5 shadow-xl overflow-hidden flex flex-col h-full">
              <div className="w-full rounded-[24px] overflow-hidden mb-5">
                <img src="/Home%20Page/Career/Specialized%20Training%20Modules_11zon.webp" alt="Tech Stack Expansion" className="w-full h-[260px] object-cover" />
              </div>
              <div className="p-4 md:p-6 flex-grow flex flex-col">
                <h4 className="text-[20px] font-bold text-gray-900 mb-3 font-cabinet leading-tight">Tech Stack Expansion</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Continuous opportunities to upgrade your technical capabilities, master new frameworks, and increase your market value.
                </p>
              </div>
            </div>
            {/* Advantage 3 */}
            <div className="bg-white rounded-[32px] p-5 shadow-xl overflow-hidden flex flex-col h-full">
              <div className="w-full rounded-[24px] overflow-hidden mb-5">
                <img src="/Home%20Page/Career/Specialized%20Training%20Modules_11zon.webp" alt="Output-Based Incentives" className="w-full h-[260px] object-cover" />
              </div>
              <div className="p-4 md:p-6 flex-grow flex flex-col">
                <h4 className="text-[20px] font-bold text-gray-900 mb-3 font-cabinet leading-tight">Output-Based Incentives</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Direct recognition and compensation tied entirely to the quality, efficiency, and impact of your functional deliverables.
                </p>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* 6. Off-Grid Activities */}
      <section className="w-full py-24 mt-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 font-cabinet leading-tight">
            <span className="text-[#FF5722] font-pp italic font-normal text-4xl md:text-5xl">Upgrade</span> A Look Inside Our Collaborative<br />
            Off-Grid Activities and Milestones
          </h2>
        </div>

        {/* Carousel / Cards */}
        <div className="w-full">
          <Carousel.Root opts={{ align: "center", loop: true }} setApi={setApi} className="w-full relative group">



            <Carousel.Content style={{ marginLeft: '-2rem' }}>
              {[1, 2, 3, 4].map((_, index) => (
                <Carousel.Item
                  key={index}
                  className="min-w-0 shrink-0 grow-0"
                  style={{ flexBasis: 'min(85%, 900px)', paddingLeft: '2rem' }}
                >
                  <CarouselCard index={index} />
                </Carousel.Item>
              ))}
            </Carousel.Content>



            {/* Pagination Dots */}
            <div className="flex justify-center items-center mt-12">
              <Carousel.IndicatorGroup className="flex gap-3 flex-wrap justify-center max-w-[50vw]">
                {[1, 2, 3, 4].map((_, index) => (
                  <Carousel.Indicator
                    key={index}
                    index={index}
                    className={({ isSelected }) =>
                      `h-2.5 rounded-full transition-all duration-300 ${isSelected ? "w-8 bg-[#b0b0b0]" : "w-2.5 bg-[#e5e7eb]"
                      }`
                    }
                  />
                ))}
              </Carousel.IndicatorGroup>
            </div>
          </Carousel.Root>
        </div>
      </section>

      {/* 7. Roles Section */}
      <section className="w-full max-w-7xl mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 border-gray-200 pb-8 gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-cabinet leading-tight">
            Scale Your Own <span className="text-[#FF5722] text-5xl  font-pp italic font-normal">Career</span> While Architecting<br />
            the Next Generation of Tech Talent
          </h2>
          <p className="text-gray-500 text-base max-w-sm md:pt-6 pt-4">
            Browse our active listings and join an agile studio ecosystem dedicated to advanced IT and design training.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto mb-12 hide-scrollbar">
          <div className="border-b-2 border-gray-200 flex gap-8">
            <button
              onClick={() => setActiveTab(0)}
              className={`pb-4 whitespace-nowrap text-lg -mb-[1px] ${activeTab === 0 ? 'font-bold text-gray-900 border-b-2 border-gray-900' : 'font-medium text-gray-400 hover:text-gray-900 border-transparent transition-colors'}`}
            >
              Academic & Administration
            </button>
            <button
              onClick={() => setActiveTab(1)}
              className={`pb-4 whitespace-nowrap text-lg -mb-[1px] ${activeTab === 1 ? 'font-bold text-gray-900 border-b-2 border-gray-900' : 'font-medium text-gray-400 hover:text-gray-900 border-transparent transition-colors'}`}
            >
              Counselling & Awareness Department
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`pb-4 whitespace-nowrap text-lg -mb-[1px] ${activeTab === 2 ? 'font-bold text-gray-900 border-b-2 border-gray-900' : 'font-medium text-gray-400 hover:text-gray-900 border-transparent transition-colors'}`}
            >
              Finance Department
            </button>
          </div>
        </div>

        {/* Role Cards Grid Container */}
        <div className="w-full overflow-hidden pb-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeTab * 100}%)` }}
          >
            <div className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-1">
              {renderTab1Cards()}
            </div>
            <div className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-1">
              {renderTab2Cards()}
            </div>
            <div className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-1">
              {renderTab3Cards()}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <CTASection />

    </div>
  );
}
