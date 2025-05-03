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
  // todo : description hyper link is reamingin with mobile responsive

  return (
    <main className="pt-[110px] bg-[#F6F7F5]">
      <SubHeader text="Sunglasses" />
      <div className="w-full flex flex-col items-center justify-start my-2">
        <h3 className="text-combination-200 text-[37px] font-extrabold mt-2">
          Explore Our Sunglasses Shop in Toronto
        </h3>
        <hr className="w-20 h-[3px] bg-combination-100 mb-3" />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="w-full flex flex-col items-center justify-start my-2">
          <p className="text-neutral-500 text-base text-center">
            Discover a wide range of designer and affordable sunglasses brands
            at our premium sunglasses store in Toronto. We offer an extensive
            collection of high-quality sunglasses from leading brands, all
            available at our Beaches and Rosedale locations.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <BrandList brands={sunglassBrands} />
      </div>
      <div>
        {data.map((brandData, index) => (
          <BrandCommon key={index} data={brandData} />
        ))}
      </div>
    </main>
  );
};

export default page;
