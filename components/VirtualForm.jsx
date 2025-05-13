"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const LoadingSpinner = () => (
  <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
);

const VirtualForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const dateValue = watch("date");

  // Auto-fill date when the field is focused and empty
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
      setValue("date", formattedDate);
    }
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch("api/virtualshopform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("Failed to submit form");
        return;
      }

      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-4 md:p-8"
    >
      <input
        type="text"
        placeholder="Name"
        {...register("name", { required: true })}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-combination-100"
        disabled={isLoading}
      />
      {errors.name && <p className="text-red-500 text-sm">Name is required</p>}

      <input
        type="text"
        placeholder="Phone"
        {...register("phone", { required: true })}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-combination-100"
        disabled={isLoading}
      />
      {errors.phone && (
        <p className="text-red-500 text-sm">Phone is required</p>
      )}

      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-combination-100"
        disabled={isLoading}
      />
      {errors.email && (
        <p className="text-red-500 text-sm">Email is required</p>
      )}

      <label className="text-neutral-500 text-base font-medium">
        Choose your date*:
      </label>
      <input
        type="text"
        placeholder=""
        {...register("date", { required: true })}
        onFocus={handleDateFocus}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-combination-100"
        disabled={isLoading}
      />
      {errors.date && <p className="text-red-500 text-sm">Date is required</p>}

      <button
        type="submit"
        className="bg-combination-200 hover:bg-combination-100 hover:text-white text-white p-3 rounded-full md:w-40 mt-2 font-medium w-[140px] flex justify-center items-center space-x-2 disabled:opacity-70"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <LoadingSpinner />
            <span>Submitting...</span>
          </>
        ) : (
          "Submit"
        )}
      </button>

      {isSubmitSuccessful && !isLoading && (
        <p className="text-green-500 text-sm mt-2">
          Form submitted successfully!
        </p>
      )}
    </form>
  );
};

export default VirtualForm;
