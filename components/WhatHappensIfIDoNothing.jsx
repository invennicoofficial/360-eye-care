"use client";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { whatifidonothing } from "../constants/Images";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Placeholder for images until you have actual imports
const placeholderIcons = {
  discomfort: "/api/placeholder/62/62",
  qualityOfLife: "/api/placeholder/62/62",
  vision: "/api/placeholder/62/62",
  corneal: "/api/placeholder/62/62",
  inflammation: "/api/placeholder/62/62",
  contactLenses: "/api/placeholder/62/62",
  tearFilm: "/api/placeholder/62/62",
};

// Replace these with your actual icon imports later
// These will be light blue icons that match your design

// Data for the consequence cards
const consequenceData = [
  {
    id: "01",
    icon: placeholderIcons.discomfort,
    title: "Persistent Discomfort",
    description:
      "Symptoms like dryness, irritation, burning, and redness may worsen over time, leading to ongoing discomfort and reduced quality of life.",
  },
  {
    id: "02",
    icon: placeholderIcons.qualityOfLife,
    title: "Reduced Quality of Life",
    description:
      "Chronic eye discomfort and visual disturbances can significantly impact daily activities, work performance, and overall well-being.",
  },
  {
    id: "03",
    icon: placeholderIcons.vision,
    title: "Compromised Vision",
    description:
      "Severe or untreated MGD may lead to blurry vision, affecting visual clarity and quality.",
  },
  {
    id: "04",
    icon: placeholderIcons.corneal,
    title: "Corneal Damage",
    description:
      "Chronic dryness and tear film instability can increase the risk of corneal damage, including epithelial erosions and corneal ulcers.",
  },
  {
    id: "05",
    icon: placeholderIcons.inflammation,
    title: "Inflammation",
    description:
      "Inadequate lubrication and inflammation associated with MGD can contribute to ongoing eyelid (blepharitis) and eye surface (conjunctivitis) inflammation, potentially causing long-term damage.",
  },
  {
    id: "06",
    icon: placeholderIcons.contactLenses,
    title: "Complications with Contact Lenses",
    description:
      "Individuals who wear contact lenses may experience increased discomfort, dryness, and intolerance to lenses due to compromised tear film and ocular surface health.",
  },
  {
    id: "07",
    icon: placeholderIcons.tearFilm,
    title: "Decreased Tear Film Stability",
    description:
      "Without proper gland function, the tear film may become unstable, increasing tear evaporation and exacerbating dry eye symptoms.",
  },
];

const WhatHappensIfIDoNothing = () => {
  return (
    <div className="w-full bg-brand-blue px-4 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Title section */}
        <div className="md:ml-12 ml-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What happens if I do nothing?
          </h2>
          <div className="w-16 h-0.5 bg-combination-100 mt-2" />
          <p className="text-white text-opacity-80 mt-4">
            If you choose not to address MGD and leave it untreated, several
            potential consequences may occur:
          </p>
        </div>

        {/* Content section */}
        <div className="mt-12 flex flex-col lg:flex-row gap-8 justify-center ">
          {/* Cards container - left side */}
          <div className="w-full lg:w-auto flex flex-col gap-6 md:gap-8">
            {/* First row - 2 cards */}
            <div className="flex flex-wrap gap-6 md:gap-8">
              {consequenceData.slice(0, 2).map((card) => (
                <ConsequenceCard
                  key={card.id}
                  id={card.id}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>

            {/* Second row - 2 cards */}
            <div className="flex flex-wrap gap-6 md:gap-8">
              {consequenceData.slice(2, 4).map((card) => (
                <ConsequenceCard
                  key={card.id}
                  id={card.id}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>

            {/* Third row - 2 cards (not 3) */}
            <div className="flex flex-wrap gap-6 md:gap-8">
              {consequenceData.slice(4, 6).map((card) => (
                <ConsequenceCard
                  key={card.id}
                  id={card.id}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>

          {/* Right side container for image and last card */}
          <div className="w-full lg:w-80 flex flex-col gap-6 md:gap-8">
            {/* Image container */}
            <div className="flex justify-center">
              <div className="relative w-80 h-auto md:h-full max-h-[510px]">
                <Image
                  src={whatifidonothing}
                  alt="Patient eye examination"
                  width={380}
                  height={569}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Last card below the image */}
            <div className="flex justify-center">
              <ConsequenceCard
                key={consequenceData[6].id}
                id={consequenceData[6].id}
                icon={consequenceData[6].icon}
                title={consequenceData[6].title}
                description={consequenceData[6].description}
              />
            </div>
          </div>
        </div>

        {/* Bottom info text */}
        <div className="mt-8 text-white text-opacity-80 md:ml-12 ml-0">
          <p>
            MGD is a chronic condition that typically requires ongoing
            management to control symptoms and prevent complications. Seeking
            treatment and adopting appropriate lifestyle modifications can help
            alleviate discomfort, improve tear film stability, and maintain
            long-term eye health.
          </p>
        </div>
      </div>
    </div>
  );
};

// Component for each consequence card with hover effects
const ConsequenceCard = ({ id, icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full sm:w-[410px] flex flex-col gap-2 transition-transform duration-300 ease-out"
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
      <div className="p-6 flex flex-col gap-3 bg-brand-line h-auto">
        <div className="flex justify-between items-start">
          <Image
            src={icon}
            alt={`Consequence Icon ${id}`}
            width={62}
            height={62}
          />
          <p
            className={`${
              playfair.className
            } text-5xl text-[#31505E] opacity-30 transform transition-transform duration-300 ease-in-out ${
              isHovered ? "scale-90" : "scale-100"
            }`}
          >
            {id}
          </p>
        </div>

        <p className="text-xl font-bold text-white mt-2">{title}</p>
        <p className="text-white text-opacity-80 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default WhatHappensIfIDoNothing;
