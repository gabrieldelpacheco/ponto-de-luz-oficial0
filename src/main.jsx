import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

//Importação de rotas//
import VozNoSilencio from "./pages/VozNoSilencio";
import AindaExisteLuz from "./pages/AindaExisteLuz";
import DepoisDaTempestade from "./pages/DepoisDaTempestade";

import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css";

import App from "./App.jsx";

createRoot(
  document.getElementById("root")
).render(
  <StrictMode>
    <HashRouter>

      <Routes>

        <Route
          path="/"
          element={<App />}
        />

  <Route
    path="/voz-no-silencio"
    element={<VozNoSilencio />}
  />
  <Route
    path="/ainda-existe-luz"
    element={<AindaExisteLuz />}
  />
  <Route
    path="/depois-da-tempestade"
    element={<DepoisDaTempestade />}
  />

      </Routes>
      

    </HashRouter>
  </StrictMode>
);