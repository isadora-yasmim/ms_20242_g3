import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./Homepage";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

document.body.style.backgroundColor = "#000000  "; /*Cor de Fundo do documento*/
document.head.innerHTML +=
  '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">';

root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
