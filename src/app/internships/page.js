import InternshipListingHero from "@/components/internships/InternshipListingHero";
import InternshipCard from "@/components/internships/InternshipCard";
import { getInternships } from "@/data/internships";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Internship Programs | Alphabit Skill",
  description:
    "Explore hands-on internship programs at Alphabit Skill and find the right path to build your career.",
};

export default async function InternshipsIndexPage() {
  const internships = await getInternships();

  return (
    <div className="flex w-full flex-col items-center bg-[#F5F5F5]">
      <InternshipListingHero internship={internships[0]} />

      <section className="w-full bg-[#F5F5F5] px-4 py-10 sm:px-8 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
            {internships.map((internship, index) => (
              <InternshipCard
                key={internship.slug || internship._id || index}
                internship={internship}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
