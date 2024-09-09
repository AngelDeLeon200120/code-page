import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><img src="https://code.com.gt/wp-content/uploads/2024/04/CODE-01.svg" alt="CODE-01" /></div>
      <ul className="navbar-menu">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#about">Acerca</a></li>
        <li className="navbar-item"><a href="#services">Servicios</a></li>
        <li className="navbar-item"><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
