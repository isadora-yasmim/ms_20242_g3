import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./elements/maincontent/title/Homepage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RandomFilmsPage from "./randomFilmsPage/RandomFilmsPage";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

document.body.style.backgroundColor = "#000000  "; /*Cor de Fundo do documento*/
document.head.innerHTML +=
  '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">';

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/random_films" element={<RandomFilmsPage />} />
        <Route path="/similar_films" element={<RandomFilmsPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
