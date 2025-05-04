import Image from "next/image";
import {
  UnderstandImage1,
  UnderstandImage2,
  UnderstandImage3,
  UnderstandImage4,
} from "../constants/Images";
import { FaArrowRightLong } from "react-icons/fa6";

const EyeConditionsPage = () => {
  return (
    <div className="bg-white">
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          {/* Left Column with Title */}
          <div className="mb-8 md:mb-0 max-w-[712px] max-h-[256px] w-full">
            <h1 className="text-4xl font-bold text-combination-200 mb-4">
              Understanding Common Eye Conditions
            </h1>
            <div className="w-24 h-1 bg-combination-100 mb-8"></div>
            <div className="flex flex-col sm:flex-row">
              {/* Left Column with Image */}
              <div className="mb-4 sm:mb-0">
                <Image
                  src={UnderstandImage1}
                  alt="Eye examination process"
                  className="w-full sm:w-[328px] h-auto sm:h-[220px] object-cover"
                />
              </div>

              <div className="flex flex-col p-2 sm:p-5 w-full sm:w-[50%]">
                <p className="text-gray-600 mb-4 sm:mb-8 text-wrap">
                  Sight is a primary sense. Whether you notice signs of a vision
                  problem or not, it's important that you also go for regular
                  eye exams routinely as recommended by your optometrist.
                </p>

                <button className="bg-combination-100 text-white hover:text-combination-100 px-8 py-3 rounded-full hover:bg-combination-200 transition duration-300 w-max">
                  Book Your Eye Exam
                </button>
              </div>

              {/* Right Column with Image */}
              <div className="relative"></div>
            </div>
            <div className="flex flex-col sm:flex-row items-end ml-0 sm:ml-[70px] mt-4 sm:mt-0">
              <div className="hidden sm:block w-[50px] h-[180px] bg-combination-100"></div>
              <Image
                src={UnderstandImage4}
                alt="Child eye examination"
                className="w-full sm:w-[500px] h-auto sm:h-[250px] object-cover"
              />
            </div>
          </div>

          {/* Right Column with Images */}
          <div className="flex flex-col space-x-0 sm:space-x-4 w-full md:w-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-0">
              <div className="w-full sm:w-64 h-auto sm:h-48 mb-4 sm:mb-0">
                <Image
                  src={UnderstandImage2}
                  alt="Eye examination equipment"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="w-full sm:w-64 h-auto sm:h-48">
                <Image
                  src={UnderstandImage3}
                  alt="Eye examination"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>

            {/* Right Column with Benefits */}
            <div className="mt-12 ml-0 sm:ml-5">
              <div className="bg-gray-50 px-6 py-4 rounded-lg mb-6 inline-block">
                <h3 className="text-gray-500">Our Commitment to Excellence</h3>
              </div>

              <h2 className="text-3xl font-bold text-combination-200 mb-8">
                Why Choose Our Eye Clinic
              </h2>

              <ul className="space-y-4">
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
                        className="text-combination-100"
                      />
                      <span className="text-gray-600">{item}</span>
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
