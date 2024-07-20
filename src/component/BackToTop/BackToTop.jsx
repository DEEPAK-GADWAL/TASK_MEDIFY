import React, { useState, useEffect } from "react";
import { IoArrowUp } from "react-icons/io5";
import styles from "./BackToTop.module.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={styles.backToTop}>
      {isVisible && (
        <div onClick={scrollToTop} className={styles.button}>
          <IoArrowUp size={30} />
        </div>
      )}
    </div>
  );
};

export default BackToTop;
