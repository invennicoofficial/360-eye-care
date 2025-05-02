"use client";
import { useState } from "react";
import { Plus, Minus, ArrowUp } from "lucide-react";

// Updated FAQ Data based on screenshot
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
      "This depends on your age and previously diagnosed conditions, but a good rule of thumb is to have your eyes regularly checked every 1 to 2 years. The sooner we can spot potential vision issues developing, the easier it is to correct. Knowing when to visit an eye doctor to get your eyes checked is important. Not only is this information advisable, but it could also save you from potentially developing advanced eye conditions that might not have symptoms at early stages. Only your optometrist can determine how frequently you should be seen for an examination. However, the Canadian Association of Optometrists recommends the following as the minimum frequency for routine eye examinations: Infants and toddlers should undergo their first eye examination between the ages of 6 and 9 months. Preschool Children 2 to 5 years of age should undergo at least one eye examination in this period. Schoolchildren aged 6 to 19 years should undergo an eye examination annually. Adults aged 20 to 39 years should undergo an eye examination every 2 to 3 years. Adults aged 40 to 64 years should undergo an eye examination every 2 years. Adults aged 65 years or older should undergo an eye examination annually. The risk of developing ocular disease is higher at 65 years of age and older. Our doctors at 360 Eyecare in Toronto strongly advocate following the recommended frequency of visits to your optometrist. These exams will detect early signs of many age-related eye diseases such as glaucoma, cataracts, and macular degeneration.",
  },
  {
    id: 3,
    question: "How flexible are the appointment times?",
    answer:
      "We try to cater to our patient's needs, thus, we will try to accommodate you as soon as possible. We also have appointments outside of working hours and on Saturdays, so you can have lots of possibilities for scheduling your eye exam in the The Beaches and Yorkville, Toronto.",
  },
  {
    id: 4,
    question: "How do I have to prepare for my eye exam?",
    answer:
      "Although not a lot of preparation is required, please be ready to answer questions about what prescription drugs you use and relevant family history. Also, if you currently wear glasses or contact lenses, please bring them with you. Lastly, if your exam requires your pupils to be dilated, we advise having someone else drive you.",
  },
  {
    id: 5,
    question: "What should I expect during an eye exam?",
    answer:
      "During a comprehensive eye exam at our clinics, our optometrists will perform various tests to assess your vision and eye health. These may include visual acuity tests, refraction assessments, eye pressure measurements, and retinal examinations.",
  },
  {
    id: 6,
    question: "How long does an eye exam take?",
    answer:
      "Eye exams can take up to 40 to 60 minutes depending on the tests needed to be done. Most exams are completed in 30 to 40 minutes. Please allow extra time if you are a new patient and required to fill out paperwork before your examination.",
  },
  {
    id: 7,
    question: "Does my insurance cover eye exams?",
    answer:
      "Although we do accept most types of vision and health insurance plans, it's best to ask a few days in advance or when booking your appointment so we can check for you ahead of time.",
  },
  {
    id: 8,
    question:
      "Do you offer pediatric eye exams in Yorkville and The Beaches, Toronto?",
    answer:
      "Yes, we specialize in providing gentle and thorough pediatric eye exams to ensure your child's vision health. Our optometrists are experienced in examining children of all ages and strive to make the experience comfortable and enjoyable for young patients. You can book an eye exam with eye doctor near you at The Beaches or Yorkville Rosedale.",
  },
  {
    id: 9,
    question: "Can I schedule an eye exam online?",
    answer:
      "Yes, you can easily schedule your eye exam online through our website. Simply select your preferred location (Beaches, Toronto, or Rosedale, Toronto), choose a convenient date and time, and our team will confirm your appointment.",
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
const FaqPlusMinus = () => {
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
            isOpen={openFAQs.includes(faq.id)}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqPlusMinus;
