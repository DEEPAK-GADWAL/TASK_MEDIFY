import React from "react";
import { Typography, Box } from "@mui/material";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { CiHospital1 } from "react-icons/ci";
import styles from "./Bookings.module.css";
import PromotionBanner from "../PromotionBanner/PromotionBanner";

const Bookings = () => {
  const storedAppointments = localStorage.getItem("appointmentDetails");
  let appointmentDetails = [];

  try {
    const parsedData = JSON.parse(storedAppointments);
    appointmentDetails = Array.isArray(parsedData) ? parsedData : [parsedData];
  } catch (error) {
    console.error("Error parsing appointment details:", error);
  }

  console.log("Appointments to display:", appointmentDetails);

  if (appointmentDetails.length === 0) {
    return <Typography>No appointment details found.</Typography>;
  }

  return (
    <Box className={styles.container}>
      <Box className={styles.gridWrapper}>
        {appointmentDetails.length > 0 && (
          <Box className={styles.cardPromotionWrapper}>
            <Box className={styles.card}>
              <Box className={styles.cardContent}>
                <Box className={styles.iconContainer}>
                  <CiHospital1 className={styles.icon} size={50} />
                </Box>
                <Box className={styles.flexGrow}>
                  <Typography variant="h6" className={styles.hospitalName}>
                    {appointmentDetails[0].hospitalName}
                  </Typography>
                  <Typography className={styles.location}>
                    {appointmentDetails[0].city}, {appointmentDetails[0].state}
                  </Typography>
                  <Typography className={styles.department}>
                    {appointmentDetails[0].department}
                  </Typography>
                </Box>
                <Box className={styles.flexColEnd}>
                  <Box className={styles.bookingDetails}>
                    <Typography className={styles.detailItem1}>
                      {appointmentDetails[0].date}
                    </Typography>
                    <Typography className={styles.detailItem2}>
                      {appointmentDetails[0].time}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.rating}>
                <IoIosCheckmarkCircle className={styles.ratingIcon} size={16} />
                <Typography className={styles.ratingValue}>
                  {appointmentDetails[0].rating}
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      <Box className={styles.otherAppointments}>
        {appointmentDetails.slice(1).map((appointment, index) => (
          <Box key={index} className={styles.card}>
            <Box className={styles.cardContent}>
              <Box className={styles.iconContainer}>
                <CiHospital1 className={styles.icon} size={50} />
              </Box>
              <Box className={styles.flexGrow}>
                <Typography variant="h6" className={styles.hospitalName}>
                  {appointment.hospitalName}
                </Typography>
                <Typography className={styles.location}>
                  {appointment.city}, {appointmentDetails[index].state}
                </Typography>
                <Typography className={styles.department}>
                  {appointment.department}
                </Typography>
              </Box>
              <Box className={styles.flexColEnd}>
                <Box className={styles.bookingDetails}>
                  <Typography className={styles.detailItem1}>
                    {appointment.date}
                  </Typography>
                  <Typography className={styles.detailItem2}>
                    {appointment.time}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className={styles.rating}>
              <IoIosCheckmarkCircle className={styles.ratingIcon} size={16} />
              <Typography className={styles.ratingValue}>
                {appointment.rating}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Bookings;
