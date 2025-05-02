import React from "react";
import SubHeader from "../../../components/SubHeader";
import { EyeEmergencyImage } from "../../../constants/Images";
import Image from "next/image";
import CommonEmergency from "../../../components/CommonEmergency";
// Import the new component

const AdditionalEyeEmergencies = () => {
  return (
    <div className="max-w-6xl mx-auto my-8 sm:my-16 px-4 sm:px-0">
      <p className="text-neutral-500 text-base mb-2">
        When it comes to your vision, emergencies can't wait. Eye emergencies
        are critical situations that require immediate medical attention to
        prevent potential vision loss or serious complications. Recognizing the
        signs of an eye emergency can make all the difference in preserving your
        sight and ensuring the best possible outcome.
      </p>
      <p className="text-neutral-500 text-base mb-2">
        Swift action is crucial because certain conditions, such as retinal
        detachment, sudden vision loss, or chemical burns, can escalate rapidly.
        Ignoring these symptoms or delaying treatment can lead to irreversible
        damage. You increase your chances of effective treatment and recovery by
        seeking prompt care from an eye care professional.
      </p>
      <p className="text-neutral-500 text-base mb-2">
        If you experience any sudden changes in vision, severe eye pain,
        redness, or injury to the eye, don't hesitate. Contact an eye care
        provider immediately to receive the necessary attention and care. Your
        eyes are invaluable, and timely intervention is key to maintaining your
        vision and overall eye health.
      </p>

      <div className="flex flex-col gap-3 mt-8">
        <h2 className="text-combination-200  text-[37px] font-[900] mb-2">
          Common Eye Emergencies
        </h2>
        <hr className="w-20 h-1 bg-combination-100 mb-2" />
        <p className="text-combination-200 text-[30px] font-[900] mb-2">
          Chemical Exposure
        </p>
        <p className="text-neutral-500 text-base mb-2">
          Many people believe that chemical exposure only impacts the skin and
          lungs. However, even mild exposure to chemicals in household cleaning
          products can harm your vision.
        </p>
        <p className="text-neutral-500 text-base mb-2">
          For instance, oven and drain cleaners often contain sodium hydroxide,
          while air fresheners and leather cleaners may have formaldehyde,
          which, in large quantities, has been associated with certain cancers.
          Contact with these chemicals can lead to eye irritation, causing
          itching, burning, redness, or soreness.
        </p>

        <p className="text-neutral-500 text-base mb-2 font-bold">Symptoms:</p>

        <ul className="space-y-2 list-disc pl-4 ml-4">
          {[
            "Burning sensation in the eye",
            "Redness and irritation",
            "Excessive tearing",
            "Blurred vision",
          ].map((item, i) => (
            <li key={i} className="text-neutral-500 text-base mb-2">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-neutral-500 text-base mb-2 font-bold">
          Immediate Actions to Take:
        </p>

        <ul className="space-y-2 list-disc pl-4 ml-4">
          {[
            "Rinse the eye immediately with copious amounts of water or saline for at least 15-20 minutes.",
            "Avoid rubbing the eye.",
            "Seek emergency medical attention promptly.",
          ].map((item, i) => (
            <li key={i} className="text-neutral-500 text-base mb-2">
              {item}
            </li>
          ))}
        </ul>

        <p className="text-combination-200 text-[30px] font-[900] mb-2">
          Foreign Objects
        </p>
        <p className="text-neutral-500 text-base mb-2">
          Getting something in your eye can be extremely painful. Even a small
          eyelash can cause significant discomfort, leading to watering,
          itching, burning, or stinging sensations.
        </p>
        <p className="text-neutral-500 text-base mb-2">
          If a sharp object, such as a tiny glass shard or pebble, gets in your
          eye, it can scratch the cornea, resulting in a corneal abrasion.
        </p>
        <p>
          Severe abrasions can lead to infections or corneal ulcers. If you
          can't remove the foreign object from your eye on your own, you should
          contact your eye doctor immediately.
        </p>

        <p className="text-neutral-500 text-base mb-2 font-bold">Symptoms:</p>

        <ul className="space-y-2 list-disc pl-4 ml-4">
          {[
            "Feeling of something in the eye",
            "Redness and irritation",
            "Excessive tearing",
            "Blurred vision",
          ].map((item, i) => (
            <li key={i} className="text-neutral-500 text-base mb-2">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-neutral-500 text-base mb-2 font-bold">
          Immediate Actions to Take:
        </p>

        <ul className="space-y-2 list-disc pl-4 ml-4">
          {[
            "Avoid rubbing the eye.",
            "Try to flush the object out with clean water or saline.",
            "If the object does not come out or if there is severe pain, seek medical attention immediately.",
          ].map((item, i) => (
            <li key={i} className="text-neutral-500 text-base mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        {/* Sudden Vision Loss Section */}
        <h2 className="text-combination-200 text-[30px] font-[900] mb-2">
          Sudden Vision Loss
        </h2>
        <p className="text-neutral-500 text-base mb-2">
          Sudden vision loss can be a frightening and serious condition. It can
          occur in one or both eyes and may be partial or complete. Causes range
          from relatively minor issues to medical emergencies.
        </p>
        <p className="text-neutral-500 text-base mb-2">
          If you experience sudden vision loss, seek immediate medical attention
          to determine the cause and receive appropriate treatment. Early
          intervention can be critical in preserving your vision and overall eye
          health.
        </p>

        <p className="text-neutral-500 text-base mb-2 font-bold">Symptoms:</p>
        <ul className="space-y-2 list-disc pl-4 ml-4">
          {[
            "Complete or partial loss of vision in one or both eyes",
            "Blurred or distorted vision",
          ].map((item, i) => (
            <li key={i} className="text-neutral-500 text-base mb-2">
              {item}
            </li>
          ))}
        </ul>

        <p className="text-neutral-500 text-base mb-2 font-bold">
          Possible Causes:
        </p>
        <ul className="space-y-2 list-disc pl-4 ml-4">
          {[
            "Retinal detachment",
            "Stroke",
            "Optic neuritis",
            "Severe eye infections",
          ].map((item, i) => (
            <li key={i} className="text-neutral-500 text-base mb-2">
              {item}
            </li>
          ))}
        </ul>

        <p className="text-neutral-500 text-base mb-2 font-bold">
          Immediate Actions to Take:
        </p>
        <ul className="space-y-2 list-disc pl-4 ml-4">
          <li className="text-neutral-500 text-base mb-2">
            Seek emergency medical care immediately to determine the cause and
            initiate appropriate treatment.
          </li>
        </ul>

        {/* Eye Trauma Section */}
        <h2 className="text-combination-200 text-[30px] font-[900] mb-2 mt-6">
          Eye Trauma
        </h2>
        <p className="text-neutral-500 text-base mb-2">
          Eye trauma refers to any injury to the eye or its surrounding
          structures. These injuries can range from minor irritations to severe
          damage that can affect vision and overall eye health.
        </p>
        <p className="text-neutral-500 text-base mb-2">
          Immediate first aid and prompt medical treatment are essential for eye
          trauma to minimize damage and preserve vision. If you experience an
          eye injury, avoid rubbing the eye, cover it with a clean cloth, and
          seek professional medical assistance right away.
        </p>

        <p className="text-neutral-500 text-base mb-2 font-bold">
          Types of Trauma:
        </p>
        <ul className="space-y-2 list-disc pl-4 ml-4">
          {[
            "Blunt Force: Caused by a blow to the eye or head.",
            "Penetration: Caused by a sharp object piercing the eye.",
          ].map((item, i) => (
            <li key={i} className="text-neutral-500 text-base mb-2">
              {item}
            </li>
          ))}
        </ul>

        <p className="text-neutral-500 text-base mb-2 font-bold">Symptoms:</p>
        <ul className="space-y-2 list-disc pl-4 ml-4">
          {[
            "Pain and swelling around the eye",
            "Bruising or bleeding",
            "Vision changes or loss",
            "Double vision",
          ].map((item, i) => (
            <li key={i} className="text-neutral-500 text-base mb-2">
              {item}
            </li>
          ))}
        </ul>

        <p className="text-neutral-500 text-base mb-2 font-bold">
          Immediate Actions to Take:
        </p>
        <ul className="space-y-2 list-disc pl-4 ml-4">
          {[
            "For blunt force trauma, apply a cold compress to reduce swelling and pain, but do not apply pressure.",
            "For penetration injuries, do not remove the object. Stabilize it and seek emergency medical care immediately.",
          ].map((item, i) => (
            <li key={i} className="text-neutral-500 text-base mb-2">
              {item}
            </li>
          ))}
        </ul>

        {/* Acute Glaucoma Section */}
        <h2 className="text-combination-200 text-[30px] font-[900] mb-2 mt-6">
          Acute Glaucoma
        </h2>
        <p className="text-neutral-500 text-base mb-2">
          Acute glaucoma, also known as acute angle-closure glaucoma, is a
          medical emergency characterized by a sudden increase in intraocular
          pressure (IOP) due to the rapid closure of the drainage angle of the
          eye. This blockage prevents the aqueous humor from draining properly,
          leading to a swift rise in eye pressure.
        </p>
        <p className="text-neutral-500 text-base mb-2">
          Prompt treatment is crucial to prevent permanent vision loss and optic
          nerve damage. If you or someone you know experiences the symptoms of
          acute glaucoma, go to the nearest emergency room or contact an eye
          care professional immediately.
        </p>

        <p className="text-neutral-500 text-base mb-2 font-bold">Symptoms:</p>
        <ul className="space-y-2 list-disc pl-4 ml-4">
          {[
            "Severe eye pain",
            "Sudden blurred vision",
            "Halos around lights",
            "Nausea and vomiting",
            "Redness of the eye",
          ].map((item, i) => (
            <li key={i} className="text-neutral-500 text-base mb-2">
              {item}
            </li>
          ))}
        </ul>

        <p className="text-neutral-500 text-base mb-2 font-bold">
          Importance of Timely Treatment:
        </p>
        <ul className="space-y-2 list-disc pl-4 ml-4">
          <li className="text-neutral-500 text-base mb-2">
            Acute glaucoma is a medical emergency. Without prompt treatment, it
            can lead to permanent vision loss. Immediate medical intervention is
            crucial to reduce intraocular pressure and prevent damage to the
            optic nerve.
          </li>
        </ul>

        {/* Retinal Detachment Section */}
        <h2 className="text-combination-200 text-[30px] font-[900] mb-2 mt-6">
          Retinal Detachment
        </h2>
        <p className="text-neutral-500 text-base mb-2">
          Retinal detachment is a serious eye condition where the retina, the
          thin layer of tissue at the back of the eye responsible for sensing
          light and sending visual signals to the brain, separates from its
          underlying supportive tissue. This separation prevents the retina from
          functioning properly, leading to vision loss if not treated promptly.
        </p>

        <p className="text-neutral-500 text-base mb-2 font-bold">Symptoms:</p>
        <ul className="space-y-2 list-disc pl-4 ml-4">
          {[
            "Sudden appearance of floaters",
            "Flashes of light in one or both eyes",
            "A shadow or curtain over part of your visual field",
          ].map((item, i) => (
            <li key={i} className="text-neutral-500 text-base mb-2">
              {item}
            </li>
          ))}
        </ul>

        <p className="text-neutral-500 text-base mb-2 font-bold">
          Importance of Timely Treatment:
        </p>
        <ul className="space-y-2 list-disc pl-4 ml-4">
          <li className="text-neutral-500 text-base mb-2">
            Retinal detachment requires urgent medical attention. If treated
            promptly, there is a higher chance of preserving vision. Delaying
            treatment can result in permanent vision loss.
          </li>
        </ul>

        {/* Severe Eye Pain Section */}
        <h2 className="text-combination-200 text-[30px] font-[900] mb-2 mt-6">
          Severe Eye Pain
        </h2>
        <p className="text-neutral-500 text-base mb-2">
          Severe eye pain is a distressing symptom that can signal a range of
          serious eye conditions. It requires immediate medical attention to
          diagnose the underlying cause and prevent potential vision loss. Here
          are some symptoms, possible causes, and the actions to take if you
          experience severe eye pain:
        </p>

        <p className="text-neutral-500 text-base mb-2 font-bold">Symptoms:</p>
        <ul className="space-y-2 list-disc pl-4 ml-4">
          {[
            "Intense pain in or around the eye",
            "Redness and irritation",
            "Blurred vision",
            "Sensitivity to light",
          ].map((item, i) => (
            <li key={i} className="text-neutral-500 text-base mb-2">
              {item}
            </li>
          ))}
        </ul>

        <p className="text-neutral-500 text-base mb-2 font-bold">
          Possible Causes:
        </p>
        <ul className="space-y-2 list-disc pl-4 ml-4">
          {[
            "Acute glaucoma",
            "Corneal abrasions or ulcers",
            "Severe eye infections",
            "Uveitis (inflammation of the middle layer of the eye)",
          ].map((item, i) => (
            <li key={i} className="text-neutral-500 text-base mb-2">
              {item}
            </li>
          ))}
        </ul>

        <p className="text-neutral-500 text-base mb-2 font-bold">
          Immediate Actions to Take:
        </p>
        <ul className="space-y-2 list-disc pl-4 ml-4">
          <li className="text-neutral-500 text-base mb-2">
            Seek immediate medical attention to diagnose and treat the
            underlying cause of the severe eye pain.
          </li>
        </ul>

        {/* Flashes of Lights and Floaters Section */}
        <h2 className="text-combination-200 text-[30px] font-[900] mb-2 mt-6">
          Flashes of Lights and Floaters
        </h2>
        <p className="text-neutral-500 text-base mb-2">
          Experiencing flashes of light and floaters in your vision can be
          alarming and may indicate an underlying eye condition that needs
          attention. Here's a closer look at what these symptoms mean and what
          actions to take:
        </p>

        <p className="text-neutral-500 text-base mb-2 font-bold">Symptoms:</p>
        <ul className="space-y-2 list-disc pl-4 ml-4">
          {[
            "Seeing sudden flashes of light, especially in peripheral vision",
            "New or increased number of floaters (small dark shapes or specks that drift across your vision)",
          ].map((item, i) => (
            <li key={i} className="text-neutral-500 text-base mb-2">
              {item}
            </li>
          ))}
        </ul>

        <p className="text-neutral-500 text-base mb-2 font-bold">
          Possible Causes:
        </p>
        <ul className="space-y-2 list-disc pl-4 ml-4">
          {[
            "Retinal detachment or tear",
            "Posterior vitreous detachment (separation of the gel-like substance in the eye from the retina)",
            "Migraines with visual aura",
          ].map((item, i) => (
            <li key={i} className="text-neutral-500 text-base mb-2">
              {item}
            </li>
          ))}
        </ul>

        <p className="text-neutral-500 text-base mb-2 font-bold">
          Immediate Actions to Take:
        </p>
        <ul className="space-y-2 list-disc pl-4 ml-4">
          <li className="text-neutral-500 text-base mb-2">
            Any sudden onset of flashes or floaters should be evaluated by an
            eye care professional promptly to rule out serious conditions like
            retinal detachment.
          </li>
        </ul>

        <p className="text-neutral-500 text-base mt-6">
          Our Emergency Eye Clinic is equipped to handle various eye
          emergencies, from foreign object removal to sudden vision loss. If
          you're experiencing an eye emergency, don't hesitate to contact us or
          visit our emergency eye clinic near you for immediate care. Our
          experienced team is dedicated to providing prompt and expert care to
          protect your vision and eye health.
        </p>
      </div>
    </div>
  );
};
const page = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="Eye Emergencies" />
      <div className="max-w-6xl mx-auto my-8 sm:my-16 px-4 sm:px-0 flex flex-col sm:flex-row justify-between items-start">
        <div className="flex flex-col gap-4 w-full sm:w-[585px] sm:mr-10 mb-8 sm:mb-0">
          <h2 className="text-combination-200 text-3xl sm:text-[37px] font-[900]">
            Emergency Eye Care When Every Second Counts
          </h2>
          <hr className="w-20 h-1 bg-combination-100 mb-2" />
          <p className="text-neutral-500 text-base mb-2">
            Most people believe that eye injuries are common in the workplace,
            especially in manufacturing and construction industries. Contrary to
            this, nearly half (44.8%) of all eye-related injuries (eye
            emergencies) occurred at home. This is according to findings
            published by the American Society of Ocular Trauma (ASOT).
          </p>
          <p className="text-neutral-500 text-base mb-2">
            A further 40% of reported eye injuries were due to sports-related
            activity. This disproves the myth that most eye injuries occur in
            the workplace. What's even more shocking is the fact that about 78%
            of the people who were injured were not wearing any protective
            eyewear.
          </p>
        </div>
        <div className="w-full sm:w-[585px] flex flex-row items-end">
          <div className="hidden sm:block w-[30px] h-[280px] bg-gray-100" />
          <Image
            src={EyeEmergencyImage}
            alt="Eye Emergency"
            width={585}
            height={536}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Add the new component here, right above CommonEmergency */}
      <AdditionalEyeEmergencies />

      <CommonEmergency />
    </main>
  );
};

export default page;
