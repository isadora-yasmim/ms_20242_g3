import React from "react";
import "./similarfilms.css";

function Similarfilms() {
  return (
    <div className="cardsimilarfilms">
      <div className="imagemdefundosimilar"></div>
      <img
        src="https://i.ibb.co/k0C2H34/Basedfilms-icon.png"
        alt="Filmes Similares"
        className="logo"
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
  );
}

export default Similarfilms;
