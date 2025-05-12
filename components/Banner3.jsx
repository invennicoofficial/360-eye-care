import Link from "next/link";
import React from "react";

const Banner3 = () => {
  return (
    <div className=" mx-auto md:w-[1200px] md:h-[462px] w-[335px] h-[400px] px-4 py-8 md:px-0 md:py-0 bg-combination-100 flex justify-center items-center rounded-[25px]">
      <div className="w-full md:max-w-[669px] text-white flex flex-col gap-4 md:gap-6 items-center text-center p-4 md:p-0">
        <h2 className="font-semibold text-[36px] md:text-[48px] text-white ">
          Book Your Eye Exam Today!
        </h2>
        <p className="text-sm md:text-[16px] max-w-full">
          Experience the best vision care at 360 Eyecare, serving Yorkville and
          Rosedale. Whether you need a routine check-up, treatment for dry eye,
          pediatric eye care, or emergency services, we're here to help.
        </p>
        <Link
          href="https://360rosedale.mypatientportal.xyz/dashboard"
          className="bg-combination-200 font-semibold text-sm md:text-base 
                     py-2 px-6 rounded-full w-full max-w-[267px] 
                     h-[52px] flex justify-center items-center 
                     cursor-pointer hover:opacity-90 transition-opacity"
        >
          Book an Eye Exam Today
        </Link>
      </div>
    </div>
  );
};

export default Banner3;
