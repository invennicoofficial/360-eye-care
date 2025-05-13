"use client";
import { useState } from "react";
import { Plus, Minus, ArrowUp } from "lucide-react";

// FAQ Item Component
const FAQItem = ({ faq, isOpen, toggleFAQ }) => {
  return (
    <div className="mb-2 overflow-hidden rounded">
      <div
        className={`flex justify-between items-center p-4 cursor-pointer ${
          isOpen
            ? "bg-combination-100 text-white"
            : "bg-gray-100 text-combination-200"
        }`}
        onClick={() => toggleFAQ(faq.id)}
      >
        <h3
          className={`font-medium cursor-pointer ${
            isOpen
              ? "text-white font-semibold "
              : "text-combination-200 hover:text-combination-100"
          }`}
        >
          {faq.question}
        </h3>
        <div>
          {isOpen ? (
            <Minus className="w-5 h-5 text-combination-200" />
          ) : (
            <Plus className="w-5 h-5 text-combination-200" />
          )}
        </div>
      </div>
      <div
        className={`bg-white px-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

// Main FAQ Component
const DryFaqs = ({ title, faqData }) => {
  // Changed from single state to an array of open FAQ IDs
  const [openFAQs, setOpenFAQs] = useState([]);

  const toggleFAQ = (id) => {
    setOpenFAQs((prevOpenFAQs) => {
      // If already open, remove it from the array (close it)
      if (prevOpenFAQs.includes(id)) {
        return prevOpenFAQs.filter((faqId) => faqId !== id);
      }
      // Otherwise, add it to the array (open it)
      return [...prevOpenFAQs, id];
    });
  };

  return (
    <div className="w-full max-w-7xl bg-white mx-auto p-4  md:py-12 font-sans">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-center text-combination-200 mb-3">
          {title}
        </h1>
        <div className="w-24 h-1 bg-combination-100 mb-4 mx-auto"></div>
      </div>

      <div className="space-y-2">
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

export default DryFaqs;
