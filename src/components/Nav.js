import React, { useState } from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <a href="/" className={styles.navLogo}>
          FutuNomics
        </a>
        <button className={styles.navToggle} onClick={toggleMenu}>
          <span className={styles.navToggleBar}></span>
          <span className={styles.navToggleBar}></span>
          <span className={styles.navToggleBar}></span>
        </button>
        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.show : ""}`}>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>
              Inicio
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/acerca" className={styles.navLink}>
              Acerca de
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/servicios" className={styles.navLink}>
              Servicios
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/contacto" className={styles.navLink}>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
