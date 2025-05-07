"use client";
import React from "react";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";
import slugify from "slugify";

const BrandList = ({ brands }) => {
  // For mobile view, distribute brands more evenly
  const groupBrandsForMobile = () => {
    const total = brands.length;
    const itemsPerColumn = Math.ceil(total / 2);
    return [brands.slice(0, itemsPerColumn), brands.slice(itemsPerColumn)];
  };

  // For desktop view, maintain the original distribution
  const groupBrandsForDesktop = () => {
    const columns = [[], [], []];
    const total = brands.length;
    const counts = [5, 4, total - 9];

    let currentIndex = 0;
    for (let i = 0; i < counts.length; i++) {
      columns[i] = brands.slice(currentIndex, currentIndex + counts[i]);
      currentIndex += counts[i];
    }

    return columns;
  };

  // Use different groupings based on screen size with CSS display properties
  const mobileColumns = groupBrandsForMobile();
  const desktopColumns = groupBrandsForDesktop();

  return (
    <div className="w-full py-6 md:py-8 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        {/* Mobile Layout - 2 columns */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {mobileColumns.map((column, columnIndex) => (
            <div key={`mobile-column-${columnIndex}`} className="flex flex-col">
              <div className="flex flex-col space-y-3">
                {column.map((brand, brandIndex) => (
                  <div
                    key={`mobile-brand-${columnIndex}-${brandIndex}`}
                    className="flex items-center"
                  >
                    <Link
                      href={`#${slugify(brand.name, { lower: true })}`}
                      className="flex items-center text-[#204066] hover:text-teal-500 transition-colors"
                    >
                      <span className="text-[#41bdc8] mr-1.5">
                        <FaChevronCircleRight size={12} />
                      </span>
                      <span className="font-medium text-sm">{brand.name}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout - 3 columns with dividers */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {desktopColumns.map((column, columnIndex) => (
            <div key={`column-${columnIndex}`} className="flex flex-row">
              <div className="flex flex-col space-y-4 pr-4">
                {column.map((brand, brandIndex) => (
                  <div
                    key={`brand-${columnIndex}-${brandIndex}`}
                    className="flex items-center"
                  >
                    <Link
                      href={`#${slugify(brand.name, { lower: true })}`}
                      className="flex items-center text-[#204066] hover:text-teal-500 transition-colors"
                    >
                      <span className="text-[#41bdc8] mr-2">
                        <FaChevronCircleRight size={13} />
                      </span>
                      <span className="font-medium">{brand.name}</span>
                    </Link>
                  </div>
                ))}
              </div>

              {columnIndex < desktopColumns.length - 1 && (
                <div className="flex justify-center pl-14 items-center">
                  <hr className="w-[2px] h-full bg-gray-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandList;
