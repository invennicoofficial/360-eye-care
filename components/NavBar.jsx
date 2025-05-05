"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { EyeCareLogo } from "../constants/Images";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
        {
          name: "360 Eyecare - The Beaches",
          link: "/toronto-beaches-optometrist",
        },
        {
          name: "360 Eyecare - Yorkville Rosedale",
          link: "/toronto-rosedale-optometrist",
        },
      ],
    },
    {
      name: "Eye Care",
      link: null,
      dropdown: [
        { name: "Eye Exams", link: "/eye-exams" },
        { name: "Dry Eye Clinic", link: "/dry-eye-syndrome-keratograph-i-pen" },
        {
          name: "IPL and RF Treatment",
          link: "/intense-pulsed-light-ipl-and-radio-frequency-rf-dry-eye-treatment/",
        },
        { name: "Myopia Control Clinic", link: "/myopia-control-clinic" },
        { name: "Orthokeratology", link: "/orthokeratology-treatment" },
        { name: "Pediatric Eye Exams", link: "/pediatric-eye-exams" },
        {
          name: "Advanced Diagnostics",
          link: "/advanced-diagnostics-eye-exams/",
        },
        { name: "Laser Vision Correction", link: "/laser-vision-correction" },
        { name: "Eye Emergencies", link: "/eye-emergencies" },
        { name: "Eye Conditions", link: "/common-eye-conditions" },
      ],
    },
    {
      name: "Eye Wear",
      link: null,
      dropdown: [
        { name: "Eyeglasses", link: "/eyeglasses" },
        { name: "Prescription Lenses", link: "/prescription-lenses" },
        { name: "Custom Contact Lenses", link: "/custom-lenses-toronto" },
        {
          name: "Integrum Eyewear",
          link: "https://integrumeyewear.com/",
          external: true,
        },
        { name: "MiyoSmart Lenses", link: "/miyosmart" },
        { name: "Virtual Shopping", link: "/virtual-shopping" },
        {
          name: "Eyeglasses Selection Guide",
          link: "/selection-guide",
        },
        {
          name: "Contact Lenses Toronto",
          link: "/contact-lenses-toronto",
        },
        {
          name: "Contact Lens Shop",
          link: "https://360eyecare.ottooptics.io/reorder/product/?cat=1",
          external: true,
        },
        { name: "Sunglasses", link: "/sunglasses" },
        { name: "Maui Jim Lens", link: "/maui-jim-lens-technology" },
        { name: "Custom Lenses", link: "/custom-lenses" },
      ],
    },
    {
      name: "Blog",
      link: "https://www.360eyecare.ca/blog/",
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
        { name: "Book An Eye Exam", link: "/book-eye-exam" },
        { name: "Eye Doctor Near Me", link: "/find-eye-doctor-near-me" },
        {
          name: "Request a Virtual Consultation",
          link: "/virtual-consult",
        },
        { name: "Address and Directions", link: "/contact-address-directions" },
        { name: "Direct Billing", link: "/direct-billing" },
        { name: "Payment Plans", link: "/payment-plans" },
      ],
    },
  ];

  // Check if current pathname matches any dropdown item's link
  const isActiveParent = (item) => {
    if (!item.dropdown) return false;
    return item.dropdown.some((subItem) => pathname === subItem.link);
  };

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
            <Link href="/" className="flex items-center">
              <div className="w-36">
                <Image
                  src={EyeCareLogo}
                  alt="Logo"
                  width={141.89}
                  height={70}
                />
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex justify-end">
            <ul className="flex space-x-6">
              {navItems.map((item, index) => {
                const isActive =
                  (item.link && pathname === item.link) || isActiveParent(item);

                return (
                  <li
                    key={index}
                    className="relative font-sans"
                    onMouseEnter={() => item.dropdown && toggleDropdown(index)}
                    onMouseLeave={closeDropdown}
                  >
                    {item.link ? (
                      <Link
                        href={item.link}
                        className={`px-4 py-2 inline-flex items-center text-base rounded-md font-bold transition-colors duration-200 ${
                          isActive
                            ? "text-brand-blue border-b-2 border-brand-blue" // Added border bottom for active item
                            : "text-combination-200"
                        } hover:text-combination-100 hover:bg-gray-50 ${
                          activeDropdown === index
                            ? "hover:text-combination-100 hover:bg-gray-50"
                            : "text-combination-200"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span
                        className={`px-4 py-2 inline-flex items-center text-base rounded-md font-bold transition-colors duration-200 `}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.name}
                      </span>
                    )}

                    {/* Dropdown Menu */}
                    {item.dropdown && activeDropdown === index && (
                      <div className="absolute left-0 mt-0 w-60 bg-white shadow-card rounded-b-md z-10 animate-fade-in">
                        <ul className="py-2 px-4">
                          {item.dropdown.map((subItem, subIndex) => {
                            const isSubItemActive = pathname === subItem.link;

                            return (
                              <li key={subIndex}>
                                {subItem.external ? (
                                  <a
                                    href={subItem.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`relative block px-4 py-3 text-sm transition-colors duration-150 hover:text-combination-100 group ${
                                      isSubItemActive
                                        ? "text-brand-blue font-medium bg-gray-50"
                                        : "text-neutral-700"
                                    }`}
                                  >
                                    {subItem.name}
                                    <span
                                      className={`absolute left-4 bottom-2 h-[2px] ${
                                        isSubItemActive
                                          ? "w-[calc(100%-2rem)] bg-combination-100"
                                          : "w-0 bg-combination-100 transition-all duration-300 group-hover:w-[calc(100%-2rem)]"
                                      }`}
                                    ></span>
                                  </a>
                                ) : (
                                  <Link
                                    href={subItem.link}
                                    className={`relative block px-4 py-3 text-sm transition-colors duration-150 hover:text-combination-100 group ${
                                      isSubItemActive
                                        ? "text-brand-blue font-medium bg-gray-50"
                                        : "text-neutral-700"
                                    }`}
                                    aria-current={
                                      isSubItemActive ? "page" : undefined
                                    }
                                  >
                                    {subItem.name}
                                    <span
                                      className={`absolute left-4 bottom-2 h-[2px] ${
                                        isSubItemActive
                                          ? "w-[calc(100%-2rem)] bg-combination-100"
                                          : "w-0 bg-combination-100 transition-all duration-300 group-hover:w-[calc(100%-2rem)]"
                                      }`}
                                    ></span>
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between h-16">
          {/* Mobile Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-24">
                <Image
                  src={EyeCareLogo}
                  alt="360 EyeCare Logo"
                  width={141.89}
                  height={70}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => toggleDropdown("mobile")}
            className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-brand-blue hover:bg-neutral-100 focus:outline-none transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {activeDropdown === "mobile" ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
                aria-hidden="true"
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
          <nav
            className="md:hidden animate-slide-up"
            aria-label="Mobile navigation"
          >
            <div className="pt-2 pb-4 border-t border-[2px] border-combination-100">
              {navItems.map((item, index) => {
                // Determine if this nav item is active (either direct match or parent of active dropdown)
                const isActive =
                  (item.link && pathname === item.link) || isActiveParent(item);

                return (
                  <div
                    key={index}
                    className={`border-b border-neutral-100 ${
                      isActive ? "bg-gray-50" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between px-4 py-3">
                      {item.link ? (
                        <Link
                          href={item.link}
                          className={`text-base font-medium ${
                            isActive ? "text-brand-blue" : "text-neutral-700"
                          }`}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {item.name}
                          {isActive && (
                            <span className="ml-2 w-2 h-2 rounded-full bg-brand-blue inline-block"></span>
                          )}
                        </Link>
                      ) : (
                        <span
                          className={`text-base font-medium ${
                            isActive ? "text-brand-blue" : "text-neutral-700"
                          }`}
                        >
                          {item.name}
                          {isActive && (
                            <span className="ml-2 w-2 h-2 rounded-full bg-brand-blue inline-block"></span>
                          )}
                        </span>
                      )}
                      {item.dropdown && (
                        <button
                          onClick={() => toggleDropdown(`mobile-${index}`)}
                          className="p-1 rounded-full hover:bg-neutral-100"
                          aria-expanded={activeDropdown === `mobile-${index}`}
                          aria-label={`Toggle ${item.name} submenu`}
                        >
                          <ChevronDown
                            size={20}
                            className={`transform transition-transform duration-200 ${
                              activeDropdown === `mobile-${index}`
                                ? "rotate-180 text-brand-blue"
                                : "text-neutral-500"
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Submenu */}
                    {item.dropdown && activeDropdown === `mobile-${index}` && (
                      <div className="bg-neutral-50 px-4 py-2 animate-fade-in">
                        {item.dropdown.map((subItem, subIndex) => {
                          // Check if this dropdown item is active
                          const isSubItemActive = pathname === subItem.link;

                          return subItem.external ? (
                            <a
                              key={subIndex}
                              href={subItem.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`relative block px-4 py-3 text-sm transition-colors duration-150 hover:text-combination-100 group ${
                                isSubItemActive
                                  ? "text-brand-blue font-medium bg-gray-100"
                                  : "text-neutral-700"
                              }`}
                            >
                              {subItem.name}
                              {isSubItemActive && (
                                <span className="ml-2 w-2 h-2 rounded-full bg-brand-blue inline-block"></span>
                              )}
                              <span
                                className={`absolute left-4 bottom-2 h-[2px] ${
                                  isSubItemActive
                                    ? "w-[calc(100%-2rem)] bg-combination-100"
                                    : "w-0 bg-combination-100 transition-all duration-300 group-hover:w-[calc(100%-2rem)]"
                                }`}
                              ></span>
                            </a>
                          ) : (
                            <Link
                              key={subIndex}
                              href={subItem.link}
                              className={`relative block px-4 py-3 text-sm transition-colors duration-150 hover:text-combination-100 group ${
                                isSubItemActive
                                  ? "text-brand-blue font-medium bg-gray-100"
                                  : "text-neutral-700"
                              }`}
                              aria-current={
                                isSubItemActive ? "page" : undefined
                              }
                            >
                              {subItem.name}
                              {isSubItemActive && (
                                <span className="ml-2 w-2 h-2 rounded-full bg-brand-blue inline-block"></span>
                              )}
                              <span
                                className={`absolute left-4 bottom-2 h-[2px] ${
                                  isSubItemActive
                                    ? "w-[calc(100%-2rem)] bg-combination-100"
                                    : "w-0 bg-combination-100 transition-all duration-300 group-hover:w-[calc(100%-2rem)]"
                                }`}
                              ></span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default NavBar;
