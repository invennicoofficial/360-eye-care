"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { EyeCareLogo } from "../constants/Images";
const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // adjust threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "/",
      dropdown: null,
    },
    {
      name: "Our Team",
      link: null,
      dropdown: [
        { name: "About 360 Eyecare", link: "/about-us" },
        { name: "Our Optometrists", link: "/optometrists" },
        { name: "Giving Back", link: "/giving-back" },
        { name: "Career Opportunities", link: "/career-opportunities" },
      ],
    },
    {
      name: "Locations",
      link: null,
      dropdown: [
        { name: "360 Eyecare - The Beaches", link: "/locations/beaches" },
        {
          name: "360 Eyecare - Yorkville Rosedale",
          link: "/locations/yorkville-rosedale",
        },
      ],
    },
    {
      name: "Eye Care",
      link: null,
      dropdown: [
        { name: "Eye Exams", link: "/eye-care/exams" },
        { name: "Dry Eye Clinic", link: "/eye-care/dry-eye" },
        { name: "IPL and RF Treatment", link: "/eye-care/ipl-rf" },
        { name: "Myopia Control Clinic", link: "/eye-care/myopia" },
        { name: "Orthokeratology", link: "/eye-care/orthokeratology" },
        { name: "Pediatric Eye Exams", link: "/eye-care/pediatric" },
        { name: "Advanced Diagnostics", link: "/eye-care/diagnostics" },
        { name: "Laser Vision Correction", link: "/eye-care/laser" },
        { name: "Eye Emergencies", link: "/eye-care/emergencies" },
        { name: "Eye Conditions", link: "/eye-care/conditions" },
      ],
    },
    {
      name: "Eye Wear",
      link: null,
      dropdown: [
        { name: "Eyeglasses", link: "/eye-wear/glasses" },
        { name: "Prescription Lenses", link: "/eye-wear/prescription-lenses" },
        { name: "Custom Contact Lenses", link: "/eye-wear/contact-lenses" },
        { name: "Integrum Eyewear", link: "/eye-wear/integrum" },
        { name: "MiyoSmart Lenses", link: "/eye-wear/miyosmart" },
        { name: "Virtual Shopping", link: "/eye-wear/virtual-shopping" },
        {
          name: "Eyeglasses Selection Guide",
          link: "/eye-wear/selection-guide",
        },
        {
          name: "Contact Lenses Toronto",
          link: "/eye-wear/contact-lenses-toronto",
        },
        { name: "Contact Lens Shop", link: "/eye-wear/contact-shop" },
        { name: "Sunglasses", link: "/eye-wear/sunglasses" },
        { name: "Maui Jim Lens", link: "/eye-wear/maui-jim" },
        { name: "Custom Lenses", link: "/eye-wear/custom-lenses" },
      ],
    },
    {
      name: "Blog",
      link: "/blog",
      dropdown: null,
    },
    {
      name: "Shop",
      link: "/shop",
      dropdown: null,
    },
    {
      name: "Contact",
      link: null,
      dropdown: [
        { name: "Book An Eye Exam", link: "/contact/book-exam" },
        { name: "Eye Doctor Near Me", link: "/contact/find-doctor" },
        {
          name: "Request a Virtual Consultation",
          link: "/contact/virtual-consultation",
        },
        { name: "Address and Directions", link: "/contact/directions" },
        { name: "Direct Billing", link: "/contact/billing" },
        { name: "Payment Plans", link: "/contact/payment-plans" },
      ],
    },
  ];

  // Logic to toggle dropdown visibility
  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  // Close dropdown when clicking outside
  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="w-full bg-white shadow-sm border-b border-neutral-200 fixed z-50">
      <div
        className={`max-w-7xl mx-auto px-[15px] transition-all duration-300 ${
          isScrolled ? "py-0" : "py-5"
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="w-36">
                <Image
                  src={EyeCareLogo}
                  alt="Logo"
                  width={141.89}
                  height={70}
                />
              </div>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className=" flex-1 flex justify-end">
            <ul className="  flex space-x-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative font-sans "
                  onMouseEnter={() => item.dropdown && toggleDropdown(index)}
                  onMouseLeave={closeDropdown}
                >
                  <a
                    href={item.link}
                    className={`px-4 py-2 inline-flex items-center text-base rounded-md font-bold transition-colors duration-200 text-combination-200 hover:text-combination-100 hover:bg-gray-50 ${
                      activeDropdown === index
                        ? "hover:text-combination-100 hover:bg-gray-50"
                        : "text-combination-200"
                    }`}
                  >
                    {item.name}
                  </a>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === index && (
                    <div className="absolute  left-0 mt-0 w-60 bg-white shadow-card rounded-b-md z-10 animate-fade-in">
                      <ul className="py-2 px-4 ">
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.link}
                              className="relative  block px-4 py-3 text-sm text-neutral-700 transition-colors duration-150 hover:text-combination-100 group"
                            >
                              {subItem.name}
                              <span className="absolute left-4 bottom-2 h-[2px] w-0 bg-combination-100 transition-all duration-300 group-hover:w-[calc(100%-2rem)]"></span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between h-16">
          {/* Mobile Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="w-24">
                <Image
                  src={EyeCareLogo}
                  alt="Logo"
                  width={141.89}
                  height={70}
                />
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => toggleDropdown("mobile")}
            className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-brand-blue hover:bg-neutral-100 focus:outline-none transition-colors duration-200"
          >
            {activeDropdown === "mobile" ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {activeDropdown === "mobile" && (
          <div className="md:hidden animate-slide-up">
            <div className="pt-2 pb-4 border-t border-[2px] border-combination-100">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-neutral-100">
                  <div className="flex items-center justify-between px-4 py-3">
                    <a
                      href={item.link}
                      className={`text-base font-medium ${
                        activeDropdown === `mobile-${index}`
                          ? "text-brand-blue"
                          : "text-neutral-700"
                      }`}
                    >
                      {item.name}
                    </a>
                    {item.dropdown && (
                      <button
                        onClick={() => toggleDropdown(`mobile-${index}`)}
                        className="p-1 rounded-full hover:bg-neutral-100"
                      >
                        <ChevronDown
                          size={20}
                          className={`transform transition-transform duration-200 ${
                            activeDropdown === `mobile-${index}`
                              ? "rotate-180 text-brand-blue"
                              : "text-neutral-500"
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {item.dropdown && activeDropdown === `mobile-${index}` && (
                    <div className="bg-neutral-50 px-4 py-2 animate-fade-in">
                      {item.dropdown.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.link}
                          className="block py-3 pl-4 border-l-2 border-neutral-200 text-sm text-neutral-600 hover:text-brand-blue hover:border-brand-blue transition-colors duration-150"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
