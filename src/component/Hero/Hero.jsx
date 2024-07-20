import React from "react";
import styles from "./Hero.module.css";
import { Button } from "@mui/material";
import doctorImg from "../../assets/images/doctorImg.png";

const Hero = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftHeading}>
        <p style={{ fontWeight: "bolder" }}>Skip the travel! Find Online</p>
        <h1 className={styles.heroText}>
          Medical <span className={styles.heroSpan}>Centers</span>
        </h1>
        <div className={styles.bottomHead}>
          <p>
            Connect instantly with a 24*7 specialist or choose to
            <br />
            video visit a particular doctor
          </p>
        </div>
        <div className={styles.heroHeadBtn}>
          <Button variant="contained" color="primary">
            Find Centers
          </Button>
        </div>
      </div>
      <div className={styles.heroImg}>
        <img src={doctorImg} alt="Doctor" />
      </div>
    </div>
  );
};

export default Hero;
