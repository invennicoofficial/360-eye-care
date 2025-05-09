import React from "react";
import SubHeader from "../../../components/SubHeader";
import Banner from "../../../components/Banner";
import Link from "next/link";
import { myopiaImage } from "../../../constants/Images";
import Image from "next/image";
import MyopiaControl from "../../../components/MyopiaControl";
import MyopiaControlPage from "../../../components/MyopiaControlPage";

const page = () => {
  return (
    <main className="pt-[110px] bg-[#F9F9F9]">
      <SubHeader text="Myopia Control in Children" />

      {/* Introduction Section */}
      <div className="max-w-6xl mx-auto my-6 sm:my-16 px-4 sm:px-6 lg:px-0 flex flex-col">
        <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[900] mb-4">
          Introduction
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-base mb-2">
          Myopia, or nearsightedness, is a common vision condition where distant
          objects appear blurry. However, recent years have seen a troubling
          rise in myopia rates, particularly among children. This condition can
          not only impact a child's daily activities but also increase their
          risk of developing sight-threatening complications later in life.
        </p>
        <p className="text-neutral-500 text-base mb-4">
          The good news is that early intervention can make a significant
          difference. Myopia Control Clinics offer specialized programs designed
          to slow or halt the progression of myopia in children. By addressing
          myopia early on, these programs aim to safeguard children's vision for
          the future.
        </p>
        <div className="flex justify-center sm:justify-start">
          <Link href="/book-eye-exam" className="w-full sm:w-auto">
            <div className="bg-combination-100 hover:text-combination-100 text-center hover:bg-combination-200 text-white font-bold py-3 px-8 rounded-md transition-colors duration-200 shadow-md">
              Book Myopia Control Treatment
            </div>
          </Link>
        </div>
      </div>

      {/* Treatment Section with Image */}
      <div className="max-w-6xl mx-auto my-6 sm:my-16 px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[900] mb-4">
              Myopia Control Treatment
            </h2>
            <hr className="w-20 h-1 bg-combination-100 mb-4" />
            <p className="text-neutral-500 text-base mb-2">
              Myopia Control Treatment is a specialized program designed to slow
              or halt the progression of myopia in children. By addressing
              myopia early on, these programs aim to safeguard children's vision
              for the future.
            </p>
            <p className="text-neutral-500 text-base mb-2">
              With myopia, however, the eyeball is either too long or the cornea
              is too curved. This shape throws off the focusing process, causing
              light rays to converge in front of the retina instead of directly
              on it. As a result, distant objects appear blurry, while close
              objects remain clear.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-[292px]">
              <Image
                src={myopiaImage}
                alt="Myopia Control Treatment"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Causes Section */}
      <div className="max-w-6xl mx-auto my-6 sm:my-16 px-4 sm:px-6 lg:px-0 flex flex-col">
        <p className="text-neutral-500 text-base mb-2">
          The exact cause of myopia isn't fully understood, but it's likely a
          combination of genetic and environmental factors.
        </p>
        <ul className="list-disc list-inside ml-5 text-neutral-500 text-base">
          <li className="mb-2">
            <strong>Genetics:</strong> Studies show a strong link between myopia
            and family history. If one or both parents have myopia, a child is
            more likely to develop it as well.
          </li>
          <li className="mb-2">
            <strong className="font-bold">Environment:</strong> Increased near
            work activities like reading or excessive screen time have been
            linked to myopia development, particularly in children. Conversely,
            spending more time outdoors seems to have a protective effect.
          </li>
        </ul>
      </div>

      {/* Factors Section */}
      <div className="max-w-6xl mx-auto my-6 sm:my-16 px-4 sm:px-6 lg:px-0 flex flex-col">
        <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[900] mb-4">
          Factors Contributing to Myopia Progression
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-base mb-4">
          While the exact cause of myopia remains under investigation, several
          factors contribute to its progression, particularly in children.
        </p>

        {[
          {
            head: "1. Time spent outdoors vs. time spent on screens",
            para: "Research suggests a significant link between limited outdoor time and an increased risk of myopia development. Sunlight exposure seems to play a protective role in eye health, while excessive near work activities like reading or spending too much time on screens can put strain on the focusing muscles within the eye. This prolonged near work is believed to potentially contribute to the elongation of the eyeball, a key factor in myopia progression.",
          },
          {
            head: "2. Excessive screen time and near work on eye health",
            para: "The rise of digital devices has brought about growing concerns regarding their impact on children's vision. Excessive screen time can lead to digital eye strain, characterized by symptoms like blurred vision, dry eyes, and headaches. While not directly causing myopia, this strain can contribute to a preference for near vision, potentially accelerating myopic progression.",
          },
          {
            head: "3. Genetic predisposition",
            para: "The Genetics of Myopia: Genetics play a significant role in myopia. A child with one myopic parent has a higher risk of developing the condition, and this risk increases further with two myopic parents. While genetics can't be controlled, understanding your family history can help with early detection and intervention.",
          },
        ].map((item, index) => {
          return (
            <div key={index} className="mb-6">
              <h3 className="text-combination-200 text-xl sm:text-2xl md:text-[30px] font-[900] mb-2">
                {item.head}
              </h3>
              <p className="text-neutral-500 text-base">{item.para}</p>
            </div>
          );
        })}

        <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[30px] font-[900] mb-4 mt-6">
          Recommendations for prevention
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-base mb-4">
          Fortunately, there are steps you can take to promote healthy vision
          habits and potentially slow myopia progression:
        </p>
        <ul className="list-disc list-outside ml-5 text-neutral-500 text-base">
          <li className="mb-3">
            <strong>Encouraging more time outside in natural sunlight:</strong>{" "}
            Encourage children to spend more time engaged in outdoor activities.
            Sunlight exposure seems to have a protective effect against myopia
            development.
          </li>
          <li className="mb-3">
            <strong>Taking regular breaks from screens and near work:</strong>{" "}
            Limit screen time for children and incorporate regular breaks to
            allow their eyes to relax.
          </li>
          <li className="mb-3">
            <strong>The 20-20-20 rule:</strong> every 20 minutes, look at
            something 20 feet away for 20 seconds.
          </li>
          <li className="mb-3">
            <strong>Develop Healthy Visual Habits:</strong> Encourage good
            posture while reading or using screens, maintain proper lighting,
            and ensure children hold reading materials at an appropriate
            distance.
          </li>
          <li className="mb-3">
            <strong>Regular Eye Care:</strong> Schedule regular eye exams for
            children, especially if there's a family history of myopia. Early
            detection allows for timely intervention and management of myopia
            progression.
          </li>
        </ul>
      </div>

      {/* CTA Button */}
      <div className="max-w-6xl mx-auto my-8 px-4 sm:px-6 lg:px-0 flex justify-center">
        <Link href="/book-eye-exam" className="w-full sm:w-auto">
          <div className="bg-combination-100 hover:text-combination-100 text-center hover:bg-combination-200 text-white font-bold py-3 px-8 rounded-md transition-colors duration-200 shadow-md">
            Book an Eye Exam
          </div>
        </Link>
      </div>

      <MyopiaControl />
      <MyopiaControlPage />

      <Banner />
    </main>
  );
};

export default page;
