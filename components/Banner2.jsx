"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUserMd } from "react-icons/fa";

const Banner2 = ({
  title = "Book Your Eye Exam Today  at Our Beaches Optometry!",
  description = "Whether you need a routine checkup, advanced dry eye treatment, pediatric eye care, or emergency services, our team is here to help.Take control of your eye health with 360 Eyecare Beaches.",
  rosedale = false,
  ctaText = "Book An Eye Exam",
  ctaLink = "/book-eye-exam",
}) => {
  return (
    <div className="w-full bg-combination-100 py-14  px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8">
        {/* Left: Icon + Heading */}
        <div className="flex  md:flex-row items-start md:items-start gap-4 text-white text-center md:text-left">
          <div className="text-5xl md:text-6xl mb-2 md:mb-0">
            <Image
              src="/Icons/bannerboy.png"
              alt="Banner Boy"
              width={64}
              height={64}
            />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-white md:w-[380px] w-full">
              {title}
            </h2>
            <p className="text-lg font-medium text-left mt-2">
              <span className="font-bold">Rosedale: </span>

              <span className="font-normal text-white hover:text-combination-200">
                416-901-2725
              </span>
            </p>
            <p className="text-lg font-medium text-left">
              <span className="font-bold">Beaches: </span>
              <span className="font-normal text-white hover:text-combination-200">
                416-698-3937
              </span>
            </p>
          </div>
        </div>

        {/* Center: Description */}
        <div className="text-white  md:text-left max-w-md lg:max-w-md my-4 md:my-0">
          <p className="text-base md:text-lg leading-normal">{description}</p>
        </div>

        {/* Right: CTA Button */}
        <div className="w-full md:w-auto  shrink-0">
          <Link href={ctaLink}>
            <button className="bg-combination-200  text-white hover:text-combination-100  hover:bg-white font-bold py-3 px-8 rounded-full transition-colors duration-200 shadow-md">
              {ctaText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
