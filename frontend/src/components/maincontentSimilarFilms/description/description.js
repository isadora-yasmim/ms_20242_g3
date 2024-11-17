import React from "react";
import "./description.css";

function Description() {
  return (
    <div className="description">
      <div className="descriptionSimilar">
        <i className="descriptionTexto">
          <p className="texto">Escolha um filme e nós te recomendaremos outros parecidos</p>
        </i>
      </div>
    </div>
  );
}

export default Description;