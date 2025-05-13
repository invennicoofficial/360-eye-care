import React from "react";
import SubHeader from "../../../components/SubHeader";
import VideoSection from "../../../components/VideoSection";
import Link from "next/link";
import AdvancedTreatmentEyeCare from "../../../components/AdvancedTreatmentEyeCare";
import PreventingDryEye from "../../../components/PreventingDryEye";
import DryEyeVideoSection from "../../../components/DryEyeVideoSection";

import {
  DryEyeImage,
  dryEyeImage,
  ThumbnailDryEyeImage1,
  ThumbnailDryEyeImage2,
  understandDryEyeImage,
} from "../../../constants/Images";
import Image from "next/image";
import WhatHappensIfIDoNothing from "../../../components/WhatHappensIfIDoNothing";
import Symptoms from "../../../components/Symptoms";
import DryFaqs from "../../../components/DryFaqs";
import { dryFaqdata } from "constants/Constants";

// Section components to improve modularity
const IntroSection = () => (
  <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 flex flex-col md:flex-row justify-between mb-10">
    <div className="flex flex-col gap-4 w-full md:w-[585px] md:mr-10 mb-8 md:mb-0">
      <h2 className="text-combination-200 text-3xl md:text-[37px] font-bold">
        Dry Eye Clinic
      </h2>
      <hr className="w-20 h-1 bg-combination-100 mb-4" />
      <p className="text-neutral-500 text-base md:text-lg mb-4">
        For millions of Canadians, dry eye is a daily irritant that disrupts
        their comfort and clarity of vision.
      </p>
      <p className="text-neutral-500 text-base md:text-lg mb-4">
        Imagine staring at a computer screen, only to feel like sand is grinding
        beneath your eyelids. That burning, gritty sensation is the hallmark of
        dry eye, a condition where your eyes lack the necessary moisture to
        function smoothly.
      </p>
      <p className="text-neutral-500 text-base md:text-lg mb-4">
        Far from uncommon, dry eye affects a significant portion of the
        population, particularly as we age. This seemingly simple issue can have
        a surprisingly large impact on daily activities. Reading, working on a
        computer, or even spending time outdoors in windy conditions can become
        uncomfortable or even painful.
      </p>
      <p className="text-neutral-500 text-base md:text-lg mb-4">
        For those living in the city, visiting a dry eye clinic in Toronto can
        provide much-needed relief. Dry eye isn't just an annoyance; it can also
        affect the quality of your vision, causing blurry sight and fluctuations
        in clarity. In severe cases, it can damage the surface of the eye,
        leading to more serious complications.
      </p>
      <Link href="/book-eye-exam">
        <button className="bg-combination-200 hover:text-combination-100 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 shadow-md">
          Book an eye exam
        </button>
      </Link>
    </div>
    <div className="w-full md:w-[585px] h-auto md:h-[536px]">
      <Image
        src={dryEyeImage}
        alt="Dry Eye Clinic"
        width={585}
        height={536}
        className="w-full h-auto"
      />
    </div>
  </div>
);

const UnderstandingDryEye = () => (
  <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 flex flex-col md:flex-row justify-between">
    <div className="flex flex-col gap-4 w-full md:w-[585px] md:mr-10 mb-8 md:mb-0">
      <h2 className="text-combination-200 text-3xl md:text-[37px] font-bold">
        Understanding Dry Eye
      </h2>
      <hr className="w-20 h-1 bg-combination-100 mb-4" />
      <p className="text-neutral-500 text-base md:text-lg mb-4">
        Dry eye, technically known as Dry Eye Disease (DED), is more than just a
        lack of tears. It's a complex condition affecting the tear film, a
        three-layered shield that keeps your eyes lubricated, nourished, and
        protected. Disruptions in this tear film can lead to the uncomfortable
        symptoms we associate with dry eye.
      </p>
      <p className="text-neutral-500 text-base md:text-lg mb-4">
        There are two main types of dry eye, each with its culprit:
      </p>
    </div>
    <div className="w-full md:w-[585px] flex flex-row items-end">
      <div className="hidden md:block w-[30px] h-[280px] bg-gray-100" />
      <Image
        src={understandDryEyeImage}
        alt="Understanding Dry Eye"
        width={585}
        height={536}
        className="w-full h-auto"
      />
    </div>
  </div>
);

