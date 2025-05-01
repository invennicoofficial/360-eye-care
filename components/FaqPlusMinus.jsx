"use client";
import { useState } from "react";
import { Plus, Minus, ArrowUp } from "lucide-react";
// FAQ Data
const faqData = [
  {
    id: 1,
    question:
      "How much does an eye exam cost in The Beaches, Rosedale and Yorkville, Toronto?",
    answer:
      "Usually, these exams are covered by your private vision or health care plan. Your eye exam will be covered by OHIP if you are 65 and over, 19 and under, or have specific conditions that are deemed insurable by OHIP. Please call our office to inquire further.",
  },
  {
    id: 2,
    question: "How often should I get my eyes examined?",
    answer:
      "Adults should have their eyes examined every 1-2 years, depending on age, risk factors, and whether they wear corrective lenses. Children should have their first comprehensive eye exam at 6 months, again at age 3, and annually throughout school years.",
  },
  {
    id: 3,
    question: "How flexible are the appointment times?",
    answer:
      "We offer flexible appointment times including evenings and weekends to accommodate your busy schedule. Please contact our office to find a time that works best for you.",
  },
  {
    id: 4,
    question: "How do I have to prepare for my eye exam?",
    answer:
      "Bring your current glasses or contact lenses, a list of current medications, and your insurance information. If you wear contact lenses, wear them to your appointment so the doctor can evaluate the fit. Consider writing down any vision issues you've been experiencing.",
  },
  {
    id: 5,
    question: "What should I expect during an eye exam?",
    answer:
      "During your comprehensive eye exam, we'll assess your visual acuity, check for refractive errors, evaluate your eye health, test for common eye diseases, and determine if you need corrective lenses. The entire process is comfortable and non-invasive.",
  },
  {
    id: 6,
    question: "How long does an eye exam take?",
    answer:
      "A comprehensive eye exam typically takes 30-60 minutes, depending on the tests required and complexity of your eye health needs.",
  },
  {
    id: 7,
    question: "Does my insurance cover eye exams?",
    answer:
      "Most private insurance plans cover routine eye exams. We accept most major insurance providers. Please bring your insurance information to your appointment, and our staff will help determine your coverage.",
  },
  {
    id: 8,
    question:
      "Do you offer pediatric eye exams in Yorkville and The Beaches, Toronto?",
    answer:
      "Yes, we offer pediatric eye exams at our locations in Yorkville and The Beaches. Our optometrists are experienced in making children feel comfortable during their eye exams.",
  },
  {
    id: 9,
    question: "Can I schedule an eye exam online?",
    answer:
      "Yes, you can schedule an appointment through our website's online booking system. Alternatively, you can call our office directly to speak with our staff.",
  },
];

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
          className={`font-medium   cursor-pointer ${
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
const FaqPlusMinus = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="w-full max-w-7xl bg-white mx-auto p-4 font-sans">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-combination-200 mb-2">
          Eye Exams FAQs
        </h1>
        <div className="w-12 h-1 bg-combination-100 mb-4"></div>
        <p className="text-neutral-500 text-base">
          Firstly, if you are considering eye exams in Toronto but still have
          questions or things you want to clarify, rest assured, that you are
          not alone. Based on the questions we received over the many years
          we've examined, diagnosed, and treated{" "}
          <span className="font-semibold">eye conditions</span> in the Toronto
          area, we've come up with a list of the most Frequently Asked Questions
          regarding eye exams in Toronto. However, if you still have questions
          after consulting our FAQs, do not hesitate to contact us via phone,
          email, or by also using our website.
        </p>
      </div>

      <div className="space-y-2">
        {faqData.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={openFAQ === faq.id}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqPlusMinus;
