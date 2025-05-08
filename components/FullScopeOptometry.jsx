import Image from "next/image";

import { OptometryImage } from "../constants/Images";
import { OptometryServices } from "../constants/Constants";
import Link from "next/link";

// ServiceItem component for individual service display
const ServiceItem = ({
  imageLink,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="flex flex-row gap-5 mb-8">
      <div className="w-[70px] h-[70px] bg-combination-100 flex justify-center items-center shrink-0 ">
        <Image src={imageLink} alt={`${title} icon`} width={42} height={42} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-brand-blue text-xl font-semibold font-poppins">
          {title}
        </h3>
        <p className="text-neutral-500 mb-3 font-poppins">{description}</p>
        <div className="flex flex-row gap-2">
          <Link
            href={buttonLink}
            className="inline-flex items-center font-medium text-brand-blue hover:text-opacity-80 transition-colors duration-300 group"
          >
            <span className="mr-2 text-brand-blue text-[14px] font-[600]">
              {buttonText}
            </span>
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 transition-transform duration-300 ease-in-out group-hover:rotate-45"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Main component
const FullScopeOptometry = () => {
  return (
    <div className="mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start gap-8 mb-12">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-6 mb-10">
            <h2 className="text-brand-blue text-3xl md:text-4xl font-bold leading-tight font-poppins">
              Full-Scope Optometry Services for You and Your Family
            </h2>
            <p className="text-neutral-500 text-base tracking-wider font-normal">
              We offer a wide range of services to ensure your eyes stay healthy
              and your vision remains clear.
            </p>
          </div>

          {/* Render service items from OptometryServices array */}
          {OptometryServices.map((service, index) => (
            <ServiceItem
              key={index}
              imageLink={service.imageLink}
              title={service.title}
              description={service.description}
              buttonText={service.buttonText}
              buttonLink={service.buttonLink}
            />
          ))}
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-full h-[400px] md:h-[600px]">
            <Image
              src={OptometryImage}
              alt="Eye examination equipment"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScopeOptometry;
