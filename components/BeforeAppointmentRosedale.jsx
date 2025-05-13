"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BeforeAppointmentRosedale = () => {
  return (
    <div className="w-full bg-[#28305F] py-12 px-4">
      <div className="max-w-7xl mx-auto md:px-[60px] flex flex-col">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="font-poppins font-semibold text-white text-2xl md:text-[28px] tracking-wide">
            Do you have any questions before your appointment?
          </h2>
        </div>

        {/* Responsive Grid for Columns */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {/* Let's Talk Section */}
          <div className="border border-combination-100 p-6 flex flex-col gap-6">
            <p className="font-poppins font-semibold text-white text-xl md:text-[22px]">
              Let's Talk
            </p>
            {[
              {
                icon: "/location/icons/call.svg",
                head: "416-901-2725",
                link: "tel:416-901-2725",
              },
              {
                icon: "/location/icons/fax.svg",
                head: "416-901-2727",
                link: "tel:416-901-2727",
              },
              {
                icon: "/location/icons/email.svg",
                head: "yorkville@360eyecare.ca",
                link: "mailto:yorkville@360eyecare.ca",
              },
            ].map((item) => (
              <div key={item.head} className="flex flex-row gap-3 items-center">
                <div className="w-8 h-8 bg-combination-100 rounded-[6px] flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt="Contact Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <Link href={item.link} className="text-base text-white">
                  {item.head}
                </Link>
              </div>
            ))}
          </div>

          {/* Business Hours Section */}
          <div className="border border-combination-100 p-6 flex flex-col gap-6">
            <p className="font-poppins font-semibold text-white text-xl md:text-[22px]">
              Business Hours
            </p>

            <div className="grid grid-cols-1 gap-y-3">
              {[
                { head: "Mon : ", para: " 9:00am – 6:00pm" },
                { head: "Tue : ", para: " 9:00am – 6:00pm" },
                { head: "Wed : ", para: " 9:00am – 7:00pm" },
                { head: "Thur : ", para: " 9:00am – 6:00pm" },
                { head: "Fri : ", para: " 9:00am – 6:00pm" },
                { head: "Sat : ", para: "9:00am – 4:00pm" },
              ].map((item) => (
                <div
                  key={item.head}
                  className="flex flex-row gap-3 items-center"
                >
                  <Image
                    src={"/location/icons/clock.svg"}
                    alt="Clock Icon"
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
          <div className="border border-combination-100 p-6 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-6">
              <p className="font-poppins font-semibold text-white text-xl md:text-[22px]">
                Our Address
              </p>

              <div className="flex flex-row gap-2 items-center">
                <Image
                  src={"/location/icons/location.svg"}
                  alt="Location Icon"
                  width={24}
                  height={24}
                />
                <p className="text-base text-white font-normal">
                  Concourse level, 55 Bloor St W Suite 03, Toronto, ON M4W 1A5,
                  Canada
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Image
                src={"/location/icons/redo.svg"}
                alt="Direction Icon"
                width={24}
                height={24}
              />
              <Link
                href="https://www.google.com/maps/dir//360+Eyecare+-+Yorkville+Rosedale+Concourse+Level+55+Bloor+St+W+Suite+03+Toronto,+ON+M4W+1A5,+Canada/@43.6695695,-79.3886079,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x882b35d768b1c51d:0x484cf43a7093e7e0"
                className="text-combination-100 underline cursor-pointer hover:text-opacity-80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Direction
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAppointmentRosedale;
