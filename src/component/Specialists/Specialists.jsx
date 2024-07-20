import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Specialists.module.css";
import doctor1 from "../../assets/images/doctor1.png";
import doctor2 from "../../assets/images/doctor2.png";
import doctor3 from "../../assets/images/doctor3.png";
import doctor4 from "../../assets/images/doctor1.png";
import doctor5 from "../../assets/images/doctor2.png";
import doctor6 from "../../assets/images/doctor3.png";

const specialists = [
  {
    name: "Dr. Ahmad Khan",
    specialty: "Neurologist",
    image: doctor1,
  },
  {
    name: "Dr. Heena Sachdeva",
    specialty: "Orthopedics",
    image: doctor2,
  },
  {
    name: "Dr. Ankur Sharma",
    specialty: "Medicine",
    image: doctor3,
  },
  {
    name: "Dr. Ayesha Singh",
    specialty: "Cardiologist",
    image: doctor4,
  },
  {
    name: "Dr. Ravi Kumar",
    specialty: "Dermatologist",
    image: doctor5,
  },
  {
    name: "Dr. Sunita Mehta",
    specialty: "Pediatrician",
    image: doctor6,
  },
];

const Specialists = () => {
  return (
    <Container maxWidth="lg" className={styles.specialistsContainer}>
      <Typography variant="h4" align="center" className={styles.heading}>
        Our Medical Specialists
      </Typography>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        // navigation
        modules={[Navigation, Pagination]}
        breakpoints={{
          960: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 1,
          },
        }}
        className={styles.swiper}
      >
        {specialists.map((specialist, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <Box className={styles.specialistCard}>
              <Box className={styles.specialistImageWrapper}>
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className={styles.specialistImage}
                />
              </Box>
              <Typography variant="h6" align="center" className={styles.name}>
                {specialist.name}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                className={styles.specialty}
              >
                {specialist.specialty}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Specialists;
