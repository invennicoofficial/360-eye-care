"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { faqVirtualConsult } from "../constants/Constants";
import { virtualfaqimg } from "../constants/Images";
// FAQ Item Component
const FAQItem = ({ faq, isOpen, toggleFAQ }) => {
  return (
    <div className="mb-4">
      <div
        className={`flex justify-between items-center p-4 cursor-pointer rounded transition-colors duration-300 ease-in-out ${
          isOpen
            ? "bg-combination-100 text-white"
            : "bg-gray-100 text-combination-200"
        }`}
        onClick={() => toggleFAQ(faq.id)}
      >
        <h3
          className={`text-base font-bold cursor-pointer ${
            isOpen
              ? "text-white font-semibold"
              : "text-combination-200 hover:text-combination-100"
          }`}
        >
          {faq.question}
        </h3>
        <div>
          {isOpen ? (
            <Minus className="w-6 h-6 transition-transform text-combination-200" />
          ) : (
            <Plus className="w-6 h-6 transition-transform duration-300 text-combination-200" />
          )}
        </div>
      </div>

      <div
        className={`bg-[#E7F4F2] overflow-hidden  transition-all duration-300 ease-linear ${
          isOpen
            ? "max-h-96 p-6 mt-1 opacity-100"
            : "max-h-0 p-0 mt-0 opacity-0"
        }`}
      >
        <p className="text-gray-700 text-base">{faq.answer}</p>
      </div>
    </div>
  );
};

// Main FAQ Component
const Faqs = ({ faqData }) => {
  const [openFAQs, setOpenFAQs] = useState([]);

  const toggleFAQ = (id) => {
    setOpenFAQs((prevOpenFAQs) => {
      if (prevOpenFAQs.includes(id)) {
        return prevOpenFAQs.filter((faqId) => faqId !== id);
      }
      return [...prevOpenFAQs, id];
    });
  };

  return (
    <div className="w-full">
      <div className="space-y-4">
        {faqData?.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={openFAQs.includes(faq.id)}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </div>
    </div>
  );
};

// Virtual FAQ Component
const VirtualFaq = () => {
  // Sample FAQ data with complete answers based on images

  return (
    <div className="w-full bg-[#E7F4F2]">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-4xl font-bold text-combination-200 mb-2">
            Virtual Consult FAQ
          </h2>
          <hr className="w-[65px] h-[2px] bg-combination-100" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left side with image and blue bar */}
          <div className="lg:w-[60%] ">
            <div className="flex flex-row items-end">
              <div className="w-12 h-36 bg-combination-100" />
              <Image
                src={virtualfaqimg}
                alt="Virtual Consult FAQ"
                width={555}
                height={390}
                className="w-[555px] h-[390px]"
              />
            </div>
          </div>

          {/* Right side with FAQs */}
          <div className="lg:w-3/5">
            <Faqs faqData={faqVirtualConsult} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualFaq;
