// Footer.jsx
import React from 'react';
import style from './Footer.module.css'; // Importa el archivo CSS
import { FaInstagram, FaLinkedinIn, FaFacebook } from 'react-icons/fa'; // Importa iconos de react-icons


function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <p className={style.copyright}>&copy; {new Date().getFullYear()} Tu Nombre o Empresa. Todos los derechos reservados.</p>

        <div className={style.contactInfo}>
          <a href="mailto:tuemail@dominio.com">tuemail@dominio.com</a>
          <span> | </span>
          <a href="tel:+1234567890">+123 456 7890</a>
        </div>

        <div className={style.socialIcons}>
          <a href="https://www.instagram.com/tuusuario" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/tuusuario" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.facebook.com/tuPagina" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;