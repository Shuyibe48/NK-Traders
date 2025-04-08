import { useState } from "react";
import Container from "../../components/dashboard/shared/Container";

const demoCars = [
  { id: 1, name: "Toyota", model: "Corolla", createdAt: new Date(), updatedAt: new Date(), blocked: false },
  { id: 2, name: "Honda", model: "Civic", createdAt: new Date(), updatedAt: new Date(), blocked: false },
  { id: 3, name: "Ford", model: "Mustang", createdAt: new Date(), updatedAt: new Date(), blocked: false },
  { id: 4, name: "Tesla", model: "Model 3", createdAt: new Date(), updatedAt: new Date(), blocked: false },
  { id: 5, name: "BMW", model: "X5", createdAt: new Date(), updatedAt: new Date(), blocked: false },
  { id: 6, name: "Audi", model: "A4", createdAt: new Date(), updatedAt: new Date(), blocked: false },
];

const ManageCars = () => {
  const [cars, setCars] = useState(demoCars);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editCar, setEditCar] = useState(null);
  const [confirmBlock, setConfirmBlock] = useState(null);

  const itemsPerPage = 4;
  const filtered = cars.filter(car => car.name.toLowerCase().includes(search.toLowerCase()));
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedCars = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleBlock = (id) => {
    setCars(prev => prev.map(car => car.id === id ? { ...car, blocked: !car.blocked } : car));
    setConfirmBlock(null);
  };

  const handleSaveEdit = () => {
    setCars(prev => prev.map(car => car.id === editCar.id ? editCar : car));
    setEditCar(null);
  };

  return (
    <div className="mt-6">
      <Container>
        <div className="bg-white p-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
            <h2 className="text-xl font-semibold">Manage Cars</h2>
            <input
              type="text"
              placeholder="Search by car name..."
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
                  <th className="p-2 border">Model</th>
                  <th className="p-2 border">Created At</th>
                  <th className="p-2 border">Updated At</th>
                  <th className="p-2 border">Block</th>
                  <th className="p-2 border">Edit</th>
                </tr>
              </thead>
              <tbody>
                {paginatedCars.map(car => (
                  <tr key={car.id} className="text-center border-b">
                    <td className="p-2 border">{car.name}</td>
                    <td className="p-2 border">{car.model}</td>
                    <td className="p-2 border">{car.createdAt.toDateString()}</td>
                    <td className="p-2 border">{car.updatedAt.toDateString()}</td>
                    <td className="p-2 border">
                      <button
                        onClick={() => setConfirmBlock(car)}
                        className={`px-3 py-1  text-white ${car.blocked ? 'bg-red-500' : 'bg-gray-600'}`}
                      >
                        {car.blocked ? "Unblock" : "Block"}
                      </button>
                    </td>
                    <td className="p-2 border">
                      <button
                        onClick={() => setEditCar(car)}
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
      {editCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6  -md max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Edit Car</h3>
            <input
              type="text"
              value={editCar.name}
              onChange={(e) => setEditCar({ ...editCar, name: e.target.value })}
              className="border px-3 py-2  w-full mb-3"
              placeholder="Car Name"
            />
            <input
              type="text"
              value={editCar.model}
              onChange={(e) => setEditCar({ ...editCar, model: e.target.value })}
              className="border px-3 py-2  w-full mb-3"
              placeholder="Model"
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setEditCar(null)} className="px-4 py-2 bg-gray-200 ">Cancel</button>
              <button onClick={handleSaveEdit} className="px-4 py-2 bg-blue-600 text-white ">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCars;
