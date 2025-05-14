"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import LocationSelect from "./LocationSelect";
import Image from "next/image";

const FormSection = ({ css }) => {
  // React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      dob: "",
      message: "",
      promoCode: "",
      location: "",
    },
  });

  // Watch the location field to pass to LocationSelect
  const currentLocation = watch("location");

  // Submission status
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    error: null,
  });

  // reCAPTCHA state
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  // Handle location selection from LocationSelect component
  const handleLocationChange = (location) => {
    setValue("location", location);
  };

  // Handle reCAPTCHA verification
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  // Form submission handler
  const onSubmit = async (formData) => {
    // Verify reCAPTCHA
    if (!captchaToken) {
      setStatus({
        submitting: false,
        success: false,
        error: "Please verify that you are not a robot",
      });
      return;
    }

    try {
      setStatus({ submitting: true, success: null, error: null });

      // Add captcha token to form data
      const dataToSubmit = {
        ...formData,
        recaptchaToken: captchaToken,
      };

      const response = await fetch("/api/contactform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Reset form on success
      reset();
      recaptchaRef.current.reset();
      setCaptchaToken(null);

      setStatus({
        submitting: false,
        success: "Thank you! Your message has been sent successfully.",
        error: null,
      });
    } catch (error) {
      setStatus({
        submitting: false,
        success: null,
        error:
          error.message ||
          "Failed to send the message. Please try again later.",
      });
    }
  };

  return (
    <form
      className={`flex flex-col gap-4   w-full ${css}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Hidden input for location to register with react-hook-form */}
      <input type="hidden" {...register("location")} />

      <div className="w-full">
        <LocationSelect
          onChange={handleLocationChange}
          value={currentLocation}
        />
        {errors.location && (
          <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
        )}
      </div>

      <div className="w-full">
        <input
          {...register("name", {
            required: "Name is required",
          })}
          className="w-full bg-gray-50 border border-gray-300 px-4 py-4 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-combination-100"
          placeholder="*Name:"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="w-full">
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email address",
            },
          })}
          type="email"
          className="w-full bg-gray-50 border border-gray-300 px-4 py-4 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-combination-100"
          placeholder="*Email:"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="w-full">
        <input
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9+\-\s()]+$/,
              message: "Please enter a valid phone number",
            },
          })}
          className="w-full bg-gray-50 border border-gray-300 px-4 py-4 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-combination-100"
          placeholder="*Phone Number:"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div className="w-full">
        <input
          {...register("dob")}
          type="date"
          className="w-full bg-gray-50 border border-gray-300 px-4 py-4 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-combination-100"
          placeholder="Date of Birth"
        />
      </div>

      <div className="w-full">
        <textarea
          {...register("message")}
          className="w-full bg-gray-50 border border-gray-300 px-4 py-4 rounded resize-none text-gray-700 focus:outline-none focus:ring-1 focus:ring-combination-100"
          placeholder="Message:"
          rows={4}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="promoCode" className="block text-gray-700 mb-2">
          Enter Promo Code here if you have one:
        </label>
        <input
          id="promoCode"
          {...register("promoCode")}
          className="w-full bg-gray-50 border border-gray-300 px-4 py-4 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-combination-100"
        />
      </div>

      <div className="mt-6">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={handleCaptchaChange}
        />
        {!captchaToken && status.error && status.error.includes("robot") && (
          <p className="text-red-500 text-sm mt-1">
            Please verify that you are not a robot
          </p>
        )}
      </div>

      {/* Display status messages */}
      {status.error && (
        <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-md">
          {status.error}
        </div>
      )}

      {status.success && (
        <div className="mt-4 p-4 bg-green-50 text-green-600 rounded-md">
          {status.success}
        </div>
      )}

      <div className="flex mt-8">
        <button
          type="submit"
          disabled={status.submitting}
          className={`${
            status.submitting
              ? "bg-gray-400"
              : "bg-combination-200 hover:bg-combination-100"
          } text-white font-medium text-lg px-12 py-3 rounded-full cursor-pointer`}
        >
          {status.submitting ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
};

export default FormSection;