const DryEyeTypes = () => (
  <ul className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 flex flex-col gap-4 list-disc list-inside text-neutral-500 text-base md:text-lg">
    <li>
      <strong className="text-gray-400 font-bold">Evaporative Dry Eye:</strong>
      <p className="mt-2 ml-0 md:ml-6">
        Here, the quality, not quantity, of your tears is the problem. Even if
        your eyes produce enough tears, they evaporate too quickly. This can be
        due to problems with the oily outer layer of the tear film, often caused
        by Meibomian Gland Dysfunction (MGD) and environmental factors like dry
        air, wind, or excessive screen time.
      </p>
    </li>
    <li className="mt-4">
      <strong className="text-gray-400 font-bold">
        Aqueous Deficient Dry Eye:
      </strong>
      <p className="mt-2 ml-0 md:ml-6">
        This type occurs when your lacrimal glands, responsible for tear
        production, don't produce enough tears. This can be caused by aging,
        autoimmune diseases like Sjogren's syndrome, or certain medications.
      </p>
    </li>
  </ul>
);

const SectionTitle = ({ title }) => (
  <>
    <h2 className="text-combination-200 text-3xl md:text-[37px] font-bold">
      {title}
    </h2>
    <hr className="w-20 h-1 bg-combination-100 mb-4" />
  </>
);

const MGDSection = () => (
  <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 flex flex-col gap-6 text-neutral-500 text-base md:text-lg">
    <h2 className="text-combination-200 text-3xl md:text-[37px] font-bold">
      Meibomian Gland Dysfunction (MGD)
    </h2>
    <hr className="w-20 h-1 bg-combination-100 mb-4" />

    <p>
      Meibomian gland dysfunction (MGD) is a common but often underdiagnosed
      condition that significantly contributes to dry eye disease (DED). The
      meibomian glands, located in the eyelids, play a critical role in
      maintaining a healthy tear film and overall ocular surface health.
    </p>

    <h3 className="text-2xl md:text-[30px] font-semibold text-combination-200 mt-6">
      What is MGD?
    </h3>
    <p>
      MGD occurs when the meibomian glands, which are small oil-producing glands
      in the eyelids, become blocked, inflamed, or dysfunctional. These glands
      produce an oily substance that helps prevent tears from evaporating too
      quickly, keeping the eyes moist and comfortable. When these glands get
      clogged or don't produce enough oil, it can lead to dry eyes, irritation,
      and sometimes blurry vision.
    </p>
    <p>
      When the meibomian glands aren't functioning properly, it can result in
      decreased quantity or quality of meibum, leading to various symptoms
      including:
    </p>
    <ul className="list-disc list-inside ml-0 md:ml-5">
      <li className="mb-2">
        <strong>Dryness:</strong> Insufficient oil causes tears to evaporate too
        quickly, leading to dry, gritty, or irritated eyes.
      </li>
      <li className="mb-2">
        <strong>Burning or Stinging:</strong> Irritation or discomfort,
        especially when blinking.
      </li>
      <li className="mb-2">
        <strong>Redness:</strong> Inflammation of the eyelids or the surface of
        the eye.
      </li>
      <li className="mb-2">
        <strong>Blurry Vision:</strong> Poor tear film quality affects vision
        clarity.
      </li>
      <li className="mb-2">
        <strong>Sensitivity to Light:</strong> Increased sensitivity to bright
        lights or glare.
      </li>
    </ul>

    <h3 className="text-2xl md:text-[30px] font-semibold text-combination-200 mt-6">
      Diagnosis
    </h3>
    <p>
      Diagnosing MGD typically involves a thorough eye examination by an eye
      care professional. Key diagnostic steps include:
    </p>
    <ul className="list-disc list-inside ml-0 md:ml-5">
      <li className="mb-2">
        <strong>Patient History:</strong> Understanding the patient's symptoms
        and medical history.
      </li>
      <li className="mb-2">
        <strong>Meibomian Gland Evaluation:</strong> Assessing the gland
        structure and function through techniques like gland expression and
        meibography (imaging of the glands).
      </li>
      <li className="mb-2">
        <strong>Tear Film Analysis:</strong> Evaluating tear film stability,
        quantity, and quality using tests like the tear breakup time (TBUT) and
        osmolarity testing.
      </li>
      <li className="mb-2">
        <strong>Lid Margin Examination:</strong> Inspecting the eyelid margins
        for signs of inflammation, blockage, or abnormalities.
      </li>
    </ul>

    <h3 className="text-2xl md:text-[30px] font-semibold text-combination-200 mt-6">
      Treatment
    </h3>
    <p>
      Effective management of MGD requires a comprehensive approach tailored to
      the severity and underlying causes. Treatment options include:
    </p>
    <h4 className="text-lg font-semibold mt-4">Lifestyle and Home Remedies:</h4>
    <ul className="list-disc list-inside ml-0 md:ml-5">
      <li className="mb-2">
        <strong>Warm Compresses:</strong> Applying warm compresses to the
        eyelids can help liquefy and express meibum.
      </li>
      <li className="mb-2">
        <strong>Eyelid Hygiene:</strong> Regularly cleaning the eyelids with
        gentle cleansers to remove debris and bacteria.
      </li>
      <li className="mb-2">
        <strong>Omega-3 Supplements:</strong> Dietary supplements may improve
        meibum quality.
      </li>
    </ul>

    <h4 className="text-2xl md:text-[30px] text-combination-200 font-semibold mt-4">
      Medications:
    </h4>
    <ul className="list-disc list-inside ml-0 md:ml-5">
      <li className="mb-2">
        <strong>Antibiotics:</strong> Oral or topical antibiotics can reduce
        inflammation and bacterial load.
      </li>
      <li className="mb-2">
        <strong>Anti-inflammatories:</strong> Topical steroids or
        immunomodulatory agents can alleviate inflammation.
      </li>
    </ul>

    <h4 className="text-2xl md:text-[30px] text-combination-200 font-semibold mt-4">
      In-Office Procedures:
    </h4>
    <ul className="list-disc list-inside ml-0 md:ml-5">
      <li className="mb-2">
        <strong>Intense Pulsed Light (IPL):</strong> IPL therapy can reduce
        inflammation and improve gland function by targeting blood vessels
        around the glands.
      </li>
      <li className="mb-2">
        <strong>RF (Radiofrequency):</strong> Radiofrequency treatment for
        Meibomian Gland Dysfunction (MGD) uses controlled heat delivered through
        radiofrequency waves to liquefy and express the meibum, helping to
        improve gland function and alleviate dry eye symptoms. This non-invasive
        therapy can enhance meibomian gland secretion and reduce inflammation,
        providing relief for patients with MGD.
      </li>
      <li className="mb-2">
        <strong>LipiFlow®:</strong> A thermal pulsation treatment that heats and
        massages the glands to clear blockages and restore function.
      </li>
      <li className="mb-2">
        <strong>Meibomian Gland Probing:</strong> A procedure to mechanically
        open blocked gland ducts.
      </li>
    </ul>
  </div>
);

