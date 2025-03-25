import React from "react";
import { Link } from "react-router-dom";

const cars = [
  {
    id: 1,
    name: "TOYOTA ALLION",
    price: "NEGOTIABLE",
    location: "Konabari",
    images: 6,
    imgUrl: "https://m.atcdn.co.uk/a/media/w480h360/252744cf717949efab4007b2957e6d1c.jpg",
  },
  {
    id: 2,
    name: "TOYOTA AQUA",
    price: "BDT 1,950,000",
    location: "Konabari",
    images: 7,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTcmsZ37kV5Y-YMku8QqVJAuAVuXSwi1J0FvjuznModRkMQD54zEDef2iWH23eeaumGc&usqp=CAU",
  },
  {
    id: 3,
    name: "TOYOTA AXIO",
    price: "BDT 1,850,000",
    location: "Konabari",
    images: 5,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqM6-kDqDFzXULuWVQgey9GloQeV0loQrWw&s",
  },
  {
    id: 4,
    name: "TOYOTA COROLLA CROSS Z 2023",
    price: "BDT 1,150,000",
    location: "Konabari",
    images: 6,
    imgUrl: "https://media.istockphoto.com/id/597261528/photo/shiny-car-for-sale-in-summer-weather.jpg?s=612x612&w=0&k=20&c=chAiEGsbS219CqTSds9v6W2drJCdwVqnIau4HJMJSok=",
  },
  {
    id: 5,
    name: "TOYOTA COROLLA 2023",
    price: "BDT 1,220,000",
    location: "Konabari",
    images: 7,
    imgUrl: "https://www.motortrend.com/uploads/sites/5/2014/10/2012-Honda-Accord-SE-sedan-front-three-quarter.jpg",
  },
];

const CarListing = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-6 py-10">
        <h2 className="font-bold text-gray-700 mb-2 text-xl">Most recent cars for sale in Bangladesh</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {cars.map((car) => (
          <Link
            to={`/car-listings/1`}
            key={car.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={car.imgUrl}
              alt={car.name}
              className="w-full h-32 sm:h-40 object-cover"
            />
            <div className="p-2 sm:p-4">
              <h2 className="font-bold text-[0.60rem] sm:text-[0.75rem] md:text-sm lg:text-base">
                {car.name}
              </h2>
              <p className="text-gray-600 text-[0.50rem] sm:text-[0.65rem] md:text-xs mt-1">
                PRICE
              </p>
              <p className="text-red-500 font-bold text-[0.65rem] sm:text-[0.75rem] md:text-sm">
                {car.price}
              </p>
              <p className="text-gray-500 flex items-center text-[0.55rem] sm:text-[0.70rem] md:text-xs mt-1">
                📍 {car.location}
              </p>
            </div>
          </Link>
        ))}

        {/* View More Card */}
        <div className="bg-green-600 text-white rounded-lg flex flex-col justify-center items-center shadow-md p-4 sm:p-6">
          <div className="text-xl sm:text-2xl font-bold">🚗 NK</div>
          <p className="text-center mt-1 sm:mt-2 text-[0.60rem] sm:text-[0.75rem] md:text-sm">
            View all cars in Bangladesh
          </p>
          <button className="mt-2 sm:mt-4 text-red-500 text-lg sm:text-2xl bg-white p-2 rounded-full">
            ➜
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarListing;
