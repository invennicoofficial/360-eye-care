import Image from "next/image";
import Link from "next/link";
import SubHeader from "../../../components/SubHeader";
import {
  GivingBackImage,
  kewbeachlbcImage,
  kid2kidimage,
} from "../../../constants/Images";

export const generateMetadata = () => {
  return {
    title: "360 Eyecare: Supporting Optometry Giving Sight",
    description:
      "See how 360 Eyecare is giving back by teaming up with Optometry Giving Sight to tackle global vision issues and support eye care projects.",
    openGraph: {
      title: "360 Eyecare: Supporting Optometry Giving Sight",
      description:
        "See how 360 Eyecare is giving back by teaming up with Optometry Giving Sight to tackle global vision issues and support eye care projects.",
      url: "https://www.360eyecare.ca/giving-back/",
      siteName: "360 Eyecare",
    },
    alternates: {
      canonical: "https://www.360eyecare.ca/giving-back/",
    },
  };
};
const GivingBack = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="Giving Back" />

      <div className="bg-neutral-400 pt-8 md:pt-12 pb-8 md:pb-15 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto gap-6 md:gap-8">
          <div className="w-full ">
            <div className="text-brand-subheader text-3xl md:text-4xl font-bold mb-2 text-left ">
              360 Eyecare's Partnership with Optometry Giving Sight to Bring
              Clear Vision to the World
            </div>
            <hr className="w-20 h-1 bg-combination-100 mb-4 md:flex " />

            <p className="text-base text-neutral-500 mb-5  leading-7 md:leading-8 font-normal">
              360 Eyecare is proud to announce our continued sponsorship of
              <Link
                href="https://givingsight.org/"
                className="hover:text-combination-100 text-brand-blue"
              >
                {" "}
                Optometry Giving Sight
              </Link>
              , an organization dedicated to addressing the global need for
              quality eye care and vision correction. As committed partners, we
              support projects that train local eye care professionals,
              establish vision centers, and deliver essential eye care and
              glasses to underserved communities around the world.
            </p>

            <p className="text-base text-neutral-500  leading-7 md:leading-8 font-normal">
              Our participation in the World Sight Day Challenge is a key
              component of our commitment. This initiative addresses the
              staggering statistic that over 1.1 billion people are blind or
              vision impaired simply because they do not have access to an eye
              exam and a pair of glasses. Through the collective efforts of our
              team, partners, and supporters, we have contributed to
              transforming the lives of many who are affected by preventable
              vision impairment.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 max-w-7xl mx-auto mt-6">
          <p className="text-base text-neutral-500 mb-5  leading-7 md:leading-8 font-normal">
            "We are honored to support Optometry Giving Sight and to be a part
            of the solution to global vision impairment," said Dr. Sam Baraam,
            Optometrist and Founder at 360 Eyecare. "Our ongoing commitment to
            this cause reflects our dedication to improving eye health
            worldwide. Every year, we renew our support to ensure that eye care
            services reach those who need them the most, helping to create a
            world where everyone has the opportunity to see clearly."
          </p>
          <p className="text-base text-neutral-500 mb-5  leading-7 md:leading-8 font-normal">
            360 Eyecare's sponsorship and participation in the World Sight Day
            Challenge are part of our broader mission to provide comprehensive
            eye care and promote the importance of vision health. We believe
            that clear vision is a fundamental right, and we are dedicated to
            making it accessible to all, regardless of geographic or economic
            barriers.
          </p>
          <p className="text-base text-neutral-500 mb-5  leading-7 md:leading-8 font-normal">
            For more information about our sponsorship and how you can support
            Optometry Giving Sight, please visit{" "}
            <Link
              href={"https://givingsight.org/donate/"}
              className="text-combination-200 hover:text-combination-100"
            >
              https://givingsight.org/donate/
            </Link>
          </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <h3 className="text-combination-200 font-bold text-xl">
              About 360 Eyecare
            </h3>
            <p className="text-base text-neutral-500  leading-7 md:leading-8 font-normal">
              360 Eyecare is a leading eye care provider based in Toronto,
              offering a full range of optometric services, including
              comprehensive eye exams, advanced diagnostics, and personalized
              vision care solutions. Our team of experienced optometrists and
              staff is dedicated to enhancing the vision and eye health of our
              community.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-combination-200 font-bold text-xl">
              About Optometry Giving Sight
            </h3>
            <p className="text-base text-neutral-500  leading-7 md:leading-8 font-normal">
              Optometry Giving Sight is a global initiative that aims to
              eliminate avoidable blindness and vision impairment due to
              uncorrected refractive error. The organization funds sustainable
              eye care projects that focus on training local eye care
              professionals, establishing vision centers, and providing
              affordable glasses to those in need.
            </p>
          </div>

          <p className="text-base text-neutral-500  leading-7 md:leading-8 font-normal">
            For additional information or inquiries, please contact us at{" "}
            <Link
              href="mailto:info@360eyecare.ca"
              className="hover:text-combination-100 text-brand-blue"
            >
              info@360eyecare.ca
            </Link>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row p-6 md:p-16 justify-between items-center gap-8">
        <Image
          src="/associate/associate7.webp"
          alt="Winning awards"
          width={585}
          height={122}
          className="w-full md:w-[585px] md:h-[122px] max-w-full h-auto"
        />
        <Image
          src="/associate/associate6.webp"
          alt="Optometry giving image"
          width={450}
          height={267}
          className="w-full md:w-[450px] md:h-[267px] max-w-full h-auto"
        />
      </div>

      <div className="max-w-8xl mx-auto flex flex-col md:flex-col p-6 md:px-16 md:pt-12 gap-4">
        <div className="text-brand-subheader text-2xl md:text-4xl font-bold mb-2">
          360 Eyecare Supports Lawn Bowling Club
        </div>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-base text-neutral-500  leading-7 md:leading-8 font-normal">
          At 360 Eyecare, we believe in being part of the community, not just as
          eye care providers but also as neighbours and supporters. We try to
          give back by donating to the Beaches Lawn Bowling Club.
        </p>
        <p className="text-base text-neutral-500  leading-7 md:leading-8 font-normal">
          The club has been a part of the local community for many years,
          offering a relaxing and welcoming space for people of all ages to
          enjoy lawn bowling. It’s more than just a sport, but a chance to
          connect, socialize, and stay active.
        </p>
        <p className="text-base text-neutral-500  leading-7 md:leading-8 font-normal">
          We’re happy to offer a little support to help keep local traditions
          like this going strong. The Beaches Lawn Bowling Club plays a role in
          bringing people together.
        </p>
        <p className="text-base text-neutral-500  leading-7 md:leading-8 font-normal mb-4">
          We encourage everyone to explore local groups like this one. They help
          make our neighbourhood vibrant, active, and connected.
        </p>

        <Image
          src={kewbeachlbcImage}
          alt="kewbeachlbcImage"
          width={585}
          height={338}
          className="w-full h-auto"
        />
      </div>
      <div className="max-w-8xl mx-auto flex flex-col md:flex-col p-6 md:px-16 md:pt-12 gap-4">
        <div className="text-brand-subheader text-2xl md:text-4xl font-bold mb-2">
          360 Eyecare Partners with Kid2Kid
        </div>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-base text-neutral-500  leading-7 md:leading-8 font-normal">
          360 Eyecare is proud to partner with{" "}
          <Link
            href={"https://www.kid2kid.ca/"}
            className="text-brand-blue hover:text-combination-100"
          >
            Kid2Kid
          </Link>
          , a Toronto-based organization dedicated to providing school supplies,
          clothing, and essential items to children in need. This sponsorship
          reflects 360 Eyecare’s ongoing commitment to supporting local
          communities and helping remove barriers to education and well-being
          for underserved youth.
        </p>
        <p className="text-base text-neutral-500  leading-7 md:leading-8 font-normal">
          Kid2Kid operates with a simple but powerful mission: to help children
          help each other. By working with schools and community groups, they
          identify and respond to urgent needs, delivering everything from
          backpacks and lunchboxes to winter coats and hygiene products.
        </p>
        <p className="text-base text-neutral-500  leading-7 md:leading-8 font-normal">
          “As eye care providers, we understand how critical the right tools are
          for a child’s success—both in and out of the classroom,” says Dr. Sam
          Baraam of 360 Eyecare.
        </p>
        <p className="text-base text-neutral-500  leading-7 md:leading-8 font-normal mb-4">
          This partnership highlights shared values of compassion, equity, and
          empowerment. Together, 360 Eyecare and Kid2Kid are helping ensure that
          every child has a fair chance to thrive—one backpack, one vision, and
          one future at a time.
        </p>

        <Image
          src={kid2kidimage}
          alt="kid2kidimage"
          width={585}
          height={338}
          className="w-full h-[618px] object-contain"
        />
      </div>

      <div className="max-w-8xl mx-auto flex flex-col p-6 md:px-16 md:pt-12 gap-3">
        <div className="text-brand-subheader text-2xl md:text-4xl font-bold mb-2">
          360 Eyecare Proudly Sponsors Neil McNeil Catholic High School's AAA
          Sr. Boys Volleyball Team
        </div>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />

        <p className="text-base text-neutral-500  leading-7 md:leading-8 font-normal">
          360 Eyecare is delighted to announce its proud sponsorship as a
          Platinum sponsor of Neil McNeil Catholic High School's AAA Sr. Boys
          Volleyball team for the fall/winter 2019 season. The team competed in
          the prestigious OFSAA Sr. Boys AAA Volleyball Championship, showcasing
          their exceptional talent and dedication
        </p>
        <p className="text-base text-neutral-500  leading-7 md:leading-8 font-normal">
          The championship event, held over three thrilling days from November
          20th to November 23rd, took place at Centennial College's Progress
          Campus. This sponsorship underscores 360 Eyecare's commitment to
          supporting local youth and promoting excellence in athletics within
          the community.
        </p>
        <p className="text-base text-neutral-500  leading-7 md:leading-8 font-normal">
          "We are incredibly proud to support the Neil McNeil Catholic High
          School's AAA Sr. Boys Volleyball team. Their hard work, teamwork, and
          sportsmanship resonate with our values at 360 Eyecare. We are excited
          to have been a part of their journey at OFSAA and look forward to
          celebrating their continued success." said Dr. Sam Baraam, Optometrist
          and Founder at 360 Eyecare.
        </p>
        <p className="text-base text-neutral-500  leading-7 md:leading-8 font-normal">
          360 Eyecare remains dedicated to fostering community engagement and
          encouraging young athletes to achieve their highest potential.
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-8 pb-8 md:pb-14 px-6">
        <Image
          src="/giveback/giveback1.webp"
          alt="Winning awards"
          width={167}
          height={187}
          className="w-40 md:w-[167px] md:h-[187px] h-auto"
        />
        <Image
          src="/giveback/giveback2.webp"
          alt="Optometry giving image"
          width={380}
          height={147}
          className="w-full max-w-sm md:w-[380px] md:h-[147px] h-auto"
        />
        <Image
          src="/giveback/giveback3.webp"
          alt="Winning awards"
          width={187}
          height={187}
          className="w-40 md:w-[187px] md:h-[187px] h-auto"
        />
      </div>
    </main>
  );
};

export default GivingBack;
