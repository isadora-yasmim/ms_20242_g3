import React from "react";
import "./randomfilms.css";

function Randomfilms() {
  return (
    <div className="randomfilms">
      <div className="imagemdefundorandom"></div>
      <img
        src="https://i.ibb.co/7GtKkQs/aleatorio-icon.png"
        alt="Semelhante aos filmes selecionados"
        className="randomIcon"
      />
      <div className="tituloAleatorio">
        <i className="aleatorioTexto">
          <p>
            Recomendação <br /> Aleatória
          </p>
        </i>
      </div>
      <div className="descricaoAleatorio">
        <i className="txtDescricaoAleatorio">
          Sua oportunidade de descobrir novos filmes surpreedentes.
        </i>
      </div>
    </div>
  );
}

export default Randomfilms;
