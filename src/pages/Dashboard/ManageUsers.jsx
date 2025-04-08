import { useState } from "react";
import Container from "../../components/dashboard/shared/Container";

const demoUsers = [
  { id: 1, name: "Alice", email: "alice@example.com", createdAt: new Date(), updatedAt: new Date(), blocked: false },
  { id: 2, name: "Bob", email: "bob@example.com", createdAt: new Date(), updatedAt: new Date(), blocked: false },
  { id: 3, name: "Charlie", email: "charlie@example.com", createdAt: new Date(), updatedAt: new Date(), blocked: false },
  { id: 4, name: "David", email: "david@example.com", createdAt: new Date(), updatedAt: new Date(), blocked: false },
  { id: 5, name: "Eva", email: "eva@example.com", createdAt: new Date(), updatedAt: new Date(), blocked: false },
  { id: 6, name: "Fahim", email: "fahim@example.com", createdAt: new Date(), updatedAt: new Date(), blocked: false },
];

const ManageUsers = () => {
  const [users, setUsers] = useState(demoUsers);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editUser, setEditUser] = useState(null);
  const [confirmBlock, setConfirmBlock] = useState(null);

  const itemsPerPage = 4;
  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedUsers = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleBlock = (id) => {
    setUsers(prev => prev.map(user => user.id === id ? { ...user, blocked: !user.blocked } : user));
    setConfirmBlock(null);
  };

  const handleSaveEdit = () => {
    setUsers(prev => prev.map(user => user.id === editUser.id ? editUser : user));
    setEditUser(null);
  };

  return (
    <div className="mt-6">
      <Container>
        <div className="bg-white p-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
            <h2 className="text-xl font-semibold">Manage Users</h2>
            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border px-3 py-2  w-full md:w-1/3"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Email</th>
                  <th className="p-2 border">Created At</th>
                  <th className="p-2 border">Updated At</th>
                  <th className="p-2 border">Block</th>
                  <th className="p-2 border">Edit</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map(user => (
                  <tr key={user.id} className="text-center border-b">
                    <td className="p-2 border">{user.name}</td>
                    <td className="p-2 border">{user.email}</td>
                    <td className="p-2 border">{user.createdAt.toDateString()}</td>
                    <td className="p-2 border">{user.updatedAt.toDateString()}</td>
                    <td className="p-2 border">
                      <button
                        onClick={() => setConfirmBlock(user)}
                        className={`px-3 py-1  text-white ${user.blocked ? 'bg-red-500' : 'bg-gray-600'}`}
                      >
                        {user.blocked ? "Unblock" : "Block"}
                      </button>
                    </td>
                    <td className="p-2 border">
                      <button
                        onClick={() => setEditUser(user)}
                        className="px-3 py-1  bg-blue-600 text-white"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border  bg-gray-200 hover:bg-gray-300"
            >
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border  bg-gray-200 hover:bg-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      </Container>

      {/* Block Confirmation Modal */}
      {confirmBlock && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6  -md max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">
              {confirmBlock.blocked ? "Unblock" : "Block"} {confirmBlock.name}?
            </h3>
            <div className="flex justify-end gap-2">
              <button onClick={() => setConfirmBlock(null)} className="px-4 py-2 bg-gray-200 ">Cancel</button>
              <button onClick={() => handleBlock(confirmBlock.id)} className="px-4 py-2 bg-red-500 text-white ">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6  -md max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Edit User</h3>
            <input
              type="text"
              value={editUser.name}
              onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
              className="border px-3 py-2  w-full mb-3"
              placeholder="Name"
            />
            <input
              type="email"
              value={editUser.email}
              onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
              className="border px-3 py-2  w-full mb-3"
              placeholder="Email"
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setEditUser(null)} className="px-4 py-2 bg-gray-200 ">Cancel</button>
              <button onClick={handleSaveEdit} className="px-4 py-2 bg-blue-600 text-white ">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
