import Image from "next/image";
import { firstRow, orgImages } from "../constants/Constants";

const Associate = ({ rows }) => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-brand-blue  mb-4 text-center font-poppins">
            We are proudly associated with
          </h2>
          <div className="h-1 w-32 bg-combination-100 mb-12"></div>

          {/* First Row - Professional Associations */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {firstRow.map((img, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="object-contain"
                  priority={index < 2}
                />
              </div>
            ))}
          </div>

          {rows === 2 && (
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {orgImages.map((img, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Second Row - Organizations */}
        </div>
      </div>
    </div>
  );
};

export default Associate;
