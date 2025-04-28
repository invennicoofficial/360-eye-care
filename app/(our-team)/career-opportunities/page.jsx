import React from "react";
import SubHeader from "../../../components/SubHeader";
import Image from "next/image";
import { MedicalTeamImage } from "../../../constants/Images";

const CareerOpportunities = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="Career Opportunities" />

      <div className="max-w-6xl mx-auto my-16 flex flex-wrap justify-between">
        <div className="w-full md:w-[45%]">
          <div className="text-brand-subheader text-4xl font-bold mb-2">
            Join Our Team and Make a Difference
          </div>
          <hr className="w-20 h-1 bg-combination-100 mb-4" />

          <p className="text-base text-neutral-500">
            Our eye clinic is dedicated to providing exceptional care to our
            patients. We are looking for individuals who share our passion for
            helping people and improving their quality of life. Join our team
            and become a part of something meaningful.
          </p>
        </div>

        <div className="w-full md:w-[50%] mt-12 md:mt-0">
          <Image
            src={MedicalTeamImage}
            alt="Medical professionals shaking hands"
            width={585}
            height={390}
            className="w-full"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-16">
        <div className="flex flex-col items-center mx-auto max-w-2xl">
          <div className="text-brand-subheader text-center text-4xl font-bold mb-2">
            360 Eyecare Job Postings
          </div>
          <hr className="w-20 h-1 bg-combination-100 mb-4 self-center" />

          <p className="text-base text-neutral-500 text-center">
            Sorry! We do not have any open positions currently. Please check
            back another time! Thank you.
          </p>
        </div>
      </div>
    </main>
  );
};

export default CareerOpportunities;
