import React from "react";
import SubHeader from "../../../components/SubHeader";
import AboutUsSection from "../../../components/AboutUsSection";

import Link from "next/link";
import Image from "next/image";
import { SpectacleImage } from "../../../constants/Images";
import FaqPlusMinus from "../../../components/FaqPlusMinus";
import EyeExamTools from "../../../components/EyeExamTools";
import { eyeexamsCardData } from "constants/Constants";
export async function generateMetadata() {
  return {
    title: "Eye Exams Toronto - Book an Eye Tests at Beaches and Yorkville",
    description:
      "Eye exams Toronto for comprehensive eye examination to all ages. Get your eyes tested at our eye clinic at The Beaches, Yorkville, Rosedale.",
    openGraph: {
      title: "Eye Exams Toronto - Book an Eye Tests at Beaches and Yorkville",
      description:
        "Eye exams Toronto for comprehensive eye examination to all ages. Get your eyes tested at our eye clinic at The Beaches, Yorkville, Rosedale.",
      url: "https://www.360eyecare.ca/eye-exams/",
      siteName: "360 Eyecare",
      type: "website",
    },
    alternates: {
      canonical: "https://www.360eyecare.ca/eye-exams/",
    },
  };
}

const comprehensiveEyeExam = [
  {
    head: "Visual acuity and refractive status assessment:",
    para: "Your optometrist will determine your vision with and without correction and then perform a complete refractive assessment to determine the most accurate prescription for your glasses for clearest and most comfortable vision. A digital cutting-edge phoropter technology can be utilized instead of the conventional manual phoropter to perform the subjective part of refraction (this is sometimes referred to as the 'better one or better two' test).",
  },
  {
    head: "Binocular assessment:",
    para: "A check to determine how well your two eyes work together as a team.",
  },
  {
    head: "Accommodative assessment:",
    para: "Similar to the binocular assessment, this determines your eyes' focusing ability at near and distant and during prolonged periods of reading and computer use. Your optometrist will also typically assess your vision for computer-distance and other intermediate tasks.",
  },
  {
    head: "Pupil assessment:",
    para: "A quick evaluation to determine how your pupils react to light and whether they have any physiologic or other anomalies that might be an indication of other health conditions such as nerve palsy and Horner's syndrome.",
  },
  {
    head: "Extra-ocular muscle function test:",
    para: "Determine the function of the muscles that help your eyes move in all directions.",
  },
  {
    head: "Cover test:",
    para: "Assesses for misalignment in the eyes and detects early and advanced stages of eye turns (strabismus) or phoric disorders and improper binocular postures.",
  },
  {
    head: "Visual field assessment:",
    para: "Assesses your peripheral vision. This test is done for different reasons and also has different modes. Manual confrontation test is typically done routinely for gross assessment, whereas more specific automated tests are done to assess for specific conditions such as glaucoma and brain tumour screening.",
  },
  {
    head: "Intraocular pressure test:",
    para: "Assesses the pressure inside your eyes for indications of glaucoma or other disorders leading to elevated eye pressure.",
  },
  {
    head: "Complete assessment of the anterior segment of your eyes:",
    para: "Your optometrist will examine the health of your eyes under the microscope (the slit lamp test) to determine if there is any corneal or other anterior segment disease like conjunctivitis (pink eye) or other inflammatory eye disease or infections. Your doctor will also assess the lids and the adnexa for related medical problems.",
  },
  {
    head: "Posterior segment disease:",
    para: "This test is typically done through the dilation of the pupil with drops to examine the retina, the optic nerve, and the other structures at the back of the eye.",
  },
  {
    head: "Retinal imaging:",
    para: "A highly detailed photograph and scan of the very back of the eye using a high-powered camera. These scans aid optometrists in assessing the physical condition of structures like the macula, retina and retinal layers, the optic nerve head, and surrounding tissues. These scans are provided to the patient after every exam for their records.",
  },
  {
    head: "Emergency Eye Care:",
    para: "Our eye doctors are licensed to diagnose and treat eye diseases such as urgent pink eye, keratitis, and foreign body removal and management. ",
  },
];

