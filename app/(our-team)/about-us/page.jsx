import SubHeader from "../../../components/SubHeader";
import AboutUsSection from "../../../components/AboutUsSection";
import Associate from "../../../components/Associate";
import { FaCaretRight } from "react-icons/fa";
import Image from "next/image";
import { MeetOptometryImage } from "../../../constants/Images";
import Link from "next/link";
import { BeforeAfterSlider } from "../../../components/BeforeSlider";
import { FaArrowsToEye, FaUserDoctor } from "react-icons/fa6";
import { LuMonitorDot } from "react-icons/lu";

import { LuScanEye } from "react-icons/lu";
const cardData = [
  {
    icon: FaUserDoctor,
    title: "Our Story",
    description:
      "Delivering Toronto's ultimate eye care and eyewear experience with dedication.",
    bgColor: "bg-combination-100",
  },
  {
    icon: LuScanEye,
    title: "Our Mission",
    description:
      "Dedicated to providing exceptional eye care and improving vision health.",
    bgColor: "bg-combination-200",
  },
  {
    icon: LuMonitorDot,
    title: "Our Values",
    description:
      "Compassionate care, advanced technology, and patient-centered approach define us.",
    bgColor: "bg-combination-100",
  },
];
const AboutUs = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="About Us" />
      <AboutUsSection cardData={cardData} />
      <div className="w-full bg-[#F6F7F5] py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row  bg-white shadow-md">
          <div className=" ml-10 mb-20 lg:w-1/2">
            <div className="relative h-full">
              <Image
                src={MeetOptometryImage}
                alt="Eye care professionals with patients"
                className="object-cover"
                width={578}
                height={668}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>

          <div className="lg:w-[40%] ml-10 p-8  lg:p-0  flex flex-col gap-6">
            <div className="flex flex-col ">
              <h2 className="text-3xl lg:text-4xl font-bold text-combination-200 mb-6">
                Why Choose Us for Your Optometric Needs?
              </h2>
              <div className="w-24 h-1 bg-combination-100 mb-6"></div>
              <p className="text-neutral-500 mb-4">
                360 Eyecare's vision is based on providing our patients and
                customers with the full circle of eye care. Whether you need a
                routine comprehensive eye exam, advanced diagnostics, emergency
                eye consult, and treatment, or you're looking for a great
                eyewear product such as prescription glasses, sunglasses, or
                contact lenses, we are here to help.
              </p>
              <p className="text-neutral-500">
                We are committed to providing the Toronto community with the
                ultimate eyecare experience and eyewear products.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <div>
                <div className="flex flex-row gap-2 items-center mb-2">
                  <FaCaretRight size={20} className="text-combination-200" />
                  <p className="text-blue-900 font-semibold text-lg">
                    Payment Options
                  </p>
                </div>
                <p className="text-neutral-500 pl-7">
                  We also offer direct billing to your insurance providers (as
                  your plan allows).
                </p>
              </div>

              <div>
                <div className="flex flex-row gap-2 items-center mb-2">
                  <FaCaretRight size={20} className="text-combination-200" />
                  <p className="text-blue-900 font-semibold text-lg">
                    Financing Available
                  </p>
                </div>
                <p className="text-neutral-500 pl-7">
                  We have payment plans available through Affirm. Please call
                  our office if you have any questions about those payment
                  options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F6F7F5] w-full ">
        <div className="max-w-7xl mx-auto py-16 flex justify-between">
          <div className="flex flex-col gap-2 w-[55%]">
            <h3 className="text-combination-200 text-[37px] font-bold mt-2">
              Our Vision
            </h3>
            <hr className="w-24 h-1 bg-combination-100 mb-3" />
            <p className="text-neutral-500  tracking-wider text-lg leading-relaxed">
              360 Eyecare’s vision is to consistently provide our patients and
              customers with a full scope, customer service oriented eye care
              experience utilizing the most cutting edge technology. We strive
              to provide the best in class care through our comprehensive eye
              exams, our optical store, and our specialty{" "}
              <Link
                href="/dry-eye"
                className="/dry-eye text-combination-200 hover:text-combination-100"
              >
                dry eye
              </Link>{" "}
              and{" "}
              <Link
                href="/myopia-control"
                className="text-combination-200 hover:text-combination-100"
              >
                myopia control clinics.
              </Link>{" "}
            </p>
          </div>
          <BeforeAfterSlider />
        </div>
      </div>

      <Associate />
    </main>
  );
};

export default AboutUs;
