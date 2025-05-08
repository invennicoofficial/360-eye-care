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

const page = () => {
  const DataDescription = [
    "Custom contact lenses are specially made to fit the unique characteristics of an individual’s eyes. Unlike standard contact lenses, which come in pre-set sizes and parameters, custom lenses are crafted based on detailed measurements of the eye’s shape, size, and curvature. This customization ensures a better fit, improved comfort, and optimal vision correction for the wearer.",
    "Standard contact lenses are mass-produced and designed to fit a wide range of eye shapes and sizes. While these lenses work well for many people, they may not provide the necessary level of comfort or vision correction for individuals with specific needs. Custom lenses, on the other hand, are tailored to address these specific requirements, making them a preferred choice for many contact lens wearers.",
  ];

  const ContactFeatures = [
    {
      title: " Irregular Corneas",
      desc: "Individuals with irregular corneas, such as those with keratoconus or corneal scarring, may find that standard contact lenses do not provide adequate vision correction. Custom lenses can be designed to match the shape of the irregular cornea, providing better visual acuity and comfort.",
    },
    {
      title: "High Prescriptions",
      desc: "People with high degrees of nearsightedness, farsightedness, or astigmatism may require custom lenses to achieve optimal vision correction. Custom lenses can be made with higher optical powers and specialized designs to meet these needs.",
    },
    {
      title: "Astigmatism",
      desc: "Individuals with astigmatism may find that standard contact lenses do not provide clear vision. Custom lenses can be designed to correct astigmatism more effectively, resulting in sharper vision.",
    },
    {
      title: "Comfort",
      desc: "Some people have difficulty wearing standard contact lenses due to discomfort or irritation. Custom lenses can be made with materials and designs that are more comfortable for the individual, leading to a better wearing experience.",
    },
    {
      title: "Post-Surgical Needs",
      desc: "After certain eye surgeries, such as corneal transplants or refractive surgeries, the shape of the eye may be altered, making standard lenses less effective. Custom lenses can be designed to fit the post-surgical eye shape, providing improved vision correction.",
    },
  ];

  const Benefits = [
    {
      title: "Improved Comfort and Fi",
      desc: "Custom lenses are tailored to the specific curvature and size of an individual’s eye, providing a more comfortable wearing experience. The precise fit reduces the likelihood of lens movement and discomfort throughout the day.",
    },
    {
      title: "Enhanced Vision Correction",
      desc: "Custom lenses can correct a wide range of vision problems, including astigmatism, irregular corneas, and high prescriptions. These lenses can improve visual acuity and clarity by providing a more precise and personalized correction.",
    },
    {
      title: "Personalized Solutions for Various Eye Conditions:",
      desc: "Custom lenses can be designed to address specific eye conditions, such as keratoconus, corneal irregularities, and post-surgical complications. These lenses provide a tailored solution that standard lenses may not be able to achieve.",
    },
    {
      title: "Reduced Risk of Complications",
      desc: "The customized fit of custom lenses reduces the risk of complications such as dryness, irritation, and corneal abrasions. These lenses minimize the potential for discomfort and eye health issues by ensuring a proper fit.",
    },
    {
      title: "Improved Quality of Life",
      desc: "For individuals with complex vision needs, custom lenses can significantly improve their quality of life. By providing clear, comfortable vision, these lenses allow individuals to engage in daily activities with confidence and ease.",
    },
  ];

  const CustomContactLensServices = [
    {
      title: "Initial Consultation",
      desc: "During the initial consultation, our optometrist will perform a thorough eye examination to assess your vision and eye health. This examination will help determine if custom contact lenses are the right option for you.",
    },
    {
      title: "Custom Lens Selection",
      desc: "Based on the results of your examination, our optometrist will recommend the most suitable custom contact lens option for your specific needs. This may include lenses for astigmatism, keratoconus, irregular corneas, or high prescriptions.",
    },
    {
      title: " Custom Lens Fitting",
      desc: "Once the lens type has been determined, our optometrist will take detailed measurements of your eyes to ensure a precise fit. These measurements will be used to create comfortable custom lenses and provide optimal vision correction.",
    },
    {
      title: "Lens Ordering and Manufacturing",
      desc: "After the fitting, your custom contact lens order will be placed with our trusted manufacturing partners. These lenses are made to the exact specifications provided by our optometrist to ensure a perfect fit.",
    },
    {
      title: "Lens Dispensing and Training",
      desc: "Once your lenses arrive, we will provide a thorough fitting session to ensure you know how to properly insert, remove, and care for your custom lenses. We will also guide proper lens hygiene and maintenance to ensure the longevity of your lenses.",
    },
    {
      title: " Follow-up Appointments",
      desc: "Regular follow-up appointments will be scheduled to monitor your progress and ensure that your custom lenses are providing the desired vision correction. Adjustments may be made as needed to ensure optimal comfort and vision.",
    },
  ];

  const WeOffer = [
    {
      title: "Rigid Gas Permeable (RGP) Lenses",
      desc: "RGP lenses are made from a durable plastic that allows oxygen to pass through to the cornea, ensuring eye health and comfort. These lenses provide crisp vision and are suitable for various vision corrections, including astigmatism and presbyopia.",
    },
    {
      title: "Orthokeratology (OrthoK) Lenses",
      desc: "OrthoK lenses are specially designed to reshape the cornea overnight, temporarily correcting nearsightedness. These lenses are worn while sleeping and removed during the day, providing clear vision without the need for glasses or contacts during waking hours.",
    },
    {
      title: "Scleral Lenses",
      desc: "Scleral lenses are large, gas-permeable lenses that vault over the cornea and rest on the sclera (the white part of the eye). These lenses are ideal for individuals with irregular corneas, dry eyes, or other corneal irregularities, providing improved comfort and vision correction.",
    },
    {
      title: "Hybrid Lenses",
      desc: "Hybrid lenses combine a rigid gas permeable center with a soft lens skirt, offering the clarity of RGP lenses with the comfort of soft lenses. These lenses are suitable for individuals with irregular corneas or astigmatism who may find traditional RGP lenses uncomfortable.",
    },
    {
      title: "Other Specialized Options",
      desc: "In addition to the above, we offer other specialized custom contact lens options to meet specific vision needs. This includes lenses for post-surgical correction, keratoconus, and other complex eye conditions.",
    },
  ];

  const whyChooseData = [
    "Looking for custom contact lenses in Toronto? Look no further than our expertly crafted lenses! Our lenses are designed for superior vision and unparalleled comfort, making them the perfect choice for anyone looking for a reliable and effective solution. Experience the difference for yourself and try our custom lenses today!",
  ];

  const CustomLensesBullets = [
    "Precision-made to match your unique prescription.",
    "Enhanced durability for long-lasting wear.",
    "Customized fit for all-day comfort.",
  ];

  const whyChooseLink = [
    {
      title: "Learn More",
      href: "/",
    },
  ];
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
        buttonLink="/book-appointment"
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
        <h2 className=" ml-4 text-3xl md:text-4xl font-extrabold text-combination-200 z-10 ">
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
