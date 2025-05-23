import SubHeader from "../../../components/SubHeader";
import BrandList from "../../../components/common/BranhdList";
import BrandCommon from "../../../components/common/BrandCommon";
import { data } from "./data";

const page = () => {
  const sunglassBrands = [
    { name: "LaFont" },
    { name: "Tom Ford" },
    { name: "Maui Jim" },
    { name: "Oakley" },
    { name: "Ray-Ban" },
    { name: "Persol" },
    { name: "Kate Spade" },
    { name: "Michael Kors" },
    { name: "Ray-Ban Kids" },
    { name: "Versace" },
    { name: "Prada" },
    { name: "Burberry" },
    { name: "Rudy Project" },
  ];

  return (
    <main className="pt-[80px] md:pt-[110px] bg-[#F6F7F5]">
      <SubHeader text="Sunglasses" />
      <div className="w-full flex flex-col items-center justify-start my-2 px-4 md:px-0 pt-14">
        <h3 className="text-combination-200 text-2xl md:text-3xl lg:text-[37px] font-extrabold font-poppins mt-2 mb-4 text-center">
          Explore Our Sunglasses Shop in Toronto
        </h3>
        <hr className="w-16 md:w-20 h-[3px] bg-combination-100 mb-3" />
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center justify-start my-2">
          <p className="text-neutral-500 text-sm md:text-base text-center">
            Discover a wide range of designer and affordable sunglasses brands
            at our premium sunglasses store in Toronto. We offer an extensive
            collection of high-quality sunglasses from leading brands, all
            available at our Beaches and Rosedale locations.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <BrandList brands={sunglassBrands} />
      </div>
      <div className="px-4 md:px-6 lg:px-8">
        {data.map((brandData, index) => (
          <BrandCommon key={index} data={brandData} />
        ))}
      </div>
    </main>
  );
};

export default page;
