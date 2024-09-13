
import "./App.css";
import Overlay from "./animaciones/Overlay";
import Navbar from "./estructura_pagina/Navbar";
import Main from "./estructura_pagina/Main";
import React, { useEffect, useState } from 'react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   // Deshabilita el scroll mientras se carga
  //   document.body.style.overflow = 'auto';

  //   // Simula una carga (puedes reemplazarlo por una carga real)
  //   setTimeout(() => {
  //     setIsLoaded(true);
  //     // Vuelve el scroll al inicio y lo habilita una vez que se carga
  //     window.scrollTo(0, 0);
  //     document.body.style.overflow = 'hidden';
  //   }, 100); // 2 segundos de carga simulada
  // }, []);

  return (
    <div className="contenedor">
      <Navbar />
      <Main />
      <Overlay />
    </div>
  );
}

export default App;
