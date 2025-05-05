import React from "react";
import SubHeader from "../../../components/SubHeader";
import Link from "next/link";
import Image from "next/image";
import {
  InModeIPLDryImage,
  LumeccaBeforeAfterImage,
  LummericaImage,
} from "../../../constants/Images";

const page = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="IPL Therapy and RF Therapy – Advanced Dry Eye Treatments" />

      <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0">
        <h3 className="text-combination-200 text-3xl md:text-[37px] font-bold mb-4">
          Advanced Dry Eye Treatments
        </h3>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Dry eye syndrome is a common condition that affects millions of people
          worldwide, causing discomfort, visual disturbances, and a significant
          impact on the quality of life. While traditional treatments like
          artificial tears and prescription medications offer relief for many,
          advanced therapies are providing new hope for those with more
          persistent and severe symptoms. Two such innovative and advanced dry
          eye treatments are IPL therapy (Intense Pulsed Light) and RF therapy
          (Radiofrequency). These technologies have shown remarkable
          effectiveness in managing dry eye symptoms, offering patients improved
          comfort and visual clarity.
        </p>

        <Link className="" href="/book-eye-exam">
          <button className="bg-combination-100 hover:text-combination-200 text-white font-bold py-3 px-8 rounded-md transition-colors duration-200 shadow-md">
            Book An appointment
          </button>
        </Link>

        <h2 className="text-combination-200 text-3xl md:text-[37px] font-bold mb-4 mt-6">
          Inmode IPL Therapy for Dry Eye
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <Image
          src={LummericaImage}
          alt="Inmode IPL Therapy"
          width={150}
          height={48}
          className="w-[150px] h-[48px] object-contain"
        />
        <p className="text-neutral-500 text-base md:text-lg mb-4 mt-4">
          Intense Pulsed Light (IPL) therapy, initially developed for
          dermatological conditions such as rosacea and acne, has been adapted
          for ophthalmic use to treat dry eye syndrome. The therapy involves the
          use of broad-spectrum light to target and alleviate the underlying
          causes of dry eye, particularly meibomian gland dysfunction (MGD). The
          meibomian glands, located in the eyelids, produce the oily layer of
          the tear film, which prevents tear evaporation. When these glands are
          blocked or inflamed, it can lead to dry eye symptoms.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Inmode IPL therapy works by emitting pulses of light that penetrate
          the skin around the eyes. This light energy is absorbed by the blood
          vessels and pigmented cells, generating heat that helps to reduce
          inflammation, stimulate the meibomian glands, and enhance their
          function. This results in improved secretion of oils, leading to a
          more stable and healthy tear film.
        </p>
        <h2 className="text-combination-200 text-3xl md:text-[30px] font-bold mb-4 mt-6">
          IPL Before and After Treatment
        </h2>
        <Image
          src={LumeccaBeforeAfterImage}
          alt="Lumecca Before and After Treatment"
          width={1200}
          height={518}
          className="w-[1200px] h-[518px] object-contain"
        />
      </div>
    </main>
  );
};

export default page;
