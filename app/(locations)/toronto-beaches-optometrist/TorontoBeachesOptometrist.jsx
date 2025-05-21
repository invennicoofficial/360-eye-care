"use client";
import LocationHeroSection from "../../../components/LocationHeroSection";
import GoogleMapEmbed from "../../../components/GoogleMapEmbed";
import Link from "next/link";
import { locationHeroBeaches } from "constants/Images";
import { useState, useEffect } from "react";
import MeetOurFounder from "../../../components/MeetOurFounder";
import EyeCareServices from "../../../components/EyeCareServices";
import BeforeYourAppoinment from "../../../components/BeforeYourAppoinment";
import {
  choose360eyeCareData,
  eyeCareServiceData,
  torontoBeachesFaqData,
} from "constants/Constants";
import DryFaqs from "components/DryFaqs";

const TorontoBeachesOptometrist = () => {
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
    <main className="pt-[110px] ">
      <LocationHeroSection
        title="360 Eyecare – The Beaches, Toronto"
        subtitle="Your Trusted Optometry Clinic in The Beaches, Toronto"
        desciption={
          <>
            At 360 Eyecare – The Beaches, we deliver high-quality,
            patient-focused vision care to individuals and families across The
            Beaches, Leslieville, East Danforth, Upper Beaches, Danforth
            Village, and nearby areas. Our The Beaches Optometrist team
            {!isMobile || showFullDescription ? (
              <>
                {" "}
                offers comprehensive eye exams, advanced dry eye treatment,{" "}
                <Link href="/pediatric-eye-exams">
                  <span className="underline">pediatric eye care</span>
                </Link>
                , and emergency eye services to ensure the best possible vision
                health for you and your family.
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
        ctaLink="/book-eye-exam#book-appointment"
        ctaClinic="Call Our Clinic"
        ctaNumber="416-698-3937"
        imageSrc={locationHeroBeaches}
      />

      <MeetOurFounder
        title="Meet Our Founder: The Best Eye Doctor in The Beaches"
        description={
          <>
            Dr. Sam Baraam, the lead optometrist at 360 Eyecare – The Beaches,
            is recognized as one of the top eye doctors in The Beaches, Toronto.
            He is celebrated for delivering exceptional patient care,
            cutting-edge treatment solutions, and a commitment to the local
            community. With extensive experience and a passion for eye health,
            Dr. Baraam is certified to treat and manage ocular disease and is
            thoroughly trained in cataract management and laser vision
            correction procedures. He is also further trained in binocular
            vision, orthokeratology lenses and dry eye disease management.{" "}
            <Link className="underline" href="/team-members/dr-sam-baraam">
              Dr. Sam Baraam
            </Link>{" "}
            ensures that each patient receives personalized, top-quality vision
            care on each visit to the eye clinic in The Beaches, Toronto.
          </>
        }
        ctaText="Book an Eye Exam Today"
        ctaLink="/book-eye-exam"
      />

      <EyeCareServices
        eyeCareServiceData={eyeCareServiceData}
        choose360eyeCareData={choose360eyeCareData}
        choose360eyeCareTitle="Why Choose 360 Eyecare Beaches For Your Eye Care?"
      />
      <BeforeYourAppoinment />
      <DryFaqs
        faqData={torontoBeachesFaqData}
        title="FAQs (Frequently Asked Questions)"
      />

      <GoogleMapEmbed
        src={
          "https://maps.google.com/maps?q=360%20eyecare%20-%20beaches&t=m&z=15&output=embed&iwloc=near"
        }
      />
    </main>
  );
};

export default TorontoBeachesOptometrist;
