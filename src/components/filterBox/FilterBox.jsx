import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function FilterBox() {
  const [activeTab, setActiveTab] = useState("cars");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(100000001);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setBrand("");
    setModel("");
    setMinPrice(1);
    setMaxPrice(100000001);
  };

  const brandModelMapping = {
    toyota: ["Allion", "Premio", "Corolla", "Axio"],
    bmw: ["X1", "X3", "X5", "3 Series", "5 Series"],
    honda: ["Civic", "City", "Accord"],
    ford: ["Fiesta", "Focus", "Mustang"],
    yamaha: ["R15", "MT-15", "FZ", "Fazer"],
    suzuki: ["Gixxer", "GSX-R", "Hayabusa"],
    volvo: ["FH", "FMX", "FM", "VNL"],
  };

  const modelsForSelectedBrand = brandModelMapping[brand] || [];

  const handleSearch = () => {
    alert(
      `Tab: ${activeTab.toUpperCase()}, Brand: ${brand}, Model: ${model}, Price: ${minPrice} - ${maxPrice}`
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-2 sm:p-4">
      {/* Tab Menu */}
      <div className="flex space-x-4 border-b border-gray-200 pb-1">
        {["cars", "bikes", "trucks"].map((tab) => (
          <button
            key={tab}
            className={`pb-1 text-[0.50rem] sm:text-xs font-semibold capitalize transition-colors duration-200 ${
              activeTab === tab
                ? "text-red-500 border-b-2 border-red-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filter Fields */}
      <div className="grid grid-cols-1 gap-2 mt-4">
        {/* Brand and Model in one row */}
        <div className="grid grid-cols-2 gap-2">
          {/* Brand */}
          <div className="flex flex-col">
            <label htmlFor="brand" className="text-[0.50rem] sm:text-xs text-gray-600 mb-1">
              BRAND
            </label>
            <select
              id="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 py-1 text-[0.50rem] sm:text-xs focus:outline-none focus:ring-1 focus:ring-red-500"
            >
              <option value="">All</option>
              {activeTab === "cars" && (
                <>
                  <option value="toyota">Toyota</option>
                  <option value="bmw">BMW</option>
                  <option value="honda">Honda</option>
                  <option value="ford">Ford</option>
                </>
              )}
              {activeTab === "bikes" && (
                <>
                  <option value="yamaha">Yamaha</option>
                  <option value="suzuki">Suzuki</option>
                  <option value="honda">Honda</option>
                </>
              )}
              {activeTab === "trucks" && (
                <>
                  <option value="volvo">Volvo</option>
                  <option value="ford">Ford</option>
                  <option value="toyota">Toyota</option>
                </>
              )}
            </select>
          </div>

          {/* Model */}
          <div className="flex flex-col">
            <label htmlFor="model" className="text-[0.50rem] sm:text-xs text-gray-600 mb-1">
              MODEL
            </label>
            <select
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 py-1 text-[0.50rem] sm:text-xs focus:outline-none focus:ring-1 focus:ring-red-500"
              disabled={!brand}
            >
              {!brand && <option value="">Select brand first</option>}
              {brand &&
                modelsForSelectedBrand.map((m) => (
                  <option value={m} key={m}>
                    {m}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Price Range */}
        <div className="flex flex-col">
          <p className="text-[0.50rem] sm:text-xs text-gray-600 mb-1">PRICE RANGE</p>
          <div className="flex items-center space-x-1">
            <span className="text-[0.50rem] sm:text-xs">From {minPrice.toLocaleString()}</span>
            <input
              type="range"
              min="1"
              max="100000001"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full"
            />
            <input
              type="range"
              min="1"
              max="100000001"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full"
            />
            <span className="text-[0.50rem] sm:text-xs">To {maxPrice.toLocaleString()}</span>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-end mt-2">
          <button
            onClick={handleSearch}
            className="flex items-center bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-[0.50rem] sm:text-xs font-semibold transition-colors duration-200"
          >
            <AiOutlineSearch className="mr-1" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterBox;