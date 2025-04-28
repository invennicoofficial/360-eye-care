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

const Footer = () => {
  return (
    <footer
      className="text-[#ffffff99] w-full relative pt-12 px-4 md:px-0"
      style={{
        backgroundImage: 'url("/footer-bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute top-0 inset-0 bg-[#334F72] opacity-[90%]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-8 mt-8 mb-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-start">
            <div className="mb-4 bg-white p-2 inline-block">
              <Image
                src="/360Logo.webp"
                alt="360 EyeCare Logo"
                width={120}
                height={60}
                className="w-auto h-auto"
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
              <FaMapMarkerAlt className="text-teal-400 mr-3 mt-1" size={18} />
              <p className="text-base">
                2199 Queen Street East,
                <br />
                Toronto, ON M4E 1E5
              </p>
            </div>

            <div className="mb-4 flex items-center">
              <FaPhone className="text-teal-400 mr-3" size={18} />
              <p className="text-base">Phone: 416-698-3937</p>
            </div>

            <div className="mb-4 flex items-center">
              <FaFax className="text-teal-400 mr-3" size={18} />
              <p className="text-base">Fax: 416-698-1161</p>
            </div>

            <div className="mb-6 flex items-center">
              <FaEnvelope className="text-teal-400 mr-3" size={18} />
              <p className="text-base">beaches@360eyecare.ca</p>
            </div>

            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/360eyecare.Beaches/"
                className="text-white hover:text-teal-400"
              >
                <FaFacebookF size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/360eyecare/"
                className="text-white hover:text-teal-400"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://x.com/360eyecare"
                className="text-white hover:text-teal-400"
              >
                <FaTwitter size={24} />
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
              <FaMapMarkerAlt className="text-teal-400 mr-3 mt-1" size={18} />
              <p className="text-base">
                Concourse level
                <br />
                55 Bloor St W Suite 03,
                <br />
                Toronto, ON M4W 1A5, Canada
              </p>
            </div>

            <div className="mb-4 flex items-center">
              <FaPhone className="text-teal-400 mr-3" size={18} />
              <p className="text-base">Phone: 416-901-2725</p>
            </div>

            <div className="mb-4 flex items-center">
              <FaFax className="text-teal-400 mr-3" size={18} />
              <p className="text-base">Fax: 416-901-2727</p>
            </div>

            <div className="mb-6 flex items-center">
              <FaEnvelope className="text-teal-400 mr-3" size={18} />
              <p className="text-base">yorkville@360eyecare.ca</p>
            </div>

            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/360eyecare.yorkville/"
                className="text-white hover:text-teal-400"
              >
                <FaFacebookF size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/360eyecare_yorkville/"
                className="text-white hover:text-teal-400"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://x.com/360eyecare"
                className="text-white hover:text-teal-400"
              >
                <FaTwitter size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <div className="h-1 w-16 bg-teal-400 mb-4"></div>

            <div className="flex flex-col space-y-3 text-base">
              <Link href="/terms" className="hover:text-teal-400">
                Terms of Service & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-teal-400">
                Privacy Policy
              </Link>
              <Link href="/shipping" className="hover:text-teal-400">
                Shipping & Return Policy
              </Link>
              <Link href="/dry-eye-shop" className="hover:text-teal-400">
                Dry Eye Product Shop
              </Link>
              <Link href="/contact-lens-shop" className="hover:text-teal-400">
                Contact Lens Shop
              </Link>
              <Link href="/integrum-eyewear" className="hover:text-teal-400">
                Integrum Eyewear
              </Link>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Our Online Shop Accepts:
              </h3>
              <div className="h-1 w-16 bg-teal-400 mb-4"></div>

              <div className="flex flex-wrap gap-4">
                <Image
                  src="/payments.webp"
                  alt="Payment Methods"
                  width={280}
                  height={40}
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

      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-combination-100 text-white p-3 rounded-full hover:bg-combination-200 focus:outline-none"
          aria-label="Scroll to top"
        >
          <FaChevronUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
