import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const brandModelMapping = {
  toyota: ["Allion", "Premio", "Corolla", "Axio"],
  bmw: ["X1", "X3", "X5", "3 Series", "5 Series"],
  honda: ["Civic", "City", "Accord"],
  ford: ["Fiesta", "Focus", "Mustang"],
  yamaha: ["R15", "MT-15", "FZ", "Fazer"],
  suzuki: ["Gixxer", "GSX-R", "Hayabusa"],
  volvo: ["FH", "FMX", "FM", "VNL"],
};

const FilterBox = () => {
  const [activeTab, setActiveTab] = useState("cars");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(1000000);

  const modelsForSelectedBrand = brandModelMapping[brand] || [];

  const handleSearch = () => {
    alert(
      `Tab: ${activeTab.toUpperCase()}, Brand: ${brand}, Model: ${model}, Price: ${minPrice} - ${maxPrice}`
    );
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4 border border-gray-200">
      <div className="flex justify-center gap-4">
        {["cars", "bikes", "trucks"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 
              ${activeTab === tab ? "bg-red-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {/* Brand */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Brand</label>
          <select
            className="w-full p-2 border rounded-md focus:ring focus:ring-red-300"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">Select a brand</option>
            {Object.keys(brandModelMapping).map((b) => (
              <option key={b} value={b}>{b.toUpperCase()}</option>
            ))}
          </select>
        </div>

        {/* Model */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Model</label>
          <select
            className="w-full p-2 border rounded-md focus:ring focus:ring-red-300"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            disabled={!brand}
          >
            <option value="">{brand ? "Select a model" : "Select brand first"}</option>
            {modelsForSelectedBrand.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Price Range</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              className="w-full p-2 border rounded-md"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              min="1"
            />
            <span className="text-gray-600">to</span>
            <input
              type="number"
              className="w-full p-2 border rounded-md"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              max="10000000"
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="w-full bg-red-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-red-600 transition"
        >
          <AiOutlineSearch /> Search
        </button>
      </div>
    </div>
  );
};

export default FilterBox;
