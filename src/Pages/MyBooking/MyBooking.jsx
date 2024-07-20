import React from "react";
import styles from "./MyBooking.module.css";
import Bookings from "../../component/MyBooking/Bookings";
import PromotionBanner from "../../component/PromotionBanner/PromotionBanner";
function MyBooking() {
  return (
    <div className={styles.container}>
      <div className={styles.booking}>
        <Bookings />
      </div>
      <div className={styles.promotion}>
        <PromotionBanner />
      </div>
    </div>
  );
}

export default MyBooking;
