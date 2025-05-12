"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { WithOutSpecImage, GirWithSpecImage } from "constants/Images";

export const ImageSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleInteractionStart = () => {
    isDragging.current = true;
    document.body.style.userSelect = "none";
  };

  const handleInteractionEnd = () => {
    isDragging.current = false;
    document.body.style.userSelect = "";
  };

  const handleInteractionMove = (e) => {
    if (!isDragging.current || !containerRef.current) return;

    const bounds = containerRef.current.getBoundingClientRect();
    let clientX;

    if (e.type.includes("touch")) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const x = clientX - bounds.left;
    const percentage = Math.min(Math.max((x / bounds.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  if (!isClient) return null;

  return (
    <div className="relative w-full h-full overflow-hidden z-40">
      <div
        ref={containerRef}
        className="relative w-full h-full select-none"
        onMouseMove={handleInteractionMove}
        onMouseUp={handleInteractionEnd}
        onMouseLeave={handleInteractionEnd}
        onTouchMove={handleInteractionMove}
        onTouchEnd={handleInteractionEnd}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={WithOutSpecImage}
            alt="Without Glasses"
            layout="fill"
            objectFit="cover"
            priority
            draggable={false}
          />
        </div>

        {/* Foreground image with clipping */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute inset-0 ${
              !isDragging.current
                ? "transition-[clip-path] duration-75 ease-linear"
                : ""
            }`}
            style={{
              clipPath: `polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%)`,
            }}
          >
            <Image
              src={GirWithSpecImage}
              alt="With Glasses"
              layout="fill"
              objectFit="cover"
              priority
              draggable={false}
            />
          </div>
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 z-10 w-1 bg-white opacity-70 cursor-col-resize"
          style={{
            left: `${sliderPosition}%`,
            transform: "translateX(-50%)",
          }}
          onMouseDown={handleInteractionStart}
          onTouchStart={handleInteractionStart}
        >
          <div className="absolute border-[3px] border-white  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-combination-100 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-[-8px]"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
