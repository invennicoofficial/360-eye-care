import React from "react";
import SubHeader from "../../../components/SubHeader";
import { TiTick } from "react-icons/ti";
import {
  eyeCareServiceImage,
  eyeconditionImage,
} from "../../../constants/Images";
import Image from "next/image";
import CommonEyeSlider from "../../../components/CommonEyeSlider";
import Banner2 from "../../../components/Banner2";
import Link from "next/link";
import EyeConditionsPage from "../../../components/EyeConditionsPage";

const page = () => {
  return (
    <main className="pt-[110px] bg-[#F9F9F9]">
      <SubHeader text="Eye Conditions" />

      {/* First content section */}
      <div className="max-w-6xl mx-auto my-8 sm:my-16 px-4 sm:px-0 flex flex-col sm:flex-row justify-between items-start">
        <div className="flex flex-col gap-4 w-full sm:w-[585px] sm:mr-10 mb-8 sm:mb-0">
          <h2 className="text-combination-200 text-3xl sm:text-[37px] font-[900]">
            Common Eye Conditions We Treat
          </h2>
          <hr className="w-20 h-1 bg-combination-100 mb-2" />
          <p className="text-neutral-500 text-base mb-2">
            Serious eye conditions are unfortunately more prevalent than most
            people think: 2.5 billion people globally have vision problems. Most
            of these cases can be prevented. In fact according to the World
            Health Organization's factsheet on visual impairment and blindness
            updated on August 2014, 80% of all visual impairment cases can be
            prevented or cured. It's on this note that we review common eye
            problems – cataracts, dry eyes, diabetic retinopathy, glaucoma, and
            macular degeneration. Learn about the various eye conditions we
            diagnose and manage at our clinic. From refractive errors to more
            complex issues, our experienced team is here to help.
          </p>
        </div>
        <div className="w-full sm:w-[585px] flex flex-row items-end">
          <div className="hidden sm:block w-[30px] h-[280px] bg-gray-100" />
          <Image
            src={eyeconditionImage}
            alt="Understanding Dry Eye"
            width={585}
            height={536}
            className="w-full h-auto"
          />
        </div>
      </div>

      <EyeConditionsPage />

      <CommonEyeSlider />
      <Banner2
        title="Need Expert Eye Care?"
        description="Our team of optometrists is ready to assist you. Schedule an appointment today for personalized eye care."
        ctaText="Book Your Eye Exam"
        ctaLink="/book-eye-exam"
      />

      {/* Second content section */}
      <div className="max-w-6xl mx-auto my-8 sm:my-16 px-4 sm:px-0 flex flex-col-reverse sm:flex-row-reverse justify-between items-start">
        <div className="flex flex-col gap-4 w-full sm:w-[585px] sm:ml-12 mb-8 sm:mb-0">
          <h2 className="text-combination-200 text-3xl sm:text-[37px] font-[900]">
            Your Vision Is Our Priority
          </h2>
          <hr className="w-20 h-1 bg-combination-100 mb-2" />
          <p className="text-neutral-500 text-base mb-2">
            We are committed to providing exceptional eye care services. Our
            experienced optometrists use advanced technology to ensure accurate
            diagnoses and personalized treatments.
          </p>
          <ul className="space-y-2">
            {[
              "Comprehensive eye exams to assess your vision and eye health",
              "Customized treatment plans to address your unique needs.",
              "Friendly and knowledgeable staff dedicated to your comfort and satisfaction.",
            ].map((item, i) => (
              <li key={i} className="flex items-start sm:items-center">
                <TiTick size={20} className="text-combination-100" />
                <span className="text-neutral-700 text-sm ml-2">{item}</span>
              </li>
            ))}
          </ul>
          <Link href="/book-eye-exam" className="w-full sm:w-auto">
            <button className="w-[280px] sm:w-auto bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 shadow-md mt-4 sm:mt-0">
              Book Your Eye Exam Today
            </button>
          </Link>
        </div>
        <div className="w-full sm:w-[585px] flex flex-row items-end mb-8 sm:mb-0">
          <div className="hidden sm:block w-[30px] h-[280px] bg-gray-100" />
          <Image
            src={eyeCareServiceImage}
            alt="Understanding Dry Eye"
            width={585}
            height={536}
            className="w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
};

export default page;
