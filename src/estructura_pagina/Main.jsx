import React from "react";
import "./estilos/Main.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Main = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <main>
      <section>
        <motion.div
          className="scrolling"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.5 }}
          
        >
          <div className="scrolling-contenedor">
            <div className="scrolling-contenedor_texto">
              <div className="scrolling-contenedor_texto-titulo">
                <h1>Who</h1>
                <span>are we</span>
              </div>
              <p>
                Somos un equipo que se destaca por desafiar las normas de la
                industria tecnológica y digital. Nuestra constante búsqueda de
                lo diferente, lo innovador y lo exclusivo nos ha permitido
                colaborar con grandes marcas no solo de Guatemala, sino de todo
                el continente. Esta trayectoria nos ha llevado a construir un
                portafolio con marcas reconocidas a nivel mundial.
              </p>
            </div>
            <div className="scrolling-contenedor_img">
              <div className="profile-card">
                <div className="profile-image">
                  <img
                    src="https://code.com.gt/wp-content/uploads/2024/04/LION-2-codeai_side_view_of_a_a_3d_model_of_a_cyborg_male_lion_face_lay_0ac2dfa6-35dd-48b1-b442-f4185be119d0-scaled.jpg" // Reemplaza con la URL de la imagen
                    alt="Profile"
                  />
                </div>
              </div>
            </div>
            <div className="scrolling-contenedor_boton">
              <button>Solicitar Cotizacion</button>
            </div>
          </div>
        </motion.div>
      </section>
      <img
        src="https://code.com.gt/wp-content/uploads/2024/04/LION-2-codeai_side_view_of_a_a_3d_model_of_a_cyborg_male_lion_face_lay_0ac2dfa6-35dd-48b1-b442-f4185be119d0-scaled.jpg"
        alt="CODE-01"
      />
      hola como estas
      <img
        src="https://code.com.gt/wp-content/uploads/2024/04/LION-2-codeai_side_view_of_a_a_3d_model_of_a_cyborg_male_lion_face_lay_0ac2dfa6-35dd-48b1-b442-f4185be119d0-scaled.jpg"
        alt="CODE-01"
      />
      hola como estas
      <img
        src="https://code.com.gt/wp-content/uploads/2024/04/LION-2-codeai_side_view_of_a_a_3d_model_of_a_cyborg_male_lion_face_lay_0ac2dfa6-35dd-48b1-b442-f4185be119d0-scaled.jpg"
        alt="CODE-01"
      />
      hola como estas
      <img
        src="https://code.com.gt/wp-content/uploads/2024/04/LION-2-codeai_side_view_of_a_a_3d_model_of_a_cyborg_male_lion_face_lay_0ac2dfa6-35dd-48b1-b442-f4185be119d0-scaled.jpg"
        alt="CODE-01"
      />
      hola como estas
      <img
        src="https://code.com.gt/wp-content/uploads/2024/04/LION-2-codeai_side_view_of_a_a_3d_model_of_a_cyborg_male_lion_face_lay_0ac2dfa6-35dd-48b1-b442-f4185be119d0-scaled.jpg"
        alt="CODE-01"
      />
      hola como estas
    </main>
  );
};

export default Main;
