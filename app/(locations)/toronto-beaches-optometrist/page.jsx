import React from "react";
import TorontoBeachesOptometrist from "./TorontoBeachesOptometrist";
export async function generateMetadata() {
  return {
    title: "360 Eyecare Yorkville Rosedale Toronto | Optometrist | Eye Doctor",
    description:
      "Get best eye care from team of trusted optometrist - 360 Eyecare Yorkville Rosedale. Book eye doctor for your eye exam or Call 416-901-2725!",
    openGraph: {
      title:
        "360 Eyecare Yorkville Rosedale Toronto | Optometrist | Eye Doctor",
      description:
        "Get best eye care from team of trusted optometrist - 360 Eyecare Yorkville Rosedale. Book eye doctor for your eye exam or Call 416-901-2725!",
      url: "https://www.360eyecare.ca/toronto-beaches-optometrist/",
      siteName: "360 Eyecare",
      type: "website",
    },
    alternates: {
      canonical: "https://www.360eyecare.ca/toronto-beaches-optometrist/",
    },
  };
}

const page = () => {
  return <TorontoBeachesOptometrist />;
};

export default page;
