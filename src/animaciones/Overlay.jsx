import React, { useEffect, useState } from 'react';
import './Overlay.css'; // Importa los estilos CSS
import Counter from './Counter';

const Overlay = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
  

    // Simula una carga (puedes reemplazarlo por una carga real)
    setTimeout(() => {
      setIsLoaded(true);
      // Vuelve el scroll al inicio y lo habilita una vez que se carga
      window.scrollTo(0, 0);
      
    }, 100);
    setIsActive(true);
    setTimeout(() => setIsActive(false), 2000); // Oculta la superposición después de 2 segundos
  }, []);

  return (
    <div className={`overlay-container ${isActive ? 'active' : 'none'}`}>
      <div className="overlay-transition">
        {<Counter/>}
      </div>
    </div>
  );
};

export default Overlay;
