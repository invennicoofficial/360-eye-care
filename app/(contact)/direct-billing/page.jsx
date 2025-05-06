import React from "react";
import SubHeader from "../../../components/SubHeader";
import { FaPlay } from "react-icons/fa6";

const plans = [
  "Great West Life",
  "Green Shield",
  "Sunlife Financial",
  "Standard Life",
  "Blue Cross",
  "Chambers of Commerce Group Insurance",
  "Desjardins Insurance",
  "Johnson Inc.",
  "Manulife Financial",
  "Industrial Alliance",
  "Johnston Group (Maximum Benefit)",
];

const page = () => {
  return (
    <main className="pt-[110px] bg-[#F9F9F9]">
      <SubHeader text="Direct Billing" />
      <div className="mx-4 md:mx-10 bg-white p-6 md:p-14">
        <h2 className="text-combination-200 text-2xl md:text-3xl lg:text-[37px] font-bold mb-4">
          We accept vision insurance plans!
        </h2>
        <hr className="w-16 md:w-20 h-1 bg-combination-100 mb-4" />
        <p className="text-neutral-500 text-sm md:text-base lg:text-lg mb-4">
          We provide direct billing (submit claims to your insurance provider on
          your behalf)
        </p>
        <p className="text-neutral-500 text-sm md:text-base lg:text-lg mb-1">
          Our staff can check your eligibility at the office during your visit!
        </p>
        <p className="text-neutral-500 text-sm md:text-base lg:text-lg mb-4">
          Eliminates unnecessary out of pocket expenses and reimbursement lag.
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-2 items-center">
            <FaPlay size="18" className="text-combination-100" />
            <p className="text-combination-200 font-medium text-base md:text-lg">
              Vision plans accepted:
            </p>
          </div>

          <ul className="list-disc list-inside text-neutral-500 ">
            {plans.map((plan, index) => (
              <li
                className="ml-4 text-sm md:text-base font-medium mb-2"
                key={index}
              >
                {plan}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-neutral-500 text-sm md:text-base lg:text-lg mb-1 mt-6">
          *We will bill your insurance company directly subject to permission by
          your insurance provider and particular plan.
        </p>

        <p className="text-neutral-500 text-sm md:text-base lg:text-lg mb-4">
          **Patients only pay the portion not covered by their group insurance
        </p>
        <p className="text-neutral-500 text-sm md:text-base lg:text-lg">
          Please contact us if your vision insurance plan is not listed above
        </p>
      </div>
    </main>
  );
};

export default page;
