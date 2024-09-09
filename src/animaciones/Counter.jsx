import React, { useEffect, useState } from 'react';
import './Counter.css'; // Importa los estilos CSS

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 100 ? prevCount + 1 : 100));
    }, 10); // Incrementa cada 20ms

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className="counter">
      <span className="count">{count}</span>
    </div>
  );
};

export default Counter;
