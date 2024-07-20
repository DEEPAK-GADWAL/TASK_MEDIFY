import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage/HomePage";
import FindDoctor from "./Pages/FindDoctor/FindDoctor"; // Ensure all imports are correct
// import HospitalPage from "./Pages/HospitalPage/HospitalPage";
// import MedicinesPage from "./Pages/MedicinesPage/MedicinesPage";
// import SurgeriesPage from "./Pages/SurgeriesPage/SurgeriesPage";
// import SoftwareForProviderPage from "./Pages/SoftwareForProviderPage/SoftwareForProviderPage";
// import FacilitiesPage from "./Pages/FacilitiesPage/FacilitiesPage";
import MyBooking from "../src/Pages/MyBooking/MyBooking";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "finddoctor", element: <FindDoctor /> },
      // { path: "hospital", element: <HospitalPage /> },
      // { path: "medicines", element: <MedicinesPage /> },
      // { path: "surgeries", element: <SurgeriesPage /> },
      // { path: "softwareforprovidor", element: <SoftwareForProviderPage /> },
      // { path: "facilities", element: <FacilitiesPage /> },
      { path: "mybookings", element: <MyBooking /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
