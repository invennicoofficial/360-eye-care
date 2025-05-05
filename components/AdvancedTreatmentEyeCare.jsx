import React from "react";
import Card from "./Card";

const AdvancedTreatmentEyeCare = () => {
  const treatments = [
    {
      title: "IPL Treatment",
      subtitle: null, // No subtitle for this usage
      description:
        "IPL (Intense Pulsed Light) treatments for dry eye use light therapy to reduce inflammation and improve tear film quality. This non-invasive procedure targets the root causes of dry eye, providing relief and promoting healthier, more comfortable eyes. Effective for chronic dry eye sufferers.",
      logoSrc: null, // No logo for this usage
      catalogLink: null, // No link for this card
    },
    {
      title: "RF Treatment",
      description:
        "RF (Radiofrequency) treatments for dry eye use gentle heat to stimulate the meibomian glands, enhancing oil production and improving tear stability. This non-invasive method alleviates dry eye symptoms, promoting comfort and healthier eyes. Ideal for patients with meibomian gland dysfunction.",
      isHighlighted: true, // This card will be highlighted
    },
    {
      title: "Punctal Plugs",
      description:
        "Our tears naturally drain through tiny holes in the corners of our eyelids called puncta. Punctal plugs are tiny inserts placed in these puncta to slow down tear drainage. This allows your tears to stay in your eyes for longer, providing better lubrication.",
    },
    {
      title: "LipiFlow",
      description:
        "This in-office treatment targets evaporative dry eye by addressing problems with the meibomian glands, which produce the oily outer layer of the tear film. LipiFlow uses gentle heat and massage to express these glands, helping to clear blockages and improve the quality of your tears.",
    },
    {
      title: "Meibomian Gland Probing",
      description:
        "Meibomian Gland Probing for dry eye involves using a small instrument to unblock the meibomian glands, restoring natural oil flow to the tear film. This procedure alleviates symptoms, enhances tear quality, and provides lasting relief for patients with gland dysfunction.",
    },
    {
      title: "Scleral Lenses",
      description:
        "These are specially designed rigid contact lenses that vault over the cornea, the clear front surface of your eye. They create a reservoir of tears between the lens and the eye, providing long-lasting lubrication and pain relief for severe dry eye cases.",
    },
  ];
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-combination-200 text-center mb-2">
          Advanced Treatments for Dry Eye
        </h1>
        <div className="w-24 h-1 bg-combination-100 mx-auto mb-6"></div>
        <p className="text-center text-gray-600 mb-12">
          For those who haven't found relief with traditional dry eye treatments
          in Toronto, there are advanced options. These procedures can offer
          significant improvement for chronic or severe dry eye.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <Card
              key={index}
              title={treatment.title}
              subtitle={treatment.subtitle}
              description={treatment.description}
              logoSrc={treatment.logoSrc}
              catalogLink={treatment.catalogLink}
              isHighlighted={treatment.isHighlighted}
            />
          ))}
        </div>
        <p className="text-center text-gray-600 mt-6">
          It’s important to note that advanced treatments like these are
          typically used after trying more conservative approaches. Consulting
          with your optometrist is important to determine if you’re a good
          candidate for any of these procedures and to discuss the potential
          risks and benefits.
        </p>
      </div>
    </div>
  );
};

export default AdvancedTreatmentEyeCare;
