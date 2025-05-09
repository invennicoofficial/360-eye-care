import Image from "next/image";
import {
  UnderstandImage1,
  UnderstandImage2,
  UnderstandImage3,
  UnderstandImage4,
} from "../../constants/Images";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  MiyosmartglassePng1,
  myopiaInChildren,
  perceptioneyecare,
  progressionofmyopia,
} from "constants/prescriptionLenses";
import Link from "next/link";

const FindYourPerfectEyeGlass = () => {
  return (
    <div className="bg-white">
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between gap-6  mb-16">
          {/* Left Column */}
          <div className="w-full md:max-w-[55%]">
            <h1 className="text-3xl sm:text-4xl font-bold text-combination-200 mb-4">
              Understanding Miyosmart: A Breakthrough in Myopia Control
            </h1>
            <div className="w-24 h-1 bg-combination-100 mb-8"></div>

            <div className="flex flex-col gap-6">
              {/* Top Image and Text */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full sm:w-[328px]">
                  <Image
                    src={perceptioneyecare}
                    alt="Eye examination process"
                    className="w-full h-auto object-cover rounded"
                  />
                </div>

                <div className="flex flex-col justify-between w-full">
                  <p className="text-gray-600">
                    MiyoSmart lenses are specifically designed to control myopia
                    progression, particularly in young children. They are
                    single-vision lenses that use a new technology called
                    D.I.M.S, and a two-year clinical study started in 2014 found
                    that the lenses can cut or reduce myopia progression by an
                    average of 59%.
                  </p>

                  <Link
                    href="/book-eye-exam"
                    className="mt-6 font-bold bg-combination-100 text-white hover:text-combination-100 px-6 py-3 rounded-full hover:bg-combination-200 transition duration-300 w-max"
                  >
                    Book An Exam
                  </Link>
                </div>
              </div>

              {/* Bottom Image with bar */}
              <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                <div className="hidden sm:block w-[50px] h-[180px] bg-combination-100"></div>
                <div className="w-full sm:w-[500px]">
                  <Image
                    src={myopiaInChildren}
                    alt="Child eye examination"
                    className="w-full h-auto object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[40%] flex flex-col gap-6">
            {/* Images */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <Image
                  src={MiyosmartglassePng1}
                  alt="Eye examination equipment"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <Image
                  src={progressionofmyopia}
                  alt="Eye examination"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>

            {/* Benefit Section */}
            <div className="mt-8">
              <div className="bg-gray-50 px-4 py-3 rounded-lg mb-4 inline-block">
                <h3 className="text-gray-500 text-base">
                  How Does Miyosmart Work?
                </h3>
              </div>

              <h2 className="text-2xl font-bold text-combination-200 mb-6">
                Why Choose Our Eye Clinic
              </h2>

              <ul className="space-y-4">
                {[
                  "Miyosmart lenses use advanced optics to reduce the progression of myopia.",
                  "These lenses have a specially designed optical profile to control myopia.",
                  "They work by focusing light in a way that reduces eye strain.",
                  "Miyosmart glasses are a comfortable and effective myopia management solution.",
                  "The lenses are designed to be worn during the day.",
                  "They are suitable for children and young adults.",
                  "With Miyosmart, myopia control in Toronto is more accessible than ever.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaArrowRightLong
                      size={16}
                      className="text-combination-100 mt-1"
                    />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindYourPerfectEyeGlass;
