"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const BeforeYourAppoinment = () => {
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
    <div className="w-full bg-[#28305F] py-12 px-4 md:px-0">
      <div className="max-w-7xl mx-auto md:px-[60px] flex flex-col md:flex-row md:justify-between gap-10">
        {/* Contact Information Column */}
        <div className="w-full md:w-[50%] flex flex-col gap-6">
          {/* Section Title */}
          <div className="text-center md:text-left">
            <h2 className="font-poppins font-semibold text-white text-2xl md:text-[28px] tracking-wide">
              Do you have any questions before your appointment?
            </h2>
          </div>

          {/* Let's Talk Section */}
          <div className="w-full border border-combination-100 p-6 md:p-10 flex flex-col gap-6">
            <p className="font-poppins font-semibold text-white text-xl md:text-[22px]">
              Let's Talk
            </p>
            {[
              {
                icon: "/location/icons/call.svg",
                head: "416-698-3937",
                link: "tel:416-698-3937",
              },
              {
                icon: "/location/icons/fax.svg",
                head: "416-698-1161",
                link: "tel:416-698-1161",
              },
              {
                icon: "/location/icons/email.svg",
                head: "beaches@360eyecare.ca",
                link: "mailto:beaches@360eyecare.ca",
              },
            ].map((item) => (
              <div key={item.head} className="flex flex-row gap-3 items-center">
                <div className="w-8 h-8 bg-combination-100 rounded-[6px] flex items-center justify-center">
                  <Image src={item.icon} alt="Icon" width={24} height={24} />
                </div>
                <Link href={item.link} className="text-base text-white">
                  {item.head}
                </Link>
              </div>
            ))}
          </div>

          {/* Business Hours Section */}
          <div className="w-full border border-combination-100 p-6 md:p-10 flex flex-col gap-6">
            <p className="font-poppins font-semibold text-white text-xl md:text-[22px]">
              Business Hours
            </p>

            <div className="grid grid-cols-2 gap-x-2 gap-y-3">
              {[
                { head: "Mon : ", para: " 9:00am – 7:00pm" },
                { head: "Tue : ", para: " 9:00am – 9:00pm" },
                { head: "Wed : ", para: " 9:00am – 6:00pm" },
                { head: "Thur : ", para: " 9:00am – 7:00pm" },
                { head: "Fri : ", para: " 9:00am – 8:00pm" },
                { head: "Sat : ", para: "10:00am – 5:00pm" },
              ].map((item) => (
                <div
                  key={item.head}
                  className="flex flex-row gap-3 items-center"
                >
                  <Image
                    src={"/location/icons/clock.svg"}
                    alt="Icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-base text-white">
                    {item.head}
                    <span className="text-white">{item.para}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Address Section */}
          <div className="w-full border border-combination-100 p-6 md:p-10 flex flex-col gap-6">
            <p className="font-poppins font-semibold text-white text-xl md:text-[22px]">
              Our Address
            </p>
            <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src={"/location/icons/location.svg"}
                  alt="Icon"
                  width={24}
                  height={24}
                />
                <p className="text-base text-white font-normal text-center md:text-left">
                  2199 Queen St E, Toronto, ON M4E 1E5
                </p>
              </div>
              <div className="flex flex-row items-center gap-2 mt-2 md:mt-0">
                <Image
                  src={"/location/icons/redo.svg"}
                  alt="Icon"
                  width={24}
                  height={24}
                />
                <Link
                  href="https://www.google.com/maps?daddr=2199+Queen+St+E,+Toronto,+ON+M4E+1E5,+Canada"
                  className="text-combination-100 underline cursor-pointer"
                >
                  Direction
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="w-full md:w-[44%] flex flex-col gap-6">
          <h2 className="font-poppins font-semibold text-2xl text-white  md:text-[36px] tracking-wide text-center md:text-left leading-normal">
            Book Your Eye Exam Today at Our Beaches Optometry
          </h2>

          {/* Scheduler */}
          <div
            className="z-10 w-full  flex gap-6 text-combination-100 bg-[#28305F]  "
            id="book-appointment"
          >
            <gsp-scheduler
              className="w-full "
              account_id="3709"
            ></gsp-scheduler>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeYourAppoinment;
