import Image from "next/image";

export default function InternshipListingHero({ internship }) {
  // const heroImage = internship?.hero?.heroImage;
  const heroImage = "https://res.cloudinary.com/dir8eqqnk/image/upload/v1794490169/Internship_Program_Hero_Illustration_azthmq.png";
  const title = internship?.title || "Internship";

  return (
    <section className="mt-6 w-full pt-13 md:pt-16">
      <div className="mx-auto flex w-full max-w-[1728px] flex-col items-center justify-between gap-12 px-4 py-16 sm:px-6 md:flex-row md:py-24 lg:px-20">
        <div className="z-10 flex-[1.2] space-y-6">
          <h1 className="font-cabinet text-5xl font-medium leading-[1.15] tracking-tight text-[#171717] md:text-6xl">
            <span className="font-pp text-6xl font-medium italic text-[#FF5722] md:text-7xl">
              Internship
            </span>{" "}
            Programs
            <br />
            for Your Career
          </h1>

          <p className="w-full text-[18px] leading-relaxed text-[#666666] sm:w-5/6 sm:text-[22px]">
            Explore hands-on internship programs, build real-world skills, and
            learn from experienced industry mentors.
          </p>
        </div>

        {heroImage && (
          <div className="relative flex w-full flex-[0.9] items-center justify-center md:justify-end lg:flex-1">
            <Image
              src={heroImage}
              alt={`${title} program`}
              width={1200}
              height={900}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full max-w-[540px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:scale-[1.02] lg:max-w-[620px]"
            />
          </div>
        )}
      </div>
    </section>
  );
}