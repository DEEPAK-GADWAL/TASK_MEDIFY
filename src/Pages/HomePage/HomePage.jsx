import React, { useState, useEffect } from "react";
import Hero from "../../component/Hero/Hero";
import CircularProgress from "@mui/material/CircularProgress";
import FindByStateAndCity from "../../component/FindBynameAndCity//FindByNameAndCity";
import Carousel from "../../component/carousel/Carousel";
import FindBySpecialisation from "../../component/FindBySpecialisation/FindBySpecialisation";
import PatientCaring from "../../component/PatientCaring/PatienCaring";
import BlogAndNews from "../../component/BlogAndNews/BlogAndNews";
import Faq from "../../component/FAQ/Faq";
import HappyCustomer from "../../component/happyCustomer/HappyCustomer";
import Download from "../../component/Download/Download";
import Footer from "../../component/Footer/Footer";
import Specialists from "../../component/Specialists/Specialists";
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const loadData = async () => {
      // Replace this with your actual data fetching logic
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <Hero />
      <FindByStateAndCity />
      <Carousel />
      <FindBySpecialisation />
      <Specialists />
      <PatientCaring />
      <BlogAndNews />
      <HappyCustomer />
      <Faq />
      {/* <Download /> */}
      {/* <Footer /> */}
    </div>
  );
};
export default HomePage;
