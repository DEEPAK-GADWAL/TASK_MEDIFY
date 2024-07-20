import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../component/Logo/Logo";
import Navlinks from "../../component/Navlinks/Navlinks";
import { IoMenu, IoClose } from "react-icons/io5";
import styles from "./Navbar.module.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbarContainer}>
      <Logo />
      <div className={styles.desktopNavLinks}>
        <Navlinks onLinkClick={handleLinkClick} />
      </div>
      <div className={styles.mobileMenu} ref={menuRef}>
        <button onClick={toggleMenu} className={styles.menuButton}>
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
        {isMenuOpen && (
          <div className={styles.mobileNavLinks}>
            <Navlinks onLinkClick={handleLinkClick} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
