import React from "react";
import "./similarfilms.css";
import { Link } from 'react-router-dom';

function Similarfilms() {
  return (
    <Link to="/filmes-similares">
    <div className="cardsimilarfilms">
      <div className="imagemdefundosimilar"></div>
      <img
        src="https://i.ibb.co/k0C2H34/Basedfilms-icon.png"
        alt="Filmes Similares"
        className="logohome"
      />
      <div className="tituloSimilar">
        <i className="similarTexto">
          <p>Recomendação por Filmes Similares</p>
        </i>
      </div>
      <div className="descricaoSimilar">
        <i className="txtDescricaoSimilar">
          Use filmes que você ama para achar filmes que você vai Adorar.
        </i>
      </div>
    </div>
    </Link>
  );
}

export default Similarfilms;
