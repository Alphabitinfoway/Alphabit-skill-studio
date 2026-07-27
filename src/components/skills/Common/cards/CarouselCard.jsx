export default function CarouselCard({ index }) {
  return (
    <div
      className="w-full flex items-center justify-between p-8 md:p-16 rounded-[40px]"
      style={{
        height: "clamp(280px, 34vw, 390px)",
        background: "linear-gradient(to bottom, #F5F5F5 0%, #e5e7eb 100%)",
      }}
    >
      <h3 className="text-4xl md:text-5xl font-bold text-[#171717] font-cabinet">Navratri {index + 1}</h3>
      <div
        style={{
          position: "relative",
          width: "clamp(210px, 28vw, 330px)",
          height: "clamp(160px, 22vw, 235px)",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: "80%",
            height: "65%",
            backgroundColor: "white",
            borderRadius: "clamp(16px, 2.5vw, 32px)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "5%",
            top: 0,
            width: "55%",
            height: "75%",
            backgroundColor: "white",
            borderRadius: "clamp(16px, 2.5vw, 32px)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
            zIndex: 10,
          }}
        />
      </div>
    </div>
  );
}