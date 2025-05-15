import Link from "next/link";
import SubHeader from "../../../components/SubHeader";
import Image from "next/image";
import { eyeglasses, eyeglassescommitted } from "../../../constants/Images";
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
import BookExamCommon from "../../../components/common/BookExampCommon";
import DetailsDescripton from "../../../components/common/DetailsDescripton";
import { glassCleanerImage } from "../../../constants/prescriptionLenses";
import TitleCommon from "../../../components/common/TitleCommon";
import HoverCard from "../../../components/HoverCard";
// todo : need to change the redirection link

export async function generateMetadata() {
  return {
    title: "Eyeglasses Toronto | Optical Store Beaches and Rosedale",
    description:
      "At 360 Eyecare we carry a wide selection of premium fashion and handmade designer eyeglasses. Get your favourite eyeglasses from our store.",
    openGraph: {
      title: "Eyeglasses Toronto | Optical Store Beaches and Rosedale",
      description:
        "At 360 Eyecare we carry a wide selection of premium fashion and handmade designer eyeglasses. Get your favourite eyeglasses from our store.",
      url: "https://www.360eyecare.ca/eye-glasses/",
      siteName: "360 Eyecare",
      type: "website",
    },
    alternates: {
      canonical: "https://www.360eyecare.ca/eye-glasses/",
    },
  };
}

