import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./estructura_pagina/Navbar.jsx";
import Footer from "./estructura_pagina/Footer.jsx";
import { What } from "./estructura_pagina/who_what_why/What.jsx";

createRoot(document.getElementById("root")).render(

  <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={ <App />} />
    <Route path="/what" element={ <What />} />
  </Routes>
  <Footer/>
</Router>
);
