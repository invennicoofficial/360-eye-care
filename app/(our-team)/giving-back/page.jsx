import Image from "next/image";
import Link from "next/link";
import SubHeader from "../../../components/SubHeader";
import { GivingBackImage } from "../../../constants/Images";

const GivingBack = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="Giving Back" />

      <div className="bg-neutral-400 pt-12 pb-15">
        <div className=" flex justify-between max-w-7xl mx-auto ">
          <div className="w-full md:w-[50%]">
            <div className="text-brand-subheader text-4xl font-bold mb-2">
              Giving Back
            </div>
            <hr className="w-20 h-1 bg-combination-100 mb-4" />

            <p className="text-base text-neutral-500 mb-5 tracking-wider leading-8 font-normal ">
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

            <p className="text-base text-neutral-500 tracking-wider leading-8 font-normal ">
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
          <div>
            <Image
              src={GivingBackImage}
              alt="wearing-glass-image mr-6"
              width={585}
              height={338}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 max-w-7xl mx-auto mt-6">
          <p className="text-base text-neutral-500 mb-5 tracking-wider leading-8 font-normal">
            “We are honored to support Optometry Giving Sight and to be a part
            of the solution to global vision impairment,” said Dr. Sam Baraam,
            Optometrist and Founder at 360 Eyecare. “Our ongoing commitment to
            this cause reflects our dedication to improving eye health
            worldwide. Every year, we renew our support to ensure that eye care
            services reach those who need them the most, helping to create a
            world where everyone has the opportunity to see clearly.”
          </p>
          <p className="text-base text-neutral-500 mb-5 tracking-wider leading-8 font-normal">
            360 Eyecare’s sponsorship and participation in the World Sight Day
            Challenge are part of our broader mission to provide comprehensive
            eye care and promote the importance of vision health. We believe
            that clear vision is a fundamental right, and we are dedicated to
            making it accessible to all, regardless of geographic or economic
            barriers.
          </p>
          <p className="text-base text-neutral-500 mb-5 tracking-wider leading-8 font-normal">
            For more information about our sponsorship and how you can support
            Optometry Giving Sight, please visit{" "}
            <Link
              href={"https://givingsight.org/donate/."}
              className="text-combination-200 hover:text-combination-100"
            >
              https://givingsight.org/donate/.
            </Link>
          </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <h3 className="text-combination-200 font-bold text-xl">
              About 360 Eyecare
            </h3>
            <p className="text-base text-neutral-500 tracking-wider leading-8 font-normal ">
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
            <p className="text-base text-neutral-500 tracking-wider leading-8 font-normal ">
              Optometry Giving Sight is a global initiative that aims to
              eliminate avoidable blindness and vision impairment due to
              uncorrected refractive error. The organization funds sustainable
              eye care projects that focus on training local eye care
              professionals, establishing vision centers, and providing
              affordable glasses to those in need.
            </p>
          </div>

          <p className="text-base text-neutral-500 tracking-wider leading-8 font-normal ">
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

      <div className="max-w-7xl mx-auto flex  p-16 justify-between  items-center">
        <Image
          src="/associate/associate7.webp"
          alt="winning-awards"
          width={585}
          height={123}
        />
        <Image
          src="/associate/associate6.webp"
          alt="opt0metry-giving-image"
          width={450}
          height={267}
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col p-16 gap-3 ">
        <div className="text-brand-subheader text-4xl font-bold mb-2">
          360 Eyecare Proudly Sponsors Neil McNeil Catholic High School’s AAA
          Sr. Boys Volleyball Team
        </div>
        <hr className="w-20 h-1 bg-combination-100 mb-4" />

        <p className="text-base text-neutral-500 tracking-wider leading-8 font-normal ">
          360 Eyecare is delighted to announce its proud sponsorship as a
          Platinum sponsor of Neil McNeil Catholic High School’s AAA Sr. Boys
          Volleyball team for the fall/winter 2019 season. The team competed in
          the prestigious OFSAA Sr. Boys AAA Volleyball Championship, showcasing
          their exceptional talent and dedication
        </p>
        <p className="text-base text-neutral-500 tracking-wider leading-8 font-normal ">
          The championship event, held over three thrilling days from November
          20th to November 23rd, took place at Centennial College’s Progress
          Campus. This sponsorship underscores 360 Eyecare’s commitment to
          supporting local youth and promoting excellence in athletics within
          the community.
        </p>
        <p className="text-base text-neutral-500 tracking-wider leading-8 font-normal ">
          “We are incredibly proud to support the Neil McNeil Catholic High
          School’s AAA Sr. Boys Volleyball team. Their hard work, teamwork, and
          sportsmanship resonate with our values at 360 Eyecare. We are excited
          to have been a part of their journey at OFSAA and look forward to
          celebrating their continued success.” said Dr. Sam Baraam, Optometrist
          and Founder at 360 Eyecare.
        </p>
        <p className="text-base text-neutral-500 tracking-wider leading-8 font-normal ">
          360 Eyecare remains dedicated to fostering community engagement and
          encouraging young athletes to achieve their highest potential.
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex justify-around items-center pb-14 px-6">
        <Image
          src="/giveback/giveback1.webp"
          alt="winning-awards"
          width={167}
          height={187}
        />
        <Image
          src="/giveback/giveback2.webp"
          alt="opt0metry-giving-image"
          width={380}
          height={147}
        />
        <Image
          src="/giveback/giveback3.webp"
          alt="opt0metry-giving-image"
          width={187}
          height={187}
        />
      </div>
    </main>
  );
};

export default GivingBack;
