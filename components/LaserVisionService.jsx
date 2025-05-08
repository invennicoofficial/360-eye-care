"use client";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";

const LaserVisionService = ({ data, image, imageTitle, imageDesc }) => {
  return (
    <div className="w-full bg-brand-blue px-4 py-16 md:py-20">
      <div className="max-w-7xl mx-auto mt-12 flex flex-col lg:flex-row gap-8 justify-center">
        <div className="w-full lg:w-auto flex flex-wrap justify-center gap-6 md:gap-8">
          {data.map((card) => (
            <FeatureCard
              key={card.id}
              id={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <div className="w-full lg:w-[600px] flex justify-center">
          <div className="flex flex-col">
            <Image
              src={image}
              alt="patient-scaled-image"
              width={380}
              height={579}
              className="object-cover w-full h-full"
            />
            <div className="flex flex-col gap-3 bg-combination-100 p-8 justify-center items-center text-white">
              <p className="text-center text-2xl text-nowrap font-bold">
                {imageTitle}
              </p>
              <p className="text-center font-normal text-opacity-80 text-lg">
                {imageDesc}
              </p>
            </div>
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
            className={` font-lora text-5xl md:text-6xl text-brand-blue transform transition-transform duration-300 ease-in-out ${
              isHovered ? "scale-90" : "scale-100"
            }`}
          >
            {id}
          </p>
        </div>

        <p className="text-lg text-nowrap font-bold text-white">{title}</p>
        <p className="text-white text-opacity-80">{description}</p>
      </div>
    </div>
  );
};

export default LaserVisionService;
