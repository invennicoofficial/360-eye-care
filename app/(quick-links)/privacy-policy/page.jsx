import Link from "next/link";
import SubHeader from "../../../components/SubHeader";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="Privacy Policy" />

      <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 md:px-0 text-neutral-500">
        <p className="text-base font-normal mb-4">
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit or make a purchase from
          360eyecare.ca (the "Site").
        </p>

        <div>
          <h2 className="text-base text-neutral-500 font-semibold mb-3">
            Personal Information we collect
          </h2>
          <p className="mb-3">
            When you visit the Site, we automatically collect certain
            information about your device, including information about your web
            browser, IP address, time zone, and some of the cookies that are
            installed on your device. Additionally, as you browse the Site, we
            collect information about the individual web pages or products that
            you view, what websites or search terms referred you to the Site,
            and information about how you interact with the Site. We refer to
            this automatically-collected information as "Device Information".
          </p>

          <p className="mb-3">
            We collect Device Information using the following technologies:
          </p>

          <ul className=" mb-3 space-y-2">
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0">
              "Cookies" are data files that are placed on your device or
              computer and often include an anonymous unique identifier. For
              more information about cookies, and how to disable cookies, visit
              http://www.allaboutcookies.org.
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0">
              "Log files" track actions occurring on the Site, and collect data
              including your IP address, browser type, Internet service
              provider, referring/exit pages, and date/time stamps.
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0">
              "Web beacons", "tags", and "pixels" are electronic files used to
              record information about how you browse the Site.
            </li>
          </ul>

          <p className="mb-3">
            Additionally when you make a purchase or attempt to make a purchase
            through the Site, we collect certain information from you, including
            your name, billing address, shipping address, payment information
            (including credit card numbers, email address, and phone number. We
            refer to this information as "Order Information".
          </p>

          <p className="mb-3">
            When we talk about "Personal Information" in this Privacy Policy, we
            are talking both about Device Information and Order Information.
          </p>
        </div>

        <div>
          <h2 className="text-base text-neutral-500 font-semibold mb-3">
            How do we use your personal Information?
          </h2>
          <p className="mb-3">
            We use the Order Information that we collect generally to fulfill
            any orders placed through the Site (including processing your
            payment information, arranging for shipping, and providing you with
            invoices and/or order confirmations). Additionally, we use this
            Order Information to:
          </p>
          <ul className=" mb-3 space-y-2">
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0">
              Communicate with you;
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0">
              Screen our orders for potential risk or fraud; and
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0">
              When in line with the preferences you have shared with us, provide
              you with information or advertising relating to our products or
              services.
            </li>
          </ul>

          <p className="mb-3">
            We use the Device Information that we collect to help us screen for
            potential risk and fraud (in particular, your IP address), and more
            generally to improve and optimize our Site (for example, by
            generating analytics about how our customers browse and interact
            with the Site, and to assess the success of our marketing and
            advertising campaigns).
          </p>
        </div>

        <div>
          <h2 className="text-base text-neutral-500 font-semibold mb-3">
            Sharing you personal Information
          </h2>
          <p className="mb-3">
            We share your Personal Information with third parties to help us use
            your Personal Information, as described above. We also use Google
            Analytics to help us understand how our customers use the Site — you
            can read more about how Google uses your Personal Information here:
            https://www.google.com/intl/en/policies/privacy/. You can also
            opt-out of Google Analytics here:
            https://tools.google.com/dlpage/gaoptout.
          </p>

          <p className="mb-3">
            Finally, we may also share your Personal Information to comply with
            applicable laws and regulations, to respond to a subpoena, search
            warrant or other lawful request for information we receive, or to
            otherwise protect our rights.
          </p>
        </div>

        <div>
          <h2 className="text-base text-neutral-500 font-semibold mb-3">
            Behavioural advertising
          </h2>
          <p className="mb-3">
            As described above, we use your Personal Information to provide you
            with targeted advertisements or marketing communications we believe
            may be of interest to you. For more information about how targeted
            advertising works, you can visit the Network Advertising
            Initiative's ("NAI") educational page at
            http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
          </p>

          <p className="mb-3">
            You can opt out of targeted advertising by using the links below:
          </p>

          <ul className="mb-3 space-y-2">
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0">
              Facebook: https://www.facebook.com/settings/?tab=ads
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0">
              Google: https://www.google.com/settings/ads/anonymous
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0">
              Bing:
              https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
            </li>
          </ul>

          <p className="mb-3">
            Additionally, you can opt out of some of these services by visiting
            the Digital Advertising Alliance's opt-out portal at:
            http://optout.aboutads.info/.
          </p>
        </div>

        <div>
          <h2 className="text-base text-neutral-500 font-semibold mb-3">
            Do not track
          </h2>
          <p className="mb-3">
            Please note that we do not alter our Site's data collection and use
            practices when we see a Do Not Track signal from your browser.
          </p>
        </div>

        <div>
          <h2 className="text-base text-neutral-500 font-semibold mb-3">
            Your rights
          </h2>
          <p className="mb-3">
            If you are a European resident, you have the right to access
            personal information we hold about you and to ask that your personal
            information be corrected, updated, or deleted. If you would like to
            exercise this right, please contact us through the contact
            information below.
          </p>

          <p className="mb-3">
            Additionally, if you are a European resident we note that we are
            processing your information in order to fulfill contracts we might
            have with you (for example if you make an order through the Site),
            or otherwise to pursue our legitimate business interests listed
            above. Additionally, please note that your information will be
            transferred outside of Europe, including to Canada and the United
            States.
          </p>
        </div>

        <div>
          <h2 className="text-base text-neutral-500 font-semibold mb-3">
            Data retention
          </h2>
          <p className="mb-3">
            When you place an order through the Site, we will maintain your
            Order Information for our records unless and until you ask us to
            delete this information.
          </p>
        </div>

        <div>
          <h2 className="text-base text-neutral-500 font-semibold mb-3">
            Changes
          </h2>
          <p className="mb-3">
            We may update this privacy policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal or regulatory reasons.
          </p>
        </div>

        <div>
          <h2 className="text-base text-neutral-500 font-semibold mb-3">
            Minors
          </h2>
          <p className="mb-3">
            The Site is not intended for individuals under the age of 16.
          </p>
        </div>

        <div>
          <h2 className="text-base text-neutral-500 font-semibold mb-3">
            Contact us
          </h2>
          <p className="mb-3">
            For more information about our privacy practices, if you have
            questions, or if you would like to make a complaint, please contact
            us by e-mail at{" "}
            <Link
              href="mailto:info@360eyecare.ca"
              className="text-combination-200 hover:text-combination-100"
            >
              info@360eyecare.ca
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
