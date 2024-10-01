
import "./App.css";
import Overlay from "./animaciones/Overlay";
import Navbar from "./estructura_pagina/Navbar";
import Main from "./estructura_pagina/Main";
import Footer from "./estructura_pagina/Footer";


function App() {


  return (
    <div className="contenedor">
     
      <Main />
      <Overlay />
  
    </div>
  );
}

export default App;
