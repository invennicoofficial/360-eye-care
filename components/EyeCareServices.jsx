"use client";
import { eyeCareServicesImage } from "constants/Images";
import Image from "next/image";
import React, { useState } from "react";

const EyeCareServices = ({
  eyeCareServiceData,
  choose360eyeCareData,
  choose360eyeCareTitle,
}) => {
  const [openIndex, setOpenIndex] = useState(1);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-14">
      <div className="flex md:flex-row gap-10 justify-between flex-col-reverse">
        <div className="md:w-[50%] w-full">
          <div className="flex flex-col gap-6">
            <h2 className="font-poppins font-[700] text-[28px] md:text-[32px] lg:text-[40px] text-[#28305F]">
              Our Eye Care Services
            </h2>
            <p className="font-poppins font-[400] text-[14px] md:text-[16px] lg:text-[18px] text-neutral-500">
              Explore the treatments and specialties we provide for your
              complete vision care.
            </p>

            {eyeCareServiceData.map((item, index) => {
              return (
                <div
                  className="border border-[#E1E6EB] rounded-[8px] p-[10px]"
                  key={item.id}
                >
                  <div className="flex flex-col gap-3">
                    <div
                      className="flex flex-row justify-between cursor-pointer"
                      onClick={() =>
                        setOpenIndex(item.id === openIndex ? null : item.id)
                      }
                    >
                      <div className="flex flex-row gap-3">
                        <div className="bg-combination-100 w-7 h-7 rounded-[6px] flex justify-center items-center">
                          <Image
                            src={item.icon}
                            alt="Eye Care Service"
                            width={24}
                            height={24}
                          />
                        </div>
                        <p className="text-[#28305F] font-[600] text-[18px]">
                          {item.head}
                        </p>
                      </div>

                      <div className="flex justify-center items-center border border-[#E1E6EB] rounded-[6px] w-[22px] h-[22px]">
                        <Image
                          src={`${
                            item.id === openIndex
                              ? "/location/icons/minusIcon.svg"
                              : "/location/icons/plusIcon.svg"
                          }`}
                          alt="Eye Care Service"
                          width={12}
                          height={12}
                        />
                      </div>
                    </div>

                    {item.id === openIndex && (
                      <p className="text-[16px] font-[400] tracking-wider">
                        {item.para}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:w-[50%] w-full">
          <Image
            src={eyeCareServicesImage}
            alt="Eye Care Service"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 mt-[100px]">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="font-[700] text-[36px] text-center text-[#28305F] max-w-xl">
            {choose360eyeCareTitle}
          </h2>
          <p className="font-[400] text-[16px] text-center text-neutral-500 max-w-4xl">
            Discover the key reasons why patients trust and choose our clinic
            for exceptional eye care services.
          </p>
        </div>

        <div className="flex flex-row gap-5 flex-wrap">
          {choose360eyeCareData.map((item, index) => {
            return (
              <div
                key={index}
                className="md:w-[285px] w-full md:h-[352px] h-[252px] border-[#E1E6EB] border-[1px] rounded-[8px] p-5"
              >
                <div className="flex flex-col gap-3">
                  <div className="bg-combination-100 w-[60px] h-[60px] rounded-[8px] flex justify-center items-center">
                    <Image
                      src={item.icon}
                      alt="Eye Care Service"
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="font-[600] text-[18px] text-[#28305F]">
                    {item.head}
                  </p>
                  <p className="font-[400] text-[16px]  text-neutral-500">
                    {item.para}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EyeCareServices;
