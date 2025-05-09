import Image from "next/image";
import {
  UnderstandImage1,
  UnderstandImage2,
  UnderstandImage3,
  UnderstandImage4,
} from "../constants/Images";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const EyeConditionsPage = () => {
  return (
    <div className="bg-[#F9F9F9]">
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8 sm:mb-16 gap-8">
          {/* Left Column with Title */}
          <div className="w-full lg:max-w-[712px]">
            <h1 className="text-3xl sm:text-4xl font-bold text-combination-200 mb-4">
              Understanding Common Eye Conditions
            </h1>
            <div className="w-24 h-1 bg-combination-100 mb-6 sm:mb-8"></div>

            {/* Top Image and CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* Left Column with Image */}
              <div className="w-full sm:w-1/2">
                <Image
                  src={UnderstandImage1}
                  alt="Eye examination process"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* CTA Box */}
              <div className="flex flex-col justify-between p-4 sm:p-5 w-full sm:w-1/2 ">
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  Sight is a primary sense. Whether you notice signs of a vision
                  problem or not, it's important that you also go for regular
                  eye exams routinely as recommended by your optometrist.
                </p>

                <Link
                  href={"/book-eye-exam"}
                  className="bg-combination-100 text-white hover:text-combination-100 px-6 py-3 rounded-full hover:bg-combination-200 transition duration-300 text-center w-[210px]"
                >
                  Book Your Eye Exam
                </Link>
              </div>
            </div>

            {/* Bottom Image Section */}
            <div className="flex flex-col sm:flex-row items-end mt-6 sm:mt-8">
              <div className="hidden sm:block w-12 h-32 lg:h-40 bg-combination-100"></div>
              <div className="w-full">
                <Image
                  src={UnderstandImage4}
                  alt="Child eye examination"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column with Images and Benefits */}
          <div className="w-full lg:w-auto mt-8 lg:mt-0">
            {/* Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="w-full h-48 sm:h-40 md:h-48">
                <Image
                  src={UnderstandImage2}
                  alt="Eye examination equipment"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="w-full h-48 sm:h-40 md:h-48">
                <Image
                  src={UnderstandImage3}
                  alt="Eye examination"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-8 sm:mt-12">
              <div className="bg-gray-100 px-4 sm:px-6 py-3 sm:py-4 rounded-lg mb-4 sm:mb-6 inline-block">
                <h3 className="text-gray-500 text-sm sm:text-base">
                  Our Commitment to Excellence
                </h3>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-combination-200 mb-6 sm:mb-8">
                Why Choose Our Eye Clinic
              </h2>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Experienced team dedicated to your eye health.",
                  "State-of-the-art technology for accurate diagnoses.",
                  "Personalized treatment plans tailored to your needs.",
                  "Comprehensive eye care for patients of all ages.",
                  "Focus on patient education and preventive care.",
                  "Convenient locations with flexible scheduling options.",
                  "Commitment to providing compassionate and professional service.",
                ].map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-3">
                      <FaArrowRightLong
                        size={16}
                        className="text-combination-100 flex-shrink-0"
                      />
                      <span className="text-gray-600 text-sm sm:text-base">
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeConditionsPage;
