import Image from "next/image";
import { BeachImage, YorkVilleRosedale } from "../constants/Images";
import HappyClientBeaches from "./HappyClientBeaches";
import HappyClientYorkVilla from "./HappyClientYorkVilla";
import Link from "next/link";
const NearYou = () => {
  return (
    <div className="bg-white w-full py-8 md:py-16">
      {/* Title */}
      <div className="flex flex-col items-center justify-center mb-6 md:mb-10">
        <p className="text-brand-blue text-2xl md:text-4xl font-bold text-center mb-2 px-4">
          Find a 360 Eyecare Optometrist Near You
        </p>
        <div className="w-12 h-[3px] bg-combination-100" />
      </div>

      {/* Location Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12 px-4">
        {/* Beaches Location */}
        <div className="flex flex-col items-center w-full max-w-md lg:max-w-none mb-8 lg:mb-0">
          <div className="relative w-full h-[250px] md:h-[350px] lg:w-[600px] lg:h-[397px]">
            <Image
              src={BeachImage}
              alt="2199 Queen Street East, Toronto"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 600px"
              quality={75}
              loading="eager"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg=="
              className="rounded shadow object-cover"
            />
            <div className="absolute bottom-[-15px] md:bottom-[-20px] right-0 md:right-[-10px] bg-brand-btn text-white w-full max-w-[250px] md:w-[280px] h-[70px] md:h-[82px] font-medium text-xs md:text-base flex justify-center text-center items-center px-4 md:px-6 rounded-md shadow">
              2199 Queen Street East, Toronto
            </div>
          </div>
          <Link
            href="/toronto-beaches-optometrist"
            className="flex justify-end w-full mt-8 md:mr-20 md-0"
          >
            <button className="bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white px-4 md:px-6 py-2 md:py-3 rounded font-semibold w-[140px] md:w-[162px] h-[45px] md:h-[52px] text-sm md:text-base">
              Beaches →
            </button>
          </Link>
        </div>

        {/* Yorkville Rosedale Location */}
        <div className="flex flex-col items-center w-full max-w-md lg:max-w-none">
          <div className="relative w-full h-[250px] md:h-[350px] lg:w-[600px] lg:h-[397px]">
            <Image
              src={YorkVilleRosedale}
              alt="55 Bloor St W Suite 03, Toronto"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 600px"
              quality={75}
              loading="eager"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg=="
              className="rounded shadow object-cover"
            />
            <div className="absolute bottom-[-15px] md:bottom-[-20px] right-0 md:right-[-10px] bg-brand-btn text-white w-full max-w-[250px] md:w-[280px] h-[70px] md:h-[82px] font-medium text-xs md:text-base flex justify-center text-center items-center px-4 md:px-6 rounded-md shadow">
              55 Bloor St W Suite 03, Toronto
            </div>
          </div>
          <Link
            href={"/toronto-rosedale-optometrist"}
            className="flex justify-end w-full mt-8 md:mr-20 md-0"
          >
            <button className="bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white px-4 md:px-6 py-2 md:py-3 rounded font-semibold w-[200px] md:w-[240px] h-[45px] md:h-[54px] text-sm md:text-base">
              Yorkville Rosedale →
            </button>
          </Link>
        </div>
      </div>

      <HappyClientBeaches />
      <HappyClientYorkVilla />
    </div>
  );
};

export default NearYou;
