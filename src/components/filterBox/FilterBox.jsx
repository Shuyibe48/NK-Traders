import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const brandModelMapping = {
  Toyota: [
    "Corolla",
    "Premio",
    "Allion",
    "Noah",
    "Axio",
    "Probox",
    "Aqua",
    "C-HR",
    "Harrier",
    "Hiace",
    "Fielder",
    "Prado",
    "Belta",
    "4Runner Hybrid",
    "Highlander Hybrid XLE FWD",
    "Corolla Cross",
    "Prius",
    "Camry",
    "RAV4",
    "Yaris",
    "Fortuner",
    "Land Cruiser",
    "Sienta",
    "Vitz",
    "Avanza",
    "Rush",
    "Hilux",
    "Voxy",
    "Esquire",
    "Alphard",
    "Vellfire",
    "Estima",
    "Wish",
    "Mark X",
    "Crown",
    "Supra",
    "86",
    "Mirai",
  ],
  Honda: [
    "Civic",
    "Accord",
    "CR-V",
    "Grace",
    "Vezel",
    "Airwave",
    "Fit",
    "Freed",
    "HR-V",
    "Insight",
    "Jazz",
    "City",
    "Brio",
    "Mobilio",
    "Odyssey",
    "Stepwgn",
    "Legend",
    "NSX",
  ],
  Mitsubishi: [
    "Lancer",
    "Pajero",
    "Outlander",
    "Pajero Sport",
    "Outlander PHEV",
    "Xpander",
    "Colt",
    "Mirage G4 Black Edition",
    "ASX",
    "Eclipse Cross",
    "Galant",
    "Grandis",
    "i-MiEV",
    "Delica",
    "Attrage",
  ],
  Nissan: [
    "X-Trail",
    "Ariya Platinum Plus",
    "Altima 2.5 SR",
    "Sentra SR Premium CVT",
    "Sunny",
    "Juke",
    "Pulsar",
    "Qashqai",
    "Pathfinder",
    "Murano",
    "Rogue",
    "Maxima",
    "Leaf",
    "Note",
    "Teana",
    "Sylphy",
    "Navara",
    "Patrol",
    "GT-R",
  ],
  Suzuki: [
    "WagonR",
    "Swift",
    "Alto",
    "Celerio",
    "Baleno",
    "Vitara",
    "Ertiga",
    "Ignis",
    "S-Cross",
    "Jimny",
    "SX4",
    "Kizashi",
    "XL7",
    "Carry",
  ],
  Ford: [
    "Focus",
    "Mustang",
    "F-150",
    "Mustang EcoBoost Fastback",
    "F-150 Lightning Platinum",
    "Ranger",
    "EcoSport",
    "Everest",
    "Escape",
    "Explorer",
    "Edge",
    "Fusion",
    "Bronco",
    "Maverick",
    "Expedition",
    "Transit",
  ],
  Audi: [
    "A3",
    "A4",
    "Q5",
    "A6",
    "A8",
    "Q3",
    "Q7",
    "Q8",
    "TT",
    "R8",
    "e-tron",
    "RS5",
    "RS7",
    "S3",
    "S4",
    "S5",
    "S6",
    "S7",
    "S8",
  ],
  BMW: [
    "X5",
    "M3",
    "320i",
    "4 Series M4 Competition Coupe",
    "3 Series",
    "5 Series",
    "7 Series",
    "X1",
    "X3",
    "X4",
    "X6",
    "X7",
    "Z4",
    "i3",
    "i8",
    "M5",
    "M8",
  ],
  Hyundai: [
    "Tucson",
    "Elantra",
    "Sonata",
    "Tucson Hybrid Limited AWD",
    "Tucson Plug In Hybrid SEL AWD",
    "Santa Fe",
    "Kona",
    "Venue",
    "Palisade",
    "Creta",
    "i10",
    "i20",
    "i30",
    "Accent",
    "Verna",
    "Nexo",
    "Ioniq",
    "Staria",
  ],
  Kia: [
    "Seltos",
    "Sportage",
    "Picanto",
    "Carens",
    "Carens Luxury Plus 1.5 Diesel 6 STR",
    "Sorento",
    "Soul",
    "Rio",
    "Ceed",
    "Stinger",
    "Telluride",
    "Niro",
    "Optima",
    "Carnival",
    "Mohave",
  ],
  Mercedes: [
    "C-Class",
    "E-Class",
    "GLC",
    "Sprinter Crew Van 4500 V6 Diesel RWD",
    "A-Class",
    "B-Class",
    "S-Class",
    "CLA",
    "CLS",
    "GLA",
    "GLB",
    "GLE",
    "GLS",
    "G-Class",
    "AMG GT",
    "V-Class",
  ],
  Chevrolet: [
    "Silverado",
    "Silverado 2500 HD High Country 4WD",
    "Malibu",
    "Cruze",
    "Equinox",
    "Traverse",
    "Tahoe",
    "Suburban",
    "Camaro",
    "Bolt EV",
    "Spark",
    "Trax",
    "Blazer",
    "Colorado",
    "Impala",
  ],
  Jeep: [
    "Grand Cherokee",
    "Grand Cherokee L Summit Reserve",
    "Wrangler",
    "Compass",
    "Renegade",
    "Cherokee",
    "Gladiator",
    "Patriot",
    "Commander",
    "Wagoneer",
  ],
  Renault: [
    "Triber",
    "Triber RXZ Easy R AMT",
    "Kwid",
    "Duster",
    "Captur",
    "Megane",
    "Clio",
    "Scenic",
    "Talisman",
    "Koleos",
    "Fluence",
    "Zoe",
    "Espace",
  ],
  Fiat: [
    "500X",
    "500X Yacht Club",
    "Panda",
    "Tipo",
    "Punto",
    "Bravo",
    "Linea",
    "Doblo",
  ],
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
