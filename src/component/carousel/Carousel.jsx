import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Carousel.module.css";
import carouselImg1 from "../../assets/images/carouselImg1.png";
import carouselImg2 from "../../assets/images/carouselImg2.png";
import carouselImg3 from "../../assets/images/carouselImg3.png";

const images = [
  carouselImg1,
  carouselImg2,
  carouselImg3,
  carouselImg1,
  carouselImg2,
  carouselImg3,
];

const Carousel = () => {
  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation
        modules={[Navigation, Pagination]}
        breakpoints={{
          600: {
            slidesPerView: 1,
          },
          960: {
            slidesPerView: 3,
          },
        }}
        className={styles.swiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className={styles.swiperImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
