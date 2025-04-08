import { useState } from "react";
import Container from "../../components/dashboard/shared/Container";

const demoAdmins = [
  { id: 1, name: "John Doe", email: "admin1@example.com", blocked: false },
  { id: 2, name: "Jane Smith", email: "admin2@example.com", blocked: true },
];

const Team = () => {
  const [admins, setAdmins] = useState(demoAdmins);
  const [searchTerm, setSearchTerm] = useState("");
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [confirmBlock, setConfirmBlock] = useState(null);
  const [confirmRemove, setConfirmRemove] = useState(null);

  const filteredAdmins = admins.filter(
    (admin) =>
      admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddAdmin = (e) => {
    e.preventDefault();
    setError("");

    if (newAdmin.password !== newAdmin.confirmPassword) {
      setError("Password and Confirm Password do not match!");
      return;
    }

    const newAdminData = {
      id: admins.length + 1,
      name: newAdmin.name,
      email: newAdmin.email,
      blocked: false,
    };

    setAdmins((prev) => [...prev, newAdminData]);
    setNewAdmin({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleBlockAdmin = (id) => {
    setAdmins((prev) =>
      prev.map((admin) =>
        admin.id === id ? { ...admin, blocked: !admin.blocked } : admin
      )
    );
    setConfirmBlock(null);
  };

  const handleRemoveAdmin = (id) => {
    setAdmins((prev) => prev.filter((admin) => admin.id !== id));
    setConfirmRemove(null);
  };

  return (
    <div className="mt-6">
      <Container>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Team Management</h2>

          {/* Add Admin Form */}
          <form onSubmit={handleAddAdmin} className="mb-6 space-y-4 max-w-md">
            <input
              type="text"
              placeholder="Full Name"
              value={newAdmin.name}
              onChange={(e) =>
                setNewAdmin({ ...newAdmin, name: e.target.value })
              }
              className="border px-3 py-2 rounded w-full"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={newAdmin.email}
              onChange={(e) =>
                setNewAdmin({ ...newAdmin, email: e.target.value })
              }
              className="border px-3 py-2 rounded w-full"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={newAdmin.password}
              onChange={(e) =>
                setNewAdmin({ ...newAdmin, password: e.target.value })
              }
              className="border px-3 py-2 rounded w-full"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={newAdmin.confirmPassword}
              onChange={(e) =>
                setNewAdmin({
                  ...newAdmin,
                  confirmPassword: e.target.value,
                })
              }
              className="border px-3 py-2 rounded w-full"
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add Admin
            </button>
          </form>

          {/* Search Field */}
          <div className="mb-4 max-w-md">
            <input
              type="text"
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border px-3 py-2 rounded w-full"
            />
          </div>

          {/* Admin List Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Email</th>
                  <th className="p-2 border">Status</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAdmins.map((admin) => (
                  <tr key={admin.id} className="text-center border-b">
                    <td className="p-2 border">{admin.name}</td>
                    <td className="p-2 border">{admin.email}</td>
                    <td className="p-2 border">
                      {admin.blocked ? "Blocked" : "Active"}
                    </td>
                    <td className="p-2 border space-x-2">
                      <button
                        onClick={() => setConfirmBlock(admin)}
                        className={`px-3 py-1 rounded text-white ${
                          admin.blocked ? "bg-green-600" : "bg-gray-600"
                        }`}
                      >
                        {admin.blocked ? "Unblock" : "Block"}
                      </button>
                      <button
                        onClick={() => setConfirmRemove(admin)}
                        className="px-3 py-1 rounded bg-red-600 text-white"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredAdmins.length === 0 && (
                  <tr>
                    <td colSpan="4" className="p-4 text-center text-gray-500">
                      No admins found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Container>

      {/* Confirm Modals */}
      {confirmBlock && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">
              {confirmBlock.blocked ? "Unblock" : "Block"}{" "}
              {confirmBlock.name}?
            </h3>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setConfirmBlock(null)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => handleBlockAdmin(confirmBlock.id)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {confirmRemove && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">
              Remove {confirmRemove.name}?
            </h3>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setConfirmRemove(null)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => handleRemoveAdmin(confirmRemove.id)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
