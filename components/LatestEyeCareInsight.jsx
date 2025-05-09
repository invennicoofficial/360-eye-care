"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Image from "next/image";

import { BeforeAfterSlider } from "./BeforeSlider";
import { IrritatingEyeImage } from "../constants/Images";

const LatestEyeCareInsight = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Left Side - Blog Content */}
          <div className="w-full lg:w-[60%]">
            <div className="flex flex-col mb-10">
              <h2 className="text-4xl font-bold text-brand-blue mb-2 font-poppins">
                Latest Eye Care Insights
              </h2>
              <div className="h-1 w-32 bg-combination-100 mb-4"></div>
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
              <div className="w-full md:w-2/3 flex flex-col gap-4">
                <div className="flex items-center gap-6 text-neutral-500 text-sm">
                  <div className="flex items-center gap-2">
                    <MdOutlineDateRange className="text-combination-100" />
                    <span>April 21, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="text-combination-100" />
                    <span>360Eyecare</span>
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

          {/* Right Side - Before/After Slider */}
          <div className="md:w-[40%] w-full">
            {" "}
            <BeforeAfterSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestEyeCareInsight;
