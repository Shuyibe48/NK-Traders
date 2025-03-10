import React from "react";

const ExclusiveSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Left Section */}
      <div className="bg-gray-100 p-6 flex flex-col justify-center items-start text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">EXCLUSIVE</h2>
        <p className="text-gray-600 mt-2">Browse our exclusive collection</p>
        <button className="mt-4 border border-red-500 text-red-500 px-4 py-2 text-sm md:text-base font-semibold hover:bg-red-500 hover:text-white transition">
          View Entire Collection
        </button>
        <img src="https://salsabeelcars.com/wp-content/themes/salsabeelcars/images/bentley_bentayga.jpg" alt="Bentayga" className="mt-4 w-full" />
      </div>

      {/* Right Section */}
      <div className="bg-red-600 p-6 flex flex-col justify-center items-start text-left text-white">
        <h2 className="text-2xl md:text-3xl font-bold">WEEKLY BUZZ</h2>
        <p className="mt-2">Get in touch with our Weekly Buzz</p>
        <button className="mt-4 border border-white text-white px-4 py-2 text-sm md:text-base font-semibold hover:bg-white hover:text-red-600 transition">
          View Stock
        </button>
        <img src="https://salsabeelcars.com/wp-content/themes/salsabeelcars/images/highlander.jpg" alt="Highlander Hybrid" className="mt-4 w-full" />
      </div>
    </div>
  );
};

export default ExclusiveSection;
