"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { optometrists } from "../constants/Constants";
import Image from "next/image";
import Link from "next/link";

export default function OptometristTeam() {
  const router = useRouter();

  const handleNavigation = (slug) => {
    router.push(`/team-members/${slug}`);
  };

  return (
    <div className="w-full bg-[#F6F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 items-center py-12">
          <h3 className="text-center  font-bold text-[#2D3B55] text-4xl">
            Our Optometrists
          </h3>
          <hr className="w-[65px] h-[2px] bg-combination-100" />
          <p className="text-neutral-500 font-bold text-base mb-8 text-center">
            Meet Toronto's 360 eyecare team of experienced and dedicated eye
            care professionals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {optometrists.map((doctor) => (
              <OptometristCard
                key={doctor.id}
                name={doctor.name}
                image={doctor.image}
                description={doctor.description}
                slug={doctor.slug}
                onReadMore={handleNavigation}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function OptometristCard({ name, image, description, slug, onReadMore }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded shadow-sm overflow-hidden flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div
          className={`transition-transform duration-300 ease-in-out ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        >
          <Image
            src={image}
            alt={name}
            className="object-cover w-full"
            width={450}
            height={500}
          />
        </div>
        {/* Bottom border on hover */}
        <div
          className={`absolute bottom-0 left-0 w-full h-2 transition-all duration-300 ${
            isHovered ? "bg-[#5BC4BC]" : "bg-transparent"
          }`}
        />
      </div>
      <Link
        href={`/team-members/${slug}`}
        className="font-semibold text-lg text-[#2D3B55] text-center bg-[#FAFAFA] py-3 mb-2 cursor-pointer"
      >
        {name}
      </Link>

      <div className="p-6 text-center flex-grow">
        <p className="text-gray-600 text-sm mb-10">{description}</p>
      </div>

      <div className="flex justify-center px-4 py-4 items-center border-t border-gray-300">
        <button
          className="text-[#5BC4BC] hover:text-[#4AA69F] font-medium text-sm cursor-pointer"
          onClick={() => onReadMore(slug)}
        >
          Read more
        </button>
      </div>
    </div>
  );
}
