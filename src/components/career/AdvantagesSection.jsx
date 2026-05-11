export default function AdvantagesSection() {
  const advantages = [
    {
      title: "High-Performance Workspace",
      description: "A collaborative, agile environment designed to eliminate operational bottlenecks and support uninterrupted technical execution.",
      alt: "High-Performance Workspace",
    },
    {
      title: "Tech Stack Expansion",
      description: "Continuous opportunities to upgrade your technical capabilities, master new frameworks, and increase your market value.",
      alt: "Tech Stack Expansion",
    },
    {
      title: "Output-Based Incentives",
      description: "Direct recognition and compensation tied entirely to the quality, efficiency, and impact of your functional deliverables.",
      alt: "Output-Based Incentives",
    },
  ];

  return (
    <section className="w-full bg-[#6B46C1] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-medium text-white mb-16 font-cabinet">
          Operational <span className="text-[#FF5722] font-pp text-5xl md:text-6xl italic font-normal">Advantages</span> for Our Talent
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map((advantage) => (
            <div key={advantage.title} className="bg-white rounded-[32px] p-5 shadow-xl overflow-hidden flex flex-col h-full">
              <div className="w-full rounded-[24px] overflow-hidden mb-5">
                <img src="/Home%20Page/Career/Specialized%20Training%20Modules_11zon.webp" alt={advantage.alt} className="w-full h-48 object-cover" />
              </div>
              <div className="p-2 md:p-2 flex-grow flex flex-col">
                <h4 className="text-[20px] font-bold text-gray-900 mb-3 font-cabinet leading-tight">{advantage.title}</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}