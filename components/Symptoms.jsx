import React from "react";
import { InModeIPLDryImage, symptomsDryImage } from "../constants/Images";
import Image from "next/image";
import Link from "next/link";

// Reusable components to reduce repetition
const SectionTitle = ({ children, size = "lg" }) => {
  const sizeClasses = {
    lg: "text-3xl md:text-4xl",
    md: "text-2xl md:text-3xl",
    sm: "text-xl md:text-2xl",
  };

  return (
    <>
      <h2
        className={`${sizeClasses[size]} font-bold text-combination-200 mb-4`}
      >
        {children}
      </h2>
      <div className="w-16 h-0.5 bg-combination-100 mt-2" />
    </>
  );
};

const ListItem = ({ heading, text, headingClass = "text-neutral-500" }) => (
  <li className="ml-4">
    <strong className={`text-base font-bold mb-8 ${headingClass}`}>
      {heading}
    </strong>
    <p className="text-neutral-500">{text}</p>
  </li>
);

const Symptoms = () => {
  // Data arrays for different sections
  const symptomsData = [
    {
      head: "The Burn:",
      para: "A burning or stinging sensation is a classic dry eye symptom. It feels like your eyes are irritated and inflamed, similar to having gotten soap in your eye.",
    },
    {
      head: "The Itch:",
      para: "Dry eyes can become itchy, especially towards the end of the day or during periods of increased screen time. Unlike allergies, which often cause itchy, watery eyes, dry eye itchiness is accompanied by a gritty or scratchy feeling.",
    },
    {
      head: "Seeing Red:",
      para: "Dry eye can also lead to redness in the whites of your eyes. This is because the irritation triggers inflammation in the ocular surface.",
    },
    {
      head: "Blurry Visions:",
      para: "Ever feel like your vision goes in and out of focus?  Fluctuations in clarity and blurry vision are common symptoms of dry eye. This happens because the tear film helps maintain a smooth corneal surface, crucial for optimal vision. When the tear film is disrupted, the light rays don't bend properly, leading to blurred vision. ",
    },
    {
      head: "Light Sensitivity:",
      para: "Bright lights, including sunlight or fluorescent bulbs, can feel harsh and uncomfortable for people with dry eye.",
    },
  ];

  const diagnosisData = [
    {
      head: "Meibography:",
      para: "is an imaging technique used to visualize the structure and function of the meibomian glands in the eyelids. It employs specialized equipment, such as infrared light, to capture detailed images of the glands, helping to diagnose gland abnormalities or atrophy. This diagnostic tool is crucial for assessing the health of the glands and planning appropriate treatments for Meibomian Gland Dysfunction (MGD) and related disorders",
    },
    {
      head: "Schirmer Tear Test:",
      para: "This simple test measures tear production. A small strip of paper is placed under your lower eyelid for a few minutes. The amount of moisture absorbed by the paper indicates your tear production level.",
    },
    {
      head: "Tear Breakup Time (TBUT):",
      para: "This test assesses the stability of your tear film.  A small drop of dye is placed on your eye, and the doctor observes how long it takes for the tear film to break up into individual spots. A shorter than normal tear breakup time indicates faster evaporation.",
    },
    {
      head: "Ocular Surface Staining:",
      para: "Special dyes are used to highlight any damage to the surface of your eye caused by dry eye.  These dyes temporarily stain areas of dryness and inflammation, helping the doctor assess the severity of the condition.",
    },
  ];

  // Reusable list rendering function
  const renderList = (items, headingClass = "text-neutral-500") => (
    <ul className="list-disc list-inside space-y-8 md:mt-8 mt-4">
      {items.map((item, index) => (
        <ListItem
          key={index}
          heading={item.head}
          text={item.para}
          headingClass={headingClass}
        />
      ))}
    </ul>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 my-8 md:my-16">
      <section>
        <SectionTitle>Symptoms of Dry Eye</SectionTitle>
        <p className="text-neutral-500 mt-4">
          Dry eye might not scream "emergency," but its symptoms can be a real
          drag on your day-to-day comfort and vision. Here's what to watch out
          for:
        </p>
        <div className="flex justify-center items-center mt-10 md:mt-20">
          <Image
            src={symptomsDryImage}
            alt="Dry eye symptoms"
            width={847}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </section>

      {renderList(symptomsData)}

      <section className="mt-8 md:mt-12">
        <SectionTitle size="md">Diagnosis of Dry Eye</SectionTitle>
        <p className="text-neutral-500 mt-4">
          Dry eye might seem straightforward, but a proper diagnosis from an eye
          doctor is crucial. Several tests and tools can help your doctor
          pinpoint the type and severity of your dry eye:
        </p>
        {renderList(diagnosisData)}
      </section>

      <section className="mt-8 md:mt-12">
        <SectionTitle size="md">
          Why a Professional Diagnosis Matters?
        </SectionTitle>
        <p className="text-neutral-500 mt-4">
          While dry eye symptoms can be bothersome, they can sometimes mimic
          other eye conditions. A professional diagnosis from a dry eye
          specialist in Toronto ensures you receive the proper treatment for
          your specific needs. Additionally, dry eye can sometimes be a sign of
          an underlying medical condition. A comprehensive eye exam at our
          clinic can help identify any potential health concerns that might be
          contributing to your dry eye.
        </p>
      </section>

      <section className="mt-8 md:mt-12">
        <h2 className="text-2xl md:text-[37px] font-bold text-combination-200 mb-4">
          Treatment Options for Dry Eye
        </h2>
        <div className="w-16 h-0.5 bg-combination-100 mt-2" />
        <p className="text-neutral-500 mt-4">
          Dry eye, while frustrating, doesn't have to be a permanent problem.
          There are a range of treatment options available to address your
          specific needs and alleviate those bothersome symptoms. If you're
          experiencing dry eyes in Toronto, here's a look at some of the common
          approaches:
        </p>

        {/* Treatment sections */}
        {[
          {
            title: "Over-the-counter Solutions:",
            items: [
              {
                head: "Artificial Tears:",
                para: "These lubricating eye drops are the first line of defence for many people with dry eye syndrome. They come in various formulations, including preservative-free options for those with sensitive eyes.",
              },
              {
                head: "Ointments:",
                para: "For more severe dry eyes, especially at night, thicker lubricating ointments can provide long-lasting relief.",
              },
            ],
          },
          {
            title: "Prescription Medications:",
            items: [
              {
                head: "Anti-inflammatory Drugs:",
                para: "If inflammation is contributing to your dry eye, your doctor might prescribe steroid eye drops or medications to reduce inflammation and increase tear production.",
              },
            ],
          },
          {
            title: "Lifestyle and Environmental Changes:",
            items: [
              {
                head: "Embrace the Humidity:",
                para: "Dry air is a major culprit in tear evaporation. Using a humidifier at home and work can add moisture to the air and help your tears stay put.",
              },
              {
                head: "Take Screen Breaks:",
                para: "Staring at screens for extended periods can decrease blinking, leading to faster tear evaporation. Make a conscious effort to take regular breaks, look away from the screen, and allow your eyes to blink freely.",
              },
              {
                head: "Consider Your Environment:",
                para: "Windy conditions, smoke, and air pollution can irritate dry eyes. Wearing protective eyewear outdoors and avoiding smoky environments can help minimize discomfort.",
              },
            ],
          },
        ].map((section, idx) => (
          <div key={idx} className="mt-4">
            <h3 className="text-xl font-bold text-combination-200 mt-6 mb-2">
              {section.title}
            </h3>
            <ul className="list-disc list-inside space-y-4 text-neutral-500 ml-4">
              {section.items.map((item, index) => (
                <li key={index}>
                  <strong className="font-bold mb-4 ">{item.head}</strong>
                  <p className="text-neutral-500 mt-4">{item.para}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <div className="flex justify-center mt-8">
        <Link
          href="/book-eye-exam"
          className="bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white py-3 px-8 rounded-md w-full sm:w-auto"
        >
          Get Dry Eye Treatment Today
        </Link>
      </div>

      <section className="md:mt-10 mt-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div className="md:w-[49%]">
            <h2 className="text-combination-200 text-2xl md:text-[37px] font-bold mb-4">
              InMode IPL for Dry Eye Relief
            </h2>
            <hr className="w-[65px] h-[2px] bg-combination-100 mb-4" />
            <p className="text-neutral-500">
              InMode IPL therapy is an advanced and effective technology that is
              a core part of our treatment options. But what exactly is IPL, and
              how can it help with dry eyes?
            </p>
            <h2 className="text-combination-200 text-xl md:text-[30px] font-bold pr-6 mt-4 mb-4">
              Understanding Intense Pulsed Light (IPL):
            </h2>

            <p className="text-neutral-500">
              IPL stands for Intense Pulsed Light. It's a non-invasive
              technology that delivers controlled bursts of light energy to
              targeted tissues. In the context of dry eye treatment with IPL, it
              focuses on the delicate area around your eyelids.
            </p>
            <h2 className="text-combination-200 text-xl md:text-[30px] font-bold pr-6 mt-4 mb-4">
              IPL's Role in Dry Eye Treatment:
            </h2>

            <p className="text-neutral-500">
              Dry eye can be caused by inflammation in the eyelids and
              dysfunction of the meibomian glands. Here's how IPL addresses
              these issues:
            </p>
            <ul className="list-disc list-inside space-y-4 md:space-y-8 mt-4 md:mt-8">
              {[
                {
                  head: "Reducing Inflammation:",
                  para: "IPL's light pulses target and reduce inflammation in the eyelids, helping to calm the irritation and discomfort associated with dry eye.",
                },
                {
                  head: "Improving Gland Function:",
                  para: "The meibomian glands, which are responsible for the oily layer of your tear film, can sometimes become clogged or sluggish. IPL's gentle heat is believed to enhance the function of these glands, allowing them to produce a healthier, more effective oil layer.",
                },
              ].map((item, index) => (
                <li key={index}>
                  <strong className="text-lg md:text-xl font-bold text-combination-200">
                    {item.head}
                  </strong>
                  <p className="text-neutral-500 text-base mt-4">{item.para}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-[49%]">
            <Image
              src={InModeIPLDryImage}
              alt="Dry eye symptoms"
              width={585}
              height={780}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-combination-200 text-2xl md:text-[37px] font-bold mb-4">
          The Benefits of IPL:
        </h2>
        <hr className="w-[65px] h-[2px] bg-combination-100 mb-4" />
        <p className="text-neutral-500">
          Compared to some traditional dry eye treatments, IPL offers several
          attractive benefits:
        </p>
        <ul className="list-disc list-inside space-y-4 md:space-y-8 mt-4 md:mt-8">
          {[
            {
              head: "Non-invasive:",
              para: "No needles, no surgery. IPL delivers its effects through light pulses, making it a comfortable and minimally disruptive procedure.",
            },
            {
              head: "Quick Recovery:",
              para: "Unlike some treatments, IPL boasts a swift recovery time. You can typically resume your daily activities immediately after the procedure.",
            },
          ].map((item, index) => (
            <li key={index}>
              <strong className="text-lg md:text-xl font-bold text-neutral-500">
                {item.head}
              </strong>
              <p className="text-neutral-500 text-base mt-2 md:mt-4">
                {item.para}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-neutral-500 mt-4">
          We are proud to offer this advanced dry eye treatment with IPL at our
          360 Eyecare Clinic. If you're interested in exploring IPL as a
          potential option,{" "}
          <Link
            href="/book-eye-exam"
            className="text-combination-200 hover:text-combination-100"
          >
            Book an eye exam
          </Link>
          . We will assess your individual needs and determine if IPL might be a
          good fit for your dry eye management plan.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-combination-200 text-2xl md:text-[37px] font-bold mt-4 mb-4">
          InMode RF for Dry Eye Relief
        </h2>
        <hr className="w-[65px] h-[2px] bg-combination-100 mb-4" />
        <p className="text-neutral-500">
          At 360 Eyecare Clinics, we continually seek advanced solutions for dry
          eye relief, and one such innovation is InMode Radiofrequency (RF)
          therapy. Alongside IPL, RF offers a non-invasive approach to
          addressing those persistent dry eye symptoms.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-combination-200 text-xl md:text-[30px] font-bold mt-4 mb-4">
          RF's Role in Dry Eye Relief:
        </h2>
        <hr className="w-[65px] h-[2px] bg-combination-100 mb-4" />
        <p className="text-neutral-500">
          Dry eye can be linked to a decrease in collagen production and overall
          eyelid health. Here's how RF aims to address these issues:
        </p>
        {renderList([
          {
            head: "Collagen Comeback",
            para: ": As we age, collagen production naturally declines. Collagen is a protein that provides structure and support to the skin, including the delicate skin around your eyes. RF therapy is believed to stimulate collagen production in this area, leading to firmer, tighter eyelids.",
          },
          {
            head: "Eyelid Health Boost:",
            para: "Stronger, healthier eyelids can better support the meibomian glands and improve their function. This, in turn, can lead to better tear quality and a more stable tear film.",
          },
        ])}
      </section>

      <section className="mt-6">
        <h2 className="text-combination-200 text-xl md:text-[30px] font-bold mt-4 mb-4">
          The Advantages of RF:
        </h2>
        <hr className="w-[65px] h-[2px] bg-combination-100 mb-4" />
        <p className="text-neutral-500">
          Much like IPL, InMode RF therapy boasts some appealing benefits for
          dry eye sufferers:
        </p>
        {renderList([
          {
            head: "Non-surgical Solution:",
            para: "No need for scalpels or stitches. RF therapy delivers its effects through controlled radio waves, making it a comfortable and minimally disruptive procedure",
          },
          {
            head: "Long-lasting Results:",
            para: "While the exact duration can vary, RF therapy is known for providing long-lasting improvement in dry eye symptoms. This means fewer treatments and more relief over time.",
          },
        ])}
        <p className="text-neutral-500 mt-4">
          If you're curious about whether RF might be a good fit for you,
          discuss it with our toronto optometrists. They can evaluate your
          individual needs and determine if RF could be a valuable addition to
          your dry eye management strategy.
        </p>
        <p className="text-neutral-500 mt-4">
          Discover the potential of dry eye treatment with RF (Radiofrequency)
          at our{" "}
          <Link
            href="/book-eye-exam"
            className="text-combination-200 hover:text-combination-100"
          >
            Optometry Clinic Beaches
          </Link>{" "}
          and{" "}
          <Link
            href="/book-eye-exam"
            className="text-combination-200 hover:text-combination-100"
          >
            Optometry Clinic Rosedale
          </Link>
          . Our specialists are ready to help you find the best solution for
          your eye health.
        </p>
      </section>
    </div>
  );
};

export default Symptoms;
