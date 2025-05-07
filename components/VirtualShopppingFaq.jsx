"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import {
  fagshoppingfaq,
  faqVirtualConsult,
  virtualShoppingFaqs,
} from "../constants/Constants";
import {
  virtualfagimg,
  virtualfaqimg,
  virtualshoppingfagimg,
} from "../constants/Images";

// FAQ Item Component
const FAQItem = ({ faq, isOpen, toggleFAQ }) => {
  return (
    <div className="mb-4">
      <div
        className={`flex justify-between items-center p-4 cursor-pointer rounded ${
          isOpen
            ? "bg-combination-100 text-white"
            : "bg-gray-100 text-combination-200"
        }`}
        onClick={() => toggleFAQ(faq.id)}
      >
        <h3 className="text-base font-medium cursor-pointer text-combination-200">
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
        className={`bg-white overflow-hidden transition-all duration-300 ease-linear ${
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
const VirtualShopppingFaq = () => {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-4xl font-bold text-combination-200 mb-2">
            Virtual Shopping FAQ
          </h2>
          <hr className="w-20 h-1 bg-combination-100" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left side with image and contact info */}
          <div className="lg:w-2/5">
            <div className="flex flex-row items-start">
              <div className="w-12 h-36 bg-combination-100" />
              <div className="flex-1">
                <Image
                  src={virtualshoppingfagimg}
                  alt="Virtual Shopping FAQ"
                  width={555}
                  height={390}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="mt-6">
              <p className="text-neutral-500 text-base mb-2">
                Hours: Monday to Friday from 10:00 am – 5:00 pm
              </p>
              <p className="text-neutral-500 text-base mb-2">
                Email:{" "}
                <a
                  href="mailto:virtual@360eyecare.ca"
                  className="text-combination-200"
                >
                  virtual@360eyecare.ca
                </a>
              </p>
              <p className="text-neutral-500 text-base mb-2">
                Phone:{" "}
                <a href="tel:4169012725" className="text-combination-200">
                  416-901-2725
                </a>
              </p>
            </div>
          </div>

          {/* Right side with FAQs */}
          <div className="lg:w-3/5">
            <Faqs faqData={virtualShoppingFaqs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualShopppingFaq;
