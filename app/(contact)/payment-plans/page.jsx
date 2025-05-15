import React from "react";
import SubHeader from "../../../components/SubHeader";

import {
  affirmImage,
  beaches360Image,
  rosedale360Image,
} from "../../../constants/Images";
import Image from "next/image";
import Link from "next/link";

const InformationData = [
  {
    logoSrc: beaches360Image,
    affirmSrc: affirmImage,
    name: "360 Eyecare – Beaches",
    location: "2199 Queen St. East,",
    code: "Toronto ON, M4E 1E5",
    phone: "416-698-3937",
    email: "beaches@360eyecare.ca",
    prequalifiedText: "GET PREQUALIFIED AT BEACHES LOCATION",
    prequalifiedLink:
      "https://www.affirm.ca/apps/prequal/?public_api_key=O0A5W8JC53F6SQBZ&referring_url=https%3a%2f%2fpaybright.com&device_id=&use_promo=true&page_type=banner&locale=en_CA",
  },
  {
    logoSrc: rosedale360Image,
    affirmSrc: affirmImage,
    name: "360 Eyecare – Rosedale",
    location: "120 Bloor St. East, Unit 100B,",
    code: "Toronto ON, M4W 1B7",
    phone: "416-901-2725",
    email: "rosedale@360eyecare.ca",
    prequalifiedText: "GET PREQUALIFIED AT ROSEDALE LOCATION",
    prequalifiedLink:
      "https://www.affirm.ca/apps/prequal/?public_api_key=UZQTPQF12DC6FIUA&referring_url=https%3a%2f%2fpaybright.com&device_id=&use_promo=true&page_type=banner&locale=en_CA",
  },
];
export async function generateMetadata() {
  return {
    title: "Payment Plans | Affirm | 360 Eyecare",
    description:
      "We are now offering flexible payment plans to all of our patients and customers through Affirm. Available on both of our clinic locations.",
    openGraph: {
      title: "Payment Plans | Affirm | 360 Eyecare",
      description:
        "We are now offering flexible payment plans to all of our patients and customers through Affirm. Available on both of our clinic locations.",
      url: "https://www.360eyecare.ca/payment-plans/",
      siteName: "360 Eyecare",
      type: "website",
      images: [
        {
          url: "https://www.360eyecare.ca/wp-content/uploads/2025/01/360eyecare-payment-plans.jpg",
          width: 1200,
          height: 630,
          alt: "360 Eyecare Payment Plans",
        },
      ],
    },
    alternates: {
      canonical: "https://www.360eyecare.ca/payment-plans/",
    },
  };
}

const Page = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="Our Payment Plans" />
      <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 flex flex-col">
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          We are now offering flexible payment plans to all of our patients and
          customers through Affirm.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Whether you want to purchase your favourite pair of prescription
          eyeglasses, sunglasses or contact lenses, our easy payment plan option
          offers approval determination responses right at checkout. No more
          long wait times to get an approval. When you choose Affirm you can set
          up your account on your mobile phone in seconds, confirm your payment
          plan and then you're done.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          If you don't use mobile banking, no problem. All you need is a void
          cheque and a valid ID to process your application. Both of our 360
          Eyecare locations offer financing options. Minimum purchase required.
          For further information please call or email us and we will be happy
          to help.
        </p>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Below you can get prequalified online before your appointment date to
          help save time at checkout.
        </p>

        <hr className="w-full h-1 bg-neutral-200 mt-4 mb-8" />
        <div className="flex flex-col gap-12">
          {InformationData.map((info, index) => (
            <div
              key={index}
              className="flex md:flex-row flex-col md:justify-between justify-center"
            >
              <div className="mb-4 flex justify-center md:justify-start">
                <Image
                  src={info.logoSrc}
                  alt={`${info.name} logo`}
                  width={300}
                  height={150}
                  className="object-contain"
                />
              </div>

              <div className="flex md:flex-row flex-col md:justify-between items-center gap-8 md:gap-4">
                <div className="mb-4 md:mb-0 md:mr-20">
                  <Image
                    src={info.affirmSrc}
                    alt="Affirm logo"
                    width={110}
                    height={45}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col text-neutral-500 text-center md:text-left">
                  <p className="font-bold text-base mb-2">{info.name}</p>
                  <p className="mb-1">{info.location}</p>
                  <p className="mb-3">{info.code}</p>
                  <p className="text-combination-200 hover:text-combination-100 font-bold mb-2">
                    <span className="font-bold mr-2 text-neutral-500">
                      Phone:
                    </span>
                    <a href={`tel:${info.phone}`} className="">
                      {info.phone}
                    </a>
                  </p>
                  <p className="text-combination-200 hover:text-combination-100 font-bold mb-4">
                    <span className="font-bold mr-2 text-neutral-500">
                      Email:
                    </span>
                    <a href={`mailto:${info.email}`} className="">
                      {info.email}
                    </a>
                  </p>

                  <Link
                    href={info.prequalifiedLink}
                    className="bg-combination-100 hover:text-combination-100 hover:bg-combination-200 text-white font-bold py-3 px-8 rounded-md transition-colors duration-200 shadow-md mt-4 text-center w-full md:w-auto"
                  >
                    {info.prequalifiedText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
