import React from "react";
import { FaBars } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import "./estilos/Navbar.css";





const Navbar = () => {

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
      <nav className="navbar">
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
