import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const cars = [
  {
    id: 1,
    name: "TOYOTA ALLION",
    price: "NEGOTIABLE",
    location: "Konabari",
    images: 6,
    imgUrl:
      "https://m.atcdn.co.uk/a/media/w480h360/252744cf717949efab4007b2957e6d1c.jpg",
  },
  {
    id: 2,
    name: "TOYOTA AQUA",
    price: "BDT 1,950,000",
    location: "Konabari",
    images: 7,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTcmsZ37kV5Y-YMku8QqVJAuAVuXSwi1J0FvjuznModRkMQD54zEDef2iWH23eeaumGc&usqp=CAU",
  },
  {
    id: 3,
    name: "TOYOTA AXIO",
    price: "BDT 1,850,000",
    location: "Konabari",
    images: 5,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqM6-kDqDFzXULuWVQgey9GloQeV0loQrWw&s",
  },
  {
    id: 4,
    name: "TOYOTA COROLLA CROSS Z 2023",
    price: "BDT 1,150,000",
    location: "Konabari",
    images: 6,
    imgUrl:
      "https://media.istockphoto.com/id/597261528/photo/shiny-car-for-sale-in-summer-weather.jpg?s=612x612&w=0&k=20&c=chAiEGsbS219CqTSds9v6W2drJCdwVqnIau4HJMJSok=",
  },
  {
    id: 5,
    name: "TOYOTA COROLLA 2023",
    price: "BDT 1,220,000",
    location: "Konabari",
    images: 7,
    imgUrl:
      "https://www.motortrend.com/uploads/sites/5/2014/10/2012-Honda-Accord-SE-sedan-front-three-quarter.jpg",
  },
];

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

const FilterBox = ({ onFilterChange }) => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    onFilterChange({ brand, model, minPrice, maxPrice });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-6 max-w-3xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Select Brand</option>
          {Object.keys(brandModelMapping).map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>

        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          disabled={!brand}
          className="p-2 border rounded"
        >
          <option value="">Select Model</option>
          {(brandModelMapping[brand] || []).map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="p-2 border rounded"
        />
      </div>

      <button
        onClick={handleSearch}
        className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 flex items-center justify-center gap-2"
      >
        <AiOutlineSearch /> Search
      </button>
    </div>
  );
};

const CarCard = ({ car }) => (
  <Link
    to={`/car-listings/${car.id}`}
    className="bg-white rounded-lg shadow-md overflow-hidden"
  >
    <img src={car.imgUrl} alt={car.name} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h2 className="font-bold text-sm">{car.name}</h2>
      <p className="text-red-500 text-sm">{car.price}</p>
      <p className="text-gray-500 text-xs">📍 {car.location}</p>
    </div>
  </Link>
);

const CarListingPage = () => {
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 4;

  const filteredCars = cars.filter((car) => {
    const price = parseInt(car.price.replace(/[^\d]/g, "")) || 0;
    return (
      (!filters.brand ||
        car.name.toLowerCase().includes(filters.brand.toLowerCase())) &&
      (!filters.model ||
        car.name.toLowerCase().includes(filters.model.toLowerCase())) &&
      (!filters.minPrice || price >= parseInt(filters.minPrice)) &&
      (!filters.maxPrice || price <= parseInt(filters.maxPrice))
    );
  });

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const indexOfLast = currentPage * carsPerPage;
  const indexOfFirst = indexOfLast - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirst, indexOfLast);

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Car Listings</h2>

      <FilterBox onFilterChange={setFilters} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-red-500 text-white" : "bg-white"
            } border`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarListingPage;
