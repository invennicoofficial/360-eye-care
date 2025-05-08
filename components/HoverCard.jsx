"use client";
import { useState } from "react";

// Reusable HoverCard component
const HoverCard = ({
  title,
  description,
  iconSrc,
  iconAlt,
  listItems = [],
  linkHref = "#",
  linkText = "Read More",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Object mapping for icon SVGs to avoid repetitive conditionals
  const iconMap = {
    glasses: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#36B5AD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
        aria-label={iconAlt || "Glasses icon"}
      >
        <path d="M6 4h10l4 4-4 4H6L2 8l4-4z" />
        <circle cx="22" cy="8" r="2" />
        <path d="M18 12v4c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-4" />
      </svg>
    ),
    history: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#36B5AD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
        aria-label={iconAlt || "History icon"}
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    shopping: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#36B5AD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
        aria-label={iconAlt || "Shopping icon"}
      >
        <path d="M20 6h-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" />
        <circle cx="10" cy="12" r="2" />
        <circle cx="14" cy="12" r="2" />
      </svg>
    ),
  };

  return (
    <div
      className="relative bg-white rounded-md shadow-md transition-all duration-300 ease-in-out w-full md:w-[420px] h-auto md:h-[500px]"
      style={{
        transform: isHovered ? "translateY(-10px)" : "translateY(0px)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon Box */}
      <div
        className={`absolute top-0 left-1/2 bg-transparent/10 p-2 shadow-sm opacity-100 rounded-md transition-all duration-300 ease-in-out ${
          isHovered
            ? "border-combination-100 border-2 border-dotted animate-pop-and-return"
            : " border-2 border-dotted border-white "
        }`}
        style={{
          transform: isHovered
            ? "translate(-50%, -50%)" // Let keyframes control scale and y-translate
            : "translate(-50%, -50%)",
          zIndex: isHovered ? 0 : 1,
        }}
      >
        <div className="overflow-hidden rounded bg-white">
          <div className="w-16 h-16 flex items-center justify-center">
            {iconMap[iconSrc] || <div aria-hidden="true" />}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-14 px-4 md:px-6 pb-6">
        <h3 className="text-center text-xl font-semibold text-combination-200 text-wrap mt-4 mb-3">
          {title}
        </h3>

        {description && (
          <p className="text-center text-gray-600 text-wrap mb-4">
            {description}
          </p>
        )}

        {listItems.length > 0 && (
          <ul className="list-disc list-inside space-y-2 mb-6">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="text-neutral-500 text-base font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="flex justify-center mt-4">
          <a
            href={linkHref}
            className="bg-combination-200 hover:bg-combination-100 text-white py-3 px-6 rounded-sm transition-colors font-bold"
          >
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
