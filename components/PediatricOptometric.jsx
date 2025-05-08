"use client";
import Image from "next/image";
import { TfiCheckBox } from "react-icons/tfi";
import { PediatricEyeCareImage } from "../constants/Images";
import { useState, useEffect } from "react";

const PediatricOptometric = () => {
  const [experienceCount, setExperienceCount] = useState(0);
  const [staffCount, setStaffCount] = useState(0);
  const [patientsCount, setPatientsCount] = useState(0);

  // Reusable counter animation function
  const animateCounter = (setter, maxValue, increment, duration) => {
    const steps = Math.ceil(maxValue / increment);
    const intervalTime = duration / steps;

    let count = 0;
    const interval = setInterval(() => {
      count += increment;
      if (count >= maxValue) {
        setter(maxValue);
        clearInterval(interval);
      } else {
        setter(count);
      }
    }, intervalTime);

    return interval;
  };

  useEffect(() => {
    // Start animations when component mounts
    const expInterval = animateCounter(setExperienceCount, 10, 1, 1000);
    const staffInterval = animateCounter(setStaffCount, 10, 1, 1000);
    const patientsInterval = animateCounter(setPatientsCount, 10000, 500, 1500);

    // Clean up intervals on component unmount
    return () => {
      clearInterval(expInterval);
      clearInterval(staffInterval);
      clearInterval(patientsInterval);
    };
  }, []);

  const servicesList = [
    "Pediatric Eye Exams",
    "Friendly and Caring Staff",
    "Vision Therapy Services",
    "State-of-the-Art Facilities",
    "Myopia Control Solutions",
    "Convenient Locations",
  ];

  const statsData = [
    {
      value: experienceCount,
      suffix: "+",
      label: "Years of Experience",
    },
    {
      value: staffCount,
      suffix: "+",
      label: "Skilled Optometrists and Staff",
    },
    {
      value: patientsCount,
      suffix: "+",
      label: "Satisfied patients",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-6 lg:px-0 w-full max-w-6xl mx-auto">
      {/* Main content container - side by side on desktop, stacked on mobile */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Image container - full width on mobile, half on desktop */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-[4/3] lg:h-auto overflow-hidden rounded-lg shadow-md">
            <Image
              src={PediatricEyeCareImage}
              alt="Pediatric Eye Care Service"
              width={600}
              height={450}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Content container */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6 px-4 lg:px-10 pt-6 lg:pt-8">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-blue leading-tight font-poppins">
            Specialized Pediatric Optometric Services in Toronto
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-500">
            Our optometrists provide comprehensive eye exams and treatments for
            children.
          </p>

          {/* Services grid - 1 column on mobile, 2 on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-6">
            {servicesList.map((service, index) => (
              <div key={index} className="flex items-center gap-3">
                <TfiCheckBox className="text-brand-blue text-lg flex-shrink-0" />
                <p className="text-gray-500">{service}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200"></div>

          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mt-6">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:items-start"
              >
                <p className="text-4xl md:text-5xl font-bold text-brand-blue">
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </p>
                <p className="text-gray-500 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PediatricOptometric;
