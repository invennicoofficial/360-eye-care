import { InfoCard } from "../../../components/InfoCard";
import SubHeader from "../../../components/SubHeader";
import { FaUserDoctor } from "react-icons/fa6";
import { LuScanEye } from "react-icons/lu";
import { TbBrandVisualStudio } from "react-icons/tb";
import DetailsDescripton from "../../../components/common/DetailsDescripton";
import { eyeglassesFrame } from "../../../constants/prescriptionLenses";
import BookExamCommon from "../../../components/common/BookExampCommon";
import { FaUserMd } from "react-icons/fa";

const page = () => {
  const whyChooseData = [
    "One of the most important aspects of eyeglasses is the frame. Choosing the right frame can greatly enhance your comfort and appearance. Therefore, it is important to consider a few factors when deciding on a frame for your glasses.",
    ,
    "Here are a few things to keep in mind:",
  ];
  const whyChooseDataBullets = [
    "The shape of your face is crucial in determining the design of the frame to choose.",
    "Frame designs vary based on preference. Some present a professional image while others are more casual.",
    "Frames come in different sizes based on the eye size, which is the horizontal width of the lens.",
  ];

  const cardData = [
    {
      icon: FaUserDoctor,
      title: "Face Shape",
      description: "Find frames that complement your unique facial features.",
      bgColor: "bg-combination-100",
    },
    {
      icon: LuScanEye,
      title: "Frame Style",
      description:
        "Explore different styles to match your personality and lifestyle.",
      bgColor: "bg-combination-200",
    },
    {
      icon: TbBrandVisualStudio,
      title: "Lens Options",
      description: "Learn about lens types and coatings for optimal vision.",
      bgColor: "bg-combination-100",
    },
  ];

  return (
    <main className="pt-[110px] bg-[#F6F7F5]">
      <SubHeader text="Eyeglasses Selection Guide" />
      <div className="max-w-6xl mx-auto ">
        <div className="w-full flex flex-row justify-center min-w-max">
          {cardData.map((card, index) => (
            <InfoCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              bgColor={card.bgColor}
            />
          ))}
        </div>
        <DetailsDescripton
          title="How To Pick The Best Frame"
          description={whyChooseData}
          image={eyeglassesFrame}
          bullets={whyChooseDataBullets}
          reverse
        />
      </div>
      <BookExamCommon
        icon={<FaUserMd />}
        title="Discover The Perfect Frames!"
        phones={[
          { label: "Beaches", number: "416-698-3937" },
          { label: "Rosedale", number: "416-901-2725" },
        ]}
        description="Book an appointment with our Opticians for personalized eyewear recommendations."
        buttonText="Book An Appointment"
        buttonLink="/book-appointment"
      />
      <div className="max-w-6xl mx-auto">
        <p>
          After you’ve selected your frame it’s important to get complete
          fitting measurements of the frame on your face to ensure acurate and
          optimized vision through your new lenses
        </p>
      </div>
    </main>
  );
};

export default page;
