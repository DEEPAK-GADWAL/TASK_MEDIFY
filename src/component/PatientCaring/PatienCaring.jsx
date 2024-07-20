import React from "react";
import styles from "./PatientCaring.module.css";
import { FaPhone, FaStar } from "react-icons/fa6";
import patien1 from "../../assets/images/patient1.png";
import patien2 from "../../assets/images/patient2.png";

const PatientCaring = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.patienImg}>
        <div className={styles.consulation}>
          <FaPhone className={styles.phone} /> 
          <span style={{ fontWeight: "bolder" }}>Free Consultation</span>
          <p>consultation with the best</p>
        </div>
        <img className={styles.patien1} src={patien1} alt="patientimg" />
        <img className={styles.patien2} src={patien2} alt="patientimg" />
      </div>
      <div className={styles.headingText}>
        <p className={styles.topHead}> HELPING PATIENTS FROM AROUND THE GLOBE</p>
        <h1>
          Patient <span className={styles.topHead}>Caring</span>
        </h1>
        <p style={{ marginTop: "10px" }}>
          Our goals to deliver of care in courteous, respectful, and <br />
          compassionate manner, we hope you will allow us to care for you and
          <br />
          strive to be first and best choice for healthcare.
        </p>
        <div className={styles.caringPoint}>
          <ul>
            <li>
              <FaStar className={styles.bulletPoint} /> Stay Updated About Your
              Health
            </li>
            <li>
              <FaStar className={styles.bulletPoint} /> Check Your Results
              Online
            </li>
            <li>
              <FaStar className={styles.bulletPoint} /> Manage Your Appointments
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PatientCaring;
