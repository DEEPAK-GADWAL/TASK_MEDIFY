import React from "react";
import { FaHeart, FaHospital, FaVials, FaUserMd } from "react-icons/fa";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import styles from "./HappyCustomer.module.css";

const HappyCustomer = () => {
  return (
    <Container maxWidth="false" className={styles.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} mt={6}>
          <Typography variant="body1" color="#2aa8ff">
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "gray-800",
              fontWeight: "bold",
              marginBottom: 2,
              fontSize: "30px",
            }}
          >
            Our Families
          </Typography>
          <Typography sx={{ color: "gray-600", marginBottom: 2 }}>
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className={styles.cardContainer1}>
            <div className={styles.cardOne}>
              <FaHeart className={styles.icon1} />
              <Typography sx={{ margin: "10px 0 10px 0" }}>5000+</Typography>
              <Typography>Happy Patients</Typography>
            </div>
            <div className={styles.cardTwo}>
              <FaHospital className={styles.icon2} />
              <Typography sx={{ margin: "10px 0 10px 0" }}>5000+</Typography>
              <Typography>Hospitals</Typography>
            </div>
          </div>
          <div className={styles.cardContainer2}>
            <div className={styles.cardThree}>
              <FaVials className={styles.icon3} />
              <Typography sx={{ margin: "10px 0 10px 0" }}>5000+</Typography>
              <Typography>Laboratories</Typography>
            </div>
            <div className={styles.cardFour}>
              <FaUserMd className={styles.icon4} />
              <Typography sx={{ margin: "10px 0 10px 0" }}>5000+</Typography>
              <Typography>Expert Doctors</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default HappyCustomer;
