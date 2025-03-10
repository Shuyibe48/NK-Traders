import React, { useState } from "react";
import Container from "../shared/Container";

const bodyTypes = [
  {
    name: "Toyota",
    img: "https://garirbazar.s3.amazonaws.com/uploads/brand/icon/46/buy-cars-toyota.png",
  },
  {
    name: "Honda",
    img: "https://garirbazar.s3.amazonaws.com/uploads/brand/icon/241/buy-cars-honda.png",
  },
  {
    name: "Nissan",
    img: "https://garirbazar.s3.amazonaws.com/uploads/brand/icon/240/buy-cars-nissan.png",
  },
  {
    name: "Mitsubishi",
    img: "https://garirbazar.s3.amazonaws.com/uploads/brand/icon/32/buy-cars-mitsubishi.png",
  },
  {
    name: "Hyundai",
    img: "https://garirbazar.s3.amazonaws.com/uploads/brand/icon/19/buy-cars-hyundai.png",
  },
  {
    name: "Lexus",
    img: "https://garirbazar.s3.amazonaws.com/uploads/brand/icon/28/buy-cars-lexus.png",
  },
  {
    name: "Suzuki",
    img: "https://garirbazar.s3.amazonaws.com/uploads/brand/icon/45/buy-cars-suzuki.png",
  },
  {
    name: "Mazda",
    img: "https://garirbazar.s3.amazonaws.com/uploads/brand/icon/29/buy-cars-mazda.png",
  },
];

function TopBrand() {
  const [selectedType, setSelectedType] = useState("");

  return (
    <div>
      <Container>
        <div className="py-10">
          {/* Title */}
          <h2 className="font-bold text-gray-700 mb-2 sm:text-xl">Top Brand</h2>

          <div className="flex justify-center items-center flex-col gap-4 sm:gap-10">
            {/* Body Type List */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {bodyTypes.map((type) => (
                <div
                  key={type.name}
                  onClick={() => setSelectedType(type.name)}
                  className={`flex flex-col items-center gap-6 p-1 rounded-md cursor-pointer transition-all duration-300 ${
                    selectedType === type.name
                      ? "bg-rose-100 shadow-md"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <img src={type.img} alt={type.name} />
                  <p
                    className="text-blue-500 text-xs
                "
                  >
                    {type.name}
                  </p>
                </div>
              ))}
            </div>
            <button className="hover:bg-gray-700 hover:text-white text-black bg-gray-200 font-semibold  sm:px-6 sm:py-2 px-4 py-1 duration-200">
              See All Brands
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopBrand;
