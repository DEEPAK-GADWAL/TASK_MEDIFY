import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FindByNameAndCity.module.css";
import { Button } from "@mui/material";
import {
  FaUserMd,
  FaHospital,
  FaClinicMedical,
  FaPills,
  FaAmbulance,
} from "react-icons/fa";
import { fetchStates, fetchCities } from "../API/Api";

const FindByNameAndCity = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getStates = async () => {
      try {
        const startTime = performance.now();
        const statesData = await fetchStates();
        const endTime = performance.now();
        console.log(`Fetched states in ${endTime - startTime} ms:`, statesData);
        setStates(statesData);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    getStates();
  }, []);

  const handleStateChange = async (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setSelectedCity(""); // Reset selected city when state changes
    try {
      const citiesData = await fetchCities(state);
      console.log("Fetched cities for state:", state, citiesData);
      setCities(citiesData);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSearch = () => {
    if (selectedState && selectedCity) {
      navigate(`/findDoctor?state=${selectedState}&city=${selectedCity}`);
    } else {
      alert("Please select both state and city.");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchSection}>
        <select
          className={styles.searchInput}
          onChange={handleStateChange}
          value={selectedState}
        >
          <option value="" disabled>
            Select State
          </option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <select
          className={styles.searchInput}
          onChange={handleCityChange}
          value={selectedCity}
          disabled={!selectedState}
        >
          <option value="" disabled>
            Select City
          </option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <Button
          variant="contained"
          color="primary"
          className={styles.searchButton}
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
      <h2 className={styles.title}>You may be looking for</h2>
      <div className={styles.iconBox}>
        <div className={styles.iconItem}>
          <FaUserMd className={styles.icon} />
          <p>Doctors</p>
        </div>
        <div className={styles.iconItem}>
          <FaClinicMedical className={styles.icon} />
          <p>Labs</p>
        </div>
        <div className={styles.iconItem}>
          <FaHospital className={styles.icon} />
          <p>Hospitals</p>
        </div>
        <div className={styles.iconItem}>
          <FaPills className={styles.icon} />
          <p>Medical Store</p>
        </div>
        <div className={styles.iconItem}>
          <FaAmbulance className={styles.icon} />
          <p>Ambulance</p>
        </div>
      </div>
      <div className={styles.carouselContainer}></div>
    </div>
  );
};

export default FindByNameAndCity;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./FindByNameAndCity.module.css";
// import { Button } from "@mui/material";
// import {
//   FaUserMd,
//   FaHospital,
//   FaClinicMedical,
//   FaPills,
//   FaAmbulance,
// } from "react-icons/fa";
// import { fetchStates, fetchCities } from "../API/Api";

// const FindByNameAndCity = () => {
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const getStates = async () => {
//       try {
//         const statesData = await fetchStates();
//         console.log("Fetched states:", statesData);
//         setStates(statesData);
//       } catch (error) {
//         console.error("Error fetching states:", error);
//       }
//     };

//     getStates();
//   }, []);

//   const handleStateChange = async (event) => {
//     const state = event.target.value;
//     setSelectedState(state);
//     setSelectedCity(""); // Reset selected city when state changes
//     try {
//       const citiesData = await fetchCities(state);
//       console.log("Fetched cities for state:", state, citiesData);
//       setCities(citiesData);
//     } catch (error) {
//       console.error("Error fetching cities:", error);
//     }
//   };

//   const handleCityChange = (event) => {
//     setSelectedCity(event.target.value);
//   };

//   const handleSearch = () => {
//     if (selectedState && selectedCity) {
//       navigate(`/findDoctor?state=${selectedState}&city=${selectedCity}`);
//     } else {
//       alert("Please select both state and city.");
//     }
//   };

//   return (
//     <div className={styles.mainContainer}>
//       <div className={styles.searchSection}>
//         <select
//           className={styles.searchInput}
//           onChange={handleStateChange}
//           value={selectedState}
//         >
//           <option value="" disabled>
//             Select State
//           </option>
//           {states.map((state) => (
//             <option key={state} value={state}>
//               {state}
//             </option>
//           ))}
//         </select>
//         <select
//           className={styles.searchInput}
//           onChange={handleCityChange}
//           value={selectedCity}
//           disabled={!selectedState}
//         >
//           <option value="" disabled>
//             Select City
//           </option>
//           {cities.map((city) => (
//             <option key={city} value={city}>
//               {city}
//             </option>
//           ))}
//         </select>
//         <Button
//           variant="contained"
//           color="primary"
//           className={styles.searchButton}
//           onClick={handleSearch}
//         >
//           Search
//         </Button>
//       </div>
//       <h2 className={styles.title}>You may be looking for</h2>
//       <div className={styles.iconBox}>
//         <div className={styles.iconItem}>
//           <FaUserMd className={styles.icon} />
//           <p>Doctors</p>
//         </div>
//         <div className={styles.iconItem}>
//           <FaClinicMedical className={styles.icon} />
//           <p>Labs</p>
//         </div>
//         <div className={styles.iconItem}>
//           <FaHospital className={styles.icon} />
//           <p>Hospitals</p>
//         </div>
//         <div className={styles.iconItem}>
//           <FaPills className={styles.icon} />
//           <p>Medical Store</p>
//         </div>
//         <div className={styles.iconItem}>
//           <FaAmbulance className={styles.icon} />
//           <p>Ambulance</p>
//         </div>
//       </div>
//       <div className={styles.carouselContainer}></div>
//     </div>
//   );
// };

// export default FindByNameAndCity;
