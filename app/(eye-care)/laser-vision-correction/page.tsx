import React from "react";
import SubHeader from "../../../components/SubHeader";
import Link from "next/link";

import Image from "next/image";

import LaserVisionSlider from "../../../components/LaserVisionSlider";
import Benefits from "../../../components/Benefits";
import { benefitsData, laservisiondata } from "../../../constants/Constants";
import LaserVisionService from "../../../components/LaserVisionService";
import {
  LaserCorrectionImage,
  LaserVisionServiceImage,
} from "../../../constants/Images";

const page = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="Laser Vision Correction" />
      {/* First content section */}
      <div className="max-w-6xl mx-auto my-8 sm:my-16 px-4 sm:px-0 flex flex-col sm:flex-row justify-between items-start">
        <div className="flex flex-col gap-4 w-full sm:w-[585px] sm:mr-10 mb-8 sm:mb-0">
          <h2 className="text-combination-200 text-3xl sm:text-[37px] font-[900]">
            Transform Your Vision with Laser Correction
          </h2>
          <hr className="w-20 h-1 bg-combination-100 mb-2" />
          <p className="text-neutral-500 text-base mb-2">
            Our Laser Vision Correction in Toronto offers advanced LASIK and PRK
            procedures to correct nearsightedness, farsightedness, and
            astigmatism. Experience the freedom from glasses and contacts with
            our safe and effective treatments. Schedule a consultation to see if
            you’re a candidate for laser vision correction.
          </p>

          <Link href="/book-eye-exam" className="w-[220px]">
            <div className="w-full sm:w-auto bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 shadow-md mt-4 sm:mt-0 text-center">
              Book Your Eye Exam
            </div>
          </Link>
        </div>
        <div className="w-full sm:w-[585px] flex flex-row items-end">
          <div className="hidden sm:block w-[30px] h-[280px] bg-gray-100" />
          <Image
            src={LaserCorrectionImage}
            alt="Laser Correction"
            width={585}
            height={536}
            className="w-full h-auto"
          />
        </div>
      </div>

      <Benefits
        benefitsData={benefitsData}
        title="Why Choose Laser Vision Correction?"
        subtitle="Discover the benefits of LASIK and PRK for clear vision."
      />
      <LaserVisionService
        data={laservisiondata}
        image={LaserCorrectionImage}
        imageTitle="Why Choose Us!"
        imageDesc="Experienced doctors with extensive training in laser vision correction management"
      />
      <LaserVisionSlider />
    </main>
  );
};

export default page;
