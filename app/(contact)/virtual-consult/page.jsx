import React from "react";
import SubHeader from "../../../components/SubHeader";
import RequestForm from "../../../components/RequestForm";
import VirtualFaq from "../../../components/VirtualFaq";

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
