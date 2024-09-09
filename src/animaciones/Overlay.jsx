import React, { useEffect, useState } from 'react';
import './Overlay.css'; // Importa los estilos CSS
import Counter from './Counter';

const Overlay = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 2000); // Oculta la superposición después de 2 segundos
  }, []);

  return (
    <div className={`overlay-container ${isActive ? 'active' : ''}`}>
      <div className="overlay-transition">
        {<Counter/>}
      </div>
    </div>
  );
};

export default Overlay;
