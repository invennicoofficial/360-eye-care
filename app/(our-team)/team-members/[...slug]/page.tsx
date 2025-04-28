"use client";
import { useParams } from "next/navigation";
import React from "react";
import { optometrists } from "../../../../constants/Services";
import SubHeader from "../../../../components/SubHeader";
import Image from "next/image";
import Link from "next/link";

const TeamMember = () => {
  const { slug } = useParams();

  const doctor = optometrists.filter((doctor) => doctor.slug === slug);

  return (
    <main className="pt-[110px]">
      <SubHeader text={doctor[0]?.name} />

      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row gap-4 items-start md:py-20">
          <Image
            src={doctor[0]?.image}
            alt={doctor[0]?.name}
            width={450}
            height={500}
          />

          <div className="flex flex-col ">
            <p className="text-combination-200 text-2xl font-bold mb-4">
              {doctor[0]?.name}
            </p>
            {doctor[0]?.longDescription && (
              <>
                {doctor[0].longDescription
                  .split(". ") // Split by sentence
                  .reduce((acc, sentence, index) => {
                    const paragraphSize = 3; // how many sentences per paragraph (adjust if needed)
                    const paraIndex = Math.floor(index / paragraphSize);

                    if (!acc[paraIndex]) {
                      acc[paraIndex] = [];
                    }
                    acc[paraIndex].push(sentence);
                    return acc;
                  }, [])
                  .map((sentences, idx) => (
                    <p key={idx} className="text-neutral-500 text-lg mb-4">
                      {sentences.join(". ") + "."}
                    </p>
                  ))}
              </>
            )}

            <Link
              href="/book-eye-exam"
              className="inline-block w-[220px] bg-combination-100 text-white hover:bg-brand-blue hover:text-combination-100 font-medium py-3 px-8 rounded transition-colors duration-200 shadow-button"
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
