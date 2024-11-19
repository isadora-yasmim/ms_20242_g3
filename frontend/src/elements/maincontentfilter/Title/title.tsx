import React from "react";
import "./title.css";

function Title() {
  return (
    <div className="title">
      <div className="logosimilar"></div>
      <img
        src="https://i.ibb.co/L8gDt55/Filtros-icon.png"
        alt="Filmes Similares"
        className="logo"
      />
      <div className="tituloSimilar">
          <p className="conteudo">Filtre Seus Gostos</p>
      </div>
      
    </div>
  );
}

export default Title;