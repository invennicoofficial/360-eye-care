import SubHeader from "../../../components/SubHeader";
import AboutUsSection from "../../../components/AboutUsSection";
import Associate from "../../../components/Associate";
import { FaCaretRight } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { LuMonitorDot, LuScanEye } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { BeforeAfterSlider } from "../../../components/BeforeSlider";
import { MeetOptometryImage } from "../../../constants/Images";

// Card data organized in one place for better maintenance
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

// Component for section dividers to maintain consistency
const SectionDivider = () => (
  <div className="w-24 h-1 bg-combination-100 mb-6"></div>
);

// Component for feature items to maintain consistency
const FeatureItem = ({ title, description }) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <FaCaretRight size={20} className="text-combination-100 flex-shrink-0" />
      <p className="text-combination-200 font-semibold text-lg">{title}</p>
    </div>
    <p className="text-neutral-500 pl-7">{description}</p>
  </div>
);

const AboutUs = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="About Us" />
      <AboutUsSection cardData={cardData} />

      {/* Why Choose Us Section */}
      <section className="w-full px-4 sm:mx-10 bg-white py-8 sm:py-16">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row bg-white overflow-hidden">
            {/* Image Container */}
            <div className="lg:w-1/2 w-full">
              <div className="relative ">
                <Image
                  src={MeetOptometryImage}
                  alt="Eye care professionals with patients"
                  className="object-cover w-full h-full"
                  width={578}
                  height={668}
                  priority
                />
              </div>
            </div>

            {/* Content Container */}
            <div className="lg:w-1/2 p-4 sm:p-8 lg:p-10 flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-combination-200 mb-4 sm:mb-6">
                  Why Choose Us for Your Optometric Needs?
                </h2>
                <SectionDivider />
                <p className="text-neutral-500 mb-4">
                  360 Eyecare's vision is based on providing our patients and
                  customers with the full circle of eye care. Whether you need a
                  routine comprehensive eye exam, advanced diagnostics,
                  emergency eye consult, and treatment, or you're looking for a
                  great eyewear product such as prescription glasses,
                  sunglasses, or contact lenses, we are here to help.
                </p>
                <p className="text-neutral-500">
                  We are committed to providing the Toronto community with the
                  ultimate eyecare experience and eyewear products.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:gap-6 mt-2">
                <FeatureItem
                  title="Payment Options"
                  description="We also offer direct billing to your insurance providers (as your plan allows)."
                />
                <FeatureItem
                  title="Financing Available"
                  description="We have payment plans available through Affirm. Please call our office if you have any questions about those payment options."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="bg-[#F6F7F5] w-full">
        <div className="max-w-7xl mx-auto py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex flex-col gap-2 w-full lg:w-1/2">
              <h3 className="text-combination-200 text-2xl sm:text-3xl lg:text-4xl font-bold">
                Our Vision
              </h3>
              <SectionDivider />
              <p className="text-neutral-500 tracking-wider text-base sm:text-lg leading-relaxed">
                360 Eyecare's vision is to consistently provide our patients and
                customers with a full scope, customer service oriented eye care
                experience utilizing the most cutting edge technology. We strive
                to provide the best in class care through our comprehensive eye
                exams, our optical store, and our specialty{" "}
                <Link
                  href="/dry-eye-syndrome-keratograph-i-pen"
                  className="text-combination-200 hover:text-combination-100 transition-colors"
                >
                  dry eye
                </Link>{" "}
                and{" "}
                <Link
                  href="/myopia-control-clinic"
                  className="text-combination-200 hover:text-combination-100 transition-colors"
                >
                  myopia control clinics
                </Link>
                .
              </p>
            </div>
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
              <BeforeAfterSlider />
            </div>
          </div>
        </div>
      </section>

      <Associate />
    </main>
  );
};

export default AboutUs;
