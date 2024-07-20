import React from "react";
import styles from "./download.module.css";
import { Grid, Typography, Container, Box, Button } from "@mui/material";
import Iphone from "../../assets/images/iphone.png";
import PhoneNumberCode from "../PhoneNumberCode/PhoneNumberCode";
import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from "react-icons/io5";
import BackToTop from "../BackToTop/BackToTop";

function Download() {
  return (
    <Container
      maxWidth="false"
      sx={{ backgroundColor: "#ebf3fe", marginTop: "50px", minHeight: "600px" }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Box>
            <img className={styles.iphone} src={Iphone} alt="iPhone" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" className={styles.Btext}>
            Download the <br />
            <span className={styles.Ltext}>Medify</span> App
          </Typography>
          <Typography sx={{ marginTop: "5px" }}>
            Get the link to download the app
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "row" },
              alignItems: { xs: "center", sm: "center" },
              marginTop: "20px",
              gap: "10px",
            }}
          >
            <PhoneNumberCode />
            <Button
              sx={{
                marginLeft: { xs: 0, sm: "10px" },
                marginTop: { xs: "10px", sm: 0 },
              }}
              variant="contained"
              className={styles.Btn}
            >
              Send SMS
            </Button>
          </Box>
          <Box
            sx={{
              marginTop: "30px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: "10px",
            }}
          >
            <Button variant="contained" size="large" className={styles.Btn1}>
              <IoLogoGooglePlaystore /> google play
            </Button>
            <Button variant="contained" size="large" className={styles.Btn1}>
              <IoLogoAppleAppstore />
              App store
            </Button>
          </Box>
        </Grid>
      </Grid>
      <BackToTop />
    </Container>
  );
}

export default Download;
