import React from "react";
import SubHeader from "../../../components/SubHeader";
import Image from "next/image";
import Link from "next/link";
import {
  childVisionImage,
  ExpertisePediatricImage,
  pediatricEyeImage,
  pediatricGirlImage,
} from "../../../constants/Images";
import PediatricOptometristsUI from "../../../components/PediatricOptometristsUI";
import Banner2 from "../../../components/Banner2";
import Benefits from "../../../components/Benefits";
import Faqs from "../../../components/Faqs";
import {
  faqDatapediatric,
  pediatricEyeBenefitsData,
  pediatricEyeData,
} from "../../../constants/Constants";
import PediatricSlider from "../../../components/PediatricSlider";
import LaserVisionService from "../../../components/LaserVisionService";

// Section components to improve modularity
const IntroSection = () => (
  <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 flex flex-col md:flex-row justify-between mb-6">
    <div className="flex flex-col gap-4 w-full md:w-[585px] md:mr-10 mb-8 md:mb-0">
      <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-bold">
        Comprehensive Pediatric Eye Exams in Toronto
      </h2>
      <hr className="w-20 h-1 bg-combination-100 mb-2" />
      <p className="text-neutral-500 text-base md:text-lg mb-2">
        Our pediatric optometrists in Toronto specialize in providing
        comprehensive eye exams for children. Pediatric Eye examinations are
        crucial for early detection and treatment of vision problems, ensuring
        your child's vision health and development are on track. Our team
        ensures every child feels comfortable during the exam with a gentle
        approach and a child-friendly environment. Trust our pediatric
        optometrists in Toronto to provide the best care for your child's
        vision.
      </p>
      <p className="text-neutral-500 text-base md:text-lg mb-2">
        Our pediatric optometry clinics are located in two convenient locations
        in Toronto – Beaches and Rosedale. Beaches is situated in the east end
        of Toronto, near the waterfront, and is in close proximity to
        Leslieville, Riverdale, and East York. Rosedale, on the other hand, is
        located just north of Downtown Toronto, and is surrounded by nearby
        areas such as Yorkville, Summerhill, and St. James Town. Our clinics are
        easily accessible from all parts of the city, making it convenient for
        you to schedule your child's pediatric eye exam with us.
      </p>
    </div>
    <div className="w-full md:w-[585px] h-auto md:h-[536px]">
      <Image
        src={pediatricEyeImage}
        alt="Pediatric Eye Exam"
        width={585}
        height={536}
        className="w-full h-auto"
      />
    </div>
  </div>
);

const page = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="Pediatric Eye Exams" />
      <IntroSection />
      <PediatricOptometristsUI />
      <PediatricSlider />
      <Banner2
        title="Need Pediatric Eye Care?"
        description="Contact us today to schedule your child’s pediatric eye exam in Toronto."
        rosedale={true}
        ctaText="Book A Pediatric Eye Exam"
        ctaLink="/book-eye-exam"
      />
      <div className="max-w-6xl mx-auto my-8 sm:my-16 px-4 sm:px-0 flex flex-col sm:flex-row-reverse justify-between items-start">
        <div className="flex flex-col gap-4 w-full sm:w-[585px] sm:ml-12 mb-8 sm:mb-0">
          <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[900]">
            Why Choose Our Pediatric Eye Care?
          </h2>
          <hr className="w-20 h-1 bg-combination-100 mb-2" />
          <p className="text-neutral-500 text-base mb-2">
            Our pediatric optometrists in Toronto are dedicated to exceptional
            care for your child's vision. With specialized expertise in
            pediatric eye care and a focus on gentle, compassionate treatment,
            we ensure a positive experience for your child. Our comprehensive
            pediatric eye exams, specialized treatments, and personalized care
            plans are designed to meet the unique needs of children, ensuring
            optimal vision health and development
          </p>
          <ul className="space-y-2">
            {[
              "Experienced pediatric optometrists specializing in children's vision health.",
              "A gentle and compassionate approach to ensure a positive experience..",
              "Comprehensive pediatric eye exams and personalized care plans are available.",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <svg
                  className="w-5 h-5 sm:w-7 sm:h-7 text-combination-100 mr-2 mt-1 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 13L9 17L19 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-neutral-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <Link href="/book-eye-exam" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 shadow-md mt-4">
              Book A Pediatric Eye Exam
            </button>
          </Link>
        </div>
        <div className="w-full sm:w-[620px] flex flex-row items-end mb-8 sm:mb-0">
          <div className="hidden sm:block w-[50px] h-[280px] bg-combination-100" />
          <Image
            src={pediatricGirlImage}
            alt="Child Getting Eye Exam"
            width={560}
            height={536}
            className="w-full h-auto"
          />
        </div>
      </div>

      <Benefits
        benefitsData={pediatricEyeBenefitsData}
        title="What You Get"
        subtitle="Value for your child's vision health."
      />
      <LaserVisionService
        data={pediatricEyeData}
        image={ExpertisePediatricImage}
        imageTitle="Expert Pediatric Eye Care"
        imageDesc="Trusted by families in Toronto"
      />
      <div className="max-w-6xl mx-auto my-8 sm:my-16 px-4 sm:px-0 flex flex-col sm:flex-row-reverse justify-between items-start">
        <div className="flex flex-col gap-4 w-full sm:w-[585px] sm:ml-12 mb-8 sm:mb-0">
          <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[900]">
            Pediatric Eye Care FAQs
          </h2>
          <hr className="w-20 h-1 bg-combination-100 mb-2" />
          <p className="text-neutral-500 text-base mb-2">
            Find answers to common concern about pediatric eye care in Toronto.
            Please contact us with specific questions about your child's vision
            health.
          </p>
          <Faqs faqData={faqDatapediatric} />
        </div>
        <div className="w-full sm:w-[620px] flex flex-row items-end mb-8 sm:mb-0">
          <div className="hidden sm:block w-[50px] h-[280px] bg-combination-100" />
          <Image
            src={childVisionImage}
            alt="Child Vision Testing"
            width={560}
            height={536}
            className="w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
};

export default page;
