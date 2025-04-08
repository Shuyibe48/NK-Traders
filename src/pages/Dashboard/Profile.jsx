import { useState } from "react";
import Container from "../../components/dashboard/shared/Container";

const Profile = () => {
  // Dummy initial values (normally fetched from backend)
  const [profileImage, setProfileImage] = useState("/avatar.png");
  const [name, setName] = useState("Mohammad Apo");
  const [email, setEmail] = useState("apo@email.com");
  const [phone, setPhone] = useState("017XXXXXXXX");
  const [address, setAddress] = useState("Dhaka, Bangladesh");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    setSuccessMsg("Profile updated successfully!");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setSuccessMsg("New passwords do not match!");
      return;
    }
    setSuccessMsg("Password changed successfully!");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  return (
    <div className="mt-6">
      <Container>
        <div className="bg-white p-6 rounded shadow space-y-10">
          <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>

          {/* Profile Photo */}
          <div className="flex items-center gap-4">
            <img
              src={profileImage}
              alt="Profile"
              className="w-20 h-20 rounded-full border object-cover"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setProfileImage(URL.createObjectURL(e.target.files[0]))
              }
              className="block"
            />
          </div>

          {/* Profile Info Update */}
          <form
            onSubmit={handleProfileUpdate}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div className="col-span-2">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded"
              >
                Save Changes
              </button>
            </div>
          </form>

          {/* Password Change */}
          <form
            onSubmit={handlePasswordChange}
            className="space-y-4 max-w-md border-t pt-6"
          >
            <h3 className="text-lg font-semibold text-gray-700">
              Change Password
            </h3>

            <div>
              <label className="block font-medium">Old Password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded"
            >
              Change Password
            </button>
          </form>

          {/* Success Message */}
          {successMsg && (
            <p className="text-green-600 font-medium">{successMsg}</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Profile;
