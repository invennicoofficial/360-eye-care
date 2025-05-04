import Link from "next/link";
import SubHeader from "../../../components/SubHeader";
import Image from "next/image";
import { eyeglasses } from "../../../constants/Images";
import BrandCard from "../../../components/common/cardComponent";
import { FaUserMd } from "react-icons/fa";
import { LindbergImage } from "../../../constants/brand";
// todo : need to change the redirection link

const pages = () => {
  const brands = [
    {
      id: "lindberg",
      name: "Lindberg",
      tagline: "Lindberg Eyeglasses: Sleek Scandinavian Design",
      description:
        "Lindberg eyeglasses are known for their minimalist design and lightweight comfort. Crafted in Denmark, these frames offer a perfect blend of style and functionality. With a focus on innovation and quality, Lindberg frames are ideal for those seeking a sophisticated and timeless look.",
      logoSrc: LindbergImage,
      catalogLink: "/brands/lindberg",
    },
    {
      id: "la-eyeworks",
      name: "l.a.Eyeworks",
      tagline: "l.a.Eyeworks Eyeglasses: Bold and Unique Styles",
      description:
        "l.a.Eyeworks offers a range of bold and unique eyeglasses that make a statement. With unconventional shapes and vibrant colors, l.a.Eyeworks frames are perfect for those who want to express their individuality. Each pair is handcrafted with attention to detail, ensuring a perfect fit and distinctive look.",
      logoSrc: "/images/la-eyeworks-logo.png",
      catalogLink: "/brands/la-eyeworks",
    },
    {
      id: "lafont",
      name: "LaFont",
      tagline: "LaFont Eyeglasses: Parisian Elegance and Style",
      description:
        "LaFont eyeglasses are synonymous with Parisian elegance and style. Known for their bold colors and unique patterns, LaFont frames are designed to make a statement. With a focus on quality craftsmanship and attention to detail, LaFont eyeglasses are the perfect choice for those who want to stand out.",
      logoSrc: "/images/lafont-logo.png",
      catalogLink: "/brands/lafont",
    },
  ];
  return (
    <main className="pt-[110px] bg-[#F6F7F5]">
      <SubHeader text="Eyeglasses" />
      <div className="max-w-6xl mx-auto my-16 flex flex-wrap justify-between">
        <div className="w-full">
          <div className="max-w-7xl mx-auto py-16 flex justify-between">
            <div className="flex flex-col gap-2 w-[50%]">
              <h3 className="text-combination-200 text-[40px] font-extrabold mt-2">
                Find Your Perfect Eyeglasses in Toronto Here
              </h3>
              <hr className="w-24 h-1 bg-combination-100 mb-3" />
              <p className="text-neutral-500  tracking-wider text-lg leading-relaxed">
                Discover a diverse range of premium fashion and handmade
                designer eyeglasses and sunglasses at 360 Eyecare. Our
                collection includes renowned brands like Lafont, Vanni, Tom
                Ford, Burberry, and more. Explore our pages on{" "}
                <Link
                  href="/dry-eye"
                  className="/dry-eye text-combination-200 hover:text-combination-100"
                >
                  Prescription Lenses
                </Link>{" "}
                and{" "}
                <Link
                  href="/myopia-control"
                  className="text-combination-200 hover:text-combination-100"
                >
                  Custom Lenses
                </Link>{" "}
                to learn about the lens options we offer. Our experienced
                opticians will help you find the perfect frames to suit your
                style and vision needs. If you have a specific frame in mind
                from our selection of brands, let us know, and we’ll ensure it’s
                available for you. and{" "}
              </p>
            </div>
            <div className="w-[50%] pl-4">
              <Image
                src={eyeglasses}
                alt="Eye care professionals with patients"
                className="object-cover w-[45%]"
                width={578}
                height={668}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full flex items-center justify-between flex-col">
            <h2 className="text-combination-200 text-[40px] font-extrabold mt-2">
              Explore Our Designer Eyeglasses Collection
            </h2>
            <hr className="w-20 h-[3px] bg-combination-100 mb-3" />
            <p className="text-neutral-500">
              Discover a wide range of premium eyeglasses in Beaches and
              Rosedale from top brands.
            </p>
          </div>
          <div className="flex flex-wrap justify-between items-start">
            {/* {brands.map((brand) => (
              <div className="w-[32%] py-2">
                <BrandCard key={brand.id} brand={brand} />
              </div>
            ))} */}
          </div>
        </div>
      </div>
      <div className="w-full bg-combination-100 py-12  px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Left: Icon + Heading */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-white text-center md:text-left">
            <div className="text-5xl md:text-6xl mb-2 md:mb-0">
              <FaUserMd />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-white">
                Book Your Eye Exam Today <br className="hidden md:block" />
                at Our Beaches Optometry!
              </h2>
              <p className="mt-2 text-lg font-medium">
                Beaches: <span className="font-normal">416-698-3937</span>
              </p>
            </div>
          </div>

          {/* Center: Description */}
          <div className="text-white text-center md:text-left max-w-md lg:max-w-xl my-4 md:my-0">
            <p className="text-base md:text-lg leading-relaxed">
              Whether you need a routine checkup, advanced dry eye treatment,
              pediatric eye care, or emergency services, our team is here to
              help. Take control of your eye health with 360 Eyecare Beaches.
            </p>
          </div>

          {/* Right: CTA Button */}
          <div className="w-full md:w-auto text-center shrink-0">
            <Link href="/book-appointment">
              <button className="bg-combination-200 hover:text-combination-100 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 shadow-md">
                Book An Eye Exam
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default pages;
