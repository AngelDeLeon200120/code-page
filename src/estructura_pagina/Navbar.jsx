import React from "react";
import { FaBars } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import "./estilos/Navbar.css";
import  { useState, useEffect } from 'react';



const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

    // Función que maneja el scroll
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Si el usuario está haciendo scroll hacia abajo, esconder el navbar
        setShowNavbar(false);
      } else {
        // Si el usuario está haciendo scroll hacia arriba, mostrar el navbar
        setShowNavbar(true);
      }
      // Guardar la última posición del scroll
      setLastScrollY(window.scrollY);
    };
    useEffect(() => {
      // Agregar el event listener para el scroll
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        // Limpiar el event listener cuando se desmonta el componente
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]); // Solo vuelve a ejecutar el efecto si `lastScrollY` cambia
  
  function BARS() {

    let menu_movil =document.querySelector('.menu_movil')
    menu_movil.style.right = "0"; 
  }

  function CLOSE() {

    let menu_movil =document.querySelector('.menu_movil')
    menu_movil.style.right = "-100%";
  
    
  }

  return (
    <header>
      <nav className="navbar" style={{
      position: 'fixed',
      width: '100%',
      transition: 'top 0.3s',
      top: showNavbar ? '0' : '-70px', // Ajustar el valor según la altura del navbar
      backgroundColor: window.scrollY == 0 ? 'transparent' : 'rgba(0, 0, 0,0.9)' , // Puedes ajustar el color o el estilo del navbar
      color: 'white',
      padding: '10px',
      textAlign: 'center',
    }}>
        <div className="navbar-logo">
          <img
            src="https://code.com.gt/wp-content/uploads/2024/04/logo-blanco-01-2.svg"
            alt="CODE-01"
          />
          <img
            src="https://code.com.gt/wp-content/uploads/2024/04/slogan-01.svg"
            alt="CODE-01"
          />
        </div>

        <ul className="menu">
          <li>
            <a href="#0">
              <span>Who</span>
              <span>Who</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <span>What</span>
              <span>What</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <span>Why</span>
              <span>Why</span>
            </a>
          </li>{" "}
          <li>
            <a href="#0">
              <span>Where</span>
              <span>Where</span>
            </a>
          </li>{" "}
          <li>
            <a href="#0">
              <span>Write</span>
              <span>Write</span>
            </a>
          </li>{" "}
          <li>
            <a href="#0">
              <span>When</span>
              <span>What</span>
            </a>
          </li>{" "}
          <li>
            <a href="#0">
              <span>Fem</span>
              <span>Fem</span>
            </a>
          </li>
        </ul>
        <FaBars className="bars" onClick={BARS}/>
        <ul className="menu_movil">
        <IoMdCloseCircle className="close" onClick={CLOSE}/>
          <li>
            <a href="#0">
              <span>Who</span>
              {/* <span>Who</span> */}
            </a>
          </li>
          <li>
            <a href="#0">
              <span>What</span>
              {/* <span>What</span> */}
            </a>
          </li>
          <li>
            <a href="#0">
              <span>Why</span>
              {/* <span>Why</span> */}
            </a>
          </li>{" "}
          <li>
            <a href="#0">
              <span>Where</span>
              {/* <span>Where</span> */}
            </a>
          </li>{" "}
          <li>
            <a href="#0">
              <span>Write</span>
              {/* <span>Write</span> */}
            </a>
          </li>{" "}
          <li>
            <a href="#0">
              <span>When</span>
              {/* <span>What</span> */}
            </a>
          </li>{" "}
          <li>
            <a href="#0">
              <span>Fem</span>
              {/* <span>Fem</span> */}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
