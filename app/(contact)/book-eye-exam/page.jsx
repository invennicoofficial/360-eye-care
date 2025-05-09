"use client";
import React, { useEffect } from "react";
import SubHeader from "../../../components/SubHeader";
import Link from "next/link";
import FormSection from "../../../components/FormSection";
import Image from "next/image";
import { bookEyeExamImage, OptometryImage } from "../../../constants/Images";

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
      <SubHeader text="BOOK AN EYE EXAM" />

      {/* First section - Book an Eye Exam */}
      <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 flex flex-col md:flex-row justify-between">
        {/* Left column - text and form */}
        <div className="w-full md:w-[45%] mb-8 md:mb-0">
          <h2 className="text-combination-200 text-3xl md:text-[37px] font-bold mb-4">
            BOOK AN EYE EXAM
          </h2>
          <hr className="w-20 h-1 bg-combination-100 mb-4" />

          <p className="text-neutral-500 text-base md:text-lg mb-4">
            You can now use our online booking tools to select your own
            appointment date and time. Click a location to book your appointment
            in real-time. Otherwise, please feel free to use the form below to
            get in touch with our team.
          </p>

          {/* Buttons - stacked on mobile, side by side on desktop */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mt-5 mb-8 w-[280px] md:w-auto">
            <Link
              href="/book-appointment"
              className="bg-combination-200  hover:bg-combination-100 hover:text-combination-200 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 shadow-md text-center"
            >
              Book At the Beaches
            </Link>
            <Link
              href="https://360rosedale.mypatientportal.xyz/dashboard"
              className="bg-combination-200 hover:bg-combination-100 hover:text-combination-200 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 shadow-md text-center"
            >
              Book At Yorkville Rosedale
            </Link>
          </div>

          <FormSection />
        </div>

        {/* Right column - image */}
        <div className="w-full md:w-[45%] flex justify-center">
          <Image
            src={bookEyeExamImage}
            alt="Book Eye Exam"
            width={585}
            height={919}
            className="w-full max-w-[585px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Second section - Book an Eye Exam in the Beaches Toronto */}
      <div className="max-w-5xl mx-auto my-8 md:my-16 px-4 md:px-0 flex flex-col-reverse md:flex-row-reverse items-start justify-between">
        {/* Left column on desktop, top on mobile */}
        <div className="w-full md:w-[45%] mb-8 md:mb-0">
          <h2 className="text-combination-200 text-3xl md:text-[37px] font-bold mb-4 mt-6">
            Book an Eye Exam in the Beaches Toronto
          </h2>
          <p className="text-neutral-500 text-base md:text-lg mb-4">
            Choose which of our Optometrists you would like to schedule your
            appointment with, or simply choose 'Next Appointment' for the
            soonest available openings. Select your preferred date and time from
            the available slots and click 'Request' to submit your appointment
            request
          </p>
          <div className="z-[-1]">
            <gsp-scheduler account_id="3709"></gsp-scheduler>
          </div>
        </div>

        {/* Right column on desktop, bottom on mobile */}
        <div className="w-full md:w-[45%] flex justify-center ">
          <Image
            src={OptometryImage}
            alt="optometry image"
            width={466}
            height={600}
            className="w-full max-w-[466px] h-auto object-contain"
          />
        </div>
      </div>
    </main>
  );
};

export default page;
