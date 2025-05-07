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

const FindYourPerfectEyeGlass = () => {
  return (
    <div className="bg-white">
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          {/* Left Column with Title */}
          <div className="mb-8 md:mb-0 max-w-[712px] max-h-[256px] w-full">
            <h1 className="text-4xl font-bold text-combination-200 mb-4">
              Understanding Miyosmart: A Breakthrough in Myopia Control
            </h1>
            <div className="w-24 h-1 bg-combination-100 mb-8"></div>
            <div className="flex flex-col sm:flex-row">
              {/* Left Column with Image */}
              <div className="mb-4 sm:mb-0">
                <Image
                  src={perceptioneyecare}
                  alt="Eye examination process"
                  className="w-full sm:w-[328px] h-auto sm:h-[220px] object-cover"
                />
              </div>

              <div className="flex flex-col p-2 sm:p-5 w-full sm:w-[50%]">
                <p className="text-gray-600 mb-4 sm:mb-8 text-wrap">
                  MiyoSmart lenses are specifically designed to control myopia
                  progression, particularly in young children. They are
                  single-vision lenses that use a new technology called D.I.M.S,
                  and a two-year clinical study started in 2014 found that the
                  lenses can cut or reduce myopia progression by an average of
                  59%.
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
                src={myopiaInChildren}
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
                  src={MiyosmartglassePng1}
                  alt="Eye examination equipment"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="w-full sm:w-64 h-auto sm:h-48">
                <Image
                  src={progressionofmyopia}
                  alt="Eye examination"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>

            {/* Right Column with Benefits */}
            <div className="mt-12 ml-0 sm:ml-5">
              <div className="bg-gray-50 px-6 py-4 rounded-lg mb-6 inline-block">
                <h3 className="text-gray-500">How Does Miyosmart Work?</h3>
              </div>

              <h2 className="text-3xl font-bold text-combination-200 mb-8">
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

export default FindYourPerfectEyeGlass;
