import axios from "axios";

const BASE_URL = "https://meddata-backend.onrender.com";

// **************** FetchState **********************
export const fetchStates = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/states`);
    console.log("API response for states:", response);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch states:", error);
    return [];
  }
};

// **************** FetchCities **********************
export const fetchCities = async (state) => {
  try {
    const response = await axios.get(`${BASE_URL}/cities/${state}`);
    console.log(`API response for cities of state ${state}:`, response);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch cities for state ${state}:`, error);
    return [];
  }
};

// **************** FetchMedicalCenter **********************
export const fetchMedicalCenters = async (state, city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/data?state=${state}&city=${city}`
    );
    console.log(
      `API response for medical centers in ${state}, ${city}:`,
      response
    );
    return response.data;
  } catch (error) {
    console.error(
      `Failed to fetch medical centers for state ${state} and city ${city}:`,
      error
    );
    return [];
  }
};

// import axios from "axios";

// const BASE_URL = "https://meddata-backend.onrender.com";

// // **************** FetchState **********************
// export const fetchStates = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/states`);
//     return response.data;
//   } catch (error) {
//     console.error("Failed to fetch states:", error);
//     return [];
//   }
// };
// // **************** FetchCities **********************

// export const fetchCities = async (state) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/cities/${state}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Failed to fetch cities for state ${state}:`, error);
//     return [];
//   }
// };
// // **************** FetchMedicalCenter **********************

// export const fetchMedicalCenters = async (state, city) => {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}/data?state=${state}&city=${city}`
//     );
//     return response.data;
//   } catch (error) {
//     console.error(
//       `Failed to fetch medical centers for state ${state} and city ${city}:`,
//       error
//     );
//     return [];
//   }
// };
