import { FaArrowsToEye, FaUserDoctor } from "react-icons/fa6";
import { InfoCard } from "../components/InfoCard";
import { LuMonitorDot } from "react-icons/lu";

import { LuScanEye } from "react-icons/lu";

// Main About Us Section
const AboutUsSection = () => {
  const cardData = [
    {
      icon: FaUserDoctor,
      title: "Our Story",
      description:
        "Delivering Toronto's ultimate eye care and eyewear experience with dedication.",
      bgColor: "bg-combination-100",
    },
    {
      icon: LuScanEye,
      title: "Our Mission",
      description:
        "Dedicated to providing exceptional eye care and improving vision health.",
      bgColor: "bg-combination-200",
    },
    {
      icon: LuMonitorDot,
      title: "Our Values",
      description:
        "Compassionate care, advanced technology, and patient-centered approach define us.",
      bgColor: "bg-combination-100",
    },
  ];

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
