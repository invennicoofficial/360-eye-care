"use client";
import { useEffect, useRef, useState } from "react";
import { WithOutSpecImage, WithSpecImage } from "../constants/Images";
import Image from "next/image";
export const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePosition = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition(pos);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) updatePosition(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (isDragging) updatePosition(e.touches[0].clientX);
  };

  const stopDragging = () => setIsDragging(false);

  useEffect(() => {
    const handleEvents = () => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", stopDragging);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", stopDragging);
    };
    if (isDragging) handleEvents();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopDragging);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging]);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setSliderPosition(rect.width / 2);
    }
  }, []);

  return (
    <div className="w-full ">
      <div
        ref={containerRef}
        className="relative h-[400px] w-full cursor-col-resize select-none overflow-hidden rounded touch-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* After Image (background full width) */}
        <Image
          src={WithOutSpecImage}
          alt="Without Glasses"
          fill
          className="object-cover"
        />

        {/* Before Image (clipped to slider position) */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}px` }}
        >
          <Image
            src={WithSpecImage}
            alt="With Glasses"
            fill
            className="object-cover"
          />
        </div>

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 z-10 w-1 bg-white opacity-70"
          style={{ left: `${sliderPosition}px` }}
        />

        {/* Circle Control */}
        <div
          className="absolute z-20 cursor-move"
          style={{
            left: `${sliderPosition}px`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-combination-100 shadow-md">
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
