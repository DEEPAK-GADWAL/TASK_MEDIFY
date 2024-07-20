import React from "react";
import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBrand}>
          <Logo className={styles.logo} />
          <div className={styles.footerSocialIcons}>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaPinterest />
          </div>
        </div>
        <div className={styles.footerLinks}>
          <ul>
            <li>
              <a href="#">➤ About Us</a>
            </li>
            <li>
              <a href="#">➤ Our Pricing</a>
            </li>
            <li>
              <a href="#">➤ Our Gallery</a>
            </li>
            <li>
              <a href="#">➤ Appointment</a>
            </li>
            <li>
              <a href="#">➤ Privacy Policy</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">➤ Orthology</a>
            </li>
            <li>
              <a href="#">➤ Neurology</a>
            </li>
            <li>
              <a href="#">➤ Dental Care</a>
            </li>
            <li>
              <a href="#">➤ Ophthalmology</a>
            </li>
            <li>
              <a href="#">➤ Cardiology</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">➤ About Us</a>
            </li>
            <li>
              <a href="#">➤ Our Pricing</a>
            </li>
            <li>
              <a href="#">➤ Our Gallery</a>
            </li>
            <li>
              <a href="#">➤ Appointment</a>
            </li>
            <li>
              <a href="#">➤ Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
