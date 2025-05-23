"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EyeCareLogo } from "../constants/Images";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../components/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/components/ui/collapsible";
import { cn } from "../components/lib/utils";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openCollapsible, setOpenCollapsible] = useState(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      link: "/about-us",
      dropdown: [
        { name: "About 360 Eyecare", link: "/about-us" },
        { name: "Our Optometrists", link: "/optometrists" },
        { name: "Giving Back", link: "/giving-back" },
        { name: "Career Opportunities", link: "/career-opportunities" },
      ],
    },
    {
      name: "Locations",
      link: "/toronto-beaches-optometrist",
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
      link: "/eye-exams",
      dropdown: [
        { name: "Eye Exams", link: "/eye-exams" },
        { name: "Dry Eye Clinic", link: "/dry-eye-syndrome-keratograph-i-pen" },
        {
          name: "IPL and RF Treatment",
          link: "/intense-pulsed-light-ipl-and-radio-frequency-rf-dry-eye-treatment",
        },
        { name: "Myopia Control Clinic", link: "/myopia-control-clinic" },
        { name: "Orthokeratology", link: "/orthokeratology-treatment" },
        { name: "Pediatric Eye Exams", link: "/pediatric-eye-exams" },
        {
          name: "Advanced Diagnostics",
          link: "/advanced-diagnostics-eye-exams",
        },
        { name: "Laser Vision Correction", link: "/laser-vision-correction" },
        { name: "Eye Emergencies", link: "/eye-emergencies" },
        { name: "Eye Conditions", link: "/common-eye-conditions" },
      ],
    },
    {
      name: "Eye Wear",
      link: "/eyeglasses",
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
      link: "/book-eye-exam",
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

  const isActiveParent = (item) => {
    if (!item.dropdown) return false;
    return item.dropdown.some((subItem) => pathname === subItem.link);
  };

  const toggleCollapsible = (index) => {
    setOpenCollapsible(openCollapsible === index ? null : index);
  };

  // Function to close the sheet
  const closeSheet = () => {
    setSheetOpen(false);
  };

  return (
    <div className="w-full !font-poppins bg-white shadow-sm border-b border-neutral-200 fixed z-50">
      <div
        className={`max-w-7xl mx-auto px-[15px] transition-all duration-300 ${
          isScrolled ? "py-0" : "py-5"
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between h-16">
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

          <nav className="flex-1 flex justify-end">
            <ul className="flex space-x-6">
              {navItems.map((item, index) => {
                const isActive =
                  (item.link && pathname === item.link) || isActiveParent(item);

                return (
                  <li
                    key={index}
                    className="relative font-poppins"
                    onMouseEnter={() =>
                      item.dropdown && toggleCollapsible(index)
                    }
                    onMouseLeave={() => setOpenCollapsible(null)}
                  >
                    {item.link ? (
                      <Link
                        href={item.link}
                        className={`font-poppins px-4 py-2 inline-flex items-center text-base rounded-md font-bold transition-colors duration-200 ${
                          isActive
                            ? "text-combination-100"
                            : "text-combination-200"
                        } hover:text-combination-100 hover:bg-gray-50 `}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span
                        className={`font-poppins px-4 py-2 inline-flex items-center text-base rounded-md font-bold transition-colors duration-200 text-combination-200`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.name}
                      </span>
                    )}

                    {item.dropdown && openCollapsible === index && (
                      <div
                        className={`absolute mt-0 w-60 bg-white rounded-b-md z-10 animate-fade-in ${
                          index === navItems.length - 1 ? "right-0" : "left-0"
                        } `}
                      >
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
        <div className="md:hidden flex items-center justify-between h-16 z-50">
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

          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-brand-blue hover:bg-neutral-100 focus:outline-none transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[375px] h-[616px] min-h-screen border-t-4 border-combination-100 overflow-scroll p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <Link
                  href="/"
                  onClick={closeSheet}
                  className="flex items-center"
                >
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
                <SheetClose asChild>
                  <button
                    className="p-2 rounded-md text-neutral-700 hover:text-brand-blue hover:bg-neutral-100"
                    aria-label="Close mobile menu"
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => {
                  const isActive =
                    (item.link && pathname === item.link) ||
                    isActiveParent(item);

                  return (
                    <div key={index}>
                      {item.dropdown ? (
                        <Collapsible
                          open={openCollapsible === index}
                          onOpenChange={() => toggleCollapsible(index)}
                        >
                          <CollapsibleTrigger asChild>
                            <button
                              className={cn(
                                "flex w-full items-center justify-between px-4 py-3 text-base font-medium text-left",
                                isActive
                                  ? "text-brand-blue"
                                  : "text-neutral-700"
                              )}
                              aria-expanded={openCollapsible === index}
                            >
                              <span
                                className={cn(
                                  "",
                                  isActive && "text-combination-200"
                                )}
                              >
                                {item.name}
                              </span>
                              <ChevronDown
                                size={20}
                                className={cn(
                                  "transform transition-transform duration-200",
                                  openCollapsible === index
                                    ? "rotate-180 text-brand-blue"
                                    : "text-neutral-500"
                                )}
                                aria-hidden="true"
                              />
                            </button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="bg-neutral-50 px-4 py-2">
                            {item.dropdown.map((subItem, subIndex) => {
                              const isSubItemActive = pathname === subItem.link;

                              return subItem.external ? (
                                <a
                                  key={subIndex}
                                  href={subItem.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={closeSheet}
                                  className={cn(
                                    "relative block px-4 py-3 text-sm transition-colors duration-150 hover:text-combination-100 group",
                                    isSubItemActive
                                      ? "text-brand-blue font-medium bg-gray-100"
                                      : "text-neutral-700"
                                  )}
                                >
                                  {subItem.name}

                                  <span
                                    className={cn(
                                      "absolute left-4 bottom-2 h-[2px]",
                                      isSubItemActive
                                        ? "w-[calc(100%-2rem)] bg-combination-100"
                                        : "w-0 bg-combination-100 transition-all duration-300 group-hover:w-[calc(100%-2rem)]"
                                    )}
                                  ></span>
                                </a>
                              ) : (
                                <SheetClose asChild>
                                  <Link
                                    key={subIndex}
                                    href={subItem.link}
                                    className={cn(
                                      "relative block px-4 py-3 text-sm transition-colors duration-150 hover:text-combination-100 group",
                                      isSubItemActive
                                        ? "text-brand-blue font-medium font-poppins bg-gray-100"
                                        : "text-neutral-700"
                                    )}
                                    aria-current={
                                      isSubItemActive ? "page" : undefined
                                    }
                                  >
                                    {subItem.name}

                                    <span
                                      className={cn(
                                        "absolute left-4 bottom-2 h-[2px]",
                                        isSubItemActive
                                          ? "w-[calc(100%-2rem)] bg-combination-100"
                                          : "w-0 bg-combination-100 transition-all duration-300 group-hover:w-[calc(100%-2rem)]"
                                      )}
                                    ></span>
                                  </Link>
                                </SheetClose>
                              );
                            })}
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <SheetClose asChild>
                          <Link
                            href={item.link}
                            className={cn(
                              "px-4 py-3 text-base font-poppins font-medium block ",
                              isActive ? "text-brand-blue" : "text-neutral-700"
                            )}
                            aria-current={isActive ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        </SheetClose>
                      )}
                    </div>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
