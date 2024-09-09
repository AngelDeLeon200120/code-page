import { useState } from "react";
import "./App.css";
import Overlay from "./animaciones/Overlay";
import Navbar from "./estructura_pagina/Navbar";
import Main from "./estructura_pagina/Main";

function App() {


  return (
    <div className="contenedor">
      <Navbar />
      <Main />
      <Overlay />
    </div>
  );
}

export default App;