const page = () => {
  return (
    <main className="pt-[110px]">
      <div className="bg-[#F6F7F5]">
        <SubHeader text="Comprehensive Eye Exams in Toronto" />
        <div className="bg-[#F6F7F5] px-4 sm:px-10 md:pb-12 pb-8">
          <AboutUsSection cardData={eyeexamsCardData} />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-4 my-8 sm:my-12 px-4 sm:px-6 md:px-8">
          <p className="text-neutral-500 text-base  leading-relaxed">
            Eye exams have come a long way over the decades, and are very
            different from the ones your parents and grandparents might have
            had, though the core components are similar. In a city like Toronto,
            eye exams that are offered from office to office, optical to optical
            can vary a lot, from the very quick and basic to a more thorough
            exam much like going to your family physician for a yearly physical.
          </p>
          <p className="text-neutral-500 text-base  leading-relaxed">
            At{" "}
            <Link
              href={"/toronto-beaches-optometrist"}
              className="text-combination-200 hover:text-combination-100"
            >
              360 Eyecare Beaches
            </Link>{" "}
            and
            <Link
              href={"/toronto-yorkville-optometrist"}
              className="text-combination-200 hover:text-combination-100"
            >
              {" "}
              360 Eyecare Yorkville
            </Link>
            , we provide comprehensive eye exams to all ages. Our{" "}
            <Link
              href={"/"}
              className="text-combination-200 hover:text-combination-100"
            >
              optometrists in Toronto
            </Link>{" "}
            see patients as early as 6 months of age and diagnose and treat
            vision and eye conditions of all stages.
            <Link
              href={"/optometrists/"}
              className="text-combination-200 hover:text-combination-100"
            >
              Our optometrists
            </Link>{" "}
            leverage the most innovative technology in the industry to help
            perform a thorough and precise examination.
          </p>
          <p className="text-neutral-500 text-base  leading-relaxed">
            Our goal is to help everyone in the Toronto area (The Beaches,
            Yorkville, Rosedale and nearby) see to their maximum potential with
            optimum optical lenses and visual aids because we know how important
            your ocular health is. We strive to provide the full circle of care
            to all our patients.
          </p>
          <p className="text-neutral-500 text-base  leading-relaxed mb-6">
            So what are some of the tests and devices you'll come across in the
            modern eye exam?
          </p>

          <div className="flex  sm:justify-start mb-8 sm:mb-10">
            <Link
              href="/book-eye-exam"
              className="px-6 sm:px-8 py-2 flex justify-center items-center bg-combination-100 text-white text-nowrap font-bold rounded-full hover:bg-combination-200 transition-colors  w-[240px]"
            >
              Book an Eye Exam
            </Link>
          </div>

          <h3 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[700] mt-2">
            The Basics of a Comprehensive Eye Exam
          </h3>
          <hr className="w-24 h-1 bg-combination-100 mb-3" />
          <p className="text-neutral-500 text-base  leading-relaxed">
            An eye exam covers more than a single prescription check. An
            optometrist will systematically go through several visual
            assessments and health screenings throughout the appointment. What
            you might consider a simple question or a basic action could tell
            the optometrist quite a lot about the physical condition of your
            eyes during the exam.
          </p>
          <p className="text-neutral-500 text-base  leading-relaxed">
            These checks include:
          </p>

          <div className="flex flex-col gap-4 mb-8 sm:mb-10">
            {comprehensiveEyeExam.map((item, index) => (
              <div key={index}>
                <h4 className="text-combination-200 text-base sm:text-[18px] font-bold mb-2 sm:mb-3">
                  {item.head}
                </h4>
                <p className="text-neutral-500 text-sm sm:text-base  leading-relaxed">
                  {item.para}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white">
          <div className="p-4 sm:p-6 md:p-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 sm:gap-8">
            <div className="flex items-end">
              <div className="w-[30px] h-[180px] bg-gray-200 hidden md:block"></div>
              <Image
                src={SpectacleImage}
                alt="spectacle-image"
                height={320}
                width={500}
                className="object-contain"
              />
            </div>

            <div className="max-w-xl px-2 sm:px-0">
              <h3 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-bold mt-2 mb-4">
                Check Yearly, See Clearly
              </h3>
              <hr className="w-24 h-1 bg-combination-100 mb-3" />
              <p className="text-neutral-500 text-sm sm:text-base  leading-relaxed mb-6">
                Book your eye exams in Toronto with our optometrists today at
                any of our 360 Eyecare locations at The Beaches or Yorkville
                Rosedale. We look forward to providing you with the complete
                circle of care for all your eye care and eyewear needs.
              </p>
              <Link
                href="/book-eye-exam"
                className="inline-block px-6 sm:px-8 py-2 w-[220px] bg-combination-100 text-white font-bold rounded-full hover:bg-combination-200 transition-colors text-center"
              >
                Book an Eye Exam
              </Link>
            </div>
          </div>
        </div>
      </div>
      <EyeExamTools />

      <FaqPlusMinus />

      <div className="bg-[#F6F7F5] mx-auto p-4 sm:p-6 md:px-8 lg:px-24 md:py-10 flex flex-col gap-4">
        <h3 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[700] mt-2">
          The Importance of Eye Examinations
        </h3>
        <hr className="w-24 h-1 bg-combination-100 mb-3" />
        <p className="text-neutral-500 text-sm sm:text-base  leading-relaxed">
          As you can see, the eye exam has come a long way from the early days
          as technology has advanced, allowing doctors to assess and evaluate
          ocular conditions earlier than they had in the past. And with early
          detection comes early treatment and management. A thorough modern eye
          examination is just as important for your overall health as your
          yearly physical with your family doctor. It is important to note that
          not every eye examination offered will have all of these instruments
          and checks, so it is important to inquire ahead of time as to what the
          eye exam consists of and whether that is right for you and your needs.
        </p>
        <p className="text-neutral-500 text-sm sm:text-base  leading-relaxed">
          Don't see your question answered here? Feel free to contact us via
          phone, email, or by also using our website, or even drop by one of our
          Toronto clinic and chat with us in person. We are more than happy to
          help.
        </p>
        <p className="text-neutral-500 text-sm sm:text-base  leading-relaxed">
          At 360 Eyecare, we believe in offering our patients the full scope of
          eye health needs, and our comprehensive eye exams reflect that vision.
          Please reach out to either of our locations to book your next eye exam
          in Toronto today:{" "}
          <Link
            href="/toronto-rosedale-optometrist"
            className="text-combination-200 hover:text-combination-100"
          >
            360 Eyecare – Yorkville Rosedale{" "}
          </Link>
          , or{" "}
          <Link
            href="/toronto-beaches-optometrist"
            className="text-combination-200 hover:text-combination-100"
          >
            360 Eyecare – Beaches
          </Link>
          .
        </p>
      </div>
    </main>
  );
};

export default page;
