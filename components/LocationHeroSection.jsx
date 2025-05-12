"use client";
import { locationHeroBeaches } from "constants/Images";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const LocationHeroSection = ({
  title,
  subtitle,
  desciption,
  ctaText,
  ctaLink,
  ctaClinic,
  ctaNumber,
  imageSrc,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="w-full bg-[#28305F]  ">
      <div className="max-w-7xl mx-auto flex lg:flex-row md:flex-row flex-col-reverse">
        <div className="lg:w-[50%] md:w-[50%] w-full  p-5 flex md:justify-between md:items-center">
          <div className="lg:max-w-[568px] lg:max-h-[446px]  md:max-w-full flex flex-col gap-4 text-white text-center lg:text-left md:text-left">
            <h1 className="font-poppins font-[700] text-[28px] md:text-[32px] lg:text-[40px] text-white">
              {title}
            </h1>
            <p className="lg:text-base md:text-base text-[14px] font-semibold">
              {subtitle}
            </p>
            <p className="lg:text-base md:text-base text-[14px] font-[400]">
              {typeof desciption === "string" ? desciption : desciption}
            </p>
            <div className="flex flex-col lg:flex-row md:flex-row gap-4 lg:gap-5 md:gap-5 w-full items-center lg:items-start md:items-start">
              <Link
                href={ctaLink}
                className="py-[16px] px-[32px] text-center w-[218px] text-nowrap h-[56px] bg-combination-100 text-white rounded-full font-bold"
              >
                {ctaText}
              </Link>
              <Link
                href={`tel:${ctaNumber}`}
                className="py-[16px] px-[32px] text-center w-[218px] text-nowrap h-[56px] border border-combination-100 text-combination-100 rounded-full font-bold"
              >
                {ctaClinic}
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:w-[50%] md:w-[50%] w-full">
          <Image
            src={imageSrc}
            alt="Location Hero"
            width={951}
            height={634}
            className="lg:max-w-[951px] lg:max-h-[634px] md:max-w-full md:max-h-full max-w-full max-h-full  "
          />
        </div>
      </div>
    </div>
  );
};

export default LocationHeroSection;
