import { FaUserMd } from "react-icons/fa";
import SubHeader from "../../../components/SubHeader";
import DetailsDescripton from "../../../components/common/DetailsDescripton";
import {
  CustomLensesImage,
  ourCustomLensesImage,
} from "../../../constants/prescriptionLenses";
import BookExamCommon from "components/common/BookExampCommon";
import Faqs from "components/Faqs";
import { customlensfaqs } from "constants/Constants";
import {
  DataDescription,
  ContactFeatures,
  Benefits,
  CustomContactLensServices,
  WeOffer,
  whyChooseData,
  CustomLensesBullets,
  whyChooseLink,
} from "./customData";
export async function generateMetadata() {
  return {
    title: "Custom Lenses Toronto | Digital Lenses | 360 Eyecare",
    description:
      "Get custom contact lenses in Toronto for a perfect fit and enhanced vision. Enjoy comfort, precision, and personalized solutions.",
    openGraph: {
      title: "Custom Lenses Toronto | Digital Lenses | 360 Eyecare",
      description:
        "Get custom contact lenses in Toronto for a perfect fit and enhanced vision. Enjoy comfort, precision, and personalized solutions.",
      url: "https://www.360eyecare.ca/custom-lenses-toronto/",
      siteName: "360 Eyecare",
      type: "website",
    },
    alternates: {
      canonical: "https://www.360eyecare.ca/custom-lenses-toronto/",
    },
  };
}

const page = () => {
  return (
    <main className="pt-[110px] bg-[#F6F7F5]">
      <SubHeader text="Custom Contact Lenses" />
      <div className="max-w-7xl mx-auto my-16 flex flex-wrap justify-between">
        <DetailsDescripton
          title="Custom Lenses in Toronto: Tailored to You"
          description={DataDescription}
          image={CustomLensesImage}
        />
        <p className="text-neutral-500 px-4">
          {" "}
          There are several common reasons why people choose custom contact
          lenses:
        </p>
        <div className="flex flex-col gap-4 px-4">
          {ContactFeatures &&
            ContactFeatures.map((item, index) => (
              <span className="flex flex-col gap-2 text-neutral-500 ">
                <p className="font-semibold text-[#204066] text-[20px]">
                  {index + 1}. {item.title}:
                </p>
                {item.desc}
              </span>
            ))}
        </div>
        <p className="text-[#204066] font-bold text-4xl mt-16 flex flex-col px-4">
          Benefits of Custom Contact Lenses
          <span className="text-neutral-500 font-normal text-[16px]">
            Custom contact lenses offer several benefits compared to standard
            lenses:
          </span>
        </p>
        <div className="flex flex-col gap-4 px-4">
          {Benefits &&
            Benefits.map((item, index) => (
              <span className="flex flex-col gap-2 text-neutral-500 ">
                <p className="font-semibold text-[#204066] text-[20px]">
                  {index + 1}. {item.title}:
                </p>
                {item.desc}
              </span>
            ))}
        </div>
        <p className="text-[#204066] font-bold text-4xl mt-16 flex  flex-col px-4">
          Our Custom Contact Lens Services
          <span className="text-neutral-500 font-normal text-[16px]">
            Our clinic offers a comprehensive range of services for custom
            contact lenses, ensuring that each patient receives personalized
            care tailored to their unique vision needs. Our custom contact lens
            services include:
          </span>
        </p>
        <div className="flex flex-col gap-4 px-4">
          {CustomContactLensServices &&
            CustomContactLensServices.map((item, index) => (
              <span className="flex flex-col gap-2 text-neutral-500 ">
                <p className="font-semibold text-[#204066] text-[20px]">
                  {index + 1}. {item.title}:
                </p>
                {item.desc}
              </span>
            ))}
          <p className=" text-neutral-500">
            Our goal is to provide you with custom contact lenses that not only
            correct your vision but also offer exceptional comfort and quality.
            With our personalized approach to care, we strive to exceed your
            expectations and ensure your satisfaction with your custom contact
            lenses.
          </p>
        </div>
        <p className="text-[#204066] font-bold text-4xl mt-16 flex  flex-col px-4">
          Types of Custom Contact Lenses We Offer
          <span className="text-neutral-500 font-normal text-[16px]">
            We offer a range of custom contact lenses to meet the diverse needs
            of our patients. Our custom contact lens services include:
          </span>
        </p>
        <div className="flex flex-col gap-4 px-8">
          {WeOffer &&
            WeOffer.map((item, index) => (
              <span className="flex flex-col gap-2 text-neutral-500 ">
                <p className="font-semibold text-[#204066] text-[20px]">
                  {index + 1}. {item.title}:
                </p>
                {item.desc}
              </span>
            ))}
        </div>
      </div>
      <BookExamCommon
        icon={<FaUserMd />}
        title="Ready for Custom Lenses? call us Today"
        phones={[
          { label: "Beaches", number: "416-698-3937" },
          { label: "Rosedale", number: "416-901-2725" },
        ]}
        description="Get started with custom lenses tailored to your unique vision needs. Our experts are ready to assist you"
        buttonText="Book An Appointment"
        buttonLink="/book-eye-exam"
      />
      <DetailsDescripton
        title="Why Choose Our Custom Lenses?"
        description={whyChooseData}
        image={ourCustomLensesImage}
        bullets={CustomLensesBullets}
        url={whyChooseLink}
        noCatalog
        reverse
      />

      <div className="max-w-6xl mx-auto h-auto mb-14">
        {/* Background "FAQ" text */}
        <h1 className="relative text-[120px] font-extrabold text-gray-200 top-10 left-4 z-0 select-none">
          FAQ
        </h1>

        {/* Foreground text */}
        <h2 className="ml-4 text-3xl md:text-4xl font-extrabold font-poppins text-combination-200 z-10">
          Frequently Asked Questions
        </h2>

        <p className="text-neutral-500 ml-4 mb-4 mt-2">
          While some people enjoy making a fashion statement with a pair of chic
          eyeglasses, others prefer doing without them. Contact lenses are great
          for this. They also provide a full field of unobstructed view, which
          is great for sports. A lot of facts and myths have been spread about
          contacts; let’s look at some of them and whether they are true or not:
        </p>

        {/* Underline */}
        <div className="ml-4 w-32 h-1 bg-combination-100 mt-3"></div>
        <div className="ml-4 mt-6 mb-10">
          <Faqs faqData={customlensfaqs} />
        </div>
      </div>
    </main>
  );
};

export default page;
