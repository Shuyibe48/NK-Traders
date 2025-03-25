import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import Container from "../../components/dashboard/shared/Container";
import UploadWidget from "../../components/UploadWidget/UploadWidget";
import baseUrl from "../../api/baseUrl";

const AddCars = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [filteredModels, setFilteredModels] = useState([]);

  // ব্র্যান্ড এবং তাদের মডেল ডাটা
  const carData = {
    Toyota: ["Corolla", "Camry", "RAV4"],
    Honda: ["Civic", "Accord", "CR-V"],
    Mitsubishi: ["Lancer", "Pajero", "Outlander"],
    BMW: ["X5", "M3", "320i"],
    Ford: ["Focus", "Mustang", "F-150"],
    Audi: ["A3", "A4", "Q5"],
  };

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    setSelectedBrand(brand);
    setFilteredModels(carData[brand] || []);
  };

  // ফর্ম সাবমিশন হ্যান্ডলার
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputs = Object.fromEntries(formData);
    setLoading(true);

    try {
      const res = await baseUrl.post(`/cars/create-car/`, {
        car: {
          brand: inputs.brand,
          model: inputs.model,
          registration: inputs.registration,
          serial: inputs.serial,
          engineCapacity: inputs.engineCapacity,
          transmission: inputs.transmission,
          fuelType: inputs.fuelType,
          mileage: inputs.mileage,
          color: inputs.color,
          driveType: inputs.driveType,
          airConditioning: inputs.airConditioning,
          condition: inputs.condition,
          location: inputs.location,
          availableDate: new Date(),
          images: images,
        },
      });

      console.log(res);
      setLoading(false);
      window.alert("Car added successfully!");
      navigate(`/dashboard/car-list/`);
    } catch (error) {
      console.log(error.response.data.message);
      setLoading(false);
      window.alert("Something went wrong, please try again.");
    }
  };

  return (
    <div className="mt-6">
      <Container>
        <div className="bg-white p-6">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-2">
                {/* ব্র্যান্ড সিলেক্ট অপশন */}
                <div className="space-y-1">
                  <label htmlFor="brand" className="block font-semibold">
                    Brand
                  </label>
                  <select
                    className="w-full px-2 py-2 border outline-none"
                    name="brand"
                    id="brand"
                    required
                    onChange={handleBrandChange}
                  >
                    <option value="">Select Brand</option>
                    {Object.keys(carData).map((brand, index) => (
                      <option key={index} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>

                {/* মডেল সিলেক্ট অপশন (ডায়নামিক) */}
                <div className="space-y-1">
                  <label htmlFor="model" className="block font-semibold">
                    Model
                  </label>
                  <select
                    className="w-full px-2 py-2 border outline-none"
                    name="model"
                    id="model"
                    required
                    disabled={!selectedBrand}
                  >
                    <option value="">Select Model</option>
                    {filteredModels.map((model, index) => (
                      <option key={index} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="registration" className="block font-semibold">
                    Registration
                  </label>
                  <select
                    className="w-full px-2 py-2 border outline-none"
                    name="registration"
                    id="registration"
                    required
                  >
                    <option value="">Select Registration Year</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="serial" className="block font-semibold">
                    Serial
                  </label>
                  <select
                    className="w-full px-2 py-2 border outline-none"
                    name="serial"
                    id="serial"
                    required
                  >
                    <option value="">Select Serial Number</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="engineCapacity"
                    className="block font-semibold"
                  >
                    Engine Capacity
                  </label>
                  <select
                    className="w-full px-2 py-2 border outline-none"
                    name="engineCapacity"
                    id="engineCapacity"
                    required
                  >
                    <option value="">Select Engine Capacity</option>
                    <option value="1300">1300 cc</option>
                    <option value="1500">1500 cc</option>
                    <option value="2000">2000 cc</option>
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-2">
                <div className="space-y-1">
                  <label htmlFor="transmission" className="block font-semibold">
                    Transmission
                  </label>
                  <select
                    className="w-full px-2 py-2 border outline-none"
                    name="transmission"
                    id="transmission"
                    required
                  >
                    <option value="">Select Transmission</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label htmlFor="fuelType" className="block font-semibold">
                    Fuel Type
                  </label>
                  <select
                    className="w-full px-2 py-2 border outline-none"
                    name="fuelType"
                    id="fuelType"
                    required
                  >
                    <option value="">Select Fuel Type</option>
                    <option value="Octane">Octane</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="mileage" className="block font-semibold">
                    Mileage
                  </label>
                  <select
                    className="w-full px-2 py-2 border outline-none"
                    name="mileage"
                    id="mileage"
                    required
                  >
                    <option value="">Select Mileage</option>
                    <option value="10000">10,000 km</option>
                    <option value="20000">20,000 km</option>
                    <option value="50000">50,000 km</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="color" className="block font-semibold">
                    Color
                  </label>
                  <select
                    className="w-full px-2 py-2 border outline-none"
                    name="color"
                    id="color"
                    required
                  >
                    <option value="">Select Color</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="condition" className="block font-semibold">
                    Condition
                  </label>
                  <select
                    className="w-full px-2 py-2 border outline-none"
                    name="condition"
                    id="condition"
                    required
                  >
                    <option value="">Select Condition</option>
                    <option value="New">New</option>
                    <option value="Used">Used</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <div className="p-2 border mt-4">
              <UploadWidget
                uwConfig={{
                  cloudName: "drvj2jdcs",
                  uploadPreset: "realestate",
                  multiple: true,
                  folder: "cars",
                }}
                setState={setImages}
              />
            </div>

            {/* Description */}
            <div className="bg-white mt-6">
              <h5 className="font-bold text-xl">Description</h5>
              <textarea
                className="w-full px-2 py-2 border outline-none mt-2"
                name="description"
                id="description"
                rows="5"
                placeholder="Add car description..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#264AA1] text-white py-2 mt-4 font-semibold"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin mx-auto" />
              ) : (
                "Add Car"
              )}
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddCars;
