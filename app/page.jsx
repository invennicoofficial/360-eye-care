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
  title: "Toronto Optometrists | Eye Doctor | Optometry Clinic - 360 Eyecare",
  description:
    "360 Eyecare is full scope, family-friendly optometry clinic with amazing team of qualified Toronto Optometrists. Best eye doctors in Toronto.",
  keywords: [
    "Toronto eye care",
    "optometrist Toronto",
    "eye exams Toronto",
    "dry eye treatment",
    "myopia control",
    "contact lenses Toronto",
    "optometry services",
    "vision care Toronto",
    "family eye care",
    "360 Eyecare",
  ],
  openGraph: {
    type: "website",
    url: "https://www.360eyecare.ca",
    title: "Toronto Optometrists | Eye Doctor | Optometry Clinic - 360 Eyecare",
    description:
      "360 Eyecare is full scope, family-friendly optometry clinic with amazing team of qualified Toronto Optometrists. Best eye doctors in Toronto.",
    siteName: "360 Eyecare",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "360 Eye Care Toronto - Eye Exam and Vision Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "360 Eye Care - Expert Optometry in Toronto",
    description:
      "Book your eye exam with 360 Eyecare, Toronto's trusted optometrists for family vision care, myopia control, and dry eye treatment.",
    site: "@360eyecare", // Replace with your actual Twitter handle if available
    images: ["/360Logo.webp"],
  },
  alternates: {
    canonical: "https://www.360eyecare.ca",
  },
  robots: {
    index: true,
    follow: true,
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
