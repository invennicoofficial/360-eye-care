import { FounderImage } from "constants/Images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MeetOurFounder = ({ title, description, ctaText, ctaLink }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-14">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Image Container */}
        <div className="w-full md:w-[40%]">
          <Image
            src={FounderImage}
            alt="Founder"
            width={483}
            height={566}
            className="w-full"
          />
        </div>

        {/* Text Container */}
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <h1 className="font-poppins font-[700] text-2xl md:text-[32px] lg:text-[36px] text-[#28305F]">
            {title}
          </h1>

          <p className="text-sm md:text-base font-[400] text-neutral-500 tracking-wide">
            {description}
          </p>

          <Link
            href={ctaLink}
            className="w-full flex justify-center md:justify-start mt-2"
          >
            <div className="py-4 px-8 w-[267px] md:w-auto text-center bg-[#28305F] text-white rounded-full font-bold">
              {ctaText}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MeetOurFounder;
