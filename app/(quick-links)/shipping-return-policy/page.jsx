import SubHeader from "../../../components/SubHeader";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Shipping and Return Policy - 360 Eyecare",
    description:
      "Check out our shipping and return policy to learn more about our products and policies. Contact us at info@360eyecare.ca for any questions.",
    openGraph: {
      title: "Shipping and Return Policy - 360 Eyecare",
      description:
        "Check out our shipping and return policy to learn more about our products and policies. Contact us at info@360eyecare.ca for any questions.",
      url: "https://www.360eyecare.ca/shipping-return-policy/",
      siteName: "360 Eyecare",
      type: "website",
      images: [
        {
          url: "https://www.360eyecare.ca/wp-content/uploads/2025/01/360eyecare-shipping-return.jpg",
          width: 1200,
          height: 630,
          alt: "360 Eyecare Shipping and Returns",
        },
      ],
    },
    alternates: {
      canonical: "https://www.360eyecare.ca/shipping-return-policy/",
    },
  };
}

const ShippingReturnPolicy = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="Shipping & Return Policy" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-neutral-500">
          <h2 className="text-base font-semibold text-neutral-500 mb-4">
            SHIPPING POLICY
          </h2>

          <p className="mb-6">
            Please allow 5-14 days to receive your purchase. We will notify you
            when your order has been shipped. If you have any questions about
            your order status, please email us at{" "}
            <a
              href="mailto:info@360eyecare.ca"
              className="text-combination-200 hover:text-combination-100 "
            >
              info@360eyecare.ca
            </a>
          </p>

          <p className="mb-1">
            $10.95 flat shipping fee within Ontario using Canada Post standard
            shipping.
          </p>
          <p className="mb-6">
            Ontario-wide free shipping on orders over $200.
          </p>

          <p className="mb-8">
            $24.95 flat shipping fee within Canada using Canada Post standard
            shipping.
          </p>

          <h2 className="text-base font-medium text-neutral-500 mb-4">
            RETURN POLICY
          </h2>

          <p className="mb-6">
            We have a 30-day return policy, which means you have 30 days after
            receiving your item to request a return.
          </p>

          <p className="mb-6">
            To be eligible for a return, your item must be in the same condition
            that you received it and in its original packaging. You'll also need
            the receipt or proof of purchase.
          </p>

          <p className="mb-6">
            To start a return, you can contact us at{" "}
            <a
              href="mailto:info@360eyecare.ca"
              className="text-combination-200 hover:text-combination-100 "
            >
              info@360eyecare.ca
            </a>
            . If your return is accepted, we'll send you instructions on how and
            where to send your package. Items sent back to us without first
            requesting a return will not be accepted.
          </p>

          <p className="mb-8">
            You can always contact us for any return question at{" "}
            <a
              href="mailto:info@360eyecare.ca"
              className="text-combination-200 hover:text-combination-100 "
            >
              info@360eyecare.ca
            </a>
            .
          </p>

          <h2 className="text-base font-medium text-gray-500 mb-4">
            Damages and Issues
          </h2>
          <p className="mb-8">
            Please inspect your order upon reception and contact us immediately
            if the item is defective, damaged or if you receive the wrong item,
            so that we can evaluate the issue and make it right.
          </p>

          <h2 className="text-base font-medium text-gray-500 mb-4">Refunds</h2>
          <p className="mb-6">
            We will notify you once we've received and inspected your return,
            and let you know if the refund was approved or not. If approved,
            you'll be automatically refunded on your original payment method.
            Please remember it can take some time for your bank or credit card
            company to process and post the refund too.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ShippingReturnPolicy;
