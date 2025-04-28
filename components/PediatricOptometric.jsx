import React from "react";
import Image from "next/image";
import { TfiCheckBox } from "react-icons/tfi";
import { PediatricEyeCareImage } from "../constants/Images";

const PediatricOptometric = () => {
  return (
    <div className="py-12 px-4 md:px-6 lg:px-0 w-full max-w-6xl mx-auto">
      {/* Main content container - side by side on desktop, stacked on mobile */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Image container - full width on mobile, half on desktop */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-[4/3] lg:h-auto overflow-hidden">
            <Image
              src={PediatricEyeCareImage} // Replace with your actual image path
              alt="Pediatric Eye Care Service"
              width={600}
              height={450}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Content container */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6 px-10 pt-8 mr-10">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-blue leading-tight">
            Specialized Pediatric Optometric Services in Toronto
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-500">
            Our optometrists provide comprehensive eye exams and treatments for
            children.
          </p>

          {/* Services grid - 1 column on mobile, 2 on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-6">
            <div className="flex items-center gap-3">
              <TfiCheckBox className="text-gray-500 text-lg" />
              <p className="text-gray-500">Pediatric Eye Exams</p>
            </div>
            <div className="flex items-center gap-3">
              <TfiCheckBox className="text-gray-500 text-lg" />
              <p className="text-gray-500">Friendly and Caring Staff</p>
            </div>
            <div className="flex items-center gap-3">
              <TfiCheckBox className="text-gray-500 text-lg" />
              <p className="text-gray-500">Vision Therapy Services</p>
            </div>
            <div className="flex items-center gap-3">
              <TfiCheckBox className="text-gray-500 text-lg" />
              <p className="text-gray-500">State-of-the-Art Facilities</p>
            </div>
            <div className="flex items-center gap-3">
              <TfiCheckBox className="text-gray-500 text-lg" />
              <p className="text-gray-500">Myopia Control Solutions</p>
            </div>
            <div className="flex items-center gap-3">
              <TfiCheckBox className="text-gray-500 text-lg" />
              <p className="text-gray-500">Convenient Locations</p>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200  "></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mt-6">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-4xl md:text-5xl font-bold  text-brand-blue">
                10+
              </p>
              <p className="text-gray-500 mt-2">Years of Experience</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-4xl md:text-5xl font-bold  text-brand-blue">
                10+
              </p>
              <p className="text-gray-500 mt-2">
                Skilled Optometrists and Staff
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-4xl md:text-5xl font-bold  text-brand-blue">
                10000+
              </p>
              <p className="text-gray-500 mt-2">Satisfied patients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}

      {/* Stats section */}
    </div>
  );
};

export default PediatricOptometric;
