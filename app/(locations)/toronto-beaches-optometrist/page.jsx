import React from "react";
import SubHeader from "../../../components/SubHeader";
import {
  BeachImage,
  EyeCareSetup,
  EyeChairImage,
  SamBarramImage,
  SamBarramImage2,
  YorkVilleRosedale,
} from "../../../constants/Images";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import {
  beachesFaqs,
  eyeCareServices,
  whyChoose360,
} from "../../../constants/Services";

const TorontoBeachesOptometrist = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="360 Eyecare – The Beaches" />

      <div className="bg-[#F6F7F5] ">
        <div className="flex flex-col gap-8 bg-white mx-12">
          <div className="mx-12 bg-white md:px-20 py-8 flex justify-between ">
            <div className="w-[50%]">
              <Image
                src={BeachImage}
                alt="Beach Image"
                width={650}
                height={668}
                className=""
              />
            </div>

            <div className="flex flex-col gap-2 w-[45%]">
              <h3 className="font-bold text-4xl text-combination-200 text-wrap">
                360 Eyecare – The Beaches, Toronto
              </h3>
              <hr className="w-24 h-1 bg-combination-100 mb-4" />
              <p className="font-[700] text-neutral-500 text-base mb-2">
                Your Trusted Optometry Clinic in The Beaches, Toronto
              </p>
              <p className="text-neutral-500 text-base mb-6 leading-relaxed tracking-wide">
                At{" "}
                <span className="font-[700] text-neutral-500 text-base ">
                  360 Eyecare – The Beaches
                </span>
                , we deliver high-quality, patient-focused vision care to
                individuals and families across The Beaches, Leslieville, East
                Danforth, Upper Beaches, Danforth Village, and near areas. Our
                The Beaches Optometrist team offer comprehensive eye exams,
                advanced dry eye treatment,{" "}
                <Link
                  href="/pediatric-eye-care"
                  className="text-combination-200 hover:text-combination-100"
                >
                  pediatric eye care
                </Link>
                , or emergency eye services to ensure the best possible vision
                health for you and your family.
              </p>
              <Link
                href="/beaches-book-an-appointment"
                className="px-8 py-2 flex justify-center items-center bg-combination-100 text-white text-nowrap font-bold rounded-full hover:bg-combination-200 transition-colors w-[220px]"
              >
                Book an Eye Exam Today!
              </Link>
            </div>
          </div>

          <div className="mx-12 bg-white md:px-20 py-8 flex flex-row-reverse justify-between ">
            <div className="w-[50%] flex justify-center">
              <Image
                src={SamBarramImage2}
                alt="Beach Image"
                width={650}
                height={668}
                className="w-[320px] h-[427px] object-contain"
              />
            </div>

            <div className="flex flex-col gap-2 w-[45%]">
              <h3 className="font-bold text-4xl text-combination-200 text-wrap">
                Meet Our Founder: The Best Eye Doctor in The Beaches
              </h3>
              <hr className="w-24 h-1 bg-combination-100 mb-4" />

              <p className="text-neutral-500 text-base mb-6 leading-relaxed tracking-wide">
                Dr. Sam Baraam, the lead optometrist at 360 Eyecare – The
                Beaches, is recognized as one of the top eye doctors in The
                Beaches, Toronto. He is celebrated for delivering exceptional
                patient care, cutting-edge treatment solutions, and a commitment
                to the local community. With extensive experience and a passion
                for eye health, Dr. Baraam is certified to treat and manage
                ocular disease and is thoroughly trained in Cataract management
                and Laser vision correction procedures. He is also further
                trained in binocular vision and visual-perceptual therapy.
                <Link
                  href={"/team-members/dr-sam-baraam"}
                  className="text-combination-200 hover:text-combination-100"
                >
                  Dr. Sam Baraam{" "}
                </Link>
                ensures that each patient receives personalized, top-quality
                vision care on each visit to the eye clinic in The Beaches,
                Toronto.
              </p>
              <Link
                href="/beaches-book-an-appointment"
                className="px-8 py-2 flex justify-center items-center bg-combination-100 text-white text-nowrap font-bold rounded-full hover:bg-combination-200 transition-colors w-[220px]"
              >
                Book An Appointment Now!
              </Link>
            </div>
          </div>

          <div className="mx-12 bg-white md:px-20 py-8 flex  justify-between ">
            <div className="w-[50%] flex justify-center">
              <Image
                src={EyeChairImage}
                alt="Eye Chair Image"
                width={400}
                height={400}
                className="w-[400px] h-[400px] object-contain "
              />
            </div>

            <div className="flex flex-col gap-2 w-[45%]">
              <h3 className="font-bold text-4xl text-combination-200 text-wrap mb-2">
                Why Choose 360 Eyecare Beaches For Your Eye Care?
              </h3>
              <hr className="w-24 h-1 bg-combination-100 mb-6" />

              <div className="flex flex-col gap-4">
                {whyChoose360.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex flex-row gap-4">
                      <FaPlay size={30} className="text-combination-100" />
                      <h4 className="font-bold text-2xl text-combination-200">
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

          <div className="mx-12 bg-white md:px-20 py-8 flex flex-row-reverse  justify-between ">
            <div className="w-[50%] flex flex-col gap-10 items-start">
              <Image
                src={EyeCareSetup}
                alt="eye care setup"
                width={548}
                height={368}
                className="w-[548px] h-[368px] object-contain "
              />
              <Image
                src={YorkVilleRosedale}
                alt="York villa place"
                width={548}
                height={368}
                className="w-[548px] h-[368px] object-contain "
              />
            </div>

            <div className="flex flex-col gap-2 w-[45%]">
              <h3 className="font-bold text-4xl text-combination-200 text-wrap mb-2">
                Our Eye Care Services
              </h3>
              <hr className="w-24 h-1 bg-combination-100 mb-6" />

              <div className="flex flex-col gap-4">
                {eyeCareServices.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex flex-row gap-4">
                      <FaPlay size={30} className="text-combination-100" />
                      <h4 className="font-bold text-2xl text-combination-200">
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

          <div className="flex flex-col gap-4 mx-12 px-20 my-20">
            <h3 className="font-bold text-4xl text-combination-200 text-wrap mb-2">
              Where to Find Us Near You?
            </h3>
            <hr className="w-24 h-1 bg-combination-100 mb-2" />
            <p className="text-base text-neutral-500">
              <span className="font-bold text-base ">Address:</span> 2199 Queen
              St E, Toronto, ON M4E 1E5.
            </p>
            <p className="text-base text-neutral-500">
              Our beaches optometry clinic is located between Coxwell Avenue and
              Victoria Park Avenue along Queen Street East in The Beaches,
              Toronto.
            </p>
            <p className="text-base text-neutral-500">
              <span className="font-bold text-base ">
                Neighbourhoods Served:
              </span>
              The Beaches, Leslieville, East Danforth, Upper Beaches, Birch
              Cliff, Scarborough Bluffs, and surrounding areas.
            </p>
            <p className="text-base text-neutral-500">
              <span className="font-bold text-base ">
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
              you’re looking for an{" "}
              <Link
                href="/yorkville-rovedale-optometrist"
                className="text-combination-200 hover:text-combination-100"
              >
                eye doctor near you
              </Link>{" "}
              in Yorkville, Toronto.
            </p>
          </div>

          <div className="flex flex-col gap-4 mx-12 px-20">
            <h3 className="font-bold text-4xl text-combination-200 text-wrap mb-2">
              FAQs (Frequently Asked Questions)
            </h3>
            <hr className="w-24 h-1 bg-combination-100 mb-2" />
            {beachesFaqs.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex flex-row gap-4">
                  <FaPlay size={30} className="text-combination-100" />
                  <h4 className="font-bold text-2xl text-combination-200">
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
    </main>
  );
};

export default TorontoBeachesOptometrist;
