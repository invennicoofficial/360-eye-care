import React from "react";
import SubHeader from "../../../components/SubHeader";
import Link from "next/link";
import { advancedDiagnosticsImage } from "../../../constants/Images";
import Image from "next/image";
import AdvancedDiagnosisService from "../../../components/AdvancedDiagnosisService";

import { advanceddiagnosticsbenefitsData } from "../../../constants/Constants";
import Benefits from "../../../components/Benefits";

export async function generateMetadata() {
  return {
    title: "Advanced Diagnostics in Modern Eye Exams | 360 Eyecare",
    description:
      "Experience advanced diagnostics for eye exams, including OCT, Corneal Topography, and Retinal Imaging for precise care.",
    openGraph: {
      title: "Advanced Diagnostics in Modern Eye Exams | 360 Eyecare",
      description:
        "Experience advanced diagnostics for eye exams, including OCT, Corneal Topography, and Retinal Imaging for precise care.",
      url: "https://www.360eyecare.ca/advanced-diagnostics-eye-exams/",
      siteName: "360 Eyecare",
      type: "website",
    },
    alternates: {
      canonical: "https://www.360eyecare.ca/advanced-diagnostics-eye-exams/",
    },
  };
}

const page = () => {
  return (
    <main className="pt-[110px] bg-[#F9F9F9]">
      <SubHeader text="Advanced Diagnostics in Modern Eye Exams" />
      {/* First content section */}
      <div className="max-w-6xl mx-auto my-8 sm:my-16 px-4 sm:px-0 flex flex-col sm:flex-row justify-between items-start">
        <div className="flex flex-col gap-4 w-full sm:w-[585px] sm:mr-10 mb-8 sm:mb-0">
          <h2 className="text-combination-200 text-3xl sm:text-[37px] font-[900]">
            Advanced Diagnostics for Comprehensive Eye Exams
          </h2>
          <hr className="w-20 h-1 bg-combination-100 mb-2" />
          <p className="text-neutral-500 text-base mb-2">
            Our clinic utilizes state-of-the-art diagnostic tools to provide
            thorough and accurate eye exams. From digital retinal imaging to OCT
            scans, our advanced diagnostics help us detect and manage eye
            conditions early. Schedule your advanced eye exam today.
          </p>

          <Link href="/book-eye-exam" className="w-[280px]">
            <div className="w-full sm:w-auto bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 shadow-md mt-4 sm:mt-0 text-center">
              Book Your Eye Exam
            </div>
          </Link>
        </div>
        <div className="w-full sm:w-[585px] flex flex-row items-end">
          <div className="hidden sm:block w-[30px] h-[280px] bg-gray-100" />
          <Image
            src={advancedDiagnosticsImage}
            alt="Advanced Diagnostics"
            width={585}
            height={536}
            className="w-full h-auto"
          />
        </div>
      </div>
      <Benefits
        benefitsData={advanceddiagnosticsbenefitsData}
        title="Comprehensive Eye Exam Technologies"
        subtitle="Explore our advanced diagnostic tools for precise and thorough eye exams"
      />

      <AdvancedDiagnosisService />
    </main>
  );
};

export default page;
