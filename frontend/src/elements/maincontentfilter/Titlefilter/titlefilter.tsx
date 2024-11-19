import React from "react";
import "./titleFilter.css";

function TitleFilter() {
  return (
    <div className="title">
      <div className="logoFiltro"></div>
      <img
        src="https://i.ibb.co/L8gDt55/Filtros-icon.png"
        alt="Filmes Filtro"
        className="logoFiltro"
      />
      <div className="tituloSimilar">
          <p className="conteudo">Filtre Seus Gostos</p>
      </div>
      
    </div>
  );
}

export default TitleFilter;