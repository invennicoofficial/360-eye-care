"use client";

import Image from "next/image";
import SubHeader from "../../../components/SubHeader";
import {
  ContactLensImage,
  DailyDisposableLenses,
  wearContactLenses,
} from "../../../constants/prescriptionLenses";
import TitleCommon from "../../../components/common/TitleCommon";
import FAQItem from "../../../components/common/FAQItem";
import { useState } from "react";
import Link from "next/link";



const ContactLensesToronto = () => {
  const [openFAQs, setOpenFAQs] = useState([]);

  const toggleFAQ = (id) => {
    setOpenFAQs((prev) =>
      prev.includes(id) ? prev.filter((faqId) => faqId !== id) : [...prev, id]
    );
  };

  const faqData = [
    {
      id: 1,
      question: "Can I wear contact lenses?",
      answer:
        "The answer depends on each patient. However, with today's technology and the advancements that have been made in this field, we are able to find solutions for most patients. Whether you have been diagnosed with astigmatism or presbyopia, you can correct the condition with toric soft lenses or bifocal contact lenses respectively. In other words, you may actually be a better candidate for contacts than you assume.",
    },
    {
      id: 2,
      question: "Are contacts uncomfortable?",
      answer:
        "Assume you were deemed a candidate and had a proper fit with no complications it typically only takes a brief period for you to adapt to the contacts and you won't notice any difference.",
    },
    {
      id: 3,
      question: "Can they get lost behind my eyeball?",
      answer:
        "The conjunctiva (which is a thin membrane) covers the white of your eye and connects to your eyelid making it practically impossible for the contact lens to get lost behind the eyeball.",
    },
    {
      id: 4,
      question: "Can a contact lens be permanently stuck to my eye?",
      answer:
        "While it is true that the soft contact lens may stick to the surface of the eye when it (the lens) is dried out, re-moisturizing it should make it easy for you to remove it. A sterile saline solution or multi-purpose lens solution should be used to moisturize the lens.",
    },
    {
      id: 5,
      question: "Can contact lenses cause eye problems?",
      answer:
        "Yes, they can cause eye problems. There are certain eye complications that may arise due to the use of contacts. However, if you follow your optometrist's instructions regarding how to wear them, how to take care of them, how frequently they should be replaced, and how long to wear them then your risk of complications is reduced.",
    },
    {
      id: 6,
      question: "Can contact lenses pop out easily?",
      answer:
        "Some years ago, the old-fashioned contacts would pop out of the eye during sports or any other rigorous activity. However, while it is still possible, recent advancements in both soft and rigid gas-permeable lenses have allowed for more customizable fits, making it more difficult to dislodge.",
    },
    {
      id: 7,
      question: "Are contacts too expensive?",
      answer:
        "That depends on the brand and quality of lenses, but for the most part, contact lens prices have come a long way and most are quite affordable now. You can get disposable daily contacts (once considered a luxury) for less than the cost of a daily cup of coffee.",
    },
    {
      id: 8,
      question: "Am I too old to wear contacts?",
      answer:
        "Thanks to the bifocal contact lens, age is no longer a barrier. Our optometrists and opticians at 360 Eyecare are licensed and experienced in all modalities of contacts including multi-focal and mono-vision systems.",
    },
    {
      id: 9,
      question: "Do contacts require a lot of care?",
      answer:
        "Not really. A multipurpose solution or hydrogen peroxide can be used to clean and disinfect most lenses on a daily basis. Better yet, you can opt for daily disposable contacts, which save you a lot of headaches, as they do not require any solution. These lenses are disposed of daily and new ones are worn every day.",
    },
  ];

  return (
    <main className="pt-[110px] pb-8">
      <SubHeader text="Contact Lenses" />
      <div className="max-w-[1172px] mx-auto px-4 sm:px-6 md:px-8 mt-4 flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src={ContactLensImage}
            alt="Contact Lens"
            className="w-full h-auto object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 text-sm md:text-base">
          <p className="text-neutral-500 mt-2">
            Contact lenses, just like Lasik (laser eye surgery) or eyeglasses,
            correct astigmatism, nearsightedness, and farsightedness. In fact,
            one in every five people who need vision correction wears contact
            lenses. Contacts have changed the way many tackle eyecare problems.
            They are small, can change the colour of your eye, and are
            relatively inexpensive.
          </p>
          <p className="text-neutral-500 mt-4">
            Many people are still unaware of how they work, how many different
            types there are, and which eye problems can be addressed using
            contact lenses. Contacts, as we all know, are thin plastic lenses
            placed directly on the eye to correct refractive errors. They can be
            worn by most patients now that they come in all sizes and shapes.
          </p>
          <p className="text-neutral-500 mt-4">
            If you want to shop for contact lenses in Toronto, you can visit 360
            Eyecare Beaches and{" "}
            <Link
              href={"toronto-rosedale-optometrist/"}
              className="text-combination-200 hover:text-combination-100"
            >
              360 Eyecare Yorkville Rosedale
            </Link>
            . All types of contact lenses are available at our optical store.
          </p>
        </div>
      </div>

      <div className="max-w-[1172px] mx-auto px-4 sm:px-6 md:px-8 mt-8 flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="w-full md:w-7/12 text-sm md:text-base">
          <TitleCommon
            title="Are you looking to switch to contact lenses?"
            position="start"
            css="text-combination-200 text-2xl sm:text-3xl md:text-[37px] leading-[1.2] font-extrabold font-poppins mt-2"
          />
          <p className="text-neutral-500 mt-4">
            Switching from prescription glasses to contact lenses starts with an
            eye exam followed by a lens fitting session, which helps find the
            contact lens parameters that best fit your eyes and preferred
            modality. During the eye exam, the eye doctor will also check for
            any eye problems that may occur by wearing contact lenses. After
            evaluating the ocular structure, the next step is contact lens
            fitting, which helps in choosing the right kind of contact lens for
            you. While taking measurements of your eye, the doctor will check
            your corneal curvature; this helps the doctor prescribe the best
            base curve and diameter for your eye.
          </p>
          <p className="text-neutral-500 mt-4">
            In some cases, your doctor might want to perform corneal topography
            to better map your eye structure. Trial lenses are initially used to
            check if the lenses are appropriate for you in terms of position,
            centration, rotation, and comfort. Your vision with these lenses
            will also be checked to ensure optimized eye care outcomes. Based on
            your comprehensive eye and contact lens exam, the doctor may
            prescribe different types of contact lenses like soft dailies (daily
            disposable lenses), hard contact lenses, bifocal lenses, or
            multifocal lenses.
          </p>
        </div>
        <div className="w-full md:w-5/12">
          <Image
            src={DailyDisposableLenses}
            alt="Daily Disposable Lenses"
            className="w-full h-auto object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, 30vw"
            loading="eager"
          />
        </div>
      </div>

      <div className="bg-[#29305f] !text-white py-6 px-4 sm:px-6 md:px-8 mt-8">
        <TitleCommon
          css="text-white text-2xl sm:text-3xl font-poppins"
          title="Types of Contact Lenses"
          position="center"
        />

        <div className="max-w-[1172px] mx-auto flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 px-0 sm:px-2 lg:pr-6">
            <TitleCommon
              css="text-white text-xl sm:text-2xl mt-6 sm:mt-8"
              title="Daily Soft Contact Lenses"
              position="start"
            />
            <p className="text-white my-3 text-sm sm:text-base">
              Daily soft contact lenses are the most popular choice for almost
              everyone as they are comfortable and have a very low adaptation
              period. These contact lenses allow oxygen to pass through and are
              less likely to have protein built on them over time as they are
              replaced on a daily basis. Soft contact lenses are made of soft
              plastic lenses or silicone hydrogel.
            </p>
            <TitleCommon
              css="text-white text-xl sm:text-2xl mt-5 sm:mt-6"
              title="Hard Contact Lenses or RGP Lenses"
              position="start"
            />
            <p className="text-white my-3 text-sm sm:text-base">
              Hard Contact Lenses are designed in a way that allows oxygen to
              reach the ocular surface. These lenses are hard and smaller than
              soft contact lenses. They provide better visual outcome than soft
              lenses for patients with irregular corneal surface such as
              keratoconus patients. They generally can be worn for longer
              periods of time but need to be cleaned regularly.
            </p>
            <TitleCommon
              css="text-white text-xl sm:text-2xl mt-5 sm:mt-6"
              title="Hybrid Lenses"
              position="start"
            />
            <p className="text-white my-3 text-sm sm:text-base">
              Hybrid lenses have a central optic zone which is made of Gas
              Permeable materials and the rest is made of soft material. They
              typically provide better eye care comfort than hard lenses due to
              the integration of the soft lens component.
            </p>
            <TitleCommon
              css="text-white text-xl sm:text-2xl mt-5 sm:mt-6"
              title="Bifocal Lenses"
              position="start"
            />
            <p className="text-white my-3 text-sm sm:text-base">
              Bifocal contact lenses work just like bifocal glasses offering
              clear vision at different distances. Bifocal or multifocal lenses
              are used to correct astigmatism as well.
            </p>
            <TitleCommon
              css="text-white text-xl sm:text-2xl mt-5 sm:mt-6"
              title="Multifocal lenses"
              position="start"
            />
            <p className="text-white my-3 text-sm sm:text-base">
              Multifocal lenses are similar to progressive lenses in glasses.
              They have more than one power to correct vision at different
              distances to provide clear vision at all times.
            </p>
            <p className="text-white my-3 text-sm sm:text-base font-medium">
              Learn more about Multifocal Contact Lenses
            </p>
          </div>

          <div className="w-full lg:w-1/2 px-0 sm:px-2 lg:pl-6 mt-6 lg:mt-0">
            <TitleCommon
              css="text-white text-xl sm:text-2xl mt-0 sm:mt-8"
              title="Keratoconus Lenses"
              position="start"
            />
            <p className="text-white my-3 text-sm sm:text-base">
              Keratoconus is a condition in which the cornea loses its natural
              round shape and starts bulging, and thinning and is associated
              with reduced vision. It results in irregular astigmatism. At 360
              Eyecare, our optometrists utilize labs that specialize in RGP
              keratoconus lenses for optimum results.
            </p>
            <TitleCommon
              css="text-white text-xl sm:text-2xl mt-5 sm:mt-6"
              title="Orthokeratology Lenses"
              position="start"
            />
            <p className="text-white my-3 text-sm sm:text-base">
              We also offer Orthokeratology (ortho-k) lens treatment: it is an
              overnight vision correction, which can help reshape your cornea to
              reduce refractive errors, temporarily. It involves the fitting of
              specially designed gas-permeable contact lenses, which you can
              wear overnight. While you are asleep, the lenses gently reshape
              the front surface of your eye (cornea) so that you can see clearly
              the following day after you remove the lenses. For best results,
              it is suggested that you wear the lenses every night.
            </p>
            <p className="text-white mt-2 text-sm sm:text-base">
              For the right candidate, Orthokeratology lenses can be prescribed
              to:
            </p>
            <ul className="list-disc pl-5 text-white my-2 text-sm sm:text-base">
              <li className="mb-1">
                Correct refractive errors, primarily mild to moderate levels of
                Myopia
              </li>
              <li className="mb-1">
                Slow the progression of childhood myopia.
              </li>
              <li>
                However, some mild astigmatism, hyperopia, and in some cases,
                presbyopia can also be corrected.
              </li>
            </ul>

            <p className="text-white my-3 text-sm sm:text-base">
              The type and amount of refractive error that can be effectively
              managed with orthokeratology differ for each case. A comprehensive
              eye exam should help determine a specific plan to manage vision
              correction in each case. At 360 Eyecare our optometrists will
              discuss available lens options for your specific needs and
              prognosis for each at the time of your consult.
            </p>
            <p className="text-white mb-4 text-sm sm:text-base font-medium">
              Learn more about Orthokeratology
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1172px] mx-auto px-4 sm:px-6 md:px-8 mt-8">
        <TitleCommon
          title="Frequently Asked Questions About Contact Lenses"
          position="start"
          css="text-2xl sm:text-3xl font-poppins"
        />
        <p className="text-sm md:text-base text-neutral-500 mt-4">
          While some people enjoy making a fashion statement with a pair of chic
          eyeglasses, others prefer doing without them. Contact lenses are great
          for this. They also provide a full field of unobstructed view, which
          is great for sports. A lot of facts and myths have been spread about
          contacts; let's look at some of them and whether they are true or not:
        </p>
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 mt-6">
          <div className="w-full md:w-1/2">
            <Image
              src={wearContactLenses}
              alt="Wearing Contact Lenses"
              className="w-full h-auto object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="space-y-3 sm:space-y-4">
              {faqData.map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openFAQs.includes(faq.id)}
                  toggleFAQ={toggleFAQ}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-neutral-500 text-sm md:text-base mt-6">
          For any further questions or if you would like to book your contact
          lens fit and consultation today at one of our 360 Eyecare offices in
          Toronto, please call or email us at your convenience. Or, you can
          browse our online{" "}
          <Link
            className="text-combination-200 hover:text-combination-100"
            href="/contact-lenses-toronto"
          >
            contact lens shop
          </Link>
        </p>
      </div>
    </main>
  );
};

export default ContactLensesToronto;
