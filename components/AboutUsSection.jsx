import { InfoCard } from "../components/InfoCard";


// Main About Us Section
const AboutUsSection = ({ cardData }) => {
  return (
    <div className="max-w-5xl mx-auto flex flex-row md:flex-nowrap flex-wrap ">
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
  );
};

export default AboutUsSection;
