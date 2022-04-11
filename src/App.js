import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Experiencia from "./Pages/Experiencia/Experiencia";
import Habilidades from "./Pages/Habilidades/Habilidades";
import Login from "./Pages/login/login";
import BarraNavegacion from "./Pages/Perfil/Navbar";
import Perfil from "./Pages/Perfil/Perfil";
import Form from "./Components/FormLogin";
import DefaultPage from "./Pages/DefaultPage";

function App() {
  //
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Login>
              <Form />
            </Login>
          }
        />
        <Route
          path="/perfil"
          element={
            <BarraNavegacion>
              <Perfil />
            </BarraNavegacion>
          }
        />
        <Route
          path="/experiencia"
          element={
            <BarraNavegacion>
              <Experiencia />
            </BarraNavegacion>
          }
        />
        <Route
          path="/habilidades"
          element={
            <BarraNavegacion>
              <Habilidades />
            </BarraNavegacion>
          }
        />
        <Route path="/*" element={<DefaultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
