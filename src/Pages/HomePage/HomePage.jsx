import React from "react";
import Hero from "../../component/Hero/Hero";
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
