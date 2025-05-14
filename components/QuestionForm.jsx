"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

const QuestionForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      dateOfBirth: "",
      message: "",
    },
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    error: null,
  });

  // reCAPTCHA
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  // handle reCAPTCHA
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const onSubmit = async (formData) => {
    // verify reCAPTCHA
    if (!captchaToken) {
      setStatus({
        submitting: false,
        success: false,
        error: "Please Verify that you are not a robot",
      });
      return;
    }
    try {
      setStatus({ submitting: true, success: null, error: null });

      const dataToSubmit = {
        ...formData,
        recaptchaToken: captchaToken,
      };
      const response = await fetch("/api/questionform", {
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
    <div className="w-full max-w-2xl mx-auto">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name Field */}
        <div className="flex flex-col gap-2">
          <label
            className="text-poppins font-[500] text-base text-[#28305F]"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            id="fullName"
            {...register("fullName", {
              required: "Full name is required",
            })}
            type="text"
            className="border border-[#E1E6EB] px-3 py-2 rounded-md placeholder:text-[#E1E6EB] placeholder:font-[400] w-full focus:outline-none focus:border-[#28305F]"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email and Phone Fields - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label
              className="text-poppins font-[500] text-base text-[#28305F]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please enter a valid email address",
                },
              })}
              type="email"
              id="email"
              className="border border-[#E1E6EB] px-3 py-2 rounded-md placeholder:text-[#E1E6EB] placeholder:font-[400] w-full focus:outline-none focus:border-[#28305F]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-poppins font-[500] text-base text-[#28305F]"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              {...register("phone", { required: "Phone Number is required" })}
              id="phone"
              type="tel"
              className="border border-[#E1E6EB] px-3 py-2 rounded-md placeholder:text-[#E1E6EB] placeholder:font-[400] w-full focus:outline-none focus:border-[#28305F]"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Date of Birth Field */}
        <div className="flex flex-col gap-2">
          <label
            className="text-poppins font-[500] text-base text-[#28305F]"
            htmlFor="dateOfBirth"
          >
            Date of Birth
          </label>
          <input
            {...register("dateOfBirth", {
              required: "Date of Birth is required",
            })}
            type="date"
            className="border border-[#E1E6EB] px-3 py-2 rounded-md placeholder:text-[#E1E6EB] placeholder:font-[400] w-full focus:outline-none focus:border-[#28305F]"
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-2">
          <label
            className="text-poppins font-[500] text-base text-[#28305F]"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            {...register("message", {
              required: "Message is Required",
            })}
            id="message"
            rows={4}
            className="border border-[#E1E6EB] px-3 py-2 rounded-md placeholder:text-[#E1E6EB] placeholder:font-[400] w-full focus:outline-none focus:border-[#28305F]"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* reCAPTCHA - Make it responsive */}
        <div className="w-full overflow-hidden">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
            size="normal"
          />
        </div>

        {!captchaToken && status.error && status.error.includes("robot") && (
          <p className="text-red-500 text-sm">
            Please verify that you are not a robot
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.submitting}
          className={`${
            status.submitting
              ? "bg-gray-400"
              : "bg-[#28305F] hover:bg-combination-100"
          } text-white font-medium text-lg px-6 py-3 rounded-md cursor-pointer w-full md:w-full md:self-start mt-2`}
        >
          {status.submitting ? "Submitting..." : "Submit"}
        </button>
        {status.success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
            {status.success}
          </div>
        )}

        {status.error && !status.error.includes("robot") && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {status.error}
          </div>
        )}
      </form>
    </div>
  );
};

export default QuestionForm;
