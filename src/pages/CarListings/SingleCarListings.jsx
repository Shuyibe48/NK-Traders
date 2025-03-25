import {
  AirVent,
  Bath,
  Bed,
  Calendar,
  Car,
  Fuel,
  Globe,
  HomeIcon,
  House,
  Square,
} from "lucide-react";
import Container from "../../components/shared/Container";
import { MdDriveEta, MdEngineering, MdEventAvailable } from "react-icons/md";

import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import ImageSlider from "../../components/slider/ImageSlider";
import { BiColor, BiEnvelope, BiLogoWhatsapp } from "react-icons/bi";
import { useState } from "react";

const SingleCarListings = () => {
  const [showMore, setShowMore] = useState(false);

  const images = [
    "https://i.abcnewsfe.com/a/f43853f3-9eaf-4048-9ae7-757332c5787e/mclaren-1-ht-gmh-240412_1712928561648_hpMain_16x9.jpg?w=992",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ283_sv05Lll5-pC5YU_FA70gM6lnR-jj1Kw&s",
    "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
    "https://www.autoshippers.co.uk/blog/wp-content/uploads/bugatti-centodieci.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUU_bp4Q_fNIuiquN9GMiww0MJaRvLYedo4gMkpBoCp47qVrnX93hRt6yNgxRco5q0h1M&usqp=CAU",
    "https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1707920217641.jpg",
  ];

  return (
    <div className="bg-[#F0F3F8] py-4">
      <Container>
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold">Cars</h1>
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt className="h-4 w-4" />
              <span>{"Empty"}</span>
            </div>
          </div>
        </div>
        {/* Image Slider */}
        <div>
          <ImageSlider images={images} />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-4">
          {/* Left Section */}
          <div className="lg:col-span-8 space-y-4">
            {/* Header Section */}
            <div className="flex justify-between items-center p-4 bg-white">
              <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                <span className="font-semibold">BDT</span>
                <span className="font-bold text-xl">368,367,56</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="space-y-2">
                  <BiLogoWhatsapp className="h-6 w-6 cursor-pointer" />
                  <FaPhoneAlt className="h-4 w-4 cursor-pointer" />
                  <BiEnvelope className="h-5 w-5 cursor-pointer" />
                </div>
                <div className="space-y-2 flex flex-col items-end">
                  <p>+8801621246585</p>
                  <p>+8801621246585</p>
                  <p>nktraders@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Vehicle Summary */}
            <div className="bg-white p-4 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  label: "Engine",
                  icon: <MdEngineering className="h-5 w-5" />,
                  value: "Turbo",
                },
                {
                  label: "Mileage",
                  icon: <Car className="h-5 w-5" />,
                  value: "95,847 Km",
                },
                {
                  label: "Color",
                  icon: <BiColor className="h-5 w-5" />,
                  value: "Black",
                },
                {
                  label: "Fuel Type",
                  icon: <Fuel className="h-5 w-5" />,
                  value: "Octan",
                },
                {
                  label: "Drive Type",
                  icon: <MdDriveEta className="h-5 w-5" />,
                  value: "Right",
                },
                {
                  label: "Gearbox",
                  icon: <Car className="h-5 w-5" />,
                  value: "Automatic",
                },
                {
                  label: "Year",
                  icon: <Calendar className="h-5 w-5" />,
                  value: "2011",
                },
                {
                  label: "Body Type",
                  icon: <Car className="h-5 w-5" />,
                  value: "Sedan",
                },
                {
                  label: "Air Con",
                  icon: <AirVent className="h-5 w-5" />,
                  value: "Yes",
                },
                {
                  label: "Condition",
                  icon: <Globe className="h-5 w-5" />,
                  value: "Used",
                },
                {
                  label: "AVAILABLE DATE",
                  icon: <MdEventAvailable className="h-5 w-5" />,
                  value: new Date().toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }),
                },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <div className="flex items-center gap-1">
                    {item.icon}
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-4">
              <h5 className="font-bold text-xl">Description</h5>

              <p className="mt-4 text-gray-700">
                Condition : Excellent <br />
                Car Name : Mitsubishi Lancer GLX Package <br />
                Model : 2011 <br />
                Registration : 2011 <br />
                Serial : 13 <br />
                Engine Capacity : 1300 cc <br />
                Transmission : Automatic <br />
                Color : Black
                {showMore && (
                  <>
                    <br />
                    Fuel System : Octane <br />
                    Mileage : 50,000 km <br />
                    Location : Dhaka, Bangladesh
                  </>
                )}
              </p>

              <button
                onClick={() => setShowMore(!showMore)}
                className="mt-2 text-blue-500 flex items-center"
              >
                {showMore ? "▲ Show less" : "▼ Show more"}
              </button>
            </div>

            {/* Sale Method */}
            <div className="bg-white p-4">
              <h5 className="font-semibold text-lg">Sale Method</h5>
              <ul className="text-gray-600 list-disc pl-5 mt-2">
                <li>Buyers visit the website and browse available cars.</li>
                <li>
                  If they like a car, they can contact the seller via WhatsApp,
                  phone call, or email.
                </li>
                <li>The buyer can request more details about the car.</li>
                <li>
                  After gathering the necessary information, the buyer visits
                  the given address to inspect the car in person.
                </li>
                <li>The buyer thoroughly checks the car's condition.</li>
                <li>
                  If satisfied, the transaction takes place directly between the
                  buyer and seller.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleCarListings;
