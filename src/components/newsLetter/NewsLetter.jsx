import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-gray-100 py-8 sm:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8">
            Stay updated with the latest news, offers, and exclusive content.
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <form className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-56 px-4 py-2 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-from-gray-100 focus:border-transparent outline-none"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-secondary text-white font-semibold px-5 py-2 rounded-lg hover:bg-gray-200 hover:text-black transition-colors duration-200 text-sm sm:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter 