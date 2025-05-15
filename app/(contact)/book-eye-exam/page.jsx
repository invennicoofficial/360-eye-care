import BookEyeExam from "./BookEyeExam";
export async function generateMetadata() {
  return {
    title: "Book an Eye Exam Beaches & Yorkville Rosedale Toronto",
    description:
      "Book an eye exam appointment online or call to schedule. The Beaches: 416-698-3937 | Yorkville Rosedale: 416-901-2725.",
    openGraph: {
      title: "Book an Eye Exam Beaches & Yorkville Rosedale Toronto",
      description:
        "Book an eye exam appointment online or call to schedule. The Beaches: 416-698-3937 | Yorkville Rosedale: 416-901-2725.",
      url: "https://www.360eyecare.ca/book-eye-exam/",
      siteName: "360 Eyecare",
      type: "website",
      images: [
        {
          url: "https://www.360eyecare.ca/wp-content/uploads/2025/01/360eyecare-book-eye-exam.jpg",
          width: 1200,
          height: 630,
          alt: "Book an Eye Exam at 360 Eyecare Toronto",
        },
      ],
    },
    alternates: {
      canonical: "https://www.360eyecare.ca/book-eye-exam/",
    },
  };
}

const page = () => {
  return <BookEyeExam />;
};

export default page;
