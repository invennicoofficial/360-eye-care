"use client";
import { useState } from "react";
import { HoyaImage, ZeissImage } from "../constants/Images";
import Image from "next/image";
import Link from "next/link";
const MyopiaControl = () => {
  const [selected, setSelected] = useState(0);

  const treatments = [
    {
      label: "Spectacle Therapy",
      icon: "/api/placeholder/48/48",
      // title: "Spectacle Therapy",
      description:
        "Spectacle therapy with specialized lenses can play a role in myopia control. These lenses are designed to manipulate how light enters the eye, potentially slowing down the elongation of the eyeball.",
      content: (
        <div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/5">
              <div className="bg-neutral-100 rounded-lg p-4 h-full flex items-center justify-center">
                <Image
                  src={HoyaImage}
                  alt="MiyoSmart Lens"
                  width={446}
                  height={409}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-3/5">
              <section className="text-base text-neutral-700">
                <h3 className="text-3xl font-bold mb-6 text-combination-200">
                  MiyoSmart Lenses by Hoya
                </h3>
                <ul className="space-y-6 list-disc list-inside">
                  <li>
                    <strong className="text-gray-500 ">Technology:</strong>{" "}
                    <span className="text-neutral-600">
                      <Link
                        href="/miyosmart"
                        className="text-gray-500  underline hover:text-gray-500 -dark"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        MiyoSmart lenses
                      </Link>{" "}
                      incorporate Defocus Incorporated Multiple Segments
                      (D.I.M.S.) technology. These tiny segments within the lens
                      create a central clear zone for sharp vision and a
                      peripheral zone with a slight blur. This peripheral blur
                      is thought to signal the eye to reduce its axial
                      elongation.
                    </span>
                  </li>
                  <li>
                    <strong className="text-gray-500 ">
                      Benefits and Effectiveness:
                    </strong>{" "}
                    <span className="text-neutral-600">
                      Studies have shown promising results with MiyoSmart lenses
                      in slowing myopia progression by an average of 60%.
                    </span>
                  </li>
                  <li>
                    <strong className="text-gray-500 ">
                      Clinical Studies:
                    </strong>{" "}
                    <span className="text-neutral-600">
                      A 2-year randomized clinical trial involving 183 Chinese
                      children aged 8-13 with myopia between -1.00D and -5.00D
                      found that the MiYOSMART lens provided a 59% reduction in
                      myopia progression measured by cycloplegic spherical
                      equivalent refraction and a 60% reduction in axial length
                      elongation compared to single vision lenses
                    </span>{" "}
                    <span className="text-neutral-600">
                      <strong>Source: </strong>
                      <Link
                        href="https://www.hoyavision.com/ca/vision-products/myopia/miyosmart/"
                        className="text-brand-blue underline hover:text-brand-blue-dark"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Miyosmart spectacle performance
                      </Link>
                      .
                    </span>
                  </li>
                </ul>
              </section>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-3/5 order-2 md:order-1">
                <section className="text-base text-neutral-700">
                  <h3 className="text-3xl font-bold mb-6 text-combination-200">
                    MiyoSmart Lenses by Hoya
                  </h3>
                  <ul className="space-y-6 list-disc list-inside">
                    <li>
                      <strong className="text-gray-500 ">Technology:</strong>{" "}
                      <span className="text-neutral-600">
                        MyoCare lenses utilize DualZone technology. Similar to
                        MiyoSmart lenses, they have a central clear zone and a
                        peripheral zone with a slight defocus.
                      </span>
                    </li>
                    <li>
                      <strong className="text-gray-500 ">
                        Benefits and Effectiveness:
                      </strong>{" "}
                      <span className="text-neutral-600">
                        Research suggests MyoCare lenses can be effective in
                        slowing myopia progression, with studies showing an
                        average reduction of around 59%.
                      </span>
                    </li>
                    <div>
                      <strong className="text-gray-500 ">
                        Clinical Studies:
                      </strong>{" "}
                      <span className="text-neutral-600">
                        Clinical Studies: In a 12-month multi-center trial in
                        China involving 240 children aged 6-13 with myopia
                        between -0.75D and -5.00D, ZEISS MyoCare lenses slowed
                        myopia progression by an average of 0.31D and axial
                        elongation by 0.13 mm compared to single vision lenses,
                        a relative efficacy of 48% and 41% respectively
                      </span>{" "}
                      <span className="text-neutral-600">
                        <strong>[Source: </strong>
                        <Link
                          href="https://reviewofmm.com/zeiss-shares-data-on-myocare-efficacy-at-arvo-2024/"
                          className="text-brand-blue underline hover:text-brand-blue-dark"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Zeiss data on Myocare efficacy 2024
                        </Link>
                        ].
                      </span>
                    </div>
                  </ul>
                </section>
              </div>
              <div className="md:w-2/5 order-1 md:order-2">
                <div className="bg-neutral-100 rounded-lg p-4 h-full flex items-center justify-center">
                  <Image
                    src={ZeissImage}
                    alt="MyoCare Lens"
                    width={300}
                    height={300}
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Orthokeratology (Ortho-K)",
      icon: "/api/placeholder/48/48",
      // title: "Orthokeratology (Ortho-K)",
      description:
        "Ortho-K involves wearing specially designed rigid gas permeable contact lenses overnight. These lenses gently reshape the cornea while you sleep, providing clear vision throughout the day without the need for daytime glasses or contacts.",
      content: (
        <div>
          <ul className="space-y-4 list-disc">
            <li>
              <strong className="text-gray-500 ">How It Works:</strong>{" "}
              <Link
                href="orthokeratology-treatment/"
                className="text-brand-blue underline hover:text-brand-blue-dark"
              >
                Ortho-K lenses
              </Link>{" "}
              apply gentle pressure to flatten the central cornea, temporarily
              correcting nearsightedness. The reshaping effect typically lasts
              for 24-48 hours.
            </li>
            <li>
              <strong className="text-gray-500 ">
                Benefits in Myopia Control:
              </strong>
              Studies suggest Ortho-K can effectively slow myopia progression in
              children.
            </li>
            <li>
              <strong className="text-gray-500 ">
                Safety, Effectiveness, and Clinical Studies:
              </strong>
              Ortho-K is considered a safe and effective treatment for myopia
              control when properly fitted and cared for by an eye care
              professional. Numerous clinical trials have shown its
              effectiveness in slowing myopia progression.
            </li>
          </ul>
        </div>
      ),
    },
    {
      label: "Soft Contact Lenses",
      icon: "/api/placeholder/48/48",
      // title: "Soft Contact Lenses for Myopia Control",
      description:
        "While traditional soft contact lenses primarily correct vision, newer designs incorporate specific features to potentially slow myopia progression.",
      content: (
        <ul className="space-y-4 list-disc">
          <li className="text-xl font-bold mb-4">
            MiSight Lenses by CooperVision
          </li>
          <ul className="space-y-4 list-disc pl-4">
            <li>
              <strong className="text-gray-500 ">Technology :</strong> MiSight
              lenses utilize a concentric zone design with alternating clear and
              concentric rings. This design is thought to manage peripheral
              defocus, potentially impacting myopia progression.
            </li>
            <li>
              <strong className="text-gray-500 ">
                Benefits and Effectiveness:
              </strong>
              Studies have shown MiSight lenses to be effective in slowing
              myopia progression in children, with an average reduction of
              around 59%.
            </li>
            <li>
              <strong className="text-gray-500 ">Clinical Studies:</strong>A
              3-year clinical trial demonstrated a significant decrease in
              myopia progression in children wearing MiSight lenses compared to{" "}
              <Link href={"/prescription-lenses"} className="text-brand-blue">
                single vision lenses{" "}
              </Link>
              [Source:{" "}
              <Link
                href={
                  "https://www.myopiaprofile.com/articles/five-things-we-know-about-misight"
                }
                className="text-brand-blue"
              >
                The MiSight 1 day clinical trial
              </Link>
              ]
            </li>
          </ul>
        </ul>
      ),
    },
    {
      label: "Atropine Therapy",
      icon: "/api/placeholder/48/48",
      // title: "Atropine Therapy",
      description:
        "Atropine eye drops have been used for many years to dilate the pupil during eye exams. Recent research suggests that low-dose atropine drops can be a safe and effective method for myopia control.",
      content: (
        <div>
          <ul className="space-y-4 list-disc  pl-4">
            <li>
              <strong className="text-neutral-500 ">How It Works:</strong>
              Atropine works by relaxing the focusing muscle within the eye,
              which may influence the eye's growth pattern and potentially slow
              myopia progression.
            </li>
            <li>
              <strong className="text-neutral-500 ">
                Concentration Matters:
              </strong>
              Higher concentrations of atropine can cause significant side
              effects like light sensitivity. However, low-dose atropine (0.01%
              – 0.05%) has been shown to be effective with minimal side effects.
            </li>
            <li>
              <strong className="text-neutral-500 ">
                Clinical Evidence for 0.05% Atropine:
              </strong>
              Extensive research supports the use of 0.05% atropine for myopia
              control. Studies have shown significant reductions in myopia
              progression, ranging from 50% to 70% [Source:{" "}
              <Link
                href={
                  "https://www.aoa.org/news/clinical-eye-care/diseases-and-conditions/atropine-in-myopia-control?sso=y"
                }
                className="text-brand-blue"
              >
                American Optometric Association
              </Link>
              ].
            </li>
          </ul>

          <p className="mb-4 text-neutral-500 mt-6">
            <span className="text-lg font-semibold mb-3 text-neutral-500">
              Benefits of Low-dose Atropine :{" "}
            </span>
            Low-dose atropine is a safe and effective option for myopia control,
            with minimal side effects at the recommended concentration.
          </p>

          <p className=" text-neutral-500 mt-6">
            It's important to note that choosing the most suitable treatment
            method depends on your child's individual needs and preferences.
            Consulting with an eye care professional experienced in myopia
            control is crucial to determine the best course of action for your
            child's vision.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full py-8 md:py-16 bg-[#F9F9F9]">
      <div className="flex flex-col justify-center items-center px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-combination-200 mb-3 text-center">
          Myopia Control Treatment Methods
        </h3>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-base font-normal text-center max-w-6xl">
          Beyond preventive measures, there are several treatment methods
          available to help control myopia progression in children. Here's a
          closer look at some of the most common options:
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-8 md:mt-12 px-4">
        {/* Mobile Accordion Layout */}
        <div className="md:hidden">
          {treatments.map((treatment, index) => {
            const isActive = selected === index;
            return (
              <div key={treatment.label} className="mb-4">
                <button
                  onClick={() => setSelected(isActive ? -1 : index)}
                  className={`w-full p-4 rounded-lg text-center cursor-pointer transition-all duration-200 flex items-center justify-center mb-1 ${
                    isActive
                      ? "bg-combination-100 text-white shadow-md"
                      : "bg-gray-50 text-slate-800 hover:bg-gray-100"
                  }`}
                >
                  <img
                    src={treatment.icon}
                    alt={treatment.label}
                    className={`h-8 w-auto mr-3 ${
                      isActive ? "filter brightness-0 invert" : ""
                    }`}
                  />
                  <span className="font-semibold text-sm">
                    {treatment.label}
                  </span>
                  <svg
                    className={`ml-auto w-5 h-5 transition-transform ${
                      isActive ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isActive && (
                  <div className="bg-gray-50 rounded-lg px-4 py-6 mb-4">
                    <h2 className="text-xl font-bold text-blue-600 mb-3">
                      {treatment.title}
                    </h2>
                    <p className="text-neutral-600 text-sm mb-6">
                      {treatment.description}
                    </p>
                    {treatment.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:block bg-white">
          <div className="flex flex-wrap justify-around gap-4 mb-10 py-6 px-4">
            {treatments.map((treatment, index) => {
              const isActive = selected === index;
              return (
                <button
                  key={treatment.label}
                  onClick={() => setSelected(index)}
                  className={`relative flex flex-col items-center justify-center w-48 p-4 text-center cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-combination-100 text-white shadow-md"
                      : "bg-gray-50 text-slate-800 hover:bg-gray-100"
                  }`}
                >
                  {isActive && (
                    <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-combination-100" />
                  )}
                  <img
                    src={treatment.icon}
                    alt={treatment.label}
                    className={`mx-auto mb-2 h-8 w-auto ${
                      isActive ? "filter brightness-0 invert" : ""
                    }`}
                  />
                  <div className="font-semibold text-sm lg:text-base">
                    {treatment.label}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Desktop Content Area */}
          <div className="relative rounded-lg p-8 min-h-[500px] shadow-sm bg-[#F9F9F9] ">
            <h2 className="text-2xl font-bold text-blue-600 mb-3">
              {treatments[selected]?.title}
            </h2>
            <p className="text-neutral-600 text-base mb-6">
              {treatments[selected]?.description}
            </p>
            {treatments[selected]?.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyopiaControl;
