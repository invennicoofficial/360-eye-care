import FullScopeOptometry from "../components/FullScopeOptometry";
import WhyChooseUs from "../components/WhyChooseUs";
import PediatricOptometric from "../components/PediatricOptometric";
import OptometryServices from "../components/Optometry";
import NearYou from "../components/NearYou";
import Associate from "../components/Associate";
import LatestEyeCareInsight from "../components/LatestEyeCareInsight";
import Banner from "../components/Banner";
import HeroSection from "../components/HeroSection";
import Script from "next/script";

export const metadata = {
  title: "360 Eye Care - Expert Optometry Services in Toronto",
  description:
    "Toronto's leading eye care clinic offering comprehensive eye exams, dry eye treatment, myopia control, and advanced diagnostics. Our expert optometrists provide personalized care for your entire family. Schedule your visit today!",
  alternates: {
    canonical: "https://360eyecare.ca",
  },
  openGraph: {
    title: "360 Eye Care - Expert Optometry Services in Toronto",
    description:
      "Toronto's leading eye care clinic offering comprehensive eye exams, dry eye treatment, myopia control, and advanced diagnostics. Our expert optometrists provide personalized care for your entire family. Schedule your visit today!",
  },
};
const Home = () => {
  return (
    <main className="pt-[80px]">
      <HeroSection />
      <FullScopeOptometry />
      <WhyChooseUs />
      <PediatricOptometric />
      <OptometryServices />
      <NearYou />
      <Associate rows={2} />
      <LatestEyeCareInsight />
      <Banner />
    </main>
  );
};

export default Home;
