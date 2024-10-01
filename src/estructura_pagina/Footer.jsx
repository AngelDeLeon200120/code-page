import React from "react";
import "./estilos/footer.css"; // Aquí colocarás los estilos
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
const Footer = () => {
  const year = new Date().getFullYear(); // Obtener el año actual

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/codegt/",
      icon: <FaFacebook />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/codecryptomarketing/",
      icon: <FaInstagram />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/codegt",
      icon: <FaLinkedin />,
    },
  ];

  const footerLinks = [
    { name: "Inicio", url: "/" },
    { name: "Sobre Nosotros", url: "/about" },
    { name: "Servicios", url: "/services" },
    { name: "Contacto", url: "/contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-img">
        <img
            src="https://code.com.gt/wp-content/uploads/2024/04/logo-blanco-01-2.svg"
            alt="CODE-01"
          />
        </div>
        {/* Sección de enlaces */}
        <div className="footer-links">
          <div className="footer-links_direccion_telefono">
            <div className="footer-links_direccion">
              <BsBuildingsFill />
              <p>Vía 4 1-00 zona 4. Edificio Campus Tec I. Oficina 601</p>
            </div>
            <div className="footer-links_telefono">
            <BsFillTelephoneFill />
            <p>+502 30338063</p>
            </div>
          </div>
        </div>

        {/* Sección de redes sociales */}
        <div className="footer-social">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{social.icon}</span>
            </a>
          ))}
        </div>       
      </div>
       {/* Derechos reservados */}
       <div className="footer-rights">
          <p>&copy; {year} CODE</p>
        </div>
    </footer>
  );
};

export default Footer;
