import SubHeader from "../../../components/SubHeader";
import OptometristTeam from "../../../components/OptometristTeam";
import Image from "next/image";
import { MeetOptometryImage } from "constants/Images";
import Link from "next/link";
import Head from "next/head";
const SectionDivider = () => (
  <div className="w-24 h-1 bg-combination-100 mb-6"></div>
);
const Optometrists = () => {
  <Head>
    {/* Primary Meta Tags */}
    <title>Meet Our Experienced Optometrists | 360 Eyecare Toronto</title>
    <meta
      name="description"
      content="Meet our expert optometrists at 360 Eyecare Toronto. We offer personalized eye care, contact lens fittings, dry eye treatment, and ocular disease management."
    />
    <meta
      name="keywords"
      content="Toronto optometrists, eye doctors, eye care Toronto, dry eye treatment, contact lens exam, ocular health, 360 Eyecare team"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="UTF-8" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.360eyecare.ca/optometrists" />
    <meta
      property="og:title"
      content="Meet Our Experienced Optometrists | 360 Eyecare Toronto"
    />
    <meta
      property="og:description"
      content="Meet the experienced optometrists at 360 Eyecare. Our team offers compassionate care with advanced diagnostics and personalized treatment plans."
    />
    <meta
      property="og:image"
      content="https://www.360eyecare.ca/wp-content/uploads/2022/10/360eyecare.jpg" // Replace with your own if applicable
    />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://www.360eyecare.ca/optometrists" />
    <meta
      name="twitter:title"
      content="Meet Our Experienced Optometrists | 360 Eyecare Toronto"
    />
    <meta
      name="twitter:description"
      content="Discover how our skilled optometrists at 360 Eyecare provide comprehensive and compassionate eye care tailored to your needs."
    />
    <meta
      name="twitter:image"
      content="https://www.360eyecare.ca/wp-content/uploads/2022/10/360eyecare.jpg" // Replace with your hosted version of MeetOptometryImage
    />
  </Head>;
  return (
    <main className="pt-[110px]">
      <SubHeader text="Optometrists" />

      <OptometristTeam />
      {/* Why Choose Us Section */}
      <section className="w-full px-4 sm:mx-10 bg-white py-8 sm:py-16">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row bg-white overflow-hidden">
            {/* Image Container */}
            <div className="lg:w-1/2 w-full">
              <div className="relative ">
                <Image
                  src={MeetOptometryImage}
                  alt="Eye care professionals with patients"
                  className="object-cover w-full h-full"
                  width={578}
                  height={668}
                  priority
                />
              </div>
            </div>

            {/* Content Container */}
            <div className="lg:w-1/2 p-4 sm:p-8 lg:p-10 flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col">
                <h2 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold text-combination-200 mb-4 sm:mb-6">
                  Meet Our Optometrists Team at 360 Eyecare
                </h2>
                <SectionDivider />
                <p className="text-neutral-500 mb-4">
                  At 360 Eyecare, we take pride in our team of experienced and
                  dedicated optometrists committed to providing quality eye care
                  services to our patients. Our team consists of highly skilled
                  doctors, including Dr. Sam Barram, a certified optometrist
                  with advanced training in specialty contact lenses and ocular
                  disease management.
                </p>
                <p className="text-neutral-500 mb-3">
                  Each of our 360 Eyecare doctors has unique skills and
                  expertise in different areas of eye care, including retinal
                  diseases, cataracts, dry eye diseases, and ocular disease
                  treatment and management. Our optometrists use the latest
                  technology and techniques to diagnose and treat a wide range
                  of eye conditions, ensuring you receive the best care.
                </p>
                <p className="text-neutral-500 mb-4">
                  We understand that every patient is unique, and that’s why our
                  360 Eyecare team takes a personalized approach to eye care. We
                  take the time to listen to your concerns and develop a
                  customized treatment plan that meets your individual needs.
                  Whether you require routine eye exams, contact lens fittings,
                  or treatment for an eye disease, you can trust our team to
                  provide compassionate care and support throughout your
                  journey.
                </p>
                <Link
                  href={"/book-eye-exam"}
                  className="bg-combination-100 flex justify-center items-center text-bold  hover:text-combination-100 hover:bg-combination-200 text-white font-bold py-1 sm:py-2 px-2 sm:px-6 rounded-md transition-colors duration-200 shadow-md text-center text-sm sm:text-base text-wrap w-[200px] h-[46px] "
                >
                  Book An Eye Exam
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Optometrists;
