import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardLayout = () => {
  const { isSidebarCollapsed } = useContext(AuthContext);
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <main
        className={`flex w-full flex-col ${
          isSidebarCollapsed ? "" : "md:pl-64"
        }`}
      >
        <Navbar />
        <div className="py-2 md:py-4 xl:py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
