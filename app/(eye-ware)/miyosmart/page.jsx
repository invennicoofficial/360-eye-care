import SubHeader from "../../../components/SubHeader";
import DetailsDescripton from "../../../components/common/DetailsDescripton";
import {
  MiyoSmartglasses,
  MiyosmartglassePng1,
  Miyosmartlenses,
  progressionofmyopia,
} from "../../../constants/prescriptionLenses";
import Image from "next/image";
import FindYourPerfectEyeGlass from "components/common/FindYourPerfectEyeGlass";
export async function generateMetadata() {
  return {
    title: "Miyosmart Lenses Toronto | Myopia Control in Beaches & Rosedale",
    description:
      "MiyoSmart lenses Toronto are an easy, safe, and non-evasive solution for myopia progression, particularly in young children.",
    openGraph: {
      title: "Miyosmart Lenses Toronto | Myopia Control in Beaches & Rosedale",
      description:
        "MiyoSmart lenses Toronto are an easy, safe, and non-evasive solution for myopia progression, particularly in young children.",
      url: "https://www.360eyecare.ca/miyosmart/",
      siteName: "360 Eyecare",
      type: "website",
    },
    alternates: {
      canonical: "https://www.360eyecare.ca/miyosmart/",
    },
  };
}

const page = () => {
  const dataDescription = [
    "A recent study predicted that by the year 2050 half of the world's population will be classified as myopic, or near-sighted. Of that portion of the population, 10% will develop myopia of 5.00D (diopters) or stronger. With that in mind, research has been ongoing into ways to manage, mitigate, and minimize the effects of myopia, particularly in children if caught early enough.",
    "In 2012, Hoya Vision Care partnered with the Hong Kong Polytechnic University, a leader in the field of myopia control research, to develop a new type of ophthalmic lens to better control developing myopia. The result of their combined efforts is the MiyoSmart lens. Miyosmart lenses are designed to correct myopia while helping to slow its progression. They utilize advanced technology to provide clear, comfortable vision. With Miyosmart lenses, you can enjoy high-quality vision while protecting your eyesight for the future.",
  ];

  const whyChooseData = [
    "Myopia, also known as nearsightedness, is a common eye condition that affects many children and teenagers. While glasses and contact lenses are commonly used to correct vision, they don't address the underlying issue of myopia progression. This is where Miyosmart lenses come in – they are specifically designed to slow down the progression of myopia in children and teens. Not only are they effective, but they are also comfortable to wear, making them a reliable solution for parents who are concerned about their child's eye health. With Miyosmart lenses, children can enjoy clear, comfortable vision while also protecting their eyes from the long-term effects of myopia.",
  ];

  const whyChooseLink = [
    {
      title: "Book an Appointment",
      href: "/book-eye-exam",
    },
  ];

  const whyChooseDataBullets = [
    "Miyosmart lenses offer effective myopia control for children and teens.",
    "These lenses are comfortable and easy to wear throughout the day.",
    "With MiyoSmart, parents can expect a proven myopia management solution",
  ];

  return (
    <main className="pt-[110px] px-4 md:px-6 lg:px-0">
      <SubHeader text="MiyoSmart Lenses" />
      <div className="max-w-7xl mx-auto">
        <DetailsDescripton
          title="Introducing Miyosmart Lenses: Revolutionizing Vision"
          description={dataDescription}
          image={Miyosmartlenses}
        />
        <div className="my-8">
          <FindYourPerfectEyeGlass />
        </div>
        <DetailsDescripton
          title="Why Choose Our Custom Lenses?"
          description={whyChooseData}
          image={MiyoSmartglasses}
          bullets={whyChooseDataBullets}
          url={whyChooseLink}
          noCatalog
          reverse
        />
      </div>
    </main>
  );
};

export default page;
