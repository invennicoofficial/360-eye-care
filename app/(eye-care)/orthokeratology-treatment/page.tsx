import React from "react";
import SubHeader from "../../../components/SubHeader";
import Link from "next/link";
import FormSection from "../../../components/FormSection";
import {
  OrthoImage,
  OrthoImage2,
  OrthoImage3,
} from "../../../constants/Images";
import Image from "next/image";
import Banner2 from "../../../components/Banner2";
import LocationSelect from "../../../components/LocationSelect";
import BenefitsOrtho from "../../../components/BenefitsOrtho";

const page = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="Orthokeratology Treatment" />
      <div className="max-w-6xl mx-auto my-6 sm:my-16 px-4 sm:px-0 flex flex-col sm:flex-row justify-between items-start">
        <div className="flex flex-col gap-4 w-full sm:w-[585px] sm:mr-10 mb-6 sm:mb-0">
          <h2 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[900]">
            What is Orthokeratology (Ortho-K) treatment?
          </h2>
          <hr className="w-20 h-1 bg-combination-100 mb-2" />
          <p className="text-neutral-500 text-base mb-2">
            Orthokeratology, also known as Ortho-K or CRT (Corneal Reshaping
            Therapy) is a non-surgical procedure used to improve vision so that
            the need for glasses or daytime contact lenses is eliminated
            completely. The procedure involves the use of special therapeutic
            gas-permeable contact lenses to reshape and flatten your cornea to
            reduce refractive errors while you are asleep. You only need to put
            the lenses on at bedtime and allow it to work overnight. By the time
            you wake up, your vision will have improved.
          </p>
          <Link href="/book-eye-exam" className="md:w-[220px] w-[220px]">
            <div className="bg-combination-100 hover:text-combination-100 hover:bg-combination-200 text-white font-bold py-3 px-8 rounded-md transition-colors duration-200 shadow-md text-center sm:text-left">
              Book an eye exam
            </div>
          </Link>
        </div>
        <div className="w-full sm:w-[585px] flex flex-row items-end mt-4 sm:mt-0">
          <div className="hidden sm:block w-[30px] h-[290px] bg-gray-50" />
          <Image
            src={OrthoImage}
            alt="Eye Emergency"
            width={585}
            height={290}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-8 sm:my-16 px-4 sm:px-0">
        <h2 className="text-combination-200 text-2xl sm:text-[30px] font-[900] mb-2">
          How Orthokeratology Works?
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className="text-neutral-500 text-base mb-2">
          Ortho-K lenses are worn overnight, gently reshaping the cornea while
          the patient sleeps. The cornea is the clear front surface of the eye
          that focuses light onto the retina. By altering its shape, these
          lenses correct the way light enters the eye, thus improving vision.
          Upon waking and removing the lenses, the patient can enjoy clear
          vision throughout the day without the need for additional corrective
          eyewear.
        </p>
        <h2 className="text-combination-200 text-2xl sm:text-[30px] font-[900] mb-2">
          The Ortho-K Fitting Process
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className="text-neutral-500 text-base mb-2 font-bold">
          The fitting process for Ortho-K involves several steps:
        </p>
        <p className="text-neutral-500 text-base mb-2">
          <span className="font-bold">Comprehensive Eye Exam:</span> The eye
          doctor performs a thorough eye examination to determine the patient's
          suitability for Ortho-K. This includes measuring the corneal
          topography, which maps the surface curvature of the cornea.
        </p>
        <p className="text-neutral-500 text-base mb-2">
          <span className="font-bold">Lens Selection and Fitting:</span> Based
          on the corneal measurements, the eye doctor selects or customizes
          Ortho-K lenses to fit the patient's eyes precisely. The patient is
          then instructed on how to insert, remove, and care for the lenses.
        </p>
        <p className="text-neutral-500 text-base mb-2">
          <span className="font-bold">Initial Overnight Wear: </span>The patient
          wears the lenses overnight and returns to the clinic the following day
          for an evaluation. The eye doctor assesses the corneal reshaping and
          visual acuity, making any necessary adjustments to the lenses.
        </p>
        <p className="text-neutral-500 text-base mb-2">
          <span className="font-bold"> Follow-Up Visits: </span>Regular
          follow-up visits are essential to monitor the cornea's shape, ensure
          proper lens fit, and assess vision improvement. These visits help
          ensure the treatment is effective and safe.
        </p>

        <h2 className="text-combination-200 text-2xl sm:text-[30px] font-[900] mb-2">
          What you need to know when undergoing Ortho-K treatment?
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className="text-neutral-500 text-base mb-2">
          Before starting orthokeratology treatment, you must undergo a series
          of tests. Your optometrist will test your cornea, retina, and other
          parts of your eyes to determine if you are a candidate. They will also
          map your cornea with a tool known as a topographer. This is similar to
          a road map showing the curvature of your cornea with all the ups and
          downs. Apart from the information from the mapping of your cornea,
          your doctor also needs to know the size of your cornea, and the
          prescription needed to correct your vision. This data allows the lab
          to design and create the best fit Ortho-K lens for your eyes.
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="flex flex-col gap-2 w-full lg:w-[70%] mt-6 justify-start">
            <p className="text-neutral-500 text-base mb-2">
              You will be given the necessary instructions on how to insert your
              vision retainers. You will also be given instructions on how to
              remove and take proper care of it. It is important that your
              doctor sees you after wearing your lenses for the first night.
              This is because your fit and corrected vision has to be
              re-evaluated and monitored. Your optometrist will be mapping your
              cornea at each visit to ensure the desired effect of the lenses is
              achieved and maintained.
            </p>
            <p className="text-neutral-500 text-base mb-2">
              Your eye doctor has to monitor the health of your cornea and the
              improvement of your vision. They also have to monitor the
              effectiveness of the treatment all through the initial fitting
              period and on a regular basis afterward. You usually have to be
              seen one day, two weeks, three months, and six months post-wear.
            </p>
          </div>
          <div className="w-full lg:w-[380px] h-auto lg:h-[280px] mt-4 lg:mt-0">
            <Image
              src={OrthoImage2}
              alt="Ortho-K"
              width={380}
              height={280}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <Banner2
        title="Book Your Eye Exam"
        description="For exceptional eye care, schedule your eye exam at our Beaches and Rosedale, Toronto locations today!"
        rosedale={true}
        ctaText="Book an Eye Exam"
        ctaLink="https://360rosedale.mypatientportal.xyz/dashboard"
      />

      <div className="max-w-6xl mx-auto my-8 sm:my-16 px-4 sm:px-0">
        <h3 className="text-combination-200 text-2xl sm:text-3xl md:text-[37px] font-[900] mb-2">
          Myopia Control with Orthokeratology
        </h3>
        <hr className="w-[65px] h-[2px] bg-combination-100 mb-8" />
        <h2 className="text-combination-200 text-2xl sm:text-[30px] font-[900] mb-2">
          What is myopia and how is it managed?
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-3" />
        <p className="text-neutral-500 text-base mb-2">
          Myopia, commonly known as nearsightedness, is a refractive error of
          the eye where distance objects are blurry. This occurs when the
          eyeball is too long or the cornea (the outermost layer of the eye) is
          too curved, causing light rays to focus in front of the retina instead
          of directly on it. As a result, the image formed on the retina is out
          of focus, leading to blurry vision for distant objects.
        </p>
        <p className="text-neutral-500 text-base mb-2">
          Myopia management is a treatment program prescribed by eye doctors to
          stop or slow down the progression of myopia. A recent study predicted
          that by the year 2050 half of the world's population will be
          classified as myopic, or near-sighted. Of that portion of the
          population, 10% will develop myopia of 5.00D (diopters) or stronger.
          Childhood myopia can cause eye disorders and pathologies later in
          life, some of which are sight-threatening. With that in mind, research
          has been ongoing into ways to manage, mitigate, and minimize the
          effects of myopia, particularly in children when caught early enough.
        </p>

        <h2 className="text-combination-200 text-2xl sm:text-[30px] font-[900] mb-2">
          Assessing your child's risk for developing Myopia
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className="text-neutral-500 text-base mb-2">
          The aim of the program is to use specialized therapy to control myopia
          progression in children. The therapy involves using tools such as
          specialized glasses lenses, contact lenses, or medications (eye
          drops). As part of the treatment program, specific equipment is
          utilized to test and monitor the growth of the eye at frequent
          follow-ups.
        </p>
        <ul className="list-disc text-neutral-500 text-base ml-4">
          {[
            "Reducing myopia progression can benefit individuals by:",
            "Reducing the dependency on corrective lenses with lower prescription",
          ].map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-neutral-500 text-base mb-2">
          Reducing the risk of myopic eye disease, which is caused when the eye
          elongates in myopia. This stretching of the tissues of the eye causes
          weakness to occur in the back of the eye. Increasing the risk of
          retinal detachment and myopic macular degeneration, as well as
          increases the risk of Glaucoma and cataracts.
        </p>
        <h2 className="text-combination-200 text-2xl sm:text-[30px] font-[900] mb-2">
          What can parents expect when using Orthokeratology to manage their
          child's myopia?
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className="text-neutral-500 text-base mb-2">
          Every child's needs and adaptation tendencies are different, which are
          taken into consideration when fitted with Ortho-K lenses Toronto.
        </p>
        <p className="text-neutral-500 text-base mb-2">
          As part of the treatment plan, several follow-up visits with the
          optometrist are scheduled following the initial evaluation
          appointment. The first follow up visits are done after the first night
          wear as well as after two weeks to assess for the success and
          viability of the treatment. After the initial follow-up visits, the
          child will be seen by his optometrist every four to six months for
          regular myopia progression monitoring and treatment management. During
          those follow-ups, several tests are performed including measuring the
          axial length of the eyes to monitor for elongation. Your optometrist
          will discuss with you the results at each visit and any needed changes
          on an ongoing basis.
        </p>
      </div>

      <BenefitsOrtho />
      <div className="bg-white py-10 sm:py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start px-4 md:px-8 gap-8">
          {/* Left: Text + Form */}
          <div className="w-full lg:w-[70%]">
            <h3 className="text-combination-200 text-3xl sm:text-4xl font-bold mb-2">
              BOOK AN EYE EXAM
            </h3>
            <hr className="w-20 h-1 bg-combination-100 mb-6 sm:mb-8" />

            <FormSection css="max-w-3xl" />
          </div>

          {/* Right: Info and Image */}
          <div className="flex flex-col w-full lg:w-[40%] mt-8 lg:mt-0">
            <h3 className="text-combination-200 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
              Experience Clear Vision with Orthokeratology in Toronto
            </h3>
            <hr className="w-20 h-1 bg-combination-100 mb-3" />
            <p className="text-neutral-500 text-base mb-4">
              Transform your vision overnight without surgery. Ortho-K lenses
              correct your vision while you sleep. Fill out the form to book
              your consultation and see clearly without glasses or contacts!
            </p>
            <div className="w-full">
              <Image
                src={OrthoImage3}
                alt="Ortho-K"
                width={380}
                height={280}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
