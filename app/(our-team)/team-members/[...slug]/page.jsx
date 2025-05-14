"use client";
import { useParams } from "next/navigation";
import { optometrists } from "../../../../constants/Constants";
import SubHeader from "../../../../components/SubHeader";
import Image from "next/image";
import Link from "next/link";

const TeamMember = () => {
  const { slug } = useParams();
  const doctor = optometrists.find((doctor) => doctor.slug == slug);

  if (!doctor) {
    return (
      <main className="pt-[110px] px-4">
        <SubHeader text="Team Member Not Found" />
        <p className="text-neutral-500 text-lg mt-4">
          Sorry, we couldn't find the team member you're looking for.
        </p>
      </main>
    );
  }

  return (
    <main className="pt-[110px]">
      <SubHeader text={doctor.name} />

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-start md:py-20 py-10">
          <div className="w-full md:w-[25%]">
            <Image
              src={doctor.image}
              alt={doctor.name}
              width={275}
              height={275}
              className="w-[275px] h-[275px] object-contain"
            />
          </div>

          <div className="flex flex-col mt-6 md:mt-0 md:w-[70%]">
            <p className="text-combination-200 text-2xl font-bold mb-4">
              {doctor.name}
            </p>
            {doctor.longDescription &&
              doctor.longDescription
                .split(". ")
                .reduce((acc, sentence, index) => {
                  const paragraphSize = 3;
                  const paraIndex = Math.floor(index / paragraphSize);
                  if (!acc[paraIndex]) acc[paraIndex] = [];
                  acc[paraIndex].push(sentence);
                  return acc;
                }, [])
                .map((sentences, idx) => (
                  <p key={idx} className="text-neutral-500 text-lg mb-4">
                    {sentences.join(". ") + "."}
                  </p>
                ))}

            <Link
              href="/book-eye-exam"
              className="inline-block w-full md:w-[240px] bg-combination-100 text-white hover:bg-brand-blue hover:text-combination-100 font-medium py-3 px-8 rounded transition-colors duration-200 shadow-button text-center"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeamMember;
