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
      title: "Learn More",
      href: "/",
    },
  ];

  return (
    <main className="pt-[110px]">
      <SubHeader text="Prescription Lenses" />
      <DetailsDescripton
        title="Find Your Perfect Eyeglasses in Toronto Here"
        description={data}
        image={eyeCareAccessoriesImage}
      />

      <div className="w-full flex flex-col items-center justify-start my-2">
        <h3 className="text-combination-200 text-[40px] font-extrabold mt-2">
          Types of Prescription Lenses
        </h3>
        <hr className=" w-24 h-[3px] bg-combination-100 mb-3" />
        <p className="max-w-5xl text-neutral-500 text-base text-center">
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
      <BookExamCommon />
      <DetailsDescripton
        title="Why Choose Our Prescription Lenses?"
        description={whyChooseData}
        image={glassCleanerImage}
        bullets={whyChooseDataBullets}
        url={whyChooseLink}
        reverse
      />
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-start my-2">
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

        <TitleCommon
          title="Top Brands for Prescription Lenses"
          position="center"
        />
        <p className="text-center">
          Prescription lenses are an essential part of your eyeglasses,
          correcting your vision and helping you see the world clearly. But with
          so many brands on the market, how do you choose the right one? Here
          are some of the top brands for prescription lenses, each with its own
          strengths and specializations:{" "}
        </p>
        <div className="w-full flex flex-col items-start justify-start">
          <TitleCommon title="HOYA" position="start" />
        </div>
      </div>
    </main>
  );
};

export default page;
