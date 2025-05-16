"use client";

import { pediatricEyeService } from "../constants/Constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const PediatricSlider = () => {
  const [selected, setSelected] = useState(0);

  // Function to render the content for a service
  const renderServiceContent = (service) => {
    return (
      <div className="bg-gray-50 rounded-lg px-4 py-6 mb-4">
        <div className="flex flex-col gap-6">
          {/* Image */}
          <div className="w-full">
            <Image
              src={service.image}
              alt={service.label}
              width={600}
              height={400}
              className="rounded-lg w-full object-cover h-48"
            />
          </div>

          {/* Content */}
          <div className="w-full">
            <h2 className="text-xl font-bold text-brand-blue mb-2">
              {service.title}
            </h2>
            <p className="text-neutral-600 text-sm mb-4">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full py-8 md:py-16 bg-white">
      <div className="flex flex-col justify-center items-center px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2 text-center">
          Our Pediatric Optometric Services
        </h3>
        <hr className="w-[65px] h-[2px] bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-base font-normal text-center">
          We offer specialized pediatric optometric services in Toronto to
          ensure your child’s vision health
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-8 md:mt-12 px-4">
        {/* Mobile Accordion Layout */}
        <div className="md:hidden">
          {pediatricEyeService.map((service, index) => {
            const isActive = selected === index;
            return (
              <div key={service.label}>
                <button
                  onClick={() => setSelected(isActive ? -1 : index)}
                  className={`w-full p-4 rounded-lg text-center cursor-pointer transition-all duration-200 flex items-center justify-center mb-1 ${
                    isActive
                      ? "bg-combination-100 text-white shadow-md"
                      : "bg-gray-50 text-combination-200 hover:bg-gray-100"
                  }`}
                >
                  <Image
                    src={service.icon}
                    alt={service.label}
                    width={32}
                    height={32}
                    className={`h-8 w-auto mr-3 ${
                      isActive ? "filter brightness-0 invert" : ""
                    }`}
                  />
                  <span className="font-semibold text-sm">{service.label}</span>
                  {/* <svg
                    className={`ml-auto w-5 h-5 transition-transform ${
                      isActive ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg> */}
                </button>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -20 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {renderServiceContent(service)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:block">
          <div className="flex flex-nowrap justify-around gap-2 mb-10">
            {pediatricEyeService.map((tool, index) => {
              const isActive = selected === index;
              return (
                <button
                  key={tool.label}
                  onClick={() => setSelected(index)}
                  className={`relative flex flex-col items-center justify-center w-auto p-4 rounded-t-lg text-center cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-combination-100 text-white shadow-md"
                      : "bg-gray-50 text-combination-200 hover:bg-gray-100 hover:text-combination-100"
                  }`}
                >
                  {isActive && (
                    <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-combination-100" />
                  )}
                  <Image
                    src={tool.icon}
                    alt={tool.label}
                    width={32}
                    height={32}
                    className={`h-8 w-auto mb-2 ${
                      isActive ? "filter brightness-0 invert" : ""
                    }`}
                  />
                  <div className="font-semibold text-xs lg:text-base">
                    {tool.label}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Desktop Content Area */}
          <div className="relative bg-gray-50 rounded-lg min-h-[517px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full px-6 py-8"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left image */}
                  <div className="md:w-1/2">
                    <Image
                      src={pediatricEyeService[selected]?.image}
                      alt={pediatricEyeService[selected]?.label}
                      width={600}
                      height={400}
                      className="rounded-lg w-full object-cover"
                    />
                  </div>

                  {/* Right content */}
                  <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold text-brand-blue mb-4">
                      {pediatricEyeService[selected]?.title}
                    </h2>
                    <p className="text-neutral-600 mb-6 text-[15px]">
                      {pediatricEyeService[selected]?.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PediatricSlider;
