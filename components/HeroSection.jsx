"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { slides } from "../constants/Constants";
const MotionLink = motion(Link);

const HeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

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
            activeSlide === index
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
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
          <div className="relative  flex md:items-end  md:justify-start items-center justify-center md:ml-[-140px] md:mt-[-80px] mt-0 ml-[0px] h-full">
            <div className="container mx-auto  md:px-8 flex">
              <div className="w-full text-neutral-900 animate-slide-up">
                {/* White box with border */}
                <div className="relative md:pl-8 pt-8 pb-12">
                  <div className="flex flex-col items-center md:items-start md:py-0 my-6">
                    <div className="flex flex-row items-center md:items-center mb-[-24px]">
                      <div className="flex items-center gap-5">
                        <div className="w-[335px] h-[15px] hidden md:block bg-white" />
                        {/* Icons */}
                        <div className="items-center gap-4 hidden md:flex">
                          {/* First icon - animate from top to bottom */}
                          <motion.div
                            key={`icon1-${activeSlide}`}
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
                            key={`icon2-${activeSlide}`}
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
                            key={`icon3-${activeSlide}`}
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
                    </div>
                    <div className="flex flex-row items-center md:items-center ">
                      <div className="w-[15px] h-[320px] bg-white hidden md:block" />
                      {/* Title and subtitle */}
                      <div className="flex flex-col md:pl-5 text-center md:text-left w-full md:p-0 pt-6 ">
                        <motion.h1
                          key={`title-${activeSlide}`}
                          initial={{ y: 60, opacity: 0 }}
                          className="font-lora text-[28px] md:text-[78px] font-bold text-brand-blue md:mb-2 mb-1 text-nowrap"
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            ease: "easeIn",
                            delay: 0.1,
                          }}
                        >
                          {slide.title}
                        </motion.h1>

                        <motion.h2
                          key={`subtitle-${activeSlide}`}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            ease: "easeIn",
                            delay: 0.1,
                          }}
                          initial={{ y: 60, opacity: 0 }}
                          className="font-lora text-[24px] font-semibold md:text-[40px] text-brand-blue md:mb-8 mb-6"
                        >
                          {slide.subtitle}
                        </motion.h2>
                      </div>
                    </div>
                    <div className="flex flex-row items-start -mt-[20px]">
                      <div className="flex flex-row items-center gap-8 justify-center ">
                        <div className="w-[193px] h-[15px] bg-white hidden md:block" />

                        <MotionLink
                          href={slide.buttonLink}
                          key={`button-${activeSlide}`}
                          initial={{ y: 60, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            duration: 0.9,
                            ease: "easeOut",
                            delay: 0.4,
                          }}
                          className="inline-block bg-combination-100 text-white hover:bg-brand-blue hover:text-combination-100 font-medium md:py-3 md:px-8 py-2 px-4 rounded transition-colors duration-200 shadow-button md:w-auto text-sm md:text-base"
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
        </div>
      ))}

      {/* Carousel indicators */}
      <div className="absolute md:bottom-8 bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 md:mt-0 pt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
              activeSlide === index ? "animate-in bg-white" : "bg-transparent"
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
