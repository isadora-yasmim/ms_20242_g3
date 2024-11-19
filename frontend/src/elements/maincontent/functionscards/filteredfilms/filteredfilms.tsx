import React from "react";
import "./filteredfilms.css";
import { Link } from 'react-router-dom'

function Filteredfilms() {
  return (
    <Link to="/filmes-filtros">
    <div className="filteredfilms">
      <div className="imagemdefundofiltered"></div>
      <img
        src="https://i.ibb.co/L8gDt55/Filtros-icon.png"
        alt="Semelhante aos filmes selecionados"
        className="filtroIcon"
      />
      <div className="tituloFiltro">
        <i className="filtroTextoTitulo">
          <p>Filtre Seus Gostos</p>
        </i>
      </div>
      <div className="descricaofiltro">
        <i className="txtDescricaofiltro">
          Adicione filtros para encontrar filmes do jeito que você gosta!
        </i>
      </div>
    </div>
    </Link>
  );
}

export default Filteredfilms;