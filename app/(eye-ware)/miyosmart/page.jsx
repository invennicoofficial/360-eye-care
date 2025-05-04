import SubHeader from "../../../components/SubHeader";
import DetailsDescripton from "../../../components/common/DetailsDescripton";
import { Miyosmartlenses } from "../../../constants/prescriptionLenses";

const page = () => {
  const dataDescription = [
    "A recent study predicted that by the year 2050 half of the world’s population will be classified as myopic, or near-sighted. Of that portion of the population, 10% will develop myopia of 5.00D (diopters) or stronger. With that in mind, research has been ongoing into ways to manage, mitigate, and minimize the effects of myopia, particularly in children if caught early enough.",
    "In 2012, Hoya Vision Care partnered with the Hong Kong Polytechnic University, a leader in the field of myopia control research, to develop a new type of ophthalmic lens to better control developing myopia. The result of their combined efforts is the MiyoSmart lens. Miyosmart lenses are designed to correct myopia while helping to slow its progression. They utilize advanced technology to provide clear, comfortable vision. With Miyosmart lenses, you can enjoy high-quality vision while protecting your eyesight for the future.",
  ];
  return (
    <main className="pt-[110px]">
      <SubHeader text="MiyoSmart Lenses" />
      <DetailsDescripton
        title="Introducing Miyosmart Lenses: Revolutionizing Vision"
        description={dataDescription}
        image={Miyosmartlenses}
      />
    </main>
  );
};

export default page;
