import Link from "next/link";
import React from "react";

const Banner = ({
  title = "Schedule Your Eye Exam Today",
  description = "Take the first step toward clearer vision and healthier eyes. Book your appointment now.",
  buttonText = "Book Now",
  buttonUrl = "/book-eye-exam",
  backgroundImage = "/newsletter-bg.webp",
  overlayColor = "rgba(30, 40, 95, 0.7)",
}) => {
  return (
    <div
      className="relative w-full py-16 flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-base mb-8 tracking-wide">{description}</p>
        <Link
          href={buttonUrl}
          className="inline-block px-[30px] py-[15px] bg-combination-100 text-white font-semiboold rounded hover:bg-combination-200 transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Banner;
