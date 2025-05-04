import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const DetailsDescripton = ({
  title,
  description,
  image,
  bullets,
  url,
  reverse = false,
}) => {
  return (
    <div
      className={`max-w-7xl mx-auto py-16 flex gap-10 justify-between ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col gap-2 w-[50%]">
        <h3 className="text-combination-200 text-[40px] font-extrabold mt-2">
          {title}
        </h3>
        <hr className="w-24 h-1 bg-combination-100 mb-3" />
        {description?.map((item, index) => (
          <p
            key={index}
            className="text-neutral-500 tracking-wider text-lg leading-relaxed"
          >
            {item}
          </p>
        ))}

        {bullets?.map((item, index) => (
          <div className="flex items-center gap-2">
            <FaCheck size={14} color="#40bcc8" />
            <p
              key={index}
              className="text-combination-200 tracking-wider text-sm leading-relaxed"
            >
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
            {item?.title} Catalog
          </Link>
        ))}
      </div>
      <div className={`w-[50%] ${reverse ? "ml-4" : "mr-4"}`}>
        <Image
          src={image}
          alt="Eye care professionals with patients"
          className="object-cover w-[45%]"
          width={578}
          height={668}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default DetailsDescripton;
