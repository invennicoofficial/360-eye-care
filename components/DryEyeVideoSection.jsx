"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ThumbnailDryEyeImage1,
  ThumbnailDryEyeImage2,
} from "../constants/Images";

const DryEyeVideoSection = () => {
  const [isVideo1Playing, setIsVideo1Playing] = useState(false);
  const [isVideo2Playing, setIsVideo2Playing] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto my-16 gap-8 px-4">
      {/* First Video */}
      <div className="relative w-full md:w-1/2">
        {isVideo1Playing ? (
          <iframe
            src="https://www.youtube.com/embed/J-YFcheUm2w?autoplay=1&feature=oembed"
            title="YouTube video player"
            width="480"
            height="360"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-[480px] h-[360px] "
          ></iframe>
        ) : (
          <div
            className="relative cursor-pointer group"
            onClick={() => setIsVideo1Playing(true)}
          >
            <Image
              src={ThumbnailDryEyeImage1}
              alt="Dry Eye Video Thumbnail 1"
              width={480}
              height={360}
              className="w-full h-auto rounded-lg shadow-md group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
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

      {/* Second Video */}
      <div className="relative w-full md:w-1/2">
        {isVideo2Playing ? (
          <iframe
            src="https://www.youtube.com/embed/yLKJgnV55ng?autoplay=1&feature=oembed"
            title="YouTube video player"
            width="480"
            height="360"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-[480px] h-[360px] "
          ></iframe>
        ) : (
          <div
            className="relative cursor-pointer group"
            onClick={() => setIsVideo2Playing(true)}
          >
            <Image
              src={ThumbnailDryEyeImage2}
              alt="Dry Eye Video Thumbnail 2"
              width={480}
              height={360}
              className="w-full h-auto rounded-lg shadow-md group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
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
  );
};

export default DryEyeVideoSection;
