import { optometrists } from "../../../../constants/Constants.js";
import TeamMember from "./TeamMember";

export async function generateMetadata({ params }) {
  const doctor = optometrists.find((doc) => doc.slug == params.slug);

  if (!doctor) {
    return {
      title: "Team Member Not Found | Your Clinic",
      description: "We couldn't find this team member.",
    };
  }

  const firstSentence = doctor.longDescription
    ? doctor.longDescription.split(".")[0] + "."
    : "";

  const description = doctor.description || firstSentence;

  return {
    title: `${doctor.name} | Optometrist at Your Clinic`,
    description: description,
    openGraph: {
      title: `${doctor.name} | Optometrist`,
      description: description,
      images: [
        {
          url: doctor.image,
          width: 800,
          height: 600,
          alt: doctor.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${doctor.name} | Optometrist`,
      description: description,
      images: [typeof doctor.image === "string" ? doctor.image : null],
    },
  };
}

export default function TeamMemberPage({ params }) {
  const doctor = optometrists.find((doc) => doc.slug == params.slug);

  return <TeamMember doctor={doctor} />;
}
