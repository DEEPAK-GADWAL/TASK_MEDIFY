// import React from "react";
// import Navbar from "./component/Navbar/Navbar";
// import { Outlet } from "react-router-dom";
// import { StyledEngineProvider } from "@mui/material/styles";
// import TopBar from "./component/TopBar/TopBar";
// import Footer from "./component/Footer/Footer";
// import Download from "./component/Download/Download";

// const App = () => {
//   return (
//     <div>
//       <StyledEngineProvider injectFirst>
//         <TopBar />
//         <Navbar />
//         <Outlet />
//       </StyledEngineProvider>
//       <Download />
//       <Footer />
//     </div>
//   );
// };
// export default App;

import React, { createContext, useState, useEffect } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import TopBar from "./component/TopBar/TopBar";
import Footer from "./component/Footer/Footer";
import Download from "./component/Download/Download";
import {
  fetchStates,
  fetchCities,
  fetchMedicalCenters,
} from "./component/API/Api";

// Create the context
export const AppContext = createContext();

const App = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [medicalCenters, setMedicalCenters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const statesData = await fetchStates();
      setStates(statesData);

      if (statesData.length > 0) {
        const citiesData = await fetchCities(statesData[0].name); // Fetch cities for the first state as an example
        setCities(citiesData);

        if (citiesData.length > 0) {
          const medicalCentersData = await fetchMedicalCenters(
            statesData[0].name,
            citiesData[0].name
          );
          setMedicalCenters(medicalCentersData);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ states, cities, medicalCenters }}>
      <StyledEngineProvider injectFirst>
        <TopBar />
        <Navbar />
        <Outlet />
      </StyledEngineProvider>
      <Download />
      <Footer />
    </AppContext.Provider>
  );
};

export default App;
