"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BrandCard = ({ brand }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-6 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-lg  ${
        isHovered ? "border-4 border-blue-900" : "border-4 border-gray-200"
      } rounded-lg shadow flex flex-col h-full`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="flex justify-center mb-4">
        <Image
          src={brand.logoSrc}
          alt={`${brand.name} logo`}
          width={200}
          height={60}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold  mb-2 text-blue-900">
        {brand.name}
      </h3>
      <h4 className="text-lg font-medium text-blue-900 mb-4">
        {brand.tagline}
      </h4>
      <p className="text-gray-600 mb-6 flex-grow">{brand.description}</p>
      <Link
        href={brand.catalogLink}
        className="inline-block bg-navy-700 hover:bg-navy-800 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 mt-auto"
      >
        {brand.name} Catalog
      </Link>
    </div>
  );
};

export default BrandCard;