const pages = () => {
  const brands = [
    // Image 1 - Top Row
    {
      id: "lindberg",
      name: "Lindberg",
      tagline: "Lindberg Eyeglasses: Sleek Scandinavian Design",
      description:
        "Lindberg eyeglasses are known for their minimalist design and lightweight comfort. Crafted in Denmark, these frames offer a perfect blend of style and functionality. With a focus on innovation and quality, Lindberg frames are ideal for those seeking a sophisticated and timeless look.",
      catalogLink: "https://lindberg.com/en",
      logoImg: Brand1,
    },
    {
      id: "la-eyeworks",
      name: "l.a.Eyeworks",
      tagline: "l.a.Eyeworks Eyeglasses: Bold and Unique Styles",
      description:
        "l.a.Eyeworks offers a range of bold and unique eyeglasses that make a statement. With unconventional shapes and vibrant colors, l.a.Eyeworks frames are perfect for those who want to express their individuality. Each pair is handcrafted with attention to detail, ensuring a perfect fit and distinctive look.",
      catalogLink: "https://laeyeworks.com/",
      logoImg: Brand2,
    },
    {
      id: "lafont",
      name: "LaFont",
      tagline: "LaFont Eyeglasses: Parisian Elegance and Style",
      description:
        "LaFont eyeglasses are synonymous with Parisian elegance and style. Known for their bold colors and unique patterns, LaFont frames are designed to make a statement. With a focus on quality craftsmanship and attention to detail, LaFont eyeglasses are the perfect choice for those who want to stand out.",
      catalogLink: "https://lafont.com/",
      logoImg: Brand3,
    },

    // Image 1 - Middle Row
    {
      id: "tom-ford",
      name: "Tom Ford",
      tagline: "Tom Ford Eyeglasses: Luxury and Sophistication",
      description:
        "Tom Ford eyeglasses embody luxury and sophistication. With sleek designs and high-quality materials, Tom Ford frames symbolize refined taste. Whether you're looking for classic styles or contemporary trends, Tom Ford Integrum has a frame to suit your style.",
      catalogLink: "https://tomford.com/",
      logoImg: Brand4,
    },
    {
      id: "integrum",
      name: "Integrum",
      tagline: "Integrum Eyeglasses: Fusion of Style and Comfort",
      description:
        "Integrum eyeglasses offer a fusion of style and comfort, providing eyewear that enhances your vision and complements your fashion sense. With a focus on quality materials and innovative design, Integrum frames are ideal for those seeking functionality and style.",
      catalogLink: "https://integrum.com/",
      logoImg: Brand5,
    },
    {
      id: "maui-jim",
      name: "Maui Jim",
      tagline: "Maui Jim Eyeglasses: Island-Inspired Style and Clarity",
      description:
        "Maui Jim eyeglasses combine island-inspired style with exceptional clarity. Designed to enhance your view while protecting your eyes, Maui Jim frames are perfect for outdoor enthusiasts. With polarized lenses and durable frames, Maui Jim eyeglasses are ideal for those who value fashion and function.",
      catalogLink: "https://mauijim.com/CA/en_GB",
      logoImg: Brand6,
    },

    // Image 1 - Bottom Row
    {
      id: "munic",
      name: "Munic",
      tagline: "Munic Eyeglasses: Modern and Innovative Designs",
      description:
        "Munic eyeglasses feature modern and innovative designs that blend fashion and technology. With lightweight materials and stylish frames, Munic offers comfortable and trendy eyewear. Whether you're looking for classic styles or bold statements, Munic has a frame to suit your style.",
      catalogLink: "https://munic.com/",
      logoImg: Brand7,
    },
    {
      id: "o-and-x-new-york",
      name: "O&X New York",
      tagline: "O&X New York Eyeglasses: Urban Sophistication",
      description:
        "O&X New York eyeglasses exude urban sophistication and style. With sleek designs and high-quality materials, O&X frames are perfect for those who want to make a statement. Whether in the city or the suburbs, O&X New York eyeglasses are the perfect accessory for any outfit.",
      catalogLink: "https://oxny.com/",
      logoImg: Brand8,
    },
    {
      id: "oakley",
      name: "Oakley",
      tagline: "Oakley Eyeglasses: Performance and Style",
      description:
        "Oakley eyeglasses are known for their performance and style. With a focus on innovation and technology, Oakley frames are designed to enhance your vision and protect your eyes. Whether you're hitting the slopes or the streets, Oakley eyeglasses are the perfect blend of fashion and function.",
      catalogLink: "https://oakley.com/",
      logoImg: Brand9,
    },

    // Image 2 - Top Row
    {
      id: "ogi-eyewear",
      name: "OGI Eyewear",
      tagline: "OGI Eyewear: Contemporary Designs with Timeless Appeal",
      description:
        "OGI Eyewear offers contemporary designs with timeless appeal. With a focus on quality craftsmanship and attention to detail, OGI frames are perfect for those who appreciate classic styles with a modern twist. Whether you're looking for everyday frames or statement pieces, OGI Eyewear has something for everyone.",
      catalogLink: "https://ogieyewear.com/",
      logoImg: Brand10,
    },
    {
      id: "persol",
      name: "Persol",
      tagline: "Persol Eyeglasses: Italian Craftsmanship and Style",
      description:
        "Persol eyeglasses are synonymous with Italian craftsmanship and style. With iconic designs and high-quality materials, Persol frames symbolize elegance and sophistication. Whether you're looking for classic styles or contemporary trends, Persol Eyewear has a frame to suit your style.",
      catalogLink: "https://persol.com/",
      logoImg: Brand11,
    },
    {
      id: "ray-ban",
      name: "Ray-Ban",
      tagline: "Ray-Ban Eyeglasses: Timeless Style and Iconic Design",
      description:
        "Ray-Ban eyeglasses are known for their timeless style and iconic design. With a rich heritage of quality craftsmanship and innovative design, Ray-Ban frames symbolize effortless cool. Whether you're looking for classic aviators or retro-inspired frames, Ray-Ban has a frame to suit your style.",
      catalogLink: "https://www.ray-ban.com/canada/en",
      logoImg: Brand12,
    },

    // Image 2 - Middle Row
    {
      id: "seraphin",
      name: "Seraphin",
      tagline: "Seraphin Eyeglasses: Vintage-Inspired Styles with Modern Flair",
      description:
        "Seraphin eyeglasses offer vintage-inspired styles with a modern flair. Crafted with attention to detail and quality materials, Seraphin frames are perfect for those who appreciate classic aesthetics. Whether you're looking for bold shapes or subtle sophistication, Seraphin has a frame to match your unique style.",
      catalogLink: "https://seraphin.com/",
      logoImg: Brand13,
    },
    {
      id: "silhouette",
      name: "Silhouette",
      tagline: "Silhouette Eyeglasses: Lightweight and Minimalist",
      description:
        "Silhouette eyeglasses are renowned for their lightweight and minimalist designs. Focusing on comfort and style, Silhouette frames offer a perfect blend of form and function. Whether you prefer rimless or semi-rimless styles, Silhouette has a frame to suit your needs.",
      catalogLink: "https://silhouette.com/",
      logoImg: Brand14,
    },
    {
      id: "all-poets",
      name: "All Poets",
      tagline: "All Poets Eyeglasses: Artistic and Expressive",
      description:
        "All Poets eyeglasses are artistic and expressive, perfect for those who want to make a statement. All Poets frames reflect your personality and style with unique designs and vibrant colors. Each pair is crafted with care, ensuring you stand out.",
      catalogLink: "https://allpoets.com/",
      logoImg: Brand15,
    },

    // Image 2 - Bottom Row
    {
      id: "burberry",
      name: "Burberry",
      tagline: "Burberry Eyeglasses: British Heritage and Style",
      description:
        "Burberry eyeglasses embody British heritage and style. With iconic designs and luxurious materials, Burberry frames symbolize elegance and sophistication. Whether you're looking for classic tortoiseshell frames or modern metal styles, Burberry has a frame to suit your taste.",
      catalogLink: "https://burberry.com/",
      logoImg: Brand16,
    },
    {
      id: "kate-spade",
      name: "Kate Spade",
      tagline: "Kate Spade Eyeglasses: Playful and Chic",
      description:
        "Kate Spade eyeglasses are playful and chic, perfect for the modern woman. With bold patterns and feminine details, Kate Spade frames add a touch of whimsy to any outfit. Whether you're looking for oversized frames or cat-eye styles, Kate Spade has a frame to match your personality.",
      catalogLink: "https://katespade.com/",
      logoImg: Brand17,
    },
    {
      id: "life-italia-kids",
      name: "Life Italia Kids",
      tagline: "Life Italia Kids Eyeglasses: Stylish and Durable",
      description:
        "Life Italia Kids eyeglasses are designed to be stylish and durable, perfect for active kids. With a focus on quality materials and comfortable designs, Life Italia Kids frames are functional and fashionable. Whether your child needs glasses for everyday wear or sports activities, Life Italia Kids has a frame to suit their needs.",
      catalogLink: "https://lifeitalia.com/",
      logoImg: Brand18,
    },

    // Image 3 - Top Row
    {
      id: "michael-kors",
      name: "Michael Kors",
      tagline: "Michael Kors Eyeglasses: Timeless Elegance",
      description:
        "Michael Kors eyeglasses exude timeless elegance and sophistication. With classic designs and high-quality materials, Michael Kors frames are perfect for those who appreciate understated luxury. Whether you're looking for sleek metal frames or bold acetate styles, Michael Kors has a frame to suit your style.",
      catalogLink: "https://michaelkors.com/",
      logoImg: Brand19,
    },
    {
      id: "superflex-kids",
      name: "Superflex Kids",
      tagline: "Superflex Kids Eyeglasses: Flexible and Fun",
      description:
        "Superflex Kids eyeglasses are flexible and fun, perfect for active kids. With durable materials and vibrant colors, Superflex Kids frames are designed to withstand the demands of everyday wear. Whether your child needs glasses for school or play, Superflex Kids has a frame to match their style and personality.",
      catalogLink: "https://superflexkids.com/",
      logoImg: Brand20,
    },
    {
      id: "vision-avenue",
      name: "Vision Avenue",
      tagline: "Vision Avenue Eyeglasses: Clarity and Comfort",
      description:
        "Vision Avenue eyeglasses offer clarity and comfort for everyday wear. With lightweight materials and ergonomic designs, Vision Avenue frames provide a comfortable fit and clear vision. Vision Avenue has a frame to suit your needs, whether you're looking for reading glasses or prescription eyewear.",
      catalogLink: "https://visionavenue.com/",
      logoImg: Brand21,
    },

    // Image 3 - Bottom Row
    {
      id: "emporio-armani",
      name: "Emporio Armani",
      tagline: "Emporio Armani Eyeglasses: Italian Style and Sophistication",
      description:
        "Emporio Armani eyeglasses embody Italian style and sophistication. With sleek designs and high-quality materials, Emporio Armani frames symbolize modern elegance. Whether you're looking for classic rectangular frames or trendy round styles, Emporio Armani has a frame to match your style.",
      catalogLink: "https://emporioarmani.com/",
      logoImg: Brand22,
    },
    {
      id: "ogi-kids",
      name: "OGI Kids",
      tagline: "OGI Kids Eyeglasses: Fun and Functional",
      description:
        "OGI Kids eyeglasses are fun and functional, perfect for active kids. With durable materials and playful designs, OGI Kids frames are designed to withstand the rigors of childhood. Whether your child needs glasses for school or sports, OGI Kids has a frame to suit their needs.",
      catalogLink: "https://ogieyewear.com/",
      logoImg: Brand23,
    },
    {
      id: "ray-ban-kids",
      name: "Ray-Ban Kids",
      tagline: "Ray-Ban Kids Eyeglasses: Cool and Comfortable",
      description:
        "Ray-Ban Kids eyeglasses are cool and comfortable, perfect for stylish kids. With iconic designs and high-quality materials, Ray-Ban Kids frames offer fashion and function. Whether your child needs glasses for reading or everyday wear, Ray-Ban Kids has a frame to suit their style.",
      catalogLink: "https://www.ray-ban.com/canada/en",
      logoImg: Brand24,
    },
  ];
  const whyChooseData = [
    "At 360 Eyecare, we are dedicated to preserving and enhancing your vision. Our experienced team offers comprehensive eye care services tailored to your needs.",
  ];
  const whyChooseDataBullets = [
    "Advanced diagnostic technology for accurate assessments.",
    "Personalized treatment plans for optimal eye health.",
    "Educational resources to empower you about your eye care.",
  ];

  const whyChooseLink = [
    {
      title: "Learn More",
      href: "/about-us",
    },
  ];

  return (
    <main className="pt-[110px] bg-[#F6F7F5]">
      <SubHeader text="Eyeglasses" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 my-8 md:my-16 flex flex-wrap justify-between">
        <div className="w-full">
          {/* Hero section - Made responsive */}
          <div className="max-w-7xl mx-auto py-8 md:py-16 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col gap-2 w-full md:w-[50%] mb-6 md:mb-0">
              <h3 className="text-combination-200 text-2xl md:text-[37px] font-extrabold mt-2 leading-normal ">
                Find Your Perfect Eyeglasses in Toronto Here
              </h3>
              <hr className="w-16 md:w-24 h-1 bg-combination-100 mb-3" />
              <p className="text-neutral-500  text-base md:text-base leading-relaxed">
                Discover a diverse range of premium fashion and handmade
                designer eyeglasses and sunglasses at 360 Eyecare. Our
                collection includes renowned brands like Lafont, Vanni, Tom
                Ford, Burberry, and more. Explore our pages on{" "}
                <Link
                  href="/prescription-lenses/"
                  className="text-combination-200 hover:text-combination-100"
                >
                  Prescription Lenses
                </Link>{" "}
                and{" "}
                <Link
                  href="/contact-lenses-toronto"
                  className="text-combination-200 hover:text-combination-100"
                >
                  Custom Lenses
                </Link>{" "}
                to learn about the lens options we offer. Our experienced
                opticians will help you find the perfect frames to suit your
                style and vision needs. If you have a specific frame in mind
                from our selection of brands, let us know, and we'll ensure it's
                available for you.
              </p>
            </div>
            <div className="w-full md:w-[50%] md:pl-4">
              <Image
                src={eyeglasses}
                alt="Eye care professionals with patients"
                className="object-cover w-full md:w-[45%] mx-auto md:mx-0"
                width={578}
                height={668}
                style={{ height: "auto", width: "100%" }}
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          {/* Collection title section - Made responsive */}
          <div className="w-full flex items-center justify-between flex-col text-center px-4">
            <h2 className="text-combination-200 text-2xl md:text-[40px] font-extrabold font-poppins mt-2 mb-4">
              Explore Our Designer Eyeglasses Collection
            </h2>
            <hr className="w-16 md:w-24 h-[3px] bg-combination-100 mb-3" />
            <p className="text-neutral-500 max-w-3xl mx-auto">
              Discover a wide range of premium eyeglasses in Beaches and
              Rosedale from top brands.
            </p>
          </div>
          {/* Brand cards grid - Made responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-6 md:mt-10 px-4">
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
      {/* Book Exam section - Component should handle its own responsiveness */}
      <BookExamCommon
        icon={<FaUserMd />}
        title="Need Assistance?"
        phones={[
          { label: "Beaches", number: "416-698-3937" },
          { label: "Rosedale", number: "416-901-2725" },
        ]}
        description="Our team is here to help. Whether you have questions about our services or need support, we're just a phone call away."
        buttonText="Book Appointment"
        buttonLink="/book-eye-exam"
      />
      {/* Details Description section - Component should handle its own responsiveness */}
      <DetailsDescripton
        title="Committed to Your Eye Health"
        description={whyChooseData}
        image={eyeglassescommitted}
        bullets={whyChooseDataBullets}
        url={whyChooseLink}
        noCatalog
        reverse
      />
      {/* Blog section title - Made responsive */}
      <div className="max-w-7xl mx-auto py-8 md:py-16 flex items-center justify-center flex-col px-4 text-center">
        <TitleCommon title="Explore Our Eyeglasses Blogs" position="center" />
        <p>Stay informed about the latest trends and innovations in eyewear.</p>
      </div>
      {/* todo: card need to add  */}

      <div className="bg-combination-200 md:py-24 md:px-16 py-16 px-12">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-14">
            {/* Card 1 */}
            <HoverCard
              title="How to Remove Scratches From Glasses"
              description="Learn effective methods to keep your glasses looking new."
              iconSrc="glasses"
              iconAlt="Glasses icon"
              linkHref="https://www.360eyecare.ca/how-to-remove-scratches-from-glasses/"
              listItems={[
                "Should you use baking soda and water paste?",
                "Should you use toothpaste?",
                "What about vehicle wax to fill in scratches?",
                "Are there professional scratch removal kits?",
              ]}
            />

            {/* Card 2 */}
            <HoverCard
              title="Eyeglasses Across History"
              description="Discover the evolution of eyeglasses and their impact."
              iconSrc="history"
              iconAlt="History icon"
              linkHref="https://www.360eyecare.ca/eyeglasses-across-history/"
              listItems={[
                "Early vision aids in ancient civilizations.",
                "The invention of the first spectacles.",
                "Eyewear styles through the centuries.",
                "Eyeglasses in modern fashion and technology.",
                "The role of eyeglasses in enhancing vision and daily life.",
              ]}
            />

            {/* Card 3 */}
            <HoverCard
              title="Glasses Shopping Guide – Frame Selection"
              description="Tips for choosing the perfect frames to suit your style."
              iconSrc="shopping"
              iconAlt="Shopping icon"
              linkHref="https://www.360eyecare.ca/glasses-shopping-guide-frame-selection/"
              listItems={[
                "Consider your face shape.",
                "Match frames to your skin tone.",
                "Choose a frame style that complements your lifestyle.",
                "Experiment with different colors and materials.",
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default pages;
