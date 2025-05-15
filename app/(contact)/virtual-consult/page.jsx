import React from "react";
import SubHeader from "../../../components/SubHeader";
import RequestForm from "../../../components/RequestForm";
import VirtualFaq from "../../../components/VirtualFaq";

export async function generateMetadata() {
  return {
    title: "Tele-Optometry | Request a Virtual Eye Care Consultation Toronto",
    description:
      "Book a Virtual Consult with our optometrists for remote eye health and vision services. Get professional care from the comfort of your home.",
    openGraph: {
      title: "Tele-Optometry | Request a Virtual Eye Care Consultation Toronto",
      description:
        "Book a Virtual Consult with our optometrists for remote eye health and vision services. Get professional care from the comfort of your home.",
      url: "https://www.360eyecare.ca/virtual-consult/",
      siteName: "360 Eyecare",
      type: "website",
      images: [
        {
          url: "https://www.360eyecare.ca/wp-content/uploads/2025/01/360eyecare-virtual-consultation.jpg",
          width: 1200,
          height: 630,
          alt: "360 Eyecare Virtual Consultation",
        },
      ],
    },
    alternates: {
      canonical: "https://www.360eyecare.ca/virtual-consult/",
    },
  };
}

const page = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="Request a Virtual Consultation" />
      <RequestForm />
      <VirtualFaq />
    </main>
  );
};

export default page;
