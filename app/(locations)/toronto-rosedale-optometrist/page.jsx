"use client";
import GoogleMapEmbed from "../../../components/GoogleMapEmbed";
import Link from "next/link";
import LocationHeroSection from "../../../components/LocationHeroSection";
import { locationHeroYorkVille } from "constants/Images";
import { useState, useEffect } from "react";
import MeetOurFounder from "components/MeetOurFounder";
import Banner3 from "../../../components/Banner3";
import BeforeAppointmentRosedale from "../../../components/BeforeAppointmentRosedale";
import {
  Rosedalechoose360eyeCareData,
  RosedaleeyeCareServiceData,
  RosedaleFaqData,
} from "constants/Constants";
import EyeCareServices from "components/EyeCareServices";
import DryFaqs from "components/DryFaqs";
const TorontoRosedaleOptometrist = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Initial check
      checkMobile();

      // Listen for resize events
      window.addEventListener("resize", checkMobile);

      // Cleanup
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  return (
    <main className="pt-[110px]">
      <LocationHeroSection
        title="360 Eyecare – Yorkville Rosedale | Optometrist"
        subtitle="Experience Premium Eye Care in Yorkville and Rosedale, Toronto"
        desciption={
          <>
            At 360 Eyecare, we are dedicated to providing exceptional eye care
            for our vibrant community. Serving Yorkville, Rosedale, The Annex,
            Summerhill, Church and Wellesley (The Village), and surrounding
            neighbourhoods, our optometry clinic offers state-of-the-art
            diagnostics, personalized treatment plans, and a curated selection
            of eyewear to suit your lifestyle.
            {!isMobile || showFullDescription ? (
              <>
                {" "}
                Whether you need a{" "}
                <Link href="/eye-exams">
                  <span className="underline">routine eye exam</span>
                </Link>
                , advanced dry eye therapy,{" "}
                <Link href="/pediatric-eye-exams">
                  <span className="underline">pediatric eye care</span>
                </Link>
                , or emergency eye services, our Yorkville{" "}
                <Link href="/optometrists">
                  <span className="underline">optometrists</span>
                </Link>{" "}
                are here to ensure optimal vision health for all ages.
              </>
            ) : (
              <>
                ...
                <button
                  onClick={() => setShowFullDescription(true)}
                  className="text-[#7ACACB] font-semibold"
                >
                  more
                </button>
              </>
            )}
          </>
        }
        ctaText="Book Appointment"
        ctaLink="https://360rosedale.mypatientportal.xyz/dashboard"
        ctaClinic="Call Our Clinic"
        ctaNumber="416-901-2725"
        imageSrc={locationHeroYorkVille}
      />
      <MeetOurFounder
        title="Meet Our Founder: A Leading Optometrist in Yorkville Rosedale"
        description={
          <>
            Dr. Sam Baraam, the driving force behind 360 Eyecare
            Yorkville-Rosedale, is recognized as one of Toronto’s prominent eye
            doctors. With a dedication to patient education, innovative
            treatments, and community engagement, Dr. Baraam provides
            personalized vision care to every patient who walks through our
            doors. Certified by the Canadian National Boards (CSAO), Dr. Baraam
            has also successfully completed all three parts of the US National
            Board examinations (NBEO). He’s now an active member of the Ontario
            Association of Optometrists, the Canadian Association of
            Optometrists, as well as the College of Optometrists in Vision
            Development (COVD).
          </>
        }
        ctaText="Book an Eye Exam Today"
        ctaLink="https://360rosedale.mypatientportal.xyz/dashboard"
      />
      <EyeCareServices
        eyeCareServiceData={RosedaleeyeCareServiceData}
        choose360eyeCareData={Rosedalechoose360eyeCareData}
        choose360eyeCareTitle="Why Choose 360 Eyecare Yorkville Rosedale?"
      />
      <div className="my-12">
        <Banner3 />
      </div>
      <BeforeAppointmentRosedale />

      <DryFaqs
        faqData={RosedaleFaqData}
        title="Frequently Asked Questions (FAQs)"
      />

      <GoogleMapEmbed
        src="https://www.google.com/maps?q=360+Eyecare+-+Yorkville+Rosedale,+55+Bloor+St+W,+Toronto,+ON+M4W+1A5,+Canada&output=embed"
        title="360 Eyecare Yorkville Rosedale Location"
      />
    </main>
  );
};

export default TorontoRosedaleOptometrist;
