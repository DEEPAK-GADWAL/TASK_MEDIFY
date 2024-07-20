import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navlinks.module.css";
import { Button } from "@mui/material";

const Navlinks = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/finddoctor"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Find Doctors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/hospital"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Hospital
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/medicines"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Medicines
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/surgeries"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Surgeries
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/softwareforprovidor"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Software for Provider
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/facilities"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Facilities
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mybookings"
            // className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <Button variant="contained" color="primary">
              My Booking
            </Button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navlinks;
