import Image from "next/image";
import SubHeader from "../../../components/SubHeader";
import TitleCommon from "../../../components/common/TitleCommon";
import { Brand6 } from "../../../constants/brand";
import {
  MauiJimGolf,
  MjGlassesBeachReflection,
} from "../../../constants/prescriptionLenses";

const page = () => {
  const data1 = [
    {
      title: "Hyper Precise Polarization:",
      description: [
        "Most conventional lenses include polarization as a coating, but Maui Jim's lenses are different. Maui Jim incorporates the polarization into the lens. When it is inside of the lens it maximizes the clarity and eliminates most of the glare emitted off smooth, flat, and or shiny surfaces.",
      ],
    },
    {
      title: "Maui Gradient:",
      description: [
        "Another fashionable lens that has a darker portion and gradually gets lighter as we reach the bottom of the lens allowing limited light through each portion.",
      ],
    },
  ];
  const data2 = [
    {
      title: "Bi-Gradient Mirror:",
      description: [
        "This lens was designed by placing the flash coating on the bottom and the top of the lens. When applied to both the top and the bottom it prevents our eyes from squinting, allowing them to relax.",
      ],
    },
    {
      title: "HCL Bronze:",
      description: [
        "The more standard polarized lens Maui Jim has to offer, while there is no specific use for the lens it works best on overcast days to full sunshine.",
      ],
    },
  ];
  const data3 = [
    {
      title: "Blue Hawaii Flash Mirror:",
      description: [
        "Like other flash coatings designed ultimately for fashion. When applied to the polarized plus 2 lens it helps to further reduce the amount of light passing through the lens and helps to boost colour.",
      ],
    },
    {
      title: "Neutral Grey:",
      description: [
        "Lenses are specifically designed for people who are in bright light environments. With the grey contrast, you are able to experience much more vibrant colours.",
      ],
    },
  ];
  return (
    <main className="pt-[110px] bg-[#F6F7F5]">
      <SubHeader text="Maui Jim Lens Technology" />
      <div className="max-w-[1172px] w-full px-4 sm:px-6 mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center my-4 gap-6">
          <div className="w-full md:w-[45%]">
            <TitleCommon
              title="Maui Jim: What lenses are best suited for your outdoor Lifestyle ? "
              position="start"
              css={"text-[30px] leading-[1.2]"}
            />
          </div>
          <div className="w-full md:w-[45%] mx-auto md:mx-0">
            <Image src={Brand6} alt="MauiJimImage" />
          </div>
          <p className="text-neutral-500 text-base">
            All of Maui Jim's sunglasses come polarized as a standard. Based on
            your lifestyle and the sports you may play Maui Jim has specifically
            designed lenses to enhance the colors of the great outdoors. Some of
            the lens tints that are available exclusively to Maui Jim include
            neutral grey, HCL bronze, Maui rose, and Maui ht. The materials
            available for the lens are super thin glass, Maui pure, Maui
            evolution, and Maui brilliant to further enhance the optics within
            the polarized tints. This guide is to help you to better consider
            the proper tints and materials based on your outdoor activities.
          </p>
          <p className="text-neutral-500 text-base">
            As all Maui Jim lenses are polarized, it is important you factor in
            what polarized tint is best for. For example, if you golf quite
            frequently you may want to consider a polarizedplus 2 lens with a
            brown tint to help with the contrast and refine the optics while on
            the course.
          </p>
        </div>
        <TitleCommon
          title="The tints Maui Jim has available to order are:"
          position="start"
          css={"text-[30px] leading-[1.2]"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
          {data1.map((item, index) => (
            <div key={index} className="w-full">
              <TitleCommon
                title={item.title}
                position="start"
                css="!font-semibold !text-[30px]"
              />
              {item.description &&
                item.description.map((desc, idx) => (
                  <p
                    key={idx}
                    className="text-neutral-500 text-base sm:text-base mt-2"
                  >
                    {desc}
                  </p>
                ))}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
          {data2.map((item, index) => (
            <div key={index} className="w-full">
              <TitleCommon
                title={item.title}
                position="start"
                css="!font-semibold !text-[30px]"
              />
              {item.description &&
                item.description.map((desc, idx) => (
                  <p
                    key={idx}
                    className="text-neutral-500 text-base sm:text-base mt-2"
                  >
                    {desc}
                  </p>
                ))}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10">
          {data3.map((item, index) => (
            <div key={index} className="w-full">
              <TitleCommon
                title={item.title}
                position="start"
                css="!font-semibold !text-[30px]"
              />
              {item.description &&
                item.description.map((desc, idx) => (
                  <p
                    key={idx}
                    className="text-neutral-500 text-sm sm:text-base mt-2"
                  >
                    {desc}
                  </p>
                ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 md:gap-8 mt-8">
          <div className="w-full lg:max-w-[50%] flex flex-col items-start">
            <div className="w-full">
              <Image
                src={MjGlassesBeachReflection}
                alt="MjGlassesBeachReflection"
                className="w-full h-auto"
              />
            </div>
            <TitleCommon
              title="Maui Pure"
              position="start"
              css="!font-semibold !text-[30px]"
            />
            <p className="text-neutral-500 text-base sm:text-base mt-2">
              Offers great optics but in addition to tints it is
              shatter-resistant, lightweight, and has a great scratch coat.
            </p>
          </div>
          <div className="w-full lg:max-w-[50%] flex flex-col items-start">
            <TitleCommon
              title="Maui Rose"
              position="start"
              css="!font-semibold !text-[30px]"
            />
            <p className="text-neutral-500 text-base sm:text-base mt-2">
              This tone is said to be the most comforting to the eyes, with its
              high contrast rose colour it makes it easier to further sharpen
              the focus while outdoors.
            </p>
            <p className="text-neutral-500 text-base sm:text-base mt-2">
              When selecting a material it is important that you take into
              account what activities you may be doing outdoors and your
              prescription. When visiting your optician or optometrist they
              often recommend or will prescribe you the most suitable material
              based on your lifestyle.
            </p>
            <p className="text-neutral-500 text-base sm:text-base mt-2">
              Super thin glass when paired with these tints offers the wearer
              the best optical experience. However, it is a bit heavier than
              plastic but still lighter and thinner than regular glass.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 mt-8">
          <div className="w-full lg:max-w-[46%] gap-6 md:gap-8 flex flex-col items-start justify-start">
            <div>
              <TitleCommon
                title="Maui Evolution"
                position="start"
                css="!font-semibold !text-[30px]"
              />
              <p className="text-neutral-500 text-base sm:text-base mt-2">
                The lightweight polycarbonate lens has great optics and is more
                impact-resistant compared to other lenses.
              </p>
            </div>
            <div>
              <TitleCommon
                title="Maui Brilliant"
                position="start"
                css="!font-semibold !text-[30px]"
              />
              <p className="text-neutral-500 text-base sm:text-base mt-2">
                One of Maui Jim's feature lenses as it optimizes optics and
                weight. The advanced technology in this lens provides the wearer
                with phenomenal optics combined with 1/3 the conventional
                weight.
              </p>
            </div>
          </div>
          <div className="w-full lg:max-w-[50%] flex flex-col items-start justify-start">
            <Image
              src={MauiJimGolf}
              alt="MauiJimGolf"
              className="w-full h-auto"
            />
          </div>
        </div>
        <p className="text-neutral-500 text-base sm:text-base my-5 mb-8">
          Taking this into careful consideration helps you choose the option
          that best suits your lifestyle for optimum vision and comfort when
          choosing your next eyeglasses.
        </p>
      </div>
    </main>
  );
};

export default page;
