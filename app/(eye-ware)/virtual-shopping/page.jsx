import SubHeader from "../../../components/SubHeader";
import DetailsDescripton from "../../../components/common/DetailsDescripton";
import { EyewearCollection } from "../../../constants/prescriptionLenses";
import TitleCommon from "../../../components/common/TitleCommon";

const Page = () => {
  const dataDescription = [
    "Looking to purchase a new pair of glasses but unsure of which frame is right for you? There are so many different options available. We get it. Our licensed Opticians truly understand eyewear and take pride in helping our patients discover and select styles they can feel confident about wearing.",
    "Request a FREE virtual shopping appointment to browse our eyeglasses and sunglasses with one of our Opticians. Please see our Virtual Shopping FAQ section for everything you need to know about your shopping experience.",
  ];

  return (
    <main className="pt-[110px]">
      <SubHeader text="Shop Virtually with an Optician" />

      <section className="my-10">
        <DetailsDescripton
          title="Introducing Miyosmart Lenses: Revolutionizing Vision"
          description={dataDescription}
          image={EyewearCollection}
        />
      </section>

      <section className="my-12">
        <TitleCommon
          title="Maui Jim: “What lenses are best suited for your outdoor Lifestyle?”"
          position="center"
        />
      </section>
    </main>
  );
};

export default Page;
