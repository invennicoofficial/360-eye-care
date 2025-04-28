"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  ContactLensIcon,
  ContactLensImage,
  DryEyeIcon,
  DryEyeImage,
  EyeExamIcon,
  EyeExamImage,
  MyopiaIcon,
  MyopiaImage,
  PediatricEyeCareImage,
  PediatricIcon,
} from "../constants/Images";

const Optometry = () => {
  const [selected, setSelected] = useState(0);

  const services = [
    {
      label: "Eye Exams",
      icon: EyeExamIcon,
      image: EyeExamImage,
      title: "Comprehensive Eye Exams by Top Toronto Optometrists",
      description:
        "Comprehensive Eye Exams by Top Toronto Optometrists. Our team of experienced optometrists provides thorough eye exams using advanced technology to assess your vision and eye health. We tailor our exams to your needs, whether you're seeking a routine check-up, have specific concerns, or need a new prescription. By choosing our optometrists near you, you're selecting the best optometrists in Toronto committed to your eye care.",
      services: [
        "Comprehensive Eye Health Assessment",
        "OCT scan and Retinal imaging",
        "Refraction Assessment for Glasses and Contact Lenses",
        "Eye Pressure Measurement (Tonometry)",
        "Visual Fields and other ocular tests",
      ],
    },
    {
      label: "Contact Lens Fitting",
      icon: ContactLensIcon,
      image: ContactLensImage,
      title: "Professional Contact Lens Fittings for You",
      description:
        "Our clinic offers expert contact lens fittings to ensure optimal comfort, vision, and eye health. Our experienced optometrists assess your eyes to recommend the most suitable contact lenses for your lifestyle and needs.",
      services: [
        "Customized Fittings for Comfort",
        "Thorough Eye Health Evaluation",
        "Trial Lenses for Evaluation",
        "Education on Proper Lens Care",
        "Follow-Up Care for Continued Comfort",
      ],
    },
    {
      label: "Myopia Control",
      icon: MyopiaIcon,
      image: MyopiaImage,
      title: "Effective Myopia Control Solutions for Children",
      description:
        "Our clinic offers specialized myopia control treatments for children to slow the progression of nearsightedness. Our personalized approach includes Spectacle therapy, multifocal contact lenses, atropine eye drops, and orthokeratology (Ortho-K) to manage myopia effectively.",
      services: [
        "Spectacle Therapy",
        "Customized Treatment Plans",
        "Multifocal Contact Lenses",
        "Orthokeratology (Ortho-K)",
        "Regular Monitoring and Adjustments",
        "Axial Length measurements",
      ],
    },
    {
      label: "Dry Eye Treatment",
      icon: DryEyeIcon,
      image: DryEyeImage,
      title: "Effective Dry Eye Treatment Solutions",
      description:
        "We offer advanced dry eye treatments to relieve discomfort and improve eye health. We identify the underlying causes and recommend treatments to restore moisture and comfort to your eyes.",
      services: [
        "Comprehensive Dry Eye Evaluation",
        "Lifestyle and Environmental Recommendations",
        "Prescription Eye Drops and Medications",
        "Tear Duct Plugs (Punctal Plugs)",
        "IPL and RF therapy procedures",
      ],
    },
    {
      label: "Pediatric Eye Care",
      icon: PediatricIcon,
      image: PediatricEyeCareImage,
      title: "Comprehensive Pediatric Optometric Services in Toronto",
      description:
        "Our Toronto optometrists specialize in pediatric eye care, providing comprehensive exams, vision therapy, and myopia control solutions. We are dedicated to ensuring your child's vision and eye health are our top priority.",
      services: [
        "Pediatric Eye Exams Tailored for Children",
        "Vision Therapy Services for Visual Development",
        "Myopia Control Solutions to Manage Nearsightedness",
        "Expertise in Treating Children's Eye Conditions",
        "Compassionate and Child-Friendly Care",
      ],
    },
  ];

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
            <ul className="space-y-2">
              {service.services.map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    className="w-4 h-4 text-teal-500 mr-2 mt-1 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-neutral-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full py-8 md:py-16 bg-white">
      <div className="flex flex-col justify-center items-center px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2 text-center">
          Optometry Services
        </h3>
        <hr className="w-12 h-[3px] bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-base font-normal text-center">
          Comprehensive services for all your vision and eye health needs.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-8 md:mt-12 px-4">
        {/* Mobile Accordion Layout */}
        <div className="md:hidden">
          {services.map((service, index) => {
            const isActive = selected === index;
            return (
              <div key={service.label}>
                <button
                  onClick={() => setSelected(isActive ? -1 : index)}
                  className={`w-full p-4 rounded-lg text-center cursor-pointer transition-all duration-200 flex items-center justify-center mb-1 ${
                    isActive
                      ? "bg-teal-500 text-white shadow-md"
                      : "bg-gray-50 text-slate-800 hover:bg-gray-100"
                  }`}
                >
                  <img
                    src={service.icon}
                    alt={service.label}
                    className={`h-8 w-auto mr-3 ${
                      isActive ? "filter brightness-0 invert" : ""
                    }`}
                  />
                  <span className="font-semibold text-sm">{service.label}</span>
                  <svg
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
          <div className="flex flex-wrap justify-around gap-4 mb-10">
            {services.map((service, index) => {
              const isActive = selected === index;
              return (
                <button
                  key={service.label}
                  onClick={() => setSelected(index)}
                  className={`relative flex flex-col items-center justify-center w-40 lg:w-48 p-4 rounded-lg text-center cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-teal-500 text-white shadow-md"
                      : "bg-gray-50 text-slate-800 hover:bg-gray-100"
                  }`}
                >
                  {isActive && (
                    <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-teal-500" />
                  )}
                  <img
                    src={service.icon}
                    alt={service.label}
                    className={`mx-auto mb-2 h-8 w-auto ${
                      isActive ? "filter brightness-0 invert" : ""
                    }`}
                  />
                  <div className="font-semibold text-sm lg:text-base">
                    {service.label}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Desktop Content Area */}
          <div className="relative bg-neutral-400 rounded-lg px-6 py-8 min-h-[517px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full"
              >
                <div className="flex flex-col md:flex-row gap-8 px-6 py-8">
                  {/* Left image */}
                  <div className="md:w-1/2">
                    <Image
                      src={services[selected]?.image}
                      alt={services[selected]?.label}
                      width={600}
                      height={400}
                      className="rounded-lg w-full object-cover"
                    />
                  </div>

                  {/* Right content */}
                  <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold text-brand-blue mb-4">
                      {services[selected]?.title}
                    </h2>
                    <p className="text-neutral-600 mb-6 text-[15px]">
                      {services[selected]?.description}
                    </p>
                    <ul className="space-y-3">
                      {services[selected]?.services.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 13L9 17L19 7"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-neutral-700 text-[15px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
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

export default Optometry;
