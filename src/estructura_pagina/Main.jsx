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
          style={{
            margin: " 0",
            padding: "20px",
            background: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          <img
            src="https://code.com.gt/wp-content/uploads/2024/04/LION-2-codeai_side_view_of_a_a_3d_model_of_a_cyborg_male_lion_face_lay_0ac2dfa6-35dd-48b1-b442-f4185be119d0-scaled.jpg"
            alt="CODE-01"
          />
          hola como estas
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
