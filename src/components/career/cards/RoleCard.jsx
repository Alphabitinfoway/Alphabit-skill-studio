export default function RoleCard({ card }) {
  return (
    <div className="bg-white rounded-[32px] p-8 shadow-sm flex flex-col items-start">
      <h4 className="text-2xl font-bold text-gray-900 mb-2 font-cabinet">{card.title}</h4>
      <p className="text-gray-500 text-[12px] leading-relaxed mb-3">
        {card.desc}
      </p>
      <button className="bg-[#7143FE] text-white px-4 py-2 rounded-full text-base font-medium hover:opacity-90 transition-opacity">
        Apply
      </button>
    </div>
  );
}