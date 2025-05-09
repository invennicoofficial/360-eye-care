import SubHeader from "../../../components/SubHeader";
import {
  eyeCareAccessoriesImage,
  progressiveLensesImage,
  singleVisionLensesImage,
  glassCleanerImage,
} from "../../../constants/prescriptionLenses";
import DetailsDescripton from "../../../components/common/DetailsDescripton";
import TitleCommon from "../../../components/common/TitleCommon";
import Link from "next/link";
import BookExamCommon from "../../../components/common/BookExampCommon";
import { FaUserMd } from "react-icons/fa";

const page = () => {
  const data = [
    "Discover our range of prescription lenses in Toronto, crafted to provide clarity and comfort, ensuring your vision needs are met with precision and style.",
    "Since every individual has different requirements, lenses are available in various types. Additionally, lens manufacturers are creating custom lenses to ensure that the needs of each user are met. These lenses are made from different materials, including plastic, glass, and polycarbonate.",
  ];

  const singleVisionData = [
    "Single-vision lenses are the most common type of prescription lenses. They have uniform power throughout the entire lens, making them a great choice if you have a single vision problem, such as nearsightedness or farsightedness. They are also relatively affordable and easy to find.",
  ];
  const progressiveData = [
    "On the other hand, progressive lenses are a more advanced type of prescription lens. They offer a smooth transition between distance, intermediate, and near vision without any visible lines on the lens. This makes them a great option if you have presbyopia or need correction for both near and far distances. While progressive lenses are more expensive than single-vision lenses, they offer greater convenience and functionality.",
    "No matter which type of prescription lenses you choose, it’s important to ensure that they are properly tailored to your specific vision needs. With the right prescription lenses, you can enjoy clear, comfortable vision and see the world with precision and style.",
  ];
  const whyChooseData = [
    "We understand the importance of clear and reliable vision in daily life, and that’s why we offer a wide range of lenses to cater to different needs. Our lenses are designed to correct a variety of vision problems, including nearsightedness, farsightedness, and astigmatism.",
  ];

  const whyChooseDataBullets = [
    "Precision-crafted for your unique vision needs.",
    "Enhanced durability for long-lasting performance.",
    "Comfortable designs that you can wear all day.",
  ];

  const whyChooseLink = [
    {
      title: "Book An Appointment",
      href: "/book-eye-exam",
    },
  ];

  const dashBulltestData = [
    {
      title: "Segment or OC height:",
      desc: "Where the centre of the lens will be positioned in the frame depending on how the frame sits on your face.",
    },
    {
      title: "Vertex distance:",
      desc: "The distance between the frame and the front of your eye",
    },
    {
      title: "Pupillary distance (PD):",
      desc: "The distance between each eye individually to the middle of the frame – combined measurements are sometimes less accurate.",
    },
    {
      title: "Pantoscopic tilt:",
      desc: "This refers to the tilt on the front of the frame.",
    },
    {
      title: "Wrap angle:",
      desc: " The amount of curve the frame has.",
    },
    {
      title: "Base curve:",
      desc: "The curvature on the front surface of the lens.",
    },
  ];
  const GuidelinesData = [
    "The prescription that is issued to you by your optometrist is one of the parameters that are used to fabricate your lenses. To ensure optimized clarity and comfortable vision with your new glasses, it’s important that these fitting parameters are also taken into consideration. In addition, frame size, width, bridge contour, temple length, lens thickness and lens type must also be assessed for best vision and comfort.",
    "Once your glasses are fitted, fabricated, and dispensed, it’s recommended that the frame is periodically re-adjusted to ensure best fit and comfortable vision. It’s also important to ensure the comprehensive warranty provided is addressing any issues that may come up during the lifetime of your glasses.",
    "We understand this is quite technical, so please don’t hesitate to reach out to us if you have any question or if there is anything else we could do to help.",
  ];

  const HOYABulltesData = [
    {
      title: "HOYA ID MyStyle",
      desc: "These are personalized lenses that take into account your eye anatomy and visual needs. They offer superior clarity and comfort, especially for people with higher prescriptions.",
    },
    {
      title: "HOYA ID Lifestyle 3",
      desc: "These lenses are designed for people with active lifestyles. They are impact-resistant, and water-repellent, and come with a variety of coatings to reduce glare and scratches.",
    },
  ];

  const HOYABulltesData2 = [
    {
      title: "Unmatched Durability:",
      desc: "Hi-Vision LongLife offers superior scratch resistance, even better than many standard AR coatings. This makes them ideal for people who lead active lifestyles or are prone to accidental scratches",
    },
    {
      title: "Crystal Clear Vision:",
      desc: "The coating minimizes reflections, allowing more light to pass through the lens and reach your eye. This results in sharper, crisper vision with less glare.",
    },
    {
      title: "Long-lasting Performance;",
      desc: "Hi-Vision LongLife is designed to maintain its effectiveness over time, ensuring you experience the benefits for years to come.",
    },
    {
      title: "Easy Clean:",
      desc: "The coating repels water, dirt, and dust, making it easier to keep your lenses clean and smudge-free.",
    },
  ];

  const HoyaBulltesData3 = [
    "Hoya also offers other AR coatings to suit various needs and budgets. These include:",

    "Basic AR coatings: These provide a good level of reflection reduction at a more affordable price point. Blue Light Blocking AR coatings: These coatings help to filter out blue light emitted from digital devices, which can contribute to eye strain and fatigue.   ",
    "When choosing an AR coating for your HOYA lenses, consider your lifestyle and visual needs. Discuss the options with your eye doctor to find the best fit for you.",
  ];

  const ZeissBulltesData = [
    {
      title: "Zeiss DuraVision Platinum",
      desc: "This is a premium anti-reflective coating that provides excellent scratch resistance, water repellency, and ease of cleaning.",
    },
    {
      title: "Zeiss Digital Lenses",
      desc: "These lenses are designed for the digital age, helping to reduce eye strain and fatigue caused by prolonged use of electronic devices.",
    },
  ];

  const NikonBulletsData = [
    {
      title: "Nikon SeeCoat Blue",
      desc: "This is an anti-reflective coating that helps to block harmful blue light emitted from digital devices.",
    },
    {
      title: "Nikon Transitions GEN8 ",
      desc: "These are light-adaptive lenses that automatically darken in sunlight and become clear indoors, providing complete vision protection.",
    },
  ];
  const EssilorBulletsData = [
    {
      title: "Varilux",
      desc: " The leading brand of progressive lenses, which allow for seamless vision at all distances.",
    },
    {
      title: "Crizal",
      desc: "A popular anti-reflective coating that offers excellent scratch resistance, water repellency, and ease of cleaning.",
    },
    {
      title: "Transitions",
      desc: " A photochromic lens technology that allows the lenses to darken in sunlight and become clear indoors.",
    },
  ];

  return (
    <main className="pt-[110px]">
      <SubHeader text="Prescription Lenses" />
      <DetailsDescripton
        title="Prescription Lenses in Toronto: Tailored to You"
        description={data}
        image={eyeCareAccessoriesImage}
      />

      <div className="w-full flex flex-col md:items-center justify-start my-2 p-4">
        <h3 className="text-combination-200 text-[40px] font-extrabold mt-2">
          Types of Prescription Lenses
        </h3>
        <hr className=" w-24 h-[3px] bg-combination-100 mb-3" />
        <p className="max-w-5xl text-neutral-500 text-base md:text-center">
          When it comes to choosing the best prescription lenses for your
          glasses, you have several options available. Two popular choices are
          single-vision lenses and progressive lenses.
        </p>
      </div>

      <DetailsDescripton
        title="Single vision lenses"
        description={singleVisionData}
        image={singleVisionLensesImage}
        reverse
      />

      <DetailsDescripton
        title="progressive lenses"
        description={progressiveData}
        image={progressiveLensesImage}
      />
      <BookExamCommon
        icon={<FaUserMd />}
        title="Need Help Choosing?"
        phones={[
          { label: "Beaches", number: "416-698-3937" },
          { label: "Rosedale", number: "416-901-2725" },
        ]}
        description="Our experts are here to assist you in finding the perfect prescription lenses for your needs."
        buttonText="Book Appointment"
        buttonLink="/book-eye-exam"
      />
      <DetailsDescripton
        title="Why Choose Our Prescription Lenses?"
        description={whyChooseData}
        image={glassCleanerImage}
        bullets={whyChooseDataBullets}
        url={whyChooseLink}
        noCatalog={true}
        reverse
      />
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-start my-2 p-4">
        <TitleCommon
          title="Guidelines to consider before purchasing and getting your new glasses fitted:"
          position="start"
        />
        <p className="text-start">
          Several measurements and considerations go into making a pair of
          glasses to ensure that your vision is optimized through your
          corrective eyewear. When glasses are purchased in person, your
          professional eyecare provider will measure and take into consideration
          the following:
        </p>
        <div className="w-full flex flex-col mt-2 items-start justify-start mb-6">
          {dashBulltestData &&
            dashBulltestData.map((item, index) => (
              <div key={index}>
                <p className="text-start text-neutral-500 flex items-start gap-2 mb-1">
                  <span className="text-2xl leading-none">-</span>
                  <span>
                    <span className="font-semibold">{item.title}</span>{" "}
                    {item.desc}
                  </span>
                </p>
              </div>
            ))}

          {GuidelinesData &&
            GuidelinesData.map((item, i) => {
              return (
                <p className="text-start text-neutral-500 mt-3" key={i}>
                  {item}
                </p>
              );
            })}
        </div>

        <TitleCommon
          title="Top Brands for Prescription Lenses"
          position="center"
        />
        <p className="text-center mb-6">
          Prescription lenses are an essential part of your eyeglasses,
          correcting your vision and helping you see the world clearly. But with
          so many brands on the market, how do you choose the right one? Here
          are some of the top brands for prescription lenses, each with its own
          strengths and specializations:{" "}
        </p>
        <div className="w-full flex flex-col items-start justify-start ">
          <TitleCommon title="HOYA" position="start" />
          <p className="text-start text-neutral-500">
            Hoya is a leading Japanese manufacturer of ophthalmic lenses, known
            for their innovation and high quality. They offer a wide range of
            lenses to suit different needs and budgets. Here are two of their
            top picks:
          </p>
          <div>
            {HOYABulltesData &&
              HOYABulltesData.map((item, index) => (
                <div key={index}>
                  <p className="text-start text-neutral-500 flex items-start gap-2 mb-1">
                    <span>
                      <span className="font-semibold">
                        {item.title}{" "}
                        <span className="text-2xl leading-none">-</span>{" "}
                      </span>{" "}
                      {item.desc}
                    </span>
                  </p>
                  <p className="text-start text-neutral-500">
                    HOYA is also a leader in innovation when it comes to
                    anti-reflective coatings, offering a variety of options to
                    enhance your lenses and improve your visual experience.
                  </p>
                </div>
              ))}
            <div>
              <div className="w-full flex flex-col items-start justify-start mt-4">
                <span className="font-semibold text-neutral-500 ">
                  Hoya Hi-Vision LongLife:
                </span>
                <p className="text-start text-neutral-500">
                  This is HOYA’s most durable and advanced anti-reflective
                  coating. Hi-Vision LongLife has exceptional clarity and
                  minimizes reflections on your lenses. Here are some of its key
                  benefits:
                </p>
              </div>
              <div className="mt-6">
                <div className="mt-6">
                  <ul className="list-disc list-inside space-y-3 text-neutral-600">
                    {HOYABulltesData2 &&
                      HOYABulltesData2.map((data, i) => (
                        <li key={i}>
                          <span className="font-semibold">{data.title}</span>{" "}
                          {data.desc}
                        </li>
                      ))}
                  </ul>
                </div>
                {HoyaBulltesData3 &&
                  HoyaBulltesData3.map((item, i) => {
                    return (
                      <p className="text-start text-neutral-500 mt-3" key={i}>
                        {item}
                      </p>
                    );
                  })}
              </div>
            </div>
          </div>
          <TitleCommon title="Zeiss" position="start" />
          <p className="text-start text-neutral-500">
            Zeiss is a German company with a long history of excellence in
            optics. They are known for their precision engineering and
            cutting-edge lens technologies. Zeiss lenses offer exceptional
            clarity, sharpness, and color fidelity.
          </p>
          <div>
            {ZeissBulltesData &&
              ZeissBulltesData.map((item, index) => (
                <div key={index}>
                  <p className="text-start text-neutral-500 flex items-start gap-2 mb-3">
                    <span>
                      <span className="font-semibold">
                        {item.title}{" "}
                        <span className="text-2xl leading-none">-</span>{" "}
                      </span>{" "}
                      {item.desc}
                    </span>
                  </p>
                </div>
              ))}
          </div>
          <div>
            <TitleCommon title="NIKON" position="start" />
            <p className="text-start text-neutral-500">
              Nikon, a well-known camera brand, also applies its expertise in
              optics to create high-quality prescription lenses. Nikon lenses
              are known for their durability, clarity, and innovative features.
            </p>
            <div>
              {NikonBulletsData &&
                NikonBulletsData.map((item, index) => (
                  <div key={index}>
                    <p className="text-start text-neutral-500 flex items-start gap-2 mb-3">
                      <span>
                        <span className="font-semibold">
                          {item.title}{" "}
                          <span className="text-2xl leading-none">-</span>{" "}
                        </span>{" "}
                        {item.desc}
                      </span>
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <TitleCommon title="Essilor" position="start" />
            <p className="text-start text-neutral-500">
              Essilor is a French multinational company that is the world’s
              largest manufacturer of ophthalmic lenses. They offer a wide
              variety of brands and technologies, including:
            </p>
            <div>
              {EssilorBulletsData &&
                EssilorBulletsData.map((item, index) => (
                  <div key={index}>
                    <p className="text-start text-neutral-500 flex items-start gap-2 my-3">
                      <span>
                        <span className="font-semibold">
                          {item.title}{" "}
                          <span className="text-2xl leading-none">-</span>{" "}
                        </span>{" "}
                        {item.desc}
                      </span>
                    </p>
                  </div>
                ))}
            </div>
            <p className="text-start text-neutral-500 mb-5">
              Whatever your eye needs and prescription requirements are, our
              opticians at 360 Eyecare are here to find the best lens option for
              you. Contact our office today to speak to one of our opticians
              about your prescription or schedule an eye exam appointment with
              one of our optometrists.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
