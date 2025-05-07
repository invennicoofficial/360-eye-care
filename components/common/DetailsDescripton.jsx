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
      } gap-6 md:gap-10 justify-between`}
    >
      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <h3 className="text-combination-200 text-3xl md:text-4xl font-extrabold mt-2">
          {title}
        </h3>
        <hr className="w-24 h-1 bg-combination-100 mb-3" />
        {description?.map((item, index) => (
          <p
            key={index}
            className="text-neutral-500 tracking-wider text-base md:text-lg leading-relaxed"
          >
            {item}
          </p>
        ))}

        {bullets?.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <FaCheck size={14} color="#40bcc8" />
            <p className="text-combination-200 tracking-wider text-sm leading-relaxed">
              {item}
            </p>
          </div>
        ))}

        {url?.map((item, index) => (
          <Link
            key={index}
            href={item?.href}
            className="inline-block px-6 mt-3 sm:px-8 py-2 bg-combination-100 text-white font-bold rounded-full hover:bg-combination-200 transition-colors w-full sm:w-auto text-center"
          >
            {item?.title} {noCatalog ? "" : "Catalog"}
          </Link>
        ))}
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
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
