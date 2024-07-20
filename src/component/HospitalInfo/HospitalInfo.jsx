import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Typography, Button, Box } from "@mui/material";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { CiHospital1 } from "react-icons/ci";
import styles from "./HospitalInfo.module.css";
import AppointmentSlot from "../../component/AppointmentSlot/Appointment";

const HospitalInfo = ({ hospital }) => {
  const location = useLocation();
  const [showAppointmentSlot, setShowAppointmentSlot] = useState(false);

  const handleBookButtonClick = () => {
    setShowAppointmentSlot(true);

    const newAppointment = {
      hospitalName: hospital["Hospital Name"],
      city: hospital.City,
      state: hospital.State,
      department: hospital["Hospital Type"],
      rating: hospital["Hospital overall rating"],
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    const existingBookingsJSON = localStorage.getItem("appointmentDetails");
    let existingBookings = [];

    if (existingBookingsJSON) {
      try {
        const parsed = JSON.parse(existingBookingsJSON);
        existingBookings = Array.isArray(parsed) ? parsed : [parsed];
      } catch (error) {
        console.error("Error parsing existing bookings:", error);
      }
    }

    const updatedBookings = [...existingBookings, newAppointment];
    localStorage.setItem("appointmentDetails", JSON.stringify(updatedBookings));

    console.log("Booking saved:", newAppointment);
    console.log("All bookings:", updatedBookings);
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.card}>
        <Box className={styles.cardContent}>
          <Box className={styles.iconContainer}>
            <CiHospital1 className={styles.icon} size={50} />
          </Box>
          <Box className={styles.flexGrow}>
            <Typography variant="h6" className={styles.hospitalName}>
              {hospital["Hospital Name"]}
            </Typography>
            <Typography className={styles.location}>
              {hospital.City}, {hospital.State}
            </Typography>
            <Typography className={styles.department}>
              {hospital["Hospital Type"]}
            </Typography>
            {location.pathname !== "/mybooking" && (
              <Box className={styles.feeInfo}>
                <Typography className={styles.freeTag}>FREE</Typography>
                <Typography className={styles.fee}>
                  <span className={styles.oldFee}>₹500</span> Consultation fee
                  at clinic
                </Typography>
              </Box>
            )}
          </Box>
          <Box className={styles.flexColEnd}>
            {location.pathname !== "/findDoctor" && (
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Button>Time</Button>
                <Button>Date</Button>
              </Box>
            )}
            {location.pathname !== "/mybooking" && (
              <Box className={styles.bookBtn}>
                <Typography className={styles.availability}>
                  Available Today
                </Typography>
                <Button
                  variant="contained"
                  className={styles.bookButton}
                  onClick={handleBookButtonClick}
                >
                  Book FREE Center Visit
                </Button>
              </Box>
            )}
          </Box>
        </Box>
        <Box className={styles.rating}>
          <IoIosCheckmarkCircle className={styles.ratingIcon} size={16} />
          <Typography className={styles.ratingValue}>
            {hospital["Hospital overall rating"]}
          </Typography>
        </Box>
      </Box>
      {showAppointmentSlot && location.pathname !== "/mybooking" && (
        <AppointmentSlot />
      )}
    </Box>
  );
};

export default HospitalInfo;
