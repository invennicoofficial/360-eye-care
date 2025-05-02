"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MyopiaControl = () => {
  const [selected, setSelected] = useState(0);

  const treatments = [
    {
      label: "Spectacle therapy ",
      icon: "/api/placeholder/48/48", // Placeholder for actual icon
      title: "Spectacle Therapy",
      description:
        "Spectacle therapy with specialized lenses can play a role in myopia control. These lenses are designed to manipulate how light enters the eye, potentially slowing down the elongation of the eyeball.",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-4">
            MiyoSmart Lenses by Hoya
          </h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/5">
              <div className="bg-neutral-100 rounded-lg p-4 h-full flex items-center justify-center">
                <img
                  src="/api/placeholder/300/300"
                  alt="MiyoSmart Lens"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-3/5">
              <ul className="space-y-4">
                <li>
                  <strong className="text-brand-blue block">Technology:</strong>
                  <p>
                    MiyoSmart lenses incorporate Defocus Incorporated Multiple
                    Segments (D.I.M.S.) technology. These tiny segments within
                    the lens create a central clear zone for sharp vision and a
                    peripheral zone with a slight blur. This peripheral blur is
                    thought to signal the eye to reduce its axial elongation.
                  </p>
                </li>
                <li>
                  <strong className="text-brand-blue block">
                    Benefits and Effectiveness:
                  </strong>
                  <p>
                    Studies have shown promising results with MiyoSmart lenses
                    in slowing myopia progression by an average of 60%.
                  </p>
                </li>
                <li>
                  <strong className="text-brand-blue block">
                    Clinical Studies:
                  </strong>
                  <p>
                    A 2-year randomized clinical trial involving 183 Chinese
                    children aged 8-13 with myopia between -1.00D and -5.00D
                    found that the MIYOSMART lens provided a 59% reduction in
                    myopia progression measured by cycloplegic spherical
                    equivalent refraction and a 60% reduction in axial length
                    elongation compared to single vision lenses.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">
              MyoCare Lenses by Zeiss
            </h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-3/5 order-2 md:order-1">
                <ul className="space-y-4">
                  <li>
                    <strong className="text-brand-blue block">
                      Technology:
                    </strong>
                    <p>
                      MyoCare lenses utilize DualZone technology, similar to
                      MiyoSmart lenses, they have a central clear zone and a
                      peripheral zone with a slight defocus.
                    </p>
                  </li>
                  <li>
                    <strong className="text-brand-blue block">
                      Benefits and Effectiveness:
                    </strong>
                    <p>
                      Research suggests MyoCare lenses can be effective in
                      slowing myopia progression, with studies showing an
                      average reduction of around 59%.
                    </p>
                  </li>
                  <li>
                    <strong className="text-brand-blue block">
                      Clinical Studies:
                    </strong>
                    <p>
                      In a 12-month multi-center trial in China involving 240
                      children aged 6-13 with myopia between -0.75D and -5.00D,
                      ZEISS MyoCare lenses slowed myopia progression by an
                      average of 0.31D and axial elongation by 0.13 mm compared
                      to single vision lenses, a relative efficacy of 48% and
                      41% respectively.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="md:w-2/5 order-1 md:order-2">
                <div className="bg-neutral-100 rounded-lg p-4 h-full flex items-center justify-center">
                  <img
                    src="/api/placeholder/300/300"
                    alt="MyoCare Lens"
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
      icon: "/api/placeholder/48/48", // Placeholder for actual icon
      title: "Orthokeratology (Ortho-K)",
      description:
        "Ortho-K involves wearing specially designed rigid gas permeable contact lenses overnight. These lenses gently reshape the cornea while you sleep, providing clear vision throughout the day without the need for daytime glasses or contacts.",
      content: (
        <div>
          <ul className="space-y-4">
            <li>
              <strong className="text-brand-blue block">How It Works:</strong>
              <p>
                Ortho-K lenses apply gentle pressure to flatten the central
                cornea, temporarily correcting nearsightedness. The reshaping
                effect typically lasts for 24-48 hours.
              </p>
            </li>
            <li>
              <strong className="text-brand-blue block">
                Benefits in Myopia Control:
              </strong>
              <p>
                Studies suggest Ortho-K can effectively slow myopia progression
                in children.
              </p>
            </li>
            <li>
              <strong className="text-brand-blue block">
                Safety, Effectiveness, and Clinical Studies:
              </strong>
              <p>
                Ortho-K is considered a safe and effective treatment for myopia
                control when properly fitted and cared for by an eye care
                professional. Numerous clinical trials have shown its
                effectiveness in slowing myopia progression.
              </p>
            </li>
          </ul>

          <div className="mt-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-brand-blue">
                Key Advantages of Ortho-K
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-teal-500 mr-2 mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Freedom from daytime glasses or contacts</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-teal-500 mr-2 mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Non-surgical alternative to LASIK</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-teal-500 mr-2 mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>
                    Reversible — effects disappear if lens wear is discontinued
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-teal-500 mr-2 mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>
                    Particularly beneficial for active children and athletes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Soft Contact Lenses",
      icon: "/api/placeholder/48/48", // Placeholder for actual icon
      title: "Soft Contact Lenses for Myopia Control",
      description:
        "While traditional soft contact lenses primarily correct vision, newer designs incorporate specific features to potentially slow myopia progression.",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-4">
            MiSight Lenses by CooperVision
          </h3>
          <div className="bg-neutral-50 rounded-lg p-6">
            <ul className="space-y-4">
              <li>
                <strong className="text-brand-blue block">Technology:</strong>
                <p>
                  MiSight lenses utilize a concentric zone design with
                  alternating clear and concentric rings. This design is thought
                  to manage peripheral defocus, potentially impacting myopia
                  progression.
                </p>
              </li>
              <li>
                <strong className="text-brand-blue block">
                  Benefits and Effectiveness:
                </strong>
                <p>
                  Studies have shown MiSight lenses to be effective in slowing
                  myopia progression in children, with an average reduction of
                  around 59%.
                </p>
              </li>
              <li>
                <strong className="text-brand-blue block">
                  Clinical Studies:
                </strong>
                <p>
                  A 3-year clinical trial demonstrated a significant decrease in
                  myopia progression in children wearing MiSight lenses compared
                  to single vision lenses.
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">
              Other Multifocal Contact Lenses
            </h3>
            <div className="bg-neutral-50 rounded-lg p-6">
              <p className="mb-4">
                Several studies have investigated the use of commercially
                available multifocal soft contact lenses for myopia control:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-teal-500 mr-2 mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>
                    Center-distance multifocal designs have shown promising
                    results
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-teal-500 mr-2 mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>
                    Effectiveness ranges from 30% to 50% reduction in myopia
                    progression
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-teal-500 mr-2 mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>
                    Daily disposable options provide convenience and reduce
                    infection risk
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Atropine Therapy",
      icon: "/api/placeholder/48/48", // Placeholder for actual icon
      title: "Atropine Therapy",
      description:
        "Atropine eye drops have been used for many years to dilate the pupil during eye exams. Recent research suggests that low-dose atropine drops can be a safe and effective method for myopia control.",
      content: (
        <div>
          <ul className="space-y-4">
            <li>
              <strong className="text-brand-blue block">How It Works:</strong>
              <p>
                Atropine works by relaxing the focusing muscle within the eye,
                which may influence the eye's growth pattern and potentially
                slow myopia progression.
              </p>
            </li>
            <li>
              <strong className="text-brand-blue block">
                Concentration Matters:
              </strong>
              <p>
                Higher concentrations of atropine can cause significant side
                effects like light sensitivity. However, low-dose atropine
                (0.01% – 0.05%) has been shown to be effective with minimal side
                effects.
              </p>
            </li>
            <li>
              <strong className="text-brand-blue block">
                Clinical Evidence for 0.05% Atropine:
              </strong>
              <p>
                Extensive research supports the use of 0.05% atropine for myopia
                control. Studies have shown significant reductions in myopia
                progression, ranging from 50% to 70%.
              </p>
            </li>
          </ul>

          <div className="mt-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-brand-blue">
                Benefits of Low-dose Atropine
              </h3>
              <p className="mb-4">
                Low-dose atropine is a safe and effective option for myopia
                control, with minimal side effects at the recommended
                concentration.
              </p>

              <h4 className="font-medium text-brand-blue mt-4 mb-2">
                Dosing Guidelines
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-teal-500 mr-2 mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>
                    Typically administered as one drop in each eye at bedtime
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-teal-500 mr-2 mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>
                    Regular follow-up appointments to monitor effectiveness and
                    eye health
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-teal-500 mr-2 mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Treatment duration typically spans several years</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-5 mt-6">
            <p className="text-center italic">
              It's important to note that choosing the most suitable treatment
              method depends on your child's individual needs and preferences.
              Consulting with an eye care professional experienced in myopia
              control is crucial to determine the best course of action for your
              child's vision.
            </p>
          </div>
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
          available to help control myopia progression in children. Here’s a
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
                      ? "bg-teal-500 text-white shadow-md"
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
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-gray-50 rounded-lg px-4 py-6 mb-4">
                        <h2 className="text-xl font-bold text-brand-blue mb-3">
                          {treatment.title}
                        </h2>
                        <p className="text-neutral-600 text-sm mb-6">
                          {treatment.description}
                        </p>
                        {treatment.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:block bg-[#F9F9F9] ">
          <div className="flex flex-wrap justify-around gap-4 mb-10">
            {treatments.map((treatment, index) => {
              const isActive = selected === index;
              return (
                <button
                  key={treatment.label}
                  onClick={() => setSelected(index)}
                  className={`relative flex flex-col items-center justify-center w-48 p-4 text-center cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-teal-500 text-white shadow-md"
                      : "bg-gray-50 text-slate-800 hover:bg-gray-100"
                  }`}
                >
                  {isActive && (
                    <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-teal-500" />
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
          <div className="relative   rounded-lg p-8 min-h-[500px] shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <h2 className="text-2xl font-bold text-brand-blue mb-3">
                  {treatments[selected]?.title}
                </h2>
                <p className="text-neutral-600 text-base mb-6">
                  {treatments[selected]?.description}
                </p>
                {treatments[selected]?.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyopiaControl;
