import Link from "next/link";
import SubHeader from "../../../components/SubHeader";
import Image from "next/image";
import { eyeglasses } from "../../../constants/Images";
import BrandCard from "../../../components/common/cardComponent";
import { FaUserMd } from "react-icons/fa";
import {
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Brand6,
  Brand7,
  Brand8,
  Brand9,
  Brand10,
  Brand11,
  Brand12,
  Brand13,
  Brand14,
  Brand15,
  Brand16,
  Brand17,
  Brand18,
  Brand19,
  Brand20,
  Brand21,
  Brand22,
  Brand23,
  Brand24,
} from "../../../constants/brand";
import Card from "../../../components/Card";
// todo : need to change the redirection link

const pages = () => {
  const brands = [
    // Image 1 - Top Row
    {
      id: "lindberg",
      name: "Lindberg",
      tagline: "Lindberg Eyeglasses: Sleek Scandinavian Design",
      description:
        "Lindberg eyeglasses are known for their minimalist design and lightweight comfort. Crafted in Denmark, these frames offer a perfect blend of style and functionality. With a focus on innovation and quality, Lindberg frames are ideal for those seeking a sophisticated and timeless look.",
      catalogLink: "Lindberg Catalog",
      logoImg: Brand1,
    },
    {
      id: "la-eyeworks",
      name: "l.a.Eyeworks",
      tagline: "l.a.Eyeworks Eyeglasses: Bold and Unique Styles",
      description:
        "l.a.Eyeworks offers a range of bold and unique eyeglasses that make a statement. With unconventional shapes and vibrant colors, l.a.Eyeworks frames are perfect for those who want to express their individuality. Each pair is handcrafted with attention to detail, ensuring a perfect fit and distinctive look.",
      catalogLink: "l.a.Eyeworks Catalog",
      logoImg: Brand2,
    },
    {
      id: "lafont",
      name: "LaFont",
      tagline: "LaFont Eyeglasses: Parisian Elegance and Style",
      description:
        "LaFont eyeglasses are synonymous with Parisian elegance and style. Known for their bold colors and unique patterns, LaFont frames are designed to make a statement. With a focus on quality craftsmanship and attention to detail, LaFont eyeglasses are the perfect choice for those who want to stand out.",
      catalogLink: "LaFont Catalog",
      logoImg: Brand3,
    },

    // Image 1 - Middle Row
    {
      id: "tom-ford",
      name: "Tom Ford",
      tagline: "Tom Ford Eyeglasses: Luxury and Sophistication",
      description:
        "Tom Ford eyeglasses embody luxury and sophistication. With sleek designs and high-quality materials, Tom Ford frames symbolize refined taste. Whether you're looking for classic styles or contemporary trends, Tom Ford Integrum has a frame to suit your style.",
      catalogLink: "Tom Ford Catalog",
      logoImg: Brand4,
    },
    {
      id: "integrum",
      name: "Integrum",
      tagline: "Integrum Eyeglasses: Fusion of Style and Comfort",
      description:
        "Integrum eyeglasses offer a fusion of style and comfort, providing eyewear that enhances your vision and complements your fashion sense. With a focus on quality materials and innovative design, Integrum frames are ideal for those seeking functionality and style.",
      catalogLink: "Integrum Catalog",
      logoImg: Brand5,
    },
    {
      id: "maui-jim",
      name: "Maui Jim",
      tagline: "Maui Jim Eyeglasses: Island-Inspired Style and Clarity",
      description:
        "Maui Jim eyeglasses combine island-inspired style with exceptional clarity. Designed to enhance your view while protecting your eyes, Maui Jim frames are perfect for outdoor enthusiasts. With polarized lenses and durable frames, Maui Jim eyeglasses are ideal for those who value fashion and function.",
      catalogLink: "Maui Jim Catalog",
      logoImg: Brand6,
    },

    // Image 1 - Bottom Row
    {
      id: "munic",
      name: "Munic",
      tagline: "Munic Eyeglasses: Modern and Innovative Designs",
      description:
        "Munic eyeglasses feature modern and innovative designs that blend fashion and technology. With lightweight materials and stylish frames, Munic offers comfortable and trendy eyewear. Whether you're looking for classic styles or bold statements, Munic has a frame to suit your style.",
      catalogLink: "Munic Catalog",
      logoImg: Brand7,
    },
    {
      id: "o-and-x-new-york",
      name: "O&X New York",
      tagline: "O&X New York Eyeglasses: Urban Sophistication",
      description:
        "O&X New York eyeglasses exude urban sophistication and style. With sleek designs and high-quality materials, O&X frames are perfect for those who want to make a statement. Whether in the city or the suburbs, O&X New York eyeglasses are the perfect accessory for any outfit.",
      catalogLink: "O&X New York",
      logoImg: Brand8,
    },
    {
      id: "oakley",
      name: "Oakley",
      tagline: "Oakley Eyeglasses: Performance and Style",
      description:
        "Oakley eyeglasses are known for their performance and style. With a focus on innovation and technology, Oakley frames are designed to enhance your vision and protect your eyes. Whether you're hitting the slopes or the streets, Oakley eyeglasses are the perfect blend of fashion and function.",
      catalogLink: "Oakley Catalog",
      logoImg: Brand9,
    },

    // Image 2 - Top Row
    {
      id: "ogi-eyewear",
      name: "OGI Eyewear",
      tagline: "OGI Eyewear: Contemporary Designs with Timeless Appeal",
      description:
        "OGI Eyewear offers contemporary designs with timeless appeal. With a focus on quality craftsmanship and attention to detail, OGI frames are perfect for those who appreciate classic styles with a modern twist. Whether you're looking for everyday frames or statement pieces, OGI Eyewear has something for everyone.",
      catalogLink: "OGI Catalog",
      logoImg: Brand10,
    },
    {
      id: "persol",
      name: "Persol",
      tagline: "Persol Eyeglasses: Italian Craftsmanship and Style",
      description:
        "Persol eyeglasses are synonymous with Italian craftsmanship and style. With iconic designs and high-quality materials, Persol frames symbolize elegance and sophistication. Whether you're looking for classic styles or contemporary trends, Persol Eyewear has a frame to suit your style.",
      catalogLink: "Persol Catalog",
      logoImg: Brand11,
    },
    {
      id: "ray-ban",
      name: "Ray-Ban",
      tagline: "Ray-Ban Eyeglasses: Timeless Style and Iconic Design",
      description:
        "Ray-Ban eyeglasses are known for their timeless style and iconic design. With a rich heritage of quality craftsmanship and innovative design, Ray-Ban frames symbolize effortless cool. Whether you're looking for classic aviators or retro-inspired frames, Ray-Ban has a frame to suit your style.",
      catalogLink: "Ray-Ban Catalog",
      logoImg: Brand12,
    },

    // Image 2 - Middle Row
    {
      id: "seraphin",
      name: "Seraphin",
      tagline: "Seraphin Eyeglasses: Vintage-Inspired Styles with Modern Flair",
      description:
        "Seraphin eyeglasses offer vintage-inspired styles with a modern flair. Crafted with attention to detail and quality materials, Seraphin frames are perfect for those who appreciate classic aesthetics. Whether you're looking for bold shapes or subtle sophistication, Seraphin has a frame to match your unique style.",
      catalogLink: "Seraphin Catalog",
      logoImg: Brand13,
    },
    {
      id: "silhouette",
      name: "Silhouette",
      tagline: "Silhouette Eyeglasses: Lightweight and Minimalist",
      description:
        "Silhouette eyeglasses are renowned for their lightweight and minimalist designs. Focusing on comfort and style, Silhouette frames offer a perfect blend of form and function. Whether you prefer rimless or semi-rimless styles, Silhouette has a frame to suit your needs.",
      catalogLink: "Silhouette Catalog",
      logoImg: Brand14,
    },
    {
      id: "all-poets",
      name: "All Poets",
      tagline: "All Poets Eyeglasses: Artistic and Expressive",
      description:
        "All Poets eyeglasses are artistic and expressive, perfect for those who want to make a statement. All Poets frames reflect your personality and style with unique designs and vibrant colors. Each pair is crafted with care, ensuring you stand out.",
      catalogLink: "All Poets Catalog",
      logoImg: Brand15,
    },

    // Image 2 - Bottom Row
    {
      id: "burberry",
      name: "Burberry",
      tagline: "Burberry Eyeglasses: British Heritage and Style",
      description:
        "Burberry eyeglasses embody British heritage and style. With iconic designs and luxurious materials, Burberry frames symbolize elegance and sophistication. Whether you're looking for classic tortoiseshell frames or modern metal styles, Burberry has a frame to suit your taste.",
      catalogLink: "Burberry Catalog",
      logoImg: Brand16,
    },
    {
      id: "kate-spade",
      name: "Kate Spade",
      tagline: "Kate Spade Eyeglasses: Playful and Chic",
      description:
        "Kate Spade eyeglasses are playful and chic, perfect for the modern woman. With bold patterns and feminine details, Kate Spade frames add a touch of whimsy to any outfit. Whether you're looking for oversized frames or cat-eye styles, Kate Spade has a frame to match your personality.",
      catalogLink: "Kate Spade Catalog",
      logoImg: Brand17,
    },
    {
      id: "life-italia-kids",
      name: "Life Italia Kids",
      tagline: "Life Italia Kids Eyeglasses: Stylish and Durable",
      description:
        "Life Italia Kids eyeglasses are designed to be stylish and durable, perfect for active kids. With a focus on quality materials and comfortable designs, Life Italia Kids frames are functional and fashionable. Whether your child needs glasses for everyday wear or sports activities, Life Italia Kids has a frame to suit their needs.",
      catalogLink: "Life Italia Kids Catalog",
      logoImg: Brand18,
    },

    // Image 3 - Top Row
    {
      id: "michael-kors",
      name: "Michael Kors",
      tagline: "Michael Kors Eyeglasses: Timeless Elegance",
      description:
        "Michael Kors eyeglasses exude timeless elegance and sophistication. With classic designs and high-quality materials, Michael Kors frames are perfect for those who appreciate understated luxury. Whether you're looking for sleek metal frames or bold acetate styles, Michael Kors has a frame to suit your style.",
      catalogLink: "Michael Kors Catalog",
      logoImg: Brand19,
    },
    {
      id: "superflex-kids",
      name: "Superflex Kids",
      tagline: "Superflex Kids Eyeglasses: Flexible and Fun",
      description:
        "Superflex Kids eyeglasses are flexible and fun, perfect for active kids. With durable materials and vibrant colors, Superflex Kids frames are designed to withstand the demands of everyday wear. Whether your child needs glasses for school or play, Superflex Kids has a frame to match their style and personality.",
      catalogLink: "Superflex Kids Catalog",
      logoImg: Brand20,
    },
    {
      id: "vision-avenue",
      name: "Vision Avenue",
      tagline: "Vision Avenue Eyeglasses: Clarity and Comfort",
      description:
        "Vision Avenue eyeglasses offer clarity and comfort for everyday wear. With lightweight materials and ergonomic designs, Vision Avenue frames provide a comfortable fit and clear vision. Vision Avenue has a frame to suit your needs, whether you're looking for reading glasses or prescription eyewear.",
      catalogLink: "Vision Avenue",
      logoImg: Brand21,
    },

    // Image 3 - Bottom Row
    {
      id: "emporio-armani",
      name: "Emporio Armani",
      tagline: "Emporio Armani Eyeglasses: Italian Style and Sophistication",
      description:
        "Emporio Armani eyeglasses embody Italian style and sophistication. With sleek designs and high-quality materials, Emporio Armani frames symbolize modern elegance. Whether you're looking for classic rectangular frames or trendy round styles, Emporio Armani has a frame to match your style.",
      catalogLink: "Emporio Armani",
      logoImg: Brand22,
    },
    {
      id: "ogi-kids",
      name: "OGI Kids",
      tagline: "OGI Kids Eyeglasses: Fun and Functional",
      description:
        "OGI Kids eyeglasses are fun and functional, perfect for active kids. With durable materials and playful designs, OGI Kids frames are designed to withstand the rigors of childhood. Whether your child needs glasses for school or sports, OGI Kids has a frame to suit their needs.",
      catalogLink: "OGI Kids Catalog",
      logoImg: Brand23,
    },
    {
      id: "ray-ban-kids",
      name: "Ray-Ban Kids",
      tagline: "Ray-Ban Kids Eyeglasses: Cool and Comfortable",
      description:
        "Ray-Ban Kids eyeglasses are cool and comfortable, perfect for stylish kids. With iconic designs and high-quality materials, Ray-Ban Kids frames offer fashion and function. Whether your child needs glasses for reading or everyday wear, Ray-Ban Kids has a frame to suit their style.",
      catalogLink: "Ray-Ban Kids Catalog",
      logoImg: Brand24,
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {brands.map((brand, index) => (
              <Card
                key={index}
                title={brand.name}
                subtitle={brand.tagline}
                description={brand.description}
                catalogLink={brand.catalogLink}
                logoImg={brand.logoImg}
              />
            ))}
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
