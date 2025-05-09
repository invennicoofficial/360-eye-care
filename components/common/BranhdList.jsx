"use client";

import React from "react";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";
import slugify from "slugify";

const BrandList = ({
  brands = [
    { name: "LaFont" },
    { name: "Tom Ford" },
    { name: "Maui Jim" },
    { name: "Oakley" },
    { name: "Persol" },
    { name: "Kate Spade" },
    { name: "Michael Kors" },
    { name: "Ray-Ban Kids" },
    { name: "Versace" },
    { name: "Prada" },
    { name: "Burberry" },
    { name: "Rudy Project" },
    { name: "Ray-Ban" },
  ],
}) => {
  // For desktop view, distribute brands into 3 columns
  const firstColumn = brands.slice(0, 5);
  const secondColumn = brands.slice(5, 9);
  const thirdColumn = brands.slice(9);

  return (
    <div className="w-full py-10 px-8 md:px-0">
      <div className="max-w-6xl mx-auto">
        {/* Mobile Layout - 2 columns */}
        <div className="grid grid-cols-1 gap-6  md:hidden">
          <div className="flex flex-col space-y-4">
            {brands
              .slice(0, Math.ceil(brands.length / 2))
              .map((brand, index) => (
                <div
                  key={`mobile-brand-left-${index}`}
                  className="flex items-center"
                >
                  <Link
                    href={`#${slugify(brand.name, { lower: true })}`}
                    className="flex items-center text-[#204066] hover:text-combination-100 transition-colors"
                  >
                    <span className="text-[#41bdc8] mr-2">
                      <FaChevronCircleRight size={16} />
                    </span>
                    <span className="text-base font-extrabold">
                      {brand.name}
                    </span>
                  </Link>
                </div>
              ))}
          </div>
          <div className="flex flex-col space-y-4">
            {brands.slice(Math.ceil(brands.length / 2)).map((brand, index) => (
              <div
                key={`mobile-brand-right-${index}`}
                className="flex items-center"
              >
                <Link
                  href={`#${slugify(brand.name, { lower: true })}`}
                  className="flex items-center text-slate-700 hover:text-combination-100 transition-colors"
                >
                  <span className="text-combination-100 mr-2">
                    <FaChevronCircleRight size={16} />
                  </span>
                  <span className="text-base font-extrabold">{brand.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - 3 columns with dividers */}
        <div className="hidden md:flex justify-between">
          {/* First Column */}
          <div className="w-1/3 flex flex-col space-y-4 pr-4">
            {firstColumn.map((brand, index) => (
              <div key={`brand-col1-${index}`} className="flex items-center">
                <Link
                  href={`#${slugify(brand.name, { lower: true })}`}
                  className="flex items-center text-[#204066] hover:text-combination-100 transition-colors"
                >
                  <span className="text-[#41bdc8] mr-2">
                    <FaChevronCircleRight size={16} />
                  </span>
                  <span className="text-base font-extrabold">{brand.name}</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300 mx-4"></div>

          {/* Second Column */}
          <div className="w-1/3 flex flex-col space-y-4 px-4">
            {secondColumn.map((brand, index) => (
              <div key={`brand-col2-${index}`} className="flex items-center">
                <Link
                  href={`#${slugify(brand.name, { lower: true })}`}
                  className="flex items-center text-[#204066] hover:text-combination-100 transition-colors"
                >
                  <span className="text-[#41bdc8] mr-2">
                    <FaChevronCircleRight size={16} />
                  </span>
                  <span className="text-base font-extrabold">{brand.name}</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300 mx-4"></div>

          {/* Third Column */}
          <div className="w-1/3 flex flex-col space-y-4 pl-4">
            {thirdColumn.map((brand, index) => (
              <div key={`brand-col3-${index}`} className="flex items-center">
                <Link
                  href={`#${slugify(brand.name, { lower: true })}`}
                  className="flex items-center text-slate-700 hover:text-combination-100 transition-colors"
                >
                  <span className="text-combination-100 mr-2">
                    <FaChevronCircleRight size={16} />
                  </span>
                  <span className="text-base font-extrabold">{brand.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandList;
