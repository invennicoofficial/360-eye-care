import dynamic from "next/dynamic";
import React, { Suspense } from "react";

// Dynamically import all client components
const HeroCarousel = dynamic(() => import("../components/HeroSection"), {
  ssr: false,
});
const FullScopeOptometry = dynamic(
  () => import("../components/FullScopeOptometry"),
  { ssr: false }
);
const WhyChooseUs = dynamic(() => import("../components/WhyChooseUs"), {
  ssr: false,
});
const PediatricOptometric = dynamic(
  () => import("../components/PediatricOptometric"),
  { ssr: false }
);
const OptometryServices = dynamic(() => import("../components/Optometry"), {
  ssr: false,
});
const NearYou = dynamic(() => import("../components/NearYou"), { ssr: false });
const Associate = dynamic(() => import("../components/Associate"), {
  ssr: false,
});
const LatestEyeCareInsight = dynamic(
  () => import("../components/LatestEyeCareInsight"),
  { ssr: false }
);
const Banner = dynamic(() => import("../components/Banner"), { ssr: false });

const LoadingFallback = () => (
  <div className="flex justify-center items-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const Home = () => {
  return (
    <main className="pt-[80px]">
      <Suspense fallback={<LoadingFallback />}>
        <HeroCarousel />
        <FullScopeOptometry />
        <WhyChooseUs />
        <PediatricOptometric />
        <OptometryServices />
        <NearYou />
        <Associate rows={2} />
        <LatestEyeCareInsight />
        <Banner />
      </Suspense>
    </main>
  );
};

export default Home;
