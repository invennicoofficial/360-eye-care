import SubHeader from "../../../components/SubHeader";
import {
  eyeCare360Image,
  EyeCareSetup,
  EyeChairImage,
  eyechairrosedale,
  opticalShopImage,
  rosevaleChairImage,
  SamBarramImage2,
  StoreFrontImage,
  YorkVilleRosedale,
} from "../../../constants/Images";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import Banner2 from "../../../components/Banner2";
import { MdAttachEmail } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import HappyClientBeaches from "../../../components/HappyClientBeaches";
import GoogleMapEmbed from "../../../components/GoogleMapEmbed";

import {
  beachesFaqs,
  eyeCareRosedale,
  eyeCareServices,
  whyChoose360,
  whyChoose360Rosedale,
} from "../../../constants/Constants";

const TorontoRosedaleOptometrist = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="360 Eyecare – Yorkville Rosedale" />

      <div className="bg-[#F6F7F5]">
        <div className="flex flex-col gap-8 bg-white mx-4 md:mx-12">
          {/* First Section */}
          <div className="mx-4 md:mx-12 bg-white md:px-20 py-8 flex flex-col md:flex-row md:justify-between gap-8">
            <div className="w-full md:w-[50%] flex justify-center">
              <Image
                src={eyeCare360Image}
                alt="Beach Image"
                width={650}
                height={668}
                className="w-full max-w-[650px] h-auto"
              />
            </div>

            <div className="flex flex-col gap-2 w-full md:w-[45%]">
              <h3 className="font-bold text-3xl md:text-4xl text-combination-200 text-wrap">
                360 Eyecare – The Beaches, Toronto
              </h3>
              <hr className="w-24 h-1 bg-combination-100 mb-4" />
              <p className="font-[700] text-neutral-500 text-base mb-2">
                Experience Premium Eye Care in Yorkville and Rosedale, Toronto
              </p>
              <p className="text-neutral-500 text-base mb-6 leading-relaxed tracking-wide">
                At 360 Eyecare, we are dedicated to providing exceptional eye
                care for our vibrant community. Serving Yorkville, Rosedale, The
                Annex, Summerhill, Church and Wellesley (The Village), and
                surrounding neighbourhoods, our optometry clinic offers
                state-of-the-art diagnostics, personalized treatment plans, and
                a curated selection of eyewear to suit your lifestyle. Whether
                you need a routine eye exam, advanced dry eye therapy, or
                specialized pediatric eye care, our yorkville optometrists are
                here to ensure optimal vision health for all ages.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/beaches-book-an-appointment"
                  className="px-8 py-2 flex justify-center items-center bg-combination-100 text-white text-nowrap font-bold rounded-full hover:bg-combination-200 transition-colors w-full md:w-[220px]"
                >
                  Book an Eye Exam
                </Link>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="mx-4 md:mx-12 bg-white md:px-20 py-8 flex flex-col md:flex-row-reverse md:justify-between gap-8">
            <div className="w-full md:w-[50%] flex justify-center">
              <Image
                src={SamBarramImage2}
                alt="Beach Image"
                width={320}
                height={427}
                className="w-[320px] h-auto max-h-[427px] object-contain"
              />
            </div>

            <div className="flex flex-col gap-2 w-full md:w-[45%]">
              <h3 className="font-bold text-3xl md:text-4xl text-combination-200 text-wrap">
                Meet Our Founder: A Leading Optometrist in Yorkville Rosedale
              </h3>
              <hr className="w-24 h-1 bg-combination-100 mb-4" />

              <p className="text-neutral-500 text-base mb-6 leading-relaxed tracking-wide">
                Dr. Sam Baraam, the driving force behind 360 Eyecare
                Yorkville-Rosedale, is recognized as one of Toronto’s prominent
                eye doctors. With a dedication to patient education, innovative
                treatments, and community engagement, Dr. Baraam provides
                personalized vision care to every patient who walks through our
                doors. Certified by the Canadian National Boards (CSAO), Dr.
                Baraam has also successfully completed all three parts of the US
                National Board examinations (NBEO). He’s now an active member of
                the Ontario Association of Optometrists, the Canadian
                Association of Optometrists, as well as the College of
                Optometrists in Vision Development (COVD).
              </p>
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/beaches-book-an-appointment"
                  className="px-8 py-2 flex justify-center items-center bg-combination-100 text-white text-nowrap font-bold rounded-full hover:bg-combination-200 transition-colors w-full md:w-[220px]"
                >
                  Book An Appointment Now!
                </Link>
              </div>
            </div>
          </div>

          {/* Third Section */}
          <div className="mx-4 md:mx-12 bg-white md:px-20 py-8 flex flex-col md:flex-row md:justify-between gap-8">
            <div className="w-full md:w-[50%] flex items-start">
              <Image
                src={eyechairrosedale}
                alt="Eye Chair Rosedale"
                width={600}
                height={600}
                className="w-[577px] h-[375px]  object-contain"
              />
            </div>

            <div className="flex flex-col gap-2 w-full md:w-[45%]">
              <h3 className="font-bold text-3xl md:text-4xl text-combination-200 text-wrap mb-2">
                Why Choose 360 Eyecare Beaches For Your Eye Care?
              </h3>
              <hr className="w-24 h-1 bg-combination-100 mb-6" />

              <div className="flex flex-col gap-4">
                {whyChoose360Rosedale.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex flex-row gap-4 items-center">
                      <FaPlay
                        size={24}
                        className="text-combination-100 min-w-[24px]"
                      />
                      <h4 className="font-bold text-xl md:text-2xl text-combination-200">
                        {item.head}
                      </h4>
                    </div>
                    <p className="text-neutral-500 text-base mb-6 leading-relaxed tracking-wide">
                      {item.para}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fourth Section */}
          <div className="mx-4 md:mx-12 bg-white md:px-20 py-8 flex flex-col md:flex-row-reverse md:justify-between gap-8">
            <div className="w-full md:w-[50%] flex flex-col gap-6 md:gap-10 items-center">
              <Image
                src={opticalShopImage}
                alt="eye care setup"
                width={548}
                height={368}
                className="w-full max-w-[548px] h-auto object-contain"
              />
              <Image
                src={rosevaleChairImage}
                alt="York villa place"
                width={548}
                height={368}
                className="w-full max-w-[548px] h-auto object-contain"
              />
            </div>

            <div className="flex flex-col gap-2 w-full md:w-[45%]">
              <h3 className="font-bold text-3xl md:text-4xl text-combination-200 text-wrap mb-2">
                Our Eye Care Services
              </h3>
              <hr className="w-24 h-1 bg-combination-100 mb-6" />

              <div className="flex flex-col gap-4">
                {eyeCareRosedale.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex flex-row gap-4 items-center">
                      <FaPlay
                        size={24}
                        className="text-combination-100 min-w-[24px]"
                      />
                      <h4 className="font-bold text-xl md:text-2xl text-combination-200">
                        {item.head}
                      </h4>
                    </div>
                    <p className="text-neutral-500 text-base mb-6 leading-relaxed tracking-wide">
                      {item.para}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Find Us Section */}
          <div className="flex flex-col gap-4 mx-4 md:mx-12 px-4 md:px-20 my-16 md:my-20">
            <h3 className="font-bold text-3xl md:text-4xl text-combination-200 text-wrap mb-2">
              Where to Find Us Near You?
            </h3>
            <hr className="w-24 h-1 bg-combination-100 mb-2" />
            <p className="text-base text-neutral-500">
              <span className="font-bold text-base">Address:</span> 2199 Queen
              St E, Toronto, ON M4E 1E5.
            </p>
            <p className="text-base text-neutral-500">
              Our beaches optometry clinic is located between Coxwell Avenue and
              Victoria Park Avenue along Queen Street East in The Beaches,
              Toronto.
            </p>
            <p className="text-base text-neutral-500">
              <span className="font-bold text-base">
                Neighbourhoods Served:
              </span>{" "}
              The Beaches, Leslieville, East Danforth, Upper Beaches, Birch
              Cliff, Scarborough Bluffs, and surrounding areas.
            </p>
            <p className="text-base text-neutral-500">
              <span className="font-bold text-base">
                Public Transit & Parking:
              </span>{" "}
              Our clinic is easily accessible via TTC with stops just steps from
              our door, and we offer convenient parking options nearby.
            </p>
            <p className="text-base text-neutral-500">
              Our other clinic,{" "}
              <Link
                href="/yorkville-rovedale-optometrist"
                className="text-combination-200 hover:text-combination-100"
              >
                360 Eyecare Yorkville Rosedale
              </Link>
              , is located in Yorkville, Toronto. You can visit us there if
              you're looking for an{" "}
              <Link
                href="/yorkville-rovedale-optometrist"
                className="text-combination-200 hover:text-combination-100"
              >
                eye doctor near you
              </Link>{" "}
              in Yorkville, Toronto.
            </p>
          </div>

          {/* FAQs Section */}
          <div className="flex flex-col gap-4 mx-4 md:mx-12 px-4 md:px-20 pb-10">
            <h3 className="font-bold text-3xl md:text-4xl text-combination-200 text-wrap mb-2">
              FAQs (Frequently Asked Questions)
            </h3>
            <hr className="w-24 h-1 bg-combination-100 mb-2" />
            {beachesFaqs.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex flex-row gap-4 items-center">
                  <FaPlay
                    size={24}
                    className="text-combination-100 min-w-[24px]"
                  />
                  <h4 className="font-bold text-xl md:text-2xl text-combination-200">
                    {item.head}
                  </h4>
                </div>
                <p className="text-neutral-500 text-base mb-6 leading-relaxed tracking-wide">
                  {item.para}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Banner2 />

        {/* Contact Section */}
        <div className="bg-[#f5f5f5] py-8 md:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-8 md:gap-10">
            {/* Left: Contact Information */}
            <div className="lg:w-1/2 space-y-8 md:space-y-10">
              <div>
                <h2 className="text-2xl md:text-[37px] font-bold text-combination-200 mb-3">
                  Do you have any questions before your appointment?
                </h2>
                <div className="w-36 h-1 bg-[#3cc0cc] mb-6 md:mb-8"></div>
              </div>

              {/* Let's Talk Section */}
              <div className="flex items-start space-x-4">
                <div className="text-[#3cc0cc] mt-1">
                  <TbPhoneCall size={36} className="text-combination-100" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#2d3e69] mb-2 md:mb-3">
                    Let's Talk
                  </h3>
                  <p className="text-gray-600 mb-1">Phone: 416-698-3937</p>
                  <p className="text-gray-600 mb-1">Fax: 416-698-1161</p>
                  <p className="text-gray-600">E-mail: beaches@360eyecare.ca</p>
                </div>
              </div>

              {/* Business Hours Section */}
              <div className="flex items-start space-x-4">
                <div className="text-[#3cc0cc] mt-1">
                  <MdAttachEmail size={36} className="text-combination-100" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#2d3e69] mb-2 md:mb-3">
                    Business Hours
                  </h3>
                  <p className="text-gray-600 mb-1">Monday: 9:00am – 7:00pm</p>
                  <p className="text-gray-600 mb-1">
                    Tuesday: 09:00am – 8:00pm
                  </p>
                  <p className="text-gray-600 mb-1">
                    Wednesday: 9:00am – 6:00pm
                  </p>
                  <p className="text-gray-600 mb-1">
                    Thursday: 9:00am – 7:00pm
                  </p>
                  <p className="text-gray-600 mb-1">Friday: 9:00am – 6:00pm</p>
                  <p className="text-gray-600 mb-1">
                    Saturday: 10:00am – 5:00pm
                  </p>
                  <p className="text-gray-600 italic">*By appointment only</p>
                </div>
              </div>

              {/* Address Section */}
              <div className="flex items-start space-x-4">
                <div className="text-[#3cc0cc] mt-1">
                  <SlLocationPin size={36} className="text-combination-100" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#2d3e69] mb-2 md:mb-3">
                    Our Address
                  </h3>
                  <p className="text-gray-600 mb-1">2199 Queen St E,</p>
                  <p className="text-gray-600 mb-4">Toronto, ON M4E 1E5</p>
                  <Link href="/book-appointment">
                    <button className="text-combination-100 font-medium cursor-pointer rounded-md transition-colors duration-200">
                      Book Your Eye Exam
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Images */}
            <div className="lg:w-1/2 space-y-6 md:space-y-8 mt-8 lg:mt-0">
              {/* Interior Image */}
              <div className="relative w-full overflow-hidden rounded-lg">
                <div className="flex flex-row items-end">
                  <div className="bg-combination-100 w-[80px] md:w-[132px] h-[120px] md:h-[180px]"></div>
                  <Image
                    src={YorkVilleRosedale}
                    alt="360 Eyecare Beaches Interior"
                    width={500}
                    height={300}
                    className="object-cover w-full h-auto"
                  />
                </div>
              </div>

              {/* Storefront Image */}
              <div className="relative w-full overflow-hidden rounded-lg">
                <Image
                  src={StoreFrontImage}
                  alt="360 Eyecare Beaches Storefront"
                  width={500}
                  height={300}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <HappyClientBeaches />

        <GoogleMapEmbed />
      </div>
    </main>
  );
};

export default TorontoRosedaleOptometrist;
