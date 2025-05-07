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

const Page = () => {
  const data = [
    "Discover our range of prescription lenses in Toronto, crafted to provide clarity and comfort, ensuring your vision needs are met with precision and style.",
    "Since every individual has different requirements, lenses are available in various types. Additionally, lens manufacturers are creating custom lenses to ensure that the needs of each user are met. These lenses are made from different materials, including plastic, glass, and polycarbonate.",
  ];

  const singleVisionData = [
    "Single-vision lenses are the most common type of prescription lenses. They have uniform power throughout the entire lens, making them a great choice if you have a single vision problem, such as nearsightedness or farsightedness. They are also relatively affordable and easy to find.",
  ];

  const progressiveData = [
    "On the other hand, progressive lenses are a more advanced type of prescription lens. They offer a smooth transition between distance, intermediate, and near vision without any visible lines on the lens. This makes them a great option if you have presbyopia or need correction for both near and far distances. While progressive lenses are more expensive than single-vision lenses, they offer greater convenience and functionality.",
    "No matter which type of prescription lenses you choose, it's important to ensure that they are properly tailored to your specific vision needs. With the right prescription lenses, you can enjoy clear, comfortable vision and see the world with precision and style.",
  ];

  const whyChooseData = [
    "We understand the importance of clear and reliable vision in daily life, and that's why we offer a wide range of lenses to cater to different needs. Our lenses are designed to correct a variety of vision problems, including nearsightedness, farsightedness, and astigmatism.",
  ];

  const whyChooseDataBullets = [
    "Precision-crafted for your unique vision needs.",
    "Enhanced durability for long-lasting performance.",
    "Comfortable designs that you can wear all day.",
  ];

  const whyChooseLink = [
    {
      title: "Learn More",
      href: "/",
    },
  ];

  const dashBulletData = [
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
      desc: "The amount of curve the frame has.",
    },
    {
      title: "Base curve:",
      desc: "The curvature on the front surface of the lens.",
    },
  ];

  const GuidelinesData = [
    "The prescription that is issued to you by your optometrist is one of the parameters that are used to fabricate your lenses. To ensure optimized clarity and comfortable vision with your new glasses, it's important that these fitting parameters are also taken into consideration. In addition, frame size, width, bridge contour, temple length, lens thickness and lens type must also be assessed for best vision and comfort.",
    "Once your glasses are fitted, fabricated, and dispensed, it's recommended that the frame is periodically re-adjusted to ensure best fit and comfortable vision. It's also important to ensure the comprehensive warranty provided is addressing any issues that may come up during the lifetime of your glasses.",
    "We understand this is quite technical, so please don't hesitate to reach out to us if you have any question or if there is anything else we could do to help.",
  ];

  const HOYABulletData = [
    {
      title: "HOYA ID MyStyle",
      desc: "These are personalized lenses that take into account your eye anatomy and visual needs. They offer superior clarity and comfort, especially for people with higher prescriptions.",
    },
    {
      title: "HOYA ID Lifestyle 3",
      desc: "These lenses are designed for people with active lifestyles. They are impact-resistant, and water-repellent, and come with a variety of coatings to reduce glare and scratches.",
    },
  ];

  const HOYABulletData2 = [
    {
      title: "Unmatched Durability:",
      desc: "Hi-Vision LongLife offers superior scratch resistance, even better than many standard AR coatings. This makes them ideal for people who lead active lifestyles or are prone to accidental scratches",
    },
    {
      title: "Crystal Clear Vision:",
      desc: "The coating minimizes reflections, allowing more light to pass through the lens and reach your eye. This results in sharper, crisper vision with less glare.",
    },
    {
      title: "Long-lasting Performance:",
      desc: "Hi-Vision LongLife is designed to maintain its effectiveness over time, ensuring you experience the benefits for years to come.",
    },
    {
      title: "Easy Clean:",
      desc: "The coating repels water, dirt, and dust, making it easier to keep your lenses clean and smudge-free.",
    },
  ];

  const HoyaBulletData3 = [
    "Hoya also offers other AR coatings to suit various needs and budgets. These include:",
    "Basic AR coatings: These provide a good level of reflection reduction at a more affordable price point. Blue Light Blocking AR coatings: These coatings help to filter out blue light emitted from digital devices, which can contribute to eye strain and fatigue.",
    "When choosing an AR coating for your HOYA lenses, consider your lifestyle and visual needs. Discuss the options with your eye doctor to find the best fit for you.",
  ];

  const ZeissBulletData = [
    {
      title: "Zeiss DuraVision Platinum",
      desc: "This is a premium anti-reflective coating that provides excellent scratch resistance, water repellency, and ease of cleaning.",
    },
    {
      title: "Zeiss Digital Lenses",
      desc: "These lenses are designed for the digital age, helping to reduce eye strain and fatigue caused by prolonged use of electronic devices.",
    },
  ];

  const NikonBulletData = [
    {
      title: "Nikon SeeCoat Blue",
      desc: "This is an anti-reflective coating that helps to block harmful blue light emitted from digital devices.",
    },
    {
      title: "Nikon Transitions GEN8",
      desc: "These are light-adaptive lenses that automatically darken in sunlight and become clear indoors, providing complete vision protection.",
    },
  ];

  const EssilorBulletData = [
    {
      title: "Varilux",
      desc: "The leading brand of progressive lenses, which allow for seamless vision at all distances.",
    },
    {
      title: "Crizal",
      desc: "A popular anti-reflective coating that offers excellent scratch resistance, water repellency, and ease of cleaning.",
    },
    {
      title: "Transitions",
      desc: "A photochromic lens technology that allows the lenses to darken in sunlight and become clear indoors.",
    },
  ];

  return (
    <main className="pt-[110px] pb-16">
      <SubHeader text="Prescription Lenses" />

      {/* Hero section */}
      <DetailsDescripton
        title="Find Your Perfect Eyeglasses in Toronto Here"
        description={data}
        image={eyeCareAccessoriesImage}
      />

      {/* Types of lenses section */}
      <div className="w-full flex flex-col items-center justify-start my-12">
        <h3 className="text-combination-200 text-3xl md:text-4xl font-bold mt-2">
          Types of Prescription Lenses
        </h3>
        <hr className="w-24 h-[3px] bg-combination-100 my-4" />
        <p className="max-w-3xl mx-4 text-neutral-600 text-base text-center">
          When it comes to choosing the best prescription lenses for your
          glasses, you have several options available. Two popular choices are
          single-vision lenses and progressive lenses.
        </p>
      </div>

      {/* Single vision section */}
      <DetailsDescripton
        title="Single Vision Lenses"
        description={singleVisionData}
        image={singleVisionLensesImage}
        reverse
      />

      {/* Progressive lenses section */}
      <DetailsDescripton
        title="Progressive Lenses"
        description={progressiveData}
        image={progressiveLensesImage}
      />

      {/* CTA Section */}
      <div className="my-16">
        <BookExamCommon
          icon={<FaUserMd className="text-2xl" />}
          title="Need Help Choosing?"
          phones={[
            { label: "Beaches", number: "416-698-3937" },
            { label: "Rosedale", number: "416-901-2725" },
          ]}
          description="Our experts are here to assist you in finding the perfect prescription lenses for your needs."
          buttonText="Book Appointment"
          buttonLink="/book-appointment"
        />
      </div>

      {/* Why choose section */}
      <DetailsDescripton
        title="Why Choose Our Prescription Lenses?"
        description={whyChooseData}
        image={glassCleanerImage}
        bullets={whyChooseDataBullets}
        url={whyChooseLink}
        reverse
      />

      {/* Guidelines section */}
      <section className="max-w-5xl mx-auto px-4 my-16">
        <TitleCommon
          title="Guidelines to Consider Before Purchasing Your New Glasses"
          position="center"
        />

        <p className="text-neutral-600 mb-6">
          Several measurements and considerations go into making a pair of
          glasses to ensure that your vision is optimized through your
          corrective eyewear. When glasses are purchased in person, your
          professional eyecare provider will measure and take into consideration
          the following:
        </p>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
          {dashBulletData.map((item, index) => (
            <div key={index} className="mb-3">
              <p className="text-neutral-700 flex items-start gap-3">
                <span className="text-combination-100 font-bold">•</span>
                <span>
                  <span className="font-semibold text-combination-200">
                    {item.title}
                  </span>{" "}
                  {item.desc}
                </span>
              </p>
            </div>
          ))}
        </div>

        {GuidelinesData.map((item, i) => (
          <p className="text-neutral-600 mb-4" key={i}>
            {item}
          </p>
        ))}
      </section>

      {/* Brands section */}
      <section className="max-w-5xl mx-auto px-4 my-16">
        <TitleCommon
          title="Top Brands for Prescription Lenses"
          position="center"
        />

        <p className="text-center text-neutral-600 mb-12">
          Prescription lenses are an essential part of your eyeglasses,
          correcting your vision and helping you see the world clearly. But with
          so many brands on the market, how do you choose the right one? Here
          are some of the top brands for prescription lenses, each with its own
          strengths and specializations.
        </p>

        {/* HOYA Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-combination-200 mb-3">HOYA</h3>
          <div className="h-1 w-16 bg-combination-100 mb-4"></div>

          <p className="text-neutral-600 mb-6">
            Hoya is a leading Japanese manufacturer of ophthalmic lenses, known
            for their innovation and high quality. They offer a wide range of
            lenses to suit different needs and budgets. Here are two of their
            top picks:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
            {HOYABulletData.map((item, index) => (
              <div key={index} className="mb-4">
                <p className="text-neutral-700">
                  <span className="font-semibold text-combination-200">
                    {item.title}
                  </span>
                  <span className="mx-2">—</span>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-neutral-600 mb-6">
            HOYA is also a leader in innovation when it comes to anti-reflective
            coatings, offering a variety of options to enhance your lenses and
            improve your visual experience.
          </p>

          <div className="mt-6">
            <h4 className="font-semibold text-combination-200 text-lg mb-3">
              Hoya Hi-Vision LongLife:
            </h4>

            <p className="text-neutral-600 mb-6">
              This is HOYA's most durable and advanced anti-reflective coating.
              Hi-Vision LongLife has exceptional clarity and minimizes
              reflections on your lenses. Here are some of its key benefits:
            </p>

            <ul className="list-disc list-inside space-y-3 text-neutral-600 pl-4 mb-6">
              {HOYABulletData2.map((data, i) => (
                <li key={i} className="mb-2">
                  <span className="font-semibold text-combination-200">
                    {data.title}
                  </span>{" "}
                  {data.desc}
                </li>
              ))}
            </ul>

            {HoyaBulletData3.map((item, i) => (
              <p className="text-neutral-600 mb-3" key={i}>
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Zeiss Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-combination-200 mb-3">
            Zeiss
          </h3>
          <div className="h-1 w-16 bg-combination-100 mb-4"></div>

          <p className="text-neutral-600 mb-6">
            Zeiss is a German company with a long history of excellence in
            optics. They are known for their precision engineering and
            cutting-edge lens technologies. Zeiss lenses offer exceptional
            clarity, sharpness, and color fidelity.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            {ZeissBulletData.map((item, index) => (
              <div key={index} className="mb-3 last:mb-0">
                <p className="text-neutral-700">
                  <span className="font-semibold text-combination-200">
                    {item.title}
                  </span>
                  <span className="mx-2">—</span>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* NIKON Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-combination-200 mb-3">
            NIKON
          </h3>
          <div className="h-1 w-16 bg-combination-100 mb-4"></div>

          <p className="text-neutral-600 mb-6">
            Nikon, a well-known camera brand, also applies its expertise in
            optics to create high-quality prescription lenses. Nikon lenses are
            known for their durability, clarity, and innovative features.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            {NikonBulletData.map((item, index) => (
              <div key={index} className="mb-3 last:mb-0">
                <p className="text-neutral-700">
                  <span className="font-semibold text-combination-200">
                    {item.title}
                  </span>
                  <span className="mx-2">—</span>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Essilor Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-combination-200 mb-3">
            Essilor
          </h3>
          <div className="h-1 w-16 bg-combination-100 mb-4"></div>

          <p className="text-neutral-600 mb-6">
            Essilor is a French multinational company that is the world's
            largest manufacturer of ophthalmic lenses. They offer a wide variety
            of brands and technologies, including:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
            {EssilorBulletData.map((item, index) => (
              <div key={index} className="mb-3 last:mb-0">
                <p className="text-neutral-700">
                  <span className="font-semibold text-combination-200">
                    {item.title}
                  </span>
                  <span className="mx-2">—</span>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-combination-50 p-6 rounded-lg shadow-sm text-center">
          <p className="text-neutral-700 mb-4">
            Whatever your eye needs and prescription requirements are, our
            opticians at 360 Eyecare are here to find the best lens option for
            you. Contact our office today to speak to one of our opticians about
            your prescription or schedule an eye exam appointment with one of
            our optometrists.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-combination-200 text-white font-semibold py-3 px-6 rounded-md hover:bg-combination-100 transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Page;
