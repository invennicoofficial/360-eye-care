"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { slides } from "../constants/Constants";
const HeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const MotionLink = motion(Link);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 100000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="relative w-full h-[289px] md:h-[750px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            activeSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt="Background image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Content */}
          <div className="relative flex items-center h-full">
            <div className="container mx-auto px-4 md:px-8 flex">
              <div className="w-full text-neutral-900 animate-slide-up">
                {/* White box with border */}
                <div className="relative pl-4 md:pl-8 pt-8 pb-12">
                  <div className="flex flex-col">
                    <div className="flex items-end">
                      <div className="w-[335px] h-[15px] hidden md:block bg-white" />
                      {/* Icons */}
                      <div className="items-center gap-4 mb-6 hidden md:flex">
                        {/* First icon - animate from top to bottom */}
                        <motion.div
                          initial={{ y: -50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="w-14 h-14 text-primary-600 flex items-center justify-center"
                        >
                          <Image
                            src="/Icons/HeroIcon1.webp"
                            alt="Eye chart icon"
                            width={38}
                            height={53}
                          />
                        </motion.div>

                        {/* Middle icon - smooth fade/zoom in */}
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.9, ease: "easeInOut" }}
                          className="w-14 h-14 text-primary-600 flex items-center justify-center"
                        >
                          <Image
                            src="/Icons/HeroIcon2.webp"
                            alt="Eye examination icon"
                            width={48}
                            height={48}
                          />
                        </motion.div>

                        {/* Third icon - animate from bottom to top */}
                        <motion.div
                          initial={{ y: 50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="w-14 h-14 text-primary-600 flex items-center justify-center"
                        >
                          <Image
                            src="/Icons/HeroIcon3.webp"
                            alt="Eye test equipment icon"
                            width={68}
                            height={48}
                          />
                        </motion.div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <div className="w-[15px] h-[320px] bg-white hidden md:block" />
                      {/* Title and subtitle */}
                      <div className="flex flex-col md:pl-5 text-center md:text-left w-full">
                        <motion.h1
                          initial={{ y: 60, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="font-heading text-[42px] md:text-[78px] font-bold text-brand-blue mb-2"
                        >
                          {slide.title}
                        </motion.h1>

                        <motion.h2
                          initial={{ y: 60, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            duration: 1.1,
                            ease: "easeOut",
                            delay: 0.2,
                          }}
                          className="font-heading text-[28px] font-semibold md:text-[40px] text-brand-blue mb-8"
                        >
                          {slide.subtitle}
                        </motion.h2>
                      </div>
                    </div>
                    <div className="flex flex-row items-start gap-5 justify-center md:justify-start">
                      <div className="w-[193px] h-[15px] bg-white hidden md:block" />
                      <MotionLink
                        href={slide.buttonLink}
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.9,
                          ease: "easeOut",
                          delay: 0.4,
                        }}
                        className="inline-block bg-combination-100 text-white hover:bg-brand-blue hover:text-combination-100 font-medium py-3 px-8 rounded transition-colors duration-200 shadow-button"
                      >
                        {slide.buttonText}
                      </MotionLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
              activeSlide === index ? "bg-white" : "bg-transparent"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
