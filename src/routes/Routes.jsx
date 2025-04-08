import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import SingleCarListings from "../pages/CarListings/SingleCarListings";
import MainLayout from "../layout/MainLayout";
import AddCars from "../pages/Dashboard/AddCars";
import ManageCars from "../pages/Dashboard/ManageCars";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import Team from "../pages/Dashboard/Team";
import Setting from "../pages/Dashboard/Setting";
import Profile from "../pages/Dashboard/Profile";
import CarListingPage from "../pages/CarListings/CarListingPage";

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
        path: "/car-listings",
        element: <CarListingPage />,
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
      {
        path: "/dashboard/manage-cars",
        element: <ManageCars />,
      },
      {
        path: "/dashboard/manage-users",
        element: <ManageUsers />,
      },
      {
        path: "/dashboard/team",
        element: <Team/>,
      },
      {
        path: "/dashboard/setting",
        element: <Setting />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);
