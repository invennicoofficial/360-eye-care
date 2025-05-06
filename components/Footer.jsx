"use client";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaFax,
  FaEnvelope,
  FaChevronUp,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Show scroll button only when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-[#ffffff99] w-full relative pt-12 px-4 md:px-0 min-h-[300px]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/footer-bg.jpg"
          alt="Footer background"
          fill
          quality={60}
          priority={false}
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#334F72] opacity-80 visibility-hidden z-10 pointer-events-none transition-opacity duration-300"
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto relative z-20 text-white font-medium">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-8 mt-8 mb-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-start">
            <div className="mb-4 bg-white p-2 inline-block">
              <Image
                src="/360Logo.webp"
                alt="360 EyeCare Logo"
                width={120}
                height={60}
                quality={90}
                priority
              />
            </div>
            <p className="mb-6 text-base">
              Focused on your vision - Providing you with complete optometric
              services in Toronto.
            </p>
          </div>

          {/* Beaches Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Beaches, Toronto
            </h3>
            <div className="h-1 w-16 bg-teal-400 mb-4"></div>

            <div className="mb-4 flex items-start">
              <FaMapMarkerAlt
                className="text-combination-100 mr-3 mt-1"
                size={18}
                aria-hidden="true"
              />
              <address className="text-base not-italic">
                2199 Queen Street East,
                <br />
                Toronto, ON M4E 1E5
              </address>
            </div>

            <div className="mb-4 flex items-center">
              <FaPhone
                className="text-combination-100 mr-3"
                size={18}
                aria-hidden="true"
              />
              <p className="text-base">
                <span className="sr-only">Phone:</span>
                <a href="tel:4166983937" className="hover:text-combination-100">
                  416-698-3937
                </a>
              </p>
            </div>

            <div className="mb-4 flex items-center">
              <FaFax
                className="text-combination-100 mr-3"
                size={18}
                aria-hidden="true"
              />
              <p className="text-base">
                <span className="sr-only">Fax:</span>
                416-698-1161
              </p>
            </div>

            <div className="mb-6 flex items-center">
              <FaEnvelope
                className="text-combination-100 mr-3"
                size={18}
                aria-hidden="true"
              />
              <p className="text-base">
                <span className="sr-only">Email:</span>
                <a
                  href="mailto:beaches@360eyecare.ca"
                  className="hover:text-combination-100"
                >
                  beaches@360eyecare.ca
                </a>
              </p>
            </div>

            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/360eyecare.Beaches/"
                className="text-white hover:text-combination-100"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={24} aria-hidden="true" />
              </Link>
              <Link
                href="https://www.instagram.com/360eyecare/"
                className="text-white hover:text-combination-100"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} aria-hidden="true" />
              </Link>
              <Link
                href="https://x.com/360eyecare"
                className="text-white hover:text-combination-100"
                aria-label="X (formerly Twitter)"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Yorkville Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Yorkville Rosedale, Toronto
            </h3>
            <div className="h-1 w-16 bg-teal-400 mb-4"></div>

            <div className="mb-4 flex items-start">
              <FaMapMarkerAlt
                className="text-combination-100 mr-3 mt-1"
                size={18}
                aria-hidden="true"
              />
              <address className="text-base not-italic">
                Concourse level
                <br />
                55 Bloor St W Suite 03,
                <br />
                Toronto, ON M4W 1A5, Canada
              </address>
            </div>

            <div className="mb-4 flex items-center">
              <FaPhone
                className="text-combination-100 mr-3"
                size={18}
                aria-hidden="true"
              />
              <p className="text-base">
                <span className="sr-only">Phone:</span>
                <a href="tel:4169012725" className="hover:text-combination-100">
                  416-901-2725
                </a>
              </p>
            </div>

            <div className="mb-4 flex items-center">
              <FaFax
                className="text-combination-100 mr-3"
                size={18}
                aria-hidden="true"
              />
              <p className="text-base">
                <span className="sr-only">Fax:</span>
                416-901-2727
              </p>
            </div>

            <div className="mb-6 flex items-center">
              <FaEnvelope
                className="text-combination-100 mr-3"
                size={18}
                aria-hidden="true"
              />
              <p className="text-base">
                <span className="sr-only">Email:</span>
                <a
                  href="mailto:yorkville@360eyecare.ca"
                  className="hover:text-combination-100"
                >
                  yorkville@360eyecare.ca
                </a>
              </p>
            </div>

            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/360eyecare.yorkville/"
                className="text-white hover:text-combination-100"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={24} aria-hidden="true" />
              </Link>
              <Link
                href="https://www.instagram.com/360eyecare_yorkville/"
                className="text-white hover:text-combination-100"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} aria-hidden="true" />
              </Link>
              <Link
                href="https://x.com/360eyecare"
                className="text-white hover:text-combination-100"
                aria-label="X (formerly Twitter)"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <div className="h-1 w-16 bg-teal-400 mb-4"></div>

            <nav aria-label="Footer Navigation">
              <ul className="flex flex-col space-y-3 text-base list-none p-0">
                <li>
                  <Link href="/terms" className="hover:text-combination-100">
                    Terms of Service & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-combination-100">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-combination-100">
                    Shipping & Return Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dry-eye-shop"
                    className="hover:text-combination-100"
                  >
                    Dry Eye Product Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-lens-shop"
                    className="hover:text-combination-100"
                  >
                    Contact Lens Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/integrum-eyewear"
                    className="hover:text-combination-100"
                  >
                    Integrum Eyewear
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Our Online Shop Accepts:
              </h3>
              <div className="h-1 w-16 bg-teal-400 mb-4"></div>

              <div className="flex flex-wrap gap-4">
                <Image
                  src="/payments.webp"
                  alt="Payment methods including credit cards and digital payment options"
                  width={280}
                  height={40}
                  quality={75}
                  loading="lazy"
                  className="bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 text-center text-sm font-[400]">
          Copyright © 2025
          <Link href={"/"} className="text-white hover:text-combination-100">
            {" "}
            360 EyeCare
          </Link>
          . All rights reserved.
        </div>
      </div>

      {/* Scroll to top button - conditionally rendered */}
      {showScrollButton && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={scrollToTop}
            className="bg-combination-100 text-white p-3 rounded-full hover:bg-combination-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
            aria-label="Scroll to top"
          >
            <FaChevronUp size={18} aria-hidden="true" />
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
