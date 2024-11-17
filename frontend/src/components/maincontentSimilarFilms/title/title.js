import React from "react";
import "./title.css";

function Title() {
  return (
    <div className="title">
      <div className="logosimilar"></div>
      <img
        src="https://i.ibb.co/k0C2H34/Basedfilms-icon.png"
        alt="Filmes Similares"
        className="logo"
      />
      <div className="tituloSimilar">
        <i className="similarTexto">
          <p className="conteudo">Recomendação por filmes similares</p>
        </i>
      </div>
      
    </div>
  );
}

export default Title;