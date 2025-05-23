import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const DetailsDescription = ({
  title,
  description,
  image,
  bullets,
  url,
  noCatalog,
  reverse = false,
}) => {
  return (
    <div
      className={`max-w-7xl mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8 flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-6 md:gap-10 justify-between items-start`}
    >
      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <h3 className="text-combination-200 text-3xl md:text-4xl font-extrabold mt-2">
          {title}
        </h3>
        <hr className="w-24 h-1 bg-combination-100 mb-3" />
        {description?.map((item, index) => (
          <p
            key={index}
            className="text-neutral-500  text-base  leading-normal mb-4"
          >
            {item}
          </p>
        ))}

        {bullets?.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <FaCheck size={20} className="text-combination-100 mt-1" />
            <p className="ml-2 text-combination-200  text-base leading-relaxed">
              {item}
            </p>
          </div>
        ))}

        {url?.map((item, index) => (
          <Link
            key={index}
            href={item?.href}
            className=" px-6 mt-3 flex  items-center justify-center sm:px-8 py-2 w-max bg-combination-100 text-white font-bold rounded-full hover:bg-combination-200 transition-colors text-center"
          >
            {item?.title} {noCatalog ? "" : "Catalog"}
          </Link>
        ))}
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-row items-end">
        <div className="w-[30px] h-[180px] bg-combination-100" />
        <Image
          src={image}
          alt="Eye care professionals with patients"
          className="object-cover w-full h-auto"
          width={578}
          height={668}
        />
      </div>
    </div>
  );
};

export default DetailsDescription;
