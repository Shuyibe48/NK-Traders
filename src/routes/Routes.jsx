import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import SingleCarListings from "../pages/CarListings/SingleCarListings";
import MainLayout from "../layout/MainLayout";
import AddCars from "../pages/Dashboard/AddCars";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/car-listings/:id",
        element: <SingleCarListings />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/dashboard-overview",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/add-cars",
        element: <AddCars />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);
