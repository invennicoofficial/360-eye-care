"use client";
import { useState } from "react";
import { Plus, Minus, ArrowUp } from "lucide-react";

// FAQ Data
const faqData = [
  {
    id: 1,
    question: "What is dry eye?",
    answer:
      "Dry eye is a common condition where your eyes do not produce enough tears or the right quality of tears to keep the eyes moist and comfortable. This can lead to irritation, redness, and discomfort.",
  },
  {
    id: 2,
    question: "What causes dry eye?",
    answer:
      "Dry eye can be caused by a variety of factors, including aging, hormonal changes, environmental conditions, certain medications, and prolonged screen time. Other causes include underlying health conditions like autoimmune diseases and eyelid issues that affect tear production.",
  },
  {
    id: 3,
    question: "What are the symptoms of dry eye?",
    answer:
      "Common symptoms of dry eye include a stinging or burning sensation, gritty feeling, redness, sensitivity to light, blurred vision, and excessive tearing. If you experience these symptoms frequently, you may have dry eye syndrome.",
  },
  {
    id: 4,
    question: "How is dry eye diagnosed?",
    answer:
      "An eye care professional can diagnose dry eye through a comprehensive eye exam. They may use tests to measure tear production, tear film quality, and the overall health of your eyes.",
  },
  {
    id: 5,
    question: "How can I prevent dry eye?",
    answer:
      "Preventing dry eye involves proper hydration, regular blink exercises, ergonomic adjustments to reduce eye strain, and maintaining a healthy diet rich in Omega 3. Using a humidifier, avoiding smoke and pollution, practicing good eyelid hygiene, and using artificial tears can also help alleviate dry eye symptoms.",
  },
  {
    id: 6,
    question: "What treatments are available for dry eye disease?",
    answer:
      "Treatment options for dry eye include over-the-counter artificial tears, prescription eye drops, lifestyle changes, and in some cases, medical procedures. Advanced treatments like dry eye treatment with RF (Radiofrequency) and IPL (intense pulse light) are also available at specialized clinics like 360 Eyecare Clinics.",
  },
  {
    id: 7,
    question: "Can dry eye be cured?",
    answer:
      "While there is no permanent cure for dry eye, the condition can be managed effectively with the right treatment and lifestyle adjustments. Regular eye exams and following your eye care professional's recommendations can help keep symptoms under control.",
  },
  {
    id: 8,
    question: "Is dry eye a serious condition?",
    answer:
      "While dry eye is usually not serious in the early stages, it can cause significant discomfort and affect your quality of life. In severe cases, it can lead to complications like eye infections or damage to the corneal surface. It is important to seek treatment if you experience persistent symptoms.",
  },
  {
    id: 9,
    question: "Can contact lenses cause dry eye?",
    answer:
      "Yes, contact lenses can contribute to dry eye by reducing tear film stability and increasing evaporation. If you wear contact lenses and experience dry eye symptoms, discuss alternative options or solutions with your eye care professional.",
  },
  {
    id: 10,
    question: "Are there any home remedies for dry eye?",
    answer:
      "Home remedies for dry eye include staying hydrated, using warm compresses, practicing good eyelid hygiene, and taking regular breaks from screen time. However, it is important to consult with an eye care professional for a comprehensive treatment plan tailored to your specific needs.",
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
const DryFaqs = () => {
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
    <div className="w-full max-w-7xl bg-white mx-auto p-4 font-sans">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-center text-combination-200 mb-3">
          Dry Eye FAQs
        </h1>
        <div className="w-24 h-1 bg-combination-100 mb-4 mx-auto"></div>
      </div>

      <div className="space-y-2">
        {faqData.map((faq) => (
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
