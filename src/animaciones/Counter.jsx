import React, { useEffect, useState } from "react";
import "./Counter.css"; // Importa los estilos CSS

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) =>
        prevCount < 100
          ? (document.body.style.overflow = 'hidden',prevCount + 1)
          : (document.body.style.overflow = 'auto',100)
      );
    }, 15); // Incrementa cada 20ms

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className="counter">
       <img className="code_img"
            src="https://code.com.gt/wp-content/uploads/2024/04/logo-blanco-01-2.svg"
            alt="CODE-01"
          />
      <span className="count">{count}</span>
    </div>
  );
};

export default Counter;
