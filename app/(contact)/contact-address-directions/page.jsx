import React from "react";
import SubHeader from "../../../components/SubHeader";
import GoogleMapEmbed from "../../../components/GoogleMapEmbed";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineAttachEmail } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import { GrMapLocation } from "react-icons/gr";

const Page = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="Address and Directions" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between mt-8 md:mt-20 px-4 md:px-6 gap-8">
        {/* Contact Information Column */}
        <div className="flex flex-col w-full md:w-[40%]">
          <h2 className="text-combination-200 text-3xl md:text-[37px] font-bold mb-4">
            360 Eyecare - Beaches
          </h2>
          <hr className="w-[65px] h-[2px] bg-combination-100 mb-8" />

          {/* Let's Talk Section */}
          <div className="mb-10 flex items-center">
            <div className="mr-4 mt-1">
              <MdOutlineAttachEmail
                size={40}
                className="text-combination-100"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-combination-200 mb-2">
                Let's Talk
              </h3>
              <p className="text-neutral-500">
                <span className="font-bold">Phone: </span>
                <Link
                  href="tel:4166983937"
                  className="hover:text-combination-100"
                >
                  416-698-3937
                </Link>
              </p>
              <p className="text-neutral-500">
                <span className="font-bold">Fax: </span>416-698-1161
              </p>
              <p className="text-neutral-500">
                <span className="font-bold">Email: </span>
                <Link
                  href="mailto:beaches@360eyecare.ca"
                  className="text-combination-100 hover:underline"
                >
                  beaches@360eyecare.ca
                </Link>
              </p>
            </div>
          </div>

          <hr className="w-full h-1 bg-neutral-100 mb-8" />

          {/* Business Hours Section */}
          <div className="mb-10 flex items-center">
            <div className="mr-4 mt-1">
              <PiPhoneCall size={40} className="text-combination-100" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-combination-200 mb-2">
                Business Hours
              </h3>
              <p className="text-neutral-500">
                <span className="font-bold">Monday: </span>9:00am – 7:00pm
              </p>
              <p className="text-neutral-500">
                <span className="font-bold">Tuesday: </span>9:00am – 8:00pm
              </p>
              <p className="text-neutral-500">
                <span className="font-bold">Wednesday: </span>9:00am – 6:00pm
              </p>
              <p className="text-neutral-500">
                <span className="font-bold">Thursday: </span>9:00am – 7:00pm
              </p>
              <p className="text-neutral-500">
                <span className="font-bold">Friday: </span>9:00am – 6:00pm
              </p>
              <p className="text-neutral-500">
                <span className="font-bold">Saturday: </span>10:00am – 5:00pm
              </p>
              <p className="text-neutral-500 font-bold mt-1">
                By appointment only
              </p>
            </div>
          </div>

          <hr className="w-full h-1 bg-neutral-100 mb-8" />

          {/* Our Address Section */}
          <div className="mb-10 flex items-center">
            <div className="mr-4 mt-1">
              <GrMapLocation size={40} className="text-combination-100" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-combination-200 mb-2">
                Our Address
              </h3>
              <p className="text-neutral-500">2199 Queen St E,</p>
              <p className="text-neutral-500">Toronto, ON M4E 1E5</p>
            </div>
          </div>
        </div>

        {/* Google Map Column */}
        <div className="w-full md:w-[60%] h-[400px] md:h-[600px] rounded-lg overflow-hidden">
          <GoogleMapEmbed
            src="https://www.google.com/maps?q=360+Eyecare+-+Beaches,+2199+Queen+St+E,+Toronto,+ON+M4E+1E5,+Canada&output=embed"
            title="360 Eyecare Beaches Location"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse justify-between mt-8 md:mt-20 px-4 md:px-6 gap-8 mb-14">
        {/* Contact Information Column */}
        <div className="flex flex-col w-full md:w-[40%]">
          <h2 className="text-combination-200 text-3xl md:text-[37px] font-bold mb-4">
            360 Eyecare - Yorkville Rosedale
          </h2>
          <hr className="w-[65px] h-[2px] bg-combination-100 mb-8" />

          {/* Let's Talk Section */}
          <div className="mb-10 flex items-center">
            <div className="mr-4 mt-1">
              <MdOutlineAttachEmail
                size={40}
                className="text-combination-100"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-combination-200 mb-2">
                Let's Talk
              </h3>
              <p className="text-neutral-500">
                <span className="font-bold">Phone: </span>
                <Link
                  href="tel:416-901-2725"
                  className="hover:text-combination-100"
                >
                  416-901-2725
                </Link>
              </p>
              <p className="text-neutral-500">
                <span className="font-bold">Fax: </span>416-901-2727
              </p>
              <p className="text-neutral-500">
                <span className="font-bold">Email: </span>
                <Link
                  href="mailto:yorkville@360eyecare.ca"
                  className="text-combination-100 hover:underline"
                >
                  yorkville@360eyecare.ca
                </Link>
              </p>
            </div>
          </div>

          <hr className="w-full h-1 bg-neutral-100 mb-8" />

          {/* Business Hours Section */}
          <div className="mb-10 flex items-center">
            <div className="mr-4 mt-1">
              <PiPhoneCall size={40} className="text-combination-100" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-combination-200 mb-2">
                Business Hours
              </h3>
              <p className="text-neutral-500">
                <span className="font-bold">Monday: </span>9:00am – 6:00pm
              </p>
              <p className="text-neutral-500">
                <span className="font-bold">Tuesday: </span>9:00am – 6:00pm
              </p>
              <p className="text-neutral-500">
                <span className="font-bold">Wednesday: </span>9:00am – 7:00pm
              </p>
              <p className="text-neutral-500">
                <span className="font-bold">Thursday: </span>9:00am – 6:00pm
              </p>
              <p className="text-neutral-500">
                <span className="font-bold">Friday: </span>9:00am – 6:00pm
              </p>
              <p className="text-neutral-500">
                <span className="font-bold">Saturday: </span>9:00am – 4:00pm
              </p>
            </div>
          </div>

          <hr className="w-full h-1 bg-neutral-100 mb-8" />

          {/* Our Address Section */}
          <div className="mb-10 flex items-center">
            <div className="mr-4 mt-1">
              <GrMapLocation size={40} className="text-combination-100" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-combination-200 mb-2">
                Our Address
              </h3>
              <p className="text-neutral-500">Concourse level,</p>
              <p className="text-neutral-500">55 Bloor St W Suite 03,</p>
              <p className="text-neutral-500">Toronto, ON M4W 1A5, Canada</p>
            </div>
          </div>
        </div>

        {/* Google Map Column */}
        <div className="w-full md:w-[60%] h-[400px] md:h-[600px] rounded-lg overflow-hidden">
          <GoogleMapEmbed
            src="https://www.google.com/maps?q=360+Eyecare+-+Yorkville+Rosedale,+55+Bloor+St+W,+Toronto,+ON+M4W+1A5,+Canada&output=embed"
            title="360 Eyecare Yorkville Rosedale Location"
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
