import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Complemento/Inicio";
import DataList from "./Datos/ListaDatos";
import DetalleDato from "./Datos/DetallesDato";
import About from "./Complemento/AcercaDe";
import Footer from "./Complemento/Footer";
import "./App.css";
import Header from "./Complemento/Header";

const App = () => {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
          <div class="container">
            <a class="navbar-brand" href="#">HOJA #9</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/data">Lista de Datos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/data/2012-3">Detalle de datos</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>    


        <div class="container">
          
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/data" element={<DataList />} />
              {/* Utiliza una ruta dinámica para los detalles */}
              <Route path="/data/:id" element={<DetalleDato />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>

        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
