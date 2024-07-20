import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import HospitalInfo from "../../component/HospitalInfo/HospitalInfo";
import PromotionBanner from "../../component/PromotionBanner/PromotionBanner";
import styles from "./FindDoctor.module.css";

const FindDoctor = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const state = params.get("state");
  const city = params.get("city");

  const [hospitalData, setHospitalData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
        setHospitalData(response.data);
      } catch (error) {
        console.error("Error fetching hospital data:", error);
      }
    };

    if (state && city) {
      fetchData();
    }
  }, [state, city]);

  return (
    <div className={styles.container}>
      <div className={styles.hospitalContainer}>
        {hospitalData.length > 0 ? (
          hospitalData.map((hospital) => (
            <HospitalInfo key={hospital["Provider ID"]} hospital={hospital} />
          ))
        ) : (
          <p>No hospital data found for the selected state and city.</p>
        )}
      </div>
      <div className={styles.bannerContainer}>
        <PromotionBanner />
      </div>
    </div>
  );
};

export default FindDoctor;
