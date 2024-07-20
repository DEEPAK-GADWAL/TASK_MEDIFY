import React from "react";
import styles from "./Logo.module.css";
import { IoShieldCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className={styles.main}>
      <Link to="/">
        <div className={styles["icon-container"]}>
          <IoShieldCheckmark className={styles.icon} />
        </div>
      </Link>
      <span style={{ fontWeight: "bolder" }}>Medify</span>
    </div>
  );
};

export default Logo;
