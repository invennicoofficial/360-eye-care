"use client";

import Image from "next/image";
import { useState } from "react";
import { YTThumbnail1 } from "../constants/Images";
import { MdCheckBox } from "react-icons/md";
import LocationSelect from "./LocationSelect";

const VideoSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start px-4 md:px-8">
        {/* Left: Text + Static Thumbnail or YouTube Video */}
        <div className="flex flex-col">
          <h3 className="text-combination-200 text-3xl md:text-4xl font-bold leading-tight">
            DRY EYES, ITCHY EYES,
            <br />
            IRRITATION <br />
            <span className="text-combination-200 font-bold">
              or EXCESSIVE TEARING?
            </span>
          </h3>
          <hr className="w-20 h-1 bg-combination-100 my-6 mb-12" />

          <div className="relative ">
            {isVideoPlaying ? (
              <div className=" aspect-video w-[560px] h-[315px] ">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/J-YFcheUm2w?autoplay=1&feature=oembed"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded"
                ></iframe>
              </div>
            ) : (
              <div
                className="relative w-full cursor-pointer"
                onClick={() => setIsVideoPlaying(true)}
              >
                <Image
                  src={YTThumbnail1}
                  width={560}
                  height={315}
                  alt="Youtube Thumbnail"
                  className="w-full rounded"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Form Mockup */}
        <div>
          <h3 className="text-combination-200 text-3xl font-bold mb-2">
            BOOK YOUR APPOINTMENT
          </h3>
          <hr className="w-20 h-1 bg-combination-100 mb-8" />

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
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
