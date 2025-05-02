"use client";
import Image from "next/image";
import {
  UnderstandImage1,
  UnderstandImage2,
  UnderstandImage3,
  UnderstandImage4,
} from "../constants/Images";
import { TfiBriefcase } from "react-icons/tfi";
import { TfiUser } from "react-icons/tfi";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState, useCallback } from "react";

const PediatricOptometristsUI = () => {
  const [experience, setExperience] = useState(0);
  const [exams, setExams] = useState(0);
  const statsData = [
    {
      icon: <TfiBriefcase size={40} />,
      number: `${experience}+`,
      title: "Years of Experience",
    },
    {
      icon: <TfiUser size={40} />,
      number: `${exams}+`,
      title: "Pediatric Eye Exams",
    },
  ];

  // Improved counter implementation with useCallback
  useEffect(() => {
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

    const expInterval = animateCounter(setExperience, 10, 1, 1000);
    const examInterval = animateCounter(setExams, 1000, 50, 1000);

    return () => {
      clearInterval(expInterval);
      clearInterval(examInterval);
    };
  }, []);

  const benefitsList = [
    "Specialized exams tailored to children's unique eye health needs.",
    "Gentle and friendly approach to ensure your child feels comfortable.",
    "Early detection and treatment of vision problems for optimal development.",
    "State-of-the-art technology for accurate and thorough evaluations.",
    "Focus on patient education and preventive care.",
    "Expertise in managing pediatric eye conditions and vision therapy.",
    "Personalized care plans to address your child's specific vision needs.",
    "Trusted by families in Toronto for exceptional pediatric eye care.",
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          {/* Left Column */}
          <div className="md:max-w-xl lg:max-w-2xl w-full">
            <h1 className="text-3xl lg:text-4xl font-bold text-combination-200 mb-4 max-w-lg">
              Why Choose Our Pediatric Optometrists in Toronto?
            </h1>
            <div className="w-24 h-1 bg-combination-100 mb-8"></div>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* Feature Image */}
              <div className="mb-4 sm:mb-0">
                <Image
                  src={UnderstandImage1}
                  alt="Child having eye examination"
                  width={328}
                  height={220}
                  className="w-full sm:w-80 h-auto object-cover rounded-lg"
                  priority
                />
              </div>

              {/* Introduction and CTA */}
              <div className="flex flex-col justify-between p-2 sm:p-4">
                <p className="text-gray-600 mb-6 text-base">
                  Our pediatric optometrists in Toronto are dedicated to
                  exceptional care for your child's vision. With specialized
                  expertise in pediatric eye care and a focus on gentle,
                  compassionate treatment, we ensure a positive experience for
                  your child.
                </p>

                <button
                  className="bg-combination-100 text-white hover:text-combination-100 px-6 py-3 rounded-full hover:bg-white hover:border hover:border-combination-100 transition duration-300 w-max"
                  aria-label="Book Your Pediatric Eye Examination"
                >
                  Book Your Pediatric Eye Examination
                </button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex flex-wrap gap-12 mt-12 justify-between mr-20">
              {statsData.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="flex flex-row gap-3 items-center mb-2">
                    <div className="text-combination-100">{item.icon}</div>
                    <p className="text-combination-200 text-3xl lg:text-4xl font-bold">
                      {item.number}
                    </p>
                  </div>
                  <p className="text-neutral-500 text-lg">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-auto">
            {/* Image Gallery */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="w-full sm:w-64 h-48 mb-4 sm:mb-0">
                <Image
                  src={UnderstandImage2}
                  alt="Modern eye examination equipment"
                  width={256}
                  height={192}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-full sm:w-64 h-48">
                <Image
                  src={UnderstandImage3}
                  alt="Optometrist conducting eye examination"
                  width={256}
                  height={192}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-8">
              <div className="bg-gray-50 px-6 py-3 rounded-lg mb-6 inline-block">
                <h3 className="text-gray-500 font-medium">
                  Our Pediatric Eye Exams
                </h3>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-combination-200 mb-6">
                Comprehensive Care for Your Child's Vision Health
              </h2>

              <ul className="space-y-3">
                {benefitsList.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaArrowRightLong
                      size={16}
                      className="text-combination-100 mt-1.5"
                    />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PediatricOptometristsUI;
