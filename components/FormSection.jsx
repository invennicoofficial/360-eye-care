import React from "react";
import LocationSelect from "./LocationSelect";
import Image from "next/image";

const FormSection = () => {
  return (
    <form className="flex flex-col gap-4 max-w-xl w-full">
      <LocationSelect />

      {["*Name:", "*Email:", "*Phone Number:", "Date of Birth"].map(
        (placeholder, idx) => (
          <input
            key={idx}
            className="w-full bg-gray-50 border border-gray-300 px-4 py-4 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-combination-100"
            placeholder={placeholder}
          />
        )
      )}

      <textarea
        className="w-full bg-gray-50 border border-gray-300 px-4 py-4 rounded resize-none text-gray-700 focus:outline-none focus:ring-1 focus:ring-combination-100"
        placeholder="Message:"
        rows={4}
      />

      <div className="mt-4">
        <label htmlFor="promo-code" className="block text-gray-700 mb-2">
          Enter Promo Code here if you have one:
        </label>
        <input
          id="promo-code"
          className="w-full bg-gray-50 border border-gray-300 px-4 py-4 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-combination-100"
        />
      </div>

      <div className="mt-6">
        {/* Fake reCAPTCHA visual */}
        <div className="h-[78px] bg-[#f9f9f9] border border-gray-300 rounded flex items-center px-3">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 border border-gray-300 rounded bg-gray-50 flex items-center justify-center">
                <input type="checkbox" />
              </div>
              <span className="text-sm text-gray-600 ml-2">
                I'm not a robot
              </span>
            </div>
            <div className="flex flex-col items-end text-[10px] text-gray-500">
              <Image
                src="/recaptcha.jpeg"
                width={40}
                height={40}
                alt="reCAPTCHA logo"
              />
              <div>reCAPTCHA</div>
              <div className="text-gray-400">Privacy - Terms</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-8">
        <button
          type="button"
          className="bg-combination-200 hover:bg-combination-100 text-white font-medium text-lg px-12 py-3 rounded-full cursor-pointer"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default FormSection;
