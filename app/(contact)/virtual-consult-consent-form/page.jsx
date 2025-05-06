import React from "react";
import SubHeader from "../../../components/SubHeader";

const plans = [
  "Sudden ocular pain",
  "Sudden loss of vision",
  "Sudden onset of light flashes, floaters, or visual disturbances resembling shadows",
  "Sudden change of vision",
  "Red or painful eye due to injury",
  "Red or painful eye with a history of recent eye surgery",
  "Pain, redness and/or discharge in the eyes or surrounding areas (eyelids, brow areas)",
];

const page = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="Virtual Consult Consent Form" />
      <div className="mx-4 md:mx-10 bg-white p-6 md:p-14">
        <h2 className="text-combination-200 text-2xl md:text-3xl lg:text-[37px] font-bold mb-4">
          ONLINE CONSULTATION WITH 360 EYECARE OPTOMETRISTS
        </h2>
        <hr className="w-16 md:w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-sm md:text-base mb-4">
          360 Eyecare is now offering live online consultation services (also
          known as telemedicine, telehealth or tele-eyecare). This service is to
          be used for urgent eye care matters. You may access this service if
          you are experiencing any of the following symptoms:
        </p>

        <ul className="list-disc list-inside text-neutral-500 ">
          {plans.map((plan, index) => (
            <li
              className="ml-4 text-sm md:text-base font-medium mb-2"
              key={index}
            >
              {plan}
            </li>
          ))}
        </ul>

        <p className="text-neutral-500 text-sm md:text-base mb-4 mt-6">
          The FEE to access this service is{" "}
          <span className="font-bold">$75</span> per consultation. There is
          currently no OHIP coverage for telemedical optometry services. At the
          end of the consultation the system will prompt you to make an online
          payment with a valid credit card.
        </p>

        <p className="text-neutral-500 text-sm md:text-base mb-4">
          Your online consultation protects your privacy using encryption
          technology for any personal information or images that may be shared
          between you and the doctor on the platform. Your online consultation
          may involve video chat, direct messaging, or photo uploads. You will
          be asked questions about the nature of your symptoms as well as your
          health history if relevant, including any medications you are taking.
        </p>
        <p className="text-neutral-500 text-sm md:text-base mb-4">
          While useful in particular clinical situations,{" "}
          <span className="font-bold">
            tele-eyecare does NOT replace a traditional in-person comprehensive
            eye examination
          </span>{" "}
          where direct patient examination, personal interaction and counselling
          is the generally accepted standard of care.
        </p>
        <p className="text-neutral-500 text-sm md:text-base mb-3">
          Not all urgent eye care matters can be managed via telemedicine, and
          following your consultation you may be asked to book an in-person
          appointment to be evaluated more thoroughly.
        </p>
      </div>
    </main>
  );
};

export default page;
