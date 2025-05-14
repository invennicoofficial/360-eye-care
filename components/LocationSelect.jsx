"use client";
import { useState, useRef, useEffect } from "react";

const LocationSelect = ({ onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(value || "");
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const locations = [
    "Beaches (2199 Queen St. East)",
    "Rosedale (120 Bloor St. East, Unit 100B)",
  ];

  // Update selectedLocation when value prop changes
  useEffect(() => {
    if (value) {
      setSelectedLocation(value);
    }
  }, [value]);

  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setSearchTerm("");
    setIsOpen(false);

    // Call the onChange prop to update parent component
    if (onChange) {
      onChange(location);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Ignore clicks on the input field
      if (inputRef.current && inputRef.current.contains(event.target)) {
        return;
      }

      // Close if clicking outside the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle input focus and clear
  const handleInputFocus = () => {
    if (!isOpen) setIsOpen(true);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (!isOpen) setIsOpen(true);
  };

  const clearSelection = (e) => {
    e.stopPropagation();
    setSelectedLocation("");
    setSearchTerm("");
    if (onChange) {
      onChange("");
    }
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Search Input with Chevron */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onClick={handleInputFocus}
          onFocus={handleInputFocus}
          placeholder={selectedLocation || "Search locations..."}
          className="w-full bg-gray-100 border border-gray-300 px-4 py-4 pr-10 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-combination-100"
        />

        {/* Dropdown Chevron */}
        <div
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={toggleDropdown}
        >
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
          )}
        </div>

        {/* Clear button when a location is selected - positioned before chevron */}
        {/* {selectedLocation && !searchTerm && (
          <button
            type="button"
            onClick={clearSelection}
            className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear selection"
          >
            ✕
          </button>
        )} */}
      </div>

      {/* Blue Stripe Header when Dropdown is Open */}
      {isOpen && (
        <div className="bg-combination-200 p-4 text-white font-medium">
          Select Location
        </div>
      )}

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute w-full bg-white border border-gray-300 border-t-0 shadow-lg z-10 max-h-60 overflow-y-auto">
          {filteredLocations.map((location, index) => (
            <div
              key={index}
              className="p-4 hover:bg-[#0173A9] hover:text-white cursor-pointer text-gray-600"
              onClick={() => handleLocationSelect(location)}
            >
              {location}
            </div>
          ))}
          {filteredLocations.length === 0 && (
            <div className="p-4 text-gray-500">No locations found</div>
          )}
        </div>
      )}
    </div>
  );
};

// Chevron Icons
const ChevronDownIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
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
);

const ChevronUpIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
);

export default LocationSelect;
