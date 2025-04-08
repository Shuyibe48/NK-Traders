import { useState, useEffect } from "react";
import Container from "../../components/dashboard/shared/Container";

const Setting = () => {
  // Simulated existing values (in real case, fetch from API)
  const [existingLogo, setExistingLogo] = useState("/logo.png");
  const [existingBanner, setExistingBanner] = useState("/banner.jpg");
  const [existingBannerText, setExistingBannerText] = useState("Welcome to Our Awesome Site!");

  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);
  const [bannerText, setBannerText] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    // Load initial values (simulate fetch)
    setBannerText(existingBannerText);
  }, [existingBannerText]);

  const handleSubmit = (type) => {
    setSuccessMsg(`${type} updated successfully!`);
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  return (
    <div className="mt-6">
      <Container>
        <div className="bg-white p-6 rounded shadow space-y-10">
          <h2 className="text-2xl font-bold text-gray-800">Site Settings</h2>

          {/* Logo Section */}
          <div className="space-y-3">
            <h3 className="font-semibold">Current Logo</h3>
            <img
              src={logo ? URL.createObjectURL(logo) : existingLogo}
              alt="Logo Preview"
              className="w-32 h-32 object-contain border rounded"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setLogo(e.target.files[0])}
              className="block mt-2"
            />
            <button
              onClick={() => handleSubmit("Logo")}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save Logo
            </button>
          </div>

          {/* Banner Section */}
          <div className="space-y-3">
            <h3 className="font-semibold">Current Banner</h3>
            <img
              src={banner ? URL.createObjectURL(banner) : existingBanner}
              alt="Banner Preview"
              className="w-full max-w-xl h-auto border rounded"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setBanner(e.target.files[0])}
              className="block mt-2"
            />
            <button
              onClick={() => handleSubmit("Banner")}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save Banner
            </button>
          </div>

          {/* Banner Text Section */}
          <div className="space-y-3 max-w-xl">
            <h3 className="font-semibold">Banner Text</h3>
            <input
              type="text"
              value={bannerText}
              onChange={(e) => setBannerText(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              placeholder="Enter banner headline..."
            />
            <button
              onClick={() => {
                setExistingBannerText(bannerText);
                handleSubmit("Banner Text");
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
            >
              Update Text
            </button>
          </div>

          {/* Success Message */}
          {successMsg && (
            <p className="text-green-600 font-medium">{successMsg}</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Setting;
