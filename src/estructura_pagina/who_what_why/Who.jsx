import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../estilos/who.css";
import equipoIMG from "../../img/equipo.jpg";

const Who = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [Ver, setIVER] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });


  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
    const handleScroll = () => {
      // Si el usuario hace scroll hacia abajo, mostrar el texto
      if (window.scrollY >= 500) {
        setIsVisible(true);
      
      } else {
        // Si el usuario hace scroll hacia arriba, esconder el texto
        setIsVisible(false);
       
      }
      window.scrollY >= 1300 ? setIVER(true) : setIVER(false);
   
      // Actualizar la última posición del scroll
      setLastScrollY(window.scrollY);
    };

    // Agregar el event listener para el scroll
    window.addEventListener("scroll", handleScroll);

    console.log(window.scrollY);
    

    return () => {
      // Limpiar el event listener cuando el componente se desmonta
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, inView, lastScrollY]);

  return (
    <>
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
          <div className="overlay"></div>
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
            {/* <div className="scrolling-contenedor_img">
              <div className="profile-card">
                <img
                  src="https://code.com.gt/wp-content/uploads/2024/04/LION-2-codeai_side_view_of_a_a_3d_model_of_a_cyborg_male_lion_face_lay_0ac2dfa6-35dd-48b1-b442-f4185be119d0-scaled.jpg" // Reemplaza con la URL de la imagen
                  alt="Profile"
                />
              </div>
            </div> */}
            <div className="scrolling-contenedor_boton">
              <button className="boton">Solicitar Cotizacion</button>
            </div>
          </div>
        </motion.div>
      </section>

      <section>
        <div className="scroll-container">
          <div className={`text-container ${isVisible ? "visible" : "hidden"}`}>
            <div className="text-container_texto">
              <div className="container_texto-uno">
                <h2>We are</h2>
                <span>Social First</span>
                <p>
                  Esto significa que las redes sociales no son simplemente un
                  canal de comunicación adicional, sino el núcleo de nuestra
                  estrategia digital. Nos especializamos en crear experiencias y
                  contenidos que se adapten específicamente a los distintos
                  canales de redes sociales, maximizando así el compromiso y la
                  interacción con la audiencia.
                </p>
              </div>
            </div>
            <div className="container_texto-dos">
              <p style={{ marginLeft: "-35px" }}>PRINCIPIOS</p>
              <ul>
                <li>Comprensión profunda de las redes sociales.</li>
                <li>Somos Tiktok first</li>
                <li>Contenido altamente relevante y atractivo.</li>
                <li>Interacción activa y participativa.</li>
                <li>Personalización y segmentación.</li>
                <li>Anuncios que no parecen anuncios.</li>
                <li>Asosiación cinérgica del branding y del performance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>

        <div className={`contenedor_equipo ${Ver ? "visibleVER" : "hiddenVER"}`}>
         <div className="contenedor_equipo-titulo-texto">
         <div className="contenedor_equipo-titulo">
            <h3>Our team</h3>
          </div>
          <div className="contenedor_equipo-texto">
            <p>
              Somos un equipo curioso, inquieto y autodidacta, que
              constantemente busca innovar en cada una de nuestras áreas. Nos
              impulsa la pasión por el aprendizaje, la exploración y el
              descubrimiento de soluciones únicas que destacan en el mercado.
            </p>
            <p>
            Nos entusiasma hacer brillar a nuestros aliados, brindándoles el
            acompañamiento de un equipo comprometido con el éxito de su marca.
            </p>
          </div>
         </div>
          <div className="contenedor_equipo-img">
            <img src={equipoIMG} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Who;
