import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./elements/maincontent/title/Homepage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RandomFilmsPage from "./randomFilmsPage/RandomFilmsPage";
import RandomFilmsPage3 from "./randomFilmsPage3/RandomFilmsPage3";
import RandomFilmsPage5 from "./randomFilmsPage5/RandomFilmsPage5";
import RandomFilmsPage6 from "./randomFilmsPage6/RandomFilmsPage6";


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
        <Route path="/randomFilmsPage3" element={<RandomFilmsPage3 />} />
        <Route path="/randomFilmsPage5" element={<RandomFilmsPage5 />} />
        <Route path="/randomFilmsPage6/:FilmId" element={<RandomFilmsPage6 />} />

      </Routes>
    </Router>
  </React.StrictMode>
);
