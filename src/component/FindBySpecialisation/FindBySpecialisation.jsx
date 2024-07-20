import React from "react";
import styles from "./FindBySpecialisation.module.css";
import {
  FaUserMd,
  FaHospital,
  FaClinicMedical,
  FaPills,
  FaAmbulance,
} from "react-icons/fa";
import { Button } from "@mui/material";
const FindBySpecialisation = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Find By Specialisation</h1>
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
      </div>
      <Button variant="contained" className={styles.viewAllBtn}>
        view all
      </Button>
    </div>
  );
};

export default FindBySpecialisation;
