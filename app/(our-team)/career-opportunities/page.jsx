import SubHeader from "../../../components/SubHeader";
import Image from "next/image";
import { MedicalTeamImage } from "../../../constants/Images";

const CareerOpportunities = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="Career Opportunities" />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-16 flex flex-col md:flex-row md:flex-wrap gap-8 md:justify-between">
        {/* Text Content - Full width on mobile, 45% on desktop */}
        <div className="w-full md:w-[45%] order-2 md:order-1">
          <div className="text-brand-subheader text-3xl md:text-4xl font-bold mb-2">
            Join Our Team and Make a Difference
          </div>
          <hr className="w-[65px] h-[2px] bg-combination-100 mb-4" />

          <p className="text-base text-neutral-500">
            Our eye clinic is dedicated to providing exceptional care to our
            patients. We are looking for individuals who share our passion for
            helping people and improving their quality of life. Join our team
            and become a part of something meaningful.
          </p>
        </div>

        {/* Image Container - Full width on mobile, 50% on desktop */}
        <div className="w-full md:w-[50%] order-1 md:order-2 mb-6 md:mb-0">
          <Image
            src={MedicalTeamImage}
            alt="Medical professionals shaking hands"
            width={585}
            height={390}
            className="w-full h-auto rounded-lg shadow-sm"
            priority
          />
        </div>
      </div>

      {/* Job Postings Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-16">
        <div className="flex flex-col items-center mx-auto max-w-2xl">
          <div className="text-brand-subheader text-center text-3xl md:text-4xl font-bold mb-2">
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
