import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Image from "next/image";

import { ImageSlider } from "./common/ImageSlider";
import { IrritatingEyeImage } from "../constants/Images";
import Link from "next/link";

const LatestEyeCareInsight = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex flex-col lg:flex-row  items-start gap-8">
          {/* Left Side - Blog Content */}
          <div className="w-full lg:w-[60%]">
            <div className="flex flex-col mb-10">
              <h2 className="text-4xl font-bold text-brand-blue mb-2 font-poppins">
                Latest Eye Care Insights
              </h2>
              <div className="h-[2px] w-[65px] bg-combination-100 mb-4"></div>
              <p className="text-neutral-500 font-normal text-base">
                Stay informed with our blog posts covering various eye care
                topics.
              </p>
            </div>

            {/* Blog Post */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Post Image */}
              <div className="w-full md:w-[70%]">
                <Image
                  src={IrritatingEyeImage}
                  alt="Man with eye irritation"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded"
                />
              </div>

              {/* Post Content */}
              <div className="w-full md:w-2/3 flex flex-col ">
                <div className="flex items-center gap-2 text-neutral-500 text-sm">
                  <div className="flex items-center gap-2">
                    <MdOutlineDateRange className="text-combination-100" />
                    <Link
                      href="https://www.360eyecare.ca/affordable-laser-eye-surgery-toronto-options/"
                      className=" hover:text-combination-100"
                    >
                      April 21, 2025
                    </Link>
                  </div>
                  //
                  <div className="flex items-center gap-2">
                    <FaUser className="text-combination-100" />
                    <Link href="/" className=" hover:text-combination-100">
                      360Eyecare
                    </Link>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-brand-blue">
                  Top 10 Most Common Eye Emergencies and How to Handle Them
                </h3>

                <p className="text-neutral-600">
                  Unlike a broken arm or bleeding wound, when it comes to eye
                  emergencies, we are often caught between "maybe it..."
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-[28%] w-full aspect-[4/4]">
            <ImageSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestEyeCareInsight;
