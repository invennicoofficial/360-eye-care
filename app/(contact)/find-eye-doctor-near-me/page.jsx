import React from "react";
import SubHeader from "../../../components/SubHeader";
import { findeyedoctorImage } from "../../../constants/Images";
import Link from "next/link";
import Image from "next/image";
import EyeClinicNearYou from "../../../components/EyeClinicNearYou";
import Choose360EyeCare from "../../../components/Choose360EyeCare";

const page = () => {
  return (
    <main className="pt-[70px] sm:pt-[110px]">
      <SubHeader text="Eye Doctor Near Me" />
      {/* Book an Eye Exam Section */}
      <div className="max-w-6xl mx-auto my-6 md:my-16 px-4 md:px-6 lg:px-0 flex flex-col md:flex-row justify-between gap-6 md:gap-8">
        <div className="flex flex-col md:w-1/2">
          <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-extrabold mb-3 md:mb-4">
            BOOK AN EYE EXAM
          </h2>
          <hr className="w-16 md:w-20 h-1 bg-combination-100 mb-3 md:mb-4" />

          <p className="text-neutral-500 text-sm sm:text-base md:text-lg mb-4">
            You can now use our online booking tools to select your own
            appointment date and time. Click a location to book your appointment
            in real-time. Otherwise, please feel free to use the form below to
            get in touch with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3 sm:mt-5 mb-6 md:mb-8 md:w-auto w-[240px]">
            <Link
              href="tel:4166983937"
              className="bg-combination-100 hover:text-combination-100 hover:bg-combination-200 text-white font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-md transition-colors duration-200 shadow-md text-center text-sm sm:text-base"
            >
              Call: 416-698-3937
            </Link>
            <Link
              href="tel:4169012725"
              className="bg-combination-100 hover:text-combination-100 hover:bg-combination-200 text-white font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-md transition-colors duration-200 shadow-md text-center text-sm sm:text-base"
            >
              Call: 416-901-2725
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:w-1/2">
          <Image
            src={findeyedoctorImage}
            alt="Book Eye Exam"
            width={585}
            height={390}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      {/* Eye Clinics Section */}
      <EyeClinicNearYou />
      <Choose360EyeCare />
      <div className="max-w-7xl mx-auto my-6 md:my-16 px-4 md:px-6 lg:px-0">
        <main>
          {/* Top Section */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-10 md:mb-16 justify-center">
            {/* Left Box - Book Eye Exam */}
            <div className="md:w-[45%]">
              <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-extrabold mb-3 md:mb-4">
                Book Eye Exam Near You Today!
              </h2>
              <hr className="w-16 md:w-20 h-1 bg-combination-100 mb-3 md:mb-4" />
              <p className="mb-3 md:mb-4 text-sm sm:text-base">
                Your vision is important—don't wait to{" "}
                <Link
                  href="/book-eye-exam"
                  className="text-combination-200 hover:text-combination-100"
                >
                  schedule an appointment online
                </Link>
                .
              </p>
              <p className="mb-4 md:mb-6 text-sm sm:text-base">
                Whether you need an{" "}
                <span className="font-medium">
                  optometrist near Yorkville, Rosedale, or The Beaches
                </span>
                , <span className="font-medium">360 Eyecare</span> is here to
                help.
              </p>
              <Link
                href={"/book-eye-exam"}
                className="bg-combination-100 hover:text-combination-100 hover:bg-combination-200 text-white font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-md transition-colors duration-200 shadow-md text-center text-sm sm:text-base"
              >
                Book An Eye Exam
              </Link>
            </div>

            {/* Right Box - Call to Book */}
            <div className="md:w-[45%] mt-6 md:mt-0">
              <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-extrabold mb-3 md:mb-4">
                Call to Book an Appointment Now!
              </h2>
              <hr className="w-16 md:w-20 h-1 bg-combination-100 mb-3 md:mb-4" />
              <p className="text-xl sm:text-2xl md:text-[30px] font-extrabold mb-2 md:mb-4 leading-relaxed">
                Beaches:{" "}
                <Link
                  href="tel:4166983937"
                  className="text-combination-200 hover:text-combination-100 "
                >
                  416-698-3937
                </Link>
              </p>
              <p className="text-xl sm:text-2xl md:text-[30px] font-extrabold leading-relaxed">
                Yorkville Rosedale:{" "}
                <Link
                  href="tel:4169012725"
                  className="text-combination-200 hover:text-combination-100"
                >
                  416-901-2725
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
      {/* How to Find Section */}
      <div className="max-w-6xl mx-auto my-6 md:my-16 px-4 md:px-6 lg:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-[37px] font-extrabold text-combination-200 mb-3 md:mb-4">
          How to Find the Best Optometrist Near You in Toronto?
        </h2>
        <div className="h-1 w-16 bg-combination-100 mb-6 md:mb-8"></div>

        {/* 1. Search Online */}
        <div className="mb-6 md:mb-8">
          <h3 className="text-xl sm:text-2xl md:text-[30px] font-bold text-combination-200 mb-3 md:mb-4">
            1. Search Online Using Local Keywords
          </h3>
          <p className="mb-3 text-sm sm:text-base">
            To find a qualified{" "}
            <span className="font-medium">eye doctor near you</span>, use Google
            and search for location-based keywords such as:
          </p>
          <ul className="list-disc pl-5 sm:pl-8 mb-3 md:mb-4 text-[#888888] font-extrabold text-sm sm:text-base">
            <li>"Optometrist near me"</li>
            <li>"Eye doctor near Yorkville"</li>
            <li>"Eye clinic near Rosedale"</li>
            <li>"Optometry near The Beaches Toronto"</li>
          </ul>
          <p className="text-sm sm:text-base">
            Websites like{" "}
            <span className="text-[#888888] font-extrabold">
              Google My Business, Yelp, and Healthgrades
            </span>{" "}
            can help you compare clinics, read patient reviews, and check their
            services before booking an appointment.
          </p>
        </div>

        {/* 2. Recommendations */}
        <div className="mb-6 md:mb-8">
          <h3 className="text-xl sm:text-2xl md:text-[30px] font-bold text-combination-200 mb-3 md:mb-4">
            2. Ask for Recommendations
          </h3>
          <p className="text-sm sm:text-base">
            Word-of-mouth referrals are one of the best ways to find a trusted{" "}
            <span className="text-[#888888] font-extrabold">
              eye clinic near you
            </span>
            . Ask friends, family, or co-workers about their experiences with
            local optometrists. If you live in{" "}
            <span className="text-[#888888] font-extrabold">
              Yorkville, Rosedale, or The Beaches
            </span>
            , neighbors and colleagues can provide helpful insights.
          </p>
        </div>

        {/* 3. Professional Associations */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-[30px] font-bold text-combination-200 mb-3 md:mb-4">
            3. Check Professional Associations
          </h3>
          <p className="text-sm sm:text-base">
            Organizations like the{" "}
            <span className="text-[#888888] font-extrabold">
              Ontario Association of Optometrists
            </span>{" "}
            and the{" "}
            <span className="text-[#888888] font-extrabold">
              College of Optometrists of Ontario
            </span>{" "}
            maintain directories of licensed eye doctors in Toronto. Checking
            their databases ensures you find a reputable{" "}
            <span className="text-[#888888] font-extrabold">
              optometrist near The Beaches, Yorkville, or Rosedale
            </span>
            .
          </p>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="max-w-6xl mx-auto my-6 md:my-16 px-4 md:px-6 lg:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-[37px] font-extrabold text-combination-200 mb-3 md:mb-4">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="h-1 w-16 bg-combination-100 mb-6 md:mb-8"></div>

        {/* FAQ 1 */}
        <div className="mb-5 md:mb-6">
          <h3 className="text-xl sm:text-2xl md:text-[30px] text-combination-200 mb-2">
            1. Where can I find an eye doctor near me in Toronto?
          </h3>
          <p className="text-sm sm:text-base">
            If you're looking for a{" "}
            <span className="text-[#888888] font-bold">
              trusted eye clinic in The Beaches, Yorkville, or Rosedale
            </span>
            , 360 Eyecare has locations conveniently serving these areas. We
            offer comprehensive eye exams, prescription eyewear, and specialized
            treatments.
          </p>
        </div>

        {/* FAQ 2 */}
        <div className="mb-5 md:mb-6">
          <h3 className="text-xl sm:text-2xl md:text-[30px] text-combination-200 mb-2">
            2. Do you offer flexible payment plans for eye exams in The Beaches
            or Yorkville?
          </h3>
          <p className="text-sm sm:text-base">
            Yes! Our{" "}
            <span className="text-[#888888] font-bold">
              360 Eyecare Beaches
            </span>{" "}
            and{" "}
            <span className="text-[#888888] font-bold">
              360 Eyecare Yorkville Rosedale
            </span>{" "}
            locations provide flexible payment plans for{" "}
            <span className="text-[#888888] font-bold">eye exams</span> for
            eligible patients.
          </p>
        </div>

        {/* FAQ 3 */}
        <div className="mb-5 md:mb-6">
          <h3 className="text-xl sm:text-2xl md:text-[30px] text-combination-200 mb-2">
            3. How do I book an appointment with 360 Eyecare in Yorkville
            Rosedale or The Beaches?
          </h3>
          <p className="text-sm sm:text-base">
            You can book an appointment{" "}
            <span className="text-[#888888] font-bold">online</span> through our
            website or call your nearest location.
          </p>
        </div>

        {/* FAQ 4 */}
        <div className="mb-5 md:mb-6">
          <h3 className="text-xl sm:text-2xl md:text-[30px] text-combination-200 mb-2">
            4. Do you provide emergency eye care in Yorkville or The Beaches?
          </h3>
          <p className="text-sm sm:text-base">
            Yes, we offer{" "}
            <span className="text-[#888888] font-bold">
              emergency eye care services
            </span>{" "}
            for sudden vision changes, eye infections, or injuries. Contact us
            immediately if you need urgent assistance.
          </p>
        </div>

        {/* FAQ 5 */}
        <div className="mb-5 md:mb-6">
          <h3 className="text-xl sm:text-2xl md:text-[30px] text-combination-200 mb-2">
            5. What brands of eyewear do you carry at 360 Eyecare in Toronto?
          </h3>
          <p className="text-sm sm:text-base">
            Our clinics in{" "}
            <span className="text-[#888888] font-bold">
              The Beaches, Yorkville Rosedale
            </span>{" "}
            carry a{" "}
            <span className="text-[#888888] font-bold">
              wide selection of designer and budget-friendly frames
            </span>
            , including brands like Ray-Ban, Oakley, Gucci, and more.
          </p>
        </div>

        {/* FAQ 6 */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-[30px] text-combination-200 mb-2">
            6. Can I get contact lenses at your Beaches or Yorkville location?
          </h3>
          <p className="text-sm sm:text-base">
            Absolutely! We offer{" "}
            <span className="text-[#888888] font-bold">
              contact lens fittings and consultations
            </span>{" "}
            at both our{" "}
            <span className="text-[#888888] font-bold">
              Yorkville Rosedale and The Beaches
            </span>{" "}
            clinics. Whether you need daily, monthly, or specialty lenses, we'll
            find the right fit for you.
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
