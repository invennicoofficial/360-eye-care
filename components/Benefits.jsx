import React from "react";

const BenefitsGrid = ({ title, subtitle, benefits }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {title && subtitle && (
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-combination-200 mb-4">
            {title}
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-combination-100 mb-4"></div>
          </div>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="px-8 py-6 relative border-r border-gray-200 last:border-r-0"
          >
            {/* Only add bottom border for first row in mobile view */}
            <div
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gray-200 md:hidden ${
                index < 3 ? "block" : "hidden"
              }`}
            ></div>

            {/* Add right border dividers for desktop */}
            {index % 3 !== 2 && (
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-4/5 bg-gray-200"></div>
            )}

            {/* Add bottom border dividers for desktop between rows */}
            {index < 3 && (
              <div className="hidden md:block absolute bottom-0 left-0 w-full h-px bg-gray-200"></div>
            )}

            <div className="flex flex-row gap-14 items-start">
              <div className="w-[180px]">
                <div className="bg-gray-100 rounded-full p-4 mb-4 w-24 h-24 relative">
                  <div className="w-20 h-20 flex items-center justify-center border bg-white absolute top-1/2 left-1/2 ">
                    {benefit.icon}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-combination-200 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage with the laser vision correction benefits
const Benefits = ({ benefitsData, title, subtitle }) => {
  return (
    <BenefitsGrid title={title} subtitle={subtitle} benefits={benefitsData} />
  );
};

export default Benefits;
