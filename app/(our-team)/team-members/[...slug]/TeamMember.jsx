"use client";
import SubHeader from "../../../../components/SubHeader";
import Image from "next/image";
import Link from "next/link";

const TeamMember = ({ doctor }) => {
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

  // Create paragraphs from the long description more reliably
  const createParagraphs = (text) => {
    if (!text) return [];

    // Split by periods and ensure they end with a period
    const sentences = text
      .split(".")
      .filter(Boolean)
      .map((s) => s.trim() + ".");

    // Group into paragraphs of approximately 2-3 sentences
    const paragraphs = [];
    let currentParagraph = [];

    sentences.forEach((sentence, index) => {
      currentParagraph.push(sentence);

      // Create a new paragraph after every 2-3 sentences or at the end
      if (currentParagraph.length === 3 || index === sentences.length - 1) {
        paragraphs.push(currentParagraph.join(" "));
        currentParagraph = [];
      }
    });

    return paragraphs;
  };

  const paragraphs = createParagraphs(doctor.longDescription);

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
              className="md:w-[275px] md:h-[275px] w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col mt-6 md:mt-0 md:w-[70%]">
            <p className="text-combination-200 text-2xl font-bold mb-4">
              {doctor.name}
            </p>

            {paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-neutral-500 text-lg mb-4">
                {paragraph}
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
