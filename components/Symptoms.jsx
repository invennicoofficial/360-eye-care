import React from "react";
import { symptomsDryImage } from "../constants/Images";
import Image from "next/image";

const Symptoms = () => {
  return (
    <div className="max-w-6xl mx-auto my-16">
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold  text-combination-200 mb-4">
          Symptoms of Dry Eye
        </h2>
        <div className="w-16 h-0.5 bg-combination-100 mt-2" />
        <p className="text-neutral-500  mt-4">
          Dry eye might not scream “emergency,” but its symptoms can be a real
          drag on your day-to-day comfort and vision. Here’s what to watch out
          for:
        </p>
        <div className="flex justify-center items-center mt-20">
          <Image
            src={symptomsDryImage}
            alt="Dry eye symptoms"
            width={847}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
