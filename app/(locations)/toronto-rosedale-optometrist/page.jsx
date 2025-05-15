import TorontoRosedaleOptometrist from "./TorontoRosedaleOptometrist";
export async function generateMetadata() {
  return {
    title: "Optometrist in Rosedale, Toronto | 360 Eyecare",
    description:
      "Visit 360 Eyecare – Rosedale for comprehensive optometry services including eye exams, dry eye treatment, and eyewear. Conveniently located in Toronto’s Rosedale neighborhood.",
    openGraph: {
      title: "360 Eyecare – Rosedale Location",
      description:
        "Comprehensive eye care in Rosedale, Toronto. Book your eye exam with trusted optometrists at 360 Eyecare.",
      url: "https://www.360eyecare.ca/toronto-rosedale-optometrist/",
      siteName: "360 Eyecare",
      type: "website",
    },
    alternates: {
      canonical: "https://www.360eyecare.ca/toronto-rosedale-optometrist/",
    },
  };
}

const page = () => {
  return <TorontoRosedaleOptometrist />;
};

export default page;
