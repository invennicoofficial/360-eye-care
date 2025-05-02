"use client";
import { useState, useRef, useEffect } from "react";

const LocationSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const locations = [
    "Beaches (2199 Queen St. East)",
    "Rosedale (120 Bloor St. East, Unit 100B)",
  ];

  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setSearchTerm("");
    setIsOpen(false);
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

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Header - Clickable to toggle dropdown */}

      {/* Search Input */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          onClick={() => {
            if (!isOpen) setIsOpen(true);
          }}
          placeholder={selectedLocation || "Search locations..."}
          className="w-full p-4 border border-gray-300   focus:outline-none focus:ring-1 focus:ring-combination-100"
        />
      </div>

      {/* Blue Stripe Header when Dropdown is Open */}
      {isOpen && (
        <div className="bg-combination-200 p-4 text-white font-medium">
          Select Location
        </div>
      )}

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute w-full bg-white border border-gray-300 border-t-0 shadow-lg z-10">
          {filteredLocations.map((location, index) => (
            <div
              key={index}
              className="p-4 hover:bg-gray-100 cursor-pointer text-gray-600"
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

export default LocationSelect;
