import SubHeader from "../../../components/SubHeader";

import { EyewearCollection } from "../../../constants/prescriptionLenses";
import { TiTick } from "react-icons/ti";
import VirtualShopppingFaq from "../../../components/VirtualShopppingFaq";
import VirtualForm from "../../../components/VirtualForm";
import DetailsDescription from "components/common/DetailsDescripton";

const Page = () => {
  const dataDescription = [
    "Looking to purchase a new pair of glasses but unsure of which frame is right for you? There are so many different options available. We get it. Our licensed Opticians truly understand eyewear and take pride in helping our patients discover and select styles they can feel confident about wearing.",
    "Request a FREE virtual shopping appointment to browse our eyeglasses and sunglasses with one of our Opticians. Please see our Virtual Shopping FAQ section for everything you need to know about your shopping experience.",
  ];

  return (
    <main className="pt-[110px]">
      <SubHeader text="Shop Virtually with an Optician" />

      <section className="my-10">
        <DetailsDescription
          title="Introducing Miyosmart Lenses: Revolutionizing Vision"
          description={dataDescription}
          image={EyewearCollection}
        />
      </section>

      <section className="py-8 md:py-12 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="w-full md:w-1/2">
          <VirtualForm />
        </div>
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-combination-200 mb-4">
            Book Your FREE Virtual Shopping Experience!
          </h2>
          <hr className="w-[65px] h-[2px] bg-combination-100 mb-4" />
          <p className="text-neutral-500 text-base mt-2 mb-6">
            You can learn more about the eyewear brands we carry before your
            virtual appointment. If you have any favourites, or specific styles
            and colours that you are interested in, please let us know!
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Choose from a variety of styles and shapes",
              "Try on frames virtually with our innovative technology",
              "Enjoy free shipping and returns on all orders",
            ].map((item) => (
              <div className="flex items-center gap-3" key={item}>
                <div className="flex-shrink-0">
                  <TiTick className="text-combination-100 text-2xl" />
                </div>
                <p className="text-combination-200 text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <VirtualShopppingFaq />
    </main>
  );
};

export default Page;
