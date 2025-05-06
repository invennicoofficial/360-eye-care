"use client";

import Image from "next/image";
import { useState } from "react";
import { YTThumbnail1 } from "../constants/Images";
import FormSection from "./FormSection";

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
          <FormSection />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
