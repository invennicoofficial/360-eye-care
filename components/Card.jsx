"use client";
import Image from "next/image";
import { useState } from "react";

// Card Component
const Card = ({
  title,
  subtitle,
  description,
  logoImg,
  logo,
  catalogLink,
  isHighlighted = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
      relative bg-white shadow-sm p-5 transition-all duration-300 ease-out h-auto flex flex-col
      origin-center transform border-4 ${
        isHovered
          ? "-translate-y-2 shadow-lg border-combination-200 z-10 bg-combination-200"
          : "translate-y-0 border-gray-100"
      }
    `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {logoImg && (
        <div className="flex justify-center mb-4">
          <Image
            src={logoImg}
            alt={title}
            width={200}
            height={60}
            className="object-contain"
          />
        </div>
      )}
      {logo && (
        <div className="flex justify-center mb-4">
          <div className="h-12 flex items-center">{logo}</div>
        </div>
      )}

      <h3 className="text-xl font-bold text-combination-200 mb-2">{title}</h3>

      {subtitle && (
        <h4 className="text-md font-medium text-gray-700 mb-3">{subtitle}</h4>
      )}

      <p className="text-gray-600 mb-5 flex-grow">{description}</p>

      {catalogLink && (
        <div className="mt-auto">
          <button className="inline-block bg-combination-200 text-white py-2 px-4 rounded text-sm font-medium hover:bg-combination-100 transition-colors duration-200">
            {`${title} Catalog`}
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
