"use client";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import {
  ColorfulGlassesImage,
  eyeemergenciesImage,
  PatientScaledImage,
} from "../constants/Images";
import { selectionGuideData } from "../constants/Constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const SelectionGuide = () => {
  return (
    <div className="w-full bg-brand-blue px-4 py-16 md:py-20">
      <div className="flex flex-col gap-4 max-w-6xl mx-auto"></div>

      <div className="max-w-7xl mx-auto  flex flex-col lg:flex-row gap-8 justify-center">
        <div className="w-full lg:w-auto flex flex-wrap  gap-9 md:gap-12">
          {selectionGuideData.map((card) => (
            <FeatureCard
              key={card.id}
              id={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <div className="w-full lg:w-80 flex justify-center">
          <div className="relative w-[350px] h-auto md:h-full max-h-[569px]">
            <Image
              src={ColorfulGlassesImage}
              alt="eye-emergencies-image"
              width={350}
              height={600}
              className="w-[350px] h-[600px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Separate component for the feature card with hover effects
const FeatureCard = ({ id, icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full sm:w-[380px] sm:h-[249px] flex flex-col gap-2 transition-transform duration-300 ease-out"
      style={{ transform: isHovered ? "scale(0.98)" : "scale(1)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`border-t-4 transition-colors duration-300 ${
          isHovered
            ? "bg-combination-100 border-combination-100"
            : "border-brand-line"
        }`}
      />
      <div className="p-6 md:p-10 flex flex-col gap-3 bg-brand-line">
        <div className="flex justify-between items-start">
          <Image src={icon} alt={`Feature Icon ${id}`} width={62} height={62} />
          <p
            className={` ${
              playfair.className
            } text-5xl md:text-6xl text-brand-blue transform transition-transform duration-300 ease-in-out ${
              isHovered ? "scale-90" : "scale-100"
            }`}
          >
            {id}
          </p>
        </div>

        <p className="text-xl font-bold text-white">{title}</p>
        <p className="text-white text-opacity-80">{description}</p>
      </div>
    </div>
  );
};

export default SelectionGuide;
