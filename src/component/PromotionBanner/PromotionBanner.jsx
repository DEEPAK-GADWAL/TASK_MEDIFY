import React from "react";
import styles from "./PromotionBanner.module.css";

const PromotionBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>This World Oral Health Day,</div>
      <div className={styles.subheading}>
        Get a <span className={styles.highlight}>FREE </span> Appointment* with
        Top Dentists.
      </div>
      <button className={styles.button}>LIMITED PERIOD OFFER</button>
      <div className={styles.hashtag}>#BeSensitiveToOralHealth</div>
      <div className={styles.terms}>
        *T&C Apply - only consultation fee. Procedures / surgeries not covered
      </div>
    </div>
  );
};

export default PromotionBanner;