const page = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="Dry Eye Clinic" />
      <VideoSection />
      <IntroSection />
      <UnderstandingDryEye />
      <DryEyeTypes />
      <MGDSection />
      <WhatHappensIfIDoNothing />
      <Symptoms />
      <AdvancedTreatmentEyeCare />
      <PreventingDryEye />
      <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0">
        <h2 className="text-combination-200 text-3xl md:text-[37px] font-bold">
          Long-Term Eye Care Habits
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <ul className="list-disc list-inside space-y-6 md:space-y-8 md:mt-8 mt-4">
          {[
            {
              head: "Schedule regular eye exams:",
              para: "  Regular eye checkups allow your doctor to monitor your eye health and detect any potential issues that might contribute to dry eye. ",
            },
            {
              head: "Consider artificial tears:",
              para: "  Even if you don't experience chronic dry eye, using preservative-free artificial tears throughout the day, especially in dry climates or during allergy season, can help keep your eyes lubricated and comfortable.",
            },

            {
              head: "Maintain a healthy lifestyle:",
              para: "  Smoking and excessive alcohol consumption can worsen dry eye symptoms. Taking care of your overall health with a balanced diet and regular exercise can contribute to better eye health.",
            },
          ].map((item, index) => (
            <li key={index} className="ml-0 md:ml-4">
              <strong className="text-base font-bold mb-4 md:mb-8 text-neutral-500">
                {item.head}
              </strong>
              <p className="text-neutral-500 mt-2 md:mt-4">{item.para}</p>
            </li>
          ))}
        </ul>
        <p className="text-neutral-500 mt-4">
          By incorporating these preventive measures into your daily routine,
          you can significantly reduce your risk of dry eye and keep your vision
          clear and comfortable for years to come. Remember, consistency is key!
          The more you prioritize these healthy habits, the better equipped your
          eyes will be to combat dryness and maintain optimal moisture.
        </p>
      </div>
      <DryEyeVideoSection />

      <DryFaqs faqData={dryFaqdata} title="Dry Eye FAQs" />
    </main>
  );
};

export default page;
