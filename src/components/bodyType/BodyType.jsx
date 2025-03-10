import React, { useState } from "react";
import Container from "../shared/Container";

const bodyTypes = [
  {
    name: "4WD & SUVs",
    img: "https://garirbazar.s3.amazonaws.com/uploads/body_type/icon/3/slice10.png",
  },
  {
    name: "Sedan",
    img: "https://garirbazar.s3.amazonaws.com/uploads/body_type/icon/24/slice6.png",
  },
  {
    name: "Hatch",
    img: "https://garirbazar.s3.amazonaws.com/uploads/body_type/icon/23/slice3.png",
  },
  {
    name: "Station Wagons",
    img: "https://garirbazar.s3.amazonaws.com/uploads/body_type/icon/2/slice5.png",
  },
  {
    name: "Buses & Vans",
    img: "https://garirbazar.s3.amazonaws.com/uploads/body_type/icon/5/slice12.png",
  },
  {
    name: "Truck",
    img: "https://garirbazar.s3.amazonaws.com/uploads/body_type/icon/29/slice1.png",
  },
];

function BodyType() {
  const [selectedType, setSelectedType] = useState("");

  return (
    <div>
      <Container>
        <div className="py-10">
          {/* Title */}
          <h2 className="font-bold text-gray-700 mb-2 sm:text-xl">Body Type</h2>

          {/* Body Type List */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
        </div>
      </Container>
    </div>
  );
}

export default BodyType;
