import { InfoCard } from "../components/InfoCard";

// Main About Us Section
const AboutUsSection = ({ cardData }) => {
  return (
    <div className="px-4 md:px-[60px] md:pb-[60px]  bg-white">
      <div className="max-w-6xl mx-auto flex flex-row md:flex-nowrap flex-wrap ">
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
  );
};

export default AboutUsSection;
