import React from "react";
import ContactLensesToronto from "./ContactLensesToronto";
export async function generateMetadata() {
  return {
    title: "Contact Lenses Toronto | Daily and Multifocal Contact Lenses",
    description:
      "Get your contact lenses from 360 Eyecare and have them delivered directly to you! Make an appointment today and get the perfect fit!",
    openGraph: {
      title: "Contact Lenses Toronto | Daily and Multifocal Contact Lenses",
      description:
        "Get your contact lenses from 360 Eyecare and have them delivered directly to you! Make an appointment today and get the perfect fit!",
      url: "https://www.360eyecare.ca/contact-lenses-faq/",
      siteName: "360 Eyecare",
      type: "website",
    },
    alternates: {
      canonical: "https://www.360eyecare.ca/contact-lenses-faq/",
    },
  };
}
const page = () => {
  return <ContactLensesToronto />;
};

export default page;
