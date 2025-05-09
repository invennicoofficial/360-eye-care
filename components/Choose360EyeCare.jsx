import React from "react";
import {
  beaches360Image,
  choose360image,
  eyeglasses,
  glassesImage,
} from "../constants/Images";
import Image from "next/image";

const Choose360EyeCare = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="text-combination-200 text-3xl md:text-[37px] font-extrabold mb-4">
            Why Choose 360 Eyecare?
          </h2>
          <hr className="w-20 h-1 bg-combination-100 mb-4" />
          <ul className="list-inside mb-6">
            {[
              {
                head: "✔  Experienced Optometrists – ",
                para: "Our team is dedicated to providing top-notch eye care.",
              },
              {
                head: "✔  State-of-the-Art Technology – ",
                para: "We use advanced diagnostic tools for precise vision assessments.",
              },
              {
                head: "✔  Comprehensive Services – ",
                para: "From routine exams to specialized treatments, we offer full-service optometry.",
              },
              {
                head: "✔  Convenient Locations – ",
                para: "Serving The Beaches, Yorkville, and Rosedale with easily accessible clinics.",
              },
              {
                head: "✔  Personalized Care – ",
                para: "We focus on your unique vision needs and provide tailored solutions.",
              },
            ].map((item, index) => (
              <li key={index} className="ml-4 mb-2 text-neutral-500">
                <strong>{item.head}</strong> <span>{item.para}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 md:w-1/2">
          <Image
            src={choose360image}
            alt="Beaches 360 Eyecare"
            width={585}
            height={390}
            className="w-[585px] h-[390px] object-contain"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 flex flex-col md:flex-row gap-8 justify-between items-start">
        <div className="flex flex-col gap-4 md:w-1/2 mr-6">
          <h2 className="text-combination-200 text-3xl md:text-[37px] font-extrabold mb-4">
            Comprehensive Eye Care Services in Toronto Near You
          </h2>
          <hr className="w-20 h-1 bg-combination-100 mb-4" />
          <ul className="list-inside mb-6">
            {[
              {
                head: "Eye Exams & Vision Testing  ",
                para: "Regular eye exams are crucial for detecting vision problems early. Our optometrists provide thorough eye health assessments using state-of-the-art diagnostic tools.",
              },
              {
                head: "Prescription Glasses & Sunglasses",
                para: "Choose from a wide selection of stylish and functional eyewear. We offer personalized fittings to ensure comfort and clarity.",
              },
              {
                head: "Contact Lens Fittings & Consultations",
                para: "Not sure if contact lenses are right for you? Our team will guide you through different options to find the best lenses for your needs.",
              },
              {
                head: "Dry Eye Treatment",
                para: "Suffering from dry, itchy, or red eyes? Our advanced dry eye treatments provide long-lasting relief.",
              },
            ].map((item, index) => (
              <li key={index} className="mb-4 text-neutral-500">
                <h2 className="text-combination-200 text-xl md:text-[30px] font-extrabold">
                  {item.head}
                </h2>
                <p className="text-neutral-500 text-base md:text-lg mt-4">
                  {item.para}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 flex-start">
          <Image
            src={glassesImage}
            alt="eyeglasses-image"
            width={585}
            height={780}
            className="w-[585px] h-[780px] object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Choose360EyeCare;
