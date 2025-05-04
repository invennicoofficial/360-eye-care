import SubHeader from "../../../components/SubHeader";
import DetailsDescripton from "../../../components/common/DetailsDescripton";
import { CustomLensesImage } from "../../../constants/prescriptionLenses";

  /**
   * A Next.js page component that renders a page for custom contact lenses.
   * The page displays a hero section with a title and a description of the
   * benefits of custom contact lenses. It also includes a section with
   * information about standard contact lenses and how they compare to custom
   * lenses.
   *
   * @returns {JSX.Element} The JSX element for the page.
   */
const page = () => {
  const DataDescription = [
    "Custom contact lenses are specially made to fit the unique characteristics of an individual’s eyes. Unlike standard contact lenses, which come in pre-set sizes and parameters, custom lenses are crafted based on detailed measurements of the eye’s shape, size, and curvature. This customization ensures a better fit, improved comfort, and optimal vision correction for the wearer.",
    "Standard contact lenses are mass-produced and designed to fit a wide range of eye shapes and sizes. While these lenses work well for many people, they may not provide the necessary level of comfort or vision correction for individuals with specific needs. Custom lenses, on the other hand, are tailored to address these specific requirements, making them a preferred choice for many contact lens wearers.",
  ];
  return (
    <main className="pt-[110px] bg-[#F6F7F5]">
      <SubHeader text="Custom Contact Lenses" />

      <DetailsDescripton
        title="Custom Lenses in Toronto: Tailored to You"
        description={DataDescription}
        image={CustomLensesImage}
      />
      <p className="text-neutral-500">
        {" "}
        "There are several common reasons why people choose custom contact
        lenses:",
      </p>
    </main>
  );
};

export default page;
