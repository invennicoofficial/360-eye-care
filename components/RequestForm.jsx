"use client";
import { VirtualConsultImage } from "constants/Images";
import Image from "next/image";
import { useState } from "react";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    preferredDate: "",
    preferredTime: "",
    reasonForVisit: "",
    consentAgreed: false,
  });

  const [errors, setErrors] = useState({});
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error when user starts typing in a field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Check required fields
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Preferred date is required";
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = "Preferred time is required";
    }

    if (!formData.reasonForVisit.trim()) {
      newErrors.reasonForVisit = "Reason for visit is required";
    }

    if (!formData.consentAgreed) {
      newErrors.consentAgreed = "You must agree to the terms";
    }

    setErrors(newErrors);

    // Form is valid if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Data:", formData);
      // Here you would typically send the data to a server
      alert("Form submitted successfully!");
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-start max-w-7xl my-10 gap-6 mx-auto p-4 ">
      <div className="md:w-2/3 pr-4">
        <div className="mb-6 text-gray-600">
          <p className="text-neutral-500 text-base font-medium">
            Please make yourself familiar with the Virtual Consult FAQ found
            below the form. Fill out the form to request a tele-optometry
            appointment with one of our Optometrists. If you have any questions
            please indicate them in the Reason for Visit field below.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2">
              <label htmlFor="firstName" className="block text-gray-600 mb-1">
                First Name*:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } p-2 rounded focus:outline-none focus:border-combination-100`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div className="md:w-1/2">
              <label htmlFor="lastName" className="block text-gray-600 mb-1">
                Last Name*:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } p-2 rounded focus:outline-none focus:border-combination-100`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2">
              <label htmlFor="email" className="block text-gray-600 mb-1">
                Email*:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } p-2 rounded focus:outline-none focus:border-combination-100`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="md:w-1/2">
              <label htmlFor="phoneNumber" className="block text-gray-600 mb-1">
                Phone Number*:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={`w-full border ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                } p-2 rounded focus:outline-none focus:border-combination-100`}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/3">
              <label htmlFor="dateOfBirth" className="block text-gray-600 mb-1">
                Your Date of Birth:
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  placeholder="dd/mm/yyyy"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-combination-100"
                />
              </div>
            </div>
            <div className="md:w-1/3">
              <label
                htmlFor="preferredDate"
                className="block text-gray-600 mb-1"
              >
                Your Preferred Date*:
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  placeholder="dd/mm/yyyy"
                  className={`w-full border ${
                    errors.preferredDate ? "border-red-500" : "border-gray-300"
                  } p-2 rounded focus:outline-none focus:border-combination-100`}
                />
                {errors.preferredDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.preferredDate}
                  </p>
                )}
              </div>
            </div>
            <div className="md:w-1/3">
              <label
                htmlFor="preferredTime"
                className="block text-gray-600 mb-1"
              >
                Your Preferred Time*:
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowTimeDropdown(!showTimeDropdown)}
                  className={`w-full border ${
                    errors.preferredTime ? "border-red-500" : "border-gray-300"
                  } p-2 rounded text-left flex justify-between items-center bg-white`}
                >
                  <span>
                    {formData.preferredTime || "—Please choose an option—"}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {errors.preferredTime && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.preferredTime}
                  </p>
                )}
                {showTimeDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
                    <div className="p-2 bg-combination-200 text-white">
                      —Please choose an option—
                    </div>
                    <div
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setFormData({ ...formData, preferredTime: "Morning" });
                        setShowTimeDropdown(false);
                        setErrors({ ...errors, preferredTime: "" });
                      }}
                    >
                      Morning
                    </div>
                    <div
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          preferredTime: "Afternoon",
                        });
                        setShowTimeDropdown(false);
                        setErrors({ ...errors, preferredTime: "" });
                      }}
                    >
                      Afternoon
                    </div>
                    <div
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setFormData({ ...formData, preferredTime: "Evening" });
                        setShowTimeDropdown(false);
                        setErrors({ ...errors, preferredTime: "" });
                      }}
                    >
                      Evening
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="reasonForVisit"
              className="block text-gray-600 mb-1"
            >
              Reason for Visit*:
            </label>
            <textarea
              id="reasonForVisit"
              name="reasonForVisit"
              value={formData.reasonForVisit}
              onChange={handleInputChange}
              rows={6}
              className={`w-full border ${
                errors.reasonForVisit ? "border-red-500" : "border-gray-300"
              } p-2 rounded focus:outline-none focus:border-combination-100`}
            ></textarea>
            {errors.reasonForVisit && (
              <p className="text-red-500 text-sm mt-1">
                {errors.reasonForVisit}
              </p>
            )}
          </div>

          <div className="pt-4">
            <button
              onClick={handleSubmit}
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-full tracking-wider"
            >
              Submit
            </button>
          </div>

          <div className="mt-2">
            <label
              className={`flex items-start focus:outline-none focus:border-combination-100 ${
                errors.consentAgreed ? "text-red-500" : ""
              }`}
            >
              <input
                type="checkbox"
                name="consentAgreed"
                checked={formData.consentAgreed}
                onChange={handleInputChange}
                className={`mt-1 mr-2 ${
                  errors.consentAgreed ? "border-red-500" : ""
                }`}
              />
              <span className="font-bold text-base text-neutral-500">
                By clicking this box I acknowledge that I have read and
                understood the{" "}
                <a
                  href="/virtual-consult-consent-form"
                  className="text-combination-200 hover:text-combination-100 underline"
                >
                  Virtual Consult Consent Form
                </a>{" "}
                and agree to the terms of it.*
              </span>
            </label>
            {errors.consentAgreed && (
              <p className="text-red-500 text-sm mt-1">
                {errors.consentAgreed}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="md:w-1/3 mt-6 md:mt-0">
        <Image
          src={VirtualConsultImage}
          width={380}
          height={549}
          alt="Optometrist with eye test equipment"
          className="w-[380px] h-[549px] object-contain"
        />
      </div>
    </div>
  );
};

export default RequestForm;
