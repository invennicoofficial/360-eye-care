"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { eyeExamTools } from "../constants/Constants";

const EyeExamTools = () => {
  const [selected, setSelected] = useState(6); // Start with Visual Fields Test selected

  return (
    <div className="w-full py-6 md:py-16 bg-[#F6F7F5]">
      <div className="flex flex-col justify-center items-center px-4 sm:px-6">
        <h3 className="text-2xl md:text-4xl font-bold text-combination-200 mb-2 text-center">
          Eye Exam Tools and Technology
        </h3>
        <hr className="w-12 h-[3px] bg-combination-200 mb-3 sm:mb-4" />
        <p className="text-neutral-500 text-sm sm:text-base font-normal text-center max-w-3xl px-2">
          But hold on a moment. Phoropter? Visual fields? Retinal camera? There
          are still a lot of terms here that can be confusing. Let's break it
          down to some of the most common elements of an eye exam, shall we?
        </p>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-6 md:py-12">
        {/* Mobile Accordion Layout */}
        <div className="md:hidden">
          {eyeExamTools.map((tool, index) => {
            const isActive = selected === index;
            return (
              <div key={tool.label} className="mb-2 sm:mb-3">
                <button
                  onClick={() => setSelected(isActive ? -1 : index)}
                  className={`w-full p-3 sm:p-4 rounded-lg text-left cursor-pointer transition-all duration-200 flex items-center justify-start mb-1 ${
                    isActive
                      ? "bg-combination-100 text-white shadow-md"
                      : "bg-gray-50 text-slate-800 hover:bg-gray-100"
                  }`}
                >
                  <div
                    className={`mr-2 sm:mr-3 ${
                      isActive ? "text-white" : "text-combination-200"
                    }`}
                  >
                    {tool.icon}
                  </div>
                  <div className="ml-2 sm:ml-3 md:ml-4">
                    <div className="font-semibold text-xs md:text-sm line-clamp-1">
                      {tool.label}
                    </div>
                  </div>
                  <svg
                    className={`ml-auto w-4 sm:w-5 h-4 sm:h-5 transition-transform ${
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
                  </svg>
                </button>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
                        <div className="flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 md:p-6">
                          {/* Image */}
                          <div className="w-full">
                            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                              <Image
                                src={tool.image}
                                alt={tool.label}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                priority
                              />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="w-full px-1 sm:px-2 md:px-0">
                            <h2 className="text-base sm:text-lg md:text-xl font-bold text-combination-200 mb-2 sm:mb-3 break-words">
                              {tool.title}
                            </h2>
                            <p className="text-neutral-600 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
                              {tool.description}
                            </p>
                            <p className="text-neutral-700 text-xs sm:text-sm md:text-base leading-relaxed">
                              {tool.content}
                            </p>
                            {tool.paragraph2 && (
                              <p className="text-neutral-700 text-xs sm:text-sm md:text-base leading-relaxed">
                                {tool.paragraph2}
                              </p>
                            )}
                            {tool.title2 && (
                              <p className="text-combination-200 font-semibold text-base sm:text-sm md:text-base leading-relaxed ">
                                {tool.title2}
                              </p>
                            )}
                            {tool.paragraph3 && (
                              <p className="text-neutral-700 text-xs sm:text-sm md:text-base leading-relaxed">
                                {tool.paragraph3}
                              </p>
                            )}
                            {tool.paragraph4 && (
                              <p className="text-neutral-700 text-xs sm:text-sm md:text-base leading-relaxed">
                                {tool.paragraph4}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:block">
          <div className="flex flex-nowrap justify-center gap-2 mb-10">
            {eyeExamTools.map((tool, index) => {
              const isActive = selected === index;
              return (
                <button
                  key={tool.label}
                  onClick={() => setSelected(index)}
                  className={`relative flex flex-col items-center justify-center w-auto p-4 rounded-t-lg text-center cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-combination-100 text-white shadow-md"
                      : "bg-gray-50 text-slate-800 hover:bg-gray-100"
                  }`}
                >
                  {isActive && (
                    <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-teal-500" />
                  )}
                  <div
                    className={`mx-auto mb-2 ${
                      isActive ? "text-white" : "text-combination-100"
                    }`}
                  >
                    {tool.icon}
                  </div>
                  <div className="font-semibold text-xs lg:text-base text-combination-200">
                    {tool.label}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Desktop Content Area */}
          <div className="relative bg-gray-100 rounded-lg px-6 py-8 min-h-[800px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-8 px-6 py-8">
                    {/* Left image */}

                    {eyeExamTools[selected]?.image && (
                      <Image
                        src={eyeExamTools[selected].image}
                        alt={eyeExamTools[selected].label || "Eye Exam Tool"}
                        width={eyeExamTools[selected].width}
                        height={eyeExamTools[selected].height}
                        style={{
                          width: `${eyeExamTools[selected].width}px`,
                          height: `${eyeExamTools[selected].height}px`,
                          maxWidth: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}

                    {/* Right content */}
                    <div className="">
                      <h1 className="text-2xl md:text-3xl font-bold text-combination-200  mb-6 md:mb-8">
                        {eyeExamTools[selected]?.title}
                      </h1>
                      {eyeExamTools[selected]?.description && (
                        <p className="text-neutral-600 mb-6 text-[15px] ">
                          {eyeExamTools[selected]?.description}
                        </p>
                      )}
                      {eyeExamTools[selected]?.content && (
                        <p className="text-neutral-600 mb-6 text-[15px] ">
                          {eyeExamTools[selected]?.content}
                        </p>
                      )}
                    </div>
                  </div>
                  {eyeExamTools[selected]?.paragraph1 && (
                    <div className="px-6 ">
                      {eyeExamTools[selected]?.paragraph1}
                    </div>
                  )}
                  {eyeExamTools[selected]?.paragraph2 && (
                    <div className="px-6 ">
                      {eyeExamTools[selected]?.paragraph2}
                    </div>
                  )}
                  {eyeExamTools[selected]?.title2 && (
                    <div className="px-6 text-combination-200 font-bold  ">
                      {eyeExamTools[selected]?.title2}
                    </div>
                  )}
                  {eyeExamTools[selected]?.paragraph3 && (
                    <div className="px-6  ">
                      {eyeExamTools[selected]?.paragraph3}
                    </div>
                  )}
                  {eyeExamTools[selected]?.paragraph4 && (
                    <div className="px-6  ">
                      {eyeExamTools[selected]?.paragraph4}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeExamTools;
