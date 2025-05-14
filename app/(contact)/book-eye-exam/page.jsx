"use client";
import React, { useEffect } from "react";
import SubHeader from "../../../components/SubHeader";
import Link from "next/link";
import FormSection from "../../../components/FormSection";
import Image from "next/image";
import QuestionForm from "../../../components/QuestionForm";
import {
  bookEyeExamImage,
  OptometryImage,
  PatientScaledImage,
} from "../../../constants/Images";
import AboutUsSection from "components/AboutUsSection";
import {
  bookEyeExamCardData,
  bookeyeexamFaqdata,
  eyeexamsCardData,
} from "constants/Constants";
import BeforeAppointmentSection from "../../../components/BeforeYourAppoinment";
import BeforeYourAppoinment from "../../../components/BeforeYourAppoinment";
import DryFaqs from "components/DryFaqs";

const page = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scheduler.getsetpro.com/js/scheduler.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="pt-[110px]">
      <div className="max-w-[1550px] mx-auto">
        <div className="flex lg:flex-row  flex-col ">
          {[
            {
              title: "Book at Beaches",
              description:
                "Struggling with blurry vision or eye strain? Let’s get to the root of it together. Your clearer sight is just a click away.",
              ctaText: "Book at Beaches",
              ctaLink: "#book-appointment",
              ctabgColor: "bg-[#28305F]",
              bgColor: "bg-combination-100",
            },
            {
              title: "Book at Yorkville",
              description:
                "Your next eye exam could change how you see the world. Let’s take care of your vision together. It’s just a click away.",
              ctaText: "Book at Yorkville",
              ctaLink: "https://360rosedale.mypatientportal.xyz/dashboard",
              ctabgColor: "bg-combination-100",
              bgColor: "bg-[#28305F]",
            },
          ].map((item, index) => {
            return (
              <div
                key={item.title}
                className={`md:w-[50%] md:h-[593px] w-full h-[296px]   flex gap-5 justify-center items-center ${item.bgColor}`}
              >
                <div className="w-[415px] h-[236px] flex flex-col gap-5 text-center md:text-left">
                  <h2 className="font-[700] md:text-[40px] text-[28px] text-white font-poppins">
                    {item.title}
                  </h2>
                  <p className="text-white font-poppins font-medium md:text-base text-[14px] text-center md:text-left">
                    {item.description}
                  </p>

                  <div className="flex justify-center items-center md:items-center md:justify-start">
                    <Link
                      href={item.ctaLink}
                      className={`${item.ctabgColor} text-center   text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 shadow-md md:text-left w-[218px] h-[56px] flex justify-center items-center text-base `}
                    >
                      {item.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-white px-4 sm:px-10 md:pb-12 pb-8">
          <AboutUsSection cardData={bookEyeExamCardData} />
        </div>

        <BeforeYourAppoinment />

        <div className="max-w-7xl mx-auto my-8 md:my-16 px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Image container - hidden on mobile, visible on md and above */}
            <div className="hidden md:block border-2 border-[#28305F]">
              <Image
                src={PatientScaledImage}
                alt="patient-scaled-image"
                width={570}
                height={759}
                className="object-cover w-[570px] max-h-[759px]"
              />
            </div>

            {/* Form container - full width on mobile, 50% on desktop */}
            <div className="w-full md:w-[50%] flex flex-col border-2 border-[#28305F] p-4 md:p-8">
              <div className="w-full flex flex-col gap-5">
                <h2 className="font-[700] text-[24px] md:text-[28px] text-[#28305F] font-poppins">
                  Do You Have Questions?
                </h2>
                <p className="text-neutral-500 text-base md:text-lg">
                  Have questions before booking? Fill out the form below, and
                  we’ll get back to you shortly.
                </p>
                <QuestionForm />
              </div>
            </div>
          </div>
        </div>

        <DryFaqs
          faqData={bookeyeexamFaqdata}
          title="Frequently Asked Questions"
        />
      </div>
    </main>
  );
};

export default page;
