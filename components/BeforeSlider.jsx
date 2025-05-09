"use client";
import { useEffect, useRef, useState } from "react";
import { WithOutSpecImage, WithSpecImage } from "../constants/Images";
import Image from "next/image";

export const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // Store as percentage (0-100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePosition = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const percentage = Math.max(
      0,
      Math.min(100, ((clientX - rect.left) / rect.width) * 100)
    );
    setSliderPosition(percentage);
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
    if (isDragging && e.touches[0]) {
      e.preventDefault(); // Prevent scrolling while dragging
      updatePosition(e.touches[0].clientX);
    }
  };

  const stopDragging = () => setIsDragging(false);

  useEffect(() => {
    const handleEvents = () => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", stopDragging);
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
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
    // Set initial slider position to middle
    setSliderPosition(50);

    // Ensure container properly re-renders on window resize
    const handleResize = () => {
      if (containerRef.current) {
        const forceReflow = containerRef.current.offsetHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div
        ref={containerRef}
        className="relative w-full aspect-[380/336] cursor-col-resize select-none overflow-hidden rounded touch-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* After Image (background full width) */}
        <div className="absolute inset-0">
          <Image
            src={WithOutSpecImage}
            alt="Without Glasses"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover object-center"
          />
        </div>

        {/* Before Image (clipped to slider position) */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full">
            <Image
              src={WithSpecImage}
              alt="With Glasses"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 z-10 w-1 bg-white opacity-70"
          style={{ left: `${sliderPosition}%` }}
        />

        {/* Circle Control */}
        <div
          className="absolute z-20 -translate-x-1/2 -translate-y-1/2 touch-none"
          style={{
            left: `${sliderPosition}%`,
            top: "50%",
          }}
        >
          <div className="flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full bg-combination-100 shadow-md">
            <svg
              className="w-4 h-4 md:w-6 md:h-6"
              xmlns="http://www.w3.org/2000/svg"
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
              className="w-4 h-4 md:w-6 md:h-6 ml-[-3px] md:ml-[-6px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
