import Image from "next/image";

const Associate = ({ rows }) => {
  const firstRow = [
    {
      src: "/associate/associate1.webp",
      alt: "Canadian Association of Optometrists",
      width: 275,
      height: 32,
    },
    {
      src: "/associate/associate2.webp",
      alt: "Ontario Association of Optometrists",
      width: 250,
      height: 91,
    },
    {
      src: "/associate/associate3.webp",
      alt: "College of Optometrists of Ontario",
      width: 200,
      height: 80,
    },
    {
      src: "/associate/associate4.webp",
      alt: "National Board of Examiners in Optometry",
      width: 305,
      height: 126,
    },
  ];

  const orgImages = [
    {
      src: "/associate/associate5.webp",
      alt: "World Sight Day Challenge",
      width: 174,
      height: 50,
    },
    {
      src: "/associate/associate6.webp",
      alt: "Optometry Giving Sight",
      width: 174,
      height: 103,
    },
    {
      src: "/associate/associate7.webp",
      alt: "Optometry Giving Sight",
      width: 784,
      height: 165,
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-brand-blue  mb-4 text-center">
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
