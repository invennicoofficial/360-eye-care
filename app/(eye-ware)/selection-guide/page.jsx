import { InfoCard } from "../../../components/InfoCard";
import SubHeader from "../../../components/SubHeader";
import { FaUserDoctor } from "react-icons/fa6";
import { LuScanEye } from "react-icons/lu";
import { TbBrandVisualStudio } from "react-icons/tb";

const page = () => {
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
      </div>
    </main>
  );
};

export default page;
