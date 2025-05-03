"use client";
import React from "react";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";
import slugify from "slugify";

const BrandList = ({ brands }) => {
  const groupBrandsIntoColumns = () => {
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

  const brandColumns = groupBrandsIntoColumns();

  return (
    <div className="w-full  py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brandColumns.map((column, columnIndex) => (
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

              {columnIndex < brandColumns.length - 1 && (
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
