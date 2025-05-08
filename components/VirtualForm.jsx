"use client";
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const VirtualForm = () => {
  const [dateValue, setDateValue] = useState("");

  const handleDateFocus = () => {
    if (!dateValue) {
      const now = new Date();
      const formattedDate = now.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setDateValue(formattedDate);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <div className="flex flex-col gap-4 p-4 md:p-8 ">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-combination-100"
        required
      />
      <input
        type="text"
        placeholder="Phone"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-combination-100"
        required
      />
      <input
        type="text"
        placeholder="Email"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-combination-100"
        required
      />
      <label className="text-neutral-500 text-base font-medium">
        Choose your date*:
      </label>
      <input
        type="text"
        placeholder=""
        value={dateValue}
        onFocus={handleDateFocus}
        onChange={(e) => setDateValue(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-combination-100"
        required
      />
      <button
        onClick={handleSubmit}
        className="bg-combination-200 hover:bg-combination-100 hover:text-white text-white p-3 rounded-full  md:w-40 mt-2 font-medium w-[140px]"
      >
        Submit
      </button>
    </div>
  );
};

export default VirtualForm;
